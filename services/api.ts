
import { Question, Submission, ResponseIndicator, WellBeingLevel } from '../types';
import { QUIZ_DATA } from '../constants';
import { GoogleGenAI } from "@google/genai";
import { supabase } from './supabase';

const QUESTIONS_KEY = 'nit_gyanam_questions_v2';
const SUBMISSIONS_KEY = 'nit_gyanam_submissions_v2';

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
    if (!process.env.API_KEY) {
      return "CRITICAL: API_KEY is missing from environment variables.";
    }

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const answerEntries = Object.entries(submission.answers || {});
      const answerSummary = answerEntries.map(([qid, ans]: [string, any]) => {
        const q = questions.find(q => q.id === qid);
        const opt = q?.options.find(o => o.id === ans.optionId);
        return `[Indicator: ${ans.indicator}] Q: ${q?.textEn} -> Answer: "${opt?.en}"`;
      }).join('\n');

      let ageSpecificGuidelines = "";
      if (submission.level === WellBeingLevel.LEVEL_1) {
        ageSpecificGuidelines = `
          FOCUS: Std 1 to 3
          - BEHAVIOUR: Social circle (friends), school attitude, patience/impulse control.
          - MENTAL HEALTH: Morning mindset, self-image.
          - CONCERN: Isolation signs, home belonging.
          - RED FLAGS: Trauma markers, total emotional shutdown.
        `;
      } else if (submission.level === WellBeingLevel.LEVEL_2) {
        ageSpecificGuidelines = `
          FOCUS: Std 4 to 6
          - BEHAVIOUR: Academic anxiety, focus deficit, support-seeking.
          - MENTAL HEALTH: Internal battery (burnout), life narrative (adventure vs tragedy).
          - CONCERN: School as "prison", social paranoia, parentification.
          - RED FLAGS: Anhedonia, dissociation, lack of future hope.
        `;
      } else if (submission.level === WellBeingLevel.LEVEL_3) {
        ageSpecificGuidelines = `
          FOCUS: Std 7 to 8
          - BEHAVIOUR: Authenticity vs Masking, digital comparison (Social Media).
          - MENTAL HEALTH: Body image, somatic stress (Psychomotor Retardation).
          - CONCERN: Rejection sensitivity, parent-child bond quality.
          - RED FLAGS: Suicidal ideation (Critical), self-harm, severe panic.
        `;
      } else if (submission.level === WellBeingLevel.LEVEL_4) {
        ageSpecificGuidelines = `
          FOCUS: Std 9 to 10
          - BEHAVIOUR: Executive function (Planning vs Paralysis), digital dependency.
          - MENTAL HEALTH: Academic burnout (Battery empty), Somatization (Headaches/Shakiness due to results), Self-loathing.
          - CONCERN: Social Masking (Imposter Syndrome), Rejection sensitivity, Home as "Pressure Cooker".
          - RED FLAGS: Intense Hopelessness (Future looks dark/blank), Emotional Blunting (Robot/Numbness), Dissociation (Floating), Learned Helplessness.
        `;
      }

      const promptText = `
        Act as a Senior Clinical Psychologist and EdTech Specialist for NitGyanam. 
        Analyze the following student assessment data using our 4-Category Clinical Framework.

        FRAMEWORK CATEGORIES:
        1. BEHAVIOUR PATTERN: Interaction, executive habits, and social discipline.
        2. MENTAL HEALTH (INTERNAL STATE): Internal mood, somatic stress, and self-esteem.
        3. CONCLUSION CONCERN: Environmental stressors and social insecurities.
        4. IMMEDIATE ACTION (RED FLAGS): High-risk indicators (Trauma, clinical depression, hopelessness).

        AGE-SPECIFIC ANALYSIS GUIDELINES:
        ${ageSpecificGuidelines}

        STUDENT CONTEXT:
        Name: ${submission.student.name}
        Grade: ${submission.student.standard} (${submission.level})
        Overall Risk Status: ${submission.riskStatus}
        
        RAW FINDINGS (MCQ Responses):
        ${answerSummary}

        TASK:
        Generate a comprehensive Clinical Synthesis Report. Ensure Category 4 (RED FLAGS) is addressed with extreme vigilance.
      `;

      // Switching to 'gemini-3-flash-preview' as it has much higher rate limits for the free tier.
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: promptText,
        config: { 
          temperature: 0.6,
          topP: 0.9,
          topK: 40
        }
      });
      
      return response.text || "Diagnostic failure - Empty report.";
    } catch (error: any) {
      console.error("AI Analysis Error:", error);
      // Friendly message for quota errors
      if (error?.message?.includes('429') || error?.message?.includes('quota')) {
        return "NitGyanam System Alert: Clinical server is currently at peak capacity. Please wait 60 seconds and click 'Regenerate Analysis' to refresh this record.";
      }
      return `Clinical Synthesis Error: ${error?.message || "Internal failure"}`;
    }
  },

  analyzeResults: (answers: ResponseIndicator[]) => {
    const total = answers.length;
    const redFlagCount = answers.filter(a => a === ResponseIndicator.RED_FLAG).length;
    const concernCount = answers.filter(a => a === ResponseIndicator.CONCERN).length;
    
    if (redFlagCount >= 1) return { riskStatus: 'CRITICAL' as const, conclusion: 'Clinical Red Flags identified. Immediate review required.' };
    if (concernCount > total * 0.2) return { riskStatus: 'MODERATE' as const, conclusion: 'Moderate indicators found. Active monitoring suggested.' };
    return { riskStatus: 'STABLE' as const, conclusion: 'Student appears healthy and connected.' };
  }
};
