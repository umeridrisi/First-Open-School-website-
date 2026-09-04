import { EncyclopediaEntry } from '../../types';

export const SPACE_ENTRIES: EncyclopediaEntry[] = [
  {
    id: 'the-sun',
    title: 'The Sun (Sol)',
    symbol: '☀️',
    pronunciation: '(SUN / SOL)',
    category: 'solar-system',
    tagline: 'The blazing nuclear fusion engine at the center of our solar system.',
    analogy: {
      title: 'The Giant Glowing Campfire of the Solar System',
      story: 'Imagine a glowing yellow ball of plasma so enormous that you could fit 1.3 million Earths inside it! It sits at the center of our cosmic playground like a warm bonfire, keeping all 8 planets revolving around it with invisible gravity strings while sending warm light and energy across 93 million miles to grow our trees and warm our oceans.',
      emoji: '🔥'
    },
    howItWorks: {
      title: 'How the Sun Generates Light and Heat',
      points: [
        'Nuclear Fusion: In its 27-million-degree core, the Sun squeezes hydrogen atoms together into helium, releasing colossal bursts of clean light and warmth.',
        'Speed of Light Travel: Sunlight takes about 8 minutes and 20 seconds to travel 93 million miles across space to reach your backyard.',
        'Gravitational Anchor: The Sun contains 99.8% of all the mass in the entire solar system, holding all planets in stable elliptical orbits.'
      ]
    },
    anatomyDiagram: {
      headline: 'Layers of the Sun',
      parts: [
        { label: 'Core', desc: 'The 27,000,000°F nuclear fusion powerhouse.' },
        { label: 'Radiative & Convective Zones', desc: 'Boiling plasma currents carrying heat outward.' },
        { label: 'Photosphere', desc: 'The visible yellow surface we see from Earth.' },
        { label: 'Corona', desc: 'The glowing halo of solar atmosphere seen during eclipses.' }
      ]
    },
    funFacts: [
      'The Sun is about 4.6 billion years old and has enough hydrogen fuel to shine brightly for another 5 billion years!',
      'Light from the Sun’s core takes over 100,000 years to work its way to the surface, but only 8 minutes to travel from surface to Earth!',
      'Solar flares and coronal mass ejections can create magical glowing green Northern Lights (Auroras) in Earth’s night sky.'
    ],
    kidWords: [
      { word: 'Plasma', emoji: '⚡', meaning: 'Superheated gas charged with electric ions, the fourth state of matter.' },
      { word: 'Fusion', emoji: '⚛️', meaning: 'Joining tiny atoms together to release massive bursts of energy.' },
      { word: 'Gravity', emoji: '🌌', meaning: 'The invisible pull that draws objects with mass toward each other.' }
    ],
    didYouKnowOrigin: 'In ancient Roman mythology, the Sun god was named "Sol" — which is why we call our planet family the "SOLar System"!',
    microQuiz: {
      question: 'How long does it take for sunlight to travel from the Sun to planet Earth?',
      options: ['About 8 minutes', '1 second', '24 hours'],
      correctIndex: 0,
      explanation: 'Sunlight travels through the vacuum of space at the speed of light, reaching Earth in roughly 8 minutes and 20 seconds!'
    },
    handsOnExperiment: {
      title: 'Make a Backyard Sundial',
      materials: ['A paper plate', 'A straight pencil or stick', 'Clay or playdough', 'A marker pen'],
      steps: [
        'Push the pencil straight up into a lump of playdough in the center of the paper plate.',
        'Place the plate outside in a sunny spot on a flat driveway.',
        'At each hour mark (9 AM, 10 AM, 12 PM, 2 PM), draw a line where the pencil’s shadow falls and write the hour number.',
        'Check it tomorrow: You built an ancient solar clock that tells time using Earth’s rotation!'
      ],
      explanation: 'As Earth spins on its axis, the angle of sunlight changes, making the shadow move in a reliable clockwise circle!',
      emoji: '🕰️'
    },
    kidTongueTwisterOrRhyme: 'Super sunny sunshine shines so splendidly, spreading smiling solar sparks across the sea!',
    seeAlso: [
      { id: 'planet-earth', title: 'Planet Earth', category: 'solar-system' },
      { id: 'rainbows', title: 'Rainbows & Light', category: 'earth-elements' }
    ]
  },
  {
    id: 'the-moon',
    title: 'The Moon (Luna)',
    symbol: '🌙',
    pronunciation: '(MOON / LOO-nuh)',
    category: 'solar-system',
    tagline: 'Earth’s closest cosmic companion, silver night lantern, and ocean tide master.',
    analogy: {
      title: 'Earth’s Faithful Nighttime Flashlight and Tide Puller',
      story: 'The Moon does not make its own light — it is a giant rocky mirror that reflects the Sun’s glow down onto Earth! As it circles around us once a month, its gravitational pull gently tugs on our ocean waters, creating the rhythmic rising and falling ocean tides where crabs and starfish play.',
      emoji: '🌊'
    },
    howItWorks: {
      title: 'The Moon’s Dance Around Earth',
      points: [
        'Lunar Phases: As the Moon orbits Earth every 29.5 days, we see different amounts of its sunlit half (New Moon, Crescent, Quarter, Full Moon).',
        'Tidal Locking: The Moon takes the exact same time to rotate once as it does to orbit Earth, meaning the same friendly face always looks down at us!',
        'No Atmosphere: Because the Moon has no air or wind, astronaut footprints made in 1969 will stay preserved for millions of years!'
      ]
    },
    anatomyDiagram: {
      headline: 'Lunar Geography',
      parts: [
        { label: 'Impact Craters', desc: 'Round bowls carved by ancient asteroids crashing onto the surface.' },
        { label: 'Lunar Maria (Seas)', desc: 'Dark, smooth plains of ancient cooled volcanic basalt lava.' },
        { label: 'Highlands', desc: 'Bright, rugged mountain ranges.' },
        { label: 'Regolith Dust', desc: 'Fine, powdery gray rock powder covering the entire lunar surface.' }
      ]
    },
    funFacts: [
      '12 human astronauts have walked on the surface of the Moon during the NASA Apollo missions between 1969 and 1972!',
      'Because the Moon is smaller than Earth, its gravity is only 1/6th as strong — you could jump 6 times higher on the Moon!',
      'The Moon is slowly drifting away from Earth at a rate of about 1.5 inches (3.8 cm) per year.'
    ],
    kidWords: [
      { word: 'Crater', emoji: '🕳️', meaning: 'A large bowl-shaped hole made by an asteroid or meteor collision.' },
      { word: 'Tide', emoji: '🌊', meaning: 'The regular rising and falling of ocean water caused by the Moon’s gravity.' },
      { word: 'Orbit', emoji: '💫', meaning: 'The curved cosmic path an object takes around a planet or star.' }
    ],
    didYouKnowOrigin: 'Scientists believe the Moon formed about 4.5 billion years ago when a Mars-sized planet named "Theia" collided with young Earth, throwing molten rocks into orbit that condensed into our Moon!',
    microQuiz: {
      question: 'How much higher could you jump on the Moon compared to Earth?',
      options: ['6 times higher!', 'You cannot jump at all', 'The exact same height'],
      correctIndex: 0,
      explanation: 'Because the Moon has only 1/6th of Earth’s gravity, your muscles can launch you 6 times higher!'
    },
    seeAlso: [
      { id: 'planet-earth', title: 'Planet Earth', category: 'solar-system' },
      { id: 'astronauts-rockets', title: 'Astronauts & Rockets', category: 'solar-system' }
    ]
  },
  {
    id: 'planet-earth',
    title: 'Planet Earth (Gaia)',
    symbol: '🌍',
    pronunciation: '(ERTH)',
    category: 'solar-system',
    tagline: 'The Oasis Planet — the only known world with liquid oceans, breathable air, and joyful life.',
    analogy: {
      title: 'The Goldilocks Paradise Spaceship',
      story: 'Planet Earth is situated in the "Goldilocks Zone" of our star: not too close to the Sun (which would boil all water away) and not too far (which would freeze everything into solid ice). It is just right! A gentle atmospheric blanket of air protects us from space radiation and keeps our home cozy.',
      emoji: '🌿'
    },
    howItWorks: {
      title: 'Earth’s 4 Interactive Spheres',
      points: [
        'Hydrosphere (Water): 71% of Earth is covered in sparkling salty oceans, fresh lakes, and rivers.',
        'Atmosphere (Air): A shield of nitrogen and oxygen that lets us breathe and creates weather.',
        'Lithosphere (Land & Rock): Tectonic plates that form continents, mountain peaks, and fertile soils.',
        'Biosphere (Life): Millions of species of plants, animals, birds, and humans living in harmony.'
      ]
    },
    funFacts: [
      'Earth is the only planet in our solar system not named after a Greek or Roman god — "Earth" comes from Old English "eorthe" meaning soil or ground!',
      'Earth spins around its axis at about 1,000 miles per hour at the equator, yet we feel completely stable!',
      'Earth has a molten iron core that creates an invisible magnetic force field shielding us from cosmic solar winds.'
    ],
    kidWords: [
      { word: 'Habitable', emoji: '🏡', meaning: 'Suitable and comfortable for living organisms to thrive.' },
      { word: 'Atmosphere', emoji: '💨', meaning: 'The protective layer of gases surrounding a planet.' },
      { word: 'Tectonic', emoji: '🏔️', meaning: 'Relating to the large shifting plates of Earth’s outer crust.' }
    ],
    didYouKnowOrigin: 'From deep space, Earth looks like a glowing "Pale Blue Dot" because light scatters off our deep blue oceans and white fluffy water-vapor clouds!',
    microQuiz: {
      question: 'What percentage of Earth’s surface is covered by blue oceans and water?',
      options: ['About 71%', 'Only 10%', '100%'],
      correctIndex: 0,
      explanation: 'Roughly 71% of Earth’s surface is covered by ocean water, earning it the nickname "The Blue Planet"!'
    },
    seeAlso: [
      { id: 'water-element', title: 'Water (H2O)', category: 'earth-elements' },
      { id: 'seven-continents', title: 'The 7 Continents', category: 'countries-world' }
    ]
  },
  {
    id: 'planet-mars',
    title: 'Planet Mars (The Red Planet)',
    symbol: '♂️',
    pronunciation: '(MARZ)',
    category: 'solar-system',
    tagline: 'The dusty red neighbor world with giant volcanoes and robotic rover explorers.',
    analogy: {
      title: 'Earth’s Rusty Desert Sibling',
      story: 'Mars looks like a rust-colored canyon desert! Its red soil is full of iron oxide (just like rusty metal). It is home to Olympus Mons, a dormant shield volcano three times taller than Mount Everest, and ancient dry riverbeds where rivers flowed billions of years ago.',
      emoji: '🏜️'
    },
    howItWorks: {
      title: 'Exploring Mars',
      points: [
        'Robotic Rovers: NASA rovers like Curiosity and Perseverance roll across Martian craters, drilling rocks and looking for ancient microbial fossils!',
        'Two Tiny Moons: Mars has two lumpy, potato-shaped moons named Phobos and Deimos.',
        'Thin Atmosphere: The air is 95% carbon dioxide and very thin, with chilly average temperatures around -80°F.'
      ]
    },
    funFacts: [
      'Mars has the largest canyon in the solar system: Valles Marineris — so long it would stretch from California to New York!',
      'Sunsets on Mars look eerie and beautiful BLUE instead of orange due to how Martian dust scatters red light!',
      'A year on Mars is 687 Earth days long because it takes longer to complete its wider orbit around the Sun.'
    ],
    kidWords: [
      { word: 'Rover', emoji: '🤖', meaning: 'A robotic wheeled vehicle designed to explore the surface of other worlds.' },
      { word: 'Iron Oxide', emoji: '🟤', meaning: 'Rust chemical compound that gives Martian dust its distinctive red color.' },
      { word: 'Volcano', emoji: '🌋', meaning: 'An opening in a planet’s crust that allows magma and volcanic gases to erupt.' }
    ],
    didYouKnowOrigin: 'The Romans named Mars after their god of war because its fiery red color in the night sky reminded them of glowing campfires!',
    microQuiz: {
      question: 'What color is a sunset in the sky of Mars?',
      options: ['Blue', 'Purple', 'Bright Green'],
      correctIndex: 0,
      explanation: 'Fine dust particles in the thin Martian atmosphere scatter light in a way that makes sunsets appear a cool, electric blue!'
    },
    seeAlso: [
      { id: 'the-sun', title: 'The Sun', category: 'solar-system' },
      { id: 'astronauts-rockets', title: 'Astronauts & Rockets', category: 'solar-system' }
    ]
  },
  {
    id: 'planet-jupiter',
    title: 'Planet Jupiter',
    symbol: '♃',
    pronunciation: '(JOO-pih-ter)',
    category: 'solar-system',
    tagline: 'The King of Planets — a colossal swirling gas giant with 95 moons and a storm bigger than Earth.',
    analogy: {
      title: 'The Giant Cosmic Vacuum Cleaner and Shield',
      story: 'Jupiter is so massive that all the other 7 planets in our solar system could fit inside it with room to spare! Because of its colossal gravity, Jupiter acts like a planetary guardian shield, sweeping up wandering comets and asteroids before they can reach Earth.',
      emoji: '🌀'
    },
    howItWorks: {
      title: 'Gas Giant Dynamics',
      points: [
        'No Solid Ground: Jupiter has no rocky surface to stand on — it is a swirling atmosphere of hydrogen and helium gas that gets denser and denser.',
        'The Great Red Spot: A colossal spinning storm that has raged for over 350 years, large enough to swallow the entire planet Earth!',
        '95 Moons: Jupiter is like a mini solar system with moons including Europa (which has a warm liquid ocean under its ice) and volcanic Io.'
      ]
    },
    funFacts: [
      'Jupiter spins faster than any other planet: a full day on Jupiter lasts only 10 Earth hours!',
      'Jupiter’s moon Ganymede is the largest moon in the solar system — larger than the planet Mercury!',
      'Jupiter has a very faint set of dusty rings discovered by NASA’s Voyager spacecraft.'
    ],
    kidWords: [
      { word: 'Gas Giant', emoji: '🪐', meaning: 'A huge planet composed mostly of hydrogen and helium gases rather than solid rock.' },
      { word: 'Great Red Spot', emoji: '🔴', meaning: 'A centuries-old colossal storm spinning counter-clockwise in Jupiter’s clouds.' },
      { word: 'Gravity', emoji: '🌌', meaning: 'The attractive pull that massive planets exert on nearby objects.' }
    ],
    didYouKnowOrigin: 'Jupiter was named after the supreme Roman king of gods because it is the brightest, most majestic planet gliding through the night sky!',
    microQuiz: {
      question: 'How long is one full day (one spin rotation) on giant Jupiter?',
      options: ['Only about 10 hours', '100 days', '365 days'],
      correctIndex: 0,
      explanation: 'Despite its colossal size, Jupiter spins so rapidly that its day lasts only 9.9 Earth hours!'
    },
    seeAlso: [
      { id: 'planet-saturn', title: 'Planet Saturn', category: 'solar-system' },
      { id: 'the-sun', title: 'The Sun', category: 'solar-system' }
    ]
  },
  {
    id: 'planet-saturn',
    title: 'Planet Saturn',
    symbol: '🪐',
    pronunciation: '(SAT-urn)',
    category: 'solar-system',
    tagline: 'The Jewel of the Solar System, famous for its dazzling crown of icy rings.',
    analogy: {
      title: 'The Golden Planet with an Icy Cosmic Hula Hoop',
      story: 'Saturn is the most breathtaking planet through a telescope! It wears thousands of thin concentric rings made of billions of chunks of sparkling water ice, ranging in size from tiny dust specks to house-sized icebergs reflecting bright sunlight.',
      emoji: '👑'
    },
    howItWorks: {
      title: 'The Architecture of Saturn’s Rings',
      points: [
        'Pure Water Ice: Over 99% of Saturn’s rings are made of clean water ice reflecting sunlight like crystals.',
        'Super Thin: Although the rings span 175,000 miles wide across space, they are only about 30 feet (10 meters) thick in most places!',
        'Shepherd Moons: Tiny moons orbit inside gaps between rings, using their gravity to herd the ice particles into clean, sharp lines.'
      ]
    },
    funFacts: [
      'Saturn is the only planet in our solar system that is less dense than water — if you found a bathtub big enough, Saturn would float like a giant beach ball!',
      'Saturn has 146 confirmed moons, the most of any planet in our solar system!',
      'Saturn’s giant moon Titan has a thick nitrogen atmosphere, lakes of liquid methane, and clouds that rain liquid gas.'
    ],
    kidWords: [
      { word: 'Density', emoji: '⚖️', meaning: 'How tightly packed the matter is inside an object.' },
      { word: 'Shepherd Moon', emoji: '🐑', meaning: 'A small moon whose gravity keeps a planetary ring sharp and orderly.' },
      { word: 'Rings', emoji: '🪐', meaning: 'A flat disc of orbiting ice and rock chunks circling a planet.' }
    ],
    didYouKnowOrigin: 'Galileo Galilei was the first person to see Saturn’s rings in 1610 with his early telescope, but his lenses were blurry so he thought Saturn had "ears" on both sides!',
    microQuiz: {
      question: 'What would happen if you put planet Saturn into a giant cosmic bathtub filled with water?',
      options: ['It would float like a rubber ducky!', 'It would sink to the bottom', 'It would turn into jelly'],
      correctIndex: 0,
      explanation: 'Because Saturn is made mostly of lightweight hydrogen and helium gas, its density is less than water, meaning it would float!'
    },
    seeAlso: [
      { id: 'planet-jupiter', title: 'Planet Jupiter', category: 'solar-system' },
      { id: 'glaciers-ice', title: 'Glaciers & Ice', category: 'earth-elements' }
    ]
  },
  {
    id: 'black-holes',
    title: 'Black Holes',
    symbol: '🕳️',
    pronunciation: '(BLAK HOHLZ)',
    category: 'solar-system',
    tagline: 'Cosmic gravity vortexes where matter is packed so densely that not even light can escape.',
    analogy: {
      title: 'The Ultimate Cosmic Waterfall with No Return',
      story: 'Imagine squeezing a giant mountain down until it is smaller than a grain of sand! A black hole is created when an enormous star runs out of fuel and collapses into an infinitely dense point called a singularity. Its gravity is so powerful that it curves space like a steep funnel waterfall!',
      emoji: '🌌'
    },
    howItWorks: {
      title: 'Anatomy of a Black Hole',
      points: [
        'Event Horizon: The invisible "point of no return" boundary. Once anything crosses inside, even a beam of light moving at 186,000 miles per second cannot escape.',
        'Accretion Disk: A glowing, superheated doughnut of gas and dust swirling around the outside at near light-speed before falling in.',
        'Supermassive Black Holes: Giant black holes millions of times heavier than the Sun sitting at the centers of galaxies (like Sagittarius A* in the Milky Way).'
      ]
    },
    funFacts: [
      'Black holes do not "vacuum" space from far away — if our Sun were replaced by a black hole of the exact same mass, Earth would keep orbiting normally in the cold!',
      'Near a black hole, gravity is so intense that time actually slows down compared to Earth!',
      'The first real photo of a black hole’s glowing shadow was captured in 2019 by the Event Horizon Telescope network.'
    ],
    kidWords: [
      { word: 'Singularity', emoji: '📍', meaning: 'The infinitely small, ultra-dense center of a black hole.' },
      { word: 'Event Horizon', emoji: '🚪', meaning: 'The invisible boundary around a black hole beyond which nothing can escape.' },
      { word: 'Gravity', emoji: '🧲', meaning: 'The fundamental force that pulls objects with mass together.' }
    ],
    didYouKnowOrigin: 'Physicist Albert Einstein predicted black holes in 1915 with his General Theory of Relativity, though many scientists at the time thought they were too strange to be real!',
    microQuiz: {
      question: 'Can anything, even a beam of light, escape from inside the Event Horizon of a black hole?',
      options: ['No, nothing can escape its gravitational pull', 'Yes, rockets can fly out easily', 'Only laser beams can escape'],
      correctIndex: 0,
      explanation: 'Inside the event horizon, the escape speed exceeds the speed of light, so nothing in the universe can get out!'
    },
    seeAlso: [
      { id: 'the-sun', title: 'The Sun', category: 'solar-system' },
      { id: 'stars-constellations', title: 'Stars & Constellations', category: 'solar-system' }
    ]
  },
  {
    id: 'astronauts-rockets',
    title: 'Rockets & Astronauts',
    symbol: '🧑‍🚀',
    pronunciation: '(ROK-its and AS-troh-nawts)',
    category: 'solar-system',
    tagline: 'How brave human explorers blast beyond Earth’s atmosphere to live in zero gravity.',
    analogy: {
      title: 'The Untied Balloon That Shoots to the Stars',
      story: 'Have you ever blown up a party balloon and let it go without tying it? As air rushes out the back, the balloon shoots across the room! That is Newton’s Third Law of Motion. A space rocket burns liquid oxygen and kerosene fuel to blast roaring hot exhaust gas downward, pushing the rocket straight up into orbit!',
      emoji: '🚀'
    },
    howItWorks: {
      title: 'Living on the International Space Station (ISS)',
      points: [
        'Zero Gravity Floating: Astronauts float weightlessly because the ISS is in constant freefall around Earth at 17,500 miles per hour!',
        'Space Suits: Mini individual spaceships with pressurized oxygen, cooling water tubes, and gold-tinted visors to protect eyes from sun glare.',
        'Cosmic Routine: Astronauts exercise 2 hours a day so their bones and muscles stay strong in microgravity.'
      ]
    },
    funFacts: [
      'Astronauts on the Space Station see 16 sunrises and 16 sunsets every single 24-hour day as they circle Earth every 90 minutes!',
      'Astronauts sleep strapped inside vertical sleeping bags attached to the wall so they don’t float away and bump into controls!',
      'Space food is specially packaged: tortillas are used instead of bread because bread crumbs would float into computer fans and eyes.'
    ],
    kidWords: [
      { word: 'Microgravity', emoji: '🛸', meaning: 'The condition of weightlessness experienced in orbit.' },
      { word: 'Orbit', emoji: '💫', meaning: 'The continuous curved gravitational path around a planet.' },
      { word: 'Propulsion', emoji: '🔥', meaning: 'The driving force that pushes a vehicle forward.' }
    ],
    didYouKnowOrigin: 'The word "Astronaut" comes from Greek "Astron" (Star) and "Nautes" (Sailor) — literally meaning "Sailor of the Stars"!',
    microQuiz: {
      question: 'Why do astronauts on the Space Station eat tortillas instead of bread with crumbs?',
      options: ['Floating bread crumbs could get stuck in equipment or eyes', 'Tortillas taste sweeter', 'Bread is too heavy for rockets'],
      correctIndex: 0,
      explanation: 'In weightlessness, bread crumbs float in the air and could get inhaled into lungs or jam sensitive electronics!'
    },
    seeAlso: [
      { id: 'the-moon', title: 'The Moon', category: 'solar-system' },
      { id: 'planet-mars', title: 'Planet Mars', category: 'solar-system' }
    ]
  }
];
