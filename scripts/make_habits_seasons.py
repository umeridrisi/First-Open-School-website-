# -*- coding: utf-8 -*-
import json
import os

good_habits = [
  {
    "id": "brush-your-teeth",
    "title": "Brush, Brush, Brush Your Teeth",
    "poet": "Traditional Daily Habit Rhyme",
    "emoji": "🪥",
    "category": "good-habits",
    "ageTier": "Ages 2-4",
    "tagline": "Keep teeth sparkling white, morning and night, from front to back and left to right!",
    "themeColor": "#06B6D4",
    "badgeBg": "bg-cyan-100 text-cyan-800 border-cyan-300",
    "stanzas": [
      [
        "Brush, brush, brush your teeth,",
        "Brush them every day!",
        "Up and down and round and round,",
        "Wash the germs away!"
      ],
      [
        "Brush them in the morning light,",
        "Brush them before bed at night;",
        "Sparkling clean and shining bright,",
        "Smile with all your might!"
      ]
    ],
    "rhymeScheme": "ABCB AABB",
    "vocabulary": [
      { "word": "Sparkling", "meaning": "Shining brightly with flashes of light", "emoji": "✨" },
      { "word": "Germs", "meaning": "Tiny microscopic organisms we wash away to keep teeth healthy", "emoji": "🧼" }
    ],
    "educationalTakeaway": "Promotes dental hygiene routines (2 minutes, twice a day), circular brushing strokes, and preventative health habits.",
    "recitalTips": [
      "Hold an imaginary toothbrush with index finger and make small circular motions over teeth.",
      "Flash a huge, bright sparkling smile on 'shining bright!'.",
      "Spit imaginary rinse water into the sink with a cheerful 'Ptooey!'."
    ]
  },
  {
    "id": "please-and-thank-you",
    "title": "The Magic Words (Please & Thank You)",
    "poet": "Traditional Manners Rhyme",
    "emoji": "🪄",
    "category": "good-habits",
    "ageTier": "All Ages",
    "tagline": "Two magic words that unlock kindness and brighten every single room.",
    "themeColor": "#F59E0B",
    "badgeBg": "bg-amber-100 text-amber-800 border-amber-300",
    "stanzas": [
      [
        "Hearts, like doors, will open with ease",
        "To very, very little keys;",
        "And don't forget that two of these",
        "Are 'Thank you, sir' and 'If you please.'"
      ],
      [
        "When you ask for what you need,",
        "'Please' is like a friendly seed;",
        "When someone lends a helping hand,",
        "'Thank you' warms across the land!"
      ]
    ],
    "rhymeScheme": "AAAA AABB",
    "vocabulary": [
      { "word": "Keys", "meaning": "Small tools that unlock doors; here used as a metaphor for polite words", "emoji": "🗝️" },
      { "word": "Kindness", "meaning": "The gentle quality of being friendly, generous, and considerate", "emoji": "💖" }
    ],
    "educationalTakeaway": "Emphasizes social-emotional courtesy, prosocial interaction keys, and grateful communication.",
    "recitalTips": [
      "Turn an imaginary key in a lock when saying 'little keys'.",
      "Bow head slightly with a polite hand gesture on 'If you please'.",
      "Place hand on heart with a grateful expression for 'Thank you'."
    ]
  },
  {
    "id": "wash-your-hands-scrub",
    "title": "Wash, Wash, Wash Your Hands",
    "poet": "Traditional Hygiene Verse",
    "emoji": "🧼",
    "category": "good-habits",
    "ageTier": "Ages 2-4",
    "tagline": "Rub with bubbly soap for twenty seconds to keep yourself and your friends healthy!",
    "themeColor": "#06B6D4",
    "badgeBg": "bg-cyan-100 text-cyan-800 border-cyan-300",
    "stanzas": [
      [
        "Wash, wash, wash your hands,",
        "Wash them nice and clean!",
        "Scrub the tops and scrub the bottoms,",
        "And the space between!"
      ],
      [
        "Get the soap and make it bubble,",
        "Chase away all germy trouble;",
        "Twenty seconds at the sink,",
        "Cleaner than you think!"
      ]
    ],
    "rhymeScheme": "ABCB AABB",
    "vocabulary": [
      { "word": "Bubble", "meaning": "A thin sphere of soapy liquid enclosing air", "emoji": "🫧" },
      { "word": "Between", "meaning": "In the middle space separating two fingers", "emoji": "🖐️" }
    ],
    "educationalTakeaway": "Mastery of CDC-recommended handwashing techniques (backs of hands, palms, between fingers) for 20 seconds.",
    "recitalTips": [
      "Rub palms together vigorously making imaginary soap suds.",
      "Interlace fingers scrubbing the spaces in between.",
      "Pretend to turn off the faucet with an elbow or paper towel!"
    ]
  },
  {
    "id": "tidying-up-clean-up-song",
    "title": "Tidying Up (The Clean Up Song)",
    "poet": "Traditional Classroom Rhyme",
    "emoji": "🧹",
    "category": "good-habits",
    "ageTier": "Ages 2-4",
    "tagline": "Clean up, clean up, everybody everywhere! Put your toys away and show how much you care!",
    "themeColor": "#6BCB77",
    "badgeBg": "bg-emerald-100 text-emerald-800 border-emerald-300",
    "stanzas": [
      [
        "Clean up, clean up, everybody everywhere!",
        "Clean up, clean up, everybody do your share!",
        "Pick up the blocks and put them in the bin,",
        "Tidy up the classroom and we will play again!"
      ]
    ],
    "rhymeScheme": "AABB",
    "vocabulary": [
      { "word": "Share", "meaning": "Your portion or contribution of helpful effort in a team", "emoji": "🤝" },
      { "word": "Tidy", "meaning": "Arranged neatly, cleanly, and in proper order", "emoji": "✨" }
    ],
    "educationalTakeaway": "Promotes collective classroom responsibility, orderliness, organization skills, and cooperation.",
    "recitalTips": [
      "Pretend to scoop toys off the floor and drop them neatly into a toy chest.",
      "Point around the room with a welcoming sweep on 'everybody do your share'.",
      "Give two celebratory claps on 'we will play again!'."
    ]
  },
  {
    "id": "sharing-is-caring-friendship",
    "title": "Sharing Is Caring",
    "poet": "Traditional Friendship Rhyme",
    "emoji": "🤝",
    "category": "good-habits",
    "ageTier": "All Ages",
    "tagline": "One for you and one for me, sharing toys and treats makes friendship grow!",
    "themeColor": "#FF6B6B",
    "badgeBg": "bg-rose-100 text-rose-800 border-rose-300",
    "stanzas": [
      [
        "One for you and one for me,",
        "Happy friends as we can be!",
        "When we share our blocks and clay,",
        "We have twice the fun today!"
      ],
      [
        "Crayons, wagons, games, and books,",
        "Brighter smiles in sunny nooks;",
        "Sharing shows a heart so kind,",
        "The truest treasure you can find!"
      ]
    ],
    "rhymeScheme": "AABB",
    "vocabulary": [
      { "word": "Treasure", "meaning": "Something extremely valuable and deeply cherished", "emoji": "💎" },
      { "word": "Sharing", "meaning": "Allowing someone else to enjoy or use part of what you have", "emoji": "🎁" }
    ],
    "educationalTakeaway": "Prosocial sharing behaviors, empathy, perspective taking, and emotional reciprocity.",
    "recitalTips": [
      "Hand an imaginary toy to a friend with an open palm on 'One for you'.",
      "Hug an imaginary toy to chest on 'one for me'.",
      "High-five your partner at the end of the second stanza!"
    ]
  },
  {
    "id": "morning-stretch-rise-and-shine",
    "title": "Morning Stretch (Rise and Shine)",
    "poet": "Traditional Wake-Up Verse",
    "emoji": "🌅",
    "category": "good-habits",
    "ageTier": "Ages 2-4",
    "tagline": "Stretch your arms up to the sky, wiggle your toes and say goodbye to sleep!",
    "themeColor": "#F59E0B",
    "badgeBg": "bg-amber-100 text-amber-800 border-amber-300",
    "stanzas": [
      [
        "Rise and shine, the day is bright,",
        "Wave goodbye to starry night!",
        "Stretch your arms up high and wide,",
        "Take a deep breath deep inside."
      ],
      [
        "Wiggle your fingers, wiggle your toes,",
        "Tap your cheeks and touch your nose;",
        "Ready to learn and ready to play,",
        "Welcome to a brand-new day!"
      ]
    ],
    "rhymeScheme": "AABB",
    "vocabulary": [
      { "word": "Breath", "meaning": "The air you take into your lungs and let out", "emoji": "🌬️" },
      { "word": "Shine", "meaning": "To give off or reflect warm, bright light", "emoji": "☀️" }
    ],
    "educationalTakeaway": "Morning somatic activation, deep diaphragmatic inhalation, and positive mental intention for the day.",
    "recitalTips": [
      "Reach arms straight up to the ceiling stretching spine tall.",
      "Take a slow, deep breath in through the nose and exhale with a smile.",
      "Touch nose playfully on 'touch your nose'."
    ]
  },
  {
    "id": "look-left-look-right-safety",
    "title": "Look Left, Look Right Before You Cross",
    "poet": "Traditional Street Safety Verse",
    "emoji": "🚦",
    "category": "good-habits",
    "ageTier": "All Ages",
    "tagline": "Stop, look, and listen with your ears before you step off the curb!",
    "themeColor": "#FF6B6B",
    "badgeBg": "bg-rose-100 text-rose-800 border-rose-300",
    "stanzas": [
      [
        "Stop! Look! Listen before you cross the street,",
        "Use your eyes, use your ears, before you use your feet!",
        "Look to the left and look to the right,",
        "Make sure no cars are anywhere in sight."
      ],
      [
        "Hold a grown-up's hand so tight,",
        "Walk, don't run, into the light;",
        "Safe and sound upon the floor,",
        "Arrive right at the playground door!"
      ]
    ],
    "rhymeScheme": "AABB",
    "vocabulary": [
      { "word": "Curb", "meaning": "The raised stone edge along the side of a street", "emoji": "🛣️" },
      { "word": "Listen", "meaning": "To pay careful attention with your ears to sounds", "emoji": "👂" }
    ],
    "educationalTakeaway": "Essential pedestrian safety, multi-sensory vigilance (eyes, ears, feet), and adult handholding routines.",
    "recitalTips": [
      "Freeze and hold up an open palm like a stop sign on 'Stop!'.",
      "Turn head purposefully all the way left, then all the way right.",
      "March in place steadily (walking, never running) across the imaginary road."
    ]
  },
  {
    "id": "drink-cool-water-every-day",
    "title": "Drink Cool Water Every Day",
    "poet": "Traditional Health Rhyme",
    "emoji": "💧",
    "category": "good-habits",
    "ageTier": "All Ages",
    "tagline": "Cool, fresh water keeps your brain sharp, your body energized, and your smile bright!",
    "themeColor": "#06B6D4",
    "badgeBg": "bg-cyan-100 text-cyan-800 border-cyan-300",
    "stanzas": [
      [
        "Water, water, fresh and cool,",
        "At home, in park, or at the school!",
        "Gulp, gulp, gulp, it tastes so fine,",
        "Keeps my body feeling prime!"
      ],
      [
        "Like the flowers need the rain,",
        "Water wakes up every brain;",
        "Drink your water, clean and clear,",
        "Strong and healthy all the year!"
      ]
    ],
    "rhymeScheme": "AABB",
    "vocabulary": [
      { "word": "Hydration", "meaning": "Giving your body the fresh water it needs to function at its best", "emoji": "💧" },
      { "word": "Prime", "meaning": "In the very best state of health, energy, and strength", "emoji": "⚡" }
    ],
    "educationalTakeaway": "Nutrition literacy, daily hydration habits, and biological analogy (children need water just like blooming flowers).",
    "recitalTips": [
      "Pretend to hold a tall cool glass of water.",
      "Make three swallowing gulps: 'Gulp, gulp, gulp!'.",
      "Flex your arms like a healthy, energized superhero."
    ]
  },
  {
    "id": "say-good-morning-with-a-smile",
    "title": "Say Good Morning with a Smile",
    "poet": "Traditional Welcoming Verse",
    "emoji": "😊",
    "category": "good-habits",
    "ageTier": "All Ages",
    "tagline": "A warm good morning greeting shares sunshine wherever you go.",
    "themeColor": "#F59E0B",
    "badgeBg": "bg-amber-100 text-amber-800 border-amber-300",
    "stanzas": [
      [
        "Say 'Good morning!' with a smile,",
        "Walk with kindness all the while;",
        "Look into your teacher's eyes,",
        "Watch the morning sunshine rise."
      ],
      [
        "A friendly word, a wave of hand,",
        "Spreads good cheer across the land;",
        "Every day is fresh and new,",
        "Full of happy things to do!"
      ]
    ],
    "rhymeScheme": "AABB",
    "vocabulary": [
      { "word": "Cheer", "meaning": "Joy, warmth, and cheerful encouragement shared with others", "emoji": "☀️" },
      { "word": "Greeting", "meaning": "Polite words or actions used when meeting someone", "emoji": "👋" }
    ],
    "educationalTakeaway": "Prosocial welcoming rituals, eye contact, and emotional climate elevation in family and school.",
    "recitalTips": [
      "Smile with crinkling eyes looking directly at your audience.",
      "Wave a cheerful, confident hand greeting on 'wave of hand'.",
      "Open arms wide in enthusiastic welcome."
    ]
  },
  {
    "id": "taking-turns-on-the-slide",
    "title": "Taking Turns on the Playground Slide",
    "poet": "Traditional Playground Cooperation Verse",
    "emoji": "🛝",
    "category": "good-habits",
    "ageTier": "Ages 2-4",
    "tagline": "Climb up the ladder, wait your turn, then whoosh down the slide with a cheer!",
    "themeColor": "#4D96FF",
    "badgeBg": "bg-blue-100 text-blue-800 border-blue-300",
    "stanzas": [
      [
        "Up the ladder, one, two, three,",
        "Wait your turn so patiently;",
        "Sit down straight and hold on tight,",
        "Whoosh on down into the light!"
      ],
      [
        "When you reach the bottom sand,",
        "Stand right up and lend a hand;",
        "Taking turns is how we play,",
        "Safe and happy every day!"
      ]
    ],
    "rhymeScheme": "AABB",
    "vocabulary": [
      { "word": "Patiently", "meaning": "Waiting calmly and cheerfully without getting upset or rushing", "emoji": "⏳" },
      { "word": "Whoosh", "meaning": "The sound of moving very smoothly and quickly through the air", "emoji": "💨" }
    ],
    "educationalTakeaway": "Patience and impulse control, gross-motor sliding safety (clearing the bottom of the slide), and cooperative play.",
    "recitalTips": [
      "March three ladder steps upward with fingers.",
      "Fold hands patiently waiting in line.",
      "Slide both hands forward swooping down on 'Whoosh on down!'."
    ]
  }
]

seasons_weather = [
  {
    "id": "rain-rain-go-away",
    "title": "Rain, Rain, Go Away",
    "poet": "Traditional English Nursery Rhyme (17th c.)",
    "emoji": "🌧️",
    "category": "seasons-weather",
    "ageTier": "Ages 2-4",
    "tagline": "Come again another day, little children want to play outside in the sunshine!",
    "themeColor": "#06B6D4",
    "badgeBg": "bg-cyan-100 text-cyan-800 border-cyan-300",
    "stanzas": [
      [
        "Rain, rain, go away,",
        "Come again another day;",
        "Little children want to play,",
        "Rain, rain, go away!"
      ]
    ],
    "rhymeScheme": "AAAA",
    "vocabulary": [
      { "word": "Another", "meaning": "A different one or at a later time", "emoji": "🗓️" },
      { "word": "Play", "meaning": "To engage in fun activities and games for pure enjoyment", "emoji": "🛝" }
    ],
    "educationalTakeaway": "Weather observation, mono-rhyme cadence, and expressing wishes for sunny outdoor physical play.",
    "recitalTips": [
      "Wiggle fingers downward simulating falling drops of rain.",
      "Wave hands away shooing away the stormy clouds on 'go away!'.",
      "Jump up and down with arms outstretched on 'want to play!'."
    ]
  },
  {
    "id": "good-morning-golden-sun",
    "title": "Good Morning, Golden Sun!",
    "poet": "Traditional Waldorf Morning Verse",
    "emoji": "☀️",
    "category": "seasons-weather",
    "ageTier": "All Ages",
    "tagline": "Greeting the sun that warms the earth and wakes every creature in the woods.",
    "themeColor": "#F59E0B",
    "badgeBg": "bg-amber-100 text-amber-800 border-amber-300",
    "stanzas": [
      [
        "Good morning, golden sun,",
        "Good morning, sky of blue;",
        "Good morning, friendly birds,",
        "And trees and flowers too!"
      ],
      [
        "Good morning, busy bees,",
        "And buzzing butterflies;",
        "Good morning to the whole wide world,",
        "As morning fills the skies!"
      ]
    ],
    "rhymeScheme": "ABCB",
    "vocabulary": [
      { "word": "Golden", "meaning": "A warm, bright, glowing yellow color like pure sunbeams", "emoji": "✨" },
      { "word": "Whole", "meaning": "Entire, complete, containing all parts together", "emoji": "🌍" }
    ],
    "educationalTakeaway": "Cultivates environmental gratitude, interconnectedness with living ecosystems, and morning optimism.",
    "recitalTips": [
      "Circle arms over head forming a giant, radiant golden sun.",
      "Wave arms gently to the sides like leafy green branches in the wind.",
      "Open hands wide to embrace the 'whole wide world'."
    ]
  },
  {
    "id": "my-shadow",
    "title": "My Shadow",
    "poet": "Robert Louis Stevenson (1885)",
    "emoji": "👤",
    "category": "seasons-weather",
    "ageTier": "All Ages",
    "tagline": "I have a little shadow that goes in and out with me, and what can be the use of him is more than I can see.",
    "themeColor": "#4D96FF",
    "badgeBg": "bg-blue-100 text-blue-800 border-blue-300",
    "stanzas": [
      [
        "I have a little shadow that goes in and out with me,",
        "And what can be the use of him is more than I can see.",
        "He is very, very like me from the heels up to the head;",
        "And I see him jump before me, when I jump into my bed."
      ],
      [
        "The funniest thing about him is the way he likes to grow—",
        "Not at all like proper children, which is always very slow;",
        "For he sometimes shoots up taller like an india-rubber ball,",
        "And he sometimes gets so little that there's none of him at all."
      ]
    ],
    "rhymeScheme": "AABB",
    "vocabulary": [
      { "word": "Shadow", "meaning": "A dark shape cast on a surface when an object blocks light rays", "emoji": "👤" },
      { "word": "India-rubber", "meaning": "Natural bouncy elastic rubber that springs high into the air", "emoji": "🏀" }
    ],
    "educationalTakeaway": "Introduces optical physics (light blockage, angle of sun changing shadow length), and playful poetic self-awareness.",
    "recitalTips": [
      "Point downward toward the floor inspecting your feet.",
      "Leap forward into the air with both feet on 'jump into my bed'.",
      "Stretch tall on tiptoes for 'shoots up taller', then crouch tiny for 'none of him at all'."
    ]
  },
  {
    "id": "autumn-leaves-falling",
    "title": "Autumn Leaves Are Falling Down",
    "poet": "Traditional Seasonal Rhyme",
    "emoji": "🍁",
    "category": "seasons-weather",
    "ageTier": "Ages 2-4",
    "tagline": "Red and yellow, orange and brown, swirling and dancing all around the town!",
    "themeColor": "#F59E0B",
    "badgeBg": "bg-amber-100 text-amber-800 border-amber-300",
    "stanzas": [
      [
        "Autumn leaves are falling down,",
        "Falling down, falling down;",
        "Autumn leaves are falling down,",
        "All across the town!"
      ],
      [
        "Red and yellow, orange and brown,",
        "Twirling, swirling all around;",
        "Rake them up into a heap,",
        "Jump right in, a giant leap!"
      ]
    ],
    "rhymeScheme": "ABCB AABB",
    "vocabulary": [
      { "word": "Autumn", "meaning": "The fall season between summer and winter when deciduous leaves turn colorful", "emoji": "🍂" },
      { "word": "Twirling", "meaning": "Spinning rapidly and gracefully round and round in the air", "emoji": "🌪️" }
    ],
    "educationalTakeaway": "Encourages seasonal recognition, color sorting (red, yellow, orange, brown), and rhythmic jumping joy.",
    "recitalTips": [
      "Flutter fingers gently downward like swirling leaves.",
      "Pretend to hold a rake and sweep back and forth on 'Rake them up into a heap'.",
      "Do a giant excited jump forward on 'Jump right in, a giant leap!'."
    ]
  },
  {
    "id": "spring-is-here-flowers-bloom",
    "title": "Spring Is Here, The Flowers Bloom",
    "poet": "Traditional Seasonal Rhyme",
    "emoji": "🌷",
    "category": "seasons-weather",
    "ageTier": "All Ages",
    "tagline": "Tulips, daisies, daffodils, painting colors across the hills!",
    "themeColor": "#6BCB77",
    "badgeBg": "bg-emerald-100 text-emerald-800 border-emerald-300",
    "stanzas": [
      [
        "Spring is here, the winter's gone,",
        "Robins singing on the lawn;",
        "Tulips, daisies, daffodils,",
        "Painting colors on the hills."
      ],
      [
        "Gentle rain and sunny skies,",
        "Watching hungry butterflies;",
        "Breathe the fresh and fragrant air,",
        "New life blooming everywhere!"
      ]
    ],
    "rhymeScheme": "AABB",
    "vocabulary": [
      { "word": "Daffodil", "meaning": "A cheerful bright yellow trumpet-shaped flower that blooms early in spring", "emoji": "🌼" },
      { "word": "Fragrant", "meaning": "Having a sweet, pleasant, and refreshing scent", "emoji": "🌸" }
    ],
    "educationalTakeaway": "Spring botanical cycles, perennial flowers (tulips, daisies, daffodils), and sensory mindfulness.",
    "recitalTips": [
      "Crouch low like a tiny seed under the soil, then slowly grow upward.",
      "Open hands like petals blossoming in the sunshine.",
      "Inhale deeply with a satisfied smile on 'fragrant air'."
    ]
  },
  {
    "id": "golden-summer-sunshine",
    "title": "Golden Summer Sunshine",
    "poet": "Traditional Seasonal Rhyme",
    "emoji": "🏖️",
    "category": "seasons-weather",
    "ageTier": "All Ages",
    "tagline": "Warm sand, cool watermelon, splashing waves, and long sunny days!",
    "themeColor": "#F59E0B",
    "badgeBg": "bg-amber-100 text-amber-800 border-amber-300",
    "stanzas": [
      [
        "Summer brings the longest days,",
        "Bathing earth in golden rays;",
        "Time for swimming in the pool,",
        "Sipping lemonade so cool!"
      ],
      [
        "Building castles in the sand,",
        "Walking barefoot on the strand;",
        "Catching fireflies at night,",
        "Summer is pure delight!"
      ]
    ],
    "rhymeScheme": "AABB",
    "vocabulary": [
      { "word": "Strand", "meaning": "A poetic word for a sandy beach or ocean seashore", "emoji": "🏖️" },
      { "word": "Rays", "meaning": "Beams of bright light shining outward from the sun", "emoji": "☀️" }
    ],
    "educationalTakeaway": "Summer solstice daylight awareness, outdoor recreation vocabulary, and sensory seasonal appreciation.",
    "recitalTips": [
      "Wiggle toes on the carpet as if walking on warm sandy beaches.",
      "Pretend to hold a big slice of cold watermelon with both hands.",
      "Trace sunbeams spreading through the air with outstretched arms."
    ]
  },
  {
    "id": "autumn-wind-swirling-leaves",
    "title": "Autumn Wind Swirling Round",
    "poet": "Traditional Weather Rhyme",
    "emoji": "🌪️",
    "category": "seasons-weather",
    "ageTier": "All Ages",
    "tagline": "Whoo-whoo goes the autumn breeze, shaking scarlet leaves from trees!",
    "themeColor": "#FF6B6B",
    "badgeBg": "bg-rose-100 text-rose-800 border-rose-300",
    "stanzas": [
      [
        "Autumn wind begins to blow,",
        "Swirling round and high and low;",
        "Whoo-whoo sings the chilly breeze,",
        "Shaking acorns from the trees."
      ],
      [
        "Squirrels gather up their store,",
        "Hiding nuts beneath the floor;",
        "Put your woolly sweater on,",
        "Summer sunshine now is gone!"
      ]
    ],
    "rhymeScheme": "AABB",
    "vocabulary": [
      { "word": "Scarlet", "meaning": "A vivid, brilliant, deep red color found in maple leaves in autumn", "emoji": "🍁" },
      { "word": "Store", "meaning": "A gathered supply of food kept safe for winter", "emoji": "🌰" }
    ],
    "educationalTakeaway": "Animal winter preparation (squirrels caching nuts), temperature drops, and sensory onomatopoeia ('whoo-whoo').",
    "recitalTips": [
      "Whistle softly through your teeth like a brisk autumn gust.",
      "Pretend to pull a warm woolly sweater over your head and zip it up.",
      "Clap two hands together like an acorn dropping to the forest floor."
    ]
  },
  {
    "id": "five-little-snowmen-row",
    "title": "Five Little Snowmen Standing in a Row",
    "poet": "Traditional Winter Rhyme",
    "emoji": "⛄",
    "category": "seasons-weather",
    "ageTier": "Ages 2-4",
    "tagline": "Each with a carrot nose and button eyes until the warm sun made them melt!",
    "themeColor": "#06B6D4",
    "badgeBg": "bg-cyan-100 text-cyan-800 border-cyan-300",
    "stanzas": [
      [
        "Five little snowmen standing in a row,",
        "Each with a hat and a big red bow;",
        "Out came the sun and it shone all day,",
        "And one little snowman melted away!"
      ],
      [
        "Four little snowmen standing in a row,",
        "Laughing and smiling in the snow;",
        "Out came the sun and it shone all day,",
        "And one little snowman melted away!"
      ]
    ],
    "rhymeScheme": "AABB",
    "vocabulary": [
      { "word": "Melt", "meaning": "To turn from a solid state of ice or snow into liquid water from warmth", "emoji": "💧" },
      { "word": "Snowman", "meaning": "A human figure sculpted out of packed white snow", "emoji": "⛄" }
    ],
    "educationalTakeaway": "State changes of matter (snow melting into water from solar heat), subtraction countdown, and winter accessories.",
    "recitalTips": [
      "Hold up five fingers standing tall like snowmen.",
      "Circle arms overhead for the warm shining sun.",
      "Slowly sink your body down to the floor melting into a puddle."
    ]
  },
  {
    "id": "rainbow-colors-in-the-sky",
    "title": "Rainbow in the Sky",
    "poet": "Traditional Weather Rhyme",
    "emoji": "🌈",
    "category": "seasons-weather",
    "ageTier": "All Ages",
    "tagline": "Red and orange, yellow, green, blue and purple, the prettiest arch that ever was seen!",
    "themeColor": "#8B5CF6",
    "badgeBg": "bg-purple-100 text-purple-800 border-purple-300",
    "stanzas": [
      [
        "When the rain meets golden sun,",
        "A magic arch of colors run;",
        "Red and orange, yellow, green,",
        "The prettiest arch that ever was seen!"
      ],
      [
        "Blue and purple shining high,",
        "Painted right across the sky;",
        "Like a bridge of joyful light,",
        "Glowing beautiful and bright!"
      ]
    ],
    "rhymeScheme": "AABB",
    "vocabulary": [
      { "word": "Arch", "meaning": "A curved symmetrical structure spanning an opening", "emoji": "🌈" },
      { "word": "Refraction", "meaning": "The bending of sunlight through raindrops that separates light into rainbow colors", "emoji": "💎" }
    ],
    "educationalTakeaway": "The science of rainbows (sunlight shining through raindrops), memorizing spectrum order (ROYGBIV), and visual beauty.",
    "recitalTips": [
      "Sweep an arm across the sky in a giant curved arch from left to right.",
      "Point out each color on your fingers as you recite.",
      "Gasp with delight as the rainbow bridge appears!"
    ]
  },
  {
    "id": "the-fog-little-cat-feet",
    "title": "The Fog (On Little Cat Feet)",
    "poet": "Carl Sandburg (1916)",
    "emoji": "🌫️",
    "category": "seasons-weather",
    "ageTier": "All Ages",
    "tagline": "The fog comes on little cat feet, sits looking over harbor and city on silent haunches, and then moves on.",
    "themeColor": "#4D96FF",
    "badgeBg": "bg-blue-100 text-blue-800 border-blue-300",
    "stanzas": [
      [
        "The fog comes",
        "On little cat feet.",
        "It sits looking",
        "Over harbor and city",
        "On silent haunches",
        "And then moves on."
      ]
    ],
    "rhymeScheme": "Free Verse",
    "vocabulary": [
      { "word": "Fog", "meaning": "A thick cloud of tiny water droplets suspended in the atmosphere at or near the ground", "emoji": "🌫️" },
      { "word": "Haunches", "meaning": "The hips and thighs of an animal; sitting on haunches means squatting quietly", "emoji": "🐾" },
      { "word": "Harbor", "meaning": "A sheltered body of water where boats and ships anchor safely", "emoji": "⚓" }
    ],
    "educationalTakeaway": "Iconic American modern poetry masterpiece, free verse meter, metaphor (fog as a quiet cat), and weather observation.",
    "recitalTips": [
      "Tiptoe with whisper-soft paws on 'little cat feet'.",
      "Crouch down quietly looking silently over an imaginary city.",
      "Creep away silently into the mist on 'and then moves on'."
    ]
  }
]

content1 = 'import { Poem } from "../../types";\n\nexport const GOOD_HABITS_POEMS: Poem[] = ' + json.dumps(good_habits, indent=2, ensure_ascii=False) + ';\n'
with open("src/data/poems/goodHabits.ts", "w", encoding="utf-8") as f:
    f.write(content1)

content2 = 'import { Poem } from "../../types";\n\nexport const SEASONS_WEATHER_POEMS: Poem[] = ' + json.dumps(seasons_weather, indent=2, ensure_ascii=False) + ';\n'
with open("src/data/poems/seasonsWeather.ts", "w", encoding="utf-8") as f:
    f.write(content2)

print(f"Generated {len(good_habits)} good habits poems and {len(seasons_weather)} seasons & weather poems!")
