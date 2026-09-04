import { EncyclopediaEntry } from '../../types';

export const NUMBERS_ENTRIES: EncyclopediaEntry[] = [
  {
    id: 'zero-superpower',
    title: 'Zero (0) — The Magical Placeholder',
    symbol: '0',
    pronunciation: '(ZEE-roh)',
    category: 'numbers',
    tagline: 'The miraculous circle that represents nothing alone, yet multiplies everything tenfold when placed beside other digits.',
    analogy: {
      title: 'The Invisible Space-Holder and Multiplier Rocket',
      story: 'Zero is the ultimate math superhero! By itself on a plate, 0 cookies means an empty plate. But place zero behind the number 1, and it instantly transforms into 10! Add another zero, and it rockets to 100! Without zero, computers and modern science could never exist.',
      emoji: '🕳️'
    },
    howItWorks: {
      title: 'Superpowers of Zero',
      points: [
        'The Empty Set: Represents an absence of quantity or a starting baseline on a thermometer.',
        'Place Value Multiplier: In the decimal system, each zero on the right multiplies the quantity by 10 (1 -> 10 -> 100 -> 1,000).',
        'Additive Identity: Adding or subtracting zero leaves any number completely unchanged (5 + 0 = 5).'
      ]
    },
    funFacts: [
      'Ancient Roman numerals had no symbol for zero — which made multiplying large numbers almost impossible for them!',
      'Zero was independently invented by brilliant mathematicians in ancient India (Brahmagupta) and the Mayan civilization in Central America.',
      'Computers think in binary: strings of 0s (switch OFF) and 1s (switch ON) billions of times per second!'
    ],
    kidWords: [
      { word: 'Placeholder', emoji: '📍', meaning: 'A symbol that holds a position to establish the value of other digits.' },
      { word: 'Binary', emoji: '💻', meaning: 'A computer counting system that uses only two digits: 0 and 1.' },
      { word: 'Decimal', emoji: '🔟', meaning: 'A base-10 number system based on grouping in tens.' }
    ],
    didYouKnowOrigin: 'The word "Zero" comes from the Arabic word "sifr" (which means empty or void), which is also where our English word "cipher" comes from!',
    microQuiz: {
      question: 'What is 42 plus 0?',
      options: ['42', '0', '420'],
      correctIndex: 0,
      explanation: 'Adding zero to any number never changes its value — 42 + 0 is always 42!'
    },
    seeAlso: [
      { id: 'number-one', title: 'Number 1', category: 'numbers' },
      { id: 'number-ten', title: 'Number 10', category: 'numbers' },
      { id: 'number-100', title: 'Number 100', category: 'numbers' }
    ]
  },
  {
    id: 'number-one',
    title: 'Number 1 (One)',
    symbol: '1',
    pronunciation: '(WUN)',
    category: 'numbers',
    tagline: 'The pioneer of counting, the starting point of arithmetic, and the symbol of unity.',
    analogy: {
      title: 'The Tall Straight Flagpole of Beginning',
      story: 'Number 1 stands proud and straight like a lighthouse standing tall on a cliff! Everything in counting starts with 1: one sun in the daytime sky, one nose on your face, and the very first step of every great adventure.',
      emoji: '🚩'
    },
    howItWorks: {
      title: 'The Identity Element',
      points: [
        'Multiplicative Identity: Multiplying any number by 1 gives that exact number back (7 x 1 = 7).',
        'The Atomic Unit: Every whole number is simply made of groups of 1s added together.',
        'First Position: 1st place in a race represents the champion!'
      ]
    },
    funFacts: [
      '1 is neither a prime number nor a composite number — it has its own special mathematical status as a "unit"!',
      'In binary computer code, 1 represents electrical voltage ON (while 0 is OFF).',
      'The number 1 is written as a single vertical tally stroke in almost every ancient culture on Earth!'
    ],
    kidWords: [
      { word: 'Solo', emoji: '🎸', meaning: 'Done by one single person alone.' },
      { word: 'Unit', emoji: '🧱', meaning: 'A single, individual building block quantity of 1.' },
      { word: 'Unique', emoji: '🦄', meaning: 'Being the only one of its kind in the world.' }
    ],
    didYouKnowOrigin: 'In ancient Sumerian and Egyptian hieroglyphs 5,000 years ago, the number one was drawn as a single finger pointing upward!',
    microQuiz: {
      question: 'What happens when you multiply any number by 1?',
      options: ['The number stays exactly the same', 'It doubles', 'It turns to zero'],
      correctIndex: 0,
      explanation: 'Multiplying by 1 leaves the original number unchanged (e.g., 99 × 1 = 99)!'
    },
    seeAlso: [
      { id: 'zero-superpower', title: 'Number 0', category: 'numbers' },
      { id: 'number-two', title: 'Number 2', category: 'numbers' }
    ]
  },
  {
    id: 'number-two',
    title: 'Number 2 (Two)',
    symbol: '2',
    pronunciation: '(TOO)',
    category: 'numbers',
    tagline: 'The number of balance, pairs, symmetry, and the only even prime number.',
    analogy: {
      title: 'The Graceful Swimming Swan of Pairs',
      story: 'Look at the shape of 2: it curves around gracefully at the top and glides flat on the water like a peaceful swimming swan! Number 2 is the number of companions: two eyes to see the world, two shoes on your feet, two wings for a bird to soar, and two best friends sharing a story.',
      emoji: '🦢'
    },
    howItWorks: {
      title: 'Symmetry and Doubling',
      points: [
        'Even Numbers: Any number that can be divided evenly into 2 equal teams with no leftovers is an even number.',
        'Doubling Superpower: Multiplying by 2 doubles any quantity instantly.',
        'Only Even Prime: 2 is the ONLY even number in the universe that is also a prime number!'
      ]
    },
    funFacts: [
      'Humans have bilateral symmetry: our left and right halves are mirrored pairs with 2 eyes, 2 ears, 2 arms, and 2 legs!',
      'A "pair" always means a group of 2 matching items (like a pair of socks or mittens).',
      'The binary system that runs all world computers uses exactly 2 digits: 0 and 1.'
    ],
    kidWords: [
      { word: 'Pair', emoji: '🧦', meaning: 'A set of two things used together.' },
      { word: 'Dual', emoji: '⚔️', meaning: 'Consisting of two parts, elements, or aspects.' },
      { word: 'Symmetry', emoji: '🦋', meaning: 'Balanced proportions where two halves mirror each other.' }
    ],
    didYouKnowOrigin: 'The word "Duo" in music means a performance by exactly two musicians playing together in harmony!',
    microQuiz: {
      question: 'Is the number 2 an even number or an odd number?',
      options: ['Even', 'Odd', 'Neither'],
      correctIndex: 0,
      explanation: '2 is the first positive even number, and the only even number that is also prime!'
    },
    seeAlso: [
      { id: 'number-one', title: 'Number 1', category: 'numbers' },
      { id: 'number-three', title: 'Number 3', category: 'numbers' }
    ]
  },
  {
    id: 'number-100',
    title: 'Number 100 (One Hundred)',
    symbol: '100',
    pronunciation: '(WUN HUN-dred)',
    category: 'numbers',
    tagline: 'The magnificent three-digit century milestone and the foundation of percentages.',
    analogy: {
      title: 'The Golden Grid of Ten Tens',
      story: 'Imagine a shiny 10-by-10 grid of colorful building blocks! Count 10 rows of 10 blocks each, and you have exactly 100 blocks. 100 is the first three-digit number we learn, celebrating 100 days of school, 100 cents in a dollar, and 100 percent for a perfect test score!',
      emoji: '💯'
    },
    howItWorks: {
      title: 'Power of the Century',
      points: [
        'Ten Tens (10 × 10 = 100): 10 groups of ten combine to make one hundred.',
        '100% Perfection: Percent means "per hundred" — 100% means the complete, whole amount.',
        '100 Cents = $1.00 Dollar: The monetary foundation of coins and bills.'
      ]
    },
    funFacts: [
      'A period of 100 years is called a "Century"!',
      'A person who lives to be 100 years old is called a "Centenarian".',
      'Water boils at exactly 100 degrees Celsius (212°F) at sea level.'
    ],
    kidWords: [
      { word: 'Century', emoji: '📜', meaning: 'A period of 100 consecutive years.' },
      { word: 'Percent', emoji: '📊', meaning: 'One part in every hundred (symbol %).' },
      { word: 'Centenarian', emoji: '🎂', meaning: 'A person who has reached the age of 100 years or more.' }
    ],
    didYouKnowOrigin: 'The word "Hundred" comes from Old Norse "hundrath", which originally meant a collection of 100 warriors!',
    microQuiz: {
      question: 'How many tens are needed to make the number 100?',
      options: ['10 tens', '5 tens', '100 tens'],
      correctIndex: 0,
      explanation: '10 × 10 = 100! Ten groups of ten equal one hundred!'
    },
    seeAlso: [
      { id: 'number-ten', title: 'Number 10', category: 'numbers' },
      { id: 'zero-superpower', title: 'Number 0', category: 'numbers' }
    ]
  },
  {
    id: 'fractions-halves',
    title: 'Fractions & Halves (1/2, 1/4)',
    symbol: '½',
    pronunciation: '(FRAK-shunz and HAVZ)',
    category: 'numbers',
    tagline: 'The math of fair sharing — slicing a whole pizza into equal pieces.',
    analogy: {
      title: 'The Fair Pizza and Birthday Cake Slicer',
      story: 'When you share a delicious cheesy pizza with your best friend, you cut it right down the middle into 2 equal halves: each person gets 1 out of 2 pieces (1/2). If 4 friends share the pizza, you slice it into 4 equal quarters (1/4). Fractions are numbers that tell us how many equal pieces of a whole we have!',
      emoji: '🍕'
    },
    howItWorks: {
      title: 'Anatomy of a Fraction (Top vs. Bottom)',
      points: [
        'Numerator (Top Number): How many slices you have on your plate (e.g. 1 slice).',
        'Denominator (Bottom Number): The total number of equal slices the whole was cut into (e.g. 2 slices).',
        'Equivalent Fractions: 2/4 is the exact same amount of pizza as 1/2!'
      ]
    },
    funFacts: [
      'In musical rhythm, a quarter note (1/4) is one beat in a 4-beat bar!',
      'Ancient Egyptians used fractions 4,000 years ago to measure bread loaves and beer rations for pyramid builders.',
      'Half past the hour (like 2:30) means the minute hand has traveled 1/2 of the way around the circular clock face.'
    ],
    kidWords: [
      { word: 'Numerator', emoji: '🔝', meaning: 'The top number in a fraction showing the parts taken.' },
      { word: 'Denominator', emoji: '🔻', meaning: 'The bottom number in a fraction showing total equal parts.' },
      { word: 'Equivalent', emoji: '⚖️', meaning: 'Equal in value, even if written with different numbers (like 1/2 = 2/4).' }
    ],
    didYouKnowOrigin: 'The word "Fraction" comes from the Latin word "fractio", which means "to break into pieces" — just like breaking a chocolate bar to share!',
    microQuiz: {
      question: 'If you cut an apple into 4 equal pieces and eat 2 pieces, what fraction did you eat?',
      options: ['2/4 (which is equal to 1/2 of the apple!)', '1/4', 'The whole tree'],
      correctIndex: 0,
      explanation: 'Eating 2 out of 4 equal pieces is 2/4, which simplifies to exactly one-half (1/2) of the apple!'
    },
    handsOnExperiment: {
      title: 'Paper Plate Fraction Pizza Slices',
      materials: ['A paper plate', 'Scissors', 'Markers or crayons (red for sauce, yellow for cheese)'],
      steps: [
        'Color your paper plate to look like a delicious pizza with pepperoni circles.',
        'Fold the plate in half and cut along the crease: You now hold two halves (1/2 and 1/2).',
        'Fold one half in half again and cut: You now hold two quarters (1/4 and 1/4).',
        'Fit the pieces together like a puzzle to prove that 1/4 + 1/4 = 1/2!'
      ],
      explanation: 'Hands-on fraction pieces visually demonstrate how smaller equal parts assemble into larger wholes!',
      emoji: '✂️'
    },
    seeAlso: [
      { id: 'number-two', title: 'Number 2', category: 'numbers' },
      { id: 'geometric-shapes', title: 'Shapes & Geometry', category: 'numbers' }
    ]
  },
  {
    id: 'geometric-shapes',
    title: 'Shapes & Geometry',
    symbol: '📐',
    pronunciation: '(JEE-om-eh-tree and SHAYPS)',
    category: 'numbers',
    tagline: 'Circles, Triangles, Squares, and Polygons — the architectural shapes of the universe.',
    analogy: {
      title: 'The Universe’s Building Block Blueprint',
      story: 'Every single thing you see is built from geometry shapes! The wheels on a bicycle are Circles (zero corners so they roll smoothly), road signs are Triangles (the strongest structural shape), your books are Rectangles (perfect for stacking on shelves), and dice are Cubes.',
      emoji: '🔷'
    },
    howItWorks: {
      title: 'Core 2D Geometric Shapes',
      points: [
        'Circle (🔴): A continuous round curve where every point is the exact same distance from the center.',
        'Triangle (🔺): 3 straight sides and 3 angles whose interior angles always add to 180 degrees.',
        'Square (⬛): 4 equal sides with 4 perfect 90-degree right corners.',
        'Hexagon (⬡): 6 equal sides, used by honeybees for the most efficient honeycomb packing!'
      ]
    },
    funFacts: [
      'Triangles are the strongest shape in architecture because pushing on one corner distributes the force across all three sides!',
      'A 3D circle is called a Sphere (like basketballs and planets), and a 3D square is called a Cube (like ice blocks).',
      'The word "Geometry" comes from Greek "Geo" (Earth) and "Metron" (Measurement) — measuring the Earth!'
    ],
    kidWords: [
      { word: 'Polygon', emoji: '🔷', meaning: 'A flat closed 2D shape with straight sides.' },
      { word: 'Perimeter', emoji: '📏', meaning: 'The total distance all the way around the outside edge of a shape.' },
      { word: 'Vertex', emoji: '📍', meaning: 'A corner point where two straight lines meet.' }
    ],
    didYouKnowOrigin: 'Ancient Greek geometer Euclid wrote "Elements" over 2,300 years ago, which is the most famous geometry textbook in human history!',
    microQuiz: {
      question: 'How many straight sides does a triangle have?',
      options: ['3 sides', '4 sides', '0 sides'],
      correctIndex: 0,
      explanation: 'A triangle always has exactly 3 sides and 3 corner vertices!'
    },
    seeAlso: [
      { id: 'bridges-engineering', title: 'Bridges & Engineering', category: 'how-things-work' },
      { id: 'honeybees', title: 'Honeybees (Hexagons)', category: 'animals-dinosaurs' }
    ]
  },
  {
    id: 'infinity-concept',
    title: 'Infinity (∞) — The Never-Ending Wonder',
    symbol: '∞',
    pronunciation: '(in-FIN-ih-tee)',
    category: 'numbers',
    tagline: 'Not a number, but a mind-expanding idea of something that goes on forever without end.',
    analogy: {
      title: 'The Eternal Loop and Endless Number Sky',
      story: 'Imagine walking on a giant figure-8 race track shaped like ∞: you could walk and walk for billions of years and you would never reach a wall or a finish line! If you started counting numbers 1, 2, 3... you could count forever and there would always be one more number waiting ahead of you.',
      emoji: '🌌'
    },
    howItWorks: {
      title: 'Why Infinity Is an Idea, Not a Number',
      points: [
        'Endless Counting: For any huge number you can imagine (like a trillion), you can always add +1 to get an even bigger number.',
        'The Lemniscate Symbol: The sideways figure-8 symbol (∞) was chosen in 1655 because you can trace its ribbon forever without lifting your pencil.',
        'Infinitely Small: In mathematics, you can also zoom in infinitely between 0 and 1 with decimals (0.1, 0.01, 0.001...).'
      ]
    },
    funFacts: [
      'A "Googol" is the number 1 followed by 100 zeros — but even a Googol is tiny compared to Infinity!',
      'The cosmic universe might be infinite in size, stretching beyond what our telescopes can ever observe.',
      'Mathematician Georg Cantor proved that there are actually different sizes of infinities!'
    ],
    kidWords: [
      { word: 'Lemniscate', emoji: '♾️', meaning: 'The ribbon-like mathematical symbol for infinity.' },
      { word: 'Boundless', emoji: '🚀', meaning: 'Having no boundaries, limits, or ending edges.' },
      { word: 'Googol', emoji: '🔟', meaning: 'The large number 10 raised to the 100th power (1 followed by 100 zeros).' }
    ],
    didYouKnowOrigin: 'The internet search company Google was named after the mathematical number "Googol" to symbolize organizing infinite information!',
    microQuiz: {
      question: 'Is Infinity a specific huge number you can reach, or an endless concept?',
      options: ['An endless concept that goes on forever', 'A number with exactly 100 digits', 'The number after ten'],
      correctIndex: 0,
      explanation: 'Infinity is a mathematical concept meaning boundless and endless — you can never stop counting!'
    },
    seeAlso: [
      { id: 'zero-superpower', title: 'Number 0', category: 'numbers' },
      { id: 'black-holes', title: 'Black Holes', category: 'solar-system' }
    ]
  }
];
