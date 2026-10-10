import { LetterData, DigitData, Badge, AgeTier, CurriculumTierDetail } from '../types';

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

export const CURRICULUM_TIER_DETAILS: Record<AgeTier, CurriculumTierDetail> = {
  'pre-k': {
    tier: 'pre-k',
    name: 'Little Explorers',
    ageRange: 'Ages 2-4',
    gradeLabel: 'Pre-K & Toddlers',
    tagline: 'Sensory-first phonics, tactile visual counting (1-5), and intuitive directional play.',
    description: 'Engineered for earliest developmental milestones. Focuses on auditory discrimination of letter phonics, subitizing small sets visually, big touch-target hand tracing, and gross directional navigation with cute mascots.',
    mascotEmoji: '🐣',
    color: 'from-amber-400 to-orange-500',
    badgeBg: 'bg-amber-100 text-amber-800 border-amber-300',
    borderAccent: '#FF9F45',
    cognitiveStage: 'Sensory-Motor & Early Pre-Operational',
    pedagogicalPhilosophy: 'Montessori sensory-based tactile exposure paired with high-frequency phonemic repetition. Avoids cognitive overload by pairing one sound to one vivid visual mascot.',
    dailyRecommendationMinutes: 10,
    coreMilestones: [
      'Identifies and vocalizes 5 primary vowels (A, E, I, O, U) and first consonants',
      'Visual subitizing: instantly recognizes groups of 1 to 5 objects without counting',
      'Understands spatial arrows: Forward, Turn, and Jump in coding quests',
      'Develops fine motor grip habits with oversized finger-stroke tracing'
    ],
    subjects: {
      alphabets: {
        subjectId: 'alphabets',
        title: 'Alphabets & Phonics',
        emoji: '🔤',
        focusTitle: 'Primary Vowels & Visual Letter Shapes',
        scopeSummary: 'Letters A through E, O, and friendly consonants with instant clear voiced pronunciations and animal cues.',
        recommendedHighlights: ['Letter A (Apple)', 'Letter B (Bear)', 'Letter C (Cat)', 'Letter O (Owl)'],
        parentExplanation: 'Toddlers learn best when they can touch a high-contrast letter and immediately hear both its letter name and its natural phonemic sound (e.g., Ah for Apple).',
        linkTab: 'alphabets'
      },
      digits: {
        subjectId: 'digits',
        title: 'Digits & Counting',
        emoji: '🔢',
        focusTitle: 'Visual Subitizing (0 - 5)',
        scopeSummary: 'Immediate visual recognition of quantities 1 to 5 using apples, balloons, and stars with one-tap tactile feedback.',
        recommendedHighlights: ['Number 1 (One Sun)', 'Number 2 (Two Eyes)', 'Number 3 (Tricycle)', 'Number 5 (Hand Fingers)'],
        parentExplanation: 'Subitizing allows toddlers to perceive small numbers instantly without counting individual items 1-by-1, building the core foundation for future addition.',
        linkTab: 'digits'
      },
      coding: {
        subjectId: 'coding',
        title: 'Learn Coding Studio',
        emoji: '💻',
        focusTitle: 'Directional Arrows & Scratch Block Logic',
        scopeSummary: 'Visual puzzle blocks and mascot adventures with directional buttons (Forward, Turn, Jump) to gather treats with zero typing errors.',
        recommendedHighlights: ['Mission 1: Bunny Hop to Carrot', 'Scratch Puzzle Blocks', 'Visual Sequencing Logic'],
        parentExplanation: 'Kids don\'t need to read syntax to think algorithmically. Sequencing puzzle commands teaches cause-and-effect and spatial reasoning.',
        linkTab: 'coding'
      },
      encyclopedia: {
        subjectId: 'encyclopedia',
        title: 'Kids Encyclopedia',
        emoji: '📚',
        focusTitle: 'Animals, Daily Objects & Colors',
        scopeSummary: 'Bite-sized animal profiles, colors of the rainbow, and friendly farm wonders with full text-to-speech reading.',
        recommendedHighlights: ['Animals & Wildlife', 'Letter Origins', 'Nature Wonders'],
        parentExplanation: 'Fosters curiosity and conversational vocabulary before formal schooling through colorful photos and sound.',
        linkTab: 'encyclopedia'
      },
      poems: {
        subjectId: 'poems',
        title: 'Poems & Rhymes',
        emoji: '⭐',
        focusTitle: 'Nursery Classics & Action Rhymes',
        scopeSummary: 'Twinkle Twinkle Little Star, Baa Baa Black Sheep, and Humpty Dumpty with rhyming word highlights.',
        recommendedHighlights: ['Twinkle Twinkle Little Star', 'Baa Baa Black Sheep', 'Hickory Dickory Dock'],
        parentExplanation: 'Rhythm and rhyme training helps infant neural pathways tune into the musical cadences of English phonemes.',
        linkTab: 'poems'
      },
      drawings: {
        subjectId: 'drawings',
        title: 'Drawings & Art Studio',
        emoji: '🎨',
        focusTitle: 'Primary Shapes & Friendly Faces',
        scopeSummary: 'Oversized coloring outlines with bright primary colors and instant fill/brush sensory tools.',
        recommendedHighlights: ['Happy Sun', 'Smiling Apple', 'Friendly Puppy'],
        parentExplanation: 'Freehand scribbling and color tapping builds finger muscle control and visual-spatial confidence.',
        linkTab: 'drawings'
      },
      games: {
        subjectId: 'games',
        title: 'Interactive Games',
        emoji: '🎮',
        focusTitle: 'Bubble Pop & Monster Feast 1-5',
        scopeSummary: 'Pop floating alphabet bubbles and feed friendly monsters up to 5 snacks with instant joyful audio celebration.',
        recommendedHighlights: ['Bubble Pop (Vowels)', 'Monster Feast (1 to 5)', 'Large Letter Tracing'],
        parentExplanation: 'Play-based reinforcement creates positive emotional associations with letters and numbers without test anxiety.',
        linkTab: 'bubble-pop'
      }
    },
    parentGuideTips: [
      'Encourage your toddler to repeat letter sounds out loud ("Ah-Ah-Apple") after the app speaks them.',
      'Keep sessions between 5 to 12 minutes to nurture focus without sensory fatigue.',
      'Use the freeform Drawing Studio alongside letter tracing to let them experiment with colors.',
      'Remember all higher tiers remain open: feel free to preview Kindergarten counting whenever your child is curious!'
    ]
  },

  'kindergarten': {
    tier: 'kindergarten',
    name: 'Kindy Champions',
    ageRange: 'Ages 5-6',
    gradeLabel: 'Kindergarten & Early K-1',
    tagline: 'Phonics blending, 1-to-1 correspondence (0-10), loops in coding, and guided handwriting.',
    description: 'Optimized for Kindergarten core milestones. Bridges visual recognition into active phonics blending, counting up to 10 with one-to-one correspondence, basic loops in coding, and guided stroke-by-stroke tracing.',
    mascotEmoji: '🦁',
    color: 'from-sky-400 to-blue-600',
    badgeBg: 'bg-sky-100 text-sky-800 border-sky-300',
    borderAccent: '#4D96FF',
    cognitiveStage: 'Concrete Symbolic & Early Operational',
    pedagogicalPhilosophy: 'Systematic synthetic phonics (Science of Reading framework) combined with concrete manipulatives in math and algorithmic block repeat loops.',
    dailyRecommendationMinutes: 15,
    coreMilestones: [
      'Mastery of all 26 uppercase & lowercase letters and initial consonant sounds',
      'One-to-one counting correspondence up to 10 with "more than / less than" concepts',
      'Algorithmic loops: repeats code sequences (2x, 3x) to avoid repetitive instructions',
      'Follows multi-point tracing paths with guided directional stroke accuracy'
    ],
    subjects: {
      alphabets: {
        subjectId: 'alphabets',
        title: 'Alphabets & Phonics',
        emoji: '🔤',
        focusTitle: 'Full Alphabet, Consonants & Tracing Paths',
        scopeSummary: 'All 26 letters with uppercase and lowercase toggle, mouth formation guidance, and guided stroke tracing paths.',
        recommendedHighlights: ['All 26 Letters A-Z', 'Vowel vs Consonant Groups', 'Guided Finger Tracing'],
        parentExplanation: 'Children learn to distinguish uppercase and lowercase forms while cementing fine-motor letter formation habits.',
        linkTab: 'alphabets'
      },
      digits: {
        subjectId: 'digits',
        title: 'Digits & Counting',
        emoji: '🔢',
        focusTitle: 'Numbers 0 through 10 & Counting Feasts',
        scopeSummary: 'Complete number recognition for 0 to 10 with visual quantity groups (e.g. 7 rainbow colors, 8 octopus tentacles).',
        recommendedHighlights: ['Numbers 0 to 10', 'Number Concept of Zero', 'Monster Counting Feast'],
        parentExplanation: 'Solidifies understanding that the final counted number represents the total quantity of the collection (cardinality principle).',
        linkTab: 'digits'
      },
      coding: {
        subjectId: 'coding',
        title: 'Learn Coding Studio',
        emoji: '💻',
        focusTitle: 'Repeat Loops, Blocks & Intro to HTML Tags',
        scopeSummary: 'Program Cyber-Cat and Robo-Bot through loops and obstacles, plus discover how websites use HTML building blocks like <h1> and <button>.',
        recommendedHighlights: ['Mission 7: Cat Loop Patrol', 'Intro to HTML Building Tags', 'Scratch Dance Party'],
        parentExplanation: 'Loops introduce pattern recognition and efficiency, while introductory HTML tags give kids early confidence in building real digital pages.',
        linkTab: 'coding'
      },
      encyclopedia: {
        subjectId: 'encyclopedia',
        title: 'Kids Encyclopedia',
        emoji: '📚',
        focusTitle: 'Dinosaurs, Space Planets & Habitats',
        scopeSummary: 'Fascinating entries on T-Rex, the Solar System, oceans, and plants with kid-friendly questions and fun facts.',
        recommendedHighlights: ['Planets & Space', 'Dinosaurs & Fossils', 'Ocean Creatures'],
        parentExplanation: 'Builds early schema in STEM fields by answering "why" questions with accurate science explained in simple words.',
        linkTab: 'encyclopedia'
      },
      poems: {
        subjectId: 'poems',
        title: 'Poems & Rhymes',
        emoji: '⭐',
        focusTitle: 'Animal Poems & Story Verses',
        scopeSummary: 'Mary Had a Little Lamb, The Itsy Bitsy Spider, and fun whimsical rhymes with audio recital cadence.',
        recommendedHighlights: ['The Itsy Bitsy Spider', 'Mary Had a Little Lamb', 'Little Bo Peep'],
        parentExplanation: 'Memorizing and reciting rhythmic lines develops working memory capacity and expressive speaking.',
        linkTab: 'poems'
      },
      drawings: {
        subjectId: 'drawings',
        title: 'Drawings & Art Studio',
        emoji: '🎨',
        focusTitle: 'Animal Outlines & Symmetry',
        scopeSummary: 'Guided animal outlines (Lion, Butterfly, Rocket) with sticker stamps and custom brush widths.',
        recommendedHighlights: ['Playful Lion', 'Monarch Butterfly', 'Space Rocket'],
        parentExplanation: 'Refines hand-eye coordination and spatial judgment within defined vector borders.',
        linkTab: 'drawings'
      },
      games: {
        subjectId: 'games',
        title: 'Interactive Games',
        emoji: '🎮',
        focusTitle: 'Card Memory Match & Phonics Stories',
        scopeSummary: 'Memory card matching with audio feedback and short decodable phonics stories with interactive word tap.',
        recommendedHighlights: ['Card Match (Literacy & Math)', 'Phonics Story Reader', 'Star Assessment Quiz'],
        parentExplanation: 'Reinforces recall retrieval strength through self-paced game loops that reward persistence with collectible stars.',
        linkTab: 'card-match'
      }
    },
    parentGuideTips: [
      'Have your child try the guided letter tracing in "Both (Aa)" mode to see capital and lowercase connections.',
      'Celebrate when they find code shortcuts using "Repeat 2x" in the Coding Studio quests.',
      'Use the Phonics Stories module at bedtime for shared reading and word spotting.',
      'Check the Parental Dashboard weekly to see which letters have been practiced most frequently.'
    ]
  },

  'grade-1-2': {
    tier: 'grade-1-2',
    name: 'Junior Scholars',
    ageRange: 'Ages 7-8',
    gradeLabel: 'Grade 1-2 Foundations',
    tagline: 'Sight words, teen numbers (10-20), conditional coding logic, and science explorations.',
    description: 'Designed for early elementary scholars. Deepens reading fluency, word family building, numbers up to 20 with number bonds, conditional logic (if-has-key then unlock) in coding, and turtle geometry.',
    mascotEmoji: '🦉',
    color: 'from-emerald-400 to-teal-600',
    badgeBg: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    borderAccent: '#6BCB77',
    cognitiveStage: 'Concrete Operational & Logical Systems',
    pedagogicalPhilosophy: 'Cognitive schema expansion: moving from concrete objects to relational logic, basic algebra bonds, and multi-step computational algorithms.',
    dailyRecommendationMinutes: 20,
    coreMilestones: [
      'Fluent decoding of high-frequency words and reading comprehension of multi-stanza poems',
      'Numbers 10 through 20 mastery, place-value intuition, and basic number bond pairs',
      'Conditional branching logic in coding: understands rules and sequential subroutines',
      'Solves multi-step challenges independently and explains deductive reasoning'
    ],
    subjects: {
      alphabets: {
        subjectId: 'alphabets',
        title: 'Alphabets & Phonics',
        emoji: '🔤',
        focusTitle: 'Sight Words, Digraphs & Word Families',
        scopeSummary: 'Advanced phonics sounds (Kuh/Sss, Kwuh, X-ray), spelling patterns, and upper/lowercase handwriting fluency.',
        recommendedHighlights: ['Digraph Phonics Sounds', 'Phonics Story Reader', 'Spelling Patterns'],
        parentExplanation: 'Helps students master irregular English phonemes and build rapid sight-word recognition essential for 1st-2nd grade reading.',
        linkTab: 'alphabets'
      },
      digits: {
        subjectId: 'digits',
        title: 'Digits & Counting',
        emoji: '🔢',
        focusTitle: 'Numbers 11 through 20 & Number Bonds',
        scopeSummary: 'Teen numbers (Eleven to Twenty), base-10 decomposition (10 + 4 = 14), and missing sequence pattern quizzes.',
        recommendedHighlights: ['Numbers 11 to 20', 'Teen Number Decomposition', 'Counting Feast Speed Run'],
        parentExplanation: 'Understanding teen numbers as "a group of ten plus some ones" is the bedrock of place value and multi-digit addition.',
        linkTab: 'digits'
      },
      coding: {
        subjectId: 'coding',
        title: 'Learn Coding Studio',
        emoji: '💻',
        focusTitle: 'Conditionals, HTML, CSS & JavaScript Interactivity',
        scopeSummary: 'Missions requiring keys, gates, and leap jumps, alongside creative web coding: HTML skeleton structures, CSS neon styles, and JavaScript button clicks.',
        recommendedHighlights: ['Mission 15: Dungeon Key Vault', 'HTML & CSS Live Sandbox', 'JavaScript Cookie Clicker'],
        parentExplanation: 'Conditional thinking ("If I have key, unlock gate") blends seamlessly into web logic (HTML tags, CSS colors, JavaScript click reactions).',
        linkTab: 'coding'
      },
      encyclopedia: {
        subjectId: 'encyclopedia',
        title: 'Kids Encyclopedia',
        emoji: '📚',
        focusTitle: 'Inventions, Deep Ocean & Earth Systems',
        scopeSummary: 'In-depth science topics on electricity, renewable energy, ocean trenches, ancient castles, and inventions.',
        recommendedHighlights: ['Inventions & Machines', 'Deep Ocean Science', 'Earth & Weather'],
        parentExplanation: 'Encourages non-fiction informational reading comprehension aligned with elementary science standards.',
        linkTab: 'encyclopedia'
      },
      poems: {
        subjectId: 'poems',
        title: 'Poems & Rhymes',
        emoji: '⭐',
        focusTitle: 'Nature Lyrics & Narrative Verses',
        scopeSummary: 'Nature lyrics (The Wind, Rain on the Green Grass, Autumn Leaves) with rich vocabulary definitions and rhythm meters.',
        recommendedHighlights: ['The Wind (Robert Louis Stevenson)', 'Autumn Leaves', 'Stopping by Woods'],
        parentExplanation: 'Exposes young readers to figurative language, metaphor, and evocative imagery to enhance creative writing skills.',
        linkTab: 'poems'
      },
      drawings: {
        subjectId: 'drawings',
        title: 'Drawings & Art Studio',
        emoji: '🎨',
        focusTitle: 'Detailed Scenes & Cultural Art',
        scopeSummary: 'Complex vector templates including historical monuments, vehicles, fairy tales, and multi-color palettes.',
        recommendedHighlights: ['Castle Fortress', 'Deep Ocean Submarine', 'Cultural Truck Art'],
        parentExplanation: 'Enhances patience and spatial detail planning through layered artwork and fine precision coloring.',
        linkTab: 'drawings'
      },
      games: {
        subjectId: 'games',
        title: 'Interactive Games',
        emoji: '🎮',
        focusTitle: 'Speed Quizzes & Milestone Assessments',
        scopeSummary: 'Timed gamified quizzes covering spelling, math mental arithmetic, and science trivia with instant scoring and badges.',
        recommendedHighlights: ['Gamified Assessment Quiz', 'Phonics Story Comprehension', 'Mastery Certificates'],
        parentExplanation: 'Tests retention in a low-stress, game-like environment while generating objective progress data for parents.',
        linkTab: 'assessment'
      }
    },
    parentGuideTips: [
      'Encourage your child to explain their coding solutions out loud before pressing "Run Program".',
      'Look at the math tips on digits 11-20 to discuss how 12 equals a full dozen or 14 equals two full weeks.',
      'Download and print the official Certificate of Mastery PDF when they complete their milestones.',
      'Allow them to freely explore the Turtle Drawing Studio to see how math angles create stars and spirals.'
    ]
  },

  'k12-foundations': {
    tier: 'k12-foundations',
    name: 'Senior Foundations',
    ageRange: 'Ages 9-12+',
    gradeLabel: 'K-12 Elementary Mastery',
    tagline: 'Advanced spelling, arithmetic logic, turtle geometry, and real JavaScript/Python code bridges.',
    description: 'Advanced curriculum for upper elementary and foundational K-12 learners. Features real code syntax translation, nested loops and geometric algorithms in the Turtle Canvas, comprehensive science inquiries, and analytics.',
    mascotEmoji: '🚀',
    color: 'from-purple-400 to-indigo-600',
    badgeBg: 'bg-purple-100 text-purple-800 border-purple-300',
    borderAccent: '#8B5CF6',
    cognitiveStage: 'Formal Operational & Algorithmic Synthesis',
    pedagogicalPhilosophy: 'Constructivist computational learning: empowering students to model mathematical patterns, investigate science etymology, and bridge block coding into real text scripts.',
    dailyRecommendationMinutes: 25,
    coreMilestones: [
      'Mastery of advanced spelling, Greek/Latin roots, and complex comprehension across encyclopedic domains',
      'Mental arithmetic pattern recognition, number bond algebra, and coordinate plane spatial thinking',
      'Translates algorithmic block logic into real JavaScript / Python syntax and calculates angle turns',
      'Designs autonomous procedures using loops, nested loops, and modular subroutines'
    ],
    subjects: {
      alphabets: {
        subjectId: 'alphabets',
        title: 'Alphabets & Phonics',
        emoji: '🔤',
        focusTitle: 'Etymology, Roots & Advanced Phonics',
        scopeSummary: 'Full alphabet analysis including historical letter origins (Phoenician/Greek roots), silent letters, and power vocabulary.',
        recommendedHighlights: ['Letter Etymology & Origins', 'Mouth Shape Mechanics', 'All 26 High-Level Articles'],
        parentExplanation: 'Connects linguistic history with vocabulary development, preparing students for advanced middle-school reading comprehension.',
        linkTab: 'alphabets'
      },
      digits: {
        subjectId: 'digits',
        title: 'Digits & Counting',
        emoji: '🔢',
        focusTitle: 'Number Theory, Patterns & Multiples',
        scopeSummary: 'Number theory tips across 0-20 (even/odd, multiples, prime hints, quarter hours, dozens) with mental math quizzes.',
        recommendedHighlights: ['Even and Odd Analysis', 'Place Value Concepts', 'Comprehensive Math Quizzes'],
        parentExplanation: 'Builds algebraic thinking and number sense flexibility needed for pre-algebra and word problems.',
        linkTab: 'digits'
      },
      coding: {
        subjectId: 'coding',
        title: 'Learn Coding Studio',
        emoji: '💻',
        focusTitle: 'Languages Studio: Python, C++, C#, JS & SQL',
        scopeSummary: 'Comprehensive multi-language studio featuring Python AI scripts, C++ supersonic game engine physics, C# Unity 3D game logic, SQL databases, and the Rosetta Stone translator.',
        recommendedHighlights: ['Python AI & Space Explorer', 'C++ Supersonic Engine Sim', 'C# Unity Game Controller', 'Coding Rosetta Stone'],
        parentExplanation: 'Students experience how the same core algorithms power different real-world industries: game development in C++/C#, artificial intelligence in Python, and databases in SQL.',
        linkTab: 'coding'
      },
      encyclopedia: {
        subjectId: 'encyclopedia',
        title: 'Kids Encyclopedia',
        emoji: '📚',
        focusTitle: 'World History, Physics & Astronomy',
        scopeSummary: 'Over 250 deep knowledge articles covering astronomy, world history, biological classifications, and scientific discoveries.',
        recommendedHighlights: ['Solar System & Galaxies', 'Physics Wonders', 'World Civilizations'],
        parentExplanation: 'Stimulates independent research habits and critical evaluation of scientific and historical evidence.',
        linkTab: 'encyclopedia'
      },
      poems: {
        subjectId: 'poems',
        title: 'Poems & Rhymes',
        emoji: '⭐',
        focusTitle: 'Classic Verses & Poetic Structures',
        scopeSummary: 'Classic literature poems with vocabulary breakdowns, rhyme scheme analysis, and expressive interpretation guidelines.',
        recommendedHighlights: ['Classics & Master Verses', 'Poetic Devices & Meter', 'Vocabulary Master Definitions'],
        parentExplanation: 'Deepens understanding of mood, tone, rhythm, and literary devices in celebrated English verse.',
        linkTab: 'poems'
      },
      drawings: {
        subjectId: 'drawings',
        title: 'Drawings & Art Studio',
        emoji: '🎨',
        focusTitle: 'Freehand Canvas & Perspective Design',
        scopeSummary: 'Full creative art studio featuring freehand pens, vector templates, opacity layers, custom palette picker, and export.',
        recommendedHighlights: ['Freeform Canvas Studio', 'Architectural Perspective', 'Digital Art Export'],
        parentExplanation: 'Unlocks unrestrained digital artistic expression while reinforcing geometry, composition, and visual design skills.',
        linkTab: 'drawings'
      },
      games: {
        subjectId: 'games',
        title: 'Interactive Games',
        emoji: '🎮',
        focusTitle: 'Comprehensive Assessments & LMS Export',
        scopeSummary: 'Standardized difficulty assessments, detailed developmental analytics, and one-click JSON LMS export for parents and tutors.',
        recommendedHighlights: ['100% Comprehensive Quiz', 'Local Developmental Analytics', 'One-Click LMS Roster Export'],
        parentExplanation: 'Provides clear diagnostic data on mastered vs developing skills to guide personalized home instruction.',
        linkTab: 'assessment'
      }
    },
    parentGuideTips: [
      'Encourage your child to use the "Blocks vs Real Code" toggle in the Coding Studio to see how JavaScript works.',
      'Challenge them to create geometric rosettes and polygons using the Turtle Drawing Studio repeat loops.',
      'Use the Local Developmental Insights tool in Settings to identify strengths across literacy and numeracy.',
      'Remember that all curriculum levels remain open: reviewing foundational concepts is always accessible and encouraged!'
    ]
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
