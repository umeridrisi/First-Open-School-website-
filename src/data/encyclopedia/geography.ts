import { EncyclopediaEntry } from '../../types';

export const GEOGRAPHY_ENTRIES: EncyclopediaEntry[] = [
  {
    id: 'seven-continents',
    title: 'The 7 Continents',
    symbol: '🗺️',
    pronunciation: '(SEV-en KON-tih-nents)',
    category: 'countries-world',
    tagline: 'Asia, Africa, North America, South America, Antarctica, Europe, and Australia.',
    analogy: {
      title: 'The 7 Giant Floating Land Islands',
      story: 'Millions of years ago, all Earth’s land was joined in one giant supercontinent called Pangea. Over millions of years, tectonic plates carried the land apart like slow-motion bumper boats, forming the 7 magnificent continents we live on today!',
      emoji: '🧭'
    },
    howItWorks: {
      title: 'The 7 Continents at a Glance',
      points: [
        'Asia: The largest and most populous continent, home to Mount Everest and the Great Wall.',
        'Africa: The second largest, with the Sahara Desert, Nile River, lions, and elephants.',
        'North America: Stretching from the snowy Arctic tundra down to tropical Mexico.',
        'South America: Home to the lush Amazon Rainforest and towering Andes mountains.',
        'Antarctica: The frozen, ice-covered continent at the South Pole where penguins reign.',
        'Europe: Known for ancient castles, Mediterranean coastlines, and the Alps.',
        'Australia / Oceania: The island continent famous for kangaroos, koalas, and the Great Barrier Reef.'
      ]
    },
    funFacts: [
      'Asia contains about 60% of all the human population on Earth!',
      'Australia is the only continent occupied by a single country.',
      'Antarctica holds about 70% of all the fresh water on Earth locked in its glaciers!'
    ],
    kidWords: [
      { word: 'Continent', emoji: '🗺️', meaning: 'One of the Earth’s seven major continuous expanses of land.' },
      { word: 'Pangea', emoji: '🧩', meaning: 'The ancient supercontinent that existed 250 million years ago.' },
      { word: 'Equator', emoji: '🌐', meaning: 'The imaginary line around the middle of Earth dividing north and south.' }
    ],
    didYouKnowOrigin: 'Geologists have discovered that tectonic plates still move about as fast as human fingernails grow — roughly 1 to 2 inches per year!',
    microQuiz: {
      question: 'Which of the 7 continents is the largest by land area and population?',
      options: ['Asia', 'Europe', 'Australia'],
      correctIndex: 0,
      explanation: 'Asia is the largest continent, covering nearly 30% of Earth’s total land area!'
    },
    seeAlso: [
      { id: 'world-oceans', title: 'World Oceans', category: 'countries-world' },
      { id: 'planet-earth', title: 'Planet Earth', category: 'solar-system' }
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
    kidWords: [
      { word: 'Trench', emoji: '🕳️', meaning: 'A long, narrow, super-deep depression in the ocean floor.' },
      { word: 'Plankton', emoji: '🔬', meaning: 'Microscopic organisms floating in oceans that generate oxygen.' },
      { word: 'Current', emoji: '🌊', meaning: 'A continuous, directed stream of flowing seawater.' }
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
    id: 'great-wall-china',
    title: 'The Great Wall of China',
    symbol: '🧱',
    pronunciation: '(GRAYT WAWL of CHY-nuh)',
    category: 'countries-world',
    tagline: 'The 13,000-mile stone dragon snaking across misty mountains and desert dunes.',
    analogy: {
      title: 'The Giant Mountain-Snaking Stone Dragon',
      story: 'Built by hand thousands of years ago with bricks, stone, and even sticky rice mortar, the Great Wall winds up and down steep mountain ridges like the spine of a sleeping dragon. It had watchtowers with smoke signal fires to send warnings across thousands of miles in minutes!',
      emoji: '🐉'
    },
    howItWorks: {
      title: 'Architectural Defense System',
      points: [
        'Watchtowers: Guard stations every few hundred yards where soldiers slept and stored supplies.',
        'Smoke & Fire Signals: Smoke by day and bonfires by night sent messages faster than galloping horses.',
        'Sticky Rice Mortar: Builders mixed sticky rice porridge with lime mortar to create cement so tough it resists earthquakes!'
      ]
    },
    funFacts: [
      'If all sections of the Great Wall ever built were stretched out, they would measure over 13,170 miles (21,196 km)!',
      'It took over 2,000 years across multiple Chinese dynasties to construct the various walls.',
      'Contrary to popular myth, you cannot see the Great Wall from the Moon with naked eyes, but it is clearly visible from low Earth orbit in spacecraft photos.'
    ],
    kidWords: [
      { word: 'Dynasty', emoji: '👑', meaning: 'A line of hereditary rulers of a country.' },
      { word: 'Mortar', emoji: '🥣', meaning: 'A mixture of sand, water, and lime used to bond building bricks.' },
      { word: 'Beacon', emoji: '🔥', meaning: 'A high signal fire used for warning and communication.' }
    ],
    didYouKnowOrigin: 'In Chinese, the wall is called "Wan Li Chang Cheng", which literally translates to "The Ten-Thousand-Li-Long Wall" (a Li is an ancient measurement of distance)!',
    microQuiz: {
      question: 'What special secret ingredient did ancient builders mix into the mortar to make it super strong?',
      options: ['Sticky rice porridge', 'Honey', 'Mashed potatoes'],
      correctIndex: 0,
      explanation: 'Sticky rice starch reacted with lime to create an amazingly durable waterproof mortar!'
    },
    seeAlso: [
      { id: 'seven-continents', title: 'The 7 Continents', category: 'countries-world' },
      { id: 'egypt', title: 'Egypt (Pyramids)', category: 'countries-world' }
    ]
  },
  {
    id: 'mount-everest',
    title: 'Mount Everest (Chomolungma)',
    symbol: '🏔️',
    pronunciation: '(MOWNT EV-er-est / choh-moh-LUNG-muh)',
    category: 'countries-world',
    tagline: 'The Rooftop of the World, soaring 29,032 feet into the jet stream clouds.',
    analogy: {
      title: 'The Sky-Piercing Snow Giant',
      story: 'Mount Everest is the highest mountain above sea level on Earth! It sits in the majestic Himalaya mountain range. The summit peak reaches so high into the stratosphere that jet airplanes cruise at the same altitude, and climbers must wear oxygen masks because the air is so thin!',
      emoji: '🧗'
    },
    howItWorks: {
      title: 'How Everest Formed',
      points: [
        'Tectonic Collision: Formed when the Indian tectonic plate crashed into the Eurasian plate 50 million years ago, crumpling the rock upward.',
        'Still Growing: Everest is still growing taller by about 4 millimeters (the thickness of a coin) every single year as the plates continue pushing!',
        'The Death Zone: Above 26,000 feet, the air has only one-third the oxygen of sea level.'
      ]
    },
    funFacts: [
      'Fossils of ancient ocean seashells and limestone have been found right at the very summit peak of Everest, proving it was once at the bottom of a prehistoric sea!',
      'In Nepal, the mountain is named "Sagarmatha" (Goddess of the Sky); in Tibet, it is "Chomolungma" (Holy Mother).',
      'The first confirmed people to reach the summit were Sir Edmund Hillary and Sherpa Tenzing Norgay on May 29, 1953.'
    ],
    kidWords: [
      { word: 'Summit', emoji: '🚩', meaning: 'The highest point or top of a mountain.' },
      { word: 'Altitude', emoji: '✈️', meaning: 'The height of an object or point in relation to sea level.' },
      { word: 'Sherpa', emoji: '🏔️', meaning: 'An ethnic Himalayan people renowned for mountaineering skills and strength at high altitude.' }
    ],
    didYouKnowOrigin: 'Mount Everest was named in English after Sir George Everest, a British Surveyor General of India who mapped the Himalayas in the 1800s.',
    microQuiz: {
      question: 'What surprising prehistoric items were discovered embedded in the rocks at the top peak of Everest?',
      options: ['Ancient ocean sea shells and marine fossils', 'Dinosaur feathers', 'Plastic toys'],
      correctIndex: 0,
      explanation: 'Marine fossils at the summit prove the mountain rocks were once part of an ancient ocean floor pushed up by tectonic plate collision!'
    },
    seeAlso: [
      { id: 'seven-continents', title: 'The 7 Continents', category: 'countries-world' },
      { id: 'volcanoes', title: 'Volcanoes & Mountains', category: 'earth-elements' }
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
    kidWords: [
      { word: 'Archipelago', emoji: '🏝️', meaning: 'A group or chain of islands clustered in a sea.' },
      { word: 'Shinkansen', emoji: '🚄', meaning: 'Japan’s network of high-speed bullet passenger trains.' },
      { word: 'Origami', emoji: '🦢', meaning: 'The traditional Japanese art of paper folding.' }
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
    kidWords: [
      { word: 'Pharaoh', emoji: '👑', meaning: 'An ancient monarch and ruler of Egypt.' },
      { word: 'Hieroglyphics', emoji: '🪶', meaning: 'Enigmatic picture characters used in ancient Egyptian writing.' },
      { word: 'Pyramid', emoji: '🔺', meaning: 'A monumental structure with a square base and sloping triangular sides.' }
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
      { id: 'great-wall-china', title: 'The Great Wall of China', category: 'countries-world' }
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
    kidWords: [
      { word: 'Rainforest', emoji: '🌴', meaning: 'A dense forest rich in biodiversity found in tropical areas with high rainfall.' },
      { word: 'Carnaval', emoji: '🎭', meaning: 'An annual Brazilian festival celebrated with lively samba music and costumes.' },
      { word: 'Canopy', emoji: '🌳', meaning: 'The high, continuous layer of foliage formed by tree crowns in a forest.' }
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
    kidWords: [
      { word: 'Glacier', emoji: '🏔️', meaning: 'A slowly moving mass or river of ice formed by snow accumulation.' },
      { word: 'Blizzard', emoji: '❄️', meaning: 'A severe snowstorm with high winds and near-zero visibility.' },
      { word: 'Iceberg', emoji: '🧊', meaning: 'A large floating mass of freshwater ice detached from a glacier.' }
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
