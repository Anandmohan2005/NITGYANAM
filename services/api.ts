
import { Question, Submission, ResponseIndicator, WellBeingLevel } from '../types';
import { QUIZ_DATA } from '../constants';
import { GoogleGenAI } from "@google/genai";
import { supabase } from './supabase';

const QUESTIONS_KEY = 'nit_gyanam_questions_v2';
const SUBMISSIONS_KEY = 'nit_gyanam_submissions_v2';

// Fixed: Strictly follow API key retrieval guideline to use process.env.API_KEY
const GET_API_KEY = () => {
  return process.env.API_KEY || "";
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
    const saved = localStorage.getItem(SUBMISSIONS_KEY);
    const submissions: Submission[] = saved ? JSON.parse(saved) : [];
    const index = submissions.findIndex(s => s.id === submission.id);
    if (index !== -1) {
      submissions[index] = submission;
    } else {
      submissions.unshift(submission);
    }
    localStorage.setItem(SUBMISSIONS_KEY, JSON.stringify(submissions));

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
        // Fixed: Use correct camelCase property names from Submission interface (riskStatus and aiReport)
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
    if (!apiKey) {
      console.error("NitGyanam: Gemini API Key is missing. Check your environment variables.");
      return "AI Service credentials missing. Please configure your API key.";
    }

    try {
      // Fixed: Initialize GoogleGenAI with the recommended object structure
      const ai = new GoogleGenAI({ apiKey });
      const answerEntries = Object.entries(submission.answers || {});
      const answerSummary = answerEntries.map(([qid, ans]: [string, any]) => {
        const q = questions.find(q => q.id === qid);
        const opt = q?.options.find(o => o.id === ans.optionId);
        return `[${ans.indicator}] ${q?.textEn}: "${opt?.en}"`;
      }).join('\n');

      const promptText = `Analyze this student assessment for NitGyanam Portal:
        Student: ${submission.student.name} (${submission.student.standard})
        Risk Status: ${submission.riskStatus}
        Clinical Findings Summary:
        ${answerSummary}
        
        Provide a concise clinical report including:
        1. Psychological Overview
        2. Specific Risk Markers identified
        3. Recommended Actions for Faculty
        4. Summary Verdict.`;

      // Fixed: Call generateContent with both model name and prompt in a single call as per guideline
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: promptText,
        config: { 
          temperature: 0.7,
          topP: 0.95,
          topK: 64
        }
      });
      
      // Fixed: Access the .text property directly (not a method call)
      const text = response.text;
      if (!text) {
        throw new Error("Empty response received from AI model.");
      }
      return text;
    } catch (error: any) {
      console.error("NitGyanam AI Full Error Context:", error);
      let errorMessage = "AI analysis failed at runtime.";
      
      if (error?.message?.includes("API key not valid")) {
        errorMessage = "Error: Invalid Gemini API Key. Please verify your credentials.";
      } else if (error?.message?.includes("User location is not supported")) {
        errorMessage = "Error: Gemini API is not available in your current region.";
      } else if (error?.message) {
        errorMessage = `AI Error: ${error.message}`;
      }
      
      return errorMessage;
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
