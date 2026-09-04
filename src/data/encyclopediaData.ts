import { EncyclopediaEntry, EncyclopediaCategory } from '../types';

export const ENCYCLOPEDIA_CATEGORIES: { id: EncyclopediaCategory; label: string; icon: string; description: string; badgeColor: string }[] = [
  {
    id: 'alphabets',
    label: 'Alphabets A-Z',
    icon: '🔤',
    description: 'Every letter from A to Z explained with analogies, phonics, mouth shapes, and ancient origins.',
    badgeColor: 'bg-[#FF6B6B]/15 text-[#FF6B6B] border-[#FF6B6B]'
  },
  {
    id: 'numbers',
    label: 'Numbers & Math',
    icon: '🔢',
    description: 'From magical Zero to cosmic Infinity — how numbers build everything around us.',
    badgeColor: 'bg-[#6BCB77]/15 text-[#6BCB77] border-[#6BCB77]'
  },
  {
    id: 'solar-system',
    label: 'Solar System',
    icon: '🪐',
    description: 'Blasting off through the Sun, Moon, and glorious giant ringed planets.',
    badgeColor: 'bg-[#4D96FF]/15 text-[#4D96FF] border-[#4D96FF]'
  },
  {
    id: 'earth-elements',
    label: 'Earth & Nature',
    icon: '🌍',
    description: 'Water, fire, air, earth, trees, and rainbow wonders that keep our planet thriving.',
    badgeColor: 'bg-[#FFD93D]/25 text-[#2D2D2D] border-[#FFD93D]'
  },
  {
    id: 'countries-world',
    label: 'Countries & Geography',
    icon: '🗺️',
    description: 'Exploring oceans, continents, and incredible places across our globe.',
    badgeColor: 'bg-purple-100 text-purple-700 border-purple-300'
  }
];

export const ENCYCLOPEDIA_ENTRIES: EncyclopediaEntry[] = [
  // ==========================================
  // ALPHABETS A TO Z (FULL 26 LETTERS)
  // ==========================================
  {
    id: 'letter-a',
    title: 'Letter A (Aa)',
    symbol: 'Aa',
    pronunciation: '(ay / ah)',
    category: 'alphabets',
    tagline: 'The first letter of the alphabet and the queen of vowel sounds.',
    analogy: {
      title: 'The Tent with a Belt (or Rocket Ship)',
      story: 'Think of capital "A" like a camping tent or a pointed rocket ready to launch into space. The two diagonal poles support the top, and a little horizontal walkway bar in the middle keeps the walls from blowing open in the wind!',
      emoji: '⛺'
    },
    howItWorks: {
      title: 'How to Form and Speak Letter A',
      points: [
        'Mouth Shape: Drop your jaw down comfortably, keep your tongue relaxed flat, and let warm air flow smoothly: "Ahhh!"',
        'Vowel Power: A is a vowel! That means your teeth and lips do not block the air when you say it.',
        'Two Main Sounds: Short "a" as in Apple (🍎) and Long "a" as in Airplane (✈️).'
      ]
    },
    anatomyDiagram: {
      headline: 'Anatomy of Letter A',
      parts: [
        { label: 'Left Slope', desc: 'Slanted line going up to the peak.' },
        { label: 'Right Slope', desc: 'Slanted line sliding back down to earth.' },
        { label: 'Crossbar', desc: 'Horizontal bridge holding both sides together.' },
        { label: 'Lowercase (a)', desc: 'A round tummy circle with a small straight tail on the right.' }
      ]
    },
    funFacts: [
      'A is the 3rd most common letter in the entire English language!',
      'Music notes start with A (A, B, C, D, E, F, G).',
      'In ancient writing 3,000 years ago, A looked like an upside-down ox head with horns!'
    ],
    kidWords: [
      { word: 'Apple', emoji: '🍎', meaning: 'A juicy, crunchy fruit that grows on orchards.' },
      { word: 'Astronaut', emoji: '🧑‍🚀', meaning: 'A brave space explorer flying beyond Earth.' },
      { word: 'Alligator', emoji: '🐊', meaning: 'A prehistoric reptile with powerful jaws.' }
    ],
    didYouKnowOrigin: 'Around 3,500 years ago in ancient Phoenicia, this letter was called "Aleph", which meant "Ox". If you flip capital "A" upside down, the two legs look just like two horns and the crossbar looks like ears!',
    microQuiz: {
      question: 'Is the letter A a vowel or a consonant?',
      options: ['Vowel', 'Consonant', 'Number'],
      correctIndex: 0,
      explanation: 'A is one of the five primary vowels (A, E, I, O, U)!'
    },
    seeAlso: [
      { id: 'letter-b', title: 'Letter B', category: 'alphabets' },
      { id: 'letter-e', title: 'Letter E', category: 'alphabets' },
      { id: 'letter-o', title: 'Letter O', category: 'alphabets' }
    ]
  },
  {
    id: 'letter-b',
    title: 'Letter B (Bb)',
    symbol: 'Bb',
    pronunciation: '(bee / buh)',
    category: 'alphabets',
    tagline: 'The second letter and the bouncy popping consonant.',
    analogy: {
      title: 'The Person with Two Big Backpacks',
      story: 'Capital "B" looks like a tall standing hiker wearing one backpack on top and another backpack on the bottom! Lowercase "b" only carries one backpack on its lower tummy.',
      emoji: '🎒'
    },
    howItWorks: {
      title: 'How to Form and Speak Letter B',
      points: [
        'Mouth Shape: Press both lips gently together to stop the air, then quickly pop them open: "Buh!"',
        'Voiced Sound: If you touch your throat when saying "buh", you will feel a tiny buzzing vibration!',
        'Direction Check: Remember, "b" has its belly in front, like walking forward!'
      ]
    },
    anatomyDiagram: {
      headline: 'Anatomy of Letter B',
      parts: [
        { label: 'Spine', desc: 'Straight vertical pole standing tall.' },
        { label: 'Upper Loop', desc: 'Smaller curved bubble up top.' },
        { label: 'Lower Loop', desc: 'Slightly bigger curved belly on the bottom.' }
      ]
    },
    funFacts: [
      'B is a "bilabial" sound — that is a scientist word meaning "made with two lips"!',
      'Honeybees dance in a figure-8, which looks like a sideways B.',
      'Baseball, Basketball, and Bowling all start with B!'
    ],
    kidWords: [
      { word: 'Bear', emoji: '🐻', meaning: 'A furry mammal that loves berries and honey.' },
      { word: 'Ball', emoji: '⚽', meaning: 'A spherical toy made for bouncing and kicking.' },
      { word: 'Butterfly', emoji: '🦋', meaning: 'An insect with colorful wings transformed from a caterpillar.' }
    ],
    didYouKnowOrigin: 'Ancient people called this letter "Beth", which meant "House"! If you looked at early drawings, it was a floor plan of a little two-room shelter.',
    microQuiz: {
      question: 'Which body parts do you use to make the "Buh" sound?',
      options: ['Your lips', 'Your nose', 'Your elbows'],
      correctIndex: 0,
      explanation: 'You gently press both lips together and pop them open!'
    },
    seeAlso: [
      { id: 'letter-d', title: 'Letter D', category: 'alphabets' },
      { id: 'letter-p', title: 'Letter P', category: 'alphabets' }
    ]
  },
  {
    id: 'letter-c',
    title: 'Letter C (Cc)',
    symbol: 'Cc',
    pronunciation: '(see / kuh)',
    category: 'alphabets',
    tagline: 'The chameleon letter that can sound crisp like "K" or soft like "S".',
    analogy: {
      title: 'The Crunchy Cookie with a Bite Missing',
      story: 'Capital "C" is an open circle — exactly like someone took a big hungry bite out of a round chocolate chip cookie! It keeps its mouth open wide waiting for another bite.',
      emoji: '🍪'
    },
    howItWorks: {
      title: 'The Magic Dual Sounds of C',
      points: [
        'Hard C ("Kuh"): Before A, O, or U, it sounds crunchy like "Cat", "Cup", and "Car".',
        'Soft C ("Sss"): Before E, I, or Y, it hisses softly like "City", "Cent", and "Circle".',
        'Teamwork: When paired with H (CH), it makes the "Choo-choo" train sound!'
      ]
    },
    anatomyDiagram: {
      headline: 'Anatomy of Letter C',
      parts: [
        { label: 'Top Curve', desc: 'Smooth arch reaching over to the right.' },
        { label: 'Back Spine', desc: 'Gentle crescent curve bending backward.' },
        { label: 'Bottom Hook', desc: 'Base arch sweeping back forward.' }
      ]
    },
    funFacts: [
      'In Roman numerals, C stands for the number 100 (from the Latin word Centum)!',
      'Cats purr up to 150 vibrations every second.',
      'C is one of the few letters where uppercase and lowercase look almost identical.'
    ],
    kidWords: [
      { word: 'Cat', emoji: '🐱', meaning: 'A friendly whiskered pet that purrs when happy.' },
      { word: 'Castle', emoji: '🏰', meaning: 'A grand stone fortress with towers and gates.' },
      { word: 'Cloud', emoji: '☁️', meaning: 'A fluffy white bundle of tiny water droplets floating in the sky.' }
    ],
    didYouKnowOrigin: 'Ancient Phoenicians called C "Gimel", which meant "Camel"! Its curve originally represented the camel’s proud hump.',
    microQuiz: {
      question: 'What sound does C make in the word "Cat"?',
      options: ['Hard "Kuh"', 'Soft "Sss"', 'Loud "Buh"'],
      correctIndex: 0,
      explanation: 'In "Cat", C makes the hard "Kuh" sound!'
    },
    seeAlso: [
      { id: 'letter-k', title: 'Letter K', category: 'alphabets' },
      { id: 'letter-s', title: 'Letter S', category: 'alphabets' }
    ]
  },
  {
    id: 'letter-d',
    title: 'Letter D (Dd)',
    symbol: 'Dd',
    pronunciation: '(dee / duh)',
    category: 'alphabets',
    tagline: 'The drumming dinosaur letter with a big round belly.',
    analogy: {
      title: 'The Half-Moon Sailboat',
      story: 'Imagine a boat mast standing tall and straight. On one side, the wind catches a giant curved sail stretching from the top all the way to the bottom. That is capital D sailing across the sea!',
      emoji: '⛵'
    },
    howItWorks: {
      title: 'How to Speak and Write D',
      points: [
        'Mouth Shape: Tap the tip of your tongue against the roof of your mouth just behind your upper teeth: "Duh!"',
        'B vs D Secret: For lowercase "d", you draw a round donut first, then add the tall stick on the right (donut then stick = d).'
      ]
    },
    anatomyDiagram: {
      headline: 'Anatomy of Letter D',
      parts: [
        { label: 'Mast', desc: 'Tall vertical stroke on the left.' },
        { label: 'Full Arc', desc: 'One continuous giant curved belly connecting top to bottom.' }
      ]
    },
    funFacts: [
      'Dolphins sleep with one eye open to watch for friends and sharks!',
      'Dinosaurs ruled our planet for more than 160 million years.',
      'Dogs have a sense of smell 10,000 times stronger than humans.'
    ],
    kidWords: [
      { word: 'Duck', emoji: '🦆', meaning: 'A web-footed bird that loves splashing in ponds.' },
      { word: 'Dinosaur', emoji: '🦖', meaning: 'An ancient reptile that walked the Earth millions of years ago.' },
      { word: 'Drum', emoji: '🥁', meaning: 'A musical percussion instrument that keeps the beat.' }
    ],
    didYouKnowOrigin: 'D comes from the ancient word "Daleth", meaning "Door". In old hieroglyphs, it looked like a triangular tent flap opening to let people inside.',
    microQuiz: {
      question: 'Where does your tongue go to say "Duh"?',
      options: ['Against the roof behind your teeth', 'Sticking all the way out', 'Curled backward'],
      correctIndex: 0,
      explanation: 'Your tongue taps right behind your upper front teeth!'
    },
    seeAlso: [
      { id: 'letter-b', title: 'Letter B', category: 'alphabets' },
      { id: 'letter-t', title: 'Letter T', category: 'alphabets' }
    ]
  },
  {
    id: 'letter-e',
    title: 'Letter E (Ee)',
    symbol: 'Ee',
    pronunciation: '(ee / eh)',
    category: 'alphabets',
    tagline: 'The champion of English — the single most used letter in our language!',
    analogy: {
      title: 'The Comb or Bookshelf',
      story: 'Capital "E" looks like a neat bookshelf with a top shelf, a middle shelf, and a bottom shelf, all connected to a sturdy back wall. Keep all your favorite books stacked here!',
      emoji: '📚'
    },
    howItWorks: {
      title: 'How to Master Letter E',
      points: [
        'Short E ("Eh"): Open mouth slightly and say "Eh" like Elephant or Egg.',
        'Long E ("Ee"): Smile wide and stretch your lips: "Ee" like Eagle or Bee.',
        'Magic Silent E: When placed at the end of a word, E stays quiet and makes the previous vowel say its own name (e.g. Cap becomes Cape!).'
      ]
    },
    anatomyDiagram: {
      headline: 'Anatomy of Letter E',
      parts: [
        { label: 'Backbone', desc: 'Vertical column.' },
        { label: 'Top Arm', desc: 'Upper horizontal beam.' },
        { label: 'Middle Arm', desc: 'Slightly shorter middle beam.' },
        { label: 'Bottom Arm', desc: 'Ground base beam.' }
      ]
    },
    funFacts: [
      'E appears in about 11% of all words written in English!',
      'Earth, Elephant, and Electricity all start with E.',
      'Lowercase "e" is drawn with a little baseball path: "hit the ball, run around the bases!"'
    ],
    kidWords: [
      { word: 'Elephant', emoji: '🐘', meaning: 'The largest walking land animal with a trunk and large ears.' },
      { word: 'Earth', emoji: '🌍', meaning: 'Our wonderful home planet full of life and water.' },
      { word: 'Egg', emoji: '🥚', meaning: 'An oval shell containing life, laid by birds and reptiles.' }
    ],
    didYouKnowOrigin: 'Ancient people drew a little stick-figure person raising their hands in joy shouting "He!" (meaning "Look here!"). Over centuries, it turned into the letter E!',
    microQuiz: {
      question: 'Which letter is used the most in the English language?',
      options: ['Letter E', 'Letter Z', 'Letter X'],
      correctIndex: 0,
      explanation: 'Letter E is by far the most common letter in English!'
    },
    seeAlso: [
      { id: 'letter-a', title: 'Letter A', category: 'alphabets' },
      { id: 'letter-f', title: 'Letter F', category: 'alphabets' }
    ]
  },
  {
    id: 'letter-f',
    title: 'Letter F (Ff)',
    symbol: 'Ff',
    pronunciation: '(eff / fff)',
    category: 'alphabets',
    tagline: 'The friendly whisper-breeze letter.',
    analogy: {
      title: 'The Flagpole with Two Flags',
      story: 'Imagine a tall flagpole standing in the park. Flying at the very top is a big flag, and just below it is a second smaller flag flapping in the wind. That is capital F!',
      emoji: '🚩'
    },
    howItWorks: {
      title: 'How to Whisper the F Sound',
      points: [
        'Mouth Shape: Gently place your top teeth on your bottom lip and blow air out softly: "Ffffff!"',
        'Like blowing out birthday candles on a cake!',
        'No Throat Buzz: It is a quiet unvoiced sound — feel your throat, there is no motor buzzing.'
      ]
    },
    funFacts: [
      'Flamingos are pink because of the tiny shrimp they eat!',
      'Fireflies talk to each other by blinking glowing lights on their bellies.',
      'Frogs do not drink water with their mouths — they absorb it through their skin!'
    ],
    kidWords: [
      { word: 'Fish', emoji: '🐟', meaning: 'An animal that lives in water with fins and scales.' },
      { word: 'Fox', emoji: '🦊', meaning: 'A clever reddish mammal with a bushy tail.' },
      { word: 'Flower', emoji: '🌸', meaning: 'The colorful blossom of a plant that attracts bees.' }
    ],
    didYouKnowOrigin: 'Letter F started as an ancient hook or peg used to hold tent ropes down.',
    microQuiz: {
      question: 'How do you make the "F" sound?',
      options: ['Top teeth touching bottom lip', 'Tongue between lips', 'Closing both lips'],
      correctIndex: 0,
      explanation: 'Top teeth touch your soft bottom lip while you blow air!'
    },
    seeAlso: [
      { id: 'letter-e', title: 'Letter E', category: 'alphabets' },
      { id: 'letter-v', title: 'Letter V', category: 'alphabets' }
    ]
  },
  {
    id: 'letter-g',
    title: 'Letter G (Gg)',
    symbol: 'Gg',
    pronunciation: '(jee / guh)',
    category: 'alphabets',
    tagline: 'The galloping letter with a secret turnstile gate.',
    analogy: {
      title: 'The Pac-Man with an Inward Step',
      story: 'Capital "G" starts like a big curved "C", but right when it reaches the bottom right, it builds a little sidewalk stepping right into the center circle!',
      emoji: '🔄'
    },
    howItWorks: {
      title: 'How to Speak Letter G',
      points: [
        'Hard G ("Guh"): Press the back of your tongue against the roof of your mouth: "Guh" like Gorilla or Garden.',
        'Soft G ("Juh"): In words like Giraffe or Giant, G pretends to be the letter J!'
      ]
    },
    funFacts: [
      'Giraffes only need about 30 minutes of sleep each day!',
      'Geckos have millions of microscopic hairs on their feet that let them walk upside down on ceilings.',
      'Gravity is the invisible hug that keeps everything on Earth from floating into space.'
    ],
    kidWords: [
      { word: 'Giraffe', emoji: '🦒', meaning: 'The tallest animal on Earth with an exceptionally long neck.' },
      { word: 'Guitar', emoji: '🎸', meaning: 'A stringed musical instrument played with fingers or a pick.' },
      { word: 'Garden', emoji: '🌻', meaning: 'A peaceful patch of soil where vegetables and flowers grow.' }
    ],
    didYouKnowOrigin: 'The Romans invented the letter G around 2,300 years ago by adding a little notch to the letter C so people could tell the "K" sound from the "G" sound!',
    microQuiz: {
      question: 'What sound does G make in "Gorilla"?',
      options: ['Hard "Guh"', 'Soft "Juh"', 'Hissing "Sss"'],
      correctIndex: 0,
      explanation: 'In Gorilla, it makes the deep back-throat "Guh" sound!'
    },
    seeAlso: [
      { id: 'letter-c', title: 'Letter C', category: 'alphabets' },
      { id: 'letter-j', title: 'Letter J', category: 'alphabets' }
    ]
  },
  {
    id: 'letter-h',
    title: 'Letter H (Hh)',
    symbol: 'Hh',
    pronunciation: '(aych / huh)',
    category: 'alphabets',
    tagline: 'The breathing ladder that helps your words sigh.',
    analogy: {
      title: 'The Playground Step Ladder',
      story: 'Capital "H" is two tall vertical stilts standing side by side, connected right across the middle by a balance beam. It is the perfect mini ladder to climb up to the treehouse!',
      emoji: '🪜'
    },
    howItWorks: {
      title: 'How to Sound Out H',
      points: [
        'Mouth Shape: Open your mouth wide and simply exhale warm breath: "Huh, huh, huh!"',
        'Mirror Trick: Hold your hand or a cool mirror in front of your mouth — when you say "H", you will feel warm fog!'
      ]
    },
    funFacts: [
      'Hippos produce their own natural pink sunscreen from their skin!',
      'Hummingbirds are the only birds that can fly backwards and upside down.',
      'Honey never spoils — archaeologists found 3,000-year-old honey in Egyptian tombs that is still edible!'
    ],
    kidWords: [
      { word: 'Hippo', emoji: '🦛', meaning: 'A heavy river-loving mammal that can hold its breath for 5 minutes.' },
      { word: 'Heart', emoji: '❤️', meaning: 'The muscular organ that pumps blood to your whole body.' },
      { word: 'House', emoji: '🏠', meaning: 'A building where families live, laugh, and play together.' }
    ],
    didYouKnowOrigin: 'In ancient Phoenician, H was drawn like a picket fence with three railings, meaning "Courtyard" or "Wall"!',
    microQuiz: {
      question: 'What comes out of your mouth when you say the letter H sound?',
      options: ['A puff of warm air', 'A loud whistle', 'A splash of water'],
      correctIndex: 0,
      explanation: 'Saying "Huh" releases a puff of warm air!'
    },
    seeAlso: [
      { id: 'letter-i', title: 'Letter I', category: 'alphabets' },
      { id: 'letter-t', title: 'Letter T', category: 'alphabets' }
    ]
  },
  {
    id: 'letter-i',
    title: 'Letter I (Ii)',
    symbol: 'Ii',
    pronunciation: '(eye / ih)',
    category: 'alphabets',
    tagline: 'The single pillar of thought and the 2nd vowel in line.',
    analogy: {
      title: 'The Tall Lighthouse with a Beacon Light',
      story: 'Capital "I" stands tall like a stone lighthouse tower with a roof on top and a foundation on the bottom. Lowercase "i" is a little torch with a glowing spark floating right over its head!',
      emoji: '🏮'
    },
    howItWorks: {
      title: 'How to Master Letter I',
      points: [
        'Short I ("Ih"): Say "Ih" as in Iguana, Igloo, or Insect.',
        'Long I ("Eye"): Say "Eye" as in Ice cream, Island, or Iron.',
        'The Dot on the i: The little dot above lowercase "i" has a secret name: it is called a "TITTLE"!'
      ]
    },
    funFacts: [
      'Iguanas can fall from 40-foot trees and land safely without getting hurt!',
      'Ice is lighter than liquid water — that is why ice cubes float in your drink.',
      'The word "I" is the shortest complete sentence subject in English.'
    ],
    kidWords: [
      { word: 'Iguana', emoji: '🦎', meaning: 'A gentle green lizard that loves basking in warm sunshine.' },
      { word: 'Igloo', emoji: '🧊', meaning: 'A dome-shaped home built from blocks of packed snow.' },
      { word: 'Island', emoji: '🏝️', meaning: 'A piece of land completely surrounded by water.' }
    ],
    didYouKnowOrigin: 'What is the tiny dot on lowercase "i" called? It is called a "Tittle"! Monks invented it in the Middle Ages so people wouldn’t confuse "i" with the stroke of letters like "m" or "u".',
    microQuiz: {
      question: 'What is the official name of the dot on top of lowercase i?',
      options: ['Tittle', 'Button', 'Sprinkle'],
      correctIndex: 0,
      explanation: 'That famous little dot is called a tittle!'
    },
    seeAlso: [
      { id: 'letter-a', title: 'Letter A', category: 'alphabets' },
      { id: 'letter-l', title: 'Letter L', category: 'alphabets' }
    ]
  },
  {
    id: 'letter-j',
    title: 'Letter J (Jj)',
    symbol: 'Jj',
    pronunciation: '(jay / juh)',
    category: 'alphabets',
    tagline: 'The jaunty jumping fish hook letter.',
    analogy: {
      title: 'The Fishing Hook or Candy Cane',
      story: 'Capital "J" looks just like a shiny fishing hook dipping into the deep blue sea, or an upside-down candy cane ready for a festive holiday treat!',
      emoji: '🎣'
    },
    howItWorks: {
      title: 'How to Make the J Sound',
      points: [
        'Mouth Shape: Push your lips slightly forward, press your tongue against the roof of your mouth, and pop it loose: "Juh!"',
        'Like jumping jacks or juggling jellybeans!'
      ]
    },
    funFacts: [
      'Jellyfish have been swimming in oceans for over 500 million years — before dinosaurs!',
      'J was the very last letter added to the modern English alphabet (only about 500 years ago).',
      'Jupiter is the largest planet in our entire solar system.'
    ],
    kidWords: [
      { word: 'Jellyfish', emoji: '🪼', meaning: 'A bell-shaped sea creature with flowing tentacles and no brain or bones!' },
      { word: 'Jaguar', emoji: '🐆', meaning: 'A powerful spotted big cat that loves swimming in rivers.' },
      { word: 'Juice', emoji: '🧃', meaning: 'The delicious natural sweet liquid squeezed from fresh fruits.' }
    ],
    didYouKnowOrigin: 'Until the year 1524, J was just a fancy way of writing the letter I with a tail! An Italian scholar named Gian Giorgio Trissino was the first to separate them into distinct letters.',
    microQuiz: {
      question: 'Which was the last letter added to the English alphabet?',
      options: ['Letter J', 'Letter Z', 'Letter A'],
      correctIndex: 0,
      explanation: 'J was the final letter added to our modern alphabet!'
    },
    seeAlso: [
      { id: 'letter-g', title: 'Letter G', category: 'alphabets' },
      { id: 'solar-system', title: 'Jupiter', category: 'solar-system' }
    ]
  },
  {
    id: 'letter-k',
    title: 'Letter K (Kk)',
    symbol: 'Kk',
    pronunciation: '(kay / kuh)',
    category: 'alphabets',
    tagline: 'The kickboxing karate master letter.',
    analogy: {
      title: 'The Karate Kid Kicking High and Low',
      story: 'Look at capital "K": on the left is a tall martial artist standing firm. From their waist, one leg kicks high into the sky, and one leg plants firmly on the ground!',
      emoji: '🥋'
    },
    howItWorks: {
      title: 'How to Kick with K',
      points: [
        'Mouth Shape: Snap the back of your tongue against the soft palate in the back of your mouth: "Kuh!"',
        'Crisp and clean — no vibration in your throat.'
      ]
    },
    funFacts: [
      'Kangaroos cannot walk backwards because of their big muscular tails!',
      'Koalas sleep for up to 20 hours every single day in eucalyptus trees.',
      'Kittens are born with their eyes closed and open them around 10 days old.'
    ],
    kidWords: [
      { word: 'Kangaroo', emoji: '🦘', meaning: 'An Australian marsupial that carries its joey baby in a pouch.' },
      { word: 'Kite', emoji: '🪁', meaning: 'A lightweight geometric toy that dances in the wind on a string.' },
      { word: 'Koala', emoji: '🐨', meaning: 'A fluffy tree-climbing mammal native to Australian forests.' }
    ],
    didYouKnowOrigin: 'The ancient symbol for K was a drawing of an open human palm called "Kaph", which symbolized welcoming and giving!',
    microQuiz: {
      question: 'Why can kangaroos not walk backwards?',
      options: ['Their large muscular tail blocks them', 'They are too sleepy', 'They only have one leg'],
      correctIndex: 0,
      explanation: 'Their heavy, powerful tail acts as a third leg and prevents walking backward!'
    },
    seeAlso: [
      { id: 'letter-c', title: 'Letter C', category: 'alphabets' }
    ]
  },
  {
    id: 'letter-l',
    title: 'Letter L (Ll)',
    symbol: 'Ll',
    pronunciation: '(ell / lll)',
    category: 'alphabets',
    tagline: 'The lounging boots-on-the-ground letter.',
    analogy: {
      title: 'The Cozy Boot or Footrest',
      story: 'Capital "L" stands straight down like a person’s leg, then turns sharp to the right like a foot wearing a cozy winter boot resting on the floor!',
      emoji: '🥾'
    },
    howItWorks: {
      title: 'How to Sing with Letter L',
      points: [
        'Mouth Shape: Press the tip of your tongue up against your top gums right behind your teeth, and let the voice glide around the sides: "Lllll!"',
        'Like singing: "La la la!"'
      ]
    },
    funFacts: [
      'Lions are the only big cats that live in family groups called "prides".',
      'Lightning is five times hotter than the surface of the Sun!',
      'Ladybugs bleed a tiny drop of yellow liquid from their knees when frightened to scare predators away.'
    ],
    kidWords: [
      { word: 'Lion', emoji: '🦁', meaning: 'The magnificent king of the jungle with a golden mane.' },
      { word: 'Lemon', emoji: '🍋', meaning: 'A bright yellow citrus fruit with a tangy, sour punch.' },
      { word: 'Leaf', emoji: '🍃', meaning: 'The green solar panel of a tree that makes food from sunlight.' }
    ],
    didYouKnowOrigin: 'Letter L started in ancient Egypt as a drawing of a shepherd’s crook or walking staff called "Lamed"!',
    microQuiz: {
      question: 'What is a family group of lions called?',
      options: ['A Pride', 'A Pack', 'A School'],
      correctIndex: 0,
      explanation: 'A family of lions is called a Pride!'
    },
    seeAlso: [
      { id: 'letter-i', title: 'Letter I', category: 'alphabets' }
    ]
  },
  {
    id: 'letter-m',
    title: 'Letter M (Mm)',
    symbol: 'Mm',
    pronunciation: '(em / mmm)',
    category: 'alphabets',
    tagline: 'The two-mountain peak of delicious sounds.',
    analogy: {
      title: 'The Twin Mountain Peaks',
      story: 'Capital "M" is two majestic mountain peaks side by side with a snowy valley in the middle. Hike up the first mountain, hike down to the valley, hike up the second mountain, and slide down to camp!',
      emoji: '⛰️'
    },
    howItWorks: {
      title: 'How to Hum with Letter M',
      points: [
        'Mouth Shape: Seal your lips completely shut and let your voice hum straight through your nose: "Mmmmm!"',
        'Like tasting the most delicious warm chocolate cookie: "Mmm, so yummy!"'
      ]
    },
    funFacts: [
      'Monkeys have unique fingerprints just like human beings!',
      'The Moon controls the rising and falling tides of Earth’s oceans.',
      'Mammoths had curved tusks that could grow up to 16 feet long!'
    ],
    kidWords: [
      { word: 'Monkey', emoji: '🐒', meaning: 'A playful primate with a prehensile tail that loves swinging in trees.' },
      { word: 'Moon', emoji: '🌙', meaning: 'The rocky satellite that orbits Earth and lights up our night sky.' },
      { word: 'Mountain', emoji: '🏔️', meaning: 'A huge natural elevation of the Earth’s surface rising steeply above the land.' }
    ],
    didYouKnowOrigin: 'Ancient Phoenicians drew waves of water on the sea called "Mem" to represent M. That is why M has rolling ripples!',
    microQuiz: {
      question: 'Where does the sound go when you make the "Mmm" sound?',
      options: ['Through your nose', 'Out your ears', 'Into your shoes'],
      correctIndex: 0,
      explanation: 'Your lips close and the humming vibration travels right through your nose!'
    },
    seeAlso: [
      { id: 'letter-n', title: 'Letter N', category: 'alphabets' },
      { id: 'letter-w', title: 'Letter W', category: 'alphabets' }
    ]
  },
  {
    id: 'letter-n',
    title: 'Letter N (Nn)',
    symbol: 'Nn',
    pronunciation: '(en / nnn)',
    category: 'alphabets',
    tagline: 'The single mountain peak with a diagonal slide.',
    analogy: {
      title: 'The Playground Slide Between Two Poles',
      story: 'Capital "N" has two tall upright poles. A thrilling diagonal slide cuts straight from the top of the first pole down to the bottom of the second pole!',
      emoji: '🛝'
    },
    howItWorks: {
      title: 'How to Sound Out Letter N',
      points: [
        'Mouth Shape: Press your tongue flat against the roof of your mouth behind your teeth, keep your lips slightly open, and hum through your nose: "Nnnnn!"',
        'Like the sound of a roaring speedboat engine!'
      ]
    },
    funFacts: [
      'Narwhals have a giant spiral tusk that is actually a long tooth growing right through their upper lip!',
      'Nectar is the sweet liquid flowers produce to invite bees and butterflies to visit.',
      'Nighttime on Earth happens when our side of the planet turns away from the Sun.'
    ],
    kidWords: [
      { word: 'Nest', emoji: '🪺', meaning: 'A cozy home built by birds using twigs, feathers, and leaves.' },
      { word: 'Narwhal', emoji: '🦄', meaning: 'The "unicorn of the sea" whale living in icy Arctic waters.' },
      { word: 'Nut', emoji: '🥜', meaning: 'A hard-shelled dry fruit packed with energy and healthy fats.' }
    ],
    didYouKnowOrigin: 'In ancient Egyptian hieroglyphs, N was a rippling snake or cobra called "Nun"!',
    microQuiz: {
      question: 'What is a narwhal’s long horn actually made of?',
      options: ['A long tooth', 'Hard bone', 'Compressed ice'],
      correctIndex: 0,
      explanation: 'It is a specialized spiral sensory tooth that can grow 10 feet long!'
    },
    seeAlso: [
      { id: 'letter-m', title: 'Letter M', category: 'alphabets' }
    ]
  },
  {
    id: 'letter-o',
    title: 'Letter O (Oo)',
    symbol: 'Oo',
    pronunciation: '(oh / aww)',
    category: 'alphabets',
    tagline: 'The perfect circle and the friendliest open vowel.',
    analogy: {
      title: 'The Glazed Donut or Full Moon',
      story: 'Capital "O" is a complete, seamless ring with no beginning and no end. It looks like a delicious strawberry-frosted donut, a rolling hula-hoop, or the full glowing Moon!',
      emoji: '🍩'
    },
    howItWorks: {
      title: 'How to Shape Letter O',
      points: [
        'Mouth Shape: Round your lips into a perfect little "O" circle and say: "Ohhhh!"',
        'Short O ("Aww"): As in Octopus (🐙) and Otter (🦦).',
        'Long O ("Oh"): As in Ocean (🌊) and Owl (🦉).'
      ]
    },
    funFacts: [
      'An octopus has three hearts, nine brains, and blue blood!',
      'Owls cannot move their eyeballs — instead, they can rotate their entire head 270 degrees!',
      'The letter O looks identical even if you look at it through a mirror or flip it upside down.'
    ],
    kidWords: [
      { word: 'Octopus', emoji: '🐙', meaning: 'A clever eight-armed sea animal with three hearts.' },
      { word: 'Owl', emoji: '🦉', meaning: 'A wise nocturnal bird of prey with silent flying feathers.' },
      { word: 'Orange', emoji: '🍊', meaning: 'A juicy sweet round fruit and also the bright color named after it.' }
    ],
    didYouKnowOrigin: '3,000 years ago, Phoenicians called O "Ayin", which meant "Eye". They drew a little circle with a dot in the center for the pupil!',
    microQuiz: {
      question: 'How many hearts does an octopus have?',
      options: ['Three hearts', 'One heart', 'Zero hearts'],
      correctIndex: 0,
      explanation: 'An octopus has three working hearts!'
    },
    seeAlso: [
      { id: 'letter-a', title: 'Letter A', category: 'alphabets' },
      { id: 'letter-u', title: 'Letter U', category: 'alphabets' }
    ]
  },
  {
    id: 'letter-p',
    title: 'Letter P (Pp)',
    symbol: 'Pp',
    pronunciation: '(pee / puh)',
    category: 'alphabets',
    tagline: 'The popping popcorn consonant.',
    analogy: {
      title: 'The Party Balloon on a Stick',
      story: 'Capital "P" looks like a festive party balloon bobbing in the breeze at the very top of a tall plastic balloon stick! Lowercase "p" dips its stick deep underground below the line.',
      emoji: '🎈'
    },
    howItWorks: {
      title: 'How to Pop with Letter P',
      points: [
        'Mouth Shape: Press your lips firmly together, build up gentle air pressure, and pop them open: "Puh!"',
        'Popcorn Sound: Like kernels of corn popping in a warm pan: "Pop, pop, pop!"'
      ]
    },
    funFacts: [
      'Penguins have knees inside their bodies covered by thick warm feathers!',
      'Polar bears have black skin underneath their white fur to absorb heat from the Sun.',
      'Pandas spend up to 12 hours a day munching on green bamboo.'
    ],
    kidWords: [
      { word: 'Penguin', emoji: '🐧', meaning: 'A flightless aquatic bird dressed in a natural tuxedo.' },
      { word: 'Panda', emoji: '🐼', meaning: 'A beloved black-and-white bear native to mountain forests in China.' },
      { word: 'Pizza', emoji: '🍕', meaning: 'A tasty baked flatbread topped with tomato sauce, melted cheese, and toppings.' }
    ],
    didYouKnowOrigin: 'Ancient people called P "Pe", meaning "Mouth"! The original symbol looked like a curved smiling mouth.',
    microQuiz: {
      question: 'What color is a polar bear’s skin beneath its white fur?',
      options: ['Black', 'Pink', 'White'],
      correctIndex: 0,
      explanation: 'A polar bear’s skin is black to absorb the sun’s warmth!'
    },
    seeAlso: [
      { id: 'letter-b', title: 'Letter B', category: 'alphabets' }
    ]
  },
  {
    id: 'letter-q',
    title: 'Letter Q (Qq)',
    symbol: 'Qq',
    pronunciation: '(kyoo / kwuh)',
    category: 'alphabets',
    tagline: 'The royal letter that almost never travels without its best friend U.',
    analogy: {
      title: 'The Big Apple with a Little Leaf Stem',
      story: 'Capital "Q" is a big round circle like an orange or apple, with a cute little diagonal stem kicking out from the bottom right like a tiny kickstand!',
      emoji: '🍏'
    },
    howItWorks: {
      title: 'The Best Friend Rule (Q + U)',
      points: [
        'Buddy System: In almost every English word, Q is glued to the letter U: "QU"!',
        'Sound ("Kwuh"): Pucker your lips like a duck and say "Kwuh" as in Queen, Quick, and Quack.'
      ]
    },
    funFacts: [
      'Quokkas are known as the world’s happiest animals because of their smiling faces!',
      'Q is the only letter in the alphabet that doesn’t appear in any US state name!',
      'Quails lay uniquely speckled eggs that blend in with stones and dry grass.'
    ],
    kidWords: [
      { word: 'Queen', emoji: '👑', meaning: 'A female royal ruler who wears a sparkling crown.' },
      { word: 'Quilt', emoji: '🪡', meaning: 'A warm blanket made by stitching together colorful patches of cloth.' },
      { word: 'Question', emoji: '❓', meaning: 'A curious inquiry asked to learn new knowledge about the world.' }
    ],
    didYouKnowOrigin: 'In ancient Phoenician, Q was called "Qoph", which meant the eye of a needle or the back of a head!',
    microQuiz: {
      question: 'Which letter is Q’s best friend that travels with it in almost every word?',
      options: ['Letter U', 'Letter Z', 'Letter T'],
      correctIndex: 0,
      explanation: 'Q and U are inseparable in words like Queen, Quick, and Quiet!'
    },
    seeAlso: [
      { id: 'letter-o', title: 'Letter O', category: 'alphabets' },
      { id: 'letter-u', title: 'Letter U', category: 'alphabets' }
    ]
  },
  {
    id: 'letter-r',
    title: 'Letter R (Rr)',
    symbol: 'Rr',
    pronunciation: '(ar / rrr)',
    category: 'alphabets',
    tagline: 'The roaring runner with a sturdy kickstand.',
    analogy: {
      title: 'Letter P Putting on a Running Shoe',
      story: 'Start with letter P (tall pole with an upper bubble). Now, stretch out a muscular diagonal leg kicking to the ground to help it run at full speed! That is capital R!',
      emoji: '🏃'
    },
    howItWorks: {
      title: 'How to Roar with Letter R',
      points: [
        'Mouth Shape: Curl the sides of your tongue up slightly along the top teeth, without letting the tip touch the roof: "Rrrrrr!"',
        'Like a tiger roaring or a rocket engine igniting on the launch pad!'
      ]
    },
    funFacts: [
      'Rainbows are actually complete full circles, but from the ground we usually only see the top half!',
      'Rabbits can jump over 3 feet high in the air when doing a happy twist called a "binky"!',
      'Robots are machines designed by engineers to help humans explore space and build cars.'
    ],
    kidWords: [
      { word: 'Rainbow', emoji: '🌈', meaning: 'An arch of colors formed in the sky when sunlight bounces through raindrops.' },
      { word: 'Rabbit', emoji: '🐇', meaning: 'A fast hopping mammal with long ears that loves fresh greens.' },
      { word: 'Rocket', emoji: '🚀', meaning: 'A powerful vehicle propelled by burning fuel to escape Earth’s gravity.' }
    ],
    didYouKnowOrigin: 'Ancient Romans called R the "littera canina" or the "dog’s letter" because when a dog growls, it makes an "Rrrrrr" sound!',
    microQuiz: {
      question: 'What is a rainbow’s true full shape when seen from an airplane in the sky?',
      options: ['A full circle', 'A straight square', 'A triangle'],
      correctIndex: 0,
      explanation: 'From high in the sky, rainbows are complete 360-degree circles!'
    },
    seeAlso: [
      { id: 'letter-p', title: 'Letter P', category: 'alphabets' },
      { id: 'earth-elements', title: 'Rainbows', category: 'earth-elements' }
    ]
  },
  {
    id: 'letter-s',
    title: 'Letter S (Ss)',
    symbol: 'Ss',
    pronunciation: '(ess / sss)',
    category: 'alphabets',
    tagline: 'The slithering, winding snake of sounds.',
    analogy: {
      title: 'The Winding Mountain Road or Slithering Snake',
      story: 'Capital "S" curves back and forth like a mountain river winding through valleys, or a friendly garden snake dancing across the green grass!',
      emoji: '🐍'
    },
    howItWorks: {
      title: 'How to Hiss with Letter S',
      points: [
        'Mouth Shape: Bring your teeth close together, place your tongue just behind your top teeth, and blow a stream of cool air: "Ssssss!"',
        'Like steam escaping from a gentle tea kettle.'
      ]
    },
    funFacts: [
      'Snakes smell the air using their flicking forked tongues!',
      'The Sun is so huge that 1.3 million Earths could fit inside it!',
      'Starfish do not have brains or blood — they use filtered seawater to pump nutrients.'
    ],
    kidWords: [
      { word: 'Sun', emoji: '☀️', meaning: 'The radiant yellow star at the center of our solar system giving us warmth.' },
      { word: 'Snake', emoji: '🐍', meaning: 'A legless reptile with smooth scales that glides across ground and trees.' },
      { word: 'Star', emoji: '⭐', meaning: 'A distant giant ball of glowing hot gas shining in space.' }
    ],
    didYouKnowOrigin: 'In early Phoenician writing, S was called "Shin", meaning "Tooth"! It looked like a sharp set of front teeth.',
    microQuiz: {
      question: 'How do snakes smell things in their environment?',
      options: ['With their flicking tongue', 'With their tail', 'With large ears'],
      correctIndex: 0,
      explanation: 'Snakes flick their tongue to capture scent molecules in the air!'
    },
    seeAlso: [
      { id: 'letter-c', title: 'Letter C', category: 'alphabets' },
      { id: 'solar-system', title: 'The Sun', category: 'solar-system' }
    ]
  },
  {
    id: 'letter-t',
    title: 'Letter T (Tt)',
    symbol: 'Tt',
    pronunciation: '(tee / tuh)',
    category: 'alphabets',
    tagline: 'The roofed pillar and the most common consonant in English.',
    analogy: {
      title: 'The Table or Sturdy Tree',
      story: 'Capital "T" is a strong trunk rooted in the soil, with a broad wooden tabletop sheltering everything underneath from the rain!',
      emoji: '🌳'
    },
    howItWorks: {
      title: 'How to Tap with Letter T',
      points: [
        'Mouth Shape: Tap the sharp tip of your tongue against the ridge just behind your front teeth and release: "Tuh!"',
        'Like the ticking of a clock: "Tick-tock, tick-tock!"'
      ]
    },
    funFacts: [
      'Tigers have striped skin underneath their striped fur — no two tigers have the same stripes!',
      'Trees communicate with each other through an underground web of mushroom roots called the Wood Wide Web!',
      'T is the single most common consonant in the entire English language!'
    ],
    kidWords: [
      { word: 'Tiger', emoji: '🐅', meaning: 'The largest wild cat species with distinctive orange and black stripes.' },
      { word: 'Tree', emoji: '🌲', meaning: 'A tall woody perennial plant with a trunk, branches, and green leaves.' },
      { word: 'Train', emoji: '🚂', meaning: 'A series of connected railway cars pulled along tracks by a locomotive.' }
    ],
    didYouKnowOrigin: 'Ancient people called T "Taw", which meant "Mark" or "Cross". It was originally written as a simple "X" mark!',
    microQuiz: {
      question: 'Which consonant is used the most often in English?',
      options: ['Letter T', 'Letter Q', 'Letter X'],
      correctIndex: 0,
      explanation: 'Letter T is the #1 most common consonant in our language!'
    },
    seeAlso: [
      { id: 'letter-d', title: 'Letter D', category: 'alphabets' },
      { id: 'earth-elements', title: 'Trees & Oxygen', category: 'earth-elements' }
    ]
  },
  {
    id: 'letter-u',
    title: 'Letter U (Uu)',
    symbol: 'Uu',
    pronunciation: '(yoo / uh)',
    category: 'alphabets',
    tagline: 'The smiling vowel bowl that catches raindrops.',
    analogy: {
      title: 'The Big Smiling Horseshoe',
      story: 'Capital "U" is a warm, curved cereal bowl ready for breakfast, or a giant happy smile stretching from ear to ear!',
      emoji: '🥣'
    },
    howItWorks: {
      title: 'How to Sing with Letter U',
      points: [
        'Short U ("Uh"): Open your mouth relaxed and say "Uh" as in Umbrella, Up, or Under.',
        'Long U ("Yoo"): Pucker lips and say "Yoo" as in Unicorn, Uniform, or Universe.'
      ]
    },
    funFacts: [
      'Umbrellas were invented over 4,000 years ago, originally to protect people from hot sunshine, not rain!',
      'Uranus is an ice giant planet that rotates on its side like a rolling bowling ball!',
      'Underground caves can stay the exact same temperature all year round.'
    ],
    kidWords: [
      { word: 'Umbrella', emoji: '☂️', meaning: 'A folding canopy of fabric designed to protect you from rain.' },
      { word: 'Unicorn', emoji: '🦄', meaning: 'A legendary mythical horse with a magical spiraling horn on its forehead.' },
      { word: 'Universe', emoji: '🌌', meaning: 'All of space and time and everything that exists within it, including stars and galaxies.' }
    ],
    didYouKnowOrigin: 'For thousands of years, U and V were the exact same letter! Carvers in ancient Rome preferred sharp "V" because straight lines were much easier to chisel into marble stone.',
    microQuiz: {
      question: 'What were the very first umbrellas invented for thousands of years ago?',
      options: ['Shade from the hot sun', 'Catching falling snow', 'Flying like kites'],
      correctIndex: 0,
      explanation: 'They were called parasols to shield royalty from strong sunlight!'
    },
    seeAlso: [
      { id: 'letter-v', title: 'Letter V', category: 'alphabets' },
      { id: 'letter-o', title: 'Letter O', category: 'alphabets' }
    ]
  },
  {
    id: 'letter-v',
    title: 'Letter V (Vv)',
    symbol: 'Vv',
    pronunciation: '(vee / vvv)',
    category: 'alphabets',
    tagline: 'The buzzing victory valley consonant.',
    analogy: {
      title: 'The Peaceful Valley or Peace Sign',
      story: 'Two straight lines slide down from the sky and meet at a sharp point on the ground, creating a deep mountain valley where birds soar and rivers gather!',
      emoji: '✌️'
    },
    howItWorks: {
      title: 'How to Buzz with Letter V',
      points: [
        'Mouth Shape: Gently touch your top front teeth to your bottom lip, turn on your vocal cords, and let them vibrate: "Vvvvvvv!"',
        'Engine Sound: It feels like an electric toy car motor buzzing on your lips!'
      ]
    },
    funFacts: [
      'Venus is the hottest planet in our solar system because of its thick greenhouse atmosphere!',
      'Volcanoes can create brand new islands in the ocean when their lava cools into hard rock.',
      'Vultures have stomach acid so powerful it can neutralize dangerous bacteria and keep ecosystems clean!'
    ],
    kidWords: [
      { word: 'Volcano', emoji: '🌋', meaning: 'A mountain with an opening where molten rock and ash erupt from deep inside Earth.' },
      { word: 'Violin', emoji: '🎻', meaning: 'A delicate wooden musical instrument played with a horsehair bow.' },
      { word: 'Vegetable', emoji: '🥦', meaning: 'A healthy plant or part of a plant used as nutritious food.' }
    ],
    didYouKnowOrigin: 'V was the Roman symbol for the number 5 because an open hand with thumb and fingers spread forms a "V" shape!',
    microQuiz: {
      question: 'Which planet is the hottest planet in our entire solar system?',
      options: ['Venus', 'Mars', 'Neptune'],
      correctIndex: 0,
      explanation: 'Venus is the hottest planet due to super-thick heat-trapping clouds!'
    },
    seeAlso: [
      { id: 'letter-f', title: 'Letter F', category: 'alphabets' },
      { id: 'letter-u', title: 'Letter U', category: 'alphabets' }
    ]
  },
  {
    id: 'letter-w',
    title: 'Letter W (Ww)',
    symbol: 'Ww',
    pronunciation: '(double-yoo / wuh)',
    category: 'alphabets',
    tagline: 'The zigzag double-wave wonder.',
    analogy: {
      title: 'The Rolling Ocean Wave or Upside-Down M',
      story: 'Capital "W" is a pair of smiling valleys hooked together, or rolling waves splashing against the sandy shore! If you flip it upside down, it transforms right into the letter M!',
      emoji: '🌊'
    },
    howItWorks: {
      title: 'How to Whistle with Letter W',
      points: [
        'Mouth Shape: Round your lips tightly into a little whistle circle and open smoothly: "Wuh, wuh, wuh!"',
        'Wind Sound: Like the rushing wind blowing through tree branches on a breezy autumn afternoon.'
      ]
    },
    funFacts: [
      'Blue whales are the largest animals ever known to have lived on Earth — even bigger than any dinosaur!',
      'Water covers about 71% of our planet’s surface.',
      'Walruses use their giant ivory tusks to haul their heavy bodies out of freezing Arctic waters onto sea ice.'
    ],
    kidWords: [
      { word: 'Whale', emoji: '🐋', meaning: 'A massive warm-blooded sea mammal that breathes air through blowholes.' },
      { word: 'Water', emoji: '💧', meaning: 'The clear, odorless liquid essential for all plant and animal life.' },
      { word: 'Wind', emoji: '💨', meaning: 'The natural movement of air across Earth’s atmosphere.' }
    ],
    didYouKnowOrigin: 'Why is it called "Double-U" when it looks like two V’s? In Old English, people wrote two "u"s together (uu) to make the "w" sound before printing presses created a single stamp!',
    microQuiz: {
      question: 'What is the largest animal to ever live on planet Earth?',
      options: ['The Blue Whale', 'T-Rex Dinosaur', 'African Elephant'],
      correctIndex: 0,
      explanation: 'The Blue Whale is larger than even the biggest dinosaur that ever walked!'
    },
    seeAlso: [
      { id: 'letter-m', title: 'Letter M', category: 'alphabets' },
      { id: 'earth-elements', title: 'Water (H2O)', category: 'earth-elements' }
    ]
  },
  {
    id: 'letter-x',
    title: 'Letter X (Xx)',
    symbol: 'Xx',
    pronunciation: '(ex / ks)',
    category: 'alphabets',
    tagline: 'The mystery treasure mark that crosses in the center.',
    analogy: {
      title: 'The Treasure Map Cross',
      story: 'On every famous pirate treasure map, "X marks the spot!" Two crossed diagonal swords meet right in the middle, telling you where the buried chest full of gold coins is waiting!',
      emoji: '🗺️'
    },
    howItWorks: {
      title: 'How to Sound Out Letter X',
      points: [
        'Sound Blend ("Ks"): X is special because it usually combines two sounds together: K + S ("Kss!") as in Box, Fox, and Six.',
        'At the start of words like Xylophone, it often sounds like a gentle buzzing "Zzz".'
      ]
    },
    funFacts: [
      'X-rays were discovered by accident by a scientist named Wilhelm Röntgen — he called them "X" because X represents the unknown!',
      'Xylophones are percussion instruments with tuned wooden bars that sound like singing raindrops.',
      'No common English word ends with double XX!'
    ],
    kidWords: [
      { word: 'Xylophone', emoji: '🪵', meaning: 'A musical instrument played by striking wooden bars with mallets.' },
      { word: 'X-ray', emoji: '🩻', meaning: 'A special medical photograph that lets doctors see bones inside our bodies.' },
      { word: 'Fox', emoji: '🦊', meaning: 'A clever mammal whose name ends with the crisp "Ks" sound of X.' }
    ],
    didYouKnowOrigin: 'The letter X has represented the "unknown mystery" in mathematics for centuries because ancient translators couldn’t translate the Arabic word for "something" and used X instead!',
    microQuiz: {
      question: 'Why did the scientist who discovered X-rays use the letter X?',
      options: ['X stood for the mystery unknown', 'X was his favorite animal', 'It made an X shape'],
      correctIndex: 0,
      explanation: 'In math and science, X stands for the unknown mystery!'
    },
    seeAlso: [
      { id: 'letter-s', title: 'Letter S', category: 'alphabets' },
      { id: 'letter-z', title: 'Letter Z', category: 'alphabets' }
    ]
  },
  {
    id: 'letter-y',
    title: 'Letter Y (Yy)',
    symbol: 'Yy',
    pronunciation: '(wye / yuh)',
    category: 'alphabets',
    tagline: 'The fork in the road and the shape-shifting semi-vowel.',
    analogy: {
      title: 'The Slingshot or Fork in the Trail',
      story: 'Imagine hiking in a magical forest. Suddenly the path splits into two directions forming a "V", supported by a single trunk below. It also looks just like a wooden slingshot or a wishbone!',
      emoji: '🪃'
    },
    howItWorks: {
      title: 'The Secret Spy Vowel (Sometimes Y!)',
      points: [
        'Consonant Mode ("Yuh"): At the start of words like Yellow (💛), Yogurt, and Yo-yo.',
        'Vowel Mode ("Ee" or "Eye"): At the end of words like Happy, Sky, Baby, and Fly! It acts just like the vowels I and E.'
      ]
    },
    funFacts: [
      'Yo-yos are the second oldest toys in recorded world history (after dolls) — over 2,500 years old!',
      'Yaks have thick shaggy coats that keep them warm in freezing Himalayan mountain blizzards.',
      'Y is one of the only letters called a "semi-vowel" because it can act as both a consonant and a vowel.'
    ],
    kidWords: [
      { word: 'Yo-yo', emoji: '🪀', meaning: 'A classic toy made of two connected disks with a string that winds up and down.' },
      { word: 'Yellow', emoji: '💛', meaning: 'The sunny, cheerful primary color of ripe bananas and lemons.' },
      { word: 'Yak', emoji: '🐂', meaning: 'A long-haired domesticated bovid found throughout the mountainous Tibetan Plateau.' }
    ],
    didYouKnowOrigin: 'Ancient Greeks had a letter called "Upsilon" that looked like Y. Romans borrowed it to spell Greek words, calling it "I-Graeca" (Greek I)!',
    microQuiz: {
      question: 'Why is Y called a "semi-vowel"?',
      options: ['It can act as both a consonant and a vowel', 'It is only half a letter', 'It only works in winter'],
      correctIndex: 0,
      explanation: 'Y can act as a consonant (Yellow) or a vowel (Fly, Happy)!'
    },
    seeAlso: [
      { id: 'letter-i', title: 'Letter I', category: 'alphabets' },
      { id: 'letter-v', title: 'Letter V', category: 'alphabets' }
    ]
  },
  {
    id: 'letter-z',
    title: 'Letter Z (Zz)',
    symbol: 'Zz',
    pronunciation: '(zee / zed / zzz)',
    category: 'alphabets',
    tagline: 'The grand finale of the alphabet and the buzzing bumblebee.',
    analogy: {
      title: 'The Zigzag Lightning Bolt',
      story: 'Capital "Z" zooms across the ceiling, zips down a sharp diagonal slide to the floor, and zooms across the ground. It is a quick zigzag lightning bolt across the stormy sky!',
      emoji: '⚡'
    },
    howItWorks: {
      title: 'How to Buzz with Letter Z',
      points: [
        'Mouth Shape: Put your teeth close together, turn on your vocal motor, and let it vibrate with electric power: "Zzzzzzzz!"',
        'Like a happy bumblebee zooming between sweet flowers.'
      ]
    },
    funFacts: [
      'Zebras have unique stripe patterns — like human fingerprints, no two zebras are ever alike!',
      'In American English, people call this letter "Zee". In British, Canadian, and Australian English, people call it "Zed"!',
      'Z is the 26th and final letter of our alphabet.'
    ],
    kidWords: [
      { word: 'Zebra', emoji: '🦓', meaning: 'An African wild horse with striking black and white striped coats.' },
      { word: 'Zipper', emoji: '🤐', meaning: 'A fastening device with interlocking metal or plastic teeth for jackets and bags.' },
      { word: 'Zero', emoji: '0️⃣', meaning: 'The foundational number that represents nothingness and enables modern math.' }
    ],
    didYouKnowOrigin: 'In ancient Greek, Z was called "Zeta". For a long time in Rome, they took Z out of the alphabet entirely because they thought they didn’t need it, before putting it back at the very end!',
    microQuiz: {
      question: 'What is the letter Z called in British, Canadian, and Australian English?',
      options: ['Zed', 'Zee', 'Zup'],
      correctIndex: 0,
      explanation: 'Many English speakers around the world pronounce Z as "Zed"!'
    },
    seeAlso: [
      { id: 'letter-a', title: 'Letter A', category: 'alphabets' },
      { id: 'letter-s', title: 'Letter S', category: 'alphabets' },
      { id: 'number-zero', title: 'Zero (0)', category: 'numbers' }
    ]
  },

  // ==========================================
  // NUMBERS & MATH
  // ==========================================
  {
    id: 'number-zero',
    title: 'Zero (0)',
    symbol: '0',
    pronunciation: '(ZEE-roh)',
    category: 'numbers',
    tagline: 'The superhero of mathematics that means "nothing", yet makes every other number ten times bigger!',
    analogy: {
      title: 'The Empty Treasure Chest and the Power-Up Rocket',
      story: 'Imagine opening a treasure box: if there is no gold inside, you have 0 coins. But watch this magic trick: put 0 behind the number 1, and suddenly you have 10! Put another 0, and you have 100! Zero is like an empty wagon that boosts everything that pulls it.',
      emoji: '🕳️'
    },
    howItWorks: {
      title: 'How Zero Works in Math',
      points: [
        'Place Value Hero: Zero holds empty places so we can write big numbers like 10, 100, and 1,000.',
        'Adding Zero: Any number plus zero stays exactly the same (5 + 0 = 5).',
        'Subtracting Zero: If you have 4 cookies and eat 0 cookies, you still have 4 cookies!'
      ]
    },
    funFacts: [
      'Ancient civilizations didn’t have a number for zero for thousands of years!',
      'Brilliant mathematicians in ancient India (like Brahmagupta) invented zero as a true number in the 7th century.',
      'Water freezes into ice at exactly 0 degrees Celsius!'
    ],
    didYouKnowOrigin: 'The word "Zero" comes from the Arabic word "Sifr", which meant "empty". It traveled across the Mediterranean through Italy to give us both the words "Zero" and "Cipher"!',
    microQuiz: {
      question: 'What is 7 + 0?',
      options: ['7', '0', '70'],
      correctIndex: 0,
      explanation: 'Adding zero adds nothing, so the number stays 7!'
    },
    seeAlso: [
      { id: 'number-one', title: 'One (1)', category: 'numbers' },
      { id: 'number-ten', title: 'Ten (10)', category: 'numbers' },
      { id: 'number-infinity', title: 'Infinity (∞)', category: 'numbers' }
    ]
  },
  {
    id: 'number-one',
    title: 'One (1)',
    symbol: '1',
    pronunciation: '(wun)',
    category: 'numbers',
    tagline: 'The starting line of counting and the atom of arithmetic.',
    analogy: {
      title: 'The Single Building Block',
      story: 'Think of the number 1 like a single red LEGO brick. Every huge skyscraper, giant castle, or rocket you build in math is just lots of number 1s snapped together!',
      emoji: '🧱'
    },
    howItWorks: {
      title: 'Why One is Unique',
      points: [
        'The First Counting Number: The very first step on any counting trail.',
        'Multiplying by One: Any number multiplied by 1 stays itself (1 × 9 = 9) — it is called the Identity Property!',
        'Solo Unit: One Sun, one Moon for Earth, one nose on your face.'
      ]
    },
    funFacts: [
      'One is neither a prime number nor a composite number — it has its own special category!',
      'Binary code inside computers uses only two numbers to run all games and videos: 0 and 1!',
      'Earth has only 1 natural moon orbiting around it.'
    ],
    didYouKnowOrigin: 'Early humans kept count by carving single notches into animal bones over 20,000 years ago — each straight scratch meant "one" item!',
    microQuiz: {
      question: 'What digits do computer chips use in binary code to think?',
      options: ['0 and 1', '1 and 2', '9 and 10'],
      correctIndex: 0,
      explanation: 'Computers think using billions of tiny switches flipping between 0 and 1!'
    },
    seeAlso: [
      { id: 'number-zero', title: 'Zero (0)', category: 'numbers' },
      { id: 'number-two', title: 'Two (2)', category: 'numbers' }
    ]
  },
  {
    id: 'number-two',
    title: 'Two (2)',
    symbol: '2',
    pronunciation: '(too)',
    category: 'numbers',
    tagline: 'The first pair, the graceful swan, and the only even prime number.',
    analogy: {
      title: 'A Pair of Shoes or Best Friends on a Seesaw',
      story: 'Whenever you have two, you have a pair! Two shoes, two socks, two eyes, two ears, and two friends balancing perfectly on a playground seesaw.',
      emoji: '👟'
    },
    howItWorks: {
      title: 'How Two Shapes Math',
      points: [
        'Even Numbers: Any number that can be divided evenly into two equal teams is an even number!',
        'Doubling: Multiplying by 2 means taking your amount and adding the exact same amount again (3 × 2 = 6).'
      ]
    },
    funFacts: [
      'Two is the ONLY even prime number in all of mathematics!',
      'Humans have bilateral symmetry: our left and right sides match like mirrors.',
      'A bicycle has 2 wheels, while a tricycle has 3.'
    ],
    didYouKnowOrigin: 'The shape of "2" started as two horizontal lines (=). When scribes wrote quickly without lifting their quills, the top line looped around and slashed down to the base!',
    microQuiz: {
      question: 'What is the only even prime number in the universe?',
      options: ['2', '4', '0'],
      correctIndex: 0,
      explanation: '2 is the only even prime number because all other even numbers can be divided by 2!'
    },
    seeAlso: [
      { id: 'number-one', title: 'One (1)', category: 'numbers' },
      { id: 'number-ten', title: 'Ten (10)', category: 'numbers' }
    ]
  },
  {
    id: 'number-ten',
    title: 'Ten (10)',
    symbol: '10',
    pronunciation: '(ten)',
    category: 'numbers',
    tagline: 'The anchor of human counting and the foundation of the decimal system.',
    analogy: {
      title: 'Your Ten Super Counting Fingers',
      story: 'Hold up both of your hands and wiggle your fingers! You have 5 fingers on the left and 5 fingers on the right — exactly 10 in total. That is why almost all humans on Earth count in groups of ten!',
      emoji: '🙌'
    },
    howItWorks: {
      title: 'The Power of the Base-10 Decimal System',
      points: [
        'Grouping by Tens: 10 ones make a ten-bar. 10 ten-bars make a 100-flat. 10 hundred-flats make a 1,000-cube!',
        'Instant Multiplication: Multiplying any whole number by 10 is as easy as adding a 0 to the end (6 × 10 = 60).'
      ]
    },
    funFacts: [
      'A decade is a period of exactly 10 years.',
      'Bowling pins are arranged in a triangle of 10 pins.',
      'Squids have 10 tentacles to catch food in deep waters.'
    ],
    didYouKnowOrigin: 'Our decimal number system is based on 10 purely because ancient humans had ten fingers to count on while trading livestock and grains!',
    microQuiz: {
      question: 'How many years are in one decade?',
      options: ['10 years', '100 years', '5 years'],
      correctIndex: 0,
      explanation: 'A decade is 10 years!'
    },
    seeAlso: [
      { id: 'number-zero', title: 'Zero (0)', category: 'numbers' },
      { id: 'number-hundred', title: 'One Hundred (100)', category: 'numbers' }
    ]
  },
  {
    id: 'number-hundred',
    title: 'One Hundred (100)',
    symbol: '100',
    pronunciation: '(wun HUN-dred)',
    category: 'numbers',
    tagline: 'The century benchmark that marks big milestones.',
    analogy: {
      title: 'A Century of Pennies or a Full Square Grid',
      story: 'Picture a big square grid with 10 rows and 10 columns. When every single square is filled with a sparkling penny, you have 100 pennies — exactly one whole dollar bill!',
      emoji: '💯'
    },
    howItWorks: {
      title: 'How 100 Operates',
      points: [
        'Percent Means "Per Hundred": 50% means 50 out of 100.',
        'Milestone Number: Living to 100 years makes someone a "centenarian"!'
      ]
    },
    funFacts: [
      'A century is 100 years.',
      'Water boils at 100 degrees Celsius.',
      'In Roman numerals, 100 is written as the single letter "C".'
    ],
    didYouKnowOrigin: 'The word "hundred" comes from the Old Norse word "hundrath", which originally meant 120 before becoming standard 100!',
    microQuiz: {
      question: 'At what temperature Celsius does water boil?',
      options: ['100°C', '50°C', '0°C'],
      correctIndex: 0,
      explanation: 'Water boils into bubbly steam at 100°C!'
    },
    seeAlso: [
      { id: 'number-ten', title: 'Ten (10)', category: 'numbers' },
      { id: 'number-infinity', title: 'Infinity (∞)', category: 'numbers' }
    ]
  },
  {
    id: 'number-infinity',
    title: 'Infinity (∞)',
    symbol: '∞',
    pronunciation: '(in-FIN-ih-tee)',
    category: 'numbers',
    tagline: 'Not a number, but an endless idea that goes on forever and ever.',
    analogy: {
      title: 'The Rollercoaster Loop that Never Ends',
      story: 'Imagine driving a racecar on a racetrack shaped like a sideways figure 8 (∞). You can drive for hours, days, or billions of years, and you will never reach a stop sign or a dead end. That endless track is Infinity!',
      emoji: '♾️'
    },
    howItWorks: {
      title: 'Understanding Infinity',
      points: [
        'Beyond Counting: If you count: 1, 2, 3... even if you count for a trillion years, you can always add + 1. That means numbers never end!',
        'Not a Finite Number: You cannot do "Infinity + 1 = bigger infinity" in regular math — infinity is a direction, not a destination.'
      ]
    },
    funFacts: [
      'The sideways figure-8 symbol for infinity is called the "Lemniscate"!',
      'There are infinite numbers between 0 and 1 (like 0.1, 0.01, 0.001...)!',
      'Astronomers believe our universe might be infinite in size.'
    ],
    didYouKnowOrigin: 'English mathematician John Wallis introduced the symbol ∞ in 1655, inspired by ancient Roman symbols and the Greek letter omega.',
    microQuiz: {
      question: 'What is the special name of the sideways figure-8 infinity symbol?',
      options: ['Lemniscate', 'Parabola', 'Pentagon'],
      correctIndex: 0,
      explanation: 'The infinity symbol is called the Lemniscate!'
    },
    seeAlso: [
      { id: 'number-zero', title: 'Zero (0)', category: 'numbers' },
      { id: 'solar-system', title: 'The Sun', category: 'solar-system' }
    ]
  },

  // ==========================================
  // SOLAR SYSTEM
  // ==========================================
  {
    id: 'sun',
    title: 'The Sun',
    symbol: '☀️',
    pronunciation: '(sun)',
    category: 'solar-system',
    tagline: 'The glowing nuclear heart of our solar system that warms our world.',
    analogy: {
      title: 'The Giant Cosmic Campfire',
      story: 'Imagine sitting around a warm campfire on a chilly night. The closer you sit, the warmer you are. The Sun is our entire solar system’s giant campfire — keeping Earth at the perfect cozy temperature for plants, animals, and kids!',
      emoji: '🔥'
    },
    howItWorks: {
      title: 'What the Sun Does',
      points: [
        'Massive Gravity Anchor: The Sun’s enormous gravity pulls all 8 planets in smooth circular orbits.',
        'Nuclear Energy: Deep inside its core, it fuses hydrogen into helium, releasing light and heat.',
        'Speed of Light: Sunlight takes about 8 minutes and 20 seconds to travel 93 million miles to Earth!'
      ]
    },
    funFacts: [
      'The Sun is so huge that about 1.3 million planet Earths could fit inside it!',
      'It is actually a yellow dwarf star, about 4.6 billion years old.',
      'The temperature at the Sun’s core reaches a sizzling 27 million degrees Fahrenheit!'
    ],
    didYouKnowOrigin: 'The name "Sunday" was named in honor of the Sun by ancient Romans and Germanic tribes!',
    microQuiz: {
      question: 'How long does sunlight take to travel across space to reach Earth?',
      options: ['About 8 minutes', '1 second', '3 weeks'],
      correctIndex: 0,
      explanation: 'Sunlight travels at the speed of light and reaches Earth in about 8 minutes!'
    },
    seeAlso: [
      { id: 'earth', title: 'Planet Earth', category: 'solar-system' },
      { id: 'moon', title: 'The Moon', category: 'solar-system' }
    ]
  },
  {
    id: 'earth',
    title: 'Planet Earth',
    symbol: '🌍',
    pronunciation: '(urth)',
    category: 'solar-system',
    tagline: 'Our vibrant blue marble — the only known place in the universe with living creatures.',
    analogy: {
      title: 'The Goldilocks Spaceship',
      story: 'Venus is too hot, Mars is too cold, but Earth is "just right!" Like Goldilocks, Earth sits in the habitable zone with liquid water oceans, a breathable oxygen blanket, and lush green continents.',
      emoji: '🚀'
    },
    howItWorks: {
      title: 'Earth’s Life-Support Systems',
      points: [
        'The Atmosphere: A protective blanket of gases (nitrogen & oxygen) that protects us from solar radiation and meteors.',
        'Liquid Water: Over 70% of Earth’s surface is covered by vast blue oceans.',
        'Magnetic Shield: Liquid iron swirling in Earth’s core creates a magnetic shield protecting our air.'
      ]
    },
    funFacts: [
      'Earth travels around the Sun at a blistering speed of 67,000 miles per hour!',
      'One year on Earth is 365.25 days — that extra quarter-day is why we have a Leap Year every 4 years!',
      'Earth is the only planet not named after a Greek or Roman god.'
    ],
    didYouKnowOrigin: 'The name "Earth" comes from old English and Germanic words like "Ertha", which simply meant "ground" or "soil"!',
    microQuiz: {
      question: 'Why does Earth have a Leap Year every 4 years?',
      options: ['Because one trip around the Sun takes 365 and 1/4 days', 'To give penguins extra time', 'Because the moon stops'],
      correctIndex: 0,
      explanation: 'The extra quarter of a day adds up to one whole extra day every 4 years!'
    },
    seeAlso: [
      { id: 'sun', title: 'The Sun', category: 'solar-system' },
      { id: 'moon', title: 'The Moon', category: 'solar-system' },
      { id: 'water-element', title: 'Water (H2O)', category: 'earth-elements' }
    ]
  },
  {
    id: 'moon',
    title: 'The Moon',
    symbol: '🌙',
    pronunciation: '(moon)',
    category: 'solar-system',
    tagline: 'Earth’s closest cosmic neighbor and nocturnal nightlight.',
    analogy: {
      title: 'Earth’s Loyal Orbiting Mirror',
      story: 'The Moon doesn’t have its own flashlight. Instead, it acts like a giant floating mirror in space, bouncing sunlight back down to Earth so we can see during dark nighttime!',
      emoji: '🪞'
    },
    howItWorks: {
      title: 'What the Moon Does for Earth',
      points: [
        'Ocean Tides: The Moon’s gravity pulls on Earth’s oceans, causing high and low tides twice every day.',
        'Moon Phases: As the Moon circles Earth, we see different amounts of its sunlit side (New Moon, Crescent, Quarter, Full Moon).'
      ]
    },
    funFacts: [
      'Footprints left by Apollo astronauts on the Moon will stay there for millions of years because there is no wind or rain to blow them away!',
      'The Moon has no atmosphere, so space there is completely silent.',
      'Twelve human astronauts have walked on the Moon’s dusty surface.'
    ],
    didYouKnowOrigin: 'The word "Month" comes from the word "Moon" because ancient calendars were based on the 29.5-day cycle of moon phases!',
    microQuiz: {
      question: 'What creates the rising and falling tides in Earth’s oceans?',
      options: ['The Moon’s gravity', 'Whales splashing', 'Wind from clouds'],
      correctIndex: 0,
      explanation: 'The Moon’s gravitational pull gently tugs our oceans to create tides!'
    },
    seeAlso: [
      { id: 'earth', title: 'Planet Earth', category: 'solar-system' },
      { id: 'sun', title: 'The Sun', category: 'solar-system' }
    ]
  },
  {
    id: 'mars',
    title: 'Mars (The Red Planet)',
    symbol: '🔴',
    pronunciation: '(marz)',
    category: 'solar-system',
    tagline: 'Our dusty, rusty neighbor planet where robotic rovers explore.',
    analogy: {
      title: 'The Rusty Desert World',
      story: 'If you leave an iron bicycle in the rain, it turns reddish-brown with rust. Mars is covered in rocks rich with iron that rusted over billions of years, giving the entire planet a rusty strawberry-red color!',
      emoji: '🏜️'
    },
    howItWorks: {
      title: 'Key Facts About Mars',
      points: [
        'Robotic Playground: Robots like Perseverance and Curiosity drive across Mars sending high-definition photos back to Earth.',
        'Giant Volcanoes: Mars has Olympus Mons, the largest volcano in the solar system — three times taller than Mount Everest!'
      ]
    },
    funFacts: [
      'Sunsets on Mars are blue instead of orange or red because of how fine dust scatters sunlight!',
      'A year on Mars is almost twice as long as an Earth year (687 days).',
      'Mars has two tiny lumpy potato-shaped moons called Phobos and Deimos.'
    ],
    didYouKnowOrigin: 'Mars was named after the ancient Roman god of war because its fiery red color reminded people of battle fires!',
    microQuiz: {
      question: 'What color are sunsets when seen on Mars?',
      options: ['Blue', 'Purple', 'Bright green'],
      correctIndex: 0,
      explanation: 'Due to the fine dust in the Martian air, sunsets on Mars glow cool blue!'
    },
    seeAlso: [
      { id: 'earth', title: 'Planet Earth', category: 'solar-system' },
      { id: 'jupiter', title: 'Jupiter', category: 'solar-system' }
    ]
  },
  {
    id: 'jupiter',
    title: 'Jupiter',
    symbol: '🪐',
    pronunciation: '(JOO-pih-ter)',
    category: 'solar-system',
    tagline: 'The colossal gas giant king and planetary protector.',
    analogy: {
      title: 'The Solar System’s Giant Vacuum Cleaner',
      story: 'Jupiter is so massive that its powerful gravity catches stray asteroids and comets heading toward the inner planets, acting like a cosmic bodyguard protecting Earth from space rocks!',
      emoji: '🛡️'
    },
    howItWorks: {
      title: 'Anatomy of Jupiter',
      points: [
        'Gas Giant: Jupiter has no solid surface to walk on — it is a gigantic swirling ball of hydrogen and helium gas.',
        'The Great Red Spot: A swirling storm bigger than planet Earth that has been raging for hundreds of years!',
        'Moon Kingdom: Jupiter has at least 95 confirmed moons orbiting around it.'
      ]
    },
    funFacts: [
      'Jupiter is the fastest spinning planet in our solar system — a full day there lasts only 10 hours!',
      'If you combined all the other 7 planets together, Jupiter would still be more than twice as heavy as all of them combined!',
      'One of its moons, Europa, has a liquid ocean hidden beneath an icy shell that might have alien sea life.'
    ],
    didYouKnowOrigin: 'Jupiter was named after the supreme Roman king of gods, also known as Zeus in ancient Greece.',
    microQuiz: {
      question: 'What is Jupiter’s famous Great Red Spot?',
      options: ['A giant swirling storm', 'A mountain of red rocks', 'A splash of red paint'],
      correctIndex: 0,
      explanation: 'The Great Red Spot is a monster storm bigger than our whole planet!'
    },
    seeAlso: [
      { id: 'saturn', title: 'Saturn', category: 'solar-system' },
      { id: 'mars', title: 'Mars', category: 'solar-system' }
    ]
  },
  {
    id: 'saturn',
    title: 'Saturn',
    symbol: '🪐',
    pronunciation: '(SAT-urn)',
    category: 'solar-system',
    tagline: 'The magnificent jewel of the solar system with glittering rings.',
    analogy: {
      title: 'The Cosmic Hula-Hoop Champion',
      story: 'Imagine putting on a sparkling crown made of billions of shimmering ice crystals, rocks, and dust particles spinning gracefully in place. That is Saturn’s dazzling system of planetary rings!',
      emoji: '👑'
    },
    howItWorks: {
      title: 'What Saturn’s Rings Are Made Of',
      points: [
        'Rings of Ice: The rings look solid from far away, but up close they are made of billions of pieces of water ice, from tiny dust motes to pieces as big as houses!',
        'Ultra Light: Saturn is made mostly of hydrogen and helium gas. If you could build a bathtub big enough, Saturn would actually float on water!'
      ]
    },
    funFacts: [
      'Saturn has over 140 moons — more than any other planet in the solar system!',
      'Its biggest moon, Titan, has thick orange clouds, rain, and lakes of liquid methane.',
      'The rings are up to 175,000 miles wide, but only about 30 feet thick in most places!'
    ],
    didYouKnowOrigin: 'Saturn was named after the Roman god of agriculture and harvest, which is also where our day "Saturday" gets its name!',
    microQuiz: {
      question: 'What would happen if you placed Saturn in a giant cosmic bathtub of water?',
      options: ['It would float', 'It would sink like a stone', 'It would turn into ice cream'],
      correctIndex: 0,
      explanation: 'Because Saturn is made of light gas, its density is lower than water — it would float!'
    },
    seeAlso: [
      { id: 'jupiter', title: 'Jupiter', category: 'solar-system' },
      { id: 'earth', title: 'Planet Earth', category: 'solar-system' }
    ]
  },

  // ==========================================
  // EARTH & NATURE ELEMENTS
  // ==========================================
  {
    id: 'water-element',
    title: 'Water (H2O)',
    symbol: '💧',
    pronunciation: '(WAH-ter)',
    category: 'earth-elements',
    tagline: 'The miraculous liquid of life that shapeshifts into liquid, solid, and steam.',
    analogy: {
      title: 'The Nature Shapeshifter',
      story: 'Water is like a superhero that changes costumes! When it gets freezing cold, it turns into hard solid ice. When it warms up, it flows like clear rivers. When it gets hot, it turns invisible and flies up to the clouds as vapor!',
      emoji: '🧊'
    },
    howItWorks: {
      title: 'The Endless Water Cycle',
      points: [
        'Evaporation: Sunshine heats water in oceans and puddles, turning it into invisible vapor.',
        'Condensation: High in the cool sky, vapor gathers into fluffy clouds.',
        'Precipitation: When clouds get heavy, water falls back to Earth as raindrops or snowflakes!'
      ]
    },
    funFacts: [
      'Your human body is about 60% water — you are mostly water yourself!',
      'The same water molecules you drink today were once drunk by dinosaurs millions of years ago!',
      'Less than 1% of all water on Earth is fresh and drinkable — most is salty ocean water.'
    ],
    didYouKnowOrigin: 'Scientists call water "H2O" because each water molecule is made of two Hydrogen atoms holding hands with one Oxygen atom!',
    microQuiz: {
      question: 'What happens to liquid water when it gets colder than 0°C (32°F)?',
      options: ['It freezes into solid ice', 'It turns into green slime', 'It catches fire'],
      correctIndex: 0,
      explanation: 'Below 0°C, water freezes solid into ice!'
    },
    seeAlso: [
      { id: 'earth', title: 'Planet Earth', category: 'solar-system' },
      { id: 'trees-element', title: 'Trees & Oxygen', category: 'earth-elements' }
    ]
  },
  {
    id: 'air-element',
    title: 'Air & Atmosphere',
    symbol: '💨',
    pronunciation: '(air / AT-mus-feer)',
    category: 'earth-elements',
    tagline: 'The invisible ocean of gas we swim in every second.',
    analogy: {
      title: 'The Invisible Cozy Spacesuit',
      story: 'You can’t see air, but you can feel it when wind blows your hair or inflates a birthday balloon. Earth wears air like a giant spacesuit that keeps us warm, blocks dangerous rays, and lets us breathe!',
      emoji: '🎈'
    },
    howItWorks: {
      title: 'What Is Air Made Of?',
      points: [
        '78% Nitrogen: The friendly quiet gas that fills most of our atmosphere.',
        '21% Oxygen: The life-giving gas our lungs need to turn food into energy.',
        '1% Other Gases: Argon, water vapor, and carbon dioxide for plants.'
      ]
    },
    funFacts: [
      'Without air, we couldn’t hear sounds! Sound needs air molecules to vibrate into our ears.',
      'Birds and airplanes can only fly because air pushes up against their wings (lift).',
      'Every time you take a breath, you inhale roughly 25 sextillion gas molecules!'
    ],
    didYouKnowOrigin: 'The word "Atmosphere" comes from two Greek words: "Atmos" (meaning vapor) and "Sphaira" (meaning globe or sphere)!',
    microQuiz: {
      question: 'Which gas in the air do human lungs need to breathe to live?',
      options: ['Oxygen', 'Helium', 'Smoke'],
      correctIndex: 0,
      explanation: 'Our bodies need Oxygen to power our cells!'
    },
    seeAlso: [
      { id: 'water-element', title: 'Water (H2O)', category: 'earth-elements' },
      { id: 'trees-element', title: 'Trees & Oxygen', category: 'earth-elements' }
    ]
  },
  {
    id: 'trees-element',
    title: 'Trees & Photosynthesis',
    symbol: '🌳',
    pronunciation: '(foh-toh-SIN-thuh-sis)',
    category: 'earth-elements',
    tagline: 'Earth’s giant wooden air purifiers that turn sunshine into oxygen.',
    analogy: {
      title: 'The Solar-Powered Cooking Kitchen',
      story: 'Every green leaf on a tree is a solar kitchen! The tree takes in sunshine from the sky, water from the ground, and carbon dioxide from the air, bakes sweet sugar to grow tall, and releases fresh, clean oxygen for us to breathe!',
      emoji: '🍃'
    },
    howItWorks: {
      title: 'How Trees Clean Our Planet',
      points: [
        'Breathing in Reverse: Humans breathe in oxygen and breathe out CO2. Trees absorb CO2 and release oxygen!',
        'Soil Protectors: Tree roots hold dirt firmly in place so rainstorms don’t wash the soil away.',
        'Animal Homes: A single oak tree can provide shelter and food for over 500 different animal species.'
      ]
    },
    funFacts: [
      'The tallest living tree on Earth is a California redwood named Hyperion — over 380 feet tall!',
      'Trees talk to each other underground using a network of fungal threads nicknamed the "Wood Wide Web".',
      'Some bristlecone pine trees have been alive for over 4,800 years — older than Egyptian pyramids!'
    ],
    didYouKnowOrigin: '"Photosynthesis" comes from Greek: "Photo" means light, and "Synthesis" means putting together. So it literally means "building with light"!',
    microQuiz: {
      question: 'What gas do trees release into the air that humans and animals breathe?',
      options: ['Oxygen', 'Carbon Dioxide', 'Argon'],
      correctIndex: 0,
      explanation: 'Trees give off fresh oxygen for all living things to breathe!'
    },
    seeAlso: [
      { id: 'air-element', title: 'Air & Atmosphere', category: 'earth-elements' },
      { id: 'water-element', title: 'Water (H2O)', category: 'earth-elements' }
    ]
  },
  {
    id: 'rainbows-element',
    title: 'Rainbows',
    symbol: '🌈',
    pronunciation: '(RAYN-bohs)',
    category: 'earth-elements',
    tagline: 'The vibrant bridge of light created when sunshine dances with raindrops.',
    analogy: {
      title: 'The Raindrop Light Splitter',
      story: 'Sunlight looks clear or white, but it is actually a rainbow team of 7 colors holding hands! When a ray of sunlight enters a round raindrop, the water acts like a prism, bending and separating the light into Red, Orange, Yellow, Green, Blue, Indigo, and Violet!',
      emoji: '🎨'
    },
    howItWorks: {
      title: 'The Seven Colors (ROYGBIV)',
      points: [
        'Red, Orange, Yellow: Warm long wavelengths that bend the least.',
        'Green, Blue, Indigo, Violet: Cool short wavelengths that bend the most.',
        'Where to Look: To see a rainbow, the Sun must be behind you, and the rain must be in front of you!'
      ]
    },
    funFacts: [
      'No two people see the exact same rainbow because your eyes are in a slightly different position!',
      'Moonbows are rare night rainbows made by moonlight bouncing through misty waterfalls.',
      'Double rainbows happen when light bounces twice inside each raindrop, flipping the second rainbow’s colors backwards!'
    ],
    didYouKnowOrigin: 'Kids remember the seven colors of the rainbow with a funny name: "Roy G. Biv" (Red, Orange, Yellow, Green, Blue, Indigo, Violet)!',
    microQuiz: {
      question: 'Where must the Sun be located for you to see a rainbow in the sky?',
      options: ['Behind your back', 'Right in front of your eyes', 'Underground'],
      correctIndex: 0,
      explanation: 'The sun shines from behind you onto the raindrops in front of you!'
    },
    seeAlso: [
      { id: 'sun', title: 'The Sun', category: 'solar-system' },
      { id: 'water-element', title: 'Water (H2O)', category: 'earth-elements' }
    ]
  },

  // ==========================================
  // COUNTRIES & GEOGRAPHY
  // ==========================================
  {
    id: 'seven-continents',
    title: 'The 7 Continents',
    symbol: '🗺️',
    pronunciation: '(KON-tih-nents)',
    category: 'countries-world',
    tagline: 'The seven giant landmass puzzle pieces that make up our global home.',
    analogy: {
      title: 'The Giant Drifting Puzzle Pieces',
      story: 'Imagine Earth’s land as seven big jigsaw puzzle pieces floating on a bed of warm rock. Millions of years ago, they were all squished together into one supercontinent called Pangaea, before slowly drifting to where they sit today!',
      emoji: '🧩'
    },
    howItWorks: {
      title: 'Meet the 7 Continents',
      points: [
        'Asia: The largest and most populous continent, home to Mount Everest.',
        'Africa: The cradle of humanity, home to the Sahara Desert and wild savannas.',
        'North America: From icy Canada and Alaska to Mexico’s sunny beaches.',
        'South America: Home to the lush Amazon Rainforest and Andes Mountains.',
        'Antarctica: The frozen, windiest continent covered in glaciers.',
        'Europe: Home to historic castles, ancient Rome, and diverse languages.',
        'Australia / Oceania: The island continent famous for kangaroos and coral reefs.'
      ]
    },
    funFacts: [
      'Mount Everest in Asia grows about 4 millimeters taller every year as tectonic plates collide!',
      'Australia is wider than the Moon’s diameter!',
      'Antarctica holds about 70% of all the fresh water on Earth locked in its ice.'
    ],
    didYouKnowOrigin: '250 million years ago, all seven continents were connected in one super-giant continent that scientists named "Pangaea", which means "All Earth"!',
    microQuiz: {
      question: 'What was the ancient supercontinent called when all lands were connected?',
      options: ['Pangaea', 'Atlantis', 'Safari'],
      correctIndex: 0,
      explanation: 'Pangaea was the giant supercontinent that broke apart over millions of years!'
    },
    seeAlso: [
      { id: 'world-oceans', title: 'World Oceans', category: 'countries-world' },
      { id: 'antarctica', title: 'Antarctica', category: 'countries-world' }
    ]
  },
  {
    id: 'world-oceans',
    title: 'World Oceans',
    symbol: '🌊',
    pronunciation: '(OH-shuns)',
    category: 'countries-world',
    tagline: 'The five giant interconnected salty waters that cover 71% of Earth.',
    analogy: {
      title: 'The Global Warm Water Highway',
      story: 'Even though we give oceans five different names, they are all connected into one giant, continuous bathtub! Ocean currents act like warm and cool rivers flowing through space to regulate Earth’s weather.',
      emoji: '🧭'
    },
    howItWorks: {
      title: 'The 5 Oceans from Biggest to Smallest',
      points: [
        'Pacific Ocean: The biggest ocean on Earth — larger than all the land combined!',
        'Atlantic Ocean: The ocean separating the Americas from Europe and Africa.',
        'Indian Ocean: The warmest ocean, washing over tropical beaches.',
        'Southern Ocean: The chilly, stormy ocean circling Antarctica.',
        'Arctic Ocean: The smallest and shallowest ocean, covered by pack ice.'
      ]
    },
    funFacts: [
      'The deepest trench on Earth is the Mariana Trench in the Pacific — nearly 36,000 feet deep!',
      'More than 80% of our oceans have never been explored or mapped by humans.',
      'Most of the oxygen on Earth is actually produced by tiny ocean plankton, not trees!'
    ],
    didYouKnowOrigin: 'The Pacific Ocean was named by explorer Ferdinand Magellan; "Pacifico" in Spanish and Portuguese means "peaceful" because the waters seemed calm!',
    microQuiz: {
      question: 'Which is the largest ocean on planet Earth?',
      options: ['The Pacific Ocean', 'The Atlantic Ocean', 'The Arctic Ocean'],
      correctIndex: 0,
      explanation: 'The Pacific Ocean is so vast that it covers more area than all land on Earth combined!'
    },
    seeAlso: [
      { id: 'seven-continents', title: 'The 7 Continents', category: 'countries-world' },
      { id: 'water-element', title: 'Water (H2O)', category: 'earth-elements' }
    ]
  },
  {
    id: 'japan',
    title: 'Japan',
    symbol: '🇯🇵',
    pronunciation: '(juh-PAN)',
    category: 'countries-world',
    tagline: 'The Island nation of futuristic bullet trains and ancient cherry blossoms.',
    analogy: {
      title: 'Where Ancient Castles Meet High-Tech Robots',
      story: 'Imagine riding a super-fast bullet train that glides at 200 miles per hour past peaceful pink cherry blossom trees, serene bamboo forests, and ancient wooden temples. That is the harmony of Japan!',
      emoji: '🌸'
    },
    howItWorks: {
      title: 'Cool Features of Japan',
      points: [
        'Island Nation: Japan is an archipelago made of 4 large main islands and over 14,000 smaller islands.',
        'Mount Fuji: A snow-capped symmetrical volcano that is Japan’s most famous natural landmark.',
        'Bullet Trains (Shinkansen): High-speed electric trains known for running on the exact second.'
      ]
    },
    funFacts: [
      'There are more bicycles in Tokyo than cars in many cities!',
      'Japan has vending machines that sell everything from hot ramen noodles to umbrellas and ice cream.',
      'Slurping noodles in Japan is considered polite because it shows the chef you are enjoying the soup!'
    ],
    didYouKnowOrigin: 'In Japanese, the country is called "Nihon" or "Nippon", which means "Origin of the Sun" — that is why its flag has a simple red sun circle in the middle!',
    microQuiz: {
      question: 'What is Japan’s famous snow-capped volcanic mountain called?',
      options: ['Mount Fuji', 'Mount Everest', 'Mount Olympus'],
      correctIndex: 0,
      explanation: 'Mount Fuji is Japan’s most famous mountain and volcano!'
    },
    seeAlso: [
      { id: 'seven-continents', title: 'The 7 Continents', category: 'countries-world' },
      { id: 'egypt', title: 'Egypt', category: 'countries-world' }
    ]
  },
  {
    id: 'egypt',
    title: 'Egypt',
    symbol: '🇪🇬',
    pronunciation: '(EE-jipt)',
    category: 'countries-world',
    tagline: 'The land of the Nile River, towering stone pyramids, and ancient pharaohs.',
    analogy: {
      title: 'The Living Outdoor History Book',
      story: 'Visiting Egypt is like stepping into a real-life time machine! For thousands of years, people carved hieroglyphic stories on golden stone temples and built giant limestone pyramids aligned with the stars.',
      emoji: '🏺'
    },
    howItWorks: {
      title: 'Treasures of Egypt',
      points: [
        'The Nile River: The longest river in Africa, providing fertile green soil amid surrounding deserts.',
        'The Great Pyramids of Giza: Massive royal tombs built with millions of limestone blocks over 4,500 years ago.',
        'The Great Sphinx: A colossal stone guardian with the body of a lion and head of a pharaoh.'
      ]
    },
    funFacts: [
      'Ancient Egyptians loved cats and believed they brought good luck and protection to homes!',
      'They invented one of the earliest writing systems using picture symbols called Hieroglyphics.',
      'The Great Pyramid was the tallest human-made building in the world for over 3,800 years!'
    ],
    didYouKnowOrigin: 'The Nile River flows from South to North, which is unusual for major rivers! Its annual floods provided the black mud that gave ancient Egypt its original name: "Kemet" (The Black Land).',
    microQuiz: {
      question: 'What animal body does the famous Great Sphinx of Giza have?',
      options: ['A lion', 'A horse', 'An eagle'],
      correctIndex: 0,
      explanation: 'The Sphinx has the powerful body of a lion and the head of a pharaoh!'
    },
    seeAlso: [
      { id: 'seven-continents', title: 'The 7 Continents', category: 'countries-world' },
      { id: 'brazil', title: 'Brazil', category: 'countries-world' }
    ]
  },
  {
    id: 'brazil',
    title: 'Brazil',
    symbol: '🇧🇷',
    pronunciation: '(bruh-ZIL)',
    category: 'countries-world',
    tagline: 'The vibrant giant of South America, home of the Amazon Rainforest.',
    analogy: {
      title: 'The Green Lungs of the World',
      story: 'Brazil holds the immense Amazon Rainforest — a lush green ocean of jungle trees so vast that it recycles millions of gallons of water into clouds and produces a huge share of Earth’s fresh air!',
      emoji: '🦜'
    },
    howItWorks: {
      title: 'Wonders of Brazil',
      points: [
        'The Amazon River: The largest river by water volume in the world, carrying more water than the next 7 largest rivers combined!',
        'Wildlife Paradise: Home to pink river dolphins, colorful toucans, jaguars, and poison dart frogs.'
      ]
    },
    funFacts: [
      'Brazil is the only country in South America where the official language is Portuguese!',
      'Brazil has won the FIFA Soccer World Cup five times — more than any other nation!',
      'Rio de Janeiro is famous for the giant statue of Christ the Redeemer standing atop Mount Corcovado.'
    ],
    didYouKnowOrigin: 'Brazil was named after the "Pau-brasil" (Brazilwood) tree, which produced a prized deep-red dye sought by traders across the world!',
    microQuiz: {
      question: 'What is the official language spoken in Brazil?',
      options: ['Portuguese', 'Spanish', 'French'],
      correctIndex: 0,
      explanation: 'Brazil’s official language is Portuguese!'
    },
    seeAlso: [
      { id: 'seven-continents', title: 'The 7 Continents', category: 'countries-world' },
      { id: 'trees-element', title: 'Trees & Photosynthesis', category: 'earth-elements' }
    ]
  },
  {
    id: 'antarctica',
    title: 'Antarctica',
    symbol: '🇦🇶',
    pronunciation: '(ant-ARK-tih-kuh)',
    category: 'countries-world',
    tagline: 'The frozen, windswept bottom of the world where penguins reign supreme.',
    analogy: {
      title: 'The Earth’s Giant Ice Palace',
      story: 'Imagine an entire continent covered by an ice sheet up to 3 miles thick! No cities, no roads, no trees — just endless sparkling glaciers, icebergs floating in crystal waters, and cheerful colonies of penguins.',
      emoji: '🧊'
    },
    howItWorks: {
      title: 'Why Antarctica Is So Extreme',
      points: [
        'Coldest Desert: Even though it is made of ice, it gets so little snowfall that scientists classify it as the world’s largest desert!',
        'Dedicated to Science: No single country owns Antarctica; a global treaty ensures it is only used for peaceful scientific research.'
      ]
    },
    funFacts: [
      'Emperor penguins keep their eggs warm in -40°F blizzards by balancing them on their feet under a cozy belly pouch!',
      'The coldest temperature ever recorded on Earth was -128.6°F (-89.2°C) in Antarctica in 1983.',
      'Antarctica has no native human population — only scientists and researchers visiting in shifts.'
    ],
    didYouKnowOrigin: 'The name "Antarctica" literally means "Opposite the Arctic". "Arktos" was Greek for bear (referring to the northern Ursa Major constellation), so Antarctica means "Land opposite the Great Bear"!',
    microQuiz: {
      question: 'Which famous flightless bird lives in large colonies in Antarctica?',
      options: ['Penguins', 'Flamingos', 'Parrots'],
      correctIndex: 0,
      explanation: 'Emperor and Adélie penguins thrive in the icy waters around Antarctica!'
    },
    seeAlso: [
      { id: 'seven-continents', title: 'The 7 Continents', category: 'countries-world' },
      { id: 'world-oceans', title: 'World Oceans', category: 'countries-world' }
    ]
  }
];
