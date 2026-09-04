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
  },
  {
    id: 'african-elephant',
    title: 'African Elephant',
    symbol: '🐘',
    pronunciation: '(AF-rih-kuhn EL-uh-fuhnt)',
    category: 'animals-dinosaurs',
    tagline: 'The magnificent giant of the savanna with a multi-tool trunk and giant cooling ears.',
    analogy: {
      title: 'A Living Swiss Army Knife on Four Legs',
      story: 'An elephant’s trunk is like a super-powered hose, vacuum, hand, and trumpet all in one! With over 40,000 muscles and zero bones, it can gently pluck a single peanut from the ground or rip down a sturdy tree branch to snack on leaves.',
      emoji: '🎺'
    },
    howItWorks: {
      title: 'Amazing Elephant Adaptations',
      points: [
        'Super Trunk: Used for breathing, smelling water miles away, drinking 50 gallons a day, and greeting family with gentle trunk hugs.',
        'Radiator Ears: Huge ears shaped like the continent of Africa filled with blood vessels that pump heat away to keep the elephant cool under the hot savanna sun.',
        'Infrasonic Communication: They speak in deep, low-frequency rumbles that travel through the ground for miles, felt by other elephants through their sensitive feet!'
      ]
    },
    anatomyDiagram: {
      headline: 'Anatomy of an Elephant',
      parts: [
        { label: 'Muscular Trunk', desc: '40,000 individual muscles with two finger-like grippers at the tip.' },
        { label: 'Ivory Tusks', desc: 'Actually elongated incisor teeth used for digging water wells and stripping bark.' },
        { label: 'Padded Feet', desc: 'Spongy shock-absorbing pads that let a 6-ton giant walk silently like a ghost.' }
      ]
    },
    funFacts: [
      'Elephants are the largest living land animals on planet Earth today.',
      'They have phenomenal memories, remembering migration trails, water holes, and friends for decades!',
      'Baby elephants often suck on the tip of their own trunks for comfort, just like human toddlers suck their thumbs.'
    ],
    kidWords: [
      { word: 'Savanna', emoji: '🌾', meaning: 'A warm grassland with scattered trees where wild animals roam.' },
      { word: 'Matriarch', emoji: '👑', meaning: 'The wise, oldest female elephant who leads and guides the entire herd.' },
      { word: 'Infrasound', emoji: '📡', meaning: 'Deep sound waves below human hearing that travel through the earth.' }
    ],
    didYouKnowOrigin: 'The word "Elephant" comes from the ancient Greek word "elephas", which meant both ivory and elephant!',
    microQuiz: {
      question: 'How many bones are inside an elephant’s flexible trunk?',
      options: ['Zero bones (It is made entirely of muscles!)', '206 bones', '10 long bones'],
      correctIndex: 0,
      explanation: 'An elephant’s trunk has zero bones! It is made of over 40,000 interlocking muscles that give it infinite flexibility.'
    },
    handsOnExperiment: {
      title: 'The Trunk Paper-Pickup Challenge',
      materials: ['Two fingers (thumb & pointer)', 'A piece of paper', 'A pencil'],
      steps: [
        'Place a tiny piece of paper flat on the table.',
        'Try picking it up using only the very tips of your thumb and index finger, mimicking an elephant’s trunk "fingers"!',
        'Now try gripping a pencil without bending your wrist.'
      ],
      explanation: 'African elephants have two sensitive muscular "fingers" at the tip of their trunk that can manipulate tiny objects with surgical precision!',
      emoji: '🐘'
    },
    kidTongueTwisterOrRhyme: 'Enormous eager elephants elegantly eat endless evergreen leaves!',
    seeAlso: [
      { id: 'lion', title: 'Lion', category: 'animals-dinosaurs' },
      { id: 'giraffe', title: 'Giraffe', category: 'animals-dinosaurs' }
    ]
  },
  {
    id: 'lion',
    title: 'Lion (King of the Savanna)',
    symbol: '🦁',
    pronunciation: '(LY-uhn)',
    category: 'animals-dinosaurs',
    tagline: 'The magnificent big cat with a golden mane and a roar that shakes the earth for 5 miles.',
    analogy: {
      title: 'The Royal Family Leader of the Golden Grasslands',
      story: 'Imagine a golden big cat with night-vision eyes, cushioned paws, and a majestic fur crown (mane) protecting its neck! Unlike other cats that live alone, lions live in cooperative family teams called "prides" where everyone works together to hunt, play, and protect the cubs.',
      emoji: '👑'
    },
    howItWorks: {
      title: 'Lion Pride Powers',
      points: [
        'Sonic Roar: A lion’s throat is built with square vocal cords that produce a deep, rumbling 114-decibel roar heard 5 miles away to claim their territory.',
        'Night-Vision Eyes: Special reflective layers behind their eyes (tapetum lucidum) make them 6 times better at seeing in the dark than humans.',
        'Retractable Claws: Sharp curving claws stay safely tucked inside soft velvet paw pockets when walking, so they stay razor-sharp for running.'
      ]
    },
    funFacts: [
      'A lion can sleep up to 20 hours a day to conserve energy for explosive sprints!',
      'Female lions (lionesses) do about 85% to 90% of the pride’s hunting through brilliant teamwork.',
      'Darker manes on male lions indicate that the lion is older, stronger, and well-fed.'
    ],
    kidWords: [
      { word: 'Pride', emoji: '👨‍👩‍👧‍👦', meaning: 'A family group of lions that live, hunt, and rest together.' },
      { word: 'Mane', emoji: '🦁', meaning: 'The thick, magnificent ring of fur around a male lion’s neck and head.' },
      { word: 'Nocturnal', emoji: '🌙', meaning: 'Active mainly during the cool hours of the night.' }
    ],
    didYouKnowOrigin: 'Lions have been called the "King of Beasts" for thousands of years because of their fearless courage, regal posture, and thunderous roar!',
    microQuiz: {
      question: 'How far away can a lion’s powerful roar be heard across the savanna?',
      options: ['Up to 5 miles away', 'Only across the room', '100 feet'],
      correctIndex: 0,
      explanation: 'A lion’s roar is so loud (114 decibels) that it can be heard by animals and humans 5 miles away!'
    },
    kidTongueTwisterOrRhyme: 'Little lovely lion cubs leap lightly laughing on the lawn!',
    seeAlso: [
      { id: 'african-elephant', title: 'African Elephant', category: 'animals-dinosaurs' },
      { id: 'cheetah', title: 'Cheetah', category: 'animals-dinosaurs' }
    ]
  },
  {
    id: 'emperor-penguin',
    title: 'Emperor Penguin',
    symbol: '🐧',
    pronunciation: '(EM-per-er PENG-gwin)',
    category: 'animals-dinosaurs',
    tagline: 'The brave tuxedo diver that survives howling Antarctic blizzards through teamwork.',
    analogy: {
      title: 'An Underwater Rocket in a Formal Tuxedo',
      story: 'On land, an emperor penguin looks like a polite little gentleman waddling across the snow. But the second it dives into the icy ocean, it transforms into a sleek, torpedo-fast swimmer flying underwater with stiff wing flippers faster than Olympic athletes!',
      emoji: '❄️'
    },
    howItWorks: {
      title: 'Antarctic Survival Engineering',
      points: [
        'The Great Giant Huddle: Thousands of penguin dads huddle tightly together in -50°F blizzards, continuously taking turns shuffling from the freezing outer edge to the warm toasty center!',
        'Brood Pouch: Dads balance a single precious egg on top of their insulated feet under a warm feather pouch without eating for 2 whole months.',
        'Tobogganing: When walking is too slow, penguins flop onto their slick bellies and paddle with their feet to zoom across the ice like sleds!'
      ]
    },
    funFacts: [
      'Emperor penguins are the tallest and heaviest of all 18 penguin species, standing nearly 4 feet tall!',
      'They can dive over 1,700 feet deep into the freezing ocean and hold their breath for more than 20 minutes.',
      'Their dense feathers are waterproof and trap a blanket of warm air right next to their skin.'
    ],
    kidWords: [
      { word: 'Tobogganing', emoji: '🛷', meaning: 'Sliding forward across snow or ice on the belly like a sled.' },
      { word: 'Colony', emoji: '👥', meaning: 'A large gathering of birds or animals living and nesting together.' },
      { word: 'Insulation', emoji: '🧥', meaning: 'A protective layer of fat or feathers that traps body heat.' }
    ],
    didYouKnowOrigin: 'Penguins are named "Emperor" because they are the majestic kings of the frozen continent of Antarctica!',
    microQuiz: {
      question: 'How do penguin fathers keep their eggs from freezing on the Antarctic ice?',
      options: ['They balance the egg on their feet under a warm belly flap', 'They bury it in deep snow', 'They put it inside a tree nest'],
      correctIndex: 0,
      explanation: 'Penguin dads hold the egg gently on their feet so it never touches the freezing ice, covered by a warm feathered belly pouch!'
    },
    seeAlso: [
      { id: 'antarctica', title: 'Antarctica', category: 'countries-world' },
      { id: 'blue-whale', title: 'Blue Whale', category: 'animals-dinosaurs' }
    ]
  },
  {
    id: 'giant-panda',
    title: 'Giant Panda',
    symbol: '🐼',
    pronunciation: '(JY-uhnt PAN-duh)',
    category: 'animals-dinosaurs',
    tagline: 'The beloved black-and-white bamboo bear from the misty mountain forests of China.',
    analogy: {
      title: 'The Peaceful Bamboo Cruncher in a Black-and-White Sweater',
      story: 'Picture a cuddly, gentle bear wearing black earmuffs, black sunglasses around its eyes, and a cozy white sweater! Pandas spend nearly 12 hours a day happily sitting cross-legged in misty bamboo groves, munching crunchy green stalks like giant celery.',
      emoji: '🎋'
    },
    howItWorks: {
      title: 'Unique Panda Biology',
      points: [
        'The Sixth "Thumb": Pandas have a special enlarged wrist bone that acts like a thumb, allowing them to grasp slippery bamboo stalks with dexterity.',
        'Tough Jaw Muscles: Powerful jaw muscles and broad flat molars crush fibrous woody bamboo stalks with ease.',
        'Camouflage Pattern: Their white fur helps them blend into snowy mountain slopes, while black limbs hide them in shady bamboo groves.'
      ]
    },
    funFacts: [
      'A newborn panda cub is pink, hairless, and tiny — weighing only about 3 to 5 ounces (as light as a stick of butter)!',
      'An adult panda can eat up to 30 to 80 pounds of bamboo every single day.',
      'Pandas are superb tree climbers and surprisingly strong swimmers despite their round shape.'
    ],
    kidWords: [
      { word: 'Bamboo', emoji: '🎋', meaning: 'A fast-growing, woody evergreen plant in the grass family.' },
      { word: 'Pseudo-Thumb', emoji: '👍', meaning: 'A modified wrist bone that acts like a sixth grasping finger.' },
      { word: 'Habitat', emoji: '🏞️', meaning: 'The natural home or environment where an animal lives.' }
    ],
    didYouKnowOrigin: 'In Chinese, the giant panda is called "Dà Xióngmāo" (大熊猫), which translates directly to "Giant Bear Cat" because of its cat-like vertical pupil slits!',
    microQuiz: {
      question: 'What is a newborn panda cub roughly the size and weight of?',
      options: ['A stick of butter (3 to 5 ounces)', 'A full-grown dog', 'A watermelon'],
      correctIndex: 0,
      explanation: 'Panda cubs are born incredibly tiny — only about 1/900th the size of their mother, weighing about as much as a stick of butter!'
    },
    seeAlso: [
      { id: 'great-wall-china', title: 'The Great Wall of China', category: 'countries-world' },
      { id: 'honeybee', title: 'Honeybee', category: 'animals-dinosaurs' }
    ]
  },
  {
    id: 'dolphin',
    title: 'Bottlenose Dolphin',
    symbol: '🐬',
    pronunciation: '(DOL-fin)',
    category: 'animals-dinosaurs',
    tagline: 'The playful, super-smart ocean mammal that clicks, whistles, and leaps through waves.',
    analogy: {
      title: 'The Ocean’s Acrobatic Chatterbox',
      story: 'Dolphins are not fish — they are warm-blooded ocean mammals that breathe fresh air, nurse their babies, and love to solve puzzles! They talk to each other using special whistles, give each other unique "names," and surf the bow waves of boats just for the pure fun of it.',
      emoji: '🌊'
    },
    howItWorks: {
      title: 'Dolphin Superpowers',
      points: [
        'Echolocation Sonar: They send out clicks from their forehead (melon) and listen to returning echoes to "see" fish hiding in dark or murky water.',
        'Signature Whistles: Every dolphin creates a unique whistle melody in childhood that acts like its own personal name when calling friends!',
        'Half-Brain Sleep: When sleeping, only one half of a dolphin’s brain rests at a time while the other half stays awake to swim up for air.'
      ]
    },
    funFacts: [
      'Dolphins can leap more than 15 to 20 feet out of the ocean water into the air!',
      'They love to make underwater bubble rings with their blowholes and play catch with them.',
      'Dolphins have been known to rescue lost swimmers and protect them from ocean sharks.'
    ],
    kidWords: [
      { word: 'Echolocation', emoji: '📡', meaning: 'Using sound wave echoes to locate and identify distant objects.' },
      { word: 'Pod', emoji: '🐬', meaning: 'A friendly group or family school of dolphins swimming together.' },
      { word: 'Melon', emoji: '🍈', meaning: 'The fatty, rounded organ in a dolphin’s forehead that focuses sound clicks.' }
    ],
    didYouKnowOrigin: 'The name "Dolphin" comes from ancient Greek "delphis", related to "delphys" (womb), recognizing that dolphins are womb-bearing mammals rather than egg-laying fish!',
    microQuiz: {
      question: 'How do dolphins sleep without drowning in the ocean?',
      options: ['One half of their brain sleeps while the other half stays awake to breathe', 'They sleep on the beach', 'They hold their breath for 24 hours'],
      correctIndex: 0,
      explanation: 'Dolphins rest one brain hemisphere at a time, keeping one eye open so they can safely swim and surface for fresh air!'
    },
    seeAlso: [
      { id: 'blue-whale', title: 'Blue Whale', category: 'animals-dinosaurs' },
      { id: 'world-oceans', title: 'World Oceans', category: 'countries-world' }
    ]
  },
  {
    id: 'kangaroo',
    title: 'Kangaroo',
    symbol: '🦘',
    pronunciation: '(kang-guh-ROO)',
    category: 'animals-dinosaurs',
    tagline: 'The spring-powered Australian marsupial with a cozy baby pocket pouch.',
    analogy: {
      title: 'A Bouncing Trampoline with a Built-In Baby Backpack',
      story: 'A kangaroo’s legs are like powerful metal springs! Instead of walking, it bounces effortlessly across the Australian outback at 35 miles per hour, while mama kangaroo carries her cute baby "joey" safely inside her warm, furry front tummy pouch.',
      emoji: '🦘'
    },
    howItWorks: {
      title: 'Bouncing Biomechanics',
      points: [
        'Tendon Springs: Giant elastic tendons in their hind legs store energy every time they land, launching them forward like a bouncy pogo stick.',
        'Tripod Tail: A heavy, muscular tail acts like a third leg for balance when standing and a powerful rudder when hopping.',
        'Marsupial Pouch: A warm pocket where tiny newborn joeys grow and nurse until they are big enough to jump out into the sunshine.'
      ]
    },
    funFacts: [
      'A single hop of a Red Kangaroo can cover over 25 feet in length and 10 feet in height!',
      'Kangaroos cannot walk backwards because of their massive tail and feet structure.',
      'A group of kangaroos is called a "Mob", a "Court", or a "Troupe"!'
    ],
    kidWords: [
      { word: 'Marsupial', emoji: '🦘', meaning: 'A mammal whose babies develop inside a maternal pouch.' },
      { word: 'Joey', emoji: '🍼', meaning: 'A baby kangaroo, koala, or wombat.' },
      { word: 'Outback', emoji: '🏜️', meaning: 'The vast, remote, arid interior wilderness of Australia.' }
    ],
    didYouKnowOrigin: 'The word "Kangaroo" comes from the Guugu Yimithirr Indigenous Australian word "gangurru", referring to the eastern grey kangaroo!',
    microQuiz: {
      question: 'What is a baby kangaroo called?',
      options: ['A Joey', 'A Cub', 'A Calf'],
      correctIndex: 0,
      explanation: 'A baby kangaroo is called a joey! It spends its first several months nestled cozily inside its mother’s pouch.'
    },
    seeAlso: [
      { id: 'seven-continents', title: 'The 7 Continents', category: 'countries-world' },
      { id: 'cheetah', title: 'Cheetah', category: 'animals-dinosaurs' }
    ]
  },
  {
    id: 'giraffe',
    title: 'Giraffe',
    symbol: '🦒',
    pronunciation: '(juh-RAF)',
    category: 'animals-dinosaurs',
    tagline: 'The sky-high gentle giant with a 6-foot neck and a long purple tongue.',
    analogy: {
      title: 'The Living Tree-Top Skyscraper',
      story: 'A giraffe is so tall it can look directly into a second-story bedroom window! It struts through the savanna like a friendly yellow-and-brown walking tower, reaching high into acacia treetops where no other animal on Earth can browse.',
      emoji: '🦒'
    },
    howItWorks: {
      title: 'Extreme Giraffe Engineering',
      points: [
        '7 Neck Bones: Even though a giraffe’s neck is 6 feet long, it has exactly 7 neck vertebrae — the same number as a human being!',
        'Giant High-Pressure Heart: A 25-pound heart pumps blood up that long neck with twice the pressure of human hearts.',
        '20-Inch Purple Tongue: A dark blue-purple tongue that acts like a prehensile hand and sunscreen, stripping leaves from spiky acacia thorns without getting poked.'
      ]
    },
    funFacts: [
      'Giraffes sleep for only about 30 minutes to 2 hours a day, often standing up!',
      'No two giraffes have the exact same spot pattern — their spots are unique like human fingerprints.',
      'A newborn baby giraffe stands 6 feet tall just a few minutes after being born!'
    ],
    kidWords: [
      { word: 'Prehensile', emoji: '👅', meaning: 'Capable of grasping or wrapping around objects (like a tongue or tail).' },
      { word: 'Vertebrae', emoji: '🦴', meaning: 'The individual bones that make up the backbone and neck.' },
      { word: 'Acacia', emoji: '🌳', meaning: 'A thorny savanna tree with sweet leaves loved by giraffes.' }
    ],
    didYouKnowOrigin: 'In ancient times, people called the giraffe a "Cameleopard" because they thought it looked like a cross between a camel and a spotted leopard!',
    microQuiz: {
      question: 'How many bones are in a giraffe’s long 6-foot neck?',
      options: ['7 bones (Exactly the same number as a human neck!)', '100 bones', '50 bones'],
      correctIndex: 0,
      explanation: 'A giraffe has only 7 neck vertebrae, just like humans! Each individual neck bone is simply elongated up to 10 inches long.'
    },
    seeAlso: [
      { id: 'african-elephant', title: 'African Elephant', category: 'animals-dinosaurs' },
      { id: 'skeleton-bones', title: 'Skeleton & Bones', category: 'human-body' }
    ]
  },
  {
    id: 'great-white-shark',
    title: 'Great White Shark',
    symbol: '🦈',
    pronunciation: '(GRAYT WYT SHARK)',
    category: 'animals-dinosaurs',
    tagline: 'The magnificent ocean apex predator with conveyor-belt teeth and electrical sixth sense.',
    analogy: {
      title: 'The Ocean’s Electric Underwater Detective',
      story: 'Sharks are ancient marvels that have swam in Earth’s oceans for over 400 million years — long before dinosaurs even walked the land! With a skeleton made of flexible cartilage (like the bendy tip of your nose) and thousands of replace-as-you-go teeth, it glides through water with effortless grace.',
      emoji: '🌊'
    },
    howItWorks: {
      title: 'Shark Sensory Marvels',
      points: [
        'Electrical Ampullae of Lorenzini: Tiny gel-filled pores around its snout that detect the heartbeat and electrical sparks of fish swimming nearby.',
        'Conveyor-Belt Teeth: They don’t have tooth roots like us; their teeth grow in continuous conveyor rows, losing and replacing up to 30,000 teeth in a lifetime!',
        'Cartilage Skeleton: Having no heavy bones makes them light, ultra-flexible, and fast underwater.'
      ]
    },
    funFacts: [
      'Sharks have been on Earth for 400 million years, surviving 5 major global extinction events.',
      'Sharks do not have swim bladders like other fish; they use large oil-filled livers to float and must keep swimming to push water over their gills.',
      'A great white can smell a single tiny drop of scent in 25 gallons of seawater!'
    ],
    kidWords: [
      { word: 'Cartilage', emoji: '👃', meaning: 'Firm, bendable tissue (like your ear or nose tip) that forms a shark’s skeleton.' },
      { word: 'Apex Predator', emoji: '👑', meaning: 'An animal at the very top of the ocean food chain with no natural predators.' },
      { word: 'Gills', emoji: '🫁', meaning: 'Respiratory slits on the side of a fish that absorb oxygen from water.' }
    ],
    didYouKnowOrigin: 'The name "Shark" may come from the German word "Schurke", meaning a scoundrel or prowler, or the Mayan word "xook" for large marine fish!',
    microQuiz: {
      question: 'What is a shark’s skeleton made of instead of hard bone?',
      options: ['Flexible cartilage (like your nose tip)', 'Hard metal', 'Wood'],
      correctIndex: 0,
      explanation: 'Sharks have no bones at all! Their entire skeleton is made of bendy, lightweight cartilage, which makes them swift and nimble swimmers.'
    },
    seeAlso: [
      { id: 'world-oceans', title: 'World Oceans', category: 'countries-world' },
      { id: 'dolphin', title: 'Dolphin', category: 'animals-dinosaurs' }
    ]
  },
  {
    id: 'tree-frog',
    title: 'Red-Eyed Tree Frog',
    symbol: '🐸',
    pronunciation: '(TREE FROG)',
    category: 'animals-dinosaurs',
    tagline: 'The glowing jewel of the rainforest with sticky suction-cup toes and ruby-red eyes.',
    analogy: {
      title: 'The Rainforest’s Neon Acrobatic Gymnast',
      story: 'Picture a tiny, bright lime-green frog with giant ruby-red eyes, bright blue-and-yellow striped sides, and glowing orange webbed toes! When it tucks its legs and closes its eyelids, it turns completely invisible against green leaves; when startled, it pops open its neon red eyes in a flash of color that freezes predators in surprise!',
      emoji: '🌿'
    },
    howItWorks: {
      title: 'Rainforest Acrobatic Secrets',
      points: [
        'Suction Cup Toe Pads: Microscopic hexagonal channels on its toe pads secrete moisture, creating surface tension to climb upside down on smooth glass or wet rainforest leaves.',
        'Startle Coloration: Flashing bright red eyes and blue flanks gives the frog a split-second head start to leap to safety while a bird wonders what it just saw!',
        'Nocturnal Hunting: Sleeps all day tucked flat like a leaf, then wakes at twilight to hunt moths and crickets.'
      ]
    },
    funFacts: [
      'Red-eyed tree frogs are not poisonous — they use camouflage and surprise color tricks for defense!',
      'They lay their jelly eggs on leaves hanging directly over water so tadpoles hatch and drop straight into the stream below.',
      'Their green skin absorbs water and oxygen directly through moisture in the rainforest air.'
    ],
    kidWords: [
      { word: 'Amphibian', emoji: '🐸', meaning: 'A cold-blooded animal that hatches in water with gills and develops into a land air-breather.' },
      { word: 'Camouflage', emoji: '🦎', meaning: 'Colors and patterns that help an animal blend invisibly into its surroundings.' },
      { word: 'Metamorphosis', emoji: '✨', meaning: 'The magical transformation process from a swimming tadpole into a leaping frog.' }
    ],
    didYouKnowOrigin: 'The scientific name "Agalychnis callidryas" comes from Greek words meaning "beautiful tree nymph"!',
    microQuiz: {
      question: 'How do tree frogs walk upside down on wet leaves without falling?',
      options: ['Sticky microscopic suction channels on their toe pads', 'They use Velcro glue', 'They have magnetic toes'],
      correctIndex: 0,
      explanation: 'Their toe pads have microscopic hexagonal cells and moisture that create strong surface tension, letting them grip wet leaves at any angle!'
    },
    seeAlso: [
      { id: 'chameleon', title: 'Chameleon', category: 'animals-dinosaurs' },
      { id: 'brazil', title: 'Brazil & Rainforest', category: 'countries-world' }
    ]
  },
  {
    id: 'stegosaurus',
    title: 'Stegosaurus',
    symbol: '🦕',
    pronunciation: '(steg-uh-SOR-us)',
    category: 'animals-dinosaurs',
    tagline: 'The armored Jurassic giant with kite-shaped back plates and a spiked tail weapon.',
    analogy: {
      title: 'The Walking Fortress with Solar Roof Tiles',
      story: 'Stegosaurus walked the Earth 150 million years ago during the Jurassic period! It had 17 upright diamond-shaped bone plates along its spine that worked like built-in solar panels and billboard displays, plus four razor-sharp spikes at the tip of its tail nicknamed the "thagomizer".',
      emoji: '🛡️'
    },
    howItWorks: {
      title: 'Dinosaur Defensive Armor',
      points: [
        'Dorsal Bone Plates: Embedded in tough skin (not attached to skeleton) filled with blood vessels to warm up in morning sunshine and cool down in shade.',
        'Thagomizer Tail Spikes: Four 3-foot bone spikes swung by a muscular tail to fend off attacking Allosaurus predators.',
        'Beaked Plant Grinder: Low-slung head designed to forage on low-lying Jurassic ferns, mosses, and horsetails.'
      ]
    },
    funFacts: [
      'Even though Stegosaurus weighed 10,000 pounds (5 tons), its brain was only the size of a walnut or a lime!',
      'Stegosaurus fossils have been found with tail spike wounds embedded right inside the bones of predator dinosaurs!',
      'They lived millions of years BEFORE T-Rex — a T-Rex lived closer in time to humans than to a Stegosaurus!'
    ],
    kidWords: [
      { word: 'Thagomizer', emoji: '⚔️', meaning: 'The four sharp defensive spikes at the end of a stegosaur tail.' },
      { word: 'Jurassic', emoji: '⏳', meaning: 'The famous prehistoric geological period 201 to 145 million years ago.' },
      { word: 'Thermoregulation', emoji: '🌡️', meaning: 'Controlling body temperature by absorbing or releasing heat through plates.' }
    ],
    didYouKnowOrigin: 'Stegosaurus means "Roofed Lizard" in Greek ("stegos" = roof, "sauros" = lizard), because early paleontologists thought the plates lay flat over its back like roof shingles!',
    microQuiz: {
      question: 'What was the approximate size of a giant 5-ton Stegosaurus’s brain?',
      options: ['The size of a small walnut', 'The size of a basketball', 'The size of a refrigerator'],
      correctIndex: 0,
      explanation: 'Its brain weighed only about 2.8 ounces — roughly the size of a walnut — yet it survived successfully for millions of years!'
    },
    seeAlso: [
      { id: 'tyrannosaurus-rex', title: 'T-Rex', category: 'animals-dinosaurs' },
      { id: 'triceratops', title: 'Triceratops', category: 'animals-dinosaurs' }
    ]
  },
  {
    id: 'pterodactyl',
    title: 'Pterodactyl & Flying Reptiles',
    symbol: '🪁',
    pronunciation: '(tehr-uh-DAK-tuhl)',
    category: 'animals-dinosaurs',
    tagline: 'The ancient sky masters with leathery wings that soared over prehistoric oceans.',
    analogy: {
      title: 'The Prehistoric Glider Plane with a 30-Foot Wingspan',
      story: 'Long before birds or bats conquered the sky, giant flying reptiles called pterosaurs ruled the prehistoric air! Their wings were made of tough, flexible skin membranes stretched from an extraordinarily long fourth finger all the way to their ankles, soaring on ocean thermals like giant gliders.',
      emoji: '🪁'
    },
    howItWorks: {
      title: 'Aviation Engineering of the Skies',
      points: [
        'Super-Long Fourth Finger: Their wing was supported by one massively elongated ring finger bone acting as the wing’s leading edge spar.',
        'Hollow Lightweight Bones: Thin-walled, air-filled bones made them super lightweight so they could launch into flight with a four-limb jump.',
        'Keen Crests & Vision: Large bone crests on their heads worked like directional rudders and colorful species recognition banners.'
      ]
    },
    funFacts: [
      'Pterosaurs were NOT dinosaurs — they were flying archosaurian reptiles that lived alongside dinosaurs!',
      'The largest pterosaur ever, Quetzalcoatlus, had a wingspan of 36 feet — as wide as a small private airplane!',
      'Fossils show that baby pterosaurs (flaplings) were able to fly almost immediately after hatching from eggs.'
    ],
    kidWords: [
      { word: 'Pterosaur', emoji: '🪁', meaning: 'An extinct winged flying reptile of the Mesozoic era.' },
      { word: 'Membrane', emoji: '🪶', meaning: 'A thin, pliable layer of tissue that forms the wing skin.' },
      { word: 'Wingspan', emoji: '📏', meaning: 'The distance from the tip of one wing to the tip of the other.' }
    ],
    didYouKnowOrigin: 'Pterodactyl means "Winged Finger" in Greek ("pteron" = wing, "daktylos" = finger), because its wing spans from its elongated fourth finger!',
    microQuiz: {
      question: 'Which finger on a pterodactyl’s hand was super-long to support its flying wing?',
      options: ['The fourth finger', 'The thumb', 'The index finger'],
      correctIndex: 0,
      explanation: 'Its fourth finger was extraordinarily long, acting as the main structural beam holding the flying skin membrane!'
    },
    seeAlso: [
      { id: 'tyrannosaurus-rex', title: 'T-Rex', category: 'animals-dinosaurs' },
      { id: 'airplanes-flight', title: 'How Airplanes Fly', category: 'how-things-work' }
    ]
  },
  {
    id: 'bald-eagle',
    title: 'Bald Eagle',
    symbol: '🦅',
    pronunciation: '(BAWLD EE-guhl)',
    category: 'animals-dinosaurs',
    tagline: 'The magnificent bird of prey with telescope vision and a 7-foot wingspan.',
    analogy: {
      title: 'The Sky’s Telescope Hunter with Razor Talons',
      story: 'The bald eagle is the soaring king of the sky! With eyes that zoom in like high-powered binoculars, it can spot a single swimming fish in a lake from 2 miles away while riding warm upward air currents without flapping a single wing.',
      emoji: '🦅'
    },
    howItWorks: {
      title: 'Raptor Hunting Adaptations',
      points: [
        'Super-Vision: An eagle’s eyesight is 4 to 8 times sharper than human vision, equipped with two focal centers in each eye to see both forward and sideways simultaneously.',
        'Curved Yellow Beak & Talons: Powerful gripping talons have a crushing grip strength 10 times stronger than a human hand to catch fish.',
        'Giant Stick Nests: They build the largest tree nests of any bird in the world — some measuring 10 feet wide and weighing 2,000 pounds (as heavy as a car!)'
      ]
    },
    funFacts: [
      'Bald eagles are not actually bald! "Bald" comes from an old English word "piebald" meaning "white-headed".',
      'They can dive out of the sky at speeds up to 100 miles per hour when catching fish.',
      'Bald eagles mate for life and add new sticks to the same giant home nest every single year.'
    ],
    kidWords: [
      { word: 'Raptor', emoji: '🦅', meaning: 'A bird of prey that hunts and eats other animals.' },
      { word: 'Talons', emoji: '💅', meaning: 'The sharp, hooked claws on a bird of prey’s feet.' },
      { word: 'Eyrie', emoji: '🪺', meaning: 'A large, high-altitude nest built by an eagle on a cliff or tall tree.' }
    ],
    didYouKnowOrigin: 'The Bald Eagle was chosen as the national emblem of the United States in 1782 because of its noble courage, strength, and freedom in the sky!',
    microQuiz: {
      question: 'Why are Bald Eagles called "bald" when their heads are covered in feathers?',
      options: ['"Bald" originally meant "white-headed" in ancient English', 'They lose their feathers in winter', 'They are born without feathers'],
      correctIndex: 0,
      explanation: 'The word "bald" comes from the old word "balde", meaning white! Their heads are covered in snow-white feathers.'
    },
    seeAlso: [
      { id: 'barn-owl', title: 'Barn Owl', category: 'animals-dinosaurs' },
      { id: 'united-states', title: 'United States', category: 'countries-world' }
    ]
  }
];
