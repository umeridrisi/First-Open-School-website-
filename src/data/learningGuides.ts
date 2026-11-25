export interface LetterGuideNote {
  soundGuide: string;
  formationTip: string;
  everydayWords: string[];
}

export interface DigitGuideNote {
  senseParagraph: string;
  patternTip: string;
  everydayExamples: string[];
}

export const ALPHABETS_OVERVIEW_SECTIONS = [
  {
    heading: 'How Phonics Builds Confident Early Readers',
    body: 'Learning the 26 letters of the English alphabet begins with connecting each visual symbol to the distinct sound it makes in spoken words. Rather than memorizing letter names alone, synthetic phonics helps children hear how the five vowels (A, E, I, O, U) join together with twenty-one consonants to blend simple words like cat, sun, and map. Practicing each phoneme aloud while observing lip and tongue placement builds strong phonemic awareness from day one.',
  },
  {
    heading: 'Connecting Uppercase, Lowercase, and Handwriting',
    body: 'Most books, signs, and stories use lowercase letters far more often than capital letters, so children benefit from seeing both forms side by side early on. Pairing auditory letter sounds with guided stroke tracing trains visual memory and fine motor coordination together. Encourage learners to trace from top to bottom and left to right while saying the letter sound aloud.',
  },
  {
    heading: 'Simple Ways to Practice Vocabulary Together',
    body: 'Pick one featured letter each day and turn everyday routines into a gentle sound hunt around the home or outdoors. Ask your child to spot objects that start with the target sound, listen for the sound at the end of short words, and use the Tracing Studio to reinforce muscle memory in short, joyful five-minute sessions.',
  },
];

export const DIGITS_OVERVIEW_SECTIONS = [
  {
    heading: 'Counting with One-to-One Correspondence and Subitizing',
    body: 'True number sense goes beyond reciting number names in order from memory. By tapping objects one at a time on screen, children practice one-to-one correspondence—matching exactly one spoken number to each physical item. As quantities between 1 and 5 become familiar, learners also develop subitizing, the ability to recognize small groups at a single glance without counting every piece.',
  },
  {
    heading: 'Understanding Place Value and Teen Numbers (11–20)',
    body: 'Numbers from 0 through 10 form the building blocks of our base-ten number system, while teen numbers from 11 to 19 introduce the core idea of tens and extra ones. Seeing 14 as one full group of ten plus four extra units prepares young mathematicians for effortless mental addition, subtraction, and place-value reasoning in primary school.',
  },
  {
    heading: 'Everyday Math Habits for Home and Classroom',
    body: 'Help children connect written numerals to real quantities during snack time, walks, and playtime—counting stairs as you climb, pairing shoes by twos, or noticing shapes and clock faces. Combining hands-on object counting with guided digit tracing builds both conceptual understanding and clean number writing.',
  },
];

export const LETTER_LEARNING_NOTES: Record<string, LetterGuideNote> = {
  A: {
    soundGuide:
      'Letter A is the very first vowel in the English alphabet and is used in thousands of everyday words. Its short sound /æ/ is made with an open jaw and relaxed tongue, as in apple and ant, while its long sound /eɪ/ says its own letter name in words like acorn and ape.',
    formationTip:
      'Uppercase A is built from two slanted legs meeting at a peak with a middle bridge, while lowercase a pairs a neat round belly with a short vertical line on the right.',
    everydayWords: ['Apple', 'Ant', 'Acorn', 'Astronaut', 'Alligator'],
  },
  B: {
    soundGuide:
      'Letter B is a voiced consonant made by gently pressing both lips together and releasing a quick puff of sound from the throat, as in bear, ball, and banana. Unlike silent letters or soft puffs like P, you can feel a tiny vibration on your throat when saying /b/.',
    formationTip:
      'Start both uppercase B and lowercase b with a tall straight line going from top to bottom, keeping the two curved bumps on B and the single round belly on b facing right.',
    everydayWords: ['Bear', 'Ball', 'Banana', 'Boat', 'Butterfly'],
  },
  C: {
    soundGuide:
      'Letter C is a versatile consonant with two familiar sounds. Before vowels like a, o, and u, it makes a crisp hard /k/ sound from the back of the mouth as in cat and cup; before e, i, or y, it softens into an /s/ sound as in city and circle.',
    formationTip:
      'Both uppercase C and lowercase c share the exact same smooth open crescent curve starting near the top right—only the size changes between the top line and midline.',
    everydayWords: ['Cat', 'Cake', 'Cloud', 'Circle', 'Carrot'],
  },
  D: {
    soundGuide:
      'Letter D produces a clear voiced /d/ sound when the tip of the tongue taps the ridge right behind the upper front teeth, as heard in duck, drum, and dog. It frequently appears both at the beginning and at the end of simple three-letter words like dad and red.',
    formationTip:
      'Watch out for mirror confusion between b and d: lowercase d always begins with a round circle curve first ("drum before the stick") before drawing the tall vertical line on the right.',
    everydayWords: ['Duck', 'Drum', 'Dog', 'Daisy', 'Dolphin'],
  },
  E: {
    soundGuide:
      'Letter E is the most common vowel in English writing and reading. Its short sound /ɛ/ opens the mouth slightly in words like elephant and egg, its long sound /iː/ smiles wide in eagle and me, and at the end of words like cake it quietly helps the earlier vowel say its name.',
    formationTip:
      'Uppercase E has a tall spine with three horizontal arms pointing right, while lowercase e begins inside the middle space with a short horizontal line before looping around.',
    everydayWords: ['Elephant', 'Egg', 'Eagle', 'Elbow', 'Engine'],
  },
  F: {
    soundGuide:
      'Letter F makes a soft, unvoiced /f/ sound created by resting the top front teeth lightly against the lower lip and blowing gentle air out, just like in fish, frog, and feather. Kids can feel the steady breeze by holding a hand near their lips.',
    formationTip:
      'Uppercase F uses straight vertical and horizontal lines like E without the bottom arm, whereas lowercase f curves gracefully at the top like a candy cane and crosses at the midline.',
    everydayWords: ['Fish', 'Frog', 'Feather', 'Flower', 'Fox'],
  },
  G: {
    soundGuide:
      'Letter G creates a deep voiced /ɡ/ sound at the back of the throat in words like goat, garden, and grapes. Like letter C, it can also take a soft /dʒ/ sound before e, i, or y in words such as giraffe and giant.',
    formationTip:
      'Uppercase G starts with a wide C curve and adds a neat horizontal shelf inward, while lowercase g sits its round circle on the baseline and drops a curved tail below.',
    everydayWords: ['Giraffe', 'Grapes', 'Garden', 'Goat', 'Guitar'],
  },
  H: {
    soundGuide:
      'Letter H makes a quiet, airy /h/ sound like a warm sigh or gentle breath fogging up a mirror, heard at the start of hippo, hat, and house. It also teams up with C, S, and T to form special digraph sounds like ch, sh, and th.',
    formationTip:
      'Uppercase H looks like a tall ladder with two parallel walls and one center rung; lowercase h keeps one tall wall on the left and bounces up into a cozy arch.',
    everydayWords: ['Hippo', 'Hat', 'House', 'Horse', 'Honey'],
  },
  I: {
    soundGuide:
      'Letter I is an essential vowel with a quick short /ɪ/ sound heard in iguana, igloo, and sit, plus a bright long /aɪ/ sound in ice cream and kite. As a single capital word "I", it is always capitalized when referring to oneself.',
    formationTip:
      'Both uppercase I and lowercase i rely on clean vertical strokes down to the baseline, with lowercase i finishing with a neat floating dot right above the midline.',
    everydayWords: ['Iguana', 'Igloo', 'Ice', 'Island', 'Insect'],
  },
  J: {
    soundGuide:
      'Letter J brings a lively voiced /dʒ/ sound heard at the beginning of jellyfish, jump, and jam. The tongue starts pressed firmly against the roof of the mouth and releases smoothly with vocal vibration.',
    formationTip:
      'Uppercase J curves upward like an umbrella handle on the baseline, while lowercase j dips below the baseline with its curved hook and wears a dot on top.',
    everydayWords: ['Jellyfish', 'Jam', 'Jump', 'Jacket', 'Juice'],
  },
  K: {
    soundGuide:
      'Letter K produces a sharp, unvoiced /k/ burst of air from the back of the tongue, identical to hard C, in words like kangaroo, kite, and key. When paired before N at the start of words like knee and knight, K stays silent.',
    formationTip:
      'Start both uppercase K and lowercase k with a tall vertical spine on the left, then angle two short diagonal arms inward and outward—keeping lowercase k’s arms tucked below the midline.',
    everydayWords: ['Kangaroo', 'Kite', 'Key', 'Koala', 'Kitchen'],
  },
  L: {
    soundGuide:
      'Letter L makes a smooth, singing /l/ sound as the tip of the tongue presses gently against the roof of the mouth behind the upper teeth while air flows around the sides, as in lion, leaf, and lamp.',
    formationTip:
      'Uppercase L takes one continuous corner stroke down and right along the baseline, while lowercase l is a single clean vertical line from sky line to baseline.',
    everydayWords: ['Lion', 'Leaf', 'Lamp', 'Lemon', 'Ladder'],
  },
  M: {
    soundGuide:
      'Letter M produces a warm, humming nasal /m/ sound when both lips close lightly together, as in monkey, moon, and milk. Placing a finger on the side of the nose lets young learners feel the gentle hum.',
    formationTip:
      'Uppercase M features sharp mountain peaks touching the sky line, whereas lowercase m uses two smooth rounded hills nestled neatly between the midline and baseline.',
    everydayWords: ['Monkey', 'Moon', 'Milk', 'Mountain', 'Mango'],
  },
  N: {
    soundGuide:
      'Letter N creates a clear nasal /n/ sound by placing the tongue tip behind the top teeth and letting the voice hum softly, heard in nest, newt, and night. It appears in many high-frequency words like in, on, and sun.',
    formationTip:
      'Uppercase N connects two straight vertical lines with a single diagonal slide, while lowercase n drops straight down from the midline and arches smoothly over once.',
    everydayWords: ['Newt', 'Nest', 'Night', 'Noodle', 'Notebook'],
  },
  O: {
    soundGuide:
      'Letter O is a round vowel whose shape mirrors the round O-shape of your lips when saying it. Its short /ɒ/ sound opens wide in octopus and pot, while its long /oʊ/ sound rounds forward in ocean and boat.',
    formationTip:
      'Start at the top (12 o’clock) and curve smoothly counter-clockwise all the way back to the starting point so both uppercase O and lowercase o close cleanly without corners.',
    everydayWords: ['Owl', 'Octopus', 'Ocean', 'Orange', 'Otter'],
  },
  P: {
    soundGuide:
      'Letter P makes a crisp, unvoiced popping /p/ sound by pressing the lips together and releasing a tiny burst of air without using your vocal cords, as in panda, pear, and popcorn.',
    formationTip:
      'Uppercase P sits its top loop high between the sky line and midline, while lowercase p drops its vertical stick below the baseline with its round loop resting above the ground.',
    everydayWords: ['Panda', 'Pear', 'Popcorn', 'Penguin', 'Pencil'],
  },
  Q: {
    soundGuide:
      'Letter Q almost always travels alongside its partner U in English words like quail, queen, and quiet, teaming up to make the blended /kw/ sound ("kwuh"). Spotting "qu" together helps kids decode tricky spelling patterns quickly.',
    formationTip:
      'Draw uppercase Q just like O before adding a short diagonal kickstand near the bottom right; for lowercase q, form a circle first and pull the vertical tail straight down below the baseline.',
    everydayWords: ['Quail', 'Queen', 'Quiet', 'Quilt', 'Quarter'],
  },
  R: {
    soundGuide:
      'Letter R produces a smooth, slightly curled /r/ sound heard in rabbit, rainbow, and rocket, where the sides of the tongue lift gently without touching the roof of the mouth. It also teams with vowels in words like car and star.',
    formationTip:
      'Uppercase R builds on P by adding one slanted kicking leg down to the baseline; lowercase r drops straight down from the midline, bounces back up, and curves slightly to the right.',
    everydayWords: ['Rabbit', 'Rainbow', 'Rocket', 'River', 'Rose'],
  },
  S: {
    soundGuide:
      'Letter S makes a gentle hissing /s/ sound like a friendly snake slithering through grass, heard in sun, sock, and sand. At the end of nouns, adding -s is also one of the very first grammar rules kids learn for plurals.',
    formationTip:
      'Both uppercase S and lowercase s follow one continuous winding S-curve starting just below the top line, curving left first, crossing the middle diagonally, and curving right at the bottom.',
    everydayWords: ['Snake', 'Sun', 'Star', 'Sand', 'Strawberry'],
  },
  T: {
    soundGuide:
      'Letter T creates a crisp, quick tapping /t/ sound when the tongue flicks behind the upper teeth with a light puff of air, as in tiger, tree, and train. It is the most common consonant in English texts.',
    formationTip:
      'Always pull the tall vertical line straight down before adding the horizontal crossbar—high across the sky line for uppercase T, and right across the dotted midline for lowercase t.',
    everydayWords: ['Tiger', 'Tree', 'Train', 'Turtle', 'Tomato'],
  },
  U: {
    soundGuide:
      'Letter U is the fifth vowel and features a relaxed short /ʌ/ sound deep in the center of the mouth in umbrella and up, as well as a long /juː/ or /uː/ sound in unicorn and flute.',
    formationTip:
      'Uppercase U scoops smoothly around the bottom baseline in one flowing cup curve, while lowercase u adds a short straight stick down the right side to anchor it cleanly.',
    everydayWords: ['Unicorn', 'Umbrella', 'Up', 'Ukulele', 'Under'],
  },
  V: {
    soundGuide:
      'Letter V makes a buzzing voiced /v/ sound by resting the top teeth gently on the lower lip just like F, while turning on your voice box so your lips tingle—as in vulture, van, and violin.',
    formationTip:
      'Keep the bottom point sharp like a valley rather than rounded like U so children clearly distinguish V from U in both uppercase and lowercase writing.',
    everydayWords: ['Vulture', 'Van', 'Violin', 'Volcano', 'Vegetable'],
  },
  W: {
    soundGuide:
      'Letter W creates a smooth gliding /w/ sound as the lips pucker into a small circle and quickly open into the next vowel, heard in whale, water, and wind.',
    formationTip:
      'Think of W as two V shapes holding hands—four crisp slanted strokes going down, up, down, and up, staying proportional between top/mid lines and the baseline.',
    everydayWords: ['Whale', 'Water', 'Wind', 'Wagon', 'Watermelon'],
  },
  X: {
    soundGuide:
      'Letter X is unique because it blends two consonant sounds (/k/ + /s/) into a single crisp /ks/ sound heard most clearly at the ends of words like fox, box, and six, as well as in x-ray.',
    formationTip:
      'Both uppercase X and lowercase x are made of two straight diagonal lines crossing neatly right at their center—one slanting down right, the second crossing down left.',
    everydayWords: ['X-ray Fish', 'Fox', 'Box', 'Six', 'Xylophone'],
  },
  Y: {
    soundGuide:
      'Letter Y acts as a friendly consonant at the start of words like yak, yellow, and yo-yo with a /j/ glide, and frequently behaves as a helpful vowel at the end of words like happy and sky.',
    formationTip:
      'Uppercase Y meets at the midline before dropping straight down to the baseline, while lowercase y slants its long tail diagonally below the baseline into the descender space.',
    everydayWords: ['Yak', 'Yellow', 'Yo-yo', 'Yarn', 'Yogurt'],
  },
  Z: {
    soundGuide:
      'Letter Z closes out the alphabet with a lively buzzing /z/ sound, the voiced partner of S, sounding like a busy bee in zebra, zoo, and zipper.',
    formationTip:
      'Trace Z in one brisk zig-zag stroke: straight across the top, slant diagonally down left to the baseline, and straight across the bottom to the right.',
    everydayWords: ['Zebra', 'Zoo', 'Zipper', 'Zero', 'Zucchini'],
  },
};

export const DIGIT_LEARNING_NOTES: Record<number, DigitGuideNote> = {
  0: {
    senseParagraph:
      'Zero is one of the smartest inventions in mathematics because it represents an empty set—having nothing at all—while also serving as a crucial placeholder in bigger numbers like 10 and 20. Without zero, writing tens and hundreds clearly would be nearly impossible.',
    patternTip: 'Adding or subtracting 0 leaves any number completely unchanged (5 + 0 = 5).',
    everydayExamples: ['An empty cookie jar', '0 clouds in a clear blue sky', 'Starting line before step 1'],
  },
  1: {
    senseParagraph:
      'One is the starting point of counting and marks a single whole item, person, or step. Every counting number after it is built by simply adding one more unit at a time.',
    patternTip: 'One more than 0 is 1, and every odd number jumps forward by 2 from 1 (1, 3, 5...).',
    everydayExamples: ['1 warm sun in the sky', '1 nose on your face', '1 moon orbiting Earth'],
  },
  2: {
    senseParagraph:
      'Two introduces the idea of pairs and matching partners, making it the first even number in math. Objects that come in twos are easy to spot and count quickly by skip-counting (2, 4, 6, 8).',
    patternTip: 'Two splits evenly into 1 + 1 with nothing left over, making it our smallest even number.',
    everydayExamples: ['2 eyes and 2 ears', 'A pair of shoes or mittens', '2 wheels on a bicycle'],
  },
  3: {
    senseParagraph:
      'Three is a classic odd number that children often recognize instantly at a glance without counting one by one. In geometry, three straight sides join together to form the strongest basic polygon—a triangle.',
    patternTip: 'You can build 3 as 2 + 1 or 1 + 1 + 1.',
    everydayExamples: ['3 wheels on a tricycle', '3 colors on a traffic light', '3 sides of a triangle'],
  },
  4: {
    senseParagraph:
      'Four is an even number formed by two matching pairs of 2 (2 + 2 = 4). In shapes and nature, four corners make squares and rectangles, while four legs give sturdy balance to tables and animals.',
    patternTip: 'Four splits neatly into two equal halves of 2, or 3 + 1.',
    everydayExamples: ['4 seasons of the year', '4 legs on a dog or chair', '4 wheels on a family car'],
  },
  5: {
    senseParagraph:
      'Five is a landmark anchor number because humans have five fingers on one hand and five toes on one foot. Grouping counters in fives makes counting larger collections much faster than counting by ones.',
    patternTip: 'One full hand shows 5; two fives join together to make 10.',
    everydayExamples: ['5 fingers on one hand', '5 points on a classic star', '5 weekdays in a school week'],
  },
  6: {
    senseParagraph:
      'Six is an even number that can be pictured as one full hand of 5 plus 1 more finger, or as two equal groups of 3. Standard dice display 6 dots in two neat columns of three so players recognize it instantaneously.',
    patternTip: 'Six breaks apart cleanly into 5 + 1, 3 + 3, or three pairs of 2.',
    everydayExamples: ['6 legs on every insect', '6 sides on a honeycomb cell', 'Half a dozen eggs'],
  },
  7: {
    senseParagraph:
      'Seven is an odd number rich with patterns in calendars, nature, and music. Learners often visualize 7 on a ten-frame as a full top row of 5 counters plus 2 extra counters on the bottom row.',
    patternTip: 'Seven equals 5 + 2, and needs 3 more to reach 10 (7 + 3 = 10).',
    everydayExamples: ['7 days in a full week', '7 colors in a rainbow', '7 notes in a musical scale'],
  },
  8: {
    senseParagraph:
      'Eight is an even number formed by doubling 4 (4 + 4 = 8) or taking four pairs of 2. Notice how 8 also sits just two steps below the landmark number 10.',
    patternTip: 'Double 2 is 4, and double 4 is 8! You need just 2 more to make 10.',
    everydayExamples: ['8 tentacles on an octopus', '8 legs on a garden spider', '8 sides on a stop sign'],
  },
  9: {
    senseParagraph:
      'Nine is the largest single-digit number in our base-ten system and sits right before 10. It is an odd number formed neatly by three equal rows of 3 (3 + 3 + 3 = 9), making a tidy 3x3 square.',
    patternTip: 'Nine is always 1 less than 10 (10 - 1 = 9), a handy trick for mental math!',
    everydayExamples: ['9 squares on a tic-tac-toe board', '9 players on a baseball field', '1 less than 10 fingers'],
  },
  10: {
    senseParagraph:
      'Ten is the heart of our entire number system—the very first two-digit number! Using the digits 1 and 0 together means we have one complete bundle of ten and zero extra ones left over.',
    patternTip: 'Ten pairs up in famous "Friends of 10" bonds: 9+1, 8+2, 7+3, 6+4, and 5+5.',
    everydayExamples: ['10 fingers across both hands', '10 bowling pins in a triangle', '10 years in a decade'],
  },
  11: {
    senseParagraph:
      'Eleven begins the teen numbers and shows one full bundle of 10 plus 1 extra unit (10 + 1 = 11). Seeing the left digit as one ten and the right digit as one extra piece unlocks place value.',
    patternTip: 'Eleven is an odd number made of 10 + 1.',
    everydayExamples: ['11 players on a soccer team', '10 fingers plus 1 more block', '11 o’clock on a clock face'],
  },
  12: {
    senseParagraph:
      'Twelve is an even number equal to one ten plus two ones (10 + 2 = 12), and is famous worldwide as a "dozen." Twelve divides evenly in lots of ways—by 2, 3, 4, and 6—which is why clocks and calendars use it.',
    patternTip: 'Twelve splits evenly into 6 + 6, three 4s, or four 3s!',
    everydayExamples: ['12 months in a year', '12 hours on a clock dial', '12 eggs in a full dozen carton'],
  },
  13: {
    senseParagraph:
      'Thirteen is an odd number made of one full group of ten and three extra ones (10 + 3 = 13). Notice how the spoken word "thir-teen" gives a clue for three and ten.',
    patternTip: 'Think 10 + 3! Start from 10 and count three hops forward: 11, 12, 13.',
    everydayExamples: ['10 toes plus 3 extra shells', 'A baker’s dozen of 13 rolls', '13 stripes on some historic flags'],
  },
  14: {
    senseParagraph:
      'Fourteen is an even number built from one ten and four ones (10 + 4 = 14), or by doubling 7 (7 + 7 = 14). Seeing two equal weeks of 7 days makes 14 easy to picture.',
    patternTip: 'Double 7 equals 14, and 10 + 4 equals 14.',
    everydayExamples: ['14 days in two full weeks', '7 + 7 dots on double-seven tiles', 'Two hands plus 4 marbles'],
  },
  15: {
    senseParagraph:
      'Fifteen is an odd number composed of one ten and five ones (10 + 5 = 15), or three equal groups of 5 (5, 10, 15). Counting nickels or minutes on a clock helps kids master multiples of five quickly.',
    patternTip: 'Three full hands of 5 fingers equal 15! Also 10 + 5 = 15.',
    everydayExamples: ['15 minutes in a quarter hour', '3 hands of 5 fingers', '5 + 5 + 5 building blocks'],
  },
  16: {
    senseParagraph:
      'Sixteen is an even square number formed by one ten and six ones (10 + 6 = 16), and also by doubling 8 (8 + 8 = 16) or arranging four rows of 4.',
    patternTip: 'Sixteen equals 10 + 6, double 8, or a neat 4x4 grid.',
    everydayExamples: ['16 pieces per side in chess', '4 rows of 4 crayons', 'Two 8-packs of markers'],
  },
  17: {
    senseParagraph:
      'Seventeen is an odd number made from one group of ten and seven ones (10 + 7 = 17). Because 17 sits just three steps below 20, learners can count up from 10 or count back 3 from 20.',
    patternTip: '10 + 7 = 17, and adding just 3 more completes 20!',
    everydayExamples: ['10 blocks plus 7 blocks', 'Step 17 on a tall staircase', '17 syllables in a classic haiku'],
  },
  18: {
    senseParagraph:
      'Eighteen is an even number representing one ten and eight ones (10 + 8 = 18), or double 9 (9 + 9 = 18). Every two-digit number ending in 8 is even because 8 pairs up smoothly.',
    patternTip: 'Double 9 equals 18, and 10 + 8 = 18.',
    everydayExamples: ['18 holes on a full mini-golf course', '18 wheels on a big transport truck', 'Two groups of 9 stickers'],
  },
  19: {
    senseParagraph:
      'Nineteen is an odd number made of one ten and nine ones (10 + 9 = 19), sitting right next door to 20. Only one more unit is needed to bundle the ones into a second full ten.',
    patternTip: 'Nineteen is 10 + 9, and always just 1 less than 20 (20 - 1 = 19).',
    everydayExamples: ['19 minutes past the hour', 'Almost two full ten-frames (1 missing)', 'Counting to 19 before 20'],
  },
  20: {
    senseParagraph:
      'Twenty marks a major counting milestone: two complete bundles of ten and zero extra ones (10 + 10 = 20)! Across both hands and both feet, every person carries twenty fingers and toes altogether.',
    patternTip: 'Two tens make 20 (10 + 10), or four fives (5, 10, 15, 20)!',
    everydayExamples: ['10 fingers plus 10 toes', '20 pieces in a beginner puzzle', 'Counting by 2s ten times'],
  },
};
