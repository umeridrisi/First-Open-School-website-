import { EncyclopediaEntry } from '../../types';

export const NATURE_ENTRIES: EncyclopediaEntry[] = [
  {
    id: 'water-element',
    title: 'Water (H2O) & The Water Cycle',
    symbol: '💧',
    pronunciation: '(WAH-ter)',
    category: 'earth-elements',
    tagline: 'The shapeshifting liquid of life that journeys endlessly from oceans to clouds and rain.',
    analogy: {
      title: 'The Great Cloud-to-River Magic Merry-Go-Round',
      story: 'The water you drank today is the exact same water that dinosaurs drank 100 million years ago! The Sun acts like a giant heater that turns ocean water into invisible vapor steam (evaporation), cold high air squeezes it into fluffy white clouds (condensation), and when clouds get heavy, it rains down on mountain streams (precipitation) to flow back to the sea!',
      emoji: '🌧️'
    },
    howItWorks: {
      title: 'The 3 States of Water',
      points: [
        'Solid (Ice & Snow ❄️): Molecules lock into rigid, hexagonal crystals when chilled below 32°F (0°C).',
        'Liquid (Drinking Water & Oceans 🌊): Molecules slide easily past each other, taking the shape of any cup.',
        'Gas (Invisible Steam & Water Vapor ♨️): High energy molecules zip around freely into the warm atmosphere.'
      ]
    },
    funFacts: [
      'Water is the only natural substance on Earth found abundantly in all three states: solid, liquid, and gas!',
      'Ice floats on liquid water because water uniquely expands when it freezes — protecting fish in frozen winter lakes!',
      'Your own human body is about 60% water, and a juicy watermelon is over 92% water.'
    ],
    kidWords: [
      { word: 'Evaporation', emoji: '☀️', meaning: 'Liquid water warming up and turning into invisible air vapor.' },
      { word: 'Condensation', emoji: '☁️', meaning: 'Cooling water vapor gathering together to form cloud droplets.' },
      { word: 'Precipitation', emoji: '🌧️', meaning: 'Water falling from clouds as rain, snow, sleet, or hail.' }
    ],
    didYouKnowOrigin: 'Water molecules are called H2O because each one is shaped like a tiny Mickey Mouse head: one big Oxygen atom with two smaller Hydrogen "ears" attached!',
    microQuiz: {
      question: 'Why do ice cubes float to the top of a glass of water?',
      options: ['Ice expands when freezing and is less dense than liquid water', 'Ice is filled with helium', 'Because of the glass shape'],
      correctIndex: 0,
      explanation: 'Water is one of the rare liquids that expands as it freezes into crystalline ice, making it lighter and less dense than liquid water!'
    },
    handsOnExperiment: {
      title: 'The Zip-Lock Bag Water Cycle in a Window',
      materials: ['A clear zip-top plastic sandwich bag', '1/4 cup of water with 2 drops of blue food coloring', 'Permanent marker', 'Tape'],
      steps: [
        'Draw a Sun and a Cloud on the top half of the plastic bag with marker.',
        'Pour the blue water into the bottom of the bag and zip it completely airtight.',
        'Tape the bag upright onto a sunny south-facing window.',
        'Watch over the afternoon: The sun evaporates the water, drops condense on the bag walls, and "rain" trickles back down!'
      ],
      explanation: 'You created a self-contained miniature water cycle powered by the real sunlight outside your window!',
      emoji: '🧪'
    },
    kidTongueTwisterOrRhyme: 'Wandering warm water waterfalls wash wonderful white wilderness waves!',
    seeAlso: [
      { id: 'clouds-rain', title: 'Clouds & Rain', category: 'earth-elements' },
      { id: 'world-oceans', title: 'World Oceans', category: 'countries-world' }
    ]
  },
  {
    id: 'rainbows',
    title: 'Rainbows & The Light Spectrum',
    symbol: '🌈',
    pronunciation: '(RAYN-bohz)',
    category: 'earth-elements',
    tagline: 'When millions of falling raindrops act like tiny glass prisms to unwrap the colors of sunlight.',
    analogy: {
      title: 'The Sky’s Secret Color Unwrapping Ribbon',
      story: 'Sunlight looks clear or white, but it is actually a rainbow choir of 7 colors bundled together! When sunlight enters a curved falling raindrop, the water acts like a tiny glass prism, bending each color at a slightly different angle so they fan out into a glorious arch across the sky.',
      emoji: '🎨'
    },
    howItWorks: {
      title: 'The 7 Rainbow Colors in Order (ROY G. BIV)',
      points: [
        'Red (Longest wavelength, bent the least, sits on the outer rim).',
        'Orange, Yellow, Green (Middle wavelengths).',
        'Blue, Indigo, Violet (Shortest wavelength, bent the sharpest, sits on the inside rim).'
      ]
    },
    funFacts: [
      'Every rainbow is actually a full 360-degree complete circle! We only see a half-arch from the ground because the horizon cuts off the bottom half.',
      'If you fly in an airplane during a sun shower, you can look down and see the entire glowing full-circle rainbow below you!',
      'No two people ever see the exact same rainbow — because each person stands at a slightly different angle to the raindrops.'
    ],
    kidWords: [
      { word: 'Refraction', emoji: '💎', meaning: 'The bending of light rays as they pass from air into water or glass.' },
      { word: 'Spectrum', emoji: '🌈', meaning: 'The complete band of colors produced by separating white light.' },
      { word: 'Prism', emoji: '🔺', meaning: 'A clear triangular optical object that separates light into colors.' }
    ],
    didYouKnowOrigin: 'Remember the 7 colors in order with the fun name "ROY G. BIV": Red, Orange, Yellow, Green, Blue, Indigo, Violet!',
    microQuiz: {
      question: 'What true shape is a rainbow in the sky when viewed from an airplane high above?',
      options: ['A full 360-degree circle!', 'A straight horizontal line', 'A triangle'],
      correctIndex: 0,
      explanation: 'Rainbows are complete optical circles, but the ground blocks the bottom half when standing on Earth!'
    },
    handsOnExperiment: {
      title: 'Make a Kitchen Rainbow with a Mirror',
      materials: ['A shallow bowl of water', 'A small pocket mirror', 'A flashlight (or bright direct sunlight)', 'A white sheet of paper or wall'],
      steps: [
        'Place the mirror at an angle inside the shallow bowl of water.',
        'Shine your bright flashlight into the water hitting the submerged mirror.',
        'Hold the white sheet of paper above the bowl to catch the reflected beam.',
        'Adjust the angle until a vibrant, colorful rainbow appears projected onto the white paper!'
      ],
      explanation: 'The layer of water over the mirror bends the light rays, separating white light into its component colors!',
      emoji: '🪞'
    },
    seeAlso: [
      { id: 'the-sun', title: 'The Sun', category: 'solar-system' },
      { id: 'water-element', title: 'Water (H2O)', category: 'earth-elements' }
    ]
  },
  {
    id: 'volcanoes',
    title: 'Volcanoes & Magma',
    symbol: '🌋',
    pronunciation: '(vol-KAY-nohz and MAG-muh)',
    category: 'earth-elements',
    tagline: 'Earth’s fiery vents where red-hot molten rock rises from deep within our planet’s mantle.',
    analogy: {
      title: 'Earth’s Giant Champagne Bottle and Pressure Valve',
      story: 'Deep under Earth’s solid crust is a super-hot layer of melted rock called magma filled with dissolved gas bubbles. Just like shaking a bottle of bubbly soda and opening the cap, when pressure builds up underground, the magma blasts through fissures as glowing lava fountains and ash clouds!',
      emoji: '🍾'
    },
    howItWorks: {
      title: 'Magma vs. Lava',
      points: [
        'Magma (Underground 🕳️): Liquid molten rock sitting in underground magma chambers.',
        'Lava (Above Ground 🌋): Molten rock that breaks through the surface and cools into fresh volcanic land.',
        'Ring of Fire: A 25,000-mile horseshoe path around the Pacific Ocean where 75% of Earth’s active volcanoes sit.'
      ]
    },
    funFacts: [
      'The Hawaiian Islands were created entirely by underwater shield volcanoes piling up lava layers over millions of years!',
      'Pumice is a special volcanic rock filled with so many trapped gas bubbles that it can actually float on water like a sponge!',
      'The largest active volcano on Earth is Mauna Loa in Hawaii, rising over 30,000 feet from the ocean floor (taller than Everest from base to peak).'
    ],
    kidWords: [
      { word: 'Magma', emoji: '🔥', meaning: 'Hot liquid rock located beneath Earth’s surface crust.' },
      { word: 'Lava', emoji: '🌋', meaning: 'Hot molten rock that has erupted onto Earth’s surface.' },
      { word: 'Eruption', emoji: '💥', meaning: 'The sudden release of gas, ash, and lava from a volcano.' }
    ],
    didYouKnowOrigin: 'The word "Volcano" comes from "Vulcan", the ancient Roman god of fire, blacksmithing, and metalworking who lived inside Mount Etna!',
    microQuiz: {
      question: 'What is molten melted rock called while it is still underground inside Earth?',
      options: ['Magma', 'Lava', 'Basalt'],
      correctIndex: 0,
      explanation: 'Underground it is called magma; once it breaks out onto the surface it is called lava!'
    },
    seeAlso: [
      { id: 'earth-soil', title: 'Earth & Rocks', category: 'earth-elements' },
      { id: 'planet-earth', title: 'Planet Earth', category: 'solar-system' }
    ]
  },
  {
    id: 'trees-element',
    title: 'Trees & Photosynthesis',
    symbol: '🌳',
    pronunciation: '(TREES and foh-toh-SIN-thuh-sis)',
    category: 'earth-elements',
    tagline: 'The green living lungs of Earth that drink sunlight and carbon dioxide to exhale fresh oxygen.',
    analogy: {
      title: 'Solar-Powered Sugar Kitchens and Earth’s Lungs',
      story: 'Every green leaf is a high-tech solar power plant! Inside the leaf, green chlorophyll molecules catch rays of warm sunlight and mix it with water from roots and carbon dioxide from the air to bake sweet glucose tree food while releasing crisp, fresh oxygen for you and me to breathe!',
      emoji: '🍃'
    },
    howItWorks: {
      title: 'The Recipe of Photosynthesis',
      points: [
        'Ingredients In: Sunlight (☀️) + Carbon Dioxide from air (CO2) + Water from soil (H2O).',
        'Products Out: Sweet Sugar Glucose for plant growth (C6H12O6) + Fresh Pure Oxygen gas (O2).',
        'Woody Rings: A tree adds a new layer of wood inside its trunk every year, creating annual growth rings that tell its age and climate history.'
      ]
    },
    funFacts: [
      'A single mature leafy oak tree can produce enough oxygen in one season for two people to breathe all year long!',
      'The oldest living individual tree in the world is a Great Basin Bristlecone Pine named "Methuselah" — over 4,850 years old!',
      'Trees communicate with each other through underground fungal networks nicknamed the "Wood Wide Web".'
    ],
    kidWords: [
      { word: 'Photosynthesis', emoji: '🌱', meaning: 'The process green plants use to synthesize food from sunlight, water, and CO2.' },
      { word: 'Chlorophyll', emoji: '🟢', meaning: 'The green pigment in plant cells that absorbs light energy.' },
      { word: 'Bark', emoji: '🪵', meaning: 'The tough, protective outer armor skin of a tree trunk.' }
    ],
    didYouKnowOrigin: 'The giant California Coast Redwoods are the tallest living things on Earth, soaring over 380 feet tall into the clouds — taller than the Statue of Liberty!',
    microQuiz: {
      question: 'What gas do green trees release into the air for humans and animals to breathe?',
      options: ['Oxygen', 'Helium', 'Smoke'],
      correctIndex: 0,
      explanation: 'Through photosynthesis, trees take in carbon dioxide and release fresh, clean oxygen!'
    },
    seeAlso: [
      { id: 'brazil', title: 'Brazil (Amazon Rainforest)', category: 'countries-world' },
      { id: 'air-element', title: 'Air & Oxygen', category: 'earth-elements' }
    ]
  },
  {
    id: 'lightning-thunder',
    title: 'Lightning & Thunder',
    symbol: '⚡',
    pronunciation: '(LYTE-ning and THUN-der)',
    category: 'earth-elements',
    tagline: 'When storm cloud ice crystals build giant static electricity sparks that heat air hotter than the Sun.',
    analogy: {
      title: 'The Sky’s Colossal Static Electric Snap and Sonic Boom',
      story: 'Have you ever shuffled your socks across a carpet and felt a tiny "zap" when touching a doorknob? Lightning is that exact same static spark, but supersized inside a 40,000-foot storm cloud where billions of hail and ice crystals collide, charging the cloud with millions of volts of electrical energy!',
      emoji: '🌩️'
    },
    howItWorks: {
      title: 'Why Flash Comes Before the Boom',
      points: [
        'The Lightning Flash: Electricity shoots between the cloud and the ground at 220,000 miles per hour, heating the surrounding air channel to 50,000°F (5 times hotter than the surface of the Sun!).',
        'The Thunder Sound: The superheated air explodes outward with a supersonic shockwave, creating the deep rumbling boom.',
        'Speed Difference: Light travels almost instantly (186,000 miles per second), while sound travels much slower (about 1 mile every 5 seconds). Counting seconds between flash and boom tells you how far away the storm is!'
      ]
    },
    funFacts: [
      'Planet Earth experiences about 8.6 million lightning strikes every single day — that’s 100 strikes every second!',
      'Lake Maracaibo in Venezuela is the lightning capital of the world, getting struck by lightning up to 300 nights a year.',
      'Trees struck by lightning sometimes have their sap instantly boil into steam, blowing the bark off the trunk.'
    ],
    kidWords: [
      { word: 'Static Electricity', emoji: '⚡', meaning: 'An electric charge built up by the rubbing or collision of surfaces.' },
      { word: 'Shockwave', emoji: '💥', meaning: 'A sharp compression sound wave created when air expands faster than sound.' },
      { word: 'Thunderstorm', emoji: '⛈️', meaning: 'A weather storm featuring thunder, lightning, heavy rain, and strong winds.' }
    ],
    didYouKnowOrigin: 'If you count the seconds between seeing a lightning flash and hearing the thunder, divide that number by 5 to know how many miles away the storm is!',
    microQuiz: {
      question: 'Why do we see the bright lightning flash before we hear the loud thunder boom?',
      options: ['Light travels much faster through air than sound does', 'Thunder happens on a delay timer', 'Clouds muffle all sound first'],
      correctIndex: 0,
      explanation: 'Light travels at 186,000 miles per second, while sound travels at only 767 miles per hour!'
    },
    seeAlso: [
      { id: 'electricity-power', title: 'Electricity', category: 'how-things-work' },
      { id: 'clouds-rain', title: 'Clouds & Rain', category: 'earth-elements' }
    ]
  },
  {
    id: 'four-seasons',
    title: 'The 4 Seasons',
    symbol: '🍂',
    pronunciation: '(FOR SEE-zunz)',
    category: 'earth-elements',
    tagline: 'Spring, Summer, Autumn, and Winter — the rhythm of Earth’s tilted planetary dance.',
    analogy: {
      title: 'Earth’s Tilted Orbit Dance Around the Sun',
      story: 'Why do we have cold snowy winters and warm sunny summers? Not because Earth moves closer or further from the Sun! Earth sits at a permanent 23.5-degree tilt. When the Northern half tilts towards the Sun, it enjoys long warm summer days; when it tilts away, it experiences cozy winter!',
      emoji: '🌻'
    },
    howItWorks: {
      title: 'The Four Seasons in Rhythm',
      points: [
        'Spring (🌱): Days grow longer, seeds sprout, baby animals are born, and flowers bloom.',
        'Summer (☀️): Direct sunlight creates warm temperatures and long, joyful outdoor days.',
        'Autumn / Fall (🍁): Daylight shrinks, temperatures cool, and green leaves turn gold, amber, and red.',
        'Winter (❄️): Slanted indirect sunlight brings cool frosty weather, snow, and resting nature.'
      ]
    },
    funFacts: [
      'When it is Summer in North America and Europe, it is the middle of snowy Winter in Australia and South America!',
      'At the North and South Poles, the tilt is so extreme that there is 6 months of continuous daylight followed by 6 months of total night.',
      'Near the Equator, temperatures stay warm and consistent all year without cold winter freezes.'
    ],
    kidWords: [
      { word: 'Axial Tilt', emoji: '📐', meaning: 'The 23.5-degree lean of Earth’s spinning axis relative to its orbit.' },
      { word: 'Solstice', emoji: '☀️', meaning: 'The two days of the year with the most (summer) or least (winter) daylight.' },
      { word: 'Equinox', emoji: '⚖️', meaning: 'The two days each year when day and night are of equal 12-hour length.' }
    ],
    didYouKnowOrigin: 'Leaves change color in autumn because as sunlight fades, trees stop making green chlorophyll, revealing the vibrant orange and yellow carotene pigments that were hidden underneath all summer!',
    microQuiz: {
      question: 'What causes the changing of the four seasons on Earth?',
      options: ['Earth’s permanent 23.5-degree tilt as it orbits the Sun', 'The Sun turning off at night', 'The Moon moving closer'],
      correctIndex: 0,
      explanation: 'Earth’s axial tilt causes different hemispheres to receive more direct or indirect sunlight during its yearly orbit!'
    },
    seeAlso: [
      { id: 'planet-earth', title: 'Planet Earth', category: 'solar-system' },
      { id: 'the-sun', title: 'The Sun', category: 'solar-system' }
    ]
  }
];
