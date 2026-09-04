import { LetterData, DigitData, Badge, AgeTier } from '../types';

export const AGE_TIER_INFO: Record<AgeTier, {
  name: string;
  ageRange: string;
  gradeLabel: string;
  description: string;
  focusSkills: string[];
  color: string;
  badgeBg: string;
}> = {
  'pre-k': {
    name: 'Little Explorers',
    ageRange: 'Ages 2-4',
    gradeLabel: 'Pre-K & Toddlers',
    description: 'Focus on letter shapes, phonics ear training, visual digit recognition (1-5), and audio sensory play.',
    focusSkills: ['Letter Sound Association', 'Visual Subitizing (1-5)', 'Large Touch Interactions'],
    color: 'from-amber-400 to-orange-500',
    badgeBg: 'bg-amber-100 text-amber-800 border-amber-300'
  },
  'kindergarten': {
    name: 'Kindy Champions',
    ageRange: 'Ages 5-6',
    gradeLabel: 'Kindergarten & Early K-1',
    description: 'Letter-sound phonics, interactive guide tracing, digit counting (1-10), and matching cards.',
    focusSkills: ['Letter Tracing & Fine Motor', 'Digit Subitizing (1-10)', 'Bubble Pop Audio Recall'],
    color: 'from-sky-400 to-blue-600',
    badgeBg: 'bg-sky-100 text-sky-800 border-sky-300'
  },
  'grade-1-2': {
    name: 'Junior Scholars',
    ageRange: 'Ages 7-8',
    gradeLabel: 'Grade 1-2 Foundations',
    description: 'Upper/Lowercase pairing, word building, numbers up to 20, missing number sequences, and story reading.',
    focusSkills: ['Word-Building Phonics', 'Numbers 10-20 & Counting', 'Gamified Speed Quizzes'],
    color: 'from-emerald-400 to-teal-600',
    badgeBg: 'bg-emerald-100 text-emerald-800 border-emerald-300'
  },
  'k12-foundations': {
    name: 'Senior Foundations',
    ageRange: 'Ages 9-12+',
    gradeLabel: 'K-12 Elementary Mastery',
    description: 'Spelling challenges, pattern recognition, number bonds, and comprehensive assessments with analytics.',
    focusSkills: ['Advanced Phonics & Spelling', 'Number Bonds & Sequences', 'Milestone Certificate Mastery'],
    color: 'from-purple-400 to-indigo-600',
    badgeBg: 'bg-purple-100 text-purple-800 border-purple-300'
  }
};

export const ALPHABET_DATA: LetterData[] = [
  { char: 'A', lowercase: 'a', phonicsSound: 'Ah / Ay', exampleWord: 'Apple', category: 'vowel', emoji: '🍎', color: '#ef4444', tracingPath: [{x: 20, y: 80}, {x: 50, y: 15}, {x: 80, y: 80}, {x: 35, y: 55}, {x: 65, y: 55}] },
  { char: 'B', lowercase: 'b', phonicsSound: 'Buh', exampleWord: 'Bear', category: 'consonant', emoji: '🐻', color: '#f97316', tracingPath: [{x: 25, y: 15}, {x: 25, y: 85}, {x: 25, y: 15}, {x: 65, y: 35}, {x: 25, y: 50}, {x: 70, y: 70}, {x: 25, y: 85}] },
  { char: 'C', lowercase: 'c', phonicsSound: 'Kuh', exampleWord: 'Cat', category: 'consonant', emoji: '🐱', color: '#eab308', tracingPath: [{x: 75, y: 25}, {x: 40, y: 15}, {x: 20, y: 50}, {x: 40, y: 85}, {x: 75, y: 75}] },
  { char: 'D', lowercase: 'd', phonicsSound: 'Duh', exampleWord: 'Duck', category: 'consonant', emoji: '🦆', color: '#84cc16', tracingPath: [{x: 25, y: 15}, {x: 25, y: 85}, {x: 25, y: 15}, {x: 70, y: 50}, {x: 25, y: 85}] },
  { char: 'E', lowercase: 'e', phonicsSound: 'Eh', exampleWord: 'Elephant', category: 'vowel', emoji: '🐘', color: '#10b981', tracingPath: [{x: 75, y: 15}, {x: 25, y: 15}, {x: 25, y: 85}, {x: 75, y: 85}, {x: 25, y: 50}, {x: 65, y: 50}] },
  { char: 'F', lowercase: 'f', phonicsSound: 'Fff', exampleWord: 'Fish', category: 'consonant', emoji: '🐟', color: '#14b8a6', tracingPath: [{x: 75, y: 15}, {x: 25, y: 15}, {x: 25, y: 85}, {x: 25, y: 50}, {x: 65, y: 50}] },
  { char: 'G', lowercase: 'g', phonicsSound: 'Guh', exampleWord: 'Giraffe', category: 'consonant', emoji: '🦒', color: '#06b6d4', tracingPath: [{x: 75, y: 25}, {x: 40, y: 15}, {x: 20, y: 50}, {x: 40, y: 85}, {x: 75, y: 85}, {x: 75, y: 50}, {x: 50, y: 50}] },
  { char: 'H', lowercase: 'h', phonicsSound: 'Huh', exampleWord: 'Hippo', category: 'consonant', emoji: '🦛', color: '#0284c7', tracingPath: [{x: 25, y: 15}, {x: 25, y: 85}, {x: 25, y: 50}, {x: 75, y: 50}, {x: 75, y: 15}, {x: 75, y: 85}] },
  { char: 'I', lowercase: 'i', phonicsSound: 'Ih / Eye', exampleWord: 'Iguana', category: 'vowel', emoji: '🦎', color: '#3b82f6', tracingPath: [{x: 30, y: 15}, {x: 70, y: 15}, {x: 50, y: 15}, {x: 50, y: 85}, {x: 30, y: 85}, {x: 70, y: 85}] },
  { char: 'J', lowercase: 'j', phonicsSound: 'Juh', exampleWord: 'Jellyfish', category: 'consonant', emoji: '🪼', color: '#6366f1', tracingPath: [{x: 30, y: 15}, {x: 70, y: 15}, {x: 60, y: 15}, {x: 60, y: 70}, {x: 40, y: 85}, {x: 20, y: 70}] },
  { char: 'K', lowercase: 'k', phonicsSound: 'Kuh', exampleWord: 'Kangaroo', category: 'consonant', emoji: '🦘', color: '#8b5cf6', tracingPath: [{x: 25, y: 15}, {x: 25, y: 85}, {x: 25, y: 50}, {x: 75, y: 15}, {x: 25, y: 50}, {x: 75, y: 85}] },
  { char: 'L', lowercase: 'l', phonicsSound: 'Lll', exampleWord: 'Lion', category: 'consonant', emoji: '🦁', color: '#a855f7', tracingPath: [{x: 25, y: 15}, {x: 25, y: 85}, {x: 75, y: 85}] },
  { char: 'M', lowercase: 'm', phonicsSound: 'Mmm', exampleWord: 'Monkey', category: 'consonant', emoji: '🐒', color: '#d946ef', tracingPath: [{x: 20, y: 85}, {x: 20, y: 15}, {x: 50, y: 60}, {x: 80, y: 15}, {x: 80, y: 85}] },
  { char: 'N', lowercase: 'n', phonicsSound: 'Nnn', exampleWord: 'Newt', category: 'consonant', emoji: '🦎', color: '#ec4899', tracingPath: [{x: 25, y: 85}, {x: 25, y: 15}, {x: 75, y: 85}, {x: 75, y: 15}] },
  { char: 'O', lowercase: 'o', phonicsSound: 'Oh / Aw', exampleWord: 'Owl', category: 'vowel', emoji: '🦉', color: '#f43f5e', tracingPath: [{x: 50, y: 15}, {x: 20, y: 50}, {x: 50, y: 85}, {x: 80, y: 50}, {x: 50, y: 15}] },
  { char: 'P', lowercase: 'p', phonicsSound: 'Puh', exampleWord: 'Panda', category: 'consonant', emoji: '🐼', color: '#f97316', tracingPath: [{x: 25, y: 85}, {x: 25, y: 15}, {x: 70, y: 35}, {x: 25, y: 55}] },
  { char: 'Q', lowercase: 'q', phonicsSound: 'Kwuh', exampleWord: 'Quail', category: 'consonant', emoji: '🐦', color: '#eab308', tracingPath: [{x: 50, y: 15}, {x: 20, y: 50}, {x: 50, y: 85}, {x: 80, y: 50}, {x: 50, y: 15}, {x: 60, y: 65}, {x: 85, y: 90}] },
  { char: 'R', lowercase: 'r', phonicsSound: 'Rrr', exampleWord: 'Rabbit', category: 'consonant', emoji: '🐇', color: '#84cc16', tracingPath: [{x: 25, y: 85}, {x: 25, y: 15}, {x: 70, y: 35}, {x: 25, y: 50}, {x: 75, y: 85}] },
  { char: 'S', lowercase: 's', phonicsSound: 'Sss', exampleWord: 'Snake', category: 'consonant', emoji: '🐍', color: '#10b981', tracingPath: [{x: 75, y: 25}, {x: 45, y: 15}, {x: 25, y: 35}, {x: 75, y: 65}, {x: 50, y: 85}, {x: 25, y: 75}] },
  { char: 'T', lowercase: 't', phonicsSound: 'Tuh', exampleWord: 'Tiger', category: 'consonant', emoji: '🐅', color: '#14b8a6', tracingPath: [{x: 20, y: 15}, {x: 80, y: 15}, {x: 50, y: 15}, {x: 50, y: 85}] },
  { char: 'U', lowercase: 'u', phonicsSound: 'Uh / Yew', exampleWord: 'Unicorn', category: 'vowel', emoji: '🦄', color: '#06b6d4', tracingPath: [{x: 25, y: 15}, {x: 25, y: 65}, {x: 50, y: 85}, {x: 75, y: 65}, {x: 75, y: 15}] },
  { char: 'V', lowercase: 'v', phonicsSound: 'Vvv', exampleWord: 'Vulture', category: 'consonant', emoji: '🦅', color: '#3b82f6', tracingPath: [{x: 20, y: 15}, {x: 50, y: 85}, {x: 80, y: 15}] },
  { char: 'W', lowercase: 'w', phonicsSound: 'Wuh', exampleWord: 'Whale', category: 'consonant', emoji: '🐳', color: '#6366f1', tracingPath: [{x: 15, y: 15}, {x: 35, y: 85}, {x: 50, y: 40}, {x: 65, y: 85}, {x: 85, y: 15}] },
  { char: 'X', lowercase: 'x', phonicsSound: 'Kss', exampleWord: 'X-ray Fish', category: 'consonant', emoji: '🦴', color: '#8b5cf6', tracingPath: [{x: 20, y: 15}, {x: 80, y: 85}, {x: 80, y: 15}, {x: 20, y: 85}] },
  { char: 'Y', lowercase: 'y', phonicsSound: 'Yuh', exampleWord: 'Yak', category: 'consonant', emoji: '🐂', color: '#a855f7', tracingPath: [{x: 20, y: 15}, {x: 50, y: 50}, {x: 80, y: 15}, {x: 50, y: 50}, {x: 50, y: 85}] },
  { char: 'Z', lowercase: 'z', phonicsSound: 'Zzz', exampleWord: 'Zebra', category: 'consonant', emoji: '🦓', color: '#d946ef', tracingPath: [{x: 20, y: 15}, {x: 80, y: 15}, {x: 20, y: 85}, {x: 80, y: 85}] }
];

export const DIGIT_DATA: DigitData[] = [
  { value: 0, word: 'Zero', emoji: '⭕️', color: '#64748b', visualGroupEmoji: '⭕️', mathTip: 'Zero means none or empty set!', tracingPath: [{x: 50, y: 15}, {x: 20, y: 50}, {x: 50, y: 85}, {x: 80, y: 50}, {x: 50, y: 15}] },
  { value: 1, word: 'One', emoji: '🥇', color: '#ef4444', visualGroupEmoji: '🍎', mathTip: '1 Sun in the sky!', tracingPath: [{x: 35, y: 30}, {x: 50, y: 15}, {x: 50, y: 85}, {x: 30, y: 85}, {x: 70, y: 85}] },
  { value: 2, word: 'Two', emoji: '✌️', color: '#f97316', visualGroupEmoji: '🎈', mathTip: '2 eyes to see the world!', tracingPath: [{x: 25, y: 30}, {x: 50, y: 15}, {x: 75, y: 30}, {x: 25, y: 85}, {x: 80, y: 85}] },
  { value: 3, word: 'Three', emoji: '🤟', color: '#eab308', visualGroupEmoji: '⭐️', mathTip: '3 wheels on a tricycle!', tracingPath: [{x: 25, y: 20}, {x: 70, y: 20}, {x: 45, y: 50}, {x: 75, y: 65}, {x: 25, y: 80}] },
  { value: 4, word: 'Four', emoji: '🍀', color: '#84cc16', visualGroupEmoji: '🚗', mathTip: '4 legs on a friendly dog!', tracingPath: [{x: 65, y: 85}, {x: 65, y: 15}, {x: 20, y: 60}, {x: 80, y: 60}] },
  { value: 5, word: 'Five', emoji: '🖐️', color: '#10b981', visualGroupEmoji: '🍌', mathTip: '5 fingers on your hand!', tracingPath: [{x: 75, y: 15}, {x: 30, y: 15}, {x: 30, y: 45}, {x: 75, y: 55}, {x: 30, y: 85}] },
  { value: 6, word: 'Six', emoji: '🎲', color: '#14b8a6', visualGroupEmoji: '🐝', mathTip: '6 legs on a little bee!', tracingPath: [{x: 70, y: 20}, {x: 30, y: 50}, {x: 30, y: 85}, {x: 75, y: 85}, {x: 75, y: 55}, {x: 30, y: 55}] },
  { value: 7, word: 'Seven', emoji: '🌈', color: '#06b6d4', visualGroupEmoji: '🐥', mathTip: '7 colors in a rainbow!', tracingPath: [{x: 20, y: 15}, {x: 80, y: 15}, {x: 35, y: 85}] },
  { value: 8, word: 'Eight', emoji: '🐙', color: '#3b82f6', visualGroupEmoji: '🍪', mathTip: '8 tentacles on an octopus!', tracingPath: [{x: 50, y: 15}, {x: 25, y: 35}, {x: 75, y: 65}, {x: 50, y: 85}, {x: 25, y: 65}, {x: 75, y: 35}, {x: 50, y: 15}] },
  { value: 9, word: 'Nine', emoji: '🪐', color: '#6366f1', visualGroupEmoji: '⚽️', mathTip: '9 planets in outer space!', tracingPath: [{x: 50, y: 45}, {x: 25, y: 30}, {x: 50, y: 15}, {x: 75, y: 30}, {x: 75, y: 85}] },
  { value: 10, word: 'Ten', emoji: '🔟', color: '#8b5cf6', visualGroupEmoji: '💎', mathTip: '10 toes on two feet!', tracingPath: [{x: 20, y: 20}, {x: 35, y: 15}, {x: 35, y: 85}, {x: 65, y: 15}, {x: 85, y: 50}, {x: 65, y: 85}, {x: 65, y: 15}] },
  { value: 11, word: 'Eleven', emoji: '⚽️', color: '#a855f7', visualGroupEmoji: '🎨', mathTip: '10 plus 1 equals 11!', tracingPath: [{x: 30, y: 15}, {x: 30, y: 85}, {x: 70, y: 15}, {x: 70, y: 85}] },
  { value: 12, word: 'Twelve', emoji: '🕛', color: '#d946ef', visualGroupEmoji: '🍩', mathTip: '12 in a full dozen eggs!', tracingPath: [{x: 25, y: 15}, {x: 25, y: 85}, {x: 55, y: 25}, {x: 80, y: 85}] },
  { value: 13, word: 'Thirteen', emoji: '🧁', color: '#f43f5e', visualGroupEmoji: '🧁', mathTip: '10 plus 3 equals 13!', tracingPath: [{x: 25, y: 15}, {x: 25, y: 85}, {x: 55, y: 20}, {x: 80, y: 50}, {x: 55, y: 85}] },
  { value: 14, word: 'Fourteen', emoji: '🍰', color: '#f97316', visualGroupEmoji: '🍓', mathTip: '14 days in two full weeks!', tracingPath: [{x: 25, y: 15}, {x: 25, y: 85}, {x: 75, y: 15}, {x: 55, y: 60}, {x: 85, y: 60}] },
  { value: 15, word: 'Fifteen', emoji: '🚀', color: '#eab308', visualGroupEmoji: '🚀', mathTip: '15 minutes is a quarter hour!', tracingPath: [{x: 25, y: 15}, {x: 25, y: 85}, {x: 80, y: 15}, {x: 55, y: 45}, {x: 80, y: 85}] },
  { value: 16, word: 'Sixteen', emoji: '🍭', color: '#84cc16', visualGroupEmoji: '🍭', mathTip: '10 plus 6 equals 16!', tracingPath: [{x: 25, y: 15}, {x: 25, y: 85}, {x: 85, y: 20}, {x: 55, y: 85}] },
  { value: 17, word: 'Seventeen', emoji: '🎨', color: '#10b981', visualGroupEmoji: '🎨', mathTip: '10 plus 7 equals 17!', tracingPath: [{x: 25, y: 15}, {x: 25, y: 85}, {x: 55, y: 15}, {x: 85, y: 85}] },
  { value: 18, word: 'Eighteen', emoji: '🚗', color: '#06b6d4', visualGroupEmoji: '🚗', mathTip: '18 wheels on a big tractor truck!', tracingPath: [{x: 25, y: 15}, {x: 25, y: 85}, {x: 65, y: 20}, {x: 65, y: 85}] },
  { value: 19, word: 'Nineteen', emoji: '🧩', color: '#3b82f6', visualGroupEmoji: '🧩', mathTip: '1 less than 20!', tracingPath: [{x: 25, y: 15}, {x: 25, y: 85}, {x: 65, y: 30}, {x: 65, y: 85}] },
  { value: 20, word: 'Twenty', emoji: '🎉', color: '#6366f1', visualGroupEmoji: '🎉', mathTip: '2 tens make 20!', tracingPath: [{x: 25, y: 15}, {x: 50, y: 85}, {x: 75, y: 15}, {x: 75, y: 85}] }
];

export const ALL_BADGES: Badge[] = [
  { id: 'first_step', title: 'First Steps', description: 'Explored your first letter or number!', icon: '🌱', category: 'mastery' },
  { id: 'alphabet_pro', title: 'Alphabet Explorer', description: 'Practiced 10 different alphabets!', icon: '🔤', category: 'literacy' },
  { id: 'vowel_master', title: 'Vowel Virtuoso', description: 'Mastered all vowels (A, E, I, O, U)!', icon: '👑', category: 'literacy' },
  { id: 'digit_dynamo', title: 'Digit Dynamo', description: 'Counted all digits 0 through 10!', icon: '🔢', category: 'numeracy' },
  { id: 'subitizing_star', title: 'Subitizing Star', description: 'Completed a Monster Feast game without mistakes!', icon: '🦁', category: 'numeracy' },
  { id: 'tracing_wizard', title: 'Tracing Wizard', description: 'Achieved 85%+ accuracy on 5 tracing paths!', icon: '🎨', category: 'tracing' },
  { id: 'streak_3', title: '3-Day Streak Hero', description: 'Logged in and practiced 3 days in a row!', icon: '🔥', category: 'streak' },
  { id: 'quiz_ace', title: 'Quiz Champion', description: 'Scored 100% on a gamified assessment quiz!', icon: '🏆', category: 'mastery' },
  { id: 'lms_graduate', title: 'First Open Graduate', description: 'Completed a curriculum age tier milestone!', icon: '🎓', category: 'mastery' }
];
