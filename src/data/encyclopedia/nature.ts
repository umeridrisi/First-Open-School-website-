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
  },
  {
    id: 'photosynthesis-plants',
    title: 'Photosynthesis & Plant Superpowers',
    symbol: '🌱',
    pronunciation: '(foh-toh-SIN-thuh-sis)',
    category: 'earth-elements',
    tagline: 'The miraculous green kitchen turning sunlight, air, and water into sweet food and fresh oxygen.',
    analogy: {
      title: 'The Solar-Powered Sugar Bakery in Every Leaf',
      story: 'Every green leaf is a miniature solar-powered kitchen! Plants don’t have mouths to eat hamburgers or apples; instead, their tiny green chef molecules (chlorophyll) catch rays of golden sunlight, drink water from the soil through root straws, suck in carbon dioxide air, and bake delicious plant sugar while gifting us pure, fresh oxygen to breathe!',
      emoji: '🍃'
    },
    howItWorks: {
      title: 'The Photosynthesis Recipe',
      points: [
        'Sunlight (Solar Power): Chlorophyll pigment traps photons of light in microscopic solar factories called chloroplasts.',
        'Water (H2O): Sucked up through capillary tree root tubes from the ground to the leaves.',
        'Carbon Dioxide (CO2): Absorbed from the air through microscopic leaf breathing pores called stomata.',
        'The Output: Glucose sugar for plant energy and fresh Oxygen (O2) released for humans and animals to breathe!'
      ]
    },
    funFacts: [
      'Over 50% to 80% of all the oxygen on planet Earth is produced not by land trees, but by microscopic ocean algae and phytoplankton!',
      'Leaves look green because chlorophyll absorbs blue and red wavelengths of light, reflecting green back to our eyes.',
      'Without photosynthesis, Earth would have no breathable oxygen and no animal life could survive.'
    ],
    kidWords: [
      { word: 'Chlorophyll', emoji: '🟢', meaning: 'The green pigment in plant cells that absorbs light energy.' },
      { word: 'Stomata', emoji: '🕳️', meaning: 'Microscopic mouth-like pores on leaf surfaces that exchange gases.' },
      { word: 'Glucose', emoji: '🍬', meaning: 'A simple sugar produced by plants for energy and growth.' }
    ],
    didYouKnowOrigin: 'The word "Photosynthesis" comes from two Greek words: "Photo" (meaning light) and "Synthesis" (meaning putting together) — literally "putting things together with light"!',
    microQuiz: {
      question: 'What gas do green plants absorb from the air during photosynthesis?',
      options: ['Carbon Dioxide (CO2)', 'Helium', 'Pure Gold'],
      correctIndex: 0,
      explanation: 'Plants absorb carbon dioxide from the air and release fresh oxygen back into the atmosphere!'
    },
    handsOnExperiment: {
      title: 'Watch a Leaf Breathe Underwater',
      materials: ['A freshly plucked green leaf', 'A clear glass bowl filled with lukewarm water', 'A small clean pebble'],
      steps: [
        'Place the fresh green leaf in the bowl of water, fully submerged.',
        'Rest a small pebble on the leaf to keep it from floating to the surface.',
        'Place the bowl on a sunny windowsill for 1 hour.',
        'Look closely: Tiny sparkling bubbles of oxygen gas will form on the leaf edges as it breathes out in real time!'
      ],
      explanation: 'Under sunlight, the submerged leaf conducts photosynthesis and releases oxygen gas bubbles that cling to its surface!',
      emoji: '🫧'
    },
    seeAlso: [
      { id: 'trees-forests', title: 'Trees & Forests', category: 'earth-elements' },
      { id: 'the-sun', title: 'The Sun', category: 'solar-system' }
    ]
  },
  {
    id: 'trees-forests',
    title: 'Trees & The Wood Wide Web',
    symbol: '🌳',
    pronunciation: '(TREEZ and FOR-ists)',
    category: 'earth-elements',
    tagline: 'Ancient woody giants connected by an underground fungal internet that shares food and warnings.',
    analogy: {
      title: 'The Underground Forest Internet and Living Towers',
      story: 'Did you know trees talk and share with each other? Underneath the forest floor lies a vast, microscopic fungal network called mycorrhizae — the "Wood Wide Web"! Mother trees send sugar nutrients through this fungal web to feed baby saplings growing in dark shade, and send chemical warnings when pests attack!',
      emoji: '🍄'
    },
    howItWorks: {
      title: 'Anatomy of a Tree',
      points: [
        'Roots: Anchor the tree against storms and absorb gallons of water and minerals.',
        'Trunk & Bark: Outer armor protecting inner pipelines — Xylem pumps water up to leaves; Phloem carries sugar food down to roots.',
        'Canopy: Leafy umbrellas that shade the ground, cool the air, and provide homes for birds and squirrels.',
        'Tree Rings: Count the circular rings in a cut trunk — each light and dark ring pair represents one full year of growth!'
      ]
    },
    funFacts: [
      'The oldest living individual tree on Earth is a Bristlecone Pine named Methuselah in California, over 4,850 years old!',
      'The tallest trees on Earth are Coast Redwoods, standing over 380 feet tall — taller than the Statue of Liberty!',
      'A single mature leafy oak tree can absorb 100 gallons of water per day and breathe out enough oxygen for four people.'
    ],
    kidWords: [
      { word: 'Mycorrhizae', emoji: '🍄', meaning: 'Symbiotic underground fungal threads connecting tree roots to trade nutrients.' },
      { word: 'Canopy', emoji: '🌿', meaning: 'The uppermost leafy roof layer formed by mature tree crowns.' },
      { word: 'Deciduous', emoji: '🍂', meaning: 'Trees that shed their leaves seasonally every autumn.' }
    ],
    didYouKnowOrigin: 'Dendrochronology is the scientific study of tree rings to date ancient climates and historic wooden buildings!',
    microQuiz: {
      question: 'How can you tell the exact age of a fallen tree?',
      options: ['Count the concentric growth rings inside its trunk', 'Weigh its branches', 'Measure the bark thickness'],
      correctIndex: 0,
      explanation: 'Trees add a new layer of wood every growing season, forming visible annual rings that record their age and climate history!'
    },
    seeAlso: [
      { id: 'photosynthesis-plants', title: 'Photosynthesis', category: 'earth-elements' },
      { id: 'four-seasons', title: 'The 4 Seasons', category: 'earth-elements' }
    ]
  },
  {
    id: 'earthquakes-tectonics',
    title: 'Earthquakes & Plate Tectonics',
    symbol: '🌋',
    pronunciation: '(URTH-kwayks and TEK-ton-iks)',
    category: 'earth-elements',
    tagline: 'When Earth’s giant puzzle-piece crust plates grind and snap, shaking the ground.',
    analogy: {
      title: 'The Cracked Eggshell and Snapping Rubber Band',
      story: 'Earth’s hard outer rocky crust is not one solid shell — it is cracked into a dozen giant moving puzzle pieces called tectonic plates, floating on hot, gooey molten rock! As plates crawl against each other, they get stuck. Elastic friction builds up until — SNAP! — they suddenly jerk free, sending seismic shockwaves rumbling through the ground!',
      emoji: '🧩'
    },
    howItWorks: {
      title: 'How Ground Shakes',
      points: [
        'Fault Lines: Fractures in the crust where rock blocks slide past each other (like the famous San Andreas Fault in California).',
        'Hypocenter & Epicenter: The hypocenter is where the snap begins deep underground; the epicenter is the point directly above on Earth’s surface.',
        'Seismic Waves: Primary (P) compression waves and Secondary (S) shear waves ripple through the ground at miles per second.'
      ]
    },
    funFacts: [
      'Over 500,000 earthquakes occur around the world every year, but humans only feel about 100,000 of them because most are tiny!',
      'The "Ring of Fire" around the Pacific Ocean is home to 90% of the world’s earthquakes and 75% of all active volcanoes.',
      'Scientists measure earthquake vibration waves using sensitive instruments called Seismographs.'
    ],
    kidWords: [
      { word: 'Tectonic Plate', emoji: '🗺️', meaning: 'A massive, irregularly shaped slab of solid rock that makes up Earth’s crust.' },
      { word: 'Seismograph', emoji: '📈', meaning: 'An instrument that measures and records details of earthquake ground vibrations.' },
      { word: 'Epicenter', emoji: '📍', meaning: 'The point on Earth’s surface directly above where an earthquake starts.' }
    ],
    didYouKnowOrigin: 'The word "Seismic" comes from the ancient Greek word "seismos", which meant an earthquake or violent shaking!',
    microQuiz: {
      question: 'What is the crack in Earth’s crust called where two tectonic plates slide against each other?',
      options: ['A Fault Line', 'A Trench Pipe', 'A Crater Rim'],
      correctIndex: 0,
      explanation: 'A fault line is a geological fracture where rock masses slip past each other, releasing earthquake energy!'
    },
    seeAlso: [
      { id: 'volcanoes-element', title: 'Volcanoes', category: 'earth-elements' },
      { id: 'mount-everest', title: 'Mount Everest', category: 'countries-world' }
    ]
  },
  {
    id: 'tornadoes-hurricanes',
    title: 'Tornadoes & Hurricanes',
    symbol: '🌪️',
    pronunciation: '(tor-NAY-dohz and HUR-ih-kaynz)',
    category: 'earth-elements',
    tagline: 'The planet’s wildest weather vortexes: spinning land funnels and giant ocean storms.',
    analogy: {
      title: 'The Spinning Bathtub Whirlpool of the Atmosphere',
      story: 'Have you ever pulled the drain plug in a bathtub and watched the water spin into a whirlpool? Tornadoes and hurricanes are giant air whirlpools! When warm, moist rising air collides with cool, dry descending air under strong crosswinds, the atmosphere starts spinning into a twisting vortex of unbelievable power.',
      emoji: '🌀'
    },
    howItWorks: {
      title: 'Tornadoes vs. Hurricanes',
      points: [
        'Tornadoes (🌪️): Fast, narrow funnels descending from supercell storm clouds onto land, with winds up to 300 mph lasting minutes to an hour.',
        'Hurricanes / Typhoons (🌀): Colossal ocean storms spanning 300 to 500 miles wide, powered by warm tropical seawater over many days.',
        'The Eye of the Hurricane: The calm, sunny, clear center of the storm surrounded by the violent, roaring Eyewall.'
      ]
    },
    funFacts: [
      'The central United States has an area called "Tornado Alley" where cold Canadian air and warm Gulf of Mexico air collide frequently.',
      'Hurricanes spin counterclockwise in the Northern Hemisphere, but spin clockwise in the Southern Hemisphere because of Earth’s rotation (the Coriolis Effect)!',
      'Hurricane hunter pilots fly specially fortified airplanes directly through violent hurricane eyewalls to drop scientific sensor probes.'
    ],
    kidWords: [
      { word: 'Vortex', emoji: '🌀', meaning: 'A whirling mass of fluid or air with a low-pressure center.' },
      { word: 'Supercell', emoji: '⛈️', meaning: 'A severe thunderstorm featuring a persistent rotating updraft called a mesocyclone.' },
      { word: 'Eyewall', emoji: '👁️', meaning: 'The ring of intense thunderstorms immediately surrounding the calm eye of a hurricane.' }
    ],
    didYouKnowOrigin: 'Hurricanes are called "Hurricanes" in the Atlantic Ocean, "Typhoons" in the northwestern Pacific, and "Tropical Cyclones" in the Indian Ocean — they are all the exact same weather phenomenon!',
    microQuiz: {
      question: 'What is weather like inside the very center ("the Eye") of a powerful hurricane?',
      options: ['Surprisingly calm, clear, and sunny', 'The windiest spot on Earth', 'Freezing blizzard snow'],
      correctIndex: 0,
      explanation: 'The Eye of a hurricane is a peaceful cylinder of sinking air with calm breezes and clear blue skies, surrounded by the fierce eyewall!'
    },
    seeAlso: [
      { id: 'clouds-rain', title: 'Clouds & Rain', category: 'earth-elements' },
      { id: 'lightning-thunder', title: 'Lightning & Thunder', category: 'earth-elements' }
    ]
  },
  {
    id: 'ocean-tides-coral',
    title: 'Ocean Tides & Coral Reefs',
    symbol: '🪸',
    pronunciation: '(TYDZ and KOR-ul REEFS)',
    category: 'earth-elements',
    tagline: 'The Moon’s gravitational water dance and the vibrant underwater living rock cities.',
    analogy: {
      title: 'The Moon’s Ocean Squeeze and The Underwater Rainforest',
      story: 'Twice a day, the ocean water rises high on the beach and then slips far away! Why? The Moon acts like a giant invisible magnet pulling Earth’s ocean water toward it in a gravitational bulge. Down beneath the warm waves live Coral Reefs — bustling underwater cities built by millions of tiny soft creatures that build stone houses out of limestone!',
      emoji: '🐠'
    },
    howItWorks: {
      title: 'How Tides and Corals Thrive',
      points: [
        'Lunar Gravity Pull: The Moon’s gravity tugs on Earth’s oceans, creating two high tides and two low tides roughly every 24 hours and 50 minutes.',
        'Coral Polyps: Corals are not plants or rocks — they are tiny animals called polyps that secrete calcium carbonate hard skeletons.',
        'Zooxanthellae Partnership: Tiny algae live inside coral polyps, providing food via photosynthesis in exchange for safe shelter.'
      ]
    },
    funFacts: [
      'The Bay of Fundy in Canada has the highest tides on Earth, with water rising and falling up to 53 feet (as tall as a 5-story building)!',
      'The Great Barrier Reef in Australia is so gigantic that it can be seen by astronauts looking down from outer space orbit.',
      'Coral reefs cover less than 1% of the ocean floor, but provide shelter and nurseries for over 25% of all marine life!'
    ],
    kidWords: [
      { word: 'Polyp', emoji: '🪸', meaning: 'A tiny, soft-bodied animal that builds hard calcium carbonate coral cups.' },
      { word: 'High Tide', emoji: '🌊', meaning: 'The state of the tide when the ocean water reaches its highest level.' },
      { word: 'Limestone', emoji: '🪨', meaning: 'Hard sedimentary rock composed mainly of calcium carbonate from ancient shells and coral.' }
    ],
    didYouKnowOrigin: 'Corals reproduce in a magical annual event: on a specific moonlit night once a year, entire coral reefs release millions of glowing eggs into the sea simultaneously like an underwater snowstorm!',
    microQuiz: {
      question: 'What celestial neighbor’s gravity is primarily responsible for the rising and falling of ocean tides?',
      options: ['The Moon', 'Planet Mars', 'Pluto'],
      correctIndex: 0,
      explanation: 'The Moon’s gravitational attraction pulls Earth’s liquid oceans into a bulge, creating high and low tides as Earth rotates!'
    },
    seeAlso: [
      { id: 'world-oceans', title: 'World Oceans', category: 'countries-world' },
      { id: 'the-moon', title: 'The Moon', category: 'solar-system' }
    ]
  },
  {
    id: 'rocks-fossils',
    title: 'Rocks, Minerals & Dinosaur Fossils',
    symbol: '💎',
    pronunciation: '(ROKS, MIN-er-ulz and FOS-ulz)',
    category: 'earth-elements',
    tagline: 'The three types of Earth stone and the million-year-old rock casts preserving ancient dinosaur bones.',
    analogy: {
      title: 'Earth’s Hard-Cover History Book and Bone Time Machines',
      story: 'Every rock you pick up in your yard is a time machine! The ground beneath your shoes is made of three great rock families: rocks baked by fiery volcanoes (Igneous), rocks pressed down from ancient river mud (Sedimentary), and rocks squeezed by deep mountain pressure (Metamorphic). Hidden inside sedimentary mud are real dinosaur fossils!',
      emoji: '🦖'
    },
    howItWorks: {
      title: 'The 3 Rock Types & Fossilization',
      points: [
        'Igneous Rocks (🌋): Melted magma or lava that cools into stone (like black glass obsidian or kitchen granite).',
        'Sedimentary Rocks (🏖️): Layers of sand, mud, and shells compressed over millions of years (sandstone, limestone) — where fossils are found!',
        'Metamorphic Rocks (💎): Pre-existing rocks transformed by searing heat and tectonic pressure deep inside Earth (limestone turns into marble!).',
        'Fossilization: Minerals slowly replace bone cells molecule-by-molecule, turning bone into rock-hard stone casts over millions of years.'
      ]
    },
    funFacts: [
      'Diamonds are the hardest natural mineral on Earth, formed over 90 miles deep under immense heat and pressure from pure carbon!',
      'Pumice is an igneous volcanic rock so full of trapped air gas bubbles that it actually floats on top of water like a cork!',
      'Coprolite is real fossilized dinosaur poop — scientists study it to find out what prehistoric creatures ate for lunch!'
    ],
    kidWords: [
      { word: 'Sedimentary', emoji: '🏜️', meaning: 'Rock formed from accumulated layers of sediment deposited by water or wind.' },
      { word: 'Fossil', emoji: '🦴', meaning: 'The preserved remains or traces of ancient organisms embedded in rock.' },
      { word: 'Mineral', emoji: '💎', meaning: 'A naturally occurring inorganic solid substance with a definite chemical formula.' }
    ],
    didYouKnowOrigin: 'The word "Fossil" comes from the Latin verb "fodere", which meant "to dig up" from the ground!',
    microQuiz: {
      question: 'Which of the three rock types is where dinosaur bones and prehistoric fossils are preserved?',
      options: ['Sedimentary rock (pressed layers of mud and sand)', 'Igneous melted lava', 'Plastic rocks'],
      correctIndex: 0,
      explanation: 'Sedimentary rock layers gently bury organisms, allowing minerals over millions of years to turn bones into stone fossils!'
    },
    seeAlso: [
      { id: 'tyrannosaurus-rex', title: 'T-Rex', category: 'animals-dinosaurs' },
      { id: 'volcanoes-element', title: 'Volcanoes', category: 'earth-elements' }
    ]
  },
  {
    id: 'auroras-northern-lights',
    title: 'Northern Lights & Auroras',
    symbol: '✨',
    pronunciation: '(aw-ROH-ruh and NOR-thern LYTS)',
    category: 'earth-elements',
    tagline: 'Dazzling ribbons of glowing emerald, violet, and ruby light dancing across the polar skies.',
    analogy: {
      title: 'The Sky’s Cosmic Neon Glow Stick',
      story: 'Imagine looking up at a snowy arctic night sky and seeing giant green and purple ribbons of light waving like silk curtains in the breeze! That is the Aurora Borealis. It happens when electric particles blasted from the Sun crash into Earth’s magnetic shield, exciting atmospheric gases into glowing like a giant neon sign!',
      emoji: '🌌'
    },
    howItWorks: {
      title: 'The Science of the Sky Glow',
      points: [
        'Solar Wind: The Sun constantly blasts a stream of high-energy charged protons and electrons across space.',
        'Magnetic Funnel: Earth’s magnetic field deflects most particles, but funnels some down toward the North and South magnetic poles.',
        'Atmospheric Glow: Solar particles slam into oxygen atoms (glowing vibrant green or rare ruby red) and nitrogen molecules (glowing rich purple and blue).'
      ]
    },
    funFacts: [
      'In the Northern Hemisphere they are called Aurora Borealis (Northern Lights); in the Southern Hemisphere near Antarctica they are called Aurora Australis (Southern Lights)!',
      'Astronauts looking down from the International Space Station can see auroras glowing like green halos right below them!',
      'Other planets with magnetic fields and atmospheres — like Jupiter and Saturn — have spectacular aurora light shows too!'
    ],
    kidWords: [
      { word: 'Aurora', emoji: '✨', meaning: 'A natural luminous atmospheric display seen in polar regions.' },
      { word: 'Solar Wind', emoji: '💨', meaning: 'A continuous stream of charged particles released from the Sun’s corona.' },
      { word: 'Geomagnetic', emoji: '🧲', meaning: 'Relating to the natural magnetic field of planet Earth.' }
    ],
    didYouKnowOrigin: 'Galileo Galilei named the phenomenon in 1619 after Aurora (the Roman goddess of dawn) and Boreas (the Greek god of the north wind)!',
    microQuiz: {
      question: 'What causes the vivid green and purple colors of the Northern Lights?',
      options: ['Solar particles colliding with oxygen and nitrogen atoms in Earth’s atmosphere', 'Reflections off polar ice', 'Flashlights'],
      correctIndex: 0,
      explanation: 'Solar particles energize oxygen atoms to glow green and red, and nitrogen molecules to glow purple and blue!'
    },
    seeAlso: [
      { id: 'the-sun', title: 'The Sun', category: 'solar-system' },
      { id: 'planet-earth', title: 'Planet Earth', category: 'solar-system' }
    ]
  },
  {
    id: 'glaciers-icebergs',
    title: 'Glaciers & Giant Icebergs',
    symbol: '🧊',
    pronunciation: '(GLAY-shurz and YS-burgz)',
    category: 'earth-elements',
    tagline: 'Vast rivers of ancient compressed blue ice and floating ocean towers hiding 90% below.',
    analogy: {
      title: 'The Slow-Moving Frozen Bulldozers and Ice Castles',
      story: 'A glacier is not just a pile of snow — it is a colossal river of rock-hard blue ice miles long that slowly crawls down mountains like a frozen bulldozer, carving out giant U-shaped valleys! When a glacier reaches the ocean edge, gigantic chunks break off with a thunderous BOOM (calving) into floating Icebergs!',
      emoji: '🏔️'
    },
    howItWorks: {
      title: 'Inside the Ice Giants',
      points: [
        'Compressed Blue Ice: Centuries of heavy snowfall compress snowflakes so tightly that air bubbles are squeezed out, absorbing red light and reflecting brilliant crystal blue.',
        'Gravity Flow: Tremendous weight makes deep ice slightly pliable, causing the glacier to creep downhill inches or feet per day.',
        'The Tip of the Iceberg: Ice is slightly less dense than seawater, so 90% of an iceberg’s mass is hidden underwater, with only 10% visible above the waves!'
      ]
    },
    funFacts: [
      'Glaciers store about 69% of all the freshwater on the entire planet Earth!',
      'The largest iceberg ever recorded was Iceberg B-15 in Antarctica — larger than the entire island of Jamaica!',
      'Glacier ice is so dense that sound travels through it with eerie, beautiful acoustic cracks and pops.'
    ],
    kidWords: [
      { word: 'Calving', emoji: '💥', meaning: 'The dramatic breaking off of a mass of ice from a glacier into the water.' },
      { word: 'Meltwater', emoji: '💧', meaning: 'Fresh water formed by the melting of snow or glacier ice.' },
      { word: 'Moraine', emoji: '🪨', meaning: 'A ridge or mound of rock and gravel left behind by a moving glacier.' }
    ],
    didYouKnowOrigin: 'The word "Iceberg" is a translation of the Dutch word "ijsberg", which literally means "Ice Mountain"!',
    microQuiz: {
      question: 'How much of an ocean iceberg is hidden beneath the water’s surface?',
      options: ['About 90% (Only the top 10% sticks out!)', 'Only 5%', 'All of it floats completely on top'],
      correctIndex: 0,
      explanation: 'Because ice is only about 9% less dense than seawater, nine-tenths (90%) of an iceberg remains submerged underwater!'
    },
    seeAlso: [
      { id: 'antarctica-continent', title: 'Antarctica', category: 'countries-world' },
      { id: 'water-element', title: 'Water Cycle', category: 'earth-elements' }
    ]
  }
];
