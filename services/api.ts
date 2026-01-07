
import { Question, Submission, ResponseIndicator, WellBeingLevel } from '../types';
import { QUIZ_DATA } from '../constants';
import { GoogleGenAI } from "@google/genai";
import { supabase } from './supabase';

const QUESTIONS_KEY = 'nit_gyanam_questions_v2';
const SUBMISSIONS_KEY = 'nit_gyanam_submissions_v2';

export const api = {
  fetchQuestions: async (): Promise<Question[]> => {
    if (supabase) {
      const { data, error } = await supabase.from('questions').select('*');
      if (!error && data && data.length > 0) return data;
    }
    const saved = localStorage.getItem(QUESTIONS_KEY);
    if (!saved) {
      localStorage.setItem(QUESTIONS_KEY, JSON.stringify(QUIZ_DATA));
      return QUIZ_DATA;
    }
    return JSON.parse(saved);
  },

  saveQuestions: async (questions: Question[]) => {
    if (supabase) {
      await supabase.from('questions').upsert(questions);
    }
    localStorage.setItem(QUESTIONS_KEY, JSON.stringify(questions));
  },

  submitAssessment: async (submission: Submission) => {
    // 1. Sync to Supabase Cloud
    if (supabase) {
      try {
        const { error } = await supabase.from('submissions').upsert({
          id: submission.id,
          student_name: submission.student.name,
          student_age: submission.student.age,
          student_standard: submission.student.standard,
          student_school: submission.student.school,
          level: submission.level,
          answers: submission.answers,
          risk_status: submission.riskStatus,
          conclusion: submission.conclusion,
          ai_report: submission.aiReport,
          timestamp: submission.timestamp
        });
        if (error) console.error("Supabase Error:", error.message);
      } catch (e) {
        console.error("Connection error to Supabase:", e);
      }
    }

    // 2. Sync to LocalStorage (as backup)
    const saved = localStorage.getItem(SUBMISSIONS_KEY);
    const submissions: Submission[] = saved ? JSON.parse(saved) : [];
    const index = submissions.findIndex(s => s.id === submission.id);
    if (index !== -1) {
      submissions[index] = submission;
    } else {
      submissions.unshift(submission);
    }
    localStorage.setItem(SUBMISSIONS_KEY, JSON.stringify(submissions));
    
    return submission;
  },

  fetchSubmissions: async (): Promise<Submission[]> => {
    if (supabase) {
      const { data, error } = await supabase
        .from('submissions')
        .select('*')
        .order('timestamp', { ascending: false });
      
      if (!error && data) {
        return data.map(d => ({
          id: d.id,
          student: {
            name: d.student_name,
            age: d.student_age,
            standard: d.student_standard,
            school: d.student_school
          },
          level: d.level,
          answers: d.answers,
          riskStatus: d.risk_status,
          conclusion: d.conclusion,
          aiReport: d.ai_report,
          timestamp: d.timestamp,
          metrics: {
            totalQuestions: Object.keys(d.answers || {}).length,
            healthyCount: 0, concernCount: 0, redFlagCount: 0 
          }
        }));
      }
    }
    const saved = localStorage.getItem(SUBMISSIONS_KEY);
    return saved ? JSON.parse(saved) : [];
  },

  generateAIAnalysis: async (submission: Submission, questions: Question[]): Promise<string> => {
    const apiKey = process.env.API_KEY;
    if (!apiKey || apiKey === "undefined") return "AI Service offline.";

    const ai = new GoogleGenAI({ apiKey });
    const answerEntries = Object.entries(submission.answers || {});
    const answerSummary = answerEntries.map(([qid, ans]: [string, any]) => {
      const q = questions.find(q => q.id === qid);
      const opt = q?.options.find(o => o.id === ans.optionId);
      return `[${ans.indicator}] ${q?.textEn}: "${opt?.en}"`;
    }).join('\n');

    const promptText = `Analyze this student assessment for NitGyanam Portal:
      Student: ${submission.student.name} (${submission.student.standard})
      Status: ${submission.riskStatus}
      Data: ${answerSummary}
      Provide: Overview, Risk Analysis, Guidance, and Verdict.`;

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [{ parts: [{ text: promptText }] }],
        config: { temperature: 0.5 }
      });
      return response.text || "Report generation failed.";
    } catch (error) {
      return "AI analysis failed.";
    }
  },

  analyzeResults: (answers: ResponseIndicator[]) => {
    const total = answers.length;
    const redFlagCount = answers.filter(a => a === ResponseIndicator.RED_FLAG).length;
    const concernCount = answers.filter(a => a === ResponseIndicator.CONCERN).length;
    
    if (redFlagCount >= 2 || (redFlagCount / total) > 0.1) return { riskStatus: 'CRITICAL' as const, conclusion: 'Immediate referral recommended.' };
    if (concernCount > total * 0.25) return { riskStatus: 'MODERATE' as const, conclusion: 'Active monitoring required.' };
    return { riskStatus: 'STABLE' as const, conclusion: 'Healthy baseline.' };
  }
};
