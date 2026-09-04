import { EncyclopediaEntry } from '../../types';

export const HUMAN_BODY_ENTRIES: EncyclopediaEntry[] = [
  {
    id: 'human-brain',
    title: 'The Human Brain',
    symbol: '🧠',
    pronunciation: '(BRAYN)',
    category: 'human-body',
    tagline: 'The 3-pound supercomputer that controls every thought, memory, dream, and heartbeat.',
    analogy: {
      title: 'The Master Mission Control Center',
      story: 'Imagine a supercomputer with 86 billion tiny glowing processors (neurons) sending electrical spark messages faster than a race car! It runs your breathing without you thinking, remembers the taste of ice cream from last summer, invents stories, and paints your dreams while you sleep.',
      emoji: '⚡'
    },
    howItWorks: {
      title: 'The 3 Main Sections of Your Brain',
      points: [
        'Cerebrum (Thinking Cap): The wrinkly top layer that handles thinking, reading, drawing, and emotions.',
        'Cerebellum (Balance Pilot): The bottom-back part that coordinates your balance so you can ride a bicycle without falling!',
        'Brain Stem (Autopilot Engine): Connects the brain to your spinal cord, controlling your heart pumping and lungs breathing 24/7.'
      ]
    },
    anatomyDiagram: {
      headline: 'Brain Super-Regions',
      parts: [
        { label: 'Frontal Lobe', desc: 'Decision making, problem solving, and creativity.' },
        { label: 'Temporal Lobe', desc: 'Hearing music and storing cherished memories.' },
        { label: 'Occipital Lobe', desc: 'Turns light signals from your eyes into 3D colorful pictures.' },
        { label: 'Neurons', desc: '86 billion nerve cells connected by trillions of pathways called synapses.' }
      ]
    },
    funFacts: [
      'Your brain generates about 20 watts of electrical power — enough to illuminate a dim LED lightbulb!',
      'When you learn something new, your brain physically grows a new microscopic connection bridge (synapse).',
      'The brain itself has no pain receptors — neurosurgeons can operate without the brain feeling a pinch!'
    ],
    kidWords: [
      { word: 'Neuron', emoji: '💡', meaning: 'A microscopic brain cell that sends electrical messages.' },
      { word: 'Memory', emoji: '💭', meaning: 'The brain’s ability to store and recall past experiences.' },
      { word: 'Synapse', emoji: '🌉', meaning: 'The tiny bridge where two neurons talk to each other.' }
    ],
    didYouKnowOrigin: 'Your brain is about 75% water! Drinking a glass of water when you feel tired helps your brain think much clearer and faster.',
    microQuiz: {
      question: 'Which part of your brain helps you balance when riding a bicycle or walking a straight line?',
      options: ['The Cerebellum (Balance Pilot)', 'The Ear lobe', 'The Finger'],
      correctIndex: 0,
      explanation: 'The cerebellum at the back of your brain orchestrates muscle coordination and smooth balance!'
    },
    handsOnExperiment: {
      title: 'The Reaction Time Ruler Drop',
      materials: ['A 12-inch wooden or plastic ruler', 'A friend or family member'],
      steps: [
        'Have your helper hold the top of the ruler vertically so the 0-inch mark hangs right between your thumb and pointer finger.',
        'Without warning, they release the ruler to fall!',
        'Catch it as fast as you can by snapping your fingers shut.',
        'Read the inch mark where you caught it: Lower numbers mean faster brain-to-muscle nerve signals!'
      ],
      explanation: 'Your eyes see the drop, send electrical signals to your occipital lobe, then to your motor cortex, and down your arm nerves to contract your hand muscles!',
      emoji: '📏'
    },
    kidTongueTwisterOrRhyme: 'Bright brilliant brains bravely build brand new beautiful big ideas!',
    seeAlso: [
      { id: 'five-senses', title: 'The 5 Senses', category: 'human-body' },
      { id: 'heart-blood', title: 'The Heart & Blood', category: 'human-body' }
    ]
  },
  {
    id: 'heart-blood',
    title: 'The Heart & Blood',
    symbol: '❤️',
    pronunciation: '(HART and BLUD)',
    category: 'human-body',
    tagline: 'The tireless muscle pump that beats 100,000 times a day to deliver oxygen to every cell.',
    analogy: {
      title: 'The Body’s Non-Stop Delivery River System',
      story: 'Your heart is a tough muscle the size of your fist that works like a tireless water pump! Blood vessels are like tiny plumbing highways stretching for 60,000 miles inside you. Red blood cells act like delivery trucks dropping off fresh oxygen boxes to your muscles and picking up waste carbon dioxide.',
      emoji: '🚚'
    },
    howItWorks: {
      title: 'The Four-Chamber Pumping Cycle',
      points: [
        'Right Side: Receives tired, oxygen-poor blood from the body and pumps it to the lungs for a fresh refill of oxygen.',
        'Lungs: Blood swaps carbon dioxide for fresh oxygen from the air you breathe.',
        'Left Side: Receives bright red oxygen-rich blood from lungs and blasts it with high pressure to your toes, fingertips, and brain!'
      ]
    },
    anatomyDiagram: {
      headline: 'Heart Chambers & Vessels',
      parts: [
        { label: 'Atria (Top)', desc: 'Two receiving rooms that gather blood returning to the heart.' },
        { label: 'Ventricles (Bottom)', desc: 'Two muscular power rooms that squeeze blood out with force.' },
        { label: 'Arteries', desc: 'Thick elastic pipes carrying oxygenated blood away from the heart.' },
        { label: 'Veins', desc: 'Return pipes with one-way valves bringing blood back.' }
      ]
    },
    funFacts: [
      'If you stretched out all the blood vessels in an adult body end-to-end, they would wrap around the entire Earth twice!',
      'Your heart beats about 100,000 times every day without ever taking a vacation or a single minute off.',
      'A blue whale’s heart is the size of a small car and beats only 5 to 6 times a minute when diving!'
    ],
    kidWords: [
      { word: 'Pulse', emoji: '💓', meaning: 'The rhythmic throbbing of arteries as your heart pumps blood.' },
      { word: 'Artery', emoji: '🔴', meaning: 'A blood vessel carrying oxygen-rich blood away from the heart.' },
      { word: 'Oxygen', emoji: '💨', meaning: 'The invisible gas in air that all living body cells need for energy.' }
    ],
    didYouKnowOrigin: 'The "lub-dub" sound you hear with a doctor’s stethoscope is actually the sound of heart valves snapping shut like cozy little doors to prevent blood from flowing backwards!',
    microQuiz: {
      question: 'About how big is your heart right now?',
      options: ['About the size of your clenched fist', 'As big as a basketball', 'As small as a pea'],
      correctIndex: 0,
      explanation: 'Your heart is approximately the size of your own clenched fist, and it grows along with you!'
    },
    handsOnExperiment: {
      title: 'Find Your Own Pulse Rhythm',
      materials: ['Your two fingers (index and middle)', 'A stopwatch or timer clock'],
      steps: [
        'Place your index and middle fingers gently on the inside of your wrist just below the base of your thumb (or lightly on your neck under the jaw).',
        'Press softly until you feel a gentle rhythmic thumping: "bump... bump... bump".',
        'Count the beats for 15 seconds, then multiply by 4 to get your heart rate per minute!',
        'Do 10 jumping jacks and check it again to see how much faster it pumps to deliver oxygen!'
      ],
      explanation: 'Exercise makes your working muscles demand more oxygen, so your brain tells your heart to pump faster!',
      emoji: '💓'
    },
    seeAlso: [
      { id: 'lungs-breathing', title: 'Lungs & Breathing', category: 'human-body' },
      { id: 'human-brain', title: 'The Human Brain', category: 'human-body' }
    ]
  },
  {
    id: 'five-senses',
    title: 'The 5 Senses',
    symbol: '👁️',
    pronunciation: '(FYVE SEN-sez)',
    category: 'human-body',
    tagline: 'Sight, Hearing, Smell, Taste, and Touch — your body’s high-tech explorer tools.',
    analogy: {
      title: 'The Five High-Definition Windows to the World',
      story: 'Imagine walking into a bakery! Your Eyes see golden brown cookies, your Nose smells warm melted chocolate, your Skin feels the warm radiant oven, your Tongue tastes sweet vanilla chips, and your Ears hear the friendly timer bell ding! Your five senses work together like a superhero team.',
      emoji: '🍪'
    },
    howItWorks: {
      title: 'How the 5 Senses Collect Data',
      points: [
        'Sight (Eyes): Lenses focus light rays onto the retina, sending millions of color pixel signals to the brain.',
        'Hearing (Ears): Sound waves vibrate the eardrum and 3 tiny bones, turning ripples into musical notes.',
        'Smell & Taste (Nose & Tongue): Chemical sensors detect aromas in the air and sweet, salty, sour, bitter flavors.',
        'Touch (Skin): Millions of nerve sensors detect warmth, cold, pressure, tickles, and textures.'
      ]
    },
    funFacts: [
      'Your nose can distinguish and remember more than 1 trillion different scent combinations!',
      'Your taste buds are replaced with fresh new ones every 10 to 14 days.',
      'The skin is the largest organ of the human body, covering your whole exterior.'
    ],
    kidWords: [
      { word: 'Receptor', emoji: '📡', meaning: 'A specialized nerve ending that detects changes in light, heat, or touch.' },
      { word: 'Perception', emoji: '🌈', meaning: 'How your brain interprets what your senses experience.' },
      { word: 'Vibration', emoji: '〰️', meaning: 'Rapid back-and-forth movement that creates sound waves.' }
    ],
    didYouKnowOrigin: 'About 80% of what we think we "taste" is actually coming from our sense of smell! That’s why food tastes plain when your nose is stuffy with a cold.',
    microQuiz: {
      question: 'Which sense uses three tiny bones (hammer, anvil, and stirrup) inside your head?',
      options: ['Hearing (Ears)', 'Taste (Tongue)', 'Sight (Eyes)'],
      correctIndex: 0,
      explanation: 'The three smallest bones in the human body are inside your middle ear to amplify sound vibrations!'
    },
    seeAlso: [
      { id: 'taste-buds', title: 'Taste Buds & Tongue', category: 'human-body' },
      { id: 'human-brain', title: 'The Human Brain', category: 'human-body' }
    ]
  },
  {
    id: 'skeleton-bones',
    title: 'Skeleton & Bones',
    symbol: '🦴',
    pronunciation: '(SKEL-uh-tun and BOHNZ)',
    category: 'human-body',
    tagline: 'The strong, living internal scaffolding that protects your organs and lets you stand tall.',
    analogy: {
      title: 'The Living Armor and Skyscraper Frame',
      story: 'Without your skeleton, you would flop on the ground like a wiggly jellyfish! Your bones act like the steel beams of a skyscraper, while your skull and ribcage act like knight’s armor protecting your precious brain and heart.',
      emoji: '🏰'
    },
    howItWorks: {
      title: 'Bone Marvels',
      points: [
        '206 Adult Bones: You are born with about 270 soft bones that fuse into 206 strong bones as you grow.',
        'Living and Growing: Bones are not dry rocks — they are living tissue with blood vessels that repair themselves when injured!',
        'Bone Marrow Factory: The soft inside of large bones (marrow) makes 2 million brand new red blood cells every second!'
      ]
    },
    funFacts: [
      'The longest and strongest bone in your body is the Femur (thigh bone) — stronger than concrete!',
      'The smallest bone is the Stapes in your ear — smaller than a grain of rice (3 millimeters long)!',
      'More than half of all the 206 bones in your body are located in your hands and feet.'
    ],
    kidWords: [
      { word: 'Femur', emoji: '🦵', meaning: 'The thigh bone, the longest and strongest bone in the body.' },
      { word: 'Cartilage', emoji: '👂', meaning: 'Flexible, rubbery tissue found in your ears, nose tip, and joints.' },
      { word: 'Marrow', emoji: '🩸', meaning: 'The soft core inside bones where blood cells are born.' }
    ],
    didYouKnowOrigin: 'Your nose tip and ears are not made of hard bone — they are made of flexible cartilage, which is why you can gently wiggle them!',
    microQuiz: {
      question: 'Which bone shields and protects your delicate brain from bumps?',
      options: ['The Cranium (Skull)', 'The Ribcage', 'The Knee cap'],
      correctIndex: 0,
      explanation: 'Your hard helmet skull (cranium) encases and protects your brain from injury!'
    },
    seeAlso: [
      { id: 'human-brain', title: 'The Human Brain', category: 'human-body' },
      { id: 'muscles-movement', title: 'Muscles & Movement', category: 'human-body' }
    ]
  },
  {
    id: 'lungs-breathing',
    title: 'Lungs & Breathing',
    symbol: '🫁',
    pronunciation: '(LUNGZ and BREE-thing)',
    category: 'human-body',
    tagline: 'The pink spongy air trees that bring fresh oxygen into your body with every breath.',
    analogy: {
      title: 'Upside-Down Spongy Forest Trees',
      story: 'Inside your chest, your windpipe splits into two main branches like an upside-down tree with millions of tiny twigs. At the ends of the twigs are 300 million microscopic air balloons (alveoli) that soak up oxygen from the air and hand it to your blood!',
      emoji: '🌳'
    },
    howItWorks: {
      title: 'The Breathing Engine',
      points: [
        'The Diaphragm Muscle: A dome-shaped muscle under your lungs that pulls down to suck air in and pushes up to blow air out.',
        'Alveoli Bubbles: Tiny balloon sacs surrounded by blood capillaries where oxygen enters blood and carbon dioxide exits.',
        'Automatic Control: Your brain stem keeps your lungs breathing even when you are fast asleep!'
      ]
    },
    funFacts: [
      'You breathe in and out about 20,000 times every single day!',
      'Your left lung is slightly smaller than your right lung to leave cozy room for your heart.',
      'If you could unfold all the 300 million tiny air sacs in your lungs, they would cover an entire tennis court!'
    ],
    kidWords: [
      { word: 'Diaphragm', emoji: '🪗', meaning: 'The strong breathing muscle at the bottom of your chest cavity.' },
      { word: 'Alveoli', emoji: '🫧', meaning: 'Tiny grape-like air sacs where oxygen enters the bloodstream.' },
      { word: 'Inhale', emoji: '🌬️', meaning: 'Drawing fresh air and oxygen into your lungs.' }
    ],
    didYouKnowOrigin: 'A yawn is your body’s way of taking a giant gulp of cool air to refresh your brain when you are sleepy or tired!',
    microQuiz: {
      question: 'Why is your left lung slightly smaller than your right lung?',
      options: ['To make room for your heart to beat comfortably', 'Because it has fewer bones', 'Because of your stomach'],
      correctIndex: 0,
      explanation: 'Your left lung leaves a gentle indentation called the cardiac notch so your heart fits snug in your chest!'
    },
    seeAlso: [
      { id: 'heart-blood', title: 'The Heart & Blood', category: 'human-body' },
      { id: 'air-element', title: 'Air & Oxygen', category: 'earth-elements' }
    ]
  },
  {
    id: 'taste-buds',
    title: 'Taste Buds & Tongue',
    symbol: '👅',
    pronunciation: '(TAYST BUDS and TUNG)',
    category: 'human-body',
    tagline: 'The muscular flavor detective that speaks words and tests sweet, salty, and sour treats.',
    analogy: {
      title: 'The Flavor Chemistry Laboratory in Your Mouth',
      story: 'Your tongue is covered in thousands of tiny taste bud detectors! Each taste bud is like a microscopic lock, and the flavor molecules in food (like sugar or lemon juice) are keys that fit the locks, sending instant joyful "YUM!" or puckering "SOUR!" alerts to your brain.',
      emoji: '🍦'
    },
    howItWorks: {
      title: 'The 5 Basic Tastes You Can Detect',
      points: [
        'Sweet (🍯): Found in honey, apples, and ripe berries — alerts your body to healthy energy.',
        'Salty (🧂): Found in minerals and sea salt — essential for keeping your body’s water balanced.',
        'Sour (🍋): Found in lemons and yogurt — can warn us if food is unripe or spoiled.',
        'Bitter (🥦): Found in dark greens like kale and cocoa — protects against poisonous plants in nature.',
        'Umami (Savory 🧀): Found in cheese, tomatoes, and mushrooms — signals rich protein.'
      ]
    },
    funFacts: [
      'Just like your fingerprints, your tongue has a unique tongue print that belongs to only you in the world!',
      'Your tongue is made of 8 intertwined muscles that never get tired when speaking or chewing.',
      'Butterflies have taste buds on their feet, while catfish have taste buds all over their entire body skin!'
    ],
    kidWords: [
      { word: 'Umami', emoji: '🍲', meaning: 'The savory, rich taste found in cheese, broth, and cooked mushrooms.' },
      { word: 'Papillae', emoji: '🔬', meaning: 'The tiny bumps on your tongue that house taste buds.' },
      { word: 'Saliva', emoji: '💧', meaning: 'Mouth moisture that dissolves food so taste buds can read flavors.' }
    ],
    didYouKnowOrigin: 'The word "Umami" comes from the Japanese word "umai", which means "delicious and savory"!',
    microQuiz: {
      question: 'Which flavor taste helps humans detect energy-rich foods like fruits and honey?',
      options: ['Sweet', 'Bitter', 'Sour'],
      correctIndex: 0,
      explanation: 'Sweet tastes come from natural sugars that give human bodies quick, clean energy!'
    },
    seeAlso: [
      { id: 'five-senses', title: 'The 5 Senses', category: 'human-body' },
      { id: 'letter-t', title: 'Letter T', category: 'alphabets' }
    ]
  },
  {
    id: 'muscles-movement',
    title: 'Muscles & Movement',
    symbol: '💪',
    pronunciation: '(MUS-ulz and MOOV-ment)',
    category: 'human-body',
    tagline: 'Over 600 elastic muscle motors that pull on your bones to run, jump, blink, and smile.',
    analogy: {
      title: 'The Body’s Pulling Pulley System',
      story: 'Muscles only pull — they never push! Think of them like strong elastic rubber ropes working in friendly pairs: when you bend your elbow, your biceps muscle pulls your forearm up; to straighten your arm, your triceps muscle on the back pulls it straight down!',
      emoji: '🏹'
    },
    howItWorks: {
      title: 'The 3 Types of Muscles in Your Body',
      points: [
        'Skeletal Muscles: Muscles attached to your bones that you control voluntarily to run, dance, and wave.',
        'Smooth Muscles: Involuntary muscles inside your stomach and blood vessels that work on automatic mode.',
        'Cardiac Muscle: The special tireless muscle that forms your heart wall, squeezing day and night.'
      ]
    },
    funFacts: [
      'It takes about 17 muscles to smile, but 43 muscles to frown — so smiling is much easier on your face!',
      'The hardest working muscle in your entire body is your heart, beating over 3 billion times in a lifetime.',
      'The fastest reacting muscles are in your eyelids, allowing you to blink in 1/10th of a second.'
    ],
    kidWords: [
      { word: 'Biceps', emoji: '💪', meaning: 'The muscle on the front of your upper arm that flexes your elbow.' },
      { word: 'Involuntary', emoji: '⚙️', meaning: 'Working automatically without needing your conscious thought.' },
      { word: 'Tendon', emoji: '🪢', meaning: 'A tough, rope-like cord connecting muscle securely to bone.' }
    ],
    didYouKnowOrigin: 'The word "Muscle" comes from the Latin word "musculus", which means "little mouse" — because ancient Roman doctors thought a flexing bicep looked like a little mouse running under the skin!',
    microQuiz: {
      question: 'Do skeletal muscles push your bones or pull on your bones?',
      options: ['They always PULL using tendon cords', 'They only push', 'They do both equally'],
      correctIndex: 0,
      explanation: 'Muscles can only pull! That is why they work in opposing pairs like biceps and triceps!'
    },
    seeAlso: [
      { id: 'skeleton-bones', title: 'Skeleton & Bones', category: 'human-body' },
      { id: 'heart-blood', title: 'The Heart & Blood', category: 'human-body' }
    ]
  }
];
