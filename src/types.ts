export type AgeTier = 'pre-k' | 'kindergarten' | 'grade-1-2' | 'k12-foundations';

export type ActiveTab = 
  | 'overview'
  | 'alphabets'
  | 'digits'
  | 'tracing'
  | 'bubble-pop'
  | 'counting-feast'
  | 'card-match'
  | 'assessment'
  | 'phonics-stories'
  | 'parental-dashboard';

export interface LetterData {
  char: string; // Uppercase 'A'
  lowercase: string; // 'a'
  phonicsSound: string; // 'Ay / Buh / Kuh'
  exampleWord: string; // 'Apple'
  category: 'vowel' | 'consonant';
  emoji: string;
  color: string;
  tracingPath: { x: number; y: number }[]; // Normalised tracing control points (0..100)
}

export interface DigitData {
  value: number; // 0..20
  word: string; // 'Zero', 'One', 'Two'...
  emoji: string;
  color: string;
  visualGroupEmoji: string; // '🍎', '🎈', '⭐️'
  mathTip: string;
  tracingPath: { x: number; y: number }[];
}

export interface Badge {
  id: string;
  title: string;
  description: string;
  icon: string; // Lucide icon name or emoji
  unlockedAt?: string;
  category: 'literacy' | 'numeracy' | 'tracing' | 'streak' | 'mastery';
}

export interface ItemProgress {
  itemId: string; // e.g. 'A' or '7'
  type: 'letter' | 'digit';
  timesPracticed: number;
  accuracy: number; // 0..100
  tracingAccuracy?: number; // 0..100
  lastPracticedDate: string;
  mastered: boolean;
}

export interface StudentProfile {
  id: string;
  name: string;
  avatar: string; // Emoji avatar e.g. '🦁'
  ageTier: AgeTier;
  stars: number;
  streakDays: number;
  lastActiveDate: string;
  classCode: string;
  progress: Record<string, ItemProgress>; // keyed by char or digit string
  unlockedBadges: string[]; // badge IDs
  quizHistory: {
    date: string;
    score: number;
    total: number;
    ageTier: AgeTier;
  }[];
}

export interface ParentSettings {
  pin: string; // 4-digit PIN, default '1234'
  soundEffects: boolean;
  voiceGuidance: boolean;
  voiceSpeed: number; // 0.8 to 1.2
  offlineEnabled: boolean;
  dailyGoalMinutes: number;
  schoolName: string;
}

export interface PhonicsStory {
  title: string;
  story: string;
  phonicsFocus: string;
  question: string;
  options?: string[];
  correctOptionIndex?: number;
}

export interface LMSExportData {
  exportDate: string;
  schoolName: string;
  students: StudentProfile[];
  classCode: string;
  version: string;
}
