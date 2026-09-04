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
  },
  {
    id: 'pakistan',
    title: 'Pakistan',
    symbol: '🇵🇰',
    pronunciation: '(PAK-ih-stan)',
    category: 'countries-world',
    tagline: 'The historic crossroads of Asia, home to K2, the ancient Indus Valley, and colorful truck art.',
    analogy: {
      title: 'The Mountain Fortress & Ancient Cradle of Civilization',
      story: 'Pakistan is a land of dramatic wonders! In the north, towering snow peaks touch the clouds with K2 (the second-highest mountain on Earth); along the fertile Indus River lies 5,000-year-old Mohenjo-Daro cities; and its streets are famous for vibrant, kaleidoscope-painted trucks and warm hospitality!',
      emoji: '🏔️'
    },
    howItWorks: {
      title: 'Treasures of Pakistan',
      points: [
        'K2 & Karakoram Giants: Home to K2 (8,611m), the world’s most formidable mountain, and the highest concentration of glaciers outside the polar regions.',
        'Indus Valley Civilization: One of the world’s earliest urban civilizations with advanced brick architecture and drainage systems built over 4,500 years ago.',
        'Vibrant Truck Art: Master craftsmen decorate buses and cargo trucks with intricate floral wood carvings, poetry, and reflective neon tiles!'
      ]
    },
    funFacts: [
      'Pakistan manufactures over 50% to 70% of the world’s hand-stitched professional soccer balls in the city of Sialkot!',
      'The Karakoram Highway connecting Pakistan to China is often celebrated as the "Eighth Wonder of the World" carved through sheer mountain granite.',
      'The national animal of Pakistan is the magnificent Markhor — a wild mountain goat with twisting screw-like horns!'
    ],
    kidWords: [
      { word: 'Karakoram', emoji: '🏔️', meaning: 'A towering mountain range spanning Pakistan, India, and China with giant glaciers.' },
      { word: 'Markhor', emoji: '🐐', meaning: 'A magnificent wild mountain goat with spiral corkscrew horns.' },
      { word: 'Hospitality', emoji: '🫖', meaning: 'The generous, warm, and friendly reception of guests and travelers.' }
    ],
    didYouKnowOrigin: 'The name "Pakistan" was coined in 1933 as an acronym of regional homelands: Punjab, Afghan province, Kashmir, Sindh, and BalochisTAN — and means "Land of the Pure" in Urdu and Persian!',
    microQuiz: {
      question: 'What is the name of the world’s second-highest mountain, located in northern Pakistan?',
      options: ['K2 (Godwin-Austen)', 'Mount Kilimanjaro', 'Mount Fuji'],
      correctIndex: 0,
      explanation: 'K2 stands at 28,251 feet (8,611 meters) in the Karakoram range and is famous among mountaineers worldwide!'
    },
    seeAlso: [
      { id: 'mount-everest', title: 'Mount Everest', category: 'countries-world' },
      { id: 'seven-continents', title: 'The 7 Continents', category: 'countries-world' }
    ]
  },
  {
    id: 'united-kingdom',
    title: 'United Kingdom',
    symbol: '🇬🇧',
    pronunciation: '(yoo-NY-ted KING-duhm)',
    category: 'countries-world',
    tagline: 'An island nation of historic stone castles, Big Ben, red double-decker buses, and storybooks.',
    analogy: {
      title: 'The Island of Castles, Clock Towers, and Storybook Legends',
      story: 'The United Kingdom is made of four friendly nations — England, Scotland, Wales, and Northern Ireland! Picture historic stone castles where kings and queens lived, red double-decker buses rolling past Big Ben’s ringing bell, and green misty hills filled with sheep and legends.',
      emoji: '🏰'
    },
    howItWorks: {
      title: 'Wonders of the United Kingdom',
      points: [
        'Big Ben & Westminster: London’s iconic 316-foot Elizabeth Tower with giant clock dials and a 13-ton bell chiming across the River Thames.',
        'Stonehenge: A mysterious 5,000-year-old circle of massive standing stones aligned with the summer solstice sunrise.',
        'The Giant’s Causeway: 40,000 interlocking basalt hexagonal columns formed by ancient volcanic lava cooling into step-stones.'
      ]
    },
    funFacts: [
      'The Queen’s Guard at Buckingham Palace wear famous tall black bearskin hats and red tunics!',
      'London’s Underground rail system (The Tube) is the oldest underground metro in the world, opened in 1863.',
      'Scotland’s official national animal is the legendary mythical Unicorn!'
    ],
    kidWords: [
      { word: 'Monarchy', emoji: '👑', meaning: 'A form of government with a King or Queen as head of state.' },
      { word: 'Basalt', emoji: '🪨', meaning: 'A dark, dense volcanic rock that cools into geometric columns.' },
      { word: 'Solstice', emoji: '☀️', meaning: 'The two times a year when the sun reaches its highest or lowest point in the sky.' }
    ],
    didYouKnowOrigin: 'The British flag is called the "Union Jack" because it blends the historic crosses of three patron saints: St. George (England), St. Andrew (Scotland), and St. Patrick (Ireland)!',
    microQuiz: {
      question: 'What mythical creature is the official national animal of Scotland?',
      options: ['The Unicorn', 'The Dragon', 'The Phoenix'],
      correctIndex: 0,
      explanation: 'The Unicorn has been the proud national heraldic symbol of Scotland since the 12th century!'
    },
    seeAlso: [
      { id: 'seven-continents', title: 'The 7 Continents', category: 'countries-world' },
      { id: 'france', title: 'France', category: 'countries-world' }
    ]
  },
  {
    id: 'united-states',
    title: 'United States of America',
    symbol: '🇺🇸',
    pronunciation: '(yoo-NY-ted STAYTS of uh-MEHR-ih-kuh)',
    category: 'countries-world',
    tagline: 'A vast nation of 50 states spanning from the Statue of Liberty to the Grand Canyon and NASA.',
    analogy: {
      title: 'The Great Mosaic of Redwoods, Space Rockets, and Canyons',
      story: 'The United States spans across an entire continent from the Atlantic to the Pacific ocean! You can walk through giant ancient redwood trees taller than skyscrapers in California, gaze into the 1-mile deep red rock Grand Canyon, and watch NASA launch astronauts into the stars from Florida.',
      emoji: '🚀'
    },
    howItWorks: {
      title: 'Geographic and Cultural Wonders',
      points: [
        '50 United States: 48 contiguous states plus Alaska (the largest and coldest) and Hawaii (tropical volcanic island chain).',
        'Grand Canyon: Carved by the Colorado River over 6 million years, exposing 2 billion years of Earth’s rock history.',
        'NASA & Space Exploration: The country that first sent human astronauts to walk on the Moon and launched the James Webb Space Telescope.'
      ]
    },
    funFacts: [
      'The Statue of Liberty in New York Harbor was a gift of friendship from France in 1886!',
      'The tallest trees on Earth — Coast Redwoods — grow in California, reaching over 380 feet tall.',
      'The USA has over 400 national parks protecting wildlife, geysers, glaciers, and deserts.'
    ],
    kidWords: [
      { word: 'Canyon', emoji: '🏜️', meaning: 'A deep gorge or ravine carved through rock by a river over millions of years.' },
      { word: 'Geyser', emoji: '♨️', meaning: 'A natural hot spring that periodically boils and blasts steam into the air.' },
      { word: 'Redwood', emoji: '🌲', meaning: 'The tallest species of living tree on planet Earth.' }
    ],
    didYouKnowOrigin: 'The 50 stars on the American flag represent the 50 states, while the 13 red and white stripes represent the original 13 founding colonies!',
    microQuiz: {
      question: 'Which river carved the famous 1-mile deep Grand Canyon in Arizona?',
      options: ['The Colorado River', 'The Mississippi River', 'The Amazon River'],
      correctIndex: 0,
      explanation: 'The Colorado River steadily carved the Grand Canyon over 6 million years of flowing water!'
    },
    seeAlso: [
      { id: 'bald-eagle', title: 'Bald Eagle', category: 'animals-dinosaurs' },
      { id: 'space-rockets', title: 'Space Rockets', category: 'solar-system' }
    ]
  },
  {
    id: 'canada',
    title: 'Canada',
    symbol: '🇨🇦',
    pronunciation: '(KAN-uh-duh)',
    category: 'countries-world',
    tagline: 'The snowy northern giant of turquoise glacial lakes, maple syrup, and friendly wildlife.',
    analogy: {
      title: 'The Sparkling Forest and Glacial Lake Wonderland',
      story: 'Canada is the second-largest country in the world by land area! It is covered in vast boreal evergreen forests, thousands of crystal-blue glacial lakes so clean you can see the fish swimming, and friendly polar bears wandering the snowy Arctic coastlines.',
      emoji: '🍁'
    },
    howItWorks: {
      title: 'Wonders of Canada',
      points: [
        'Rocky Mountains & Glacial Lakes: Famous turquoise lakes like Lake Louise, colored by light reflecting off fine glacier rock flour.',
        'Niagara Falls: One of the most powerful waterfalls in the world on the border between Canada and the USA.',
        'Maple Syrup Harvest: Canadian forests produce over 70% of the world’s pure sweet maple syrup by tapping maple trees in early spring.'
      ]
    },
    funFacts: [
      'Canada has more natural freshwater lakes than all the other countries in the world combined!',
      'The national animal of Canada is the busy Beaver, famous for building wooden dams and lodges.',
      'Canada has the longest coastline of any country on Earth — over 151,000 miles long!'
    ],
    kidWords: [
      { word: 'Glacial', emoji: '🧊', meaning: 'Formed or caused by the movement of ancient ice glaciers.' },
      { word: 'Boreal', emoji: '🌲', meaning: 'The vast northern evergreen forest belt circling the subarctic globe.' },
      { word: 'Beaver', emoji: '🦫', meaning: 'A semi-aquatic rodent known for chopping trees and engineering dams.' }
    ],
    didYouKnowOrigin: 'The name "Canada" comes from the St. Lawrence Iroquoian word "kanata", which meant "village or settlement"!',
    microQuiz: {
      question: 'What sweet breakfast treat does Canada produce more than 70% of the world’s supply of?',
      options: ['Pure Maple Syrup', 'Chocolate bars', 'Peanut butter'],
      correctIndex: 0,
      explanation: 'Canadian maple farmers collect sweet sap from sugar maple trees every spring to make pure maple syrup!'
    },
    seeAlso: [
      { id: 'seven-continents', title: 'The 7 Continents', category: 'countries-world' },
      { id: 'trees-element', title: 'Trees & Photosynthesis', category: 'earth-elements' }
    ]
  },
  {
    id: 'australia',
    title: 'Australia',
    symbol: '🇦🇺',
    pronunciation: '(aw-STRAYL-yuh)',
    category: 'countries-world',
    tagline: 'The sunny island continent of kangaroos, koalas, the Outback, and the Great Barrier Reef.',
    analogy: {
      title: 'The Great Island Continent of Natural Marvels',
      story: 'Australia is both a country and an entire continent surrounded by sparkling blue oceans! In the center lies the red desert Outback with sacred giant sandstone monoliths like Uluru, while off its northeast coast glows the Great Barrier Reef — the largest living coral organism on Earth.',
      emoji: '🦘'
    },
    howItWorks: {
      title: 'Iconic Australian Landmarks',
      points: [
        'Sydney Opera House: A world-famous architectural masterpiece designed with white sail-like roof shells in Sydney Harbor.',
        'Great Barrier Reef: Over 2,900 individual coral reefs and 900 islands visible from outer space!',
        'Unique Marsupials: Over 80% of Australia’s mammals (like kangaroos, koalas, platypuses, and wombats) exist nowhere else in the wild on Earth.'
      ]
    },
    funFacts: [
      'The Great Barrier Reef is so huge it is the largest living structure on Earth, stretching 1,400 miles!',
      'Australia’s Platypus is one of only two mammals in the world that lay eggs instead of giving live birth!',
      'There are more kangaroos living in Australia than human beings!'
    ],
    kidWords: [
      { word: 'Monolith', emoji: '🪨', meaning: 'A single massive stone or rock formation, like Uluru.' },
      { word: 'Coral Reef', emoji: '🪸', meaning: 'An underwater ecosystem built by colonies of tiny calcium-secreting polyps.' },
      { word: 'Monotreme', emoji: '🥚', meaning: 'A rare category of mammal (like the platypus) that lays eggs.' }
    ],
    didYouKnowOrigin: 'Australia comes from the Latin "Terra Australis Incognita", which meant "Unknown Southern Land", because ancient mapmakers predicted a giant continent existed in the south to balance the globe!',
    microQuiz: {
      question: 'Is the Great Barrier Reef in Australia visible from outer space?',
      options: ['Yes (It is the largest living structure on Earth!)', 'No, it is too small', 'Only with a telescope'],
      correctIndex: 0,
      explanation: 'The Great Barrier Reef is so immense (stretching 1,400 miles) that astronauts can easily see its glowing turquoise reefs from space orbit!'
    },
    seeAlso: [
      { id: 'kangaroo', title: 'Kangaroo', category: 'animals-dinosaurs' },
      { id: 'seven-continents', title: 'The 7 Continents', category: 'countries-world' }
    ]
  },
  {
    id: 'france',
    title: 'France',
    symbol: '🇫🇷',
    pronunciation: '(FRANS)',
    category: 'countries-world',
    tagline: 'The cultural capital of Europe with the Eiffel Tower, the Louvre, and delicious bakeries.',
    analogy: {
      title: 'The Art Studio and Bakery of the World',
      story: 'France is like a living museum of art and culinary delight! You can climb the sparkling iron lattices of the Eiffel Tower in Paris, see the Mona Lisa smile at the Louvre Museum, and smell fresh, warm buttery croissants baking in neighborhood village boulangeries.',
      emoji: '🗼'
    },
    howItWorks: {
      title: 'Treasures of France',
      points: [
        'Eiffel Tower: An 1,083-foot wrought-iron tower built for the 1889 World’s Fair, now the world’s most visited paid monument.',
        'The Louvre Museum: The world’s largest art museum holding over 380,000 historic treasures including the Mona Lisa.',
        'Mont Blanc: The highest snow-covered peak in Western Europe (15,777 feet) standing in the French Alps.'
      ]
    },
    funFacts: [
      'France is the most visited tourist country in the world, welcoming over 90 million international travelers each year!',
      'The Eiffel Tower grows about 6 inches taller in the hot summer because heat expands its wrought iron metal!',
      'France produces over 1,000 distinct varieties of delicious cheese!'
    ],
    kidWords: [
      { word: 'Lattice', emoji: '🏗️', meaning: 'An interlaced criss-cross structure of iron or wood beams.' },
      { word: 'Croissant', emoji: '🥐', meaning: 'A flaky, buttery, crescent-shaped French pastry roll.' },
      { word: 'Alps', emoji: '🏔️', meaning: 'The great mountain range system stretching across central Europe.' }
    ],
    didYouKnowOrigin: 'The French motto is "Liberté, Égalité, Fraternité", which means "Liberty, Equality, Brotherhood" — inspiring democratic movements around the globe!',
    microQuiz: {
      question: 'Why does the iron Eiffel Tower grow up to 6 inches taller during hot summer months?',
      options: ['Thermal expansion (Heat causes iron metal to expand!)', 'Painters add extra metal', 'It absorbs rainwater'],
      correctIndex: 0,
      explanation: 'When metal gets hot under the summer sun, its particles vibrate faster and push slightly apart, causing the tower to expand up to 6 inches!'
    },
    seeAlso: [
      { id: 'united-kingdom', title: 'United Kingdom', category: 'countries-world' },
      { id: 'italy', title: 'Italy', category: 'countries-world' }
    ]
  },
  {
    id: 'italy',
    title: 'Italy',
    symbol: '🇮🇹',
    pronunciation: '(IT-uh-lee)',
    category: 'countries-world',
    tagline: 'The boot-shaped Mediterranean wonderland of ancient Roman ruins, Venice canals, and pizza.',
    analogy: {
      title: 'The Boot-Shaped Treasure Chest of History and Pasta',
      story: 'Look at a map of Europe and you will see Italy looks just like a high-heeled boot kicking a stone football (the island of Sicily)! Walk where gladiators competed in the Colosseum, float along quiet Venice canals in a wooden gondola boat, and enjoy the birthplace of pizza!',
      emoji: '🍕'
    },
    howItWorks: {
      title: 'Italian Marvels',
      points: [
        'The Roman Colosseum: A 2,000-year-old stone amphitheater that once held 50,000 spectators for ancient events.',
        'Venice - The City on Water: Built across 118 small islands linked by 400 stone footbridges with canals instead of streets!',
        'The Leaning Tower of Pisa: A famous white marble bell tower that leans at a 4-degree angle because of soft foundation soil.'
      ]
    },
    funFacts: [
      'Modern pizza was invented in Naples, Italy in 1889 to honor Queen Margherita with tomato (red), mozzarella (white), and basil (green) matching the flag!',
      'Italy has more UNESCO World Heritage Sites (59) than any other country on Earth.',
      'Inside the capital city of Rome sits Vatican City — the smallest independent country in the world!'
    ],
    kidWords: [
      { word: 'Gondola', emoji: '🛶', meaning: 'A traditional, flat-bottomed Venetian rowing boat.' },
      { word: 'Amphitheater', emoji: '🏛️', meaning: 'An open-air circular or oval building with tiered seating for spectacles.' },
      { word: 'Gladiator', emoji: '⚔️', meaning: 'An armed combatant who entertained audiences in the Roman Republic.' }
    ],
    didYouKnowOrigin: 'The name "Italy" comes from the ancient Oscan word "Víteliú", which meant "Land of Young Cattle" or "Calf Land" because the fertile pastures were filled with herds of cows!',
    microQuiz: {
      question: 'What vehicle do people in Venice use to travel along water canals instead of cars?',
      options: ['Gondola rowing boats and water buses', 'Bicycles', 'Horses'],
      correctIndex: 0,
      explanation: 'Venice has zero roads for cars — people travel by foot over bridges or take boat gondolas along the canals!'
    },
    seeAlso: [
      { id: 'france', title: 'France', category: 'countries-world' },
      { id: 'egypt', title: 'Egypt', category: 'countries-world' }
    ]
  },
  {
    id: 'india',
    title: 'India',
    symbol: '🇮🇳',
    pronunciation: '(IN-dee-uh)',
    category: 'countries-world',
    tagline: 'The colorful land of the Taj Mahal, Bengal tigers, vibrant spices, and Diwali festival.',
    analogy: {
      title: 'The Kaleidoscope of Colors, Spices, and Monuments',
      story: 'India is a vast and vibrant country full of life and music! From the marble domes of the Taj Mahal reflecting in water ponds to the colorful sparklers of Diwali (the festival of lights), India is home to dancing peacocks, royal Bengal tigers, and fragrant aromatic spices.',
      emoji: '🦚'
    },
    howItWorks: {
      title: 'Wonders of India',
      points: [
        'The Taj Mahal: A breathtaking ivory-white marble mausoleum in Agra built in 1632, considered one of the Seven Wonders of the World.',
        'Himalayan Northern Crown: The tallest mountain range on Earth borders the north of India, feeding giant rivers like the Ganges.',
        'Bengal Tigers & Peacocks: Home to 75% of the world’s wild tigers and the magnificent iridescent blue Indian Peacock.'
      ]
    },
    funFacts: [
      'The number Zero (0) and the modern decimal counting system were invented by ancient Indian mathematicians!',
      'The game of Chess was invented in India over 1,500 years ago, originally called "Chaturanga".',
      'India is the world’s largest producer of delicious sweet mangoes and aromatic spices.'
    ],
    kidWords: [
      { word: 'Mausoleum', emoji: '🏛️', meaning: 'A stately or magnificent tomb building.' },
      { word: 'Diwali', emoji: '🪔', meaning: 'The ancient Hindu festival of lights celebrating victory of light over darkness.' },
      { word: 'Peacock', emoji: '🦚', meaning: 'The national bird of India famous for its iridescent green-and-blue tail fan.' }
    ],
    didYouKnowOrigin: 'The name "India" is derived from the "Indus River", which flows through the northwestern subcontinent, originating from the Sanskrit word "Sindhu" meaning river or sea!',
    microQuiz: {
      question: 'What mathematical number was invented by ancient Indian mathematicians that revolutionized counting?',
      options: ['Zero (0)', 'Number 100', 'The fraction 1/2'],
      correctIndex: 0,
      explanation: 'Indian mathematician Aryabhata and scholars first defined Zero as both a concept and placeholder numeral!'
    },
    seeAlso: [
      { id: 'mount-everest', title: 'Mount Everest', category: 'countries-world' },
      { id: 'number-zero', title: 'Number Zero', category: 'numbers' }
    ]
  },
  {
    id: 'germany',
    title: 'Germany',
    symbol: '🇩🇪',
    pronunciation: '(JUR-muh-nee)',
    category: 'countries-world',
    tagline: 'The heart of Europe with fairy-tale castles, the Black Forest, and brilliant inventors.',
    analogy: {
      title: 'The Fairy-Tale Castle and Engineering Workshop',
      story: 'Picture fairy-tale castles with tall turrets nestled in misty green mountains! Germany is famous for inspiring the Brothers Grimm fairy tales (like Cinderella and Rapunzel), thick mossy Black Forests, cuckoo clocks carved from wood, and world-changing inventions like printing presses and automobiles.',
      emoji: '🏰'
    },
    howItWorks: {
      title: 'Innovations and Castles of Germany',
      points: [
        'Neuschwanstein Castle: The famous Bavarian cliffside castle with tall white stone towers that inspired the Disney Sleeping Beauty castle!',
        'The Printing Press: Johannes Gutenberg invented the movable type printing press in Mainz around 1440, launching modern books.',
        'The Black Forest (Schwarzwald): A scenic forested mountain range where woodcarvers create traditional mechanical cuckoo clocks.'
      ]
    },
    funFacts: [
      'Germany has over 25,000 historic castles and fortresses scattered across its green hills!',
      'Gummy bears were invented in Germany in 1922 by candy-maker Hans Riegel (the founder of Haribo)!',
      'The modern automobile car was invented by German engineer Karl Benz in 1886.'
    ],
    kidWords: [
      { word: 'Turret', emoji: '🏰', meaning: 'A small, slender tower projecting vertically from the wall of a castle.' },
      { word: 'Automobile', emoji: '🚗', meaning: 'A road vehicle powered by an internal engine or motor.' },
      { word: 'Glockenspiel', emoji: '🔔', meaning: 'A large musical clock with mechanical dancing figurines and chimes.' }
    ],
    didYouKnowOrigin: 'The Christmas tree tradition (Tannenbaum) originated in Germany in the 16th century, where families brought evergreen pine branches indoors to celebrate life during winter!',
    microQuiz: {
      question: 'Which famous fairy-tale castle in Germany inspired the iconic Disney castle?',
      options: ['Neuschwanstein Castle', 'Windsor Castle', 'Versailles Palace'],
      correctIndex: 0,
      explanation: 'Neuschwanstein Castle in Bavaria, built by King Ludwig II, served as the visual inspiration for Disney’s iconic castle!'
    },
    seeAlso: [
      { id: 'united-kingdom', title: 'United Kingdom', category: 'countries-world' },
      { id: 'how-clocks-tick', title: 'How Clocks Tick', category: 'how-things-work' }
    ]
  },
  {
    id: 'turkey',
    title: 'Turkey (Türkiye)',
    symbol: '🇹🇷',
    pronunciation: '(TUR-kee)',
    category: 'countries-world',
    tagline: 'The historic bridge connecting Europe and Asia with fairy chimneys and Grand Bazaars.',
    analogy: {
      title: 'The Great Bridge Between Two Continents',
      story: 'Turkey is a magical bridge between two giant continents — Europe and Asia! In Istanbul, you can stand on the Bosphorus Strait bridge with one foot facing Europe and the other facing Asia; in Cappadocia, hundreds of colorful hot air balloons float over honeycombed volcanic rock "fairy chimneys" at sunrise!',
      emoji: '🎈'
    },
    howItWorks: {
      title: 'Marvels of Turkey',
      points: [
        'Transcontinental Istanbul: The only major city in the world that sits directly on two continents (Europe and Asia) divided by the Bosphorus Strait.',
        'Cappadocia Fairy Chimneys: Tall, cone-shaped rock formations carved by wind and volcanic ash, where people hollowed out underground cities.',
        'The Grand Bazaar: One of the oldest and largest covered markets in the world with over 4,000 colorful shops selling lanterns, carpets, and spices.'
      ]
    },
    funFacts: [
      'Tulips originally came from the Ottoman Empire (Turkey) before becoming world-famous in the Netherlands!',
      'Santa Claus (Saint Nicholas) was actually born in the Mediterranean coastal town of Patara in ancient Turkey!',
      'Turkish delight (Lokum) is one of the oldest sweet confectionery treats in the world, flavored with rosewater and pistachios.'
    ],
    kidWords: [
      { word: 'Transcontinental', emoji: '🌉', meaning: 'Spanning or crossing across two different continents.' },
      { word: 'Strait', emoji: '🌊', meaning: 'A narrow passage of water connecting two seas or large water bodies.' },
      { word: 'Bazaar', emoji: '🏮', meaning: 'A vibrant marketplace consisting of street stalls selling diverse goods.' }
    ],
    didYouKnowOrigin: 'The Turkish Van cat is a famous rare white cat with one amber eye and one blue eye that loves swimming in water lakes!',
    microQuiz: {
      question: 'Which city in Turkey is the only city in the entire world located on two continents simultaneously?',
      options: ['Istanbul', 'Ankara', 'Izmir'],
      correctIndex: 0,
      explanation: 'Istanbul is split across both Europe and Asia by the scenic Bosphorus Strait waterway!'
    },
    seeAlso: [
      { id: 'seven-continents', title: 'The 7 Continents', category: 'countries-world' },
      { id: 'egypt', title: 'Egypt', category: 'countries-world' }
    ]
  },
  {
    id: 'mexico',
    title: 'Mexico',
    symbol: '🇲🇽',
    pronunciation: '(MEK-sih-koh)',
    category: 'countries-world',
    tagline: 'Land of ancient Mayan pyramids, Mariachi music, and millions of Monarch butterflies.',
    analogy: {
      title: 'The Sun-Drenched Land of Pyramids and Monarch Butterflies',
      story: 'Mexico is a land of rich ancient history, cheerful mariachi trumpets, and golden beaches! Deep in its pine forests, millions of orange Monarch butterflies fly 3,000 miles to sleep in giant blanket clusters on tree branches; on the Yucatan peninsula stand monumental stone step-pyramids built by Mayan astronomers.',
      emoji: '🦋'
    },
    howItWorks: {
      title: 'Treasures of Mexico',
      points: [
        'Chichen Itza Pyramid: An ancient Mayan step-pyramid engineered so that during equinoxes, the afternoon sun casts a shadow looking like a serpent slithering down the steps!',
        'Monarch Butterfly Biosphere: The winter home where millions of butterflies rest in the mountains after their epic migration from Canada.',
        'Rich Culinary Heritage: Ancient Mexicans were the first to cultivate corn (maize), avocados, tomatoes, vanilla, and chocolate from cacao beans!'
      ]
    },
    funFacts: [
      'Hot chocolate was invented in Mexico by ancient Mayans and Aztecs, who drank it as a frothy, sacred spiced beverage!',
      'Mexico has the oldest university in North America, founded in 1551 in Mexico City.',
      'The world’s smallest volcano, Cuexcomate, is in Puebla, Mexico, standing just 43 feet tall with a spiral staircase inside.'
    ],
    kidWords: [
      { word: 'Cenote', emoji: '🕳️', meaning: 'A natural deep water sinkhole in limestone sacred to the ancient Mayans.' },
      { word: 'Equinox', emoji: '☀️', meaning: 'The two days a year when day and night are of equal 12-hour length everywhere.' },
      { word: 'Cacao', emoji: '🍫', meaning: 'The tropical tree seeds from which cocoa and chocolate are crafted.' }
    ],
    didYouKnowOrigin: 'The Aztec word for chocolate was "Xocolatl", which meant "bitter water", because they brewed roasted cacao beans with chili peppers and vanilla!',
    microQuiz: {
      question: 'Which sweet treat was first cultivated and prepared by ancient Mayans and Aztecs in Mexico?',
      options: ['Chocolate from Cacao beans', 'Ice cream cones', 'Cotton candy'],
      correctIndex: 0,
      explanation: 'Ancient indigenous people in Mexico discovered how to harvest and brew delicious cacao beans into chocolate drinks!'
    },
    seeAlso: [
      { id: 'monarch-butterfly', title: 'Monarch Butterfly', category: 'animals-dinosaurs' },
      { id: 'brazil', title: 'Brazil', category: 'countries-world' }
    ]
  },
  {
    id: 'south-africa',
    title: 'South Africa',
    symbol: '🇿🇦',
    pronunciation: '(SOWTH AF-rih-kuh)',
    category: 'countries-world',
    tagline: 'The Rainbow Nation of flat-topped Table Mountain, penguins on beaches, and wildlife safaris.',
    analogy: {
      title: 'The Rainbow Nation Where Two Oceans Meet',
      story: 'At the southern tip of the African continent lies South Africa — a vibrant country nicknamed the "Rainbow Nation" because of its diverse multicultural people and 11 official languages! You can take a cable car to the flat, cloud-covered Table Mountain, see African penguins waddling on warm Boulders Beach, and spot lions on safari.',
      emoji: '🦁'
    },
    howItWorks: {
      title: 'Natural Wonders of South Africa',
      points: [
        'Table Mountain: A 3,500-foot mountain with a flat horizontal plateau 2 miles wide, often topped with a white cloud "tablecloth".',
        'Cape of Good Hope: The dramatic rocky peninsula where the Atlantic and Indian Oceans merge their currents.',
        'Kruger National Park: One of Africa’s largest game reserves, protecting the "Big Five" animals: lions, leopards, rhinos, elephants, and buffalos.'
      ]
    },
    funFacts: [
      'South Africa is the only country in the world with three official capital cities: Pretoria, Cape Town, and Bloemfontein!',
      'Boulders Beach near Cape Town is home to a famous wild colony of cheerful African Jackass Penguins!',
      'The world’s largest diamond ever discovered — the 3,106-carat Cullinan diamond — was found in South Africa in 1905.'
    ],
    kidWords: [
      { word: 'Plateau', emoji: '⛰️', meaning: 'An elevated flat area of land resembling a table.' },
      { word: 'Safari', emoji: '🚙', meaning: 'An overland expedition to observe or photograph wild animals in natural habitats.' },
      { word: 'Peninsula', emoji: '🏖️', meaning: 'A piece of land surrounded by water on three sides.' }
    ],
    didYouKnowOrigin: 'The phrase "Rainbow Nation" was coined by Archbishop Desmond Tutu and President Nelson Mandela to celebrate the unity of all different cultural communities living peacefully together!',
    microQuiz: {
      question: 'What is the shape of the famous Table Mountain overlooking Cape Town?',
      options: ['Flat on top like a tabletop', 'A sharp pointed needle', 'A hollow volcano crater'],
      correctIndex: 0,
      explanation: 'Table Mountain has a completely flat 2-mile-wide plateau summit that looks like a giant dining table!'
    },
    seeAlso: [
      { id: 'african-elephant', title: 'African Elephant', category: 'animals-dinosaurs' },
      { id: 'seven-continents', title: 'The 7 Continents', category: 'countries-world' }
    ]
  }
];
