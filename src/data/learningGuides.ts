export interface LetterGuideNote {
  headline: string;
  storyParagraph: string;
  writingParagraph: string;
  teacherActivity: string;
  everydayWords: string[];
}

export interface DigitGuideNote {
  headline: string;
  storyParagraph: string;
  countingParagraph: string;
  teacherActivity: string;
  everydayExamples: string[];
}

export const ALPHABETS_INDEX_SECTIONS = [
  {
    heading: 'Why Letter Sounds Come Before Memorizing Spelling',
    body: 'When children start learning their ABCs, knowing the sound each letter makes is even more helpful than knowing its letter name. Once a child hears that C says "kuh", A says "ah", and T says "tuh", they can suddenly put those pieces together and read the word "cat" all by themselves.',
  },
  {
    heading: 'Big Letters and Little Letters Work Together',
    body: 'Most words in storybooks are written in lowercase letters, with capital letters saved for the start of names and sentences. Showing both shapes side by side helps children spot the same letter whether it is wearing its tall capital coat or its smaller everyday look.',
  },
  {
    heading: 'Short, Happy Practice Beats Long Drills',
    body: 'Five playful minutes a day is plenty for young learners. Pick just one letter, say its sound out loud while looking in a mirror, trace it a few times with a finger, and look for things around the kitchen or park that start with that same sound.',
  },
];

export const DIGITS_INDEX_SECTIONS = [
  {
    heading: 'Counting Things You Can Touch and See',
    body: 'Young children understand numbers best when they can point to real objects one by one—like crackers on a plate, toy cars in a line, or steps going up to the front door. Touching each item while saying one number word at a time builds real number sense.',
  },
  {
    heading: 'Spotting Small Groups at a Glance',
    body: 'Once kids get comfortable with 1 through 5, something neat happens: they stop needing to count every single dot on a die or fingers on a hand. They just look and instantly know "that is 3!" or "that is 5!" This quick visual skill makes adding and subtracting much easier later on.',
  },
  {
    heading: 'How Teen Numbers Work (11 to 19)',
    body: 'Teen numbers can feel tricky because their names sound a little backwards at first, like eleven or thirteen. A great way to make them click is to group ten blocks in one pile and place the extra ones right next to it, so kids see that 14 simply means one full ten and four more.',
  },
];

export const LETTER_LEARNING_NOTES: Record<string, LetterGuideNote> = {
  A: {
    headline: 'Meet Letter A: Open Wide for a Crunchy Apple!',
    storyParagraph:
      'Every journey through the alphabet begins right here with A. When you say its short sound like in "apple" or "ant," open your mouth nice and wide as if you are about to take a big bite of a crisp red apple. Sometimes A also says its own letter name, like in "acorn" or "apron," which gives it two handy sounds to listen for.',
    writingParagraph:
      'Big A looks a lot like a cozy camping tent—two slanted sides leaning together at the top with a little bar across the middle to hold them steady. Little a is round like a cherry with a short stick tucked down its right side.',
    teacherActivity:
      'Go on an "A" snack hunt together: see how many A words you can name in the kitchen, like apple, avocado, or almond!',
    everydayWords: ['Apple', 'Ant', 'Acorn', 'Apron', 'Astronaut'],
  },
  B: {
    headline: 'Meet Letter B: Bouncing Balls and the Cozy "Bed" Trick',
    storyParagraph:
      'To say the B sound, press both lips gently together and let them pop open with a warm, bouncy "buh"—just like a basketball hitting the floor. If you put two fingers lightly on your throat while saying "ball" or "bear," you can actually feel a little buzz inside!',
    writingParagraph:
      'Big B has two round bellies stacked one on top of the other, while little b has one round belly at the bottom. Many kids mix up little b and little d at first, and that is totally normal! Have your child make two thumbs-up fists and push their knuckles together: the left hand forms a "b", the right hand forms a "d", and together they spell the shape of a little "bed."',
    teacherActivity:
      'Bounce a soft ball back and forth while taking turns calling out B words like boat, banana, butterfly, and bubble.',
    everydayWords: ['Bear', 'Ball', 'Banana', 'Boat', 'Butterfly'],
  },
  C: {
    headline: 'Meet Letter C: One Curved Shape, Two Different Sounds',
    storyParagraph:
      'Most of the time, C makes a crisp clicking sound at the back of your mouth, just like in "cat," "cup," and "cookie." Now and then, when C stands right before E, I, or Y, it switches into a soft hissing sound like an S—that is why "city" and "circle" start so softly!',
    writingParagraph:
      'Here is good news for beginners: big C and little c look almost identical! Both curl around like a shiny crescent moon or a half-eaten cookie, starting near the top right and scooping cleanly around to the bottom.',
    teacherActivity:
      'Curve your thumb and fingers into a C shape and pretend to crunch on an imaginary carrot or cookie.',
    everydayWords: ['Cat', 'Cookie', 'Cloud', 'Circle', 'Carrot'],
  },
  D: {
    headline: 'Meet Letter D: Tap Your Tongue Like a Little Drum',
    storyParagraph:
      'Listen closely to the start of "dog," "duck," and "drum." To make the D sound, the very tip of your tongue taps the bumpy spot right behind your top front teeth. It sounds crisp and lively, and you can hear it both at the beginning and the end of words like "dad" and "mud."',
    writingParagraph:
      'Big D stands tall with a straight back and one giant curved belly facing right. For little d, teach the handy phrase "doughnut first, then the door": draw the round circle first, then pull a tall straight line down on the right side so it never flips backward into a b.',
    teacherActivity:
      'Tap a wooden spoon softly on a pot or table while chanting "Duh-duh-duh, drum, duck, dinosaur!" to feel the rhythm.',
    everydayWords: ['Duck', 'Drum', 'Dog', 'Daisy', 'Dolphin'],
  },
  E: {
    headline: 'Meet Letter E: The Hardest-Working Vowel in Books',
    storyParagraph:
      'If you open almost any picture book, you will spot letter E more than any other letter! Its short sound ("eh") hides inside "egg" and "elephant," while its long sound smiles wide like "eagle." Best of all, a quiet E at the end of a word like "cake" gives its magic away so the first vowel says its own name.',
    writingParagraph:
      'Capital E looks like a neat comb with three teeth pointing right. Lowercase e starts right in the middle of the space—walk across a short bridge first, then swoop up and around like you are hugging a little pebble.',
    teacherActivity:
      'Point to a page in any favorite bedtime book and race to see who can spot five little e’s first!',
    everydayWords: ['Elephant', 'Egg', 'Eagle', 'Elbow', 'Envelope'],
  },
  F: {
    headline: 'Meet Letter F: Blow a Gentle Breeze Like a Fan',
    storyParagraph:
      'Rest your top front teeth lightly against your bottom lip and blow out a soft stream of air—"fffff." No voice box needed at all! Hold your palm right in front of your mouth while saying "fish," "frog," and "feather" so you can feel the cool breeze on your hand.',
    writingParagraph:
      'Capital F stands straight with two top arms, almost like an E that forgot its bottom shoe. Lowercase f curves at the very top like a cozy candy cane and gets one neat little belt right across the middle line.',
    teacherActivity:
      'Cut out a paper fish or pretend your hands are swimming through water while whispering "Fff-fish!"',
    everydayWords: ['Fish', 'Frog', 'Feather', 'Flower', 'Fox'],
  },
  G: {
    headline: 'Meet Letter G: A Friendly Frog Sound in Your Throat',
    storyParagraph:
      'Say "goat," "grapes," and "green" and notice how the sound bubbles up from the back of your throat like a frog croaking "g-g-g." Just like C, letter G can also sound gentle like a J when E or I follows close behind—for example, in "giraffe" and "giant."',
    writingParagraph:
      'Big G starts off curving just like a C, then tucks a little shelf inward at the middle so it looks ready to hold something. Little g sits its round circle neatly on the ground line and lets its curved monkey tail hang down below.',
    teacherActivity:
      'Hop around the room like a frog or stretch your neck tall like a giraffe as you guess whether each G word starts hard or soft.',
    everydayWords: ['Giraffe', 'Grapes', 'Garden', 'Goat', 'Guitar'],
  },
  H: {
    headline: 'Meet Letter H: Warm Up Cold Hands With a Quiet Sigh',
    storyParagraph:
      'Letter H is made out of pure warm breath! Hold both hands up near your mouth as if it is chilly outside and breathe out gently—"huh, huh, huh"—just like when you fog up a car window on a rainy day. You hear that soft breath at the start of "hat," "house," and "happy."',
    writingParagraph:
      'Capital H looks like a tall doorway or a football goalpost made of two standing lines joined by a middle bridge. Lowercase h looks like a cozy wooden chair with a tall back on the left and one rounded seat.',
    teacherActivity:
      'Put your hands in front of your mouth and feel the warm air puff out every time you say "happy hippo in a hat!"',
    everydayWords: ['Hippo', 'Hat', 'House', 'Horse', 'Honey'],
  },
  I: {
    headline: 'Meet Letter I: Short Little "Ih" and Proud Word "I"',
    storyParagraph:
      'When you wrinkle your nose and say "iguana," "igloo," or "itch," you are hearing short I! Other times, I stretches tall and says its own name in cheerful words like "ice cream" and "island." Even cooler: whenever you talk about yourself ("I like drawing"), capital I stands all alone as its very own word.',
    writingParagraph:
      'Both big I and little i keep things simple with straight lines going down. Just remember to save the tiny dot on lowercase i for the very end—like putting a cherry on top of a sundae!',
    teacherActivity:
      'Think of two fun things you can do right now and start each sentence with the proud word "I": "I can jump!" and "I can draw!"',
    everydayWords: ['Iguana', 'Igloo', 'Ice', 'Island', 'Insect'],
  },
  J: {
    headline: 'Meet Letter J: Jump for Joy With Jelly and Jam!',
    storyParagraph:
      'Letter J brings a bouncy, cheerful sound right from the middle of your tongue. Feel your mouth push forward slightly when you say "jump," "jellyfish," and "jacket." Notice how your voice hums along with every word!',
    writingParagraph:
      'Big J looks like an upside-down umbrella handle hooking gently to the left on the bottom line. Little j keeps that same curved hook, lets its tail dip down under the line like it is fishing in a pond, and wears a little dot above.',
    teacherActivity:
      'Do three giant joyful jumps on the rug while shouting out three J words mid-air!',
    everydayWords: ['Jellyfish', 'Jam', 'Jump', 'Jacket', 'Juice'],
  },
  K: {
    headline: 'Meet Letter K: Crisp Kick Sound and the Silent K Secret',
    storyParagraph:
      'Letter K makes the exact same sharp kicking sound as hard C—feel the back of your tongue pop open on "kite," "kangaroo," and "key." When children grow a little older, they love discovering K’s sneaky secret: whenever K stands right in front of N, as in "knee" or "knock," K stays completely quiet!',
    writingParagraph:
      'Start both big K and little k with a tall straight back on the left. On big K, the two slanted arms stretch all the way from the top line to the bottom; on little k, those two little kicks stay neatly tucked in the lower half.',
    teacherActivity:
      'Practice a playful karate chop in the air ("Kuh!") for words like kite, and tap your knee gently to remember silent K in "knee" and "knock."',
    everydayWords: ['Kangaroo', 'Kite', 'Key', 'Koala', 'Knee'],
  },
  L: {
    headline: 'Meet Letter L: Singing La-La-La With Your Tongue Up High',
    storyParagraph:
      'Lift the very tip of your tongue up to touch the ceiling of your mouth right behind your front teeth and sing "la-la-la!" Notice how smoothly the sound flows around the sides of your tongue. That friendly singing sound opens words like "lion," "lemon," and "lamp."',
    writingParagraph:
      'Big L is one straight corner—down to the floor and turn right—just like the corner of a picture frame. Little l is the easiest letter in the whole alphabet to draw: one tall, straight line straight from sky to ground.',
    teacherActivity:
      'Look in a mirror while saying "Lll-lemon" so your child can actually see their tongue tip lifting up behind their top teeth!',
    everydayWords: ['Lion', 'Leaf', 'Lamp', 'Lemon', 'Ladder'],
  },
  M: {
    headline: 'Meet Letter M: Mmm-Mmm Good Like Warm Mango Milk!',
    storyParagraph:
      'Close your lips softly together and hum as if you just smelled warm cookies baking in the oven: "Mmmmmm!" That cozy humming sound starts "monkey," "moon," and "mango." If you touch the side of your nose lightly while humming M, you can feel it tickle!',
    writingParagraph:
      'Capital M climbs two pointy mountain peaks all the way up to the top line. Lowercase m prefers gentle rolling hills—just bounce up and over twice between the middle dotted line and the floor.',
    teacherActivity:
      'Rub your tummy and say "Mmmm!" whenever you spot an M food at dinner, like melon, milk, muffin, or mango.',
    everydayWords: ['Monkey', 'Moon', 'Milk', 'Mountain', 'Mango'],
  },
  N: {
    headline: 'Meet Letter N: Two Cozy Neighbours—M and N',
    storyParagraph:
      'Kids sometimes confuse M and N because both hum through your nose! Here is the easy way to tell them apart: for M your lips stay closed ("Mmm"), while for N your mouth opens slightly and your tongue taps up behind your top teeth ("Nnn"), like in "nest," "nose," and "night."',
    writingParagraph:
      'Capital N connects two tall fence posts with one diagonal slide from top left to bottom right. Lowercase n is simply half of a lowercase m—just one cozy little arch like a bridge over a stream.',
    teacherActivity:
      'Pinch your nose gently while trying to say "Mmm" or "Nnn"—kids always giggle when they discover the sound stops right away!',
    everydayWords: ['Newt', 'Nest', 'Night', 'Noodle', 'Nose'],
  },
  O: {
    headline: 'Meet Letter O: Your Lips Make the Exact Shape!',
    storyParagraph:
      'Letter O is a real show-and-tell letter: look in a mirror when you say "octopus" or "orange" or "open," and your mouth literally turns into a circle just like the letter! Short O opens wide ("ah/aw" in otter and pot), while long O rounds forward ("oh" in ocean and boat).',
    writingParagraph:
      'Both big O and little o are smooth circles—just one is tall and one is small. Always start right at the top like 12 o’clock on a clock face and curve neatly back around to close the loop.',
    teacherActivity:
      'Trace giant O circles in the air with both arms and blow pretend bubbles while saying "Oh, oh, octopus!"',
    everydayWords: ['Owl', 'Octopus', 'Ocean', 'Orange', 'Otter'],
  },
  P: {
    headline: 'Meet Letter P: Popping Quiet Bubbles of Air',
    storyParagraph:
      'Press your lips together tightly, build up a tiny bubble of air, and let it pop out without any voice hum: "p-p-p!" Hold a small strip of tissue paper in front of your mouth and say "popcorn," "panda," or "penguin"—watch the paper jump from that crisp little puff!',
    writingParagraph:
      'Big P carries its round head high up on top of the middle line. Little p looks just like it, except its straight stick slides down below the floor line while its round face stays tucked nicely above ground.',
    teacherActivity:
      'Hold your palm close to your mouth and pop imaginary soap bubbles every time you say a P word: pop, pear, pizza, puppy!',
    everydayWords: ['Panda', 'Pear', 'Popcorn', 'Penguin', 'Pencil'],
  },
  Q: {
    headline: 'Meet Letter Q: Best Friends Forever With Letter U',
    storyParagraph:
      'Almost every time you meet Q in an English storybook, you will find U walking right beside it like two best friends holding hands! Together, "qu" makes the fun blended sound "kwuh," heard in "quail," "queen," "quilt," and "quiet."',
    writingParagraph:
      'Big Q starts out just like a big round O, then gets a playful little kickstand near the bottom right so it does not roll away. Little q looks a bit like a backward p—draw the round circle first, then pull its stick straight down below the line with a tiny upward flick.',
    teacherActivity:
      'Whisper "Qu-qu-quiet!" with one finger on your lips, then quack loudly like a silly duck ("Quack, quack!") to hear the QU sound.',
    everydayWords: ['Quail', 'Queen', 'Quiet', 'Quilt', 'Quack'],
  },
  R: {
    headline: 'Meet Letter R: Friendly Growls and Racing Rockets',
    storyParagraph:
      'Curl the sides of your tongue gently upward without letting the tip touch the roof of your mouth and say "rrrrr"—almost like a friendly puppy tugging on a toy! You hear this smooth rolling sound at the start of "rabbit," "rainbow," and "rocket."',
    writingParagraph:
      'Capital R starts just like a P, then kicks one sturdy leg down to the floor so it can stand even stronger. Lowercase r drops straight down from the dotted line, bounces back up, and waves one tiny curved arm to the right.',
    teacherActivity:
      'Count down "3, 2, 1, blast off!" and zoom a toy rocket across the room while calling out R words like red, rainbow, and racecar.',
    everydayWords: ['Rabbit', 'Rainbow', 'Rocket', 'River', 'Rose'],
  },
  S: {
    headline: 'Meet Letter S: Slithering Snakes and Sunny Plurals',
    storyParagraph:
      'Keep your teeth gently together and let a steady whisper of air slide out—"ssssss"—just like a happy little snake wiggling through tall grass. S also wears a helpful grammar crown: adding an S to the end of "cat" or "star" turns one into many ("cats" and "stars")!',
    writingParagraph:
      'Both big S and little s wind smoothly in one continuous curvy path—left around the top, across the middle, and back around the bottom. Taking it slow helps keep the curves curvy instead of pointy.',
    teacherActivity:
      'Wiggle one arm through the air like a curving snake while making a quiet "Sssss" sound every time you spot something yellow or sunny.',
    everydayWords: ['Snake', 'Sun', 'Star', 'Sand', 'Strawberry'],
  },
  T: {
    headline: 'Meet Letter T: Crisp Taps Like Raindrops on a Tin Roof',
    storyParagraph:
      'Touch the tip of your tongue right behind your top front teeth and let out a quick, quiet tap of air—"t-t-t"—with no voice buzz at all. You hear letter T all over everyday speech, from "tiger," "tree," and "train" to the ends of "cat," "hat," and "boat."',
    writingParagraph:
      'First draw the tall standing pole straight down, then add the horizontal bar across! For big T, the bar rests right across the very top like a wide umbrella; for little t, the cross sits neatly along the middle dotted line.',
    teacherActivity:
      'Count "tick-tock, tick-tock" like a wall clock and see how many T objects you can touch in ten seconds—table, toy, towel, toe!',
    everydayWords: ['Tiger', 'Tree', 'Train', 'Turtle', 'Tomato'],
  },
  U: {
    headline: 'Meet Letter U: Look Up Under the Umbrella!',
    storyParagraph:
      'Relax your mouth and let out a quick, surprised "uh" sound from the center of your throat—that is short U in "up," "under," and "umbrella." Other times, U stretches out long and musical, as in "unicorn," "ukulele," and "flute."',
    writingParagraph:
      'Big U curves down and scoops cleanly back up like a cheerful smiling cup holding rainwater. Little u adds one extra straight stick straight down the right side so it sits squarely on the ground line.',
    teacherActivity:
      'Point straight up toward the ceiling ("Up!") and then crouch down under an imaginary umbrella ("Under!") to lock in short U.',
    everydayWords: ['Unicorn', 'Umbrella', 'Up', 'Ukulele', 'Under'],
  },
  V: {
    headline: 'Meet Letter V: Feel Your Lower Lip Buzz Like a Violin!',
    storyParagraph:
      'Remember how F blew quiet air over your bottom lip? Place your top teeth in that exact same spot on your lower lip, but this time turn your voice ON so your lip tickles and buzzes—"vvvvvv"—just like the hum of a violin string or a vrooming van!',
    writingParagraph:
      'Big V and little v share the exact same sharp V-shape like a deep mountain valley or a bird’s beak. Make sure the bottom stays pointy rather than rounded so it never looks like a U.',
    teacherActivity:
      'Hold two fingers together in a V sign and trace them while humming "Vvvvvroom!" like a delivery van driving up a hill.',
    everydayWords: ['Vulture', 'Van', 'Violin', 'Volcano', 'Vegetable'],
  },
  W: {
    headline: 'Meet Letter W: Double the V, Ready for Water and Wind!',
    storyParagraph:
      'Pucker your lips into a tiny kissy circle and let them glide open smoothly—"wuh, wuh, wuh"—as in "whale," "water," and "watermelon." Say "whoosh" out loud and feel your lips round out right before the sound flies away!',
    writingParagraph:
      'Letter W actually gets its name from its shape ("double U"!), even though in print it looks like two sharp V’s holding hands. Keep all four slanted lines crisp—down, up, down, and up.',
    teacherActivity:
      'Wave both hands side to side like ocean waves and sing "Whoosh, whoosh, whale in the water!"',
    everydayWords: ['Whale', 'Water', 'Wind', 'Wagon', 'Watermelon'],
  },
  X: {
    headline: 'Meet Letter X: Two Sounds Criss-Crossing Together',
    storyParagraph:
      'Even though X marks the spot at the start of "x-ray," kids usually hear X best hiding at the ends of short words like "fox," "box," and "six"! Say "box" slowly and listen closely: X is actually two quick sounds—/k/ and /s/—bundled together into one crisp "kss."',
    writingParagraph:
      'Big X and little x are made of two straight slanted sticks crossing cleanly right in the center like a treasure map X. One leans from top left to bottom right, and the second crosses right over it.',
    teacherActivity:
      'Cross your two arms or two index fingers in the air to make a big X whenever you hear the "kss" sound in fox, mix, wax, or six!',
    everydayWords: ['X-ray Fish', 'Fox', 'Box', 'Six', 'Mix'],
  },
  Y: {
    headline: 'Meet Letter Y: Cheer "Yay!" for Yellow and Yo-Yo',
    storyParagraph:
      'Letter Y starts words like "yak," "yellow," and "yo-yo" with a cheerful sliding "yuh" sound as the middle of your tongue lifts up toward the roof of your mouth. Later on, kids learn Y’s cool bonus job: at the end of words like "happy" and "sky," it loves borrowing vowel sounds!',
    writingParagraph:
      'Big Y opens its two top arms up high like someone cheering "Yay!" before standing on one straight leg. Little y starts with a short slanted slide and then pulls a long diagonal tail dipping neatly below the bottom line.',
    teacherActivity:
      'Raise both arms up in a giant Y cheer ("Yay for yellow!") and spot three yellow things in the room.',
    everydayWords: ['Yak', 'Yellow', 'Yo-yo', 'Yarn', 'Yogurt'],
  },
  Z: {
    headline: 'Meet Letter Z: Zip, Zoom, and Buzz Like a Honeybee!',
    storyParagraph:
      'We finish the alphabet with a lively buzz! Put your teeth gently together just like for S, then turn your voice ON so your tongue and teeth tickle—"zzzzzz"—just like a busy bee zooming to a flower or a jacket zipper sliding up!',
    writingParagraph:
      'Big Z and little z use the exact same zig-zag lightning path: zip straight across the top, slant down to the left, and zip straight across the bottom.',
    teacherActivity:
      'Pretend to zip up an imaginary winter coat ("Zzzzzip!") and zoom around like a buzzing bumblebee heading to the zoo.',
    everydayWords: ['Zebra', 'Zoo', 'Zipper', 'Zero', 'Zoom'],
  },
};

export const DIGIT_LEARNING_NOTES: Record<number, DigitGuideNote> = {
  0: {
    headline: 'Meet 0: Nothing in the Bowl, Yet Big Help for Bigger Numbers!',
    storyParagraph:
      'Zero is the number we use when a basket is totally empty, all the cookies have been eaten, or nobody has taken a step yet. Even though zero by itself means "none," it has a superpower job later on: when 0 sits next to 1, it helps turn 1 into 10, and next to 2, it helps make 20!',
    countingParagraph:
      'Try this fun check: hold up 3 fingers, then fold all 3 down one by one until none are left—that empty hand shows zero! Also remember that adding 0 to any number keeps it exactly the same.',
    teacherActivity:
      'Set two small bowls on the table—put 3 grapes or blocks in one bowl and leave the other empty so your child can point to the "zero" bowl.',
    everydayExamples: ['An empty cookie jar', '0 clouds in a clear blue sky', 'Starting line before step 1'],
  },
  1: {
    headline: 'Meet 1: The Very First Step of Every Count',
    storyParagraph:
      'Number 1 means a single whole thing standing all by itself—one bright sun in the daytime sky, one nose right in the middle of your face, or one special birthday candle on a first cake. Whenever you start counting anything from toys to stars, 1 always leads the parade.',
    countingParagraph:
      'Every counting number after 1 grows simply by adding just one more! Look at how clean the numeral 1 looks too—one tall straight line standing proudly like a flagpole.',
    teacherActivity:
      'Play "Find Just One": ask your child to bring you 1 pillow, 1 spoon, or point to 1 clock in the room.',
    everydayExamples: ['1 warm sun in the sky', '1 nose on your face', '1 moon in the night sky'],
  },
  2: {
    headline: 'Meet 2: Best Friends and Matching Pairs',
    storyParagraph:
      'Two is all about things that belong together in pairs! Look right at yourself: you have 2 eyes to blink, 2 ears to listen, 2 hands to clap, and 2 feet to jump. Shoes, socks, and mittens also love coming in cozy twos so neither one gets lonely.',
    countingParagraph:
      'Because 2 splits neatly into 1 for you and 1 for me with nothing left over, 2 is the very first even number. Once kids know 2, they can start hopping forward by twos: 2, 4, 6, 8!',
    teacherActivity:
      'Grab a small pile of clean socks from the laundry basket and match them together into tidy pairs of 2!',
    everydayExamples: ['2 eyes and 2 ears', 'A matching pair of shoes', '2 wheels on a bicycle'],
  },
  3: {
    headline: 'Meet 3: Quick to Spot and Strong Like a Triangle',
    storyParagraph:
      'Have you noticed how easy 3 is to recognize without even pointing? Look at three strawberries on a plate or the three lights on a street signal—your eyes see "three!" almost right away. Three straight sticks laid end to end also snap together to make a sturdy triangle.',
    countingParagraph:
      'If two friends share 3 crackers equally, each gets 1 and there is 1 extra cracker left in the middle—that means 3 is an odd number. You can make 3 out of 2 + 1, or three single ones.',
    teacherActivity:
      'Gather 3 spoons or pencils on the floor and arrange them tip-to-tip to build a giant 3-sided triangle!',
    everydayExamples: ['3 wheels on a tricycle', '3 colors on a traffic light', '3 sides of a triangle'],
  },
  4: {
    headline: 'Meet 4: Steady Corners and Four-Legged Friends',
    storyParagraph:
      'Four brings balance everywhere you look! Dogs, cats, horses, and kitchen tables all stand steady on 4 legs, while family cars roll smoothly on 4 tires. Squares and rectangles also owe their tidy box shape to having 4 straight sides and 4 corners.',
    countingParagraph:
      'Picture two pairs of shoes standing side by side: 2 + 2 = 4! Because 4 divides evenly between two people (2 each), 4 is an even number.',
    teacherActivity:
      'Walk around the house touching all 4 corners of a book, a pillow, or a table while counting "1, 2, 3, 4 corners!"',
    everydayExamples: ['4 seasons in a year', '4 legs on a friendly dog', '4 wheels on a car'],
  },
  5: {
    headline: 'Meet 5: Give Yourself a Big High-Five!',
    storyParagraph:
      'Five is one of the handiest numbers in the whole world because you carry two sets of 5 everywhere you go—5 fingers on each hand and 5 toes on each foot! Whenever someone raises a hand for a high-five, you are looking right at a group of five.',
    countingParagraph:
      'Because fingers come in fives, 5 becomes a super helpful shortcut for counting bigger piles. Two fives make 10, three fives make 15, and four fives make 20!',
    teacherActivity:
      'Trace around your child’s open hand on a sheet of paper and write the numbers 1, 2, 3, 4, 5 at the tip of each traced finger.',
    everydayExamples: ['5 fingers on one hand', '5 points on a star', '5 weekdays in a school week'],
  },
  6: {
    headline: 'Meet 6: One Full Hand Plus One Extra Thumb',
    storyParagraph:
      'Step right past 5 and you meet 6! Look at an egg carton cut in half, or roll a game die to its biggest side: 6 dots line up in two neat rows of 3. Every ladybug, ant, and honeybee in the garden also scurries around on 6 little legs.',
    countingParagraph:
      'Here are two neat ways to see 6 on your hands: hold up 5 fingers on one hand plus 1 finger on the other (5 + 1), or hold up 3 fingers on each hand (3 + 3). Either way, you get 6!',
    teacherActivity:
      'Roll a regular board-game die and see if your child can call out the number 6 instantly whenever two rows of 3 dots appear.',
    everydayExamples: ['6 legs on a honeybee', '6 dots on the biggest side of a die', '6 eggs in a half carton'],
  },
  7: {
    headline: 'Meet 7: Days of the Week and Rainbow Colors',
    storyParagraph:
      'Seven pops up in nature and calendars alike! There are 7 days turning every single week from Sunday through Saturday, and 7 colorful bands glowing across a bright rainbow after rain. On a ladybug’s back, you might even count 7 tiny black spots.',
    countingParagraph:
      'Show 7 on your fingers as one full hand of 5 plus 2 fingers on the other hand. Because one extra finger stands without a partner if you pair them up, 7 is an odd number—just 3 steps away from 10!',
    teacherActivity:
      'Sing or name all 7 days of the week together, holding up one more finger for each day until 7 are standing tall.',
    everydayExamples: ['7 days in a full week', '7 colors in a rainbow', '5 + 2 fingers held up'],
  },
  8: {
    headline: 'Meet 8: Eight Arms on a Clever Octopus',
    storyParagraph:
      'Picture an octopus gliding through ocean water with 8 wiggly arms, or a garden spider spinning silk on 8 tiny legs! On city streets, bright red stop signs also have 8 straight sides so drivers spot their special octagon shape from far away.',
    countingParagraph:
      'Think of 8 as a double-four! Hold up 4 fingers on your left hand and 4 fingers on your right hand—put them together and you have 8. It is an even number sitting just 2 steps below 10.',
    teacherActivity:
      'Hold up 4 fingers on each hand and wiggle them together like 8 octopus arms swimming across the living room.',
    everydayExamples: ['8 arms on an octopus', '8 legs on a spider', '8 sides on a red stop sign'],
  },
  9: {
    headline: 'Meet 9: Almost Ten, Just One Tiny Step Away!',
    storyParagraph:
      'Nine is the biggest single-digit number before two-digit numbers begin! Look at a tic-tac-toe grid drawn on paper: three squares across and three squares down make 9 neat boxes altogether.',
    countingParagraph:
      'Hold up all 10 fingers, then tuck just 1 pinky down—what is left standing is 9! Remembering that 9 is always 1 less than 10 makes adding and subtracting way easier as kids grow.',
    teacherActivity:
      'Draw a quick 3-by-3 tic-tac-toe board together and number each square from 1 to 9 before playing a friendly round.',
    everydayExamples: ['9 squares on a tic-tac-toe board', '9 players on a baseball team', '1 finger less than 10'],
  },
  10: {
    headline: 'Meet 10: Two Full Hands and Our Favorite Counting Bundle',
    storyParagraph:
      'Hooray for 10—the very first two-digit number! Clap both hands together and spread all your fingers wide: you are looking at a complete bundle of 10. Writing "1" followed by "0" tells everyone: "We filled one whole group of ten, with zero leftovers!"',
    countingParagraph:
      'Getting cozy with pairs that make 10 is like having a math superpower. Practice "Partners of 10" on your fingers: fold down 1 finger to see 9 + 1, fold down 2 to see 8 + 2, or fold down 3 to see 7 + 3.',
    teacherActivity:
      'Line up 10 small crackers or blocks in two rows of 5, then eat or hide a few and guess how many are needed to get back to 10.',
    everydayExamples: ['10 fingers across two hands', '10 bowling pins in a row', '10 toes on two feet'],
  },
  11: {
    headline: 'Meet 11: One Full Ten Plus One Extra Friend',
    storyParagraph:
      'Once you pass 10, teen numbers begin—and 11 is the very first one! Look at the two digits side by side: the left 1 stands for a full bundle of 10, and the right 1 stands for just 1 single extra piece.',
    countingParagraph:
      'Think of 11 as "10 and 1 more." Since 10 is even and 1 extra piece sits alone without a partner, 11 is an odd number. A full soccer team takes the field with 11 players on each side!',
    teacherActivity:
      'Count out 10 crayons in one cup and lay 1 extra crayon beside the cup so your child can see why 11 is written with two 1s.',
    everydayExamples: ['11 players on a soccer team', '10 fingers plus 1 nose', '11 o’clock on a clock'],
  },
  12: {
    headline: 'Meet 12: A Full Dozen Eggs and All Around the Clock',
    storyParagraph:
      'Twelve is such a popular number in daily life that it even has its own special nickname: a dozen! Open an egg carton in the fridge and you will find 12 eggs tucked into two rows of 6. Look up at a round wall clock or flip through a calendar—there are 12 hours around the clock and 12 months in a year.',
    countingParagraph:
      'Twelve is equal to one full ten plus 2 ones (10 + 2). Because 12 splits cleanly into two 6s, three 4s, or four 3s, sharing 12 grapes among friends is super easy!',
    teacherActivity:
      'Look at a real wall clock or wristwatch together and trace your finger from 1 all the way around to 12 at the top.',
    everydayExamples: ['12 eggs in a dozen carton', '12 months in a year', '12 numbers on a clock face'],
  },
  13: {
    headline: 'Meet 13: Ten Plus Three Makes Thirteen',
    storyParagraph:
      'Listen to the sound of the word "thir-teen"—"thir" sounds a little like three, and "teen" means ten! Put one full bundle of 10 together with 3 extra ones and you land right on 13.',
    countingParagraph:
      'Instead of starting all the way back at 1, teach your child to "count on" from 10: tap a fist for 10, then pop up three fingers one by one while saying "11, 12, 13!"',
    teacherActivity:
      'Put 10 coins or buttons under a napkin, place 3 outside the napkin, and practice counting up from 10 to reach 13.',
    everydayExamples: ['A baker’s dozen of 13 rolls', '10 toes plus 3 extra blocks', '10 + 3 hops on a number line'],
  },
  14: {
    headline: 'Meet 14: Two Whole Weeks of Days!',
    storyParagraph:
      'If you put two weeks side by side on a calendar—7 days in this week plus 7 days in next week—you get 14 days altogether! People even have a cozy old word for 14 days: a fortnight.',
    countingParagraph:
      'Fourteen is an even number built from one group of 10 and 4 extra ones (10 + 4), or by doubling 7 (7 + 7). Notice how the spoken name "four-teen" puts the 4 right in front so it is easy to remember!',
    teacherActivity:
      'Look at a monthly calendar and count 14 squares starting from today to see what date falls exactly two weeks ahead.',
    everydayExamples: ['14 days in two full weeks', '7 + 7 matching tiles', '10 blocks plus 4 more'],
  },
  15: {
    headline: 'Meet 15: Three High-Fives Make Fifteen!',
    storyParagraph:
      'Skip-counting by fives lands right on 15: say "5, 10, 15!" That is three full hands of fingers, or a quarter of an hour (15 minutes) ticking by on a clock. Knowing 15 helps kids read digital and analog clocks much sooner.',
    countingParagraph:
      'Written as 15, the 1 shows one group of 10 and the 5 shows five extra ones (10 + 5). Because that fifth extra piece has no partner after pairing up, 15 is an odd number.',
    teacherActivity:
      'Give three giant high-fives around the family—first person says "5!", second says "10!", third says "15!"',
    everydayExamples: ['15 minutes in a quarter hour', '3 hands of 5 fingers', '5 + 5 + 5 counting blocks'],
  },
  16: {
    headline: 'Meet 16: A Tidy 4-by-4 Square of Blocks',
    storyParagraph:
      'Sixteen loves making neat shapes! If you line up 4 rows with 4 blocks in each row, you build a solid square using exactly 16 blocks. Look at a chessboard too: each side starts the game with 16 chess pieces lined up in two rows of 8.',
    countingParagraph:
      'Sixteen is an even number made of one full ten and 6 extra ones (10 + 6), or double 8 (8 + 8). Hearing "six-teen" gives away the 6 right at the start of the word!',
    teacherActivity:
      'Arrange 16 Cheerios, raisins, or LEGO bricks into 4 neat rows of 4 to see how 16 forms a perfect square.',
    everydayExamples: ['16 chess pieces per player', '4 rows of 4 crayons', 'Two 8-packs of markers'],
  },
  17: {
    headline: 'Meet 17: Just Three Hops Below Twenty',
    storyParagraph:
      'Seventeen brings together one full bundle of 10 and 7 extra ones (10 + 7). Because 17 sits close to 20, learners can spot it two ways: start at 10 and add 7, or start at 20 and step back 3.',
    countingParagraph:
      'Since 7 is odd, 17 is also an odd number. Have you ever heard a three-line haiku poem? Every traditional haiku has exactly 17 beats (5, then 7, then 5) when you clap the syllables!',
    teacherActivity:
      'Count out 17 steps walking down a hallway or sidewalk, then take 3 big steps more to see how 17 leads straight to 20.',
    everydayExamples: ['10 blocks plus 7 blocks', '17 syllables in a haiku poem', '3 steps away from 20'],
  },
  18: {
    headline: 'Meet 18: Double Nine and Ready to Roll',
    storyParagraph:
      'Eighteen is made of one group of 10 and 8 extra ones (10 + 8), or two big groups of 9 joined together (9 + 9). Giant cross-country transport trucks rumble down the highway on 18 big tires—that is why people call them "18-wheelers"!',
    countingParagraph:
      'Every number ending in 8 is even because 8 pairs up cleanly into four sets of 2. Notice how 18 sits just 2 steps shy of 20!',
    teacherActivity:
      'Draw a big toy truck or count out 18 toy cars/blocks into two equal parking lots of 9.',
    everydayExamples: ['18 wheels on a big transport truck', '18 holes on a mini-golf course', 'Two groups of 9 stickers'],
  },
  19: {
    headline: 'Meet 19: Right Next Door to Twenty!',
    storyParagraph:
      'Nineteen is the very last teen number—made of one complete bundle of 10 and 9 extra ones sitting right next to it (10 + 9). Only one single unit is missing before those 9 ones grow into a second bundle of ten!',
    countingParagraph:
      'Because 9 is odd, 19 is an odd number. Just like 9 sits 1 step before 10, 19 sits exactly 1 step before 20—count "18, 19, 20!" to hear how close it is.',
    teacherActivity:
      'Line up 19 small toys in two lines (10 on top, 9 underneath) and ask: "How many more do we need to make two equal tens?"',
    everydayExamples: ['1 step before 20', '10 stickers plus 9 more', '19 minutes past the hour'],
  },
  20: {
    headline: 'Meet 20: Two Whole Tens—Fingers and Toes Together!',
    storyParagraph:
      'Congratulations on reaching 20! Put all 10 fingers on your hands together with all 10 toes on your feet, and you are carrying 20 digits around every day. Look at the numeral 20: the "2" on the left tells us we now have two complete bundles of ten, and the "0" shows zero leftovers.',
    countingParagraph:
      'You can reach 20 in lots of fun ways: count by 10s twice ("10, 20!"), count by 5s four times ("5, 10, 15, 20!"), or hop by 2s ten times. Because 20 splits smoothly into 10 + 10, it is a milestone even number.',
    teacherActivity:
      'Wiggle all 10 fingers and all 10 toes together while counting "10 fingers plus 10 toes equals 20!"',
    everydayExamples: ['10 fingers plus 10 toes', '20 pieces in a beginner puzzle', 'Two full stacks of 10 blocks'],
  },
};
