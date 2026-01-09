
export enum WellBeingLevel {
  LEVEL_1 = 'Std 1 to 3',
  LEVEL_2 = 'Std 4 to 6',
  LEVEL_3 = 'Std 7 to 8',
  LEVEL_4 = 'Std 9 to 10',
}

export enum ResponseIndicator {
  HEALTHY = 'Healthy/Positive',
  CONCERN = 'Moderate Concern',
  RED_FLAG = 'Critical Red Flag',
}

export enum UserRole {
  ADMIN = 'ADMIN',
  TEACHER = 'TEACHER',
  STUDENT = 'STUDENT'
}

export interface User {
  username: string;
  role: UserRole;
}

export interface Option {
  id: string;
  en: string;
  hi: string;
  indicator: ResponseIndicator;
}

export interface Question {
  id: string;
  level: WellBeingLevel;
  textEn: string;
  textHi: string;
  options: Option[];
}

export interface StudentInfo {
  name: string;
  age: string;
  standard: string;
  school: string;
}

export interface Submission {
  id: string;
  student: StudentInfo;
  level: WellBeingLevel;
  answers: { [questionId: string]: { indicator: ResponseIndicator; optionId: string } };
  metrics: {
    healthyCount: number;
    concernCount: number;
    redFlagCount: number;
    totalQuestions: number;
  };
  conclusion: string;
  aiReport?: string;
  feedback?: string; // Added student feedback field
  riskStatus: 'STABLE' | 'MODERATE' | 'CRITICAL';
  timestamp: number;
}
