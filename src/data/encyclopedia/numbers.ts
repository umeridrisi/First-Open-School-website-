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
  },
  {
    id: 'addition-subtraction',
    title: 'Addition & Subtraction',
    symbol: '➕➖',
    pronunciation: '(uh-DISH-un and sub-TRAK-shun)',
    category: 'numbers',
    tagline: 'The two foundational building blocks of arithmetic: joining together and taking away.',
    analogy: {
      title: 'The Picnic Basket and The Greedy Squirrel',
      story: 'Imagine you have a picnic basket! Addition (+) is when you put 3 red apples and 2 green pears into the basket: you count them together and now you have 5 delicious fruits! Subtraction (-) is when a cheerful squirrel hops in and takes away 2 fruits: 5 minus 2 leaves 3 fruits remaining in your basket!',
      emoji: '🧺'
    },
    howItWorks: {
      title: 'The Number Line Dance',
      points: [
        'Addition (+): Taking steps FORWARD to the right on a number line (e.g., start at 4, jump forward 3 steps = land on 7).',
        'Subtraction (-): Taking steps BACKWARD to the left on a number line (e.g., start at 9, step backward 4 = land on 5).',
        'Inverse Operations: They undo each other! If 6 + 4 = 10, then 10 - 4 = 6.'
      ]
    },
    funFacts: [
      'The plus sign (+) was originally shorthand for the Latin word "et", which means "and"!',
      'The equals sign (=) was invented in 1557 by Welsh mathematician Robert Recorde because "no two things can be more equal than two parallel twin lines"!',
      'Zero is the additive identity: 1,000,000 + 0 is still 1,000,000!'
    ],
    kidWords: [
      { word: 'Sum', emoji: '➕', meaning: 'The total amount resulting from the addition of two or more numbers.' },
      { word: 'Difference', emoji: '➖', meaning: 'The result of subtracting one number from another.' },
      { word: 'Number Line', emoji: '📏', meaning: 'A straight line on which numbers are marked at intervals to visualize arithmetic.' }
    ],
    didYouKnowOrigin: 'Before paper was common, ancient shopkeepers did addition and subtraction on wooden frames with sliding beads called an Abacus — which can calculate as fast as an electronic calculator!',
    microQuiz: {
      question: 'If you have 7 colorful balloons and give 3 to your best friend, how many do you have left?',
      options: ['4 balloons (7 - 3 = 4)', '10 balloons', '0 balloons'],
      correctIndex: 0,
      explanation: 'Taking 3 away from 7 leaves 4 balloons: 7 - 3 = 4!'
    },
    seeAlso: [
      { id: 'zero-superpower', title: 'Zero (0)', category: 'numbers' },
      { id: 'multiplication-division', title: 'Multiplication & Division', category: 'numbers' }
    ]
  },
  {
    id: 'multiplication-division',
    title: 'Multiplication & Division',
    symbol: '✖️➗',
    pronunciation: '(mul-tuh-plih-KAY-shun and duh-VIZH-un)',
    category: 'numbers',
    tagline: 'Skip-counting turbochargers and equal sharing superpowers.',
    analogy: {
      title: 'The Egg Carton and The Cookie Sharing Party',
      story: 'Multiplication (×) is super-fast addition! Instead of counting 2 + 2 + 2 + 2 + 2 + 2, you say "6 groups of 2 eggs" — that’s 6 × 2 = 12 eggs instantly! Division (÷) is fair sharing: if you bake 12 cookies and want to share them equally with 3 friends, 12 ÷ 3 = exactly 4 cookies for each person with none left over!',
      emoji: '🍪'
    },
    howItWorks: {
      title: 'Arrays & Equal Groups',
      points: [
        'Multiplication (×): Equal groups added repeatedly. A 4-row by 5-column grid (array) has 4 × 5 = 20 total dots.',
        'Commutative Law: The order doesn’t matter! 3 × 7 is the exact same number as 7 × 3 (both equal 21).',
        'Division (÷): Splitting a total quantity into equal piles or finding how many groups fit inside.'
      ]
    },
    funFacts: [
      'The multiplication symbol "×" is known as the St. Andrew’s Cross, first introduced in math books in 1631.',
      'Multiplying any number by 9 has a magic secret: the sum of the digits of the answer always adds up to 9! (9 × 2 = 18 and 1+8=9; 9 × 5 = 45 and 4+5=9)!',
      'You cannot divide any number by zero in mathematics — it creates an impossible paradox!'
    ],
    kidWords: [
      { word: 'Product', emoji: '✖️', meaning: 'The result obtained by multiplying two numbers together.' },
      { word: 'Quotient', emoji: '➗', meaning: 'The result obtained by dividing one quantity by another.' },
      { word: 'Array', emoji: '🍱', meaning: 'An orderly arrangement of objects or numbers into equal rows and columns.' }
    ],
    didYouKnowOrigin: 'Ancient Egyptians multiplied numbers using a clever method of doubling numbers and adding the binary rows together, requiring only the ability to add and multiply by 2!',
    microQuiz: {
      question: 'If you have 4 dog bowls and put 3 crunchy biscuits in each bowl, how many biscuits did you use in total?',
      options: ['12 biscuits (4 groups of 3 = 12)', '7 biscuits', '1 biscuit'],
      correctIndex: 0,
      explanation: '4 bowls times 3 biscuits per bowl is 4 × 3 = 12 total dog treats!'
    },
    seeAlso: [
      { id: 'addition-subtraction', title: 'Addition & Subtraction', category: 'numbers' },
      { id: 'fractions-magic', title: 'Fractions', category: 'numbers' }
    ]
  },
  {
    id: 'pi-mathematics',
    title: 'Pi (π = 3.14159...) — The Circle Number',
    symbol: 'π',
    pronunciation: '(PY)',
    category: 'numbers',
    tagline: 'The infinite, never-ending constant hidden inside every circle in the universe.',
    analogy: {
      title: 'The Invisible Tape Measure of Every Round Wheel',
      story: 'No matter whether you measure a tiny coin, a giant bicycle wheel, or the equator of the planet Jupiter, if you measure the distance around the circle (circumference) and divide it by the distance straight across its middle (diameter), you ALWAYS get the exact same magical number: 3.14159... Pi!',
      emoji: '🥧'
    },
    howItWorks: {
      title: 'Why Pi Is Irrational and Infinite',
      points: [
        'The Ratio: Circumference ÷ Diameter = π (Pi).',
        'Irrational Number: Pi cannot be written as a simple fraction; its decimal digits go on forever without ever repeating a pattern!',
        'Everyday Value: In elementary school, people approximate Pi as 3.14 or 22/7, which is close enough to design racecars and bake pies.'
      ]
    },
    funFacts: [
      'Pi Day is celebrated around the world every March 14th (3/14) by eating delicious pies and reciting digits of Pi!',
      'Supercomputers have calculated Pi to over 100 trillion decimal digits, and not a single pattern has ever repeated.',
      'NASA’s Jet Propulsion Laboratory only uses 15 digits of Pi (3.141592653589793) to steer spacecraft between planets with pinpoint precision!'
    ],
    kidWords: [
      { word: 'Circumference', emoji: '⭕', meaning: 'The perimeter or boundary distance all the way around a circle.' },
      { word: 'Diameter', emoji: '↔️', meaning: 'A straight line passing from side to side through the center of a circle.' },
      { word: 'Irrational Number', emoji: '♾️', meaning: 'A real number that cannot be expressed as a ratio of two integers and has non-repeating infinite decimals.' }
    ],
    didYouKnowOrigin: 'The symbol "π" is the 16th letter of the Greek alphabet, chosen because it is the first letter of the Greek word "perimetros" (meaning perimeter)!',
    microQuiz: {
      question: 'What are the first three common digits of the circle number Pi?',
      options: ['3.14', '7.77', '1.00'],
      correctIndex: 0,
      explanation: 'Pi begins with 3.14159... and continues infinitely without repeating!'
    },
    seeAlso: [
      { id: 'geometric-shapes', title: 'Geometric Shapes', category: 'numbers' },
      { id: 'infinity-concept', title: 'Infinity', category: 'numbers' }
    ]
  },
  {
    id: 'fibonacci-nature',
    title: 'The Fibonacci Spiral & Golden Ratio',
    symbol: '🌀',
    pronunciation: '(fib-uh-NAH-chee and GOHL-duhn RAY-shee-oh)',
    category: 'numbers',
    tagline: 'Nature’s secret mathematical growth code: 1, 1, 2, 3, 5, 8, 13, 21, 34...',
    analogy: {
      title: 'The Spiral Recipe of Pinecones and Galaxy Swirls',
      story: 'Have you ever noticed how sunflower seeds curve into gorgeous spirals? Or how a nautilus seashell curls? They follow a secret mathematical code discovered by Italian mathematician Leonardo Fibonacci! Start with 1, 1. Add them to get 2. Then add the last two numbers: 1+2=3, 2+3=5, 3+5=8, 5+8=13... When you draw squares with these sizes, they form a perfect, breathtaking spiral!',
      emoji: '🌻'
    },
    howItWorks: {
      title: 'How the Fibonacci Sequence Grows',
      points: [
        'The Rule: Each number is the sum of the two preceding numbers (0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89...).',
        'The Golden Ratio (Phi ≈ 1.618): Divide any Fibonacci number by the one before it (e.g. 55 ÷ 34), and the ratio approaches 1.618.',
        'Efficient Packing: Plants use this angle (137.5 degrees) so every new petal or seed gets maximum sunshine without blocking its neighbors!'
      ]
    },
    funFacts: [
      'Almost all flower petals come in Fibonacci numbers: lilies have 3 petals, buttercups have 5, delphiniums have 8, marigolds have 13, and daisies often have 34 or 55!',
      'Pinecones have two sets of spirals spiraling in opposite directions — count them, and they are always consecutive Fibonacci numbers like 5 and 8 or 8 and 13!',
      'Hurricanes, whirlpools, and entire spiral galaxies spin in shapes nearly identical to the Fibonacci golden spiral.'
    ],
    kidWords: [
      { word: 'Sequence', emoji: '🔢', meaning: 'An ordered list of numbers that follow a specific mathematical rule.' },
      { word: 'Spiral', emoji: '🌀', meaning: 'A curve which emanates from a point, moving farther away as it revolves around the point.' },
      { word: 'Golden Ratio', emoji: '✨', meaning: 'A special mathematical proportion approximately equal to 1.6180339887...' }
    ],
    didYouKnowOrigin: 'Fibonacci introduced this number sequence to Europe in 1202 in his famous book "Liber Abaci" while solving a puzzle about how many baby rabbits would be born in a garden!',
    microQuiz: {
      question: 'What is the next number in the Fibonacci sequence: 1, 1, 2, 3, 5, 8, __?',
      options: ['13 (Because 5 + 8 = 13!)', '10', '20'],
      correctIndex: 0,
      explanation: 'Each Fibonacci number is the sum of the previous two numbers: 5 + 8 = 13!'
    },
    seeAlso: [
      { id: 'photosynthesis-plants', title: 'Plants & Nature', category: 'earth-elements' },
      { id: 'milky-way-galaxy', title: 'The Milky Way', category: 'solar-system' }
    ]
  },
  {
    id: 'patterns-sequences',
    title: 'Patterns, Symmetry & Sequences',
    symbol: '💠',
    pronunciation: '(PAT-ernz, SIM-uh-tree and SEE-kwen-sez)',
    category: 'numbers',
    tagline: 'The repeating visual rhythms and mirror reflections that make math beautiful.',
    analogy: {
      title: 'The Musical Rhythm and Mirror Twin of the Eyes',
      story: 'A pattern is a rule that repeats! Think of clapping hands to music: clap, stomp, clap, stomp! In math, patterns can be shapes (circle, square, circle, square), numbers (2, 4, 6, 8), or symmetry. Bilateral symmetry means if you draw a line down the middle of a butterfly’s wings, the left wing and right wing are exact mirror twins!',
      emoji: '🦋'
    },
    howItWorks: {
      title: 'Types of Symmetry & Patterns',
      points: [
        'Reflectional Symmetry: A mirror line splits the object into two identical matching halves (human faces, butterflies).',
        'Rotational Symmetry: The shape looks identical when rotated around a central pin (snowflakes have 6-fold rotational symmetry, starfish have 5-fold!).',
        'Tessellation: Tiling a flat surface with geometric shapes with zero overlaps and zero gaps (honeycomb hexagons, kitchen tiles).'
      ]
    },
    funFacts: [
      'Every single water snowflake falling from winter clouds has 6 symmetrical arms, yet no two snowflakes are ever identical!',
      'Honeybees build their hives using hexagonal tessellation because hexagons use the least amount of wax to store the most honey!',
      'Your own human face has bilateral symmetry — the left side closely matches the right side.'
    ],
    kidWords: [
      { word: 'Symmetry', emoji: '🪞', meaning: 'Balanced proportions where parts on opposite sides of a dividing line correspond.' },
      { word: 'Tessellation', emoji: '🧱', meaning: 'Covering a plane surface using one or more geometric shapes with no overlaps or gaps.' },
      { word: 'Bilateral', emoji: '🦋', meaning: 'Having two sides that are mirror reflections of each other.' }
    ],
    didYouKnowOrigin: 'Dutch artist M.C. Escher became world-famous by drawing mind-bending mathematical tessellations of interlocking birds, lizards, and fish that fit together like magic jigsaw puzzles!',
    microQuiz: {
      question: 'How many symmetrical arms or branches does an ice snowflake always have?',
      options: ['6 arms', '4 arms', '10 arms'],
      correctIndex: 0,
      explanation: 'Water molecules freeze into hexagonal crystal lattices, always giving snowflakes 6 symmetrical arms!'
    },
    seeAlso: [
      { id: 'geometric-shapes', title: 'Geometric Shapes', category: 'numbers' },
      { id: 'monarch-butterfly', title: 'Monarch Butterfly', category: 'animals-dinosaurs' }
    ]
  },
  {
    id: 'telling-time-clock',
    title: 'Telling Time & The Clock',
    symbol: '⏰',
    pronunciation: '(TEL-ing TYM and the KLOK)',
    category: 'numbers',
    tagline: '60 seconds in a minute, 60 minutes in an hour, and 24 hours in Earth’s daily spin.',
    analogy: {
      title: 'The Spinning Sun Shadow and Race of the Two Clock Hands',
      story: 'A clock face is a circular race track with 12 hourly stations! The short hand is the slow, steady Hour Hand — it tells you which big chapter of the day it is. The long hand is the fast Minute Hand — it zips all the way around the 60 tiny minute tick marks every single hour as Earth turns towards and away from the Sun!',
      emoji: '🕰️'
    },
    howItWorks: {
      title: 'How to Read an Analog Clock Face',
      points: [
        'Hour Hand (Short): Points to the current hour (1 to 12). If it’s between 3 and 4, it is still the 3 o’clock hour.',
        'Minute Hand (Long): Counts minutes by skip-counting by 5s for each big number (1 = 5 min, 2 = 10 min, 6 = 30 min half-past).',
        'AM vs PM: AM (Ante Meridiem) means before noon morning; PM (Post Meridiem) means after noon afternoon and night.'
      ]
    },
    funFacts: [
      'Why do clocks use base-60 (60 seconds, 60 minutes)? Because ancient Babylonians used a base-60 counting system 4,000 years ago because 60 can be divided evenly by 2, 3, 4, 5, 6, 10, 12, 15, 20, and 30!',
      'Atomic clocks in scientific laboratories are so accurate they won’t lose or gain a single second in 100 million years!',
      'Before clocks with gears, people told time using sundials, water-dripping bowls (clepsydras), and burning candle markings.'
    ],
    kidWords: [
      { word: 'Analog', emoji: '🕒', meaning: 'Displaying time continuously using rotating hands on a dial face.' },
      { word: 'Digital', emoji: '📟', meaning: 'Displaying time directly as digits (e.g. 03:45).' },
      { word: 'Meridiem', emoji: '☀️', meaning: 'Latin word for midday or noon.' }
    ],
    didYouKnowOrigin: 'Why does a clock’s hands spin "clockwise"? Because in the Northern Hemisphere where sundials were first invented, the shadow cast by the sun rotates from left-to-right across the top!',
    microQuiz: {
      question: 'When the big minute hand points straight down at the number 6, how many minutes past the hour is it?',
      options: ['30 minutes (Half-past the hour!)', '6 minutes', '60 minutes'],
      correctIndex: 0,
      explanation: 'The number 6 represents 6 × 5 = 30 minutes, exactly half of the 60-minute circle!'
    },
    seeAlso: [
      { id: 'four-seasons', title: 'The Four Seasons', category: 'earth-elements' },
      { id: 'planet-earth', title: 'Planet Earth', category: 'solar-system' }
    ]
  },
  {
    id: 'money-coins-currency',
    title: 'Money, Coins & Smart Saving',
    symbol: '🪙',
    pronunciation: '(MUN-ee, KOYNZ and KUR-en-see)',
    category: 'numbers',
    tagline: 'Pennies, nickels, dimes, quarters, and dollars: the math of counting, trading, and saving.',
    analogy: {
      title: 'The Magic Token for Trading Work and Goods',
      story: 'Imagine if you wanted a loaf of fresh bread, but you only owned a sheep! You’d have to find a baker who needed sheep wool! That’s why humans invented money: convenient metal coins and paper notes that everyone agrees represent value. Instead of carrying sheep, you can trade coins for bread, apples, books, and toys!',
      emoji: '💰'
    },
    howItWorks: {
      title: 'Counting Coin Values',
      points: [
        'Penny (🟤): Made of copper-plated zinc, worth 1 cent ($0.01).',
        'Nickel (⚪): Thick nickel-copper coin, worth 5 cents ($0.05).',
        'Dime (🪙): The smallest, thinnest coin, yet worth 10 cents ($0.10) — 10 dimes make $1.00!',
        'Quarter (🪙): Worth 25 cents ($0.25) — 4 quarters equal one dollar ($1.00).'
      ]
    },
    funFacts: [
      'The edges of dimes and quarters have tiny ridges (called reeding) to prevent people 200 years ago from shaving off shavings of precious silver!',
      'Paper money isn’t actually made of wood paper — US currency bills are made of a tough blend of 75% cotton and 25% linen cloth!',
      'Compound interest means when you save money in a bank, the bank pays you interest, and then you earn interest on your interest, helping your savings grow like a snowball!'
    ],
    kidWords: [
      { word: 'Currency', emoji: '💵', meaning: 'A system of money in common use within a nation or country.' },
      { word: 'Budget', emoji: '📊', meaning: 'A plan that helps balance how much money you earn, spend, and save.' },
      { word: 'Interest', emoji: '📈', meaning: 'Money paid regularly at a particular rate for the use of money lent or saved.' }
    ],
    didYouKnowOrigin: 'Before metal coins were stamped around 600 BC in ancient Lydia (modern Turkey), people used sea cowrie shells, salt bricks, and cocoa beans as money!',
    microQuiz: {
      question: 'How many 25-cent quarters does it take to make exactly one full dollar ($1.00)?',
      options: ['4 quarters (25 + 25 + 25 + 25 = 100 cents!)', '2 quarters', '10 quarters'],
      correctIndex: 0,
      explanation: '4 quarters make 100 cents, which equals exactly one dollar ($1.00)!'
    },
    seeAlso: [
      { id: 'addition-subtraction', title: 'Addition & Subtraction', category: 'numbers' },
      { id: 'fractions-magic', title: 'Fractions', category: 'numbers' }
    ]
  },
  {
    id: 'probability-chance',
    title: 'Probability & Chance',
    symbol: '🎲',
    pronunciation: '(prob-uh-BIL-ih-tee and CHANS)',
    category: 'numbers',
    tagline: 'Coin flips, rolling dice, weather forecasts, and predicting what is likely to happen.',
    analogy: {
      title: 'The Coin Flip and The Weather Forecaster’s Math',
      story: 'When you flip a shiny coin into the air, which side will land facing up? There are only 2 possible outcomes: Heads or Tails! That means you have exactly a 1 out of 2 chance (50% probability) of getting heads. Probability is the math branch that helps scientists and doctors predict how likely an event is to occur!',
      emoji: '🪙'
    },
    howItWorks: {
      title: 'The Probability Scale (0 to 1)',
      points: [
        'Impossible (0%): You can never roll an 8 on a standard 6-sided die — probability is 0.',
        'Equally Likely (50%): Flipping heads on a fair coin has a 1/2 probability.',
        'Certain (100%): The Sun will rise tomorrow morning — probability is 1 (100%).',
        'Formula: Number of Favorable Outcomes ÷ Total Number of Possible Outcomes.'
      ]
    },
    funFacts: [
      'On a standard 6-sided playing die, opposite sides always add up to 7! (1 opposite 6, 2 opposite 5, 3 opposite 4).',
      'When weather forecasters say there is an "80% chance of rain", they calculated probability based on atmospheric models and historical weather records.',
      'French mathematicians Blaise Pascal and Pierre de Fermat invented modern probability theory in 1654 while solving a game puzzle!'
    ],
    kidWords: [
      { word: 'Probability', emoji: '🎲', meaning: 'The mathematical likelihood or chance of a given event occurring.' },
      { word: 'Outcome', emoji: '🎯', meaning: 'A possible result of a random trial or experiment.' },
      { word: 'Certain', emoji: '✅', meaning: 'Guaranteed to happen without any doubt (100% probability).' }
    ],
    didYouKnowOrigin: 'The word "Probability" comes from the Latin word "probabilis", which meant "credible", "provable", or "worthy of approval"!',
    microQuiz: {
      question: 'What is the probability of rolling the number 4 on a fair 6-sided die?',
      options: ['1 out of 6 (1/6 chance)', '50%', '100%'],
      correctIndex: 0,
      explanation: 'Since there is only one side with a 4 out of 6 total sides, the probability is 1/6!'
    },
    seeAlso: [
      { id: 'fractions-magic', title: 'Fractions', category: 'numbers' },
      { id: 'addition-subtraction', title: 'Addition', category: 'numbers' }
    ]
  }
];
