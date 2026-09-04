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
  },
  {
    id: 'human-eyes',
    title: 'Eyes & Vision',
    symbol: '👁️',
    pronunciation: '(EYEZ and VIZH-uhn)',
    category: 'human-body',
    tagline: 'Twin high-definition biological video cameras capturing millions of colors every second.',
    analogy: {
      title: 'The Dual HD Video Cameras with Auto-Focus and Wiper Blades',
      story: 'Your eyes are like two incredible color movie cameras connected to your brain! The colored ring (iris) works like a camera aperture lens opening wide in the dark and closing small in bright sun; your eyelids act like windshield wipers that blink clean moisture every 4 seconds.',
      emoji: '📸'
    },
    howItWorks: {
      title: 'How Light Becomes a Picture',
      points: [
        'Cornea & Lens: Clear curved windows at the front of the eye that bend and focus incoming light rays.',
        'Retina Screen: The back wall of the eyeball packed with 130 million light-detecting rod and cone cells.',
        'Optic Cable Highway: The optic nerve transmits electrical pixel impulses upside down to the brain, which flips the image right-side up instantly!'
      ]
    },
    anatomyDiagram: {
      headline: 'Anatomy of the Human Eye',
      parts: [
        { label: 'Pupil', desc: 'The black center hole that lets light inside the eyeball.' },
        { label: 'Iris', desc: 'The colored muscular ring (brown, blue, green) that controls pupil size.' },
        { label: 'Retina', desc: 'The light-sensitive screen at the back of your eye with rods and cones.' },
        { label: 'Optic Nerve', desc: 'High-speed data cord sending visual signals to your occipital brain lobe.' }
      ]
    },
    funFacts: [
      'You blink about 15 to 20 times every minute — that is over 28,000 times every day!',
      'Your eye muscles are the fastest reacting muscles in your entire body.',
      'Rods help you see in dim darkness and black-and-white, while cones let you see red, green, and blue colors.'
    ],
    kidWords: [
      { word: 'Retina', emoji: '🖼️', meaning: 'The light-sensitive inner coating at the back of the eyeball.' },
      { word: 'Pupil', emoji: '⚫', meaning: 'The dark opening in the center of the iris that admits light.' },
      { word: 'Cornea', emoji: '🔍', meaning: 'The transparent front dome layer that covers and protects the iris.' }
    ],
    didYouKnowOrigin: 'All babies with blue eyes inherit that color because of low melanin in the iris! When exposed to sunlight as they grow, melanin develops and may turn eyes hazel, green, or deep brown.',
    microQuiz: {
      question: 'Which part of your eye is the colorful ring that controls how much light enters?',
      options: ['The Iris', 'The Eyelash', 'The Optic Nerve'],
      correctIndex: 0,
      explanation: 'The iris is the colorful muscular disc (blue, brown, green) that expands or contracts your pupil!'
    },
    handsOnExperiment: {
      title: 'The Pupil Flashlight Mirror Test',
      materials: ['A mirror', 'A dim room', 'A flashlight or soft lamp'],
      steps: [
        'Look at your eyes in a mirror in a dimly lit room — notice how big and wide your black pupils are!',
        'Turn on a lamp or shine a soft light near your face (never directly into the eye).',
        'Watch your pupils immediately shrink down to tiny black dots to protect your retina!'
      ],
      explanation: 'Your iris muscles contract automatically within 200 milliseconds to protect your light-sensitive rods and cones!',
      emoji: '🪞'
    },
    kidTongueTwisterOrRhyme: 'Eagle-eyed Eddie effortlessly examines eight emerald eagles!',
    seeAlso: [
      { id: 'five-senses', title: 'The 5 Senses', category: 'human-body' },
      { id: 'human-brain', title: 'The Human Brain', category: 'human-body' }
    ]
  },
  {
    id: 'human-ears',
    title: 'Ears, Hearing & Balance',
    symbol: '👂',
    pronunciation: '(EERZ, HEER-ing and BAL-uhns)',
    category: 'human-body',
    tagline: 'Acoustic sound catchers containing the 3 smallest bones in your body and a balance gyroscope.',
    analogy: {
      title: 'The Musical Concert Hall & Gyroscope Navigator',
      story: 'Your outer ear (pinna) acts like a cupped satellite dish catching invisible sound waves vibrating in the air! Inside your head, those sound waves tap on a tiny drum skin, vibrating three microscopic musical bone hammers that splash ripples through a tiny fluid snail shell (cochlea).',
      emoji: '🥁'
    },
    howItWorks: {
      title: 'The 3 Parts of the Ear',
      points: [
        'Outer Ear (Pinna): Catches sound waves and channels them down the ear canal to the eardrum.',
        'Middle Ear (The 3 Tiny Bones): The Hammer (Malleus), Anvil (Incus), and Stirrup (Stapes) amplify vibrations — the stapes is the smallest bone in your entire body (size of a grain of rice!).',
        'Inner Ear (Cochlea & Semicircular Canals): Converts fluid waves into nerve electrical signals and senses which way your head is tilting so you don’t fall over.'
      ]
    },
    anatomyDiagram: {
      headline: 'Inside the Ear Mechanism',
      parts: [
        { label: 'Eardrum', desc: 'A paper-thin cone membrane that vibrates when sound waves strike it.' },
        { label: 'Ossicles (3 Bones)', desc: 'Hammer, anvil, and stirrup bones that amplify sound.' },
        { label: 'Cochlea', desc: 'A fluid-filled spiral snail shell lined with 20,000 microscopic hair cell sensors.' },
        { label: 'Semicircular Canals', desc: 'Three fluid balance loops that act like 3D gyroscopes for your head.' }
      ]
    },
    funFacts: [
      'Your ears never stop hearing — even when you are fast asleep, your ears hear sounds, but your brain ignores them so you can rest!',
      'Earwax (cerumen) is actually a healthy, protective shield that traps dirt, dust, and bad bacteria.',
      'If you spin around in circles and stop, you feel dizzy because the fluid inside your semicircular canals keeps sloshing for a few extra seconds!'
    ],
    kidWords: [
      { word: 'Cochlea', emoji: '🐌', meaning: 'The spiral, snail-shaped chamber in the inner ear that decodes sound frequencies.' },
      { word: 'Eardrum', emoji: '🥁', meaning: 'The thin membrane in the ear that vibrates in response to sound waves.' },
      { word: 'Stirrup', emoji: '🌾', meaning: 'The stapes bone — the tiniest bone in the human body (about 3mm long).' }
    ],
    didYouKnowOrigin: 'The three bones in your middle ear are called "ossicles", which is Latin for "tiny bones"!',
    microQuiz: {
      question: 'What is the smallest bone in the human body, located inside your middle ear?',
      options: ['The Stirrup (Stapes)', 'The Pinky finger bone', 'The Tooth'],
      correctIndex: 0,
      explanation: 'The stirrup (stapes) bone in your middle ear is only 3 millimeters long — roughly the size of a single grain of rice!'
    },
    seeAlso: [
      { id: 'five-senses', title: 'The 5 Senses', category: 'human-body' },
      { id: 'human-brain', title: 'The Human Brain', category: 'human-body' }
    ]
  },
  {
    id: 'human-nose',
    title: 'Nose & Sense of Smell',
    symbol: '👃',
    pronunciation: '(NOHZ and SMEL)',
    category: 'human-body',
    tagline: 'The warming air-filtration vacuum and scent detector directly wired to your memory.',
    analogy: {
      title: 'The Air Conditioner & Scent Memory Machine',
      story: 'Your nose is a high-tech climate control filter! When you breathe in chilly winter air, your nose instantly warms it to body temperature, humidifies it, and traps dust particles with tiny sticky hairs. Plus, its 400 scent receptors can recognize over 1 trillion distinct smells!',
      emoji: '🌸'
    },
    howItWorks: {
      title: 'How Your Nose Protects and Smells',
      points: [
        'Cilia & Mucus Filtration: Millions of microscopic waving hair brushes (cilia) trap pollen and dust before air reaches your delicate lungs.',
        'Olfactory Bulb Connection: Odor molecules dissolve in the roof of your nasal cavity, sending instant signals straight to your brain’s emotion and memory centers.',
        '80% of Taste: Much of what you think is "taste" is actually your nose smelling food vapors while you chew!'
      ]
    },
    funFacts: [
      'Your nose produces about 1 to 2 pints of clean protective mucus every day to keep your airways moist!',
      'Smells trigger vivid memories faster than sounds or sights because the olfactory bulb is wired directly next to the hippocampus (memory center).',
      'When you sneeze, air blasts out of your nose and mouth at speeds up to 100 miles per hour to clear out tickling dust!'
    ],
    kidWords: [
      { word: 'Olfactory', emoji: '👃', meaning: 'Relating to the sense of smell and scent detection.' },
      { word: 'Cilia', emoji: '🌾', meaning: 'Microscopic hair-like projections that sweep dust and mucus out of airways.' },
      { word: 'Septum', emoji: '🧱', meaning: 'The bendable cartilage wall dividing your nose into two nostrils.' }
    ],
    didYouKnowOrigin: 'The word "Nose" traces back thousands of years to the ancient Proto-Indo-European root "nas", which is also where we get the word "nasal"!',
    microQuiz: {
      question: 'What happens when you hold your nose while eating a piece of fruit?',
      options: ['It becomes much harder to taste the flavor', 'It tastes twice as sweet', 'It turns blue'],
      correctIndex: 0,
      explanation: 'About 80% of what we think is flavor actually comes from our nose smelling food aromas as we chew!'
    },
    seeAlso: [
      { id: 'taste-buds', title: 'Taste Buds & Tongue', category: 'human-body' },
      { id: 'lungs-breathing', title: 'Lungs & Breathing', category: 'human-body' }
    ]
  },
  {
    id: 'human-skin',
    title: 'Skin (The Body’s Shield)',
    symbol: '🛡️',
    pronunciation: '(SKIN)',
    category: 'human-body',
    tagline: 'The largest organ of the human body — a waterproof, self-healing, climate-controlling suit.',
    analogy: {
      title: 'The Waterproof Smart Space-Suit',
      story: 'Imagine wearing a magic space-suit that is 100% waterproof, stretches when you bend, cools you down with sweat drops when you are hot, gives you goosebumps when you are cold, and repairs its own rips and scrapes with fresh new cells in just a few days!',
      emoji: '🧥'
    },
    howItWorks: {
      title: 'The 3 Main Layers of Skin',
      points: [
        'Epidermis (Outer Shield): The tough waterproof surface made of keratin cells and melanin pigment that shields against sunshine UV rays.',
        'Dermis (Control Room): Filled with sweat glands, hair follicles, blood vessels, and nerve touch sensors that feel soft silk, tickles, and warmth.',
        'Hypodermis (Subcutaneous Fat Cushion): A bottom cushion layer of fat that stores energy and insulates your body like a cozy winter sleeping bag.'
      ]
    },
    anatomyDiagram: {
      headline: 'The 3 Layers of Skin',
      parts: [
        { label: 'Epidermis', desc: 'Outer waterproof protective coat shedding old dead cells constantly.' },
        { label: 'Dermis', desc: 'Middle layer with sweat glands, oil pores, and touch nerve receptors.' },
        { label: 'Sweat Glands', desc: 'Tiny coiled tubes pumping water droplets to skin surface for evaporative cooling.' },
        { label: 'Melanin', desc: 'Natural pigment umbrella protecting deep cells from sun rays.' }
      ]
    },
    funFacts: [
      'Skin is the largest and heaviest organ in the human body, weighing about 8 to 10 pounds in an adult!',
      'You shed about 30,000 to 40,000 dead skin cells every single minute — that is nearly 9 pounds of skin every year!',
      'Your fingertips have unique raised friction ridges (fingerprints) that help you grip objects and are 100% unique to you.'
    ],
    kidWords: [
      { word: 'Melanin', emoji: '🎨', meaning: 'The natural pigment that gives skin, hair, and eyes their color and sun protection.' },
      { word: 'Epidermis', emoji: '🛡️', meaning: 'The outermost protective layer of skin cells.' },
      { word: 'Pore', emoji: '🕳️', meaning: 'A tiny opening on the surface of the skin through which sweat and oils pass.' }
    ],
    didYouKnowOrigin: 'Goosebumps happen because tiny muscles at the base of every hair follicle contract to pull hairs upright! In furry animals, this puffs up their fur coat to trap extra warm air.',
    microQuiz: {
      question: 'What is the largest organ in the entire human body?',
      options: ['The Skin', 'The Brain', 'The Liver'],
      correctIndex: 0,
      explanation: 'Skin is your body’s largest organ! Stretched flat, an adult’s skin covers roughly 20 square feet.'
    },
    seeAlso: [
      { id: 'hands-fingers', title: 'Hands & Fingers', category: 'human-body' },
      { id: 'immune-system', title: 'Immune System', category: 'human-body' }
    ]
  },
  {
    id: 'stomach-digestion',
    title: 'Stomach & Digestive System',
    symbol: '🍲',
    pronunciation: '(STUM-uhk and dy-JES-chun)',
    category: 'human-body',
    tagline: 'The 30-foot nutrition factory that turns sandwiches and apples into rocket-fuel energy.',
    analogy: {
      title: 'The Nutrient Blender and Energy Powerplant',
      story: 'Your digestive tract is a 30-foot magical water slide for food! When you chew an apple, saliva starts breaking down sugars; your muscular stomach churns it like a blender with acid juices, and your long intestines absorb all the vitamins, calcium, and minerals into your bloodstream.',
      emoji: '🧃'
    },
    howItWorks: {
      title: 'The Journey of a Bite of Food',
      points: [
        'Mouth & Esophagus: Chewing and saliva turn food into a soft bolus, pushed down the food pipe by muscular wave squeezes (peristalsis).',
        'Stomach Blender: Churns food with gastric juices and hydrochloric acid to break down proteins into a soupy mix called chyme.',
        'Small Intestine (20 Feet Long): Microscopic finger-like villi absorb vitamins, proteins, and minerals into the bloodstream.',
        'Large Intestine (Colon): Reabsorbs water and prepares fiber waste for safe elimination.'
      ]
    },
    funFacts: [
      'Your small intestine is about 20 to 22 feet long — as long as four grown-up humans lying head-to-toe!',
      'Stomach acid (hydrochloric acid) is so strong it could dissolve metal, but your stomach protects itself with a thick mucous lining renewed every 3 days.',
      'Your gut is home to trillions of friendly microscopic bacteria (microbiome) that help digest food and keep you healthy.'
    ],
    kidWords: [
      { word: 'Peristalsis', emoji: '🌊', meaning: 'Wave-like muscle contractions that push food smoothly down the digestive tract.' },
      { word: 'Villi', emoji: '🌾', meaning: 'Millions of tiny finger-like projections lining the intestine to absorb nutrients.' },
      { word: 'Microbiome', emoji: '🦠', meaning: 'The community of trillions of helpful bacteria living inside your gut.' }
    ],
    didYouKnowOrigin: 'The rumbling sound your stomach makes when you are hungry is called "borborygmus" (pronounced bor-buh-RIG-mus), which is an ancient Greek word imitating the bubbling sound of air and liquid moving in your belly!',
    microQuiz: {
      question: 'How long is the human small intestine if you stretched it out in a straight line?',
      options: ['About 20 feet long (as long as a minivan!)', 'Only 6 inches', '1 foot'],
      correctIndex: 0,
      explanation: 'The small intestine is folded neatly in your abdomen and measures about 20 to 22 feet in length!'
    },
    seeAlso: [
      { id: 'teeth-mouth', title: 'Teeth & Mouth', category: 'human-body' },
      { id: 'human-kidneys', title: 'Kidneys & Water Balance', category: 'human-body' }
    ]
  },
  {
    id: 'teeth-mouth',
    title: 'Teeth, Chewing & Smile',
    symbol: '🦷',
    pronunciation: '(TEETH and CHOO-ing)',
    category: 'human-body',
    tagline: 'Enamel diamond cutters and grinding stones that break down food and shape clear speech.',
    analogy: {
      title: 'The Body’s Diamond-Hard Kitchen Cutlery Set',
      story: 'Your teeth are like a custom set of kitchen tools built right into your mouth! Incisors in the front act like sharp scissors for snipping apples; canines act like pointed forks, and molars in the back are heavy grinding stones that mash food into a smooth paste so it is safe to swallow.',
      emoji: '💎'
    },
    howItWorks: {
      title: 'The 4 Types of Human Teeth',
      points: [
        'Incisors (8 Front Teeth): Sharp chisel-like edges for cutting and slicing bites of food.',
        'Canines (4 Corner Teeth): Pointed vampire-like teeth for gripping and tearing food.',
        'Premolars (8 Transition Teeth): Flat tops with cusps for crushing and holding.',
        'Molars (12 Back Teeth): Broad, flat grinding stones for pulverizing tough grains and veggies.'
      ]
    },
    anatomyDiagram: {
      headline: 'Layers of a Tooth',
      parts: [
        { label: 'Enamel', desc: 'The hard, mineralized outer white shell — the hardest substance in the human body!' },
        { label: 'Dentin', desc: 'The firm yellow bone-like layer underneath the enamel.' },
        { label: 'Pulp', desc: 'The soft living center filled with blood vessels and feeling nerves.' },
        { label: 'Root', desc: 'Anchored deep into the jawbone with strong periodontal ligaments.' }
      ]
    },
    funFacts: [
      'Tooth enamel is the hardest substance in the entire human body — even harder than your leg bones!',
      'Humans grow two sets of teeth in a lifetime: 20 primary baby teeth and 32 permanent adult teeth.',
      'Just like fingerprints, no two people on Earth have the exact same bite or tooth arrangement.'
    ],
    kidWords: [
      { word: 'Enamel', emoji: '💎', meaning: 'The super-hard, glossy white mineral shell that protects the outside of a tooth.' },
      { word: 'Molar', emoji: '🦷', meaning: 'A broad back tooth with a flat surface used for grinding food.' },
      { word: 'Fluoride', emoji: '🪥', meaning: 'A beneficial mineral found in toothpaste that rebuilds and strengthens enamel.' }
    ],
    didYouKnowOrigin: 'Elephants go through 6 sets of teeth in their lifetime, and sharks replace lost teeth continuously in days, but humans only get two sets — which is why brushing twice a day keeps permanent teeth smiling for life!',
    microQuiz: {
      question: 'What is the hardest substance found anywhere in the human body?',
      options: ['Tooth Enamel', 'The Skull bone', 'The Fingernail'],
      correctIndex: 0,
      explanation: 'Tooth enamel is 96% mineral, making it even tougher and harder than bone!'
    },
    seeAlso: [
      { id: 'taste-buds', title: 'Taste Buds & Tongue', category: 'human-body' },
      { id: 'stomach-digestion', title: 'Stomach & Digestion', category: 'human-body' }
    ]
  },
  {
    id: 'hands-fingers',
    title: 'Hands, Fingers & Touch',
    symbol: '🖐️',
    pronunciation: '(HANDZ and FING-gerz)',
    category: 'human-body',
    tagline: 'Dexterous 27-bone precision instruments equipped with opposable thumbs and fingerprints.',
    analogy: {
      title: 'The Master Inventor’s Universal Robotic Grippers',
      story: 'Your hands are the ultimate multi-tools in nature! Thanks to your opposable thumb, you can grip a heavy baseball bat or delicately hold a tiny sewing needle. Your fingertips have thousands of touch sensors telling you if something is fuzzy like a kitten or cold like an ice cube.',
      emoji: '🎨'
    },
    howItWorks: {
      title: 'How Hands Operate',
      points: [
        '27 Bones in Each Hand: 8 wrist carpals, 5 palm metacarpals, and 14 finger phalanges work together in harmony.',
        'Remote-Control Tendons: There are actually NO muscles inside your fingers! Your fingers are pulled by long tendon strings attached to strong forearm muscles.',
        'Opposable Thumb: Can rotate and press against all four fingers, giving humans unmatched grasping dexterity.'
      ]
    },
    funFacts: [
      'One quarter (25%) of all the bones in your entire body are located in your two hands and wrists!',
      'Your fingertips are so sensitive they can feel a microscopic bump only 1/1000th of a millimeter high.',
      'Koalas and chimpanzees are the only other animals that have unique fingerprints just like humans.'
    ],
    kidWords: [
      { word: 'Opposable', emoji: '👍', meaning: 'Able to rotate and touch all other fingertips for precision grip.' },
      { word: 'Phalanges', emoji: '🦴', meaning: 'The small bones that form the fingers and toes.' },
      { word: 'Dexterity', emoji: '✍️', meaning: 'Skill and swift grace in performing tasks with the hands.' }
    ],
    didYouKnowOrigin: 'The word "Thumb" comes from an ancient root meaning "thick or stout", describing the strongest, most important digit on your hand!',
    microQuiz: {
      question: 'Are there any muscles located directly inside your fingers?',
      options: ['No (Fingers are moved by tendon cords pulled from your forearm!)', 'Yes, hundreds', 'Only in the thumb'],
      correctIndex: 0,
      explanation: 'Your fingers contain zero muscles! They move like puppets pulled by tough tendon strings linked to muscles in your palm and forearm.'
    },
    seeAlso: [
      { id: 'muscles-movement', title: 'Muscles & Movement', category: 'human-body' },
      { id: 'skeleton-bones', title: 'Skeleton & Bones', category: 'human-body' }
    ]
  },
  {
    id: 'immune-system',
    title: 'Immune System & White Blood Cells',
    symbol: '⚔️',
    pronunciation: '(ih-MYOON SIS-tum)',
    category: 'human-body',
    tagline: 'The microscopic superhero defense army protecting your body from germs 24/7.',
    analogy: {
      title: 'The Fortress Defense League & Microscopic Superhero Army',
      story: 'Inside your bloodstream is a fearless army of microscopic security guards called White Blood Cells! When pesky germs (bacteria or viruses) sneak into your body, scout cells sound the alarm, soldier cells gobble up the invaders, and memory cells make special protective shields (antibodies) so you never catch the same illness twice!',
      emoji: '🛡️'
    },
    howItWorks: {
      title: 'The 3 Main Squads of the Immune Army',
      points: [
        'Phagocytes (The Hungry Gobblers): White blood cells that surround, engulf, and dissolve harmful bacteria on sight.',
        'B-Cells (The Shield Blacksmiths): Create billions of Y-shaped antibody keys that lock onto specific germs and tag them for destruction.',
        'Memory T-Cells (The Master Archivists): Remember the exact blueprints of defeated germs so your body can fight them off next time before you even feel sick!'
      ]
    },
    funFacts: [
      'A fever is actually your body’s smart defense tactic: raising your temperature slightly cooks and slows down multiplying germs!',
      'When you get a scratch, white blood cells rush to the scene, forming a clean red scab that acts like a natural biological band-aid.',
      'Washing your hands with soap and warm water for 20 seconds washes away 99% of germs on your skin!'
    ],
    kidWords: [
      { word: 'Antibody', emoji: '🛡️', meaning: 'A specialized Y-shaped protein that locks onto and neutralizes specific germs.' },
      { word: 'Pathogen', emoji: '🦠', meaning: 'A bacterium, virus, or microorganism that can cause disease.' },
      { word: 'Vaccine', emoji: '💉', meaning: 'A harmless training simulator that teaches your immune system how to defeat real germs.' }
    ],
    didYouKnowOrigin: 'The word "Immune" comes from the Latin word "immunis", which originally meant "free from burden or duty" — describing a body that is free and protected from illness!',
    microQuiz: {
      question: 'What do B-cells create to tag and neutralize specific germs in your body?',
      options: ['Y-shaped Antibodies', 'Red blood drops', 'Bone marrow bricks'],
      correctIndex: 0,
      explanation: 'B-cells forge specialized Y-shaped protein antibodies that latch onto germs like custom handcuffs!'
    },
    seeAlso: [
      { id: 'heart-blood', title: 'The Heart & Blood', category: 'human-body' },
      { id: 'human-skin', title: 'Skin & Shield', category: 'human-body' }
    ]
  },
  {
    id: 'human-kidneys',
    title: 'Kidneys & Water Recycling',
    symbol: '💧',
    pronunciation: '(KID-neez)',
    category: 'human-body',
    tagline: 'Twin bean-shaped water filters that clean 50 gallons of blood every single day.',
    analogy: {
      title: 'The High-Tech Eco Water Recycling Plant',
      story: 'Your kidneys are two bean-shaped purification centers tucked near your lower back! They work 24 hours a day filtering every drop of blood in your body, recycling clean water and healthy minerals back into your veins while packaging liquid waste (urine) to be washed away.',
      emoji: '🫘'
    },
    howItWorks: {
      title: 'Microscopic Filtration Magic',
      points: [
        '1 Million Nephrons Each: Each kidney contains over 1,000,000 microscopic filtering units called nephrons.',
        '50 Gallons a Day: Your kidneys clean your entire blood supply over 40 times every single day!',
        'Blood Pressure & Salt Balance: They release hormones that control blood pressure and keep your body’s salt and potassium levels balanced.'
      ]
    },
    funFacts: [
      'Your kidneys filter about half a cup of blood every single minute!',
      'Even though you have two kidneys, a person can live a completely normal, healthy, active life with just one kidney.',
      'Drinking plenty of fresh water helps your kidneys flush out waste easily and keeps your energy high!'
    ],
    kidWords: [
      { word: 'Nephron', emoji: '🔬', meaning: 'The microscopic functional filtering unit inside the kidney.' },
      { word: 'Hydration', emoji: '💧', meaning: 'Supplying water to the body to maintain healthy fluid balance.' },
      { word: 'Bladder', emoji: '🎈', meaning: 'The muscular pouch that stores urine before it is emptied.' }
    ],
    didYouKnowOrigin: 'Kidney beans got their name because they look almost identical in shape and reddish-brown color to human kidneys!',
    microQuiz: {
      question: 'How many filtering nephrons are inside each human kidney?',
      options: ['Over 1,000,000 (One million!)', '10', '100'],
      correctIndex: 0,
      explanation: 'Each kidney contains more than 1 million microscopic nephron filters working continuously!'
    },
    seeAlso: [
      { id: 'heart-blood', title: 'The Heart & Blood', category: 'human-body' },
      { id: 'stomach-digestion', title: 'Stomach & Digestion', category: 'human-body' }
    ]
  },
  {
    id: 'spine-backbone',
    title: 'Spine, Backbone & Posture',
    symbol: '🦴',
    pronunciation: '(SPYN and BAK-bohn)',
    category: 'human-body',
    tagline: 'The 33-bone flexible master pillar protecting your central nerve highway.',
    analogy: {
      title: 'The Flexible Tower of Beads & Armored Cable Highway',
      story: 'Your spine is not one single stiff rod — it is an S-curved stack of 33 interlocking bone rings (vertebrae) separated by soft jelly shock cushions! It lets you bend forward to tie your shoes, twist to catch a ball, and stands tall like a mast while protecting the spinal cord nerve highway inside.',
      emoji: '🗼'
    },
    howItWorks: {
      title: 'The 4 Regions of the Spine',
      points: [
        'Cervical Spine (7 Neck Bones): Supports your 10-pound head and lets you nod and shake your head.',
        'Thoracic Spine (12 Chest Bones): Anchors your rib cage to shield your heart and lungs.',
        'Lumbar Spine (5 Lower Back Bones): Thick, heavy-duty weight-bearing blocks that carry your upper body.',
        'Sacrum & Coccyx (Tailbone): Fused base bones anchoring into your pelvis.'
      ]
    },
    funFacts: [
      'You are actually about 1/2 inch taller in the morning when you wake up because spinal cushions expand with water while you sleep!',
      'The human spine is curved like a gentle "S" to act like a natural spring that absorbs shock when you run or jump.',
      'The spinal cord inside your backbone is about as thick as your index finger and carries billions of messages between your brain and toes.'
    ],
    kidWords: [
      { word: 'Vertebrae', emoji: '🦴', meaning: 'The individual ring-shaped bones that form the spinal column.' },
      { word: 'Cartilage Disc', emoji: '🍩', meaning: 'The spongy jelly cushion between spinal bones that absorbs shock.' },
      { word: 'Posture', emoji: '🧍', meaning: 'The position in which you hold your body upright while standing or sitting.' }
    ],
    didYouKnowOrigin: 'Humans, giraffes, dogs, mice, and blue whales all have exactly 7 cervical vertebrae in their necks!',
    microQuiz: {
      question: 'Why are humans slightly taller in the morning than in the evening?',
      options: ['Spinal jelly discs soak up water and expand overnight while resting', 'Bones grow every night and shrink in sun', 'Gravity stops at night'],
      correctIndex: 0,
      explanation: 'While lying down asleep, gravity is not compressing your spine, allowing your cartilage discs to absorb fluid and expand by about half an inch!'
    },
    seeAlso: [
      { id: 'skeleton-bones', title: 'Skeleton & Bones', category: 'human-body' },
      { id: 'human-brain', title: 'The Human Brain', category: 'human-body' }
    ]
  }
];
