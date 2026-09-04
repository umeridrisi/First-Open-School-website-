export type AgeTier = 'pre-k' | 'kindergarten' | 'grade-1-2' | 'k12-foundations';

export type ActiveTab = 
  | 'overview'
  | 'alphabets'
  | 'digits'
  | 'encyclopedia'
  | 'tracing'
  | 'bubble-pop'
  | 'counting-feast'
  | 'card-match'
  | 'assessment'
  | 'phonics-stories'
  | 'parental-dashboard'
  | 'privacy'
  | 'terms'
  | 'data-safety'
  | 'editorial-policy'
  | 'about';

export type EncyclopediaCategory = 
  | 'alphabets'
  | 'numbers'
  | 'solar-system'
  | 'earth-elements'
  | 'animals-dinosaurs'
  | 'human-body'
  | 'how-things-work'
  | 'countries-world';

export interface EncyclopediaEntry {
  id: string;
  title: string;
  symbol?: string;
  pronunciation: string;
  category: EncyclopediaCategory;
  tagline: string;
  analogy: {
    title: string;
    story: string;
    emoji: string;
  };
  howItWorks: {
    title: string;
    points: string[];
  };
  anatomyDiagram?: {
    headline: string;
    parts: { label: string; desc: string }[];
  };
  funFacts: string[];
  kidWords?: { word: string; emoji: string; meaning: string }[];
  didYouKnowOrigin: string;
  microQuiz: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  };
  handsOnExperiment?: {
    title: string;
    materials: string[];
    steps: string[];
    explanation: string;
    emoji: string;
  };
  kidTongueTwisterOrRhyme?: string;
  seeAlso: { id: string; title: string; category: EncyclopediaCategory }[];
}

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
