import { Poem, PoemCategory } from '../types';

export interface PoemCategoryInfo {
  id: PoemCategory;
  label: string;
  icon: string;
  description: string;
  badgeColor: string;
  badgeBg: string;
}

export const POEM_CATEGORIES: PoemCategoryInfo[] = [
  {
    id: 'classics-rhymes',
    label: 'Classics & Nursery Rhymes',
    icon: '⭐',
    description: 'Timeless traditional rhymes with strong rhythm, steady cadence, and memorable phrases.',
    badgeColor: '#4D96FF',
    badgeBg: 'bg-blue-100 text-blue-800 border-blue-300'
  },
  {
    id: 'animals-nature',
    label: 'Animals & Nature Poems',
    icon: '🐛',
    description: 'Delightful verses about caterpillars, friendly cows, spiders, and the natural outdoors.',
    badgeColor: '#6BCB77',
    badgeBg: 'bg-emerald-100 text-emerald-800 border-emerald-300'
  },
  {
    id: 'bedtime-lullabies',
    label: 'Bedtime & Lullabies',
    icon: '🌙',
    description: 'Gentle, soothing poems for evening calm, bedtime routines, and dreaming under the stars.',
    badgeColor: '#8B5CF6',
    badgeBg: 'bg-purple-100 text-purple-800 border-purple-300'
  },
  {
    id: 'fun-whimsical',
    label: 'Fun & Playful Verses',
    icon: '🎈',
    description: 'Giggle-filled bouncy poems with counting, silly actions, and energetic wordplay.',
    badgeColor: '#FF6B6B',
    badgeBg: 'bg-rose-100 text-rose-800 border-rose-300'
  },
  {
    id: 'good-habits',
    label: 'Manners & Daily Habits',
    icon: '🧼',
    description: 'Catchy rhyming verses teaching brushing teeth, hand-washing, magic polite words, and sharing.',
    badgeColor: '#F59E0B',
    badgeBg: 'bg-amber-100 text-amber-800 border-amber-300'
  },
  {
    id: 'seasons-weather',
    label: 'Seasons & Weather',
    icon: '🌦️',
    description: 'Vivid verses celebrating raindrops, golden autumn leaves, morning sunshine, and winter breezes.',
    badgeColor: '#06B6D4',
    badgeBg: 'bg-cyan-100 text-cyan-800 border-cyan-300'
  }
];

export const POEMS_DATA: Poem[] = [
  // 1. Twinkle, Twinkle, Little Star
  {
    id: 'twinkle-twinkle-little-star',
    title: 'Twinkle, Twinkle, Little Star',
    poet: 'Jane Taylor (1806)',
    emoji: '✨',
    category: 'classics-rhymes',
    ageTier: 'All Ages',
    tagline: 'The most beloved English nursery poem celebrating cosmic wonder and guiding light.',
    themeColor: '#4D96FF',
    badgeBg: 'bg-blue-100 text-blue-800 border-blue-300',
    stanzas: [
      [
        'Twinkle, twinkle, little star,',
        'How I wonder what you are!',
        'Up above the world so high,',
        'Like a diamond in the sky.'
      ],
      [
        'When the blazing sun is gone,',
        'When he nothing shines upon,',
        'Then you show your little light,',
        'Twinkle, twinkle, all the night.'
      ],
      [
        'Then the traveler in the dark',
        'Thanks you for your tiny spark;',
        'He could not see which way to go,',
        'If you did not twinkle so.'
      ]
    ],
    rhymeScheme: 'AABB',
    vocabulary: [
      { word: 'Twinkle', meaning: 'To shine with a flickering, sparkling gleam', emoji: '✨' },
      { word: 'Diamond', meaning: 'A precious sparkling gemstone known for brilliant light', emoji: '💎' },
      { word: 'Blazing', meaning: 'Shining with very bright, warm fiery light', emoji: '☀️' },
      { word: 'Traveler', meaning: 'A person on a journey walking along a path', emoji: '🚶' }
    ],
    educationalTakeaway: 'Teaches similes ("like a diamond in the sky"), observation of nighttime vs daytime, and gratitude for quiet guides.',
    recitalTips: [
      'Recite slowly with gentle, soft tones.',
      'Emphasize the rhythm on "Twinkle, twinkle" and "diamond".',
      'Open and close your fingers like twinkling lights as you recite!'
    ]
  },

  // 2. Baa, Baa, Black Sheep
  {
    id: 'baa-baa-black-sheep',
    title: 'Baa, Baa, Black Sheep',
    poet: 'Traditional English Rhyme (1744)',
    emoji: '🐑',
    category: 'classics-rhymes',
    ageTier: 'Ages 2-4',
    tagline: 'A classic rhythmic rhyming song about wool, sharing, and farm life.',
    themeColor: '#6BCB77',
    badgeBg: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    stanzas: [
      [
        'Baa, baa, black sheep,',
        'Have you any wool?',
        'Yes, sir, yes, sir,',
        'Three bags full!'
      ],
      [
        'One for the master,',
        'And one for the dame,',
        'And one for the little boy',
        'Who lives down the lane.'
      ]
    ],
    rhymeScheme: 'AABB',
    vocabulary: [
      { word: 'Wool', meaning: 'Soft warm fluffy fleece that grows on sheep', emoji: '🧶' },
      { word: 'Dame', meaning: 'An old-fashioned courteous title for a lady', emoji: '👒' },
      { word: 'Lane', meaning: 'A narrow cozy country road or path', emoji: '🛤️' }
    ],
    educationalTakeaway: 'Reinforces counting to three, question-and-answer conversational cadence, and fair sharing among people.',
    recitalTips: [
      'Give a warm cheerful "Baa, baa" sound at the start.',
      'Count on your fingers: "One... Two... Three bags full!"',
      'Use a polite, respectful tone on "Yes, sir, yes, sir".'
    ]
  },

  // 3. Humpty Dumpty
  {
    id: 'humpty-dumpty',
    title: 'Humpty Dumpty',
    poet: 'Traditional English Verse (1797)',
    emoji: '🥚',
    category: 'classics-rhymes',
    ageTier: 'Ages 2-4',
    tagline: 'A dramatic, memorable four-line classic about balance, care, and teamwork.',
    themeColor: '#FF6B6B',
    badgeBg: 'bg-rose-100 text-rose-800 border-rose-300',
    stanzas: [
      [
        'Humpty Dumpty sat on a wall,',
        'Humpty Dumpty had a great fall.',
        'All the king\'s horses and all the king\'s men',
        'Couldn\'t put Humpty together again.'
      ]
    ],
    rhymeScheme: 'AABB',
    vocabulary: [
      { word: 'Great fall', meaning: 'A big, unexpected drop from a high spot', emoji: '🍂' },
      { word: 'King\'s Men', meaning: 'Brave royal helpers and guards in medieval times', emoji: '👑' }
    ],
    educationalTakeaway: 'Teaches cause and effect, being careful around high edges, and rhyme pair wall/fall and men/again.',
    recitalTips: [
      'Build dramatic suspense on "had a great fall!"',
      'Clap your hands together firmly on "fall" to capture attention.',
      'Slow down for the thoughtful ending line.'
    ]
  },

  // 4. The Itsy Bitsy Spider
  {
    id: 'itsy-bitsy-spider',
    title: 'The Itsy Bitsy Spider',
    poet: 'Traditional Children\'s Song',
    emoji: '🕷️',
    category: 'animals-nature',
    ageTier: 'Ages 2-4',
    tagline: 'An inspiring anthem of determination, perseverance, and trying again.',
    themeColor: '#F59E0B',
    badgeBg: 'bg-amber-100 text-amber-800 border-amber-300',
    stanzas: [
      [
        'The itsy bitsy spider climbed up the waterspout.',
        'Down came the rain and washed the spider out.',
        'Out came the sun and dried up all the rain,',
        'And the itsy bitsy spider climbed up the spout again.'
      ]
    ],
    rhymeScheme: 'AABB',
    vocabulary: [
      { word: 'Itsy Bitsy', meaning: 'Very small, tiny, and petite', emoji: '🤏' },
      { word: 'Waterspout', meaning: 'A pipe that guides rainwater down from the roof', emoji: '🌧️' },
      { word: 'Perseverance', meaning: 'Trying again and again without giving up', emoji: '💪' }
    ],
    educationalTakeaway: 'Demonstrates growth mindset—even when setbacks occur (rain), the sun comes out and we can climb again.',
    recitalTips: [
      'Use your thumb and index fingers to mime the spider walking upwards.',
      'Wiggle fingers downward when saying "Down came the rain".',
      'Make a big circle with your arms for "Out came the sun"!'
    ]
  },

  // 5. Row, Row, Row Your Boat
  {
    id: 'row-row-row-your-boat',
    title: 'Row, Row, Row Your Boat',
    poet: 'Eliphalet Oram Lyte (1852)',
    emoji: '🛶',
    category: 'classics-rhymes',
    ageTier: 'All Ages',
    tagline: 'A joyful, rhythmic river verse celebrating happiness and lighthearted adventure.',
    themeColor: '#06B6D4',
    badgeBg: 'bg-cyan-100 text-cyan-800 border-cyan-300',
    stanzas: [
      [
        'Row, row, row your boat,',
        'Gently down the stream,',
        'Merrily, merrily, merrily, merrily,',
        'Life is but a dream.'
      ]
    ],
    rhymeScheme: 'AABB',
    vocabulary: [
      { word: 'Gently', meaning: 'In a soft, calm, and peaceful manner', emoji: '🍃' },
      { word: 'Stream', meaning: 'A small, friendly flowing river of fresh water', emoji: '🏞️' },
      { word: 'Merrily', meaning: 'With happiness, joy, and laughter', emoji: '😄' }
    ],
    educationalTakeaway: 'Teaches repetition of adverbs ("merrily"), steady flowing meter, and calm mindfulness.',
    recitalTips: [
      'Sway side to side gently in time with the rowing rhythm.',
      'Keep the four "merrily"s light, musical, and cheerful.'
    ]
  },

  // 6. The Caterpillar
  {
    id: 'the-caterpillar',
    title: 'The Caterpillar',
    poet: 'Christina Rossetti (1872)',
    emoji: '🐛',
    category: 'animals-nature',
    ageTier: 'Ages 4-6',
    tagline: 'A gentle Victorian nature poem following a caterpillar\'s journey into a butterfly.',
    themeColor: '#10B981',
    badgeBg: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    stanzas: [
      [
        'Brown and furry,',
        'Caterpillar in a hurry,',
        'Take your walk',
        'To the shady leaf, or stalk,',
        'Or what not,',
        'Which may be the chosen spot.'
      ],
      [
        'No toad spy you,',
        'Hovering bird of prey pass by you;',
        'Spin and die,',
        'To live again a butterfly.'
      ]
    ],
    rhymeScheme: 'AABBCC / AABB',
    vocabulary: [
      { word: 'Furry', meaning: 'Covered with soft tiny hairs', emoji: '🧸' },
      { word: 'Stalk', meaning: 'The main stem supporting a plant or flower', emoji: '🌱' },
      { word: 'Hovering', meaning: 'Floating gracefully in the air in one place', emoji: '🦅' },
      { word: 'Chrysalis', meaning: 'The silk cocoon shell where caterpillar turns into a butterfly', emoji: '🦋' }
    ],
    educationalTakeaway: 'Introduces the butterfly metamorphosis life cycle and careful observation of insects in nature.',
    recitalTips: [
      'Say "Brown and furry" with a curious, quiet whisper.',
      'Speed up slightly for "Caterpillar in a hurry".',
      'End with wonder on the final word: "butterfly"!'
    ]
  },

  // 7. The Wind
  {
    id: 'the-wind',
    title: 'The Wind',
    poet: 'Robert Louis Stevenson (1885)',
    emoji: '🍃',
    category: 'seasons-weather',
    ageTier: 'Ages 4-6',
    tagline: 'A sensory masterpiece asking who the invisible, whistling wind really is.',
    themeColor: '#60A5FA',
    badgeBg: 'bg-blue-100 text-blue-800 border-blue-300',
    stanzas: [
      [
        'I saw you toss the kites on high',
        'And blow the birds about the sky;',
        'And all around I heard you pass,',
        'Like ladies\' skirts across the grass—',
        'O wind, a-blowing all day long,',
        'O wind, that sings so loud a song!'
      ],
      [
        'I saw the different things you did,',
        'But always you yourself you hid.',
        'I felt you push, I heard you call,',
        'I could not see yourself at all—',
        'O wind, a-blowing all day long,',
        'O wind, that sings so loud a song!'
      ],
      [
        'O you that are so strong and cold,',
        'O blower, are you young or old?',
        'Are you a beast of field and tree,',
        'Or just a stronger child than me?',
        'O wind, a-blowing all day long,',
        'O wind, that sings so loud a song!'
      ]
    ],
    rhymeScheme: 'AABBCC',
    vocabulary: [
      { word: 'Toss', meaning: 'To throw or lift lightly into the air', emoji: '🪁' },
      { word: 'Invisible', meaning: 'Cannot be seen with human eyes, yet can be felt', emoji: '💨' },
      { word: 'Beast', meaning: 'A powerful, wild creature of the fields', emoji: '🦁' }
    ],
    educationalTakeaway: 'Teaches sensory imagery—how we know invisible forces exist by observing what they move and sound like.',
    recitalTips: [
      'Make a gentle "whoosh" sound with your breath before the chorus.',
      'Stretch out the words "O wind, that sings so loud a song!" with musicality.'
    ]
  },

  // 8. Rain, Rain, Go Away
  {
    id: 'rain-rain-go-away',
    title: 'Rain, Rain, Go Away',
    poet: 'Traditional Rhyme (17th Century)',
    emoji: '🌧️',
    category: 'seasons-weather',
    ageTier: 'Ages 2-4',
    tagline: 'The timeless chant every child recites when eager for sunshine and playground time.',
    themeColor: '#38BDF8',
    badgeBg: 'bg-sky-100 text-sky-800 border-sky-300',
    stanzas: [
      [
        'Rain, rain, go away,',
        'Come again another day,',
        'Little children want to play,',
        'Rain, rain, go away!'
      ],
      [
        'Rain, rain, go to Spain,',
        'Never show your face again!',
        'Sun is shining bright and high,',
        'Painting rainbows in the sky!'
      ]
    ],
    rhymeScheme: 'AAAA / AABB',
    vocabulary: [
      { word: 'Rainbow', meaning: 'An arc of seven radiant colors formed by sunlight in raindrops', emoji: '🌈' },
      { word: 'Shining', meaning: 'Giving off warm bright light', emoji: '☀️' }
    ],
    educationalTakeaway: 'Reinforces identical rhyme sounds ("away / day / play"), weather transitions, and playful chants.',
    recitalTips: [
      'Clap your hands rhythmically: clap-clap on each "Rain, rain".',
      'Smile and look upward at the sky with bright eyes.'
    ]
  },

  // 9. Bed in Summer
  {
    id: 'bed-in-summer',
    title: 'Bed in Summer',
    poet: 'Robert Louis Stevenson (1885)',
    emoji: '☀️',
    category: 'bedtime-lullabies',
    ageTier: 'Ages 4-6',
    tagline: 'A delightfully relatable poem about going to sleep while the sun is still shining.',
    themeColor: '#F59E0B',
    badgeBg: 'bg-amber-100 text-amber-800 border-amber-300',
    stanzas: [
      [
        'In winter I get up at night',
        'And dress by yellow candle-light.',
        'In summer, quite the other way,',
        'I have to go to bed by day.'
      ],
      [
        'I have to go to bed and see',
        'The birds still hopping on the tree,',
        'Or hear the grown-up people\'s feet',
        'Still going past me in the street.'
      ],
      [
        'And does it not seem hard to you,',
        'When all the sky is clear and blue,',
        'And I should like so much to play,',
        'To have to go to bed by day?'
      ]
    ],
    rhymeScheme: 'AABB',
    vocabulary: [
      { word: 'Candle-light', meaning: 'The warm yellow flicker of a wax candle flame', emoji: '🕯️' },
      { word: 'Hopping', meaning: 'Jumping quickly with both feet like a bird', emoji: '🐦' },
      { word: 'Daylight', meaning: 'Natural sunshine filling the sky before night', emoji: '🌅' }
    ],
    educationalTakeaway: 'Explores seasonal differences in daylight hours between summer and winter in a funny, honest child perspective.',
    recitalTips: [
      'Use a mildly puzzled, playful voice for "To have to go to bed by day?"',
      'Gesture toward a window when mentioning the birds hopping on the tree.'
    ]
  },

  // 10. Star Light, Star Bright
  {
    id: 'star-light-star-bright',
    title: 'Star Light, Star Bright',
    poet: 'American Folklore (Late 19th Century)',
    emoji: '⭐',
    category: 'bedtime-lullabies',
    ageTier: 'All Ages',
    tagline: 'The classic bedtime evening wish on the very first star of dusk.',
    themeColor: '#818CF8',
    badgeBg: 'bg-indigo-100 text-indigo-800 border-indigo-300',
    stanzas: [
      [
        'Star light, star bright,',
        'First star I see tonight,',
        'I wish I may, I wish I might,',
        'Have the wish I wish tonight.'
      ]
    ],
    rhymeScheme: 'AAAA',
    vocabulary: [
      { word: 'Tonight', meaning: 'The present night after dusk', emoji: '🌃' },
      { word: 'Wish', meaning: 'A hopeful, positive thought for something wonderful to happen', emoji: '🌠' }
    ],
    educationalTakeaway: 'Teaches rhyme density (all four lines end in "-ight"), evening observation, and positive dreaming.',
    recitalTips: [
      'Close your eyes and fold your hands over your heart on "I wish I may".',
      'Recite with a peaceful, gentle bedtime breath.'
    ]
  },

  // 11. Brush Your Teeth
  {
    id: 'brush-your-teeth',
    title: 'Brush, Brush, Brush Your Teeth',
    poet: 'First Open School Educational Rhyme',
    emoji: '🪥',
    category: 'good-habits',
    ageTier: 'Ages 2-4',
    tagline: 'An energetic daily hygiene rhyme turning tooth brushing into a sparkling musical adventure.',
    themeColor: '#38BDF8',
    badgeBg: 'bg-sky-100 text-sky-800 border-sky-300',
    stanzas: [
      [
        'Brush, brush, brush your teeth,',
        'Brush them every day!',
        'Up and down and round and round,',
        'Wash the germs away!'
      ],
      [
        'In the morning when you wake,',
        'And before you sleep at night,',
        'Brush them gently for two minutes,',
        'Keep them clean and bright!'
      ]
    ],
    rhymeScheme: 'ABCB / ABCB',
    vocabulary: [
      { word: 'Germs', meaning: 'Tiny invisible bugs that dislike soap and toothpaste', emoji: '🦠' },
      { word: 'Gently', meaning: 'Softly and carefully so your gums stay happy', emoji: '🪥' },
      { word: 'Bright', meaning: 'Sparkling and shiny clean', emoji: '✨' }
    ],
    educationalTakeaway: 'Builds positive daily dental hygiene habits and two-minute brushing awareness for early learners.',
    recitalTips: [
      'Pretend your index finger is a toothbrush moving in circles.',
      'Show your biggest, brightest smile on the final word "bright"!'
    ]
  },

  // 12. Please and Thank You (Magic Words)
  {
    id: 'please-and-thank-you',
    title: 'The Magic Words',
    poet: 'First Open School Manners Rhyme',
    emoji: '🪄',
    category: 'good-habits',
    ageTier: 'All Ages',
    tagline: 'A sweet and memorable reminder of polite words that unlock warm smiles everywhere.',
    themeColor: '#EC4899',
    badgeBg: 'bg-pink-100 text-pink-800 border-pink-300',
    stanzas: [
      [
        'Hearts, like doors, will open with ease',
        'To very, very little keys;',
        'And don\'t forget that two of these',
        'Are "Thank you, sir" and "If you please."'
      ],
      [
        'When you receive a helping hand,',
        'Say "Thank you" with a smile;',
        'Polite words spread like sunshine beams',
        'Across every single mile.'
      ]
    ],
    rhymeScheme: 'AABB / ABCB',
    vocabulary: [
      { word: 'Courtesy', meaning: 'Treating others with kindness, respect, and good manners', emoji: '🤝' },
      { word: 'Sunshine beams', meaning: 'Warm rays of golden light that cheer people up', emoji: '☀️' }
    ],
    educationalTakeaway: 'Teaches social emotional learning, empathy, polite speech, and the power of gratitude.',
    recitalTips: [
      'Nod your head courteously when you recite the magic words.',
      'Deliver the poem with a genuine, kind smile.'
    ]
  },

  // 13. Five Little Monkeys
  {
    id: 'five-little-monkeys',
    title: 'Five Little Monkeys Jumping on the Bed',
    poet: 'Traditional Nursery Verse',
    emoji: '🐒',
    category: 'fun-whimsical',
    ageTier: 'Ages 2-4',
    tagline: 'A bouncy, hilarious counting-backward poem with hand motions and sound effects.',
    themeColor: '#F97316',
    badgeBg: 'bg-orange-100 text-orange-800 border-orange-300',
    stanzas: [
      [
        'Five little monkeys jumping on the bed,',
        'One fell off and bumped his head.',
        'Mama called the doctor and the doctor said,',
        '"No more monkeys jumping on the bed!"'
      ],
      [
        'Four little monkeys jumping on the bed,',
        'One fell off and bumped her head.',
        'Mama called the doctor and the doctor said,',
        '"No more monkeys jumping on the bed!"'
      ],
      [
        'Three little monkeys jumping on the bed,',
        'One fell off and bumped his head.',
        'Mama called the doctor and the doctor said,',
        '"No more monkeys jumping on the bed!"'
      ],
      [
        'Two little monkeys jumping on the bed,',
        'One fell off and bumped her head.',
        'Mama called the doctor and the doctor said,',
        '"No more monkeys jumping on the bed!"'
      ],
      [
        'One little monkey jumping on the bed,',
        'He fell off and bumped his head.',
        'Mama called the doctor and the doctor said,',
        '"Put those monkeys right to bed!"'
      ]
    ],
    rhymeScheme: 'AAAA',
    vocabulary: [
      { word: 'Bumped', meaning: 'Knocked gently against something', emoji: '🤕' },
      { word: 'Doctor', meaning: 'A kind medical professional who helps people feel better', emoji: '🩺' }
    ],
    educationalTakeaway: 'Teaches backward counting (subtraction: 5, 4, 3, 2, 1), rule following, and bedroom safety.',
    recitalTips: [
      'Hold up 5 fingers, then 4, 3, 2, 1 as you recite.',
      'Use a stern, funny doctor voice with your finger wagging for line 4!'
    ]
  },

  // 14. What Is Pink?
  {
    id: 'what-is-pink',
    title: 'What Is Pink? (A Poem of Colors)',
    poet: 'Christina Rossetti (1871)',
    emoji: '🎨',
    category: 'animals-nature',
    ageTier: 'Ages 4-6',
    tagline: 'A celebrated color poetry masterpiece connecting hues with nature\'s splendors.',
    themeColor: '#F43F5E',
    badgeBg: 'bg-rose-100 text-rose-800 border-rose-300',
    stanzas: [
      [
        'What is pink? A rose is pink',
        'By a fountain\'s brink.',
        'What is red? A poppy\'s red',
        'In its barley bed.'
      ],
      [
        'What is blue? The sky is blue',
        'Where the clouds float thro\'.',
        'What is white? A swan is white',
        'Sailing in the light.'
      ],
      [
        'What is yellow? Pears are yellow,',
        'Rich and ripe and mellow.',
        'What is green? The grass is green,',
        'With small flowers between.'
      ],
      [
        'What is violet? Clouds are violet',
        'In the summer twilight.',
        'What is orange? Why, an orange,',
        'Just an orange!'
      ]
    ],
    rhymeScheme: 'AABB',
    vocabulary: [
      { word: 'Brink', meaning: 'The edge of water or a fountain pool', emoji: '⛲' },
      { word: 'Mellow', meaning: 'Pleasantly soft, sweet, and perfectly ripe', emoji: '🍐' },
      { word: 'Twilight', meaning: 'The gentle violet glow in the sky right after sunset', emoji: '🌆' }
    ],
    educationalTakeaway: 'Expands color recognition, descriptive adjectives ("rich and ripe and mellow"), and sensory poetic inquiry.',
    recitalTips: [
      'Ask each question "What is pink?" with genuine curiosity.',
      'Deliver the final line "Just an orange!" with a funny, joyful shrug.'
    ]
  },

  // 15. The Friendly Cow
  {
    id: 'the-friendly-cow',
    title: 'The Friendly Cow',
    poet: 'Robert Louis Stevenson (1885)',
    emoji: '🐄',
    category: 'animals-nature',
    ageTier: 'Ages 2-4',
    tagline: 'A warm country poem about the gentle cow who gives delicious sweet cream and milk.',
    themeColor: '#84CC16',
    badgeBg: 'bg-lime-100 text-lime-800 border-lime-300',
    stanzas: [
      [
        'The friendly cow, all red and white,',
        'I love with all my heart:',
        'She gives me cream with all her might,',
        'To eat with apple-tart.'
      ],
      [
        'She wanders lowing here and there,',
        'And yet she cannot stray,',
        'All in the pleasant open air,',
        'The pleasant light of day;'
      ],
      [
        'And blown by all the winds that pass',
        'And wet with all the showers,',
        'She walks among the meadow grass',
        'And eats the meadow flowers.'
      ]
    ],
    rhymeScheme: 'ABAB',
    vocabulary: [
      { word: 'Lowing', meaning: 'The deep, gentle "moo" sound a cow makes', emoji: '🐮' },
      { word: 'Meadow', meaning: 'A wide grassy field covered with wildflowers', emoji: '🌼' },
      { word: 'Apple-tart', meaning: 'A delicious baked pastry filled with sweet apples', emoji: '🥧' }
    ],
    educationalTakeaway: 'Teaches animal appreciation, farm origins of healthy foods, and alternating ABAB rhyme scheme.',
    recitalTips: [
      'Say "I love with all my heart" with warmth and affection.',
      'Keep a gentle, rocking pasture pace throughout.'
    ]
  },

  // 16. Hickory Dickory Dock
  {
    id: 'hickory-dickory-dock',
    title: 'Hickory, Dickory, Dock',
    poet: 'Traditional English Rhyme (1744)',
    emoji: '🕰️',
    category: 'classics-rhymes',
    ageTier: 'Ages 2-4',
    tagline: 'The iconic clock-ticking rhyme that makes telling time tick-tock fun!',
    themeColor: '#F59E0B',
    badgeBg: 'bg-amber-100 text-amber-800 border-amber-300',
    stanzas: [
      [
        'Hickory, dickory, dock,',
        'The mouse ran up the clock.',
        'The clock struck one,',
        'The mouse ran down,',
        'Hickory, dickory, dock!'
      ],
      [
        'Hickory, dickory, dock,',
        'The clock struck two,',
        'The mouse said "Boo!"',
        'And down he flew,',
        'Hickory, dickory, dock!'
      ]
    ],
    rhymeScheme: 'AABBA',
    vocabulary: [
      { word: 'Struck', meaning: 'When a clock bell chimes to announce the hour', emoji: '🔔' },
      { word: 'Tick-Tock', meaning: 'The steady sound of pendulum gears measuring time', emoji: '⏱️' }
    ],
    educationalTakeaway: 'Connects clocks, numbers, and onomatopoeia with rapid, energetic tongue agility.',
    recitalTips: [
      'Clap your tongue on the roof of your mouth for a ticking clock sound.',
      'Run your fingers up your arm like a mouse on "ran up the clock"!'
    ]
  },

  // 17. Good Morning, Golden Sun!
  {
    id: 'good-morning-golden-sun',
    title: 'Good Morning, Golden Sun!',
    poet: 'First Open School Morning Verse',
    emoji: '🌅',
    category: 'seasons-weather',
    ageTier: 'All Ages',
    tagline: 'An uplifting morning wake-up poem welcoming birds, flowers, and a fresh day of learning.',
    themeColor: '#EAB308',
    badgeBg: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    stanzas: [
      [
        'Good morning, sky! Good morning, sun!',
        'Good morning, little winds that run!',
        'Good morning, birds! Good morning, trees!',
        'And creeping grass, and buzzing bees!'
      ],
      [
        'How did you find out it was day?',
        'Who told you night had gone away?',
        'I\'m wide awake, I\'m up like you,',
        'I\'ll be right out to learn with you!'
      ]
    ],
    rhymeScheme: 'AABB',
    vocabulary: [
      { word: 'Awake', meaning: 'Not sleeping; alert, refreshed, and ready for action', emoji: '👀' },
      { word: 'Creeping', meaning: 'Growing close along the ground', emoji: '🌿' }
    ],
    educationalTakeaway: 'Inspires morning positivity, appreciation for the waking environment, and energetic speech projection.',
    recitalTips: [
      'Wave your hand warmly to each creature: sky, sun, winds, birds, bees!',
      'Smile wide on "I\'m wide awake!" with high energy.'
    ]
  },

  // 18. One, Two, Buckle My Shoe
  {
    id: 'one-two-buckle-my-shoe',
    title: 'One, Two, Buckle My Shoe',
    poet: 'Traditional English Counting Song (1805)',
    emoji: '👟',
    category: 'fun-whimsical',
    ageTier: 'Ages 2-4',
    tagline: 'The ultimate rhyming counting companion from one all the way to ten!',
    themeColor: '#8B5CF6',
    badgeBg: 'bg-purple-100 text-purple-800 border-purple-300',
    stanzas: [
      [
        'One, two, buckle my shoe;',
        'Three, four, shut the door;',
        'Five, six, pick up sticks;',
        'Seven, eight, lay them straight;',
        'Nine, ten, a big fat hen!'
      ]
    ],
    rhymeScheme: 'AABBCCDD',
    vocabulary: [
      { word: 'Buckle', meaning: 'To fasten shoes with a secure strap or clasp', emoji: '👞' },
      { word: 'Straight', meaning: 'In an even, neat line without any bends', emoji: '📏' }
    ],
    educationalTakeaway: 'Pair numbers 1-10 with daily physical actions and rhyming vowel patterns.',
    recitalTips: [
      'Bend down to touch your shoe on "buckle my shoe".',
      'Pretend to push a door closed on "shut the door"!'
    ]
  },

  // 19. My Shadow
  {
    id: 'my-shadow',
    title: 'My Shadow',
    poet: 'Robert Louis Stevenson (1885)',
    emoji: '👥',
    category: 'animals-nature',
    ageTier: 'Ages 6-8',
    tagline: 'A world-famous poem exploring the playful mystery of your shadow on a sunny day.',
    themeColor: '#64748B',
    badgeBg: 'bg-slate-100 text-slate-800 border-slate-300',
    stanzas: [
      [
        'I have a little shadow that goes in and out with me,',
        'And what can be the use of him is more than I can see.',
        'He is very, very like me from the heels up to the head;',
        'And I see him jump before me, when I jump into my bed.'
      ],
      [
        'The funniest thing about him is the way he likes to grow—',
        'Not at all like proper children, which is always very slow;',
        'For he sometimes shoots up taller like an india-rubber ball,',
        'And he sometimes gets so little that there\'s none of him at all.'
      ]
    ],
    rhymeScheme: 'AABB',
    vocabulary: [
      { word: 'Shadow', meaning: 'A dark shape cast on a surface when light is blocked', emoji: '👤' },
      { word: 'India-rubber', meaning: 'Natural bouncy rubber that bounces high into the air', emoji: '🏀' }
    ],
    educationalTakeaway: 'Teaches light and shadows in physics, playful simile, and observing one\'s body movement.',
    recitalTips: [
      'Point down at your feet when saying "from the heels up to the head".',
      'Jump up lightly on "when I jump into my bed"!'
    ]
  },

  // 20. Autumn Leaves Are Falling Down
  {
    id: 'autumn-leaves-falling',
    title: 'Autumn Leaves Are Falling Down',
    poet: 'Traditional Seasonal Verse',
    emoji: '🍁',
    category: 'seasons-weather',
    ageTier: 'All Ages',
    tagline: 'A colorful seasonal dance poem about red, yellow, orange, and brown falling leaves.',
    themeColor: '#EA580C',
    badgeBg: 'bg-orange-100 text-orange-800 border-orange-300',
    stanzas: [
      [
        'Autumn leaves are falling down,',
        'Falling down, falling down;',
        'Autumn leaves are falling down,',
        'Yellow, red, and brown!'
      ],
      [
        'Take a rake and rake them up,',
        'Rake them up, rake them up;',
        'Take a rake and rake them up,',
        'Make a giant pile!'
      ],
      [
        'Jump right in and have some fun,',
        'Have some fun, have some fun;',
        'Jump right in and have some fun,',
        'With a happy smile!'
      ]
    ],
    rhymeScheme: 'ABCB',
    vocabulary: [
      { word: 'Autumn', meaning: 'The golden season of the year between summer and winter', emoji: '🍂' },
      { word: 'Rake', meaning: 'A garden tool with long tines used to gather fallen leaves', emoji: '🧹' }
    ],
    educationalTakeaway: 'Encourages seasonal recognition, color sorting, physical active play, and rhythmic joy.',
    recitalTips: [
      'Flutter your fingers gently down like swirling leaves.',
      'Pretend to hold a rake and sweep back and forth!'
    ]
  },

  // 21. Mary Had a Little Lamb
  {
    id: 'mary-had-a-little-lamb',
    title: 'Mary Had a Little Lamb',
    poet: 'Sarah Josepha Hale (1830)',
    emoji: '🐑',
    category: 'classics-rhymes',
    ageTier: 'All Ages',
    tagline: 'The timeless American nursery poem about loyalty, gentle companionship, and eager learning.',
    themeColor: '#4D96FF',
    badgeBg: 'bg-blue-100 text-blue-800 border-blue-300',
    stanzas: [
      [
        'Mary had a little lamb,',
        'Its fleece was white as snow;',
        'And everywhere that Mary went,',
        'The lamb was sure to go.'
      ],
      [
        'It followed her to school one day,',
        'Which was against the rule;',
        'It made the children laugh and play,',
        'To see a lamb at school.'
      ],
      [
        'And so the teacher turned it out,',
        'But still it lingered near,',
        'And waited patiently about,',
        'Till Mary did appear.'
      ],
      [
        '\"Why does the lamb love Mary so?\"',
        'The eager children cry;',
        '\"Why, Mary loves the lamb, you know,\"',
        'The teacher did reply.'
      ]
    ],
    rhymeScheme: 'ABCB',
    vocabulary: [
      { word: 'Fleece', meaning: 'The thick, soft coat of wool covering a sheep or lamb', emoji: '🧶' },
      { word: 'Lingered', meaning: 'Stayed patiently in a place rather than leaving right away', emoji: '⏳' },
      { word: 'Patiently', meaning: 'Waiting calmly and peacefully without complaining', emoji: '🧘' },
      { word: 'Reply', meaning: 'To give an answer or respond to a question', emoji: '💬' }
    ],
    educationalTakeaway: 'Demonstrates kindness toward animals, friendship bonds, and the rhythm of traditional four-line ballad stanzas.',
    recitalTips: [
      'Speak the first stanza with a warm, melodic bounce.',
      'Giggle cheerfully on \"laugh and play\" to bring the schoolyard scene to life.',
      'Speak the teacher\'s concluding words with soft, tender wisdom.'
    ]
  },

  // 22. Jack and Jill
  {
    id: 'jack-and-jill',
    title: 'Jack and Jill',
    poet: 'Traditional English Nursery Verse (1765)',
    emoji: '🪣',
    category: 'classics-rhymes',
    ageTier: 'Ages 2-4',
    tagline: 'A bouncy, cautionary action rhyme about fetching water, tumbling down, and patching up bumps.',
    themeColor: '#FF6B6B',
    badgeBg: 'bg-rose-100 text-rose-800 border-rose-300',
    stanzas: [
      [
        'Jack and Jill went up the hill',
        'To fetch a pail of water;',
        'Jack fell down and broke his crown,',
        'And Jill came tumbling after.'
      ],
      [
        'Up Jack got, and home did trot,',
        'As fast as he could caper,',
        'To old Dame Dob, who patched his knob',
        'With vinegar and brown paper.'
      ]
    ],
    rhymeScheme: 'AABCCB',
    vocabulary: [
      { word: 'Fetch', meaning: 'To go somewhere, pick something up, and bring it back', emoji: '🏃' },
      { word: 'Pail', meaning: 'A round bucket with a handle used for carrying water', emoji: '🪣' },
      { word: 'Crown', meaning: 'The very top part of a person\'s head', emoji: '👑' },
      { word: 'Caper', meaning: 'To skip, leap, or hop lightly and playfully', emoji: '🦘' }
    ],
    educationalTakeaway: 'Teaches rhythmic meter, internal rhymes (\"down\" / \"crown\", \"got\" / \"trot\"), and resilience in getting back up after slipping.',
    recitalTips: [
      'March in place as you climb \"up the hill\".',
      'Crouch down quickly with hands on head for \"broke his crown\"!',
      'Skip happily when reciting \"home did trot as fast as he could caper\".'
    ]
  },

  // 23. Little Miss Muffet
  {
    id: 'little-miss-muffet',
    title: 'Little Miss Muffet',
    poet: 'Traditional English Rhyme (1805)',
    emoji: '🕷️',
    category: 'classics-rhymes',
    ageTier: 'Ages 2-4',
    tagline: 'A playful narrative rhyme about a cozy outdoor snack, a curious visitor, and a surprising leap.',
    themeColor: '#F59E0B',
    badgeBg: 'bg-amber-100 text-amber-800 border-amber-300',
    stanzas: [
      [
        'Little Miss Muffet sat on a tuffet,',
        'Eating her curds and whey;',
        'There came a big spider,',
        'Who sat down beside her,',
        'And frightened Miss Muffet away!'
      ]
    ],
    rhymeScheme: 'AABBA',
    vocabulary: [
      { word: 'Tuffet', meaning: 'A low grassy mound or a soft cushioned footstool', emoji: '🛋️' },
      { word: 'Curds and whey', meaning: 'An old-fashioned wholesome snack made from milk, similar to cottage cheese', emoji: '🥣' },
      { word: 'Frightened', meaning: 'Startled or made suddenly surprised by something unexpected', emoji: '😲' }
    ],
    educationalTakeaway: 'Excellent for phonological rhyme-matching (Muffet/tuffet, spider/beside her) and expressive dramatic vocal dynamics.',
    recitalTips: [
      'Pretend to hold a bowl and spoon on the first two lines.',
      'Crawl your fingers like spider legs across your other arm.',
      'Throw your hands up with a playful gasp on \"away!\"'
    ]
  },

  // 24. Hey Diddle Diddle
  {
    id: 'hey-diddle-diddle',
    title: 'Hey Diddle Diddle',
    poet: 'Mother Goose Classic (1765)',
    emoji: '🎻',
    category: 'fun-whimsical',
    ageTier: 'Ages 2-4',
    tagline: 'The ultimate whimsical nonsense poem of fiddling cats, jumping cows, and runaway cutlery.',
    themeColor: '#8B5CF6',
    badgeBg: 'bg-purple-100 text-purple-800 border-purple-300',
    stanzas: [
      [
        'Hey diddle, diddle,',
        'The cat and the fiddle,',
        'The cow jumped over the moon;',
        'The little dog laughed',
        'To see such sport,',
        'And the dish ran away with the spoon!'
      ]
    ],
    rhymeScheme: 'AABCCB',
    vocabulary: [
      { word: 'Fiddle', meaning: 'Another lively musical word for a violin played with a bow', emoji: '🎻' },
      { word: 'Sport', meaning: 'Fun, amusing play or entertaining spectacle', emoji: '🎪' },
      { word: 'Diddle', meaning: 'A playful nonsense word used to keep a lively musical beat', emoji: '🎵' }
    ],
    educationalTakeaway: 'Celebrates boundless imaginative imagery, personification (laughing dog, running dish), and energetic tempo.',
    recitalTips: [
      'Pretend to play a violin bow back and forth with your hands.',
      'Make a giant upward leap gesture when reciting \"jumped over the moon!\"',
      'Use a giggly voice for \"the little dog laughed\".'
    ]
  },

  // 25. Teddy Bear, Teddy Bear, Turn Around
  {
    id: 'teddy-bear-turn-around',
    title: 'Teddy Bear, Teddy Bear, Turn Around',
    poet: 'Traditional Action Rhyme',
    emoji: '🧸',
    category: 'fun-whimsical',
    ageTier: 'Ages 2-4',
    tagline: 'The most popular kindergarten physical coordination and action-response recital verse.',
    themeColor: '#EA580C',
    badgeBg: 'bg-orange-100 text-orange-800 border-orange-300',
    stanzas: [
      [
        'Teddy bear, teddy bear, turn around,',
        'Teddy bear, teddy bear, touch the ground.',
        'Teddy bear, teddy bear, reach up high,',
        'Teddy bear, teddy bear, touch the sky.'
      ],
      [
        'Teddy bear, teddy bear, bend down low,',
        'Teddy bear, teddy bear, touch your toe.',
        'Teddy bear, teddy bear, jump up high,',
        'Teddy bear, teddy bear, wave goodbye!'
      ]
    ],
    rhymeScheme: 'AABB',
    vocabulary: [
      { word: 'Turn around', meaning: 'To spin gently in a complete circle on your feet', emoji: '🔄' },
      { word: 'Reach up', meaning: 'To stretch your arms and fingertips toward the sky', emoji: '🙆' }
    ],
    educationalTakeaway: 'Connects language listening directly to gross motor actions, body spatial awareness, and pair rhymes.',
    recitalTips: [
      'Follow every action word immediately: spin, touch the ground, and stretch tall.',
      'Keep a steady, cheerful rhythm like marching feet.',
      'Finish with a warm smile and wave goodbye!'
    ]
  },

  // 26. I\'m a Little Teapot
  {
    id: 'im-a-little-teapot',
    title: 'I\'m a Little Teapot',
    poet: 'George Harold Sanders & Clarence Z. Kelley (1939)',
    emoji: '🫖',
    category: 'fun-whimsical',
    ageTier: 'Ages 2-4',
    tagline: 'A beloved physical enactment poem turning every kid into a steaming, whistling teapot.',
    themeColor: '#06B6D4',
    badgeBg: 'bg-cyan-100 text-cyan-800 border-cyan-300',
    stanzas: [
      [
        'I\'m a little teapot, short and stout,',
        'Here is my handle, here is my spout.',
        'When I get all steamed up, hear me shout:',
        'Tip me over and pour me out!'
      ]
    ],
    rhymeScheme: 'AAAA',
    vocabulary: [
      { word: 'Stout', meaning: 'Strong, solid, and pleasantly round in shape', emoji: '🏺' },
      { word: 'Handle', meaning: 'The curved loop on the side of a pot you hold with your hand', emoji: '✋' },
      { word: 'Spout', meaning: 'The shaped curved tube through which liquid pours out smoothly', emoji: '💧' }
    ],
    educationalTakeaway: 'Teaches alliteration and the \"out/stout/spout/shout\" rhyme family, along with body coordination gestures.',
    recitalTips: [
      'Put one hand on your hip to make the \"handle\".',
      'Raise the other arm curved outwards with hand bent for the \"spout\".',
      'Lean gracefully to the side on \"tip me over and pour me out!\"'
    ]
  },

  // 27. Two Little Dicky Birds
  {
    id: 'two-little-dicky-birds',
    title: 'Two Little Dicky Birds',
    poet: 'Traditional English Fingerplay Rhyme',
    emoji: '🐦',
    category: 'animals-nature',
    ageTier: 'Ages 2-4',
    tagline: 'An enchanting fingerplay poem that disappears and reappears birds right before your eyes.',
    themeColor: '#6BCB77',
    badgeBg: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    stanzas: [
      [
        'Two little dicky birds sitting on a wall,',
        'One named Peter, one named Paul.',
        'Fly away, Peter! Fly away, Paul!',
        'Come back, Peter! Come back, Paul!'
      ]
    ],
    rhymeScheme: 'AABB',
    vocabulary: [
      { word: 'Dicky bird', meaning: 'A fond, affectionate traditional word for a tiny garden songbird', emoji: '🐦' },
      { word: 'Fly away', meaning: 'To spread wings and take flight into the open air', emoji: '🪶' }
    ],
    educationalTakeaway: 'Encourages bilateral finger coordination, naming identities, disappearance/reappearance object permanence games.',
    recitalTips: [
      'Hold up your two index fingers like little perched birds.',
      'Hide one finger behind your back on \"Fly away, Peter!\" and the other on \"Fly away, Paul!\"',
      'Bring each finger back to the front excitedly on \"Come back!\"'
    ]
  },

  // 28. Wash, Wash, Wash Your Hands
  {
    id: 'wash-your-hands-scrub',
    title: 'Wash, Wash, Wash Your Hands',
    poet: 'Healthy Habits Rhythm Verse',
    emoji: '🧼',
    category: 'good-habits',
    ageTier: 'All Ages',
    tagline: 'A joyful soap-and-bubbles cadence poem that makes 20 seconds of hand-washing feel like singing.',
    themeColor: '#F59E0B',
    badgeBg: 'bg-amber-100 text-amber-800 border-amber-300',
    stanzas: [
      [
        'Wash, wash, wash your hands,',
        'Make them clean and neat;',
        'Scrub the tops and scrub the palms,',
        'And between each finger sheet!'
      ],
      [
        'Soap and water, rub, rub, rub,',
        'Wash the germs away;',
        'Now your hands are squeaky clean,',
        'Ready for work and play!'
      ]
    ],
    rhymeScheme: 'ABCB',
    vocabulary: [
      { word: 'Palms', meaning: 'The inner, flat surface of your hands between wrist and fingers', emoji: '🖐️' },
      { word: 'Germs', meaning: 'Microscopic tiny particles washed away by warm water and soap', emoji: '🔬' },
      { word: 'Squeaky clean', meaning: 'So delightfully clean and fresh that it almost squeaks to the touch', emoji: '✨' }
    ],
    educationalTakeaway: 'Connects health hygiene habits with rhythm, singing duration (20 seconds), and daily self-care empowerment.',
    recitalTips: [
      'Rub your palms together vigorously to mimic lathering soap bubbles.',
      'Interlock your fingers to show scrubbing between them.',
      'Give your hands a happy sparkle shake on \"squeaky clean!\"'
    ]
  }
];

export function getPoemById(id: string): Poem | undefined {
  return POEMS_DATA.find(p => p.id.toLowerCase() === id.toLowerCase());
}

export function getPoemsByCategory(category: PoemCategory): Poem[] {
  return POEMS_DATA.filter(p => p.category === category);
}
