import { EncyclopediaEntry } from '../../types';

export const ANIMALS_ENTRIES: EncyclopediaEntry[] = [
  {
    id: 'tyrannosaurus-rex',
    title: 'Tyrannosaurus Rex (T-Rex)',
    symbol: '🦖',
    pronunciation: '(tie-RAN-oh-SOR-us REKS)',
    category: 'animals-dinosaurs',
    tagline: 'The famous "Tyrant Lizard King" with bone-crushing jaws and sharp senses.',
    analogy: {
      title: 'A School Bus with Giant Steak Knives for Teeth',
      story: 'Imagine an animal as long as a full-size yellow school bus that could run on two powerful legs! Its head was as big as a refrigerator, and each tooth was as long and jagged as a large banana serrated like a steak knife.',
      emoji: '🚌'
    },
    howItWorks: {
      title: 'Super Dinosaur Biology',
      points: [
        'Bone-Crushing Bite: T-Rex had the strongest bite force of any land animal ever known — enough to crush a car!',
        'Eagle-Sharp Vision: Its eyes faced forward like a hawk or human, giving it 3D depth perception to spot prey miles away.',
        'Tiny but Strong Arms: While its arms looked small compared to its 40-foot body, each arm could lift over 400 pounds!'
      ]
    },
    anatomyDiagram: {
      headline: 'Anatomy of a T-Rex',
      parts: [
        { label: 'Massive Skull', desc: '5 feet long with reinforced jaw muscles.' },
        { label: 'Serrated Teeth', desc: 'Up to 12 inches long (including root), replacing themselves when lost.' },
        { label: 'Heavy Tail', desc: 'Acted as a dynamic counterbalance so it didn’t fall forward while running.' },
        { label: 'Three-Toed Feet', desc: 'Huge clawed feet with shock-absorbing pads.' }
      ]
    },
    funFacts: [
      'T-Rex lived about 68 to 66 million years ago during the Late Cretaceous period.',
      'Scientists believe young T-Rex may have hatched with soft, fluffy feathers for warmth!',
      'The largest and most complete T-Rex skeleton ever found is named "Sue" at the Field Museum in Chicago.'
    ],
    kidWords: [
      { word: 'Carnivore', emoji: '🥩', meaning: 'An animal that eats meat.' },
      { word: 'Fossil', emoji: '🦴', meaning: 'Preserved bones or traces of ancient creatures turned to stone.' },
      { word: 'Prehistoric', emoji: '⏳', meaning: 'The ancient time before humans wrote history books.' }
    ],
    didYouKnowOrigin: 'The name Tyrannosaurus comes from Greek "tyrannos" (tyrant/king) and "sauros" (lizard). "Rex" is Latin for "King"!',
    microQuiz: {
      question: 'Why did the T-Rex have such a long, heavy tail?',
      options: ['To balance its massive head and body while moving', 'To brush away flies', 'To store drinking water'],
      correctIndex: 0,
      explanation: 'Its heavy muscular tail worked like a seesaw counterweight to balance its 5-foot skull!'
    },
    handsOnExperiment: {
      title: 'Make a Salt-Dough Dinosaur Fossil',
      materials: ['1 cup flour', '1/2 cup salt', '1/2 cup warm water', 'Toy dinosaur foot or leaf'],
      steps: [
        'Mix flour, salt, and water into a smooth dough ball.',
        'Flatten a small disc of dough onto parchment paper.',
        'Press your toy dinosaur foot firmly into the dough to leave a deep footprint.',
        'Let it air dry for 2 days until it hardens like real fossil stone!'
      ],
      explanation: 'Real fossils form when dinosaur tracks are covered by mud and mineral water over millions of years!',
      emoji: '🧪'
    },
    kidTongueTwisterOrRhyme: 'Tiny T-Rex tried two tall trees, tasting tasty prehistoric treats with ease!',
    seeAlso: [
      { id: 'triceratops', title: 'Triceratops', category: 'animals-dinosaurs' },
      { id: 'earth-soil', title: 'Earth & Rocks', category: 'earth-elements' }
    ]
  },
  {
    id: 'blue-whale',
    title: 'Blue Whale',
    symbol: '🐋',
    pronunciation: '(bloo WAYL)',
    category: 'animals-dinosaurs',
    tagline: 'The biggest animal to ever live on planet Earth — even bigger than any dinosaur!',
    analogy: {
      title: 'A Submarine That Sings Through Oceans',
      story: 'Picture an ocean giant longer than three basketball courts placed end-to-end! Its tongue weighs as much as an entire adult elephant, and its heart is the size of a bumper car that beats so loudly you could hear it from 2 miles away underwater.',
      emoji: '🚢'
    },
    howItWorks: {
      title: 'How the Blue Whale Survives and Thrives',
      points: [
        'Baleen Filter Feeder: Instead of teeth, it has giant comb-like bristles (baleen) that gulp huge mouthfuls of ocean water and filter out tiny shrimp called krill.',
        'Mammal Breathing: Whales breathe air just like us through blowholes on top of their head, blasting water vapor 30 feet into the sky!',
        'Low-Pitch Songs: They make deep humming calls that travel hundreds of miles across ocean basins to talk with other whales.'
      ]
    },
    funFacts: [
      'A blue whale calf drinks about 100 gallons of its mother’s rich milk every single day!',
      'An adult blue whale can eat 4 to 8 tons of tiny krill in just one day.',
      'Even though it is the biggest creature in history, its throat is only the size of a grapefruit — it cannot swallow humans!'
    ],
    kidWords: [
      { word: 'Krill', emoji: '🦐', meaning: 'Tiny, glowing pink shrimp-like creatures of the open ocean.' },
      { word: 'Baleen', emoji: '🪮', meaning: 'Fringed keratin plates in the whale’s mouth that filter ocean food.' },
      { word: 'Blowhole', emoji: '💨', meaning: 'Nose nostrils on the top of a whale’s head used for breathing air.' }
    ],
    didYouKnowOrigin: 'Blue whales look mottled blue-gray above water, but under the bright sunlight of the sea, they appear a glowing, electric sapphire blue!',
    microQuiz: {
      question: 'Is a Blue Whale bigger than the largest dinosaur that ever lived?',
      options: ['Yes, it is the largest animal ever in Earth history!', 'No, T-Rex was bigger', 'They are the exact same size'],
      correctIndex: 0,
      explanation: 'Blue whales can reach up to 100 feet long and 200 tons — heavier than any dinosaur ever found!'
    },
    handsOnExperiment: {
      title: 'Baleen Filter Demonstration',
      materials: ['A bowl of water', 'A handful of dried oregano or pepper flakes (representing krill)', 'A fine comb or slotted spoon (representing baleen)'],
      steps: [
        'Scatter pepper flakes into the bowl of water.',
        'Glide your fine-toothed comb through the water.',
        'Watch how water passes through freely while all the flakes get trapped on the bristles!'
      ],
      explanation: 'This is exactly how a blue whale eats millions of tiny krill without drinking gallons of salty water!',
      emoji: '🪮'
    },
    kidTongueTwisterOrRhyme: 'Big blue brave whales blow bright beautiful bubbles below broad blue bays!',
    seeAlso: [
      { id: 'world-oceans', title: 'World Oceans', category: 'countries-world' },
      { id: 'water-element', title: 'Water (H2O)', category: 'earth-elements' }
    ]
  },
  {
    id: 'honeybees',
    title: 'Honeybees',
    symbol: '🐝',
    pronunciation: '(HUN-ee-beez)',
    category: 'animals-dinosaurs',
    tagline: 'Fuzzy insect superheroes that pollinate flowers and make golden honey.',
    analogy: {
      title: 'The Flying Pollen Delivery Team & Hexagon Bakers',
      story: 'Think of a beehive like a bustling, joyful airport city! Thousands of sister bees work together: some fly out as scouts looking for fragrant flowers, some build strong six-sided hexagon wax rooms (honeycombs), and some do a special "waggle dance" to give exact GPS directions to sweet nectar!',
      emoji: '🍯'
    },
    howItWorks: {
      title: 'The Superpowers of Honeybees',
      points: [
        'Waggle Dance Language: When a bee finds a field of flowers, it flies back to the hive and dances in a figure-8, pointing toward the angle of the sun to tell the others where to go!',
        'Pollination Magic: As bees collect yellow pollen powder on their fuzzy legs, they dust other flowers, helping apples, strawberries, and almonds grow.',
        'Hexagon Architecture: Bees build their honeycombs in hexagons because it uses the least amount of wax while holding the most honey with zero wasted gaps!'
      ]
    },
    funFacts: [
      'To make just one jar of honey, bees visit over 2 million flowers and fly 55,000 miles!',
      'Honey is the only food made by insects that humans eat, and it never spoils — archaeologists found 3,000-year-old honey in Egyptian tombs that is still edible!',
      'Honeybees have 5 eyes: 2 big compound eyes and 3 tiny sensor eyes on the top of their head.'
    ],
    kidWords: [
      { word: 'Pollination', emoji: '🌸', meaning: 'Carrying pollen from flower to flower so plants can make fruit and seeds.' },
      { word: 'Nectar', emoji: '💧', meaning: 'Sweet liquid inside flowers that bees turn into honey.' },
      { word: 'Hive', emoji: '🛖', meaning: 'The cozy home and colony where thousands of bees live together.' }
    ],
    didYouKnowOrigin: 'A queen bee can lay up to 2,000 eggs in a single day during spring, keeping the entire colony thriving!',
    microQuiz: {
      question: 'How do honeybees communicate the location of sweet flowers to their hive mates?',
      options: ['By doing a special waggle dance', 'By barking like puppies', 'By sending text messages'],
      correctIndex: 0,
      explanation: 'Bees perform the famous "waggle dance" to communicate the angle of the sun and distance of flower fields!'
    },
    handsOnExperiment: {
      title: 'Bee Pollen Cup Transfer Game',
      materials: ['2 paper cups', 'A cup of dried cheese powder or turmeric', 'A fuzzy cotton ball or pom-pom on a toothpick'],
      steps: [
        'Place powder in Cup 1 (Flower A). Leave Cup 2 empty (Flower B).',
        'Touch the fuzzy cotton ball to Cup 1 so yellow powder sticks to its fibers.',
        'Fly your cotton ball bee over to Cup 2 and press it gently.',
        'Look at Cup 2: You just pollinated a flower!'
      ],
      explanation: 'Pollen grains stick to the static charge and fuzzy hairs of bees just like the powder sticks to your cotton ball!',
      emoji: '🌼'
    },
    kidTongueTwisterOrRhyme: 'Busy buzzing bees bring bright buttercups bountiful blooming bouquets!',
    seeAlso: [
      { id: 'letter-b', title: 'Letter B', category: 'alphabets' },
      { id: 'trees-element', title: 'Trees & Photosynthesis', category: 'earth-elements' }
    ]
  },
  {
    id: 'chameleon',
    title: 'Chameleon',
    symbol: '🦎',
    pronunciation: '(kuh-MEE-lee-un)',
    category: 'animals-dinosaurs',
    tagline: 'The magical color-changing reptile with independent 360-degree eyes and a super-spring tongue.',
    analogy: {
      title: 'The Camouflage Artist with High-Speed Grappling Tongue',
      story: 'A chameleon is like a superhero in a glowing chameleon suit! It has two telescope eyes that can look in opposite directions at the exact same time, mitten-like feet that grip tree branches like pliers, and a tongue that shoots out like a party blower in a fraction of a second!',
      emoji: '🎨'
    },
    howItWorks: {
      title: 'Amazing Chameleon Adaptations',
      points: [
        'Nanocrystal Color Shift: Chameleons don’t change color by painting their skin — they have tiny microscopic crystals in their cells that reflect light differently when they are relaxed, excited, or warm!',
        'Dual-Radar Eyes: One eye can look up at a predator bird while the other eye looks down at a juicy cricket.',
        'Elastic Tongue Launcher: Its tongue accelerates from 0 to 60 miles per hour in 1/100th of a second with a sticky suction tip.'
      ]
    },
    funFacts: [
      'Chameleons change color mostly to communicate emotions (like showing they are angry, happy, or looking for friends) and to regulate their body temperature!',
      'Their tongue can be twice as long as their entire body.',
      'Their prehensile tail acts like a fifth hand that curls tightly around branches so they never fall.'
    ],
    kidWords: [
      { word: 'Camouflage', emoji: '🌿', meaning: 'Blending into surroundings to stay hidden from view.' },
      { word: 'Prehensile', emoji: '🐒', meaning: 'Capable of grasping and wrapping tightly around objects.' },
      { word: 'Reptile', emoji: '🦎', meaning: 'A cold-blooded animal with scales that lays eggs.' }
    ],
    didYouKnowOrigin: 'Almost half of all the world’s chameleon species live on the island of Madagascar off the east coast of Africa!',
    microQuiz: {
      question: 'Can a chameleon move its two eyes in two completely different directions at once?',
      options: ['Yes! They move independently for 360-degree vision', 'No, they only look straight forward', 'They only have one eye'],
      correctIndex: 0,
      explanation: 'Each eye can swivel and focus independently, giving the chameleon a complete 360-degree view of its jungle!'
    },
    seeAlso: [
      { id: 'rainbows', title: 'Rainbows & Light', category: 'earth-elements' },
      { id: 'five-senses', title: 'The 5 Senses', category: 'human-body' }
    ]
  },
  {
    id: 'cheetah',
    title: 'Cheetah',
    symbol: '🐆',
    pronunciation: '(CHEE-tuh)',
    category: 'animals-dinosaurs',
    tagline: 'The fastest land animal on Earth, sprinting up to 70 miles per hour!',
    analogy: {
      title: 'A Living Formula-1 Racing Car',
      story: 'Cheetahs are built for pure acceleration! Just like a high-performance sports car, a cheetah has lightweight aerodynamic bones, non-retractable claws that act like soccer cleats on the savannah grass, and a long tail that works like a ship’s rudder to make hairpin turns at top speed.',
      emoji: '🏎️'
    },
    howItWorks: {
      title: 'Speed Engineering of a Cheetah',
      points: [
        'Explosive Acceleration: Goes from 0 to 60 mph in just 3 seconds — faster than most luxury sports cars!',
        'Flexible Spine: Its spine coils and uncoils like a giant spring, letting it take 25-foot strides in a single bound.',
        'Tear-Mark Sunglasses: The black stripes under its eyes absorb bright sunlight so glare doesn’t blind it while hunting.'
      ]
    },
    funFacts: [
      'While sprinting at top speed, cheetahs spend more time flying through the air between strides than touching the ground!',
      'Unlike lions, cheetahs cannot roar — instead, they make sweet purring, chirping, and meowing sounds like house cats.',
      'A cheetah sprint usually lasts only 20 to 30 seconds before it needs to rest and cool down.'
    ],
    kidWords: [
      { word: 'Savannah', emoji: '🌾', meaning: 'A vast tropical grassland with scattered trees.' },
      { word: 'Acceleration', emoji: '⚡', meaning: 'How quickly something can increase its speed.' },
      { word: 'Stride', emoji: '👟', meaning: 'The long step or leap taken while running.' }
    ],
    didYouKnowOrigin: 'The name Cheetah comes from the Hindi word "Chita", which means "spotted one"!',
    microQuiz: {
      question: 'What do the black "tear lines" under a cheetah’s eyes do?',
      options: ['Block bright sun glare like natural sunglasses', 'Help them cry', 'Help them swim'],
      correctIndex: 0,
      explanation: 'The dark lines absorb bright sunlight, reducing glare so the cheetah can keep its eyes locked on its target!'
    },
    seeAlso: [
      { id: 'seven-continents', title: 'The 7 Continents', category: 'countries-world' },
      { id: 'letter-c', title: 'Letter C', category: 'alphabets' }
    ]
  },
  {
    id: 'owls',
    title: 'Owls',
    symbol: '🦉',
    pronunciation: '(OWLZ)',
    category: 'animals-dinosaurs',
    tagline: 'Silent nighttime flyers with incredible eyesight and super-flexible necks.',
    analogy: {
      title: 'Night-Vision Pilots with Stealth Velvet Wings',
      story: 'Owls are the masters of the moonlit forest! Their feathers have special comb-fringed velvet edges that silence the rushing air so they fly in complete, ghostly silence. While you sleep, an owl can hear a tiny field mouse scurrying under a foot of snow!',
      emoji: '🌙'
    },
    howItWorks: {
      title: 'Super Senses of the Owl',
      points: [
        '270-Degree Neck Rotation: Owls cannot roll their eyes in their sockets, so nature gave them 14 neck bones (humans only have 7!) allowing them to turn their head almost all the way around.',
        'Facial Feather Dish: The round circle of feathers on an owl’s face acts like a satellite dish, channeling quiet sounds straight into its ears.',
        'Silent Flight Feathers: Fringed edges muffle air turbulence so prey never hears them swooping in.'
      ]
    },
    funFacts: [
      'A group of owls is called a "Parliament"!',
      'Barn owls can catch prey in pitch-black darkness using only their sense of hearing.',
      'Elf owls in the desert are so tiny they are the size of a sparrow and nest inside giant Saguaro cactus holes.'
    ],
    kidWords: [
      { word: 'Nocturnal', emoji: '🌌', meaning: 'Active during the night and sleeping during the day.' },
      { word: 'Talons', emoji: '🦅', meaning: 'Sharp, curved claws used by hunting birds to catch food.' },
      { word: 'Pellet', emoji: '🪨', meaning: 'A small ball of undigested fur and seeds an owl coughs up after eating.' }
    ],
    didYouKnowOrigin: 'In ancient Greek mythology, the owl was the sacred companion of Athena, the goddess of wisdom — which is why we call owls "wise" today!',
    microQuiz: {
      question: 'How far can an owl turn its head without moving its body?',
      options: ['270 degrees (three-quarters of a circle)', 'Only 45 degrees', 'A full 360 spin without stopping'],
      correctIndex: 0,
      explanation: 'Owls can turn their heads 270 degrees left and right thanks to 14 specialized neck vertebrae!'
    },
    seeAlso: [
      { id: 'five-senses', title: 'The 5 Senses', category: 'human-body' },
      { id: 'the-moon', title: 'The Moon', category: 'solar-system' }
    ]
  },
  {
    id: 'butterflies',
    title: 'Butterflies & Metamorphosis',
    symbol: '🦋',
    pronunciation: '(BUT-er-flyz)',
    category: 'animals-dinosaurs',
    tagline: 'The miraculous transformation from a tiny egg to a crawling caterpillar and flying stained-glass beauty.',
    analogy: {
      title: 'The Ultimate Magical Costume Change',
      story: 'Imagine going to sleep in a cozy sleeping bag (a chrysalis) and waking up with glowing, lightweight stained-glass wings that let you glide above meadows! That is the wonder of complete metamorphosis.',
      emoji: '🐛'
    },
    howItWorks: {
      title: 'The 4 Magical Stages of Metamorphosis',
      points: [
        'Stage 1: Egg — A tiny pearl glued safely under a green leaf.',
        'Stage 2: Caterpillar (Larva) — A hungry eating machine that grows and sheds its skin several times.',
        'Stage 3: Chrysalis (Pupa) — A jade-like shell where the caterpillar reorganizes into butterfly form.',
        'Stage 4: Adult Butterfly — Emerges, pumps fluid into its wings to dry them in the sun, and takes flight!'
      ]
    },
    funFacts: [
      'Butterflies taste sweet nectar using taste sensors on their feet!',
      'Monarch butterflies fly over 2,500 miles every autumn from Canada all the way to warm mountain forests in Mexico.',
      'Butterfly wings are actually clear — the colors you see are thousands of microscopic shimmering scales reflecting light.'
    ],
    kidWords: [
      { word: 'Metamorphosis', emoji: '✨', meaning: 'A profound change of form and body during an insect’s life.' },
      { word: 'Chrysalis', emoji: '🍃', meaning: 'The hard pupa case inside which a caterpillar transforms.' },
      { word: 'Proboscis', emoji: '🥤', meaning: 'A long straw-like mouth part used to sip nectar from flowers.' }
    ],
    didYouKnowOrigin: 'Some butterflies have large circular patterns on their wings called "eyespots" that look like giant owl eyes to scare hungry birds away!',
    microQuiz: {
      question: 'What body part do butterflies use to taste their food?',
      options: ['Their feet', 'Their antennae', 'Their wings'],
      correctIndex: 0,
      explanation: 'Butterflies have taste sensors on their feet to know immediately if a leaf is safe for laying eggs or good for feeding!'
    },
    seeAlso: [
      { id: 'honeybees', title: 'Honeybees', category: 'animals-dinosaurs' },
      { id: 'rainbows', title: 'Rainbows', category: 'earth-elements' }
    ]
  },
  {
    id: 'octopus',
    title: 'Octopus',
    symbol: '🐙',
    pronunciation: '(OK-tuh-pus)',
    category: 'animals-dinosaurs',
    tagline: 'The eight-armed ocean shapeshifter with three hearts, blue blood, and nine brains!',
    analogy: {
      title: 'An Alien Genius with Liquid Geometry',
      story: 'An octopus is like a friendly sea creature made of pure liquid intelligence! Because it has no bones at all, an octopus as big as a bicycle can squeeze through a tiny opening the size of a coin! Its eight arms can touch, taste, and solve puzzles independently.',
      emoji: '🌊'
    },
    howItWorks: {
      title: 'Bizarre Octopus Anatomy',
      points: [
        '9 Brains in 1 Body: One central donut-shaped brain and mini-brains inside each of its 8 arms so arms can think and react on their own!',
        '3 Hearts & Blue Blood: Two hearts pump blood to the gills, while the third pumps blue copper-rich blood to the rest of the body.',
        'Ink Jet Cloak: When startled, it squirts a dark cloud of melanin ink that blinds predators and numbs their sense of smell while the octopus jets away.'
      ]
    },
    funFacts: [
      'Octopuses can change both the color AND 3D texture of their skin in 200 milliseconds to look exactly like bumpy coral rocks!',
      'They are famous for opening screw-top jars, navigating mazes, and using coconut shells as portable protective armor.',
      'Their suckers are so sensitive they can taste chemicals in the water just by touching.'
    ],
    kidWords: [
      { word: 'Cephalopod', emoji: '🦑', meaning: 'An ocean mollusk with tentacles attached directly to its head.' },
      { word: 'Tentacles', emoji: '🐙', meaning: 'Flexible, muscular limbs covered in suction cups.' },
      { word: 'Invertebrate', emoji: '🪼', meaning: 'An animal that has no backbone or skeleton inside.' }
    ],
    didYouKnowOrigin: 'The word "Octopus" comes from Greek "octo" (eight) and "pous" (foot) — literally "Eight-Footed"!',
    microQuiz: {
      question: 'How many hearts does an octopus have?',
      options: ['3 hearts', '1 heart', '8 hearts'],
      correctIndex: 0,
      explanation: 'An octopus has 3 hearts and blue copper-based blood!'
    },
    seeAlso: [
      { id: 'world-oceans', title: 'World Oceans', category: 'countries-world' },
      { id: 'chameleon', title: 'Chameleon', category: 'animals-dinosaurs' }
    ]
  },
  {
    id: 'triceratops',
    title: 'Triceratops',
    symbol: '🦏',
    pronunciation: '(try-SER-uh-tops)',
    category: 'animals-dinosaurs',
    tagline: 'The mighty three-horned herbivore with a giant solid bone shield frill.',
    analogy: {
      title: 'A Giant Armored Plant-Powered Tank',
      story: 'If T-Rex was a sports car predator, Triceratops was a heavy armored tank! It had two 3-foot brow horns sharp enough to fend off attacking predators, a tough beak to clip through palm fronds, and a thick neck frill made of solid bone that protected its shoulders like a knight’s shield.',
      emoji: '🛡️'
    },
    howItWorks: {
      title: 'Defensive Engineering',
      points: [
        'Three Horn Defense: One short nose horn and two long curving horns above its eyes.',
        'Parrot-Like Beak: Strong keratin beak that sheared through tough, fibrous prehistoric cycads and ferns.',
        'Herding Power: Triceratops lived and traveled in family groups, circling their young to protect them from predators.'
      ]
    },
    funFacts: [
      'The skull of a Triceratops could be over 7 feet long — as big as a queen-size mattress!',
      'Triceratops had up to 800 teeth packed into tight battery rows that replaced themselves continuously as they ground plants.',
      'They grew up to 30 feet long and weighed as much as 12 tons (equal to 2 modern elephants!).'
    ],
    kidWords: [
      { word: 'Herbivore', emoji: '🌿', meaning: 'An animal that eats only plants, leaves, and fruits.' },
      { word: 'Frill', emoji: '🛡️', meaning: 'The large, fan-like bone collar shielding a dinosaur’s neck.' },
      { word: 'Beak', emoji: '🦜', meaning: 'A hard, pointed mouth part without lips.' }
    ],
    didYouKnowOrigin: 'Triceratops means "Three-Horned Face" in Greek ("tri" = 3, "keras" = horn, "ops" = face)!',
    microQuiz: {
      question: 'Did Triceratops eat meat or plants?',
      options: ['Plants (Herbivore)', 'Meat (Carnivore)', 'Insects only'],
      correctIndex: 0,
      explanation: 'Triceratops was a gentle plant-eating giant that used its powerful beak to eat ferns and shrubs!'
    },
    seeAlso: [
      { id: 'tyrannosaurus-rex', title: 'T-Rex', category: 'animals-dinosaurs' },
      { id: 'number-three', title: 'Number 3', category: 'numbers' }
    ]
  }
];
