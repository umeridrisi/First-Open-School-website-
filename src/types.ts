export type AgeTier = 'pre-k' | 'kindergarten' | 'grade-1-2' | 'k12-foundations';

export type ActiveTab = 
  | 'overview'
  | 'curriculum'
  | 'alphabets'
  | 'digits'
  | 'encyclopedia'
  | 'coding'
  | 'poems'
  | 'drawings'
  | 'tracing'
  | 'bubble-pop'
  | 'counting-feast'
  | 'card-match'
  | 'assessment'
  | 'phonics-stories'
  | 'parental-dashboard'
  | 'settings'
  | 'privacy'
  | 'terms'
  | 'data-safety'
  | 'editorial-policy'
  | 'about';

export type DrawingCategory = 
  | 'animals'
  | 'vehicles-space'
  | 'nature-flowers'
  | 'fantasy-fairytale'
  | 'alphabet-art'
  | 'cultural-pakistan';

export interface DrawingTemplate {
  id: string;
  title: string;
  category: DrawingCategory;
  emoji: string;
  difficulty: 'Easy' | 'Medium' | 'Creative';
  ageRecommendation: 'Ages 2-4' | 'Ages 4-6' | 'Ages 6-8' | 'All Ages';
  description: string;
  learningPrompt: string;
  suggestedColors: { name: string; hex: string }[];
  funFact: string;
  svgOutline: string; // Inner SVG vector paths for a 500x500 viewBox
}

export type PoemCategory = 
  | 'classics-rhymes'
  | 'animals-nature'
  | 'bedtime-lullabies'
  | 'fun-whimsical'
  | 'good-habits'
  | 'seasons-weather'
  | 'world-rhymes'
  | 'pakistani-rhymes';

export interface PoemVocabulary {
  word: string;
  meaning: string;
  emoji: string;
}

export interface Poem {
  id: string;
  title: string;
  poet: string;
  emoji: string;
  category: PoemCategory;
  ageTier: 'Ages 2-4' | 'Ages 4-6' | 'Ages 6-8' | 'All Ages';
  tagline: string;
  themeColor: string;
  badgeBg: string;
  stanzas: string[][];
  rhymeScheme: string;
  vocabulary: PoemVocabulary[];
  educationalTakeaway: string;
  recitalTips: string[];
}

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
  id?: string;
  title: string;
  story: string;
  phonicsFocus: string;
  question: string;
  options?: string[];
  correctOptionIndex?: number;
  emoji?: string;
  category?: string;
  themeColor?: string;
}

export interface LMSExportData {
  exportDate: string;
  schoolName: string;
  students: StudentProfile[];
  classCode: string;
  version: string;
}

export type CodingSubTab = 'quests' | 'languages' | 'sandbox' | 'turtle' | 'concepts';

export type CodingLanguageId = 'html' | 'css' | 'javascript' | 'python' | 'cpp' | 'csharp' | 'sql' | 'scratch';

export interface CodingLanguageBigIdea {
  term: string;
  meaning: string;
  kidExample: string;
}

export interface CodingLanguageTemplate {
  id: string;
  name: string;
  description: string;
  code: string;
  cssCode?: string;
  expectedOutputPreview?: string;
}

export interface CodingLanguageChallenge {
  id: string;
  title: string;
  prompt: string;
  starterCode: string;
  starterCssCode?: string;
  hint: string;
  solutionCode: string;
  solutionCssCode?: string;
  checkExplanation: string;
  requiredKeywords: string[];
}

export interface CodingLanguageDetail {
  id: CodingLanguageId;
  name: string;
  shortName: string;
  tagline: string;
  icon: string;
  badgeBg: string;
  borderAccent: string;
  primaryColor: string;
  tierRecommended: AgeTier[];
  recommendedAgeLabel: string;
  difficultyLabel: 'First Steps (Visual)' | 'Beginner Friendly' | 'Elementary Starter' | 'Junior Developer' | 'Advanced Game Engine';
  kidAnalogy: {
    title: string;
    explanation: string;
    emoji: string;
  };
  whyKidsLoveIt: string;
  whatItBuilds: string[];
  famousThingsBuiltWithIt: string[];
  bigIdeas: CodingLanguageBigIdea[];
  starterCode: string;
  starterCssCode?: string;
  interactiveTemplates: CodingLanguageTemplate[];
  curriculumParentNote: string;
  quickQuiz: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  };
  handsOnChallenge: CodingLanguageChallenge;
}

export type CodingMascot = 'robot' | 'bunny' | 'kitty' | 'turtle' | 'rocket';

export type CodingCommandType = 
  | 'forward' 
  | 'backward' 
  | 'turn-left' 
  | 'turn-right' 
  | 'jump' 
  | 'collect' 
  | 'repeat-2' 
  | 'repeat-3' 
  | 'repeat-4'
  | 'if-water'
  | 'if-key'
  | 'func-leap';

export interface CodingBlock {
  id: string;
  type: CodingCommandType;
  label: string;
  emoji: string;
  color: string;
  description: string;
  codeSnippet: string;
  nestedCommands?: CodingCommandType[];
}

export type GridTileType = 'empty' | 'wall' | 'water' | 'puddle' | 'gate' | 'start' | 'goal' | 'star' | 'carrot' | 'gem' | 'key';

export interface CodingMission {
  id: string;
  tier: AgeTier;
  title: string;
  levelNumber: number;
  difficulty: 'Starter' | 'Explorer' | 'Champion';
  concept: string;
  story: string;
  mascot: CodingMascot;
  gridSize: { rows: number; cols: number };
  start: { x: number; y: number; dir: 'up' | 'down' | 'left' | 'right' };
  goal: { x: number; y: number };
  collectibles?: { x: number; y: number; type: 'star' | 'carrot' | 'gem' | 'key' }[];
  obstacles?: { x: number; y: number; type: 'wall' | 'water' | 'puddle' | 'gate' }[];
  availableCommands: CodingCommandType[];
  maxCommands?: number;
  hint: string;
  pedagogicalNote: string;
  solutionHint?: CodingCommandType[];
}

export interface CsConcept {
  id: string;
  title: string;
  emoji: string;
  tagline: string;
  kidAnalogy: string;
  realWorldExample: string;
  codeExample: string;
  funFact: string;
  interactiveChallenge: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  };
}

export interface SubjectCurriculumBreakdown {
  subjectId: string;
  title: string;
  emoji: string;
  focusTitle: string;
  scopeSummary: string;
  recommendedHighlights: string[];
  parentExplanation: string;
  linkTab: ActiveTab;
}

export interface CurriculumTierDetail {
  tier: AgeTier;
  name: string;
  ageRange: string;
  gradeLabel: string;
  tagline: string;
  description: string;
  mascotEmoji: string;
  color: string;
  badgeBg: string;
  borderAccent: string;
  cognitiveStage: string;
  pedagogicalPhilosophy: string;
  dailyRecommendationMinutes: number;
  coreMilestones: string[];
  subjects: Record<string, SubjectCurriculumBreakdown>;
  parentGuideTips: string[];
}
