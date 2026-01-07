
import { Question, Submission, ResponseIndicator, WellBeingLevel } from '../types';
import { QUIZ_DATA } from '../constants';
import { GoogleGenAI } from "@google/genai";
import { supabase } from './supabase';

const QUESTIONS_KEY = 'nit_gyanam_questions_v2';
const SUBMISSIONS_KEY = 'nit_gyanam_submissions_v2';

const GET_API_KEY = () => {
  try {
    return process.env.API_KEY || "";
  } catch (e) {
    return "";
  }
};

export const api = {
  fetchQuestions: async (): Promise<Question[]> => {
    if (supabase) {
      try {
        const { data, error } = await supabase.from('questions').select('*');
        if (!error && data && data.length > 0) return data;
      } catch (e) {
        console.error("Cloud Fetch Error:", e);
      }
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
      try {
        await supabase.from('questions').upsert(questions);
      } catch (e) {
        console.error("Cloud Save Error:", e);
      }
    }
    localStorage.setItem(QUESTIONS_KEY, JSON.stringify(questions));
  },

  submitAssessment: async (submission: Submission) => {
    // 1. Save to LocalStorage always
    const saved = localStorage.getItem(SUBMISSIONS_KEY);
    const submissions: Submission[] = saved ? JSON.parse(saved) : [];
    const index = submissions.findIndex(s => s.id === submission.id);
    if (index !== -1) {
      submissions[index] = submission;
    } else {
      submissions.unshift(submission);
    }
    localStorage.setItem(SUBMISSIONS_KEY, JSON.stringify(submissions));

    // 2. Sync to Supabase if available
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
        if (error) console.error("Cloud Sync Issue:", error.message);
      } catch (e) {
        console.error("Supabase Connection Fail:", e);
      }
    }
    return submission;
  },

  fetchSubmissions: async (): Promise<Submission[]> => {
    let cloudData: Submission[] = [];
    
    if (supabase) {
      try {
        const { data, error } = await supabase
          .from('submissions')
          .select('*')
          .order('timestamp', { ascending: false });
        
        if (!error && data) {
          cloudData = data.map(d => {
            const answers = Object.values(d.answers || {}) as any[];
            return {
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
                totalQuestions: answers.length,
                healthyCount: answers.filter(a => a.indicator === ResponseIndicator.HEALTHY).length,
                concernCount: answers.filter(a => a.indicator === ResponseIndicator.CONCERN).length,
                redFlagCount: answers.filter(a => a.indicator === ResponseIndicator.RED_FLAG).length,
              }
            };
          });
        }
      } catch (e) {
        console.error("Cloud Fetch Error:", e);
      }
    }

    const localSaved = localStorage.getItem(SUBMISSIONS_KEY);
    const localData: Submission[] = localSaved ? JSON.parse(localSaved) : [];
    
    // ID collision check: Cloud data takes priority
    const combinedMap = new Map();
    localData.forEach(l => combinedMap.set(l.id, l));
    cloudData.forEach(c => combinedMap.set(c.id, c));

    return Array.from(combinedMap.values()).sort((a, b) => b.timestamp - a.timestamp);
  },

  syncLocalData: async (): Promise<{ success: number, failed: number }> => {
    if (!supabase) return { success: 0, failed: 0 };
    
    const localSaved = localStorage.getItem(SUBMISSIONS_KEY);
    if (!localSaved) return { success: 0, failed: 0 };
    
    const localData: Submission[] = JSON.parse(localSaved);
    let successCount = 0;
    let failedCount = 0;

    for (const s of localData) {
      try {
        const { error } = await supabase.from('submissions').upsert({
          id: s.id,
          student_name: s.student.name,
          student_age: s.student.age,
          student_standard: s.student.standard,
          student_school: s.student.school,
          level: s.level,
          answers: s.answers,
          risk_status: s.riskStatus,
          conclusion: s.conclusion,
          ai_report: s.aiReport,
          timestamp: s.timestamp
        });
        if (error) failedCount++;
        else successCount++;
      } catch {
        failedCount++;
      }
    }
    return { success: successCount, failed: failedCount };
  },

  generateAIAnalysis: async (submission: Submission, questions: Question[]): Promise<string> => {
    const apiKey = GET_API_KEY();
    if (!apiKey || apiKey === "undefined") return "AI Service credentials missing.";

    try {
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

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [{ parts: [{ text: promptText }] }],
        config: { temperature: 0.5 }
      });
      return response.text || "Report generation failed.";
    } catch (error) {
      console.error("AI Error:", error);
      return "AI analysis failed at runtime.";
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
