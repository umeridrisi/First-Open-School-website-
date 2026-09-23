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
  },
  {
    id: 'planet-mercury',
    title: 'Planet Mercury',
    symbol: '☿️',
    pronunciation: '(MUR-kyuh-ree)',
    category: 'solar-system',
    tagline: 'The speedy, sun-baked speed demon of our solar system with freezing nights and zero air.',
    analogy: {
      title: 'The Speeding Rollercoaster Next to the Bonfire',
      story: 'Mercury is the closest planet to our Sun, racing around its orbit in just 88 days like a speedy little go-kart! Because it has virtually no blanket of atmosphere to trap warmth, its daytime is hot enough to melt tin, while its nighttime plunges into deep sub-zero freezer cold!',
      emoji: '🏎️'
    },
    howItWorks: {
      title: 'Extreme Life on Mercury',
      points: [
        'Closest to the Sun: Sits an average of 36 million miles from the Sun, moving at a blistering 29 miles per second.',
        'Wild Temperature Swings: Daytime reaches a scorching 800°F (430°C), but night drops down to -290°F (-180°C).',
        'Giant Iron Core: Mercury has a massive metallic core that takes up nearly 85% of its entire planetary radius!'
      ]
    },
    funFacts: [
      'A year on Mercury is only 88 Earth days, but one single day-night rotation takes 59 Earth days!',
      'Mercury is covered in crater impact basins — its largest crater, the Caloris Basin, could fit the entire state of Texas inside it!',
      'Even though it is the closest planet to the blazing Sun, radar telescopes discovered water ice hidden deep inside dark shadowed polar craters.'
    ],
    kidWords: [
      { word: 'Crater', emoji: '🕳️', meaning: 'A bowl-shaped hollow on a planet surface formed by an exploding meteorite impact.' },
      { word: 'Exosphere', emoji: '💨', meaning: 'An extremely thin, wispy envelope of gas atoms around a planet.' },
      { word: 'Core', emoji: '🪨', meaning: 'The dense central molten or metallic heart of a celestial body.' }
    ],
    didYouKnowOrigin: 'Mercury is named after the ancient Roman messenger god with winged sandals because it zips across the night sky faster than any other planet!',
    microQuiz: {
      question: 'Which planet orbits the Sun faster than any other in the solar system?',
      options: ['Mercury (Just 88 Earth days per orbit!)', 'Jupiter', 'Neptune'],
      correctIndex: 0,
      explanation: 'Mercury races around the Sun at 106,000 miles per hour, completing a full orbit in just 88 Earth days!'
    },
    seeAlso: [
      { id: 'the-sun', title: 'The Sun', category: 'solar-system' },
      { id: 'planet-venus', title: 'Planet Venus', category: 'solar-system' }
    ]
  },
  {
    id: 'planet-venus',
    title: 'Planet Venus',
    symbol: '♀️',
    pronunciation: '(VEE-nuhs)',
    category: 'solar-system',
    tagline: 'The hottest planet in the solar system, shrouded in golden sulfuric acid greenhouse clouds.',
    analogy: {
      title: 'The Super-Pressure Pizza Oven of the Sky',
      story: 'Venus is almost the exact same size as Earth, but it is not a paradise! It is wrapped in a suffocatingly thick blanket of carbon dioxide clouds that trap heat like an unstoppable super-greenhouse, making its surface hotter than a kitchen pizza oven (900°F) 24 hours a day!',
      emoji: '🌋'
    },
    howItWorks: {
      title: 'The Runaway Greenhouse Planet',
      points: [
        'Hottest Surface: Even though Mercury is closer to the Sun, Venus is hotter (around 900°F / 475°C) due to runaway greenhouse gas trapping.',
        'Crushing Air Pressure: The atmosphere is 90 times heavier than Earth’s — standing on Venus would feel like being 3,000 feet underwater!',
        'Spinning Backwards: Venus rotates clockwise on its axis in retrograde motion, meaning the Sun rises in the West and sets in the East!'
      ]
    },
    funFacts: [
      'A day on Venus is longer than its year! It takes Venus 243 Earth days to spin once, but only 225 Earth days to orbit the Sun.',
      'Venus is often the brightest natural object in Earth’s night sky after the Moon, nicknamed the "Morning Star" or "Evening Star".',
      'Venus has thousands of volcanoes, and rain clouds are made of corrosive sulfuric acid, which evaporates before hitting the searing ground!'
    ],
    kidWords: [
      { word: 'Greenhouse Effect', emoji: '🌡️', meaning: 'The process where atmospheric gases trap warmth like glass on a greenhouse.' },
      { word: 'Retrograde', emoji: '🔄', meaning: 'Moving or rotating in the opposite direction from most other planets.' },
      { word: 'Sulfur', emoji: '🟡', meaning: 'A bright yellow chemical element that forms pungent acid vapors.' }
    ],
    didYouKnowOrigin: 'Venus was named after the Roman goddess of love and beauty because it gleamed so dazzlingly bright like a diamond in the dawn sky!',
    microQuiz: {
      question: 'Which is the hottest planet in our entire solar system?',
      options: ['Venus (900°F because of thick greenhouse gases)', 'Mercury', 'Mars'],
      correctIndex: 0,
      explanation: 'Venus is the hottest planet in the solar system because its thick carbon dioxide atmosphere traps intense solar heat!'
    },
    seeAlso: [
      { id: 'planet-mercury', title: 'Planet Mercury', category: 'solar-system' },
      { id: 'planet-earth', title: 'Planet Earth', category: 'solar-system' }
    ]
  },
  {
    id: 'planet-earth',
    title: 'Planet Earth (Terra)',
    symbol: '🌍',
    pronunciation: '(URTH)',
    category: 'solar-system',
    tagline: 'The glowing blue marble and cosmic oasis sheltering all known life in the universe.',
    analogy: {
      title: 'The Goldilocks Living Greenhouse of the Universe',
      story: 'Earth is located in the miraculous "Goldilocks Zone" of our solar system — not too hot, not too cold, but just right! Shielded by a protective magnetic bubble and wrapped in fresh oxygen-nitrogen air, Earth carries 8 billion humans, majestic blue oceans, and green forests through space.',
      emoji: '🌱'
    },
    howItWorks: {
      title: 'Earth’s Life-Support Systems',
      points: [
        'Liquid Water Oceans: Over 71% of Earth is covered in shimmering liquid water, regulating world temperatures.',
        'Magnetic Shield (Magnetosphere): Molten swirling iron in Earth’s core generates a magnetic umbrella blocking lethal cosmic radiation.',
        'Nitrogen-Oxygen Air: A breathable atmosphere of 78% nitrogen and 21% oxygen maintained by plants and phytoplankton.'
      ]
    },
    funFacts: [
      'Earth is moving through space around the Sun at about 67,000 miles per hour — you are riding a cosmic spaceship right now!',
      'Earth is the only planet in our solar system with active plate tectonics that continuously recycle carbon and minerals.',
      'From space, Earth looks like a glowing blue marble swirling with pure white cloud ribbons and emerald green continents.'
    ],
    kidWords: [
      { word: 'Habitable Zone', emoji: '🎯', meaning: 'The orbital distance around a star where liquid water can stably exist on a planet surface.' },
      { word: 'Magnetosphere', emoji: '🧲', meaning: 'The magnetic force field around Earth that deflects energetic solar particles.' },
      { word: 'Biosphere', emoji: '🌳', meaning: 'The global ecological system integrating all living beings and their relationships.' }
    ],
    didYouKnowOrigin: 'Earth is the only planet in our solar system whose English name does not come from Greek or Roman mythology — "Earth" comes from Old English "eorthe" meaning soil, dirt, and ground!',
    microQuiz: {
      question: 'What percentage of Earth’s surface is covered by liquid water oceans?',
      options: ['About 71%', 'Only 10%', '100%'],
      correctIndex: 0,
      explanation: 'Approximately 71% of Earth’s surface is covered by oceans, making it look brilliant blue from space!'
    },
    seeAlso: [
      { id: 'the-moon', title: 'The Moon', category: 'solar-system' },
      { id: 'world-oceans', title: 'World Oceans', category: 'countries-world' },
      { id: 'water-element', title: 'Water Cycle', category: 'earth-elements' }
    ]
  },
  {
    id: 'planet-uranus',
    title: 'Planet Uranus',
    symbol: '⛢',
    pronunciation: '(YOOR-uh-nuhs)',
    category: 'solar-system',
    tagline: 'The tilted cyan ice giant rolling around the Sun on its side with 13 faint rings.',
    analogy: {
      title: 'The Rolling Bowling Ball of Pale Blue Ice',
      story: 'While most planets spin upright like spinning tops, Uranus rolls along its orbital path on its side like a bowling ball! Scientists believe a massive protoplanet the size of Earth crashed into Uranus billions of years ago, permanently knocking it sideways.',
      emoji: '🎳'
    },
    howItWorks: {
      title: 'Inside the Cold Cyan Giant',
      points: [
        'Ice Giant Chemistry: Made mostly of slushy water, ammonia, and methane ices over a small rocky core.',
        'Methane Color: Atmospheric methane gas absorbs red light and reflects cool pale turquoise-cyan light.',
        '98-Degree Axial Tilt: Its poles point almost directly at the Sun, giving each pole 42 years of continuous sunlight followed by 42 years of night!'
      ]
    },
    funFacts: [
      'Uranus was the first planet discovered with a telescope by astronomer William Herschel in 1781!',
      'Uranus holds the record for the coldest recorded atmosphere in the solar system, dipping to -371°F (-224°C)!',
      'All 27 of Uranus’s known moons are named after magical characters from William Shakespeare and Alexander Pope stories (like Titania, Oberon, and Puck).'
    ],
    kidWords: [
      { word: 'Ice Giant', emoji: '🧊', meaning: 'A giant planet composed mostly of elements heavier than hydrogen and helium, like water, ammonia, and methane.' },
      { word: 'Cyan', emoji: '🩵', meaning: 'A greenish-blue color characteristic of methane atmospheres.' },
      { word: 'Tilt', emoji: '📐', meaning: 'A slant or slope away from a vertical upright position.' }
    ],
    didYouKnowOrigin: 'Uranus was named after the ancient Greek primordial sky deity Ouranos, the father of Saturn (Cronus) and grandfather of Jupiter (Zeus)!',
    microQuiz: {
      question: 'What makes Uranus unique compared to every other planet in our solar system?',
      options: ['It rolls on its side at a 98-degree tilt', 'It is made of pure gold', 'It has square moons'],
      correctIndex: 0,
      explanation: 'Uranus has an extreme 98-degree axial tilt, rolling on its side along its orbit around the Sun!'
    },
    seeAlso: [
      { id: 'planet-neptune', title: 'Planet Neptune', category: 'solar-system' },
      { id: 'saturn-rings', title: 'Saturn’s Rings', category: 'solar-system' }
    ]
  },
  {
    id: 'planet-neptune',
    title: 'Planet Neptune',
    symbol: '♆',
    pronunciation: '(NEP-tyoon)',
    category: 'solar-system',
    tagline: 'The stormy deep-azure outermost planet swept by supersonic winds and diamond rain.',
    analogy: {
      title: 'The Supersonic Blue Whirlpool of Deep Space',
      story: 'Neptune is the farthest official planet from our Sun, sitting nearly 2.8 billion miles away in the dark outer fringes! It is a deep, vivid cobalt blue world whipped by the fastest hurricane winds in the solar system — blowing faster than fighter jets at over 1,200 miles per hour!',
      emoji: '🌀'
    },
    howItWorks: {
      title: 'Mysteries of the Deep Azure World',
      points: [
        'Supersonic Winds: High-altitude jet streams scream at 1,200 mph (2,000 km/h), three times faster than Earth’s worst tornadoes.',
        '165-Year Orbit: Neptune takes 165 Earth years to complete a single lap around the Sun; it completed its first full orbit since discovery in 2011!',
        'Diamond Rain Theory: Deep inside, immense gravitational pressures may crush carbon methane into sparkling real diamonds that rain down toward the mantle!'
      ]
    },
    funFacts: [
      'Neptune was the first planet located through mathematical prediction before ever being seen through a telescope lens!',
      'Neptune’s largest moon, Triton, is covered in frozen nitrogen ice and shoots geysers of black dust 5 miles high into space.',
      'Triton orbits Neptune backwards (retrograde) and is slowly spiraling inward toward the planet over millions of years.'
    ],
    kidWords: [
      { word: 'Supersonic', emoji: '💨', meaning: 'Faster than the speed of sound (greater than 767 mph).' },
      { word: 'Cobalt', emoji: '💙', meaning: 'A deep, vivid rich blue shade.' },
      { word: 'Geyser', emoji: '♨️', meaning: 'A vent that ejects columns of vapor and fluid into the air.' }
    ],
    didYouKnowOrigin: 'Neptune was named after the Roman god of the sea because of its gorgeous, ocean-blue appearance through early telescopes!',
    microQuiz: {
      question: 'How fast do the supersonic storm winds blow on planet Neptune?',
      options: ['Over 1,200 miles per hour (Faster than the speed of sound!)', 'Only 5 mph', 'There is no wind in space'],
      correctIndex: 0,
      explanation: 'Neptune holds the solar system speed record with fierce atmospheric winds exceeding 1,200 mph!'
    },
    seeAlso: [
      { id: 'planet-uranus', title: 'Planet Uranus', category: 'solar-system' },
      { id: 'pluto-dwarf-planets', title: 'Pluto & Dwarf Planets', category: 'solar-system' }
    ]
  },
  {
    id: 'pluto-dwarf-planets',
    title: 'Pluto & Dwarf Planets',
    symbol: '♇',
    pronunciation: '(PLOO-toh and DWARF PLAN-its)',
    category: 'solar-system',
    tagline: 'The frozen heart world of the Kuiper Belt and its fellow round dwarf planet companions.',
    analogy: {
      title: 'The Frozen Heart World at the Solar System’s Edge',
      story: 'Far beyond Neptune lies a frozen cosmic frontier called the Kuiper Belt! In 2015, NASA’s New Horizons space probe flew past Pluto and took photos showing a bright, giant heart-shaped glacier of nitrogen ice named Tombaugh Regio, proving this tiny world is active, stunning, and full of character!',
      emoji: '🤍'
    },
    howItWorks: {
      title: 'What Is a Dwarf Planet?',
      points: [
        'Round Under Gravity: Dwarf planets are large enough that their own gravity has pulled them into a sphere shape.',
        'Not Cleared Orbit: Unlike the 8 major planets, dwarf planets share their orbital neighborhood with thousands of other asteroids or icy debris.',
        'The Famous 5: Official dwarf planets recognized by astronomers are Pluto, Eris, Haumea (shaped like an egg!), Makemake, and Ceres (in the asteroid belt).'
      ]
    },
    funFacts: [
      'Pluto is smaller than Earth’s Moon — it is roughly half the width of the United States!',
      'Pluto has 5 moons; its largest moon, Charon, is so big that Pluto and Charon orbit each other like a dancing double-planet pair.',
      'The sky on Pluto is blue, with pinkish haze layers and snowy mountain peaks made of rock-hard frozen water ice!'
    ],
    kidWords: [
      { word: 'Kuiper Belt', emoji: '🪐', meaning: 'A ring of icy bodies and comets orbiting outside Neptune’s path.' },
      { word: 'Glacier', emoji: '🧊', meaning: 'A slowly moving mass of compressed ice.' },
      { word: 'Dwarf Planet', emoji: '⚪', meaning: 'A round celestial body that orbits a star but has not cleared its orbital neighborhood.' }
    ],
    didYouKnowOrigin: 'Pluto was named by an 11-year-old English schoolgirl named Venetia Burney in 1930, who suggested naming the dark, distant world after the Roman god of the underworld!',
    microQuiz: {
      question: 'What famous geological feature did the New Horizons spacecraft discover on Pluto’s surface?',
      options: ['A giant heart-shaped nitrogen ice glacier', 'A giant swimming pool', 'A stone castle'],
      correctIndex: 0,
      explanation: 'New Horizons revealed Tombaugh Regio — a bright 1,000-mile-wide heart of frozen nitrogen ice!'
    },
    seeAlso: [
      { id: 'planet-neptune', title: 'Planet Neptune', category: 'solar-system' },
      { id: 'comets-asteroids', title: 'Comets & Asteroids', category: 'solar-system' }
    ]
  },
  {
    id: 'comets-asteroids',
    title: 'Comets, Asteroids & Meteors',
    symbol: '☄️',
    pronunciation: '(KOM-its, AS-tuh-roydz and MEE-tee-erz)',
    category: 'solar-system',
    tagline: 'Dirty space snowballs and rocky space wanderers creating glowing tails and shooting stars.',
    analogy: {
      title: 'The Cosmic Snowballs and Shooting Fireworks',
      story: 'Think of Comets like giant dirty space snowballs made of ice, dust, and rock! When they swing close to the hot Sun, their ice boils into gas, creating glowing heads and magical million-mile-long tails that stream across the sky. When tiny space pebbles burn up in Earth’s atmosphere, we see dazzling "shooting stars"!',
      emoji: '🌠'
    },
    howItWorks: {
      title: 'Asteroids vs. Comets vs. Meteors',
      points: [
        'Asteroids (🪨): Rocky, airless chunks left over from the formation of our solar system, mostly orbiting between Mars and Jupiter.',
        'Comets (☄️): Icy wanderers from the cold Oort Cloud; the solar wind pushes solar radiation against their vapor to blow tails away from the Sun.',
        'Meteors (🌟): Dust particles that burn with friction heat in Earth’s upper air (Meteors), reaching the ground if they survive (Meteorites).'
      ]
    },
    funFacts: [
      'Halley’s Comet is visible from Earth once every 75 to 76 years — its next return will be in the summer of 2061!',
      'A comet’s glowing ion tail can stretch over 60 million miles long — further than the distance between Earth and Venus!',
      'Every year, Earth passes through debris trails left by comets, creating spectacular Perseid and Geminid meteor showers with 100 shooting stars an hour!'
    ],
    kidWords: [
      { word: 'Asteroid', emoji: '🪨', meaning: 'A rocky object orbiting the Sun, smaller than a dwarf planet.' },
      { word: 'Comet', emoji: '☄️', meaning: 'A celestial object consisting of ice and dust with a glowing coma and tail.' },
      { word: 'Meteorite', emoji: '💫', meaning: 'A space rock that survives its fiery atmospheric plunge and lands on Earth.' }
    ],
    didYouKnowOrigin: 'The word "Comet" comes from the ancient Greek word "kometes", which meant "long-haired star", because early stargazers thought comets looked like stars with flowing golden hair!',
    microQuiz: {
      question: 'What creates the glowing tail of a comet as it flies closer to the Sun?',
      options: ['Solar heat turns frozen ice into glowing vapor gas blown by solar wind', 'Rocket engines firing', 'Electric neon lights'],
      correctIndex: 0,
      explanation: 'Sunlight evaporates frozen gas and dust, and the solar wind pushes this vapor into a luminous tail millions of miles long!'
    },
    seeAlso: [
      { id: 'the-sun', title: 'The Sun', category: 'solar-system' },
      { id: 'planet-earth', title: 'Planet Earth', category: 'solar-system' }
    ]
  },
  {
    id: 'milky-way-galaxy',
    title: 'The Milky Way Galaxy',
    symbol: '🌌',
    pronunciation: '(MIL-kee WAY GAL-uk-see)',
    category: 'solar-system',
    tagline: 'Our spiraling cosmic metropolis of 200 billion stars, nebulae, and stellar nurseries.',
    analogy: {
      title: 'The Great Glowing Spiral Pinwheel of the Stars',
      story: 'Imagine a gigantic glowing pinwheel spinning slowly in the darkness of space, 100,000 light-years across! It contains over 200 billion shining stars, and our Sun is just one single grain of sand sitting on one of its spiral arms called the Orion Spur, circling the galaxy once every 230 million years!',
      emoji: '🌀'
    },
    howItWorks: {
      title: 'Structure of Our Island Universe',
      points: [
        'Barred Spiral Shape: A central dense bar of ancient stars with four sweeping pinwheel arms (Perseus, Scutum-Centaurus, Sagittarius, and Norma).',
        'Sagittarius A* Heart: At the exact gravitational center sits a supermassive black hole with the mass of 4.3 million Suns.',
        'Galactic Year: It takes our solar system 230 million years to complete one giant orbit around the galactic core!'
      ]
    },
    funFacts: [
      'When the dinosaurs lived on Earth 100 million years ago, our solar system was on the completely opposite side of the Milky Way galaxy!',
      'The Milky Way is part of a cluster of 54 neighboring galaxies called the "Local Group", including our giant neighbor Andromeda.',
      'On a clear, dark night away from city lights, the Milky Way looks like a luminous cloudy river of spilled milk arched across the heavens.'
    ],
    kidWords: [
      { word: 'Galaxy', emoji: '🌌', meaning: 'A gravitationally bound system of stars, stellar remnants, gas, and dark matter.' },
      { word: 'Light-Year', emoji: '✨', meaning: 'The distance light travels in one Earth year (about 5.88 trillion miles).' },
      { word: 'Nebula', emoji: '☁️', meaning: 'A giant interstellar cloud of dust and gas where baby stars are born.' }
    ],
    didYouKnowOrigin: 'Ancient Greek myth told that the goddess Hera spilled drops of milk across the starry night sky, which is why ancient Romans called it "Via Lactea" — the Milky Way!',
    microQuiz: {
      question: 'About how many stars shine inside our home Milky Way Galaxy?',
      options: ['Over 100 to 400 Billion stars!', 'Only 1,000 stars', 'Exactly 8 stars'],
      correctIndex: 0,
      explanation: 'Our Milky Way galaxy contains between 100 and 400 billion stars, with billions of planetary solar systems orbiting them!'
    },
    seeAlso: [
      { id: 'the-sun', title: 'The Sun', category: 'solar-system' },
      { id: 'black-holes', title: 'Black Holes', category: 'solar-system' }
    ]
  },
  {
    id: 'james-webb-telescope',
    title: 'Telescopes & The James Webb Observatory',
    symbol: '🔭',
    pronunciation: '(TEL-uh-skohps and JAYMZ WEB)',
    category: 'solar-system',
    tagline: 'Golden honeycomb mirrors floating 1 million miles in space to look back to the dawn of time.',
    analogy: {
      title: 'The Golden Time Machine Floating in the Dark',
      story: 'Because light takes time to travel across space, looking far into space is literally looking backward in time! The James Webb Space Telescope has a giant 21-foot golden mirror shaped like a beehive honeycomb that detects invisible infrared heat waves, showing astronomers the very first stars that ignited after the Big Bang!',
      emoji: '🐝'
    },
    howItWorks: {
      title: 'Engineering the Webb Telescope',
      points: [
        '18 Beryllium Gold Segments: Hexagonal mirrors plated with real pure gold to reflect infrared light rays with supreme clarity.',
        'Tennis-Court Sunshield: A 5-layer silver kite that blocks heat from the Sun, Earth, and Moon so instruments stay super-chilled at -388°F.',
        'Orbiting Lagrange Point 2 (L2): Floats 1 million miles away from Earth, keeping its back to the Sun continuously.'
      ]
    },
    funFacts: [
      'The gold layer on Webb’s mirrors is so thin it used only about a golf ball’s worth of real gold spread across the entire 21-foot mirror!',
      'Webb had to fold up like an origami sculpture inside an Ariane 5 rocket and unfold itself piece-by-piece in space over 30 days.',
      'Webb can analyze the atmospheres of alien planets light-years away to search for water vapor, carbon dioxide, and signs of life!'
    ],
    kidWords: [
      { word: 'Infrared', emoji: '🔴', meaning: 'Invisible heat radiation with wavelengths longer than visible red light.' },
      { word: 'Lagrange Point', emoji: '📍', meaning: 'A gravitational parking spot in space where a telescope stays stable relative to Earth and Sun.' },
      { word: 'Observatory', emoji: '🏛️', meaning: 'A facility equipped with instruments for observing astronomical phenomena.' }
    ],
    didYouKnowOrigin: 'Galileo Galilei was the first person to turn a telescope toward the night sky in 1609, discovering mountains on the Moon and four moons orbiting Jupiter!',
    microQuiz: {
      question: 'Why are the mirrors on the James Webb Space Telescope coated in real gold?',
      options: ['Gold reflects infrared heat light better than almost any other metal', 'To make it expensive', 'Gold keeps it warm'],
      correctIndex: 0,
      explanation: 'Pure gold reflects 98% of infrared light, allowing Webb to see dim, distant infant galaxies from billions of years ago!'
    },
    seeAlso: [
      { id: 'astronauts-rockets', title: 'Astronauts & Rockets', category: 'solar-system' },
      { id: 'milky-way-galaxy', title: 'The Milky Way', category: 'solar-system' }
    ]
  }
];
