# -*- coding: utf-8 -*-
import json
import os

bedtime_lullabies = [
  {
    "id": "bed-in-summer",
    "title": "Bed in Summer",
    "poet": "Robert Louis Stevenson (1885)",
    "emoji": "☀️",
    "category": "bedtime-lullabies",
    "ageTier": "All Ages",
    "tagline": "Going to bed by day when the summer sky is still glowing blue.",
    "themeColor": "#F59E0B",
    "badgeBg": "bg-amber-100 text-amber-800 border-amber-300",
    "stanzas": [
      [
        "In winter I get up at night",
        "And dress by yellow candle-light.",
        "In summer, quite the other way,",
        "I have to go to bed by day."
      ],
      [
        "I have to go to bed and see",
        "The birds still hopping on the tree,",
        "Or hear the grown-up people's feet",
        "Still going past me in the street."
      ],
      [
        "And does it not seem hard to you,",
        "When all the sky is clear and blue,",
        "And I should like so much to play,",
        "To have to go to bed by day?"
      ]
    ],
    "rhymeScheme": "AABB",
    "vocabulary": [
      { "word": "Candle-light", "meaning": "The gentle warm light given off by a glowing wax candle", "emoji": "🕯️" },
      { "word": "Hopping", "meaning": "Jumping lightly from twig to twig", "emoji": "🐦" }
    ],
    "educationalTakeaway": "Relatable childhood experience of summer solstices, seasonal daylight variations, and evening winding down.",
    "recitalTips": [
      "Yawn gently while pretending to put on a jacket.",
      "Look toward the window curiously on 'birds still hopping on the tree'.",
      "Spread palms upward on 'does it not seem hard to you?' with a friendly question mark."
    ]
  },
  {
    "id": "star-light-star-bright",
    "title": "Star Light, Star Bright",
    "poet": "Traditional American Folk Rhyme",
    "emoji": "🌟",
    "category": "bedtime-lullabies",
    "ageTier": "All Ages",
    "tagline": "The classic first star of the evening wishing rhyme.",
    "themeColor": "#8B5CF6",
    "badgeBg": "bg-purple-100 text-purple-800 border-purple-300",
    "stanzas": [
      [
        "Star light, star bright,",
        "First star I see tonight;",
        "I wish I may, I wish I might,",
        "Have the wish I wish tonight."
      ]
    ],
    "rhymeScheme": "AAAA",
    "vocabulary": [
      { "word": "Bright", "meaning": "Giving off a strong, clear, shining light", "emoji": "💡" },
      { "word": "Wish", "meaning": "A hopeful desire or dream you hold in your heart", "emoji": "🌠" }
    ],
    "educationalTakeaway": "Encourages positive bedtime visualization, nighttime observation of planets (Venus as the evening star), and monoculture rhyme.",
    "recitalTips": [
      "Clasp hands over heart while making a secret silent wish.",
      "Look up toward the ceiling with wide, hopeful eyes.",
      "Whisper the final line as you close your eyes for sleep."
    ]
  },
  {
    "id": "rock-a-bye-baby-treetop",
    "title": "Rock-a-bye Baby in the Treetop",
    "poet": "Traditional English Lullaby (1765)",
    "emoji": "👶",
    "category": "bedtime-lullabies",
    "ageTier": "Ages 2-4",
    "tagline": "When the wind blows the cradle will rock on the high leafy bough.",
    "themeColor": "#6BCB77",
    "badgeBg": "bg-emerald-100 text-emerald-800 border-emerald-300",
    "stanzas": [
      [
        "Rock-a-bye baby, on the tree top,",
        "When the wind blows, the cradle will rock;",
        "When the bough breaks, the cradle will fall,",
        "And down will come baby, cradle and all."
      ]
    ],
    "rhymeScheme": "AABB",
    "vocabulary": [
      { "word": "Cradle", "meaning": "A little bed for a baby that rocks gently back and forth", "emoji": "🛏️" },
      { "word": "Bough", "meaning": "A strong main branch of a full-grown tree", "emoji": "🌿" }
    ],
    "educationalTakeaway": "Centuries-old calming vestibular rocking cadence, pastoral nature imagery, and deep sleep induction.",
    "recitalTips": [
      "Cradle arms together as if rocking a sleeping infant back and forth.",
      "Sway smoothly from left foot to right foot in 6/8 lullaby meter.",
      "Lower hands slowly and gently toward a resting pillow."
    ]
  },
  {
    "id": "golden-slumbers-kiss-your-eyes",
    "title": "Golden Slumbers Kiss Your Eyes",
    "poet": "Thomas Dekker (1603)",
    "emoji": "💤",
    "category": "bedtime-lullabies",
    "ageTier": "All Ages",
    "tagline": "Golden slumbers kiss your eyes, smiles awake you when you rise.",
    "themeColor": "#F59E0B",
    "badgeBg": "bg-amber-100 text-amber-800 border-amber-300",
    "stanzas": [
      [
        "Golden slumbers kiss your eyes,",
        "Smiles awake you when you rise;",
        "Sleep, pretty wantons, do not cry,",
        "And I will sing a lullaby."
      ],
      [
        "Rock them, rock them, lullaby,",
        "Safe beneath the starry sky;",
        "Morning light will shine again,",
        "Over valley, hill, and plain."
      ]
    ],
    "rhymeScheme": "AABB",
    "vocabulary": [
      { "word": "Slumbers", "meaning": "Deep, calm, peaceful and restful sleep", "emoji": "😴" },
      { "word": "Golden", "meaning": "Precious, warm, and radiant like pure sunlight", "emoji": "✨" }
    ],
    "educationalTakeaway": "Renaissance poetic heritage (recorded by The Beatles), emotional security, and beautiful Elizabethan lyricism.",
    "recitalTips": [
      "Gently touch two fingers to your eyelids on 'kiss your eyes'.",
      "Smile a wide glowing morning smile on 'when you rise'.",
      "End on a soft hum that fades peacefully into silence."
    ]
  },
  {
    "id": "hush-little-baby-dont-say-a-word",
    "title": "Hush, Little Baby, Don't Say a Word",
    "poet": "Appalachian & American Traditional Lullaby",
    "emoji": "🦜",
    "category": "bedtime-lullabies",
    "ageTier": "Ages 2-4",
    "tagline": "Mama's gonna buy you a mockingbird, and if that bird doesn't sing, a diamond ring!",
    "themeColor": "#4D96FF",
    "badgeBg": "bg-blue-100 text-blue-800 border-blue-300",
    "stanzas": [
      [
        "Hush, little baby, don't say a word,",
        "Mama's gonna buy you a mockingbird.",
        "And if that mockingbird don't sing,",
        "Mama's gonna buy you a diamond ring."
      ],
      [
        "And if that diamond ring turns brass,",
        "Mama's gonna buy you a looking glass.",
        "And if that looking glass gets broke,",
        "Mama's gonna buy you a billy goat."
      ],
      [
        "And if that billy goat won't pull,",
        "Mama's gonna buy you a cart and bull.",
        "And you'll still be the sweetest little baby in town."
      ]
    ],
    "rhymeScheme": "AABB",
    "vocabulary": [
      { "word": "Mockingbird", "meaning": "A songbird famous for mimicking the tunes of other birds", "emoji": "🐦" },
      { "word": "Looking Glass", "meaning": "An old-fashioned phrase for a mirror reflecting your face", "emoji": "🪞" }
    ],
    "educationalTakeaway": "Conditional clause progression ('if... then'), comforting parental reassurance, and chain-rhyme song structures.",
    "recitalTips": [
      "Put pointer finger to lips gently on 'Hush, little baby'.",
      "Pretend to hold a mirror looking into it on 'looking glass'.",
      "Hug yourself warmly on 'sweetest little baby in town'."
    ]
  },
  {
    "id": "sleep-baby-sleep-german-lullaby",
    "title": "Sleep, Baby, Sleep (Thy Father Watches the Sheep)",
    "poet": "Traditional German Lullaby (Schlaf, Kindlein, schlaf)",
    "emoji": "🐑",
    "category": "bedtime-lullabies",
    "ageTier": "Ages 2-4",
    "tagline": "Thy mother shakes the dreamland tree, and down falls a little dream for thee.",
    "themeColor": "#6BCB77",
    "badgeBg": "bg-emerald-100 text-emerald-800 border-emerald-300",
    "stanzas": [
      [
        "Sleep, baby, sleep!",
        "Thy father watches the sheep;",
        "Thy mother shakes the dreamland tree,",
        "And down falls a little dream for thee.",
        "Sleep, baby, sleep!"
      ],
      [
        "Sleep, baby, sleep!",
        "The large stars are the sheep;",
        "The little stars are the lambs, I guess,",
        "And the gentle moon is the shepherdess.",
        "Sleep, baby, sleep!"
      ]
    ],
    "rhymeScheme": "AABBA",
    "vocabulary": [
      { "word": "Shepherdess", "meaning": "A gentle caregiver who watches over sheep and tender lambs", "emoji": "👩‍🌾" },
      { "word": "Dreamland", "meaning": "The magical, quiet imaginary world where happy dreams live", "emoji": "🌌" }
    ],
    "educationalTakeaway": "Celestial pastoral metaphor (moon as shepherdess, stars as lambs), maternal calming security, and bedtime ease.",
    "recitalTips": [
      "Gently shake imaginary branches overhead on 'shakes the dreamland tree'.",
      "Catch an imaginary falling dream in your cupped palms.",
      "Close eyes and rest hands under cheek on 'Sleep, baby, sleep!'."
    ]
  },
  {
    "id": "wynken-blynken-and-nod",
    "title": "Wynken, Blynken, and Nod",
    "poet": "Eugene Field (1889)",
    "emoji": "⛵",
    "category": "bedtime-lullabies",
    "ageTier": "All Ages",
    "tagline": "Sailing off in a wooden shoe into a sea of dew and catching starry herring with silver nets!",
    "themeColor": "#06B6D4",
    "badgeBg": "bg-cyan-100 text-cyan-800 border-cyan-300",
    "stanzas": [
      [
        "Wynken, Blynken, and Nod one night",
        "Sailed off in a wooden shoe—",
        "Sailed on a river of crystal light,",
        "Into a sea of dew.",
        "'Where are you going, and what do you wish?'",
        "The old moon asked the three.",
        "'We have come to fish for the herring fish",
        "That live in this beautiful sea;'"
      ],
      [
        "The little stars were the herring fish",
        "That lived in that beautiful sea;",
        "Now cast your nets wherever you wish—",
        "Never afeard are we!",
        "So cried the stars to the fishermen three:",
        "Wynken, Blynken, and Nod."
      ]
    ],
    "rhymeScheme": "ABCB",
    "vocabulary": [
      { "word": "Herring", "meaning": "A small shiny silver fish swimming in schools", "emoji": "🐟" },
      { "word": "Crystal", "meaning": "Clear, sparkling, and transparent like pure ice or glass", "emoji": "💎" }
    ],
    "educationalTakeaway": "Metaphor for closing tired eyes (Wynken & Blynken are two eyes, Nod is a nodding little head), expansive fantasy imagery.",
    "recitalTips": [
      "Blink two eyes slowly on 'Wynken, Blynken'.",
      "Nod your head forward sleepily on 'Nod'.",
      "Cast an imaginary net over the stars with a sweeping arc."
    ]
  },
  {
    "id": "silver-boat-chinese-lullaby",
    "title": "The Little Silver Boat (Chinese Lullaby)",
    "poet": "Traditional Chinese Folk Lullaby",
    "emoji": "🛶",
    "category": "world-rhymes",
    "ageTier": "All Ages",
    "tagline": "The crescent moon like a little silver boat floating in the deep blue sky.",
    "themeColor": "#8B5CF6",
    "badgeBg": "bg-purple-100 text-purple-800 border-purple-300",
    "stanzas": [
      [
        "Little crescent moon up high,",
        "Floating in the deep blue sky;",
        "Like a little silver boat,",
        "On a quiet sea afloat."
      ],
      [
        "I sit in the boat so small,",
        "Watching white clouds rise and fall;",
        "Only seeing stars so bright,",
        "Drifting peacefully into the night."
      ]
    ],
    "rhymeScheme": "AABB",
    "vocabulary": [
      { "word": "Crescent", "meaning": "The curved silver shape of the moon as it waxes or wanes", "emoji": "🌙" },
      { "word": "Afloat", "meaning": "Floating gently on top of calm water or air", "emoji": "🌊" }
    ],
    "educationalTakeaway": "Chinese poetic traditions of moon observation (Zhongqiu), visual stillness, and imaginative relaxation.",
    "recitalTips": [
      "Curve two hands together into the shape of a smiling crescent moon.",
      "Rock arms back and forth like a small silver boat in space.",
      "Whisper softly as you drift off to sleep."
    ]
  },
  {
    "id": "brahms-lullaby-good-evening",
    "title": "Brahms's Lullaby (Cradle Song)",
    "poet": "Johannes Brahms & Karl Simrock (1868)",
    "emoji": "🌹",
    "category": "bedtime-lullabies",
    "ageTier": "All Ages",
    "tagline": "Lullaby and good night, with pink roses bedight, creep into thy bed!",
    "themeColor": "#EC4899",
    "badgeBg": "bg-pink-100 text-pink-800 border-pink-300",
    "stanzas": [
      [
        "Lullaby and good night,",
        "With pink roses bedight,",
        "With lilies o'erspread,",
        "Is baby's sweet bed."
      ],
      [
        "Lay thee down now and rest,",
        "May thy slumber be blest;",
        "Lay thee down now and rest,",
        "May thy slumber be blest."
      ]
    ],
    "rhymeScheme": "AABB",
    "vocabulary": [
      { "word": "Bedight", "meaning": "An old poetic word meaning decorated, dressed, or adorned beautifully", "emoji": "💐" },
      { "word": "Slumber", "meaning": "A calm and peaceful sleep filled with gentle dreams", "emoji": "😴" }
    ],
    "educationalTakeaway": "Classical music literacy (Brahms' Op. 49 No. 4 Wiegenlied), physiological soothing, and historic floral metaphors.",
    "recitalTips": [
      "Hum the classic three-note opening phrase before speaking.",
      "Fold arms in a resting cradle position.",
      "Tuck yourself in with an imaginary soft quilt."
    ]
  },
  {
    "id": "all-the-pretty-little-horses",
    "title": "All the Pretty Little Horses",
    "poet": "Traditional American Southern Lullaby",
    "emoji": "🐎",
    "category": "bedtime-lullabies",
    "ageTier": "All Ages",
    "tagline": "Hush-a-bye, don't you cry, you shall have all the pretty little horses.",
    "themeColor": "#F59E0B",
    "badgeBg": "bg-amber-100 text-amber-800 border-amber-300",
    "stanzas": [
      [
        "Hush-a-bye, don't you cry,",
        "Go to sleep, little baby;",
        "When you wake, you shall have",
        "All the pretty little horses."
      ],
      [
        "Blacks and bays, dapples and grays,",
        "All the pretty little horses;",
        "Hush-a-bye, don't you cry,",
        "Go to sleep, little baby."
      ]
    ],
    "rhymeScheme": "ABCB",
    "vocabulary": [
      { "word": "Dapple", "meaning": "A horse with beautiful rounded spots of lighter and darker gray fur", "emoji": "🐴" },
      { "word": "Bay", "meaning": "A horse with reddish-brown coat and black mane and tail", "emoji": "🐎" }
    ],
    "educationalTakeaway": "Equine coat color terminology (black, bay, dapple, gray), deep modal folk harmonies, and sensory comfort.",
    "recitalTips": [
      "Pet the air as if stroking four differently colored horses in a row.",
      "Rock slowly in rhythm to the minor lilt.",
      "Close your eyes softly on 'Go to sleep, little baby'."
    ]
  },
  {
    "id": "kumbaya-my-lord-gullah",
    "title": "Kumbaya (Come By Here, My Friend)",
    "poet": "Gullah Geechee Folk Spiritual & Lullaby",
    "emoji": "🕊️",
    "category": "world-rhymes",
    "ageTier": "All Ages",
    "tagline": "Come by here, someone's singing, someone's praying, peace all through the night.",
    "themeColor": "#6BCB77",
    "badgeBg": "bg-emerald-100 text-emerald-800 border-emerald-300",
    "stanzas": [
      [
        "Kumbaya, my friend, kumbaya,",
        "Kumbaya, my friend, kumbaya,",
        "Kumbaya, my friend, kumbaya,",
        "O friend, kumbaya."
      ],
      [
        "Someone's singing, friend, kumbaya,",
        "Someone's resting, friend, kumbaya,",
        "Someone's dreaming, friend, kumbaya,",
        "O friend, kumbaya."
      ]
    ],
    "rhymeScheme": "AAAB",
    "vocabulary": [
      { "word": "Kumbaya", "meaning": "Gullah language phrase meaning 'Come by here'—an invitation for peace and presence", "emoji": "🙏" },
      { "word": "Gullah", "meaning": "An African American cultural community of the Sea Islands preserving rich linguistic traditions", "emoji": "🏝️" }
    ],
    "educationalTakeaway": "Linguistic awareness of African American Gullah creole heritage, communal harmony, and meditative breathing.",
    "recitalTips": [
      "Open hands outward inviting everyone to join in.",
      "Sway in place to the gentle spiritual rhythm.",
      "Close hands together in peaceful stillness at the end."
    ]
  },
  {
    "id": "suo-gan-welsh-lullaby",
    "title": "Suo Gân (Sleep Gently, My Darling)",
    "poet": "Traditional Welsh Lullaby (Robert Bryan)",
    "emoji": "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
    "category": "world-rhymes",
    "ageTier": "All Ages",
    "tagline": "Sleep peacefully on mother's breast, no harm shall come to disrupt your rest.",
    "themeColor": "#4D96FF",
    "badgeBg": "bg-blue-100 text-blue-800 border-blue-300",
    "stanzas": [
      [
        "Sleep, my darling, on my breast,",
        "'Tis a mother's arms of rest;",
        "All around is calm and still,",
        "Shadows lengthen on the hill."
      ],
      [
        "Sleep in peace, no harm is near,",
        "Rest your head and have no fear;",
        "Morning sun will rise anew,",
        "Shining golden over you."
      ]
    ],
    "rhymeScheme": "AABB",
    "vocabulary": [
      { "word": "Suo Gân", "meaning": "Welsh for 'Lullaby' (literally 'humming song')", "emoji": "🎶" },
      { "word": "Anew", "meaning": "Once more in a fresh, brand-new, and hopeful way", "emoji": "🌅" }
    ],
    "educationalTakeaway": "Celtic Welsh lullaby heritage, soothing pentatonic emotional reassurance, and safety in bedtime routines.",
    "recitalTips": [
      "Place hand gently on chest feeling the calming heartbeat.",
      "Speak each word with smooth, connected legatissimo breath.",
      "Let eyelids gently close on 'have no fear'."
    ]
  },
  {
    "id": "the-moon-clock-hall-stevenson",
    "title": "The Moon Has a Face Like the Clock",
    "poet": "Robert Louis Stevenson (1885)",
    "emoji": "🕰️",
    "category": "bedtime-lullabies",
    "ageTier": "All Ages",
    "tagline": "The moon shines on thieves on the garden wall, on streets and fields and harbor quays.",
    "themeColor": "#F59E0B",
    "badgeBg": "bg-amber-100 text-amber-800 border-amber-300",
    "stanzas": [
      [
        "The moon has a face like the clock in the hall;",
        "She shines on thieves on the garden wall,",
        "On streets and fields and harbour quays,",
        "And birdies asleep in the forks of the trees."
      ],
      [
        "The squalling cat and the squeaking mouse,",
        "The howling dog by the door of the house,",
        "The bat that lies in bed at noon,",
        "All love to be out by the light of the moon."
      ],
      [
        "But all of the things that belong to the day",
        "Cuddle to sleep to be out of her way;",
        "And flowers and children close their eyes",
        "Till up in the morning the sun shall arise."
      ]
    ],
    "rhymeScheme": "AABB",
    "vocabulary": [
      { "word": "Quay", "meaning": "A stone platform alongside water for loading and unloading ships", "emoji": "⚓" },
      { "word": "Squalling", "meaning": "Making loud, crying vocal sounds in the night", "emoji": "🐈" }
    ],
    "educationalTakeaway": "Nocturnal animal behavior (bats, owls, mice) contrasted with diurnal daytime creatures (children, flowers).",
    "recitalTips": [
      "Make a round face with two hands circling your cheeks.",
      "Pretend to flutter hands like a bat on 'bat that lies in bed at noon'.",
      "Fold hands and bow head to sleep on 'close their eyes'."
    ]
  },
  {
    "id": "now-the-day-is-over-sabine",
    "title": "Now the Day Is Over",
    "poet": "Sabine Baring-Gould (1865)",
    "emoji": "🌙",
    "category": "bedtime-lullabies",
    "ageTier": "All Ages",
    "tagline": "Night is drawing nigh, shadows of the evening steal across the sky.",
    "themeColor": "#8B5CF6",
    "badgeBg": "bg-purple-100 text-purple-800 border-purple-300",
    "stanzas": [
      [
        "Now the day is over,",
        "Night is drawing nigh;",
        "Shadows of the evening",
        "Steal across the sky."
      ],
      [
        "Now the darkness gathers,",
        "Stars begin to peep,",
        "Birds and beasts and flowers",
        "Soon will be asleep."
      ]
    ],
    "rhymeScheme": "ABCB",
    "vocabulary": [
      { "word": "Nigh", "meaning": "Near, approaching, or close at hand", "emoji": "⏳" },
      { "word": "Beasts", "meaning": "Four-legged animals of the fields and forest", "emoji": "🦌" }
    ],
    "educationalTakeaway": "Poetic vocabulary for sunset and twilight, tranquil dusk transitions, and peaceful nocturnal cadence.",
    "recitalTips": [
      "Sweep both hands slowly across the sky from left to right for twilight shadows.",
      "Peep your eyes open and shut on 'stars begin to peep'.",
      "Fold hands in quiet peaceful rest."
    ]
  },
  {
    "id": "when-stars-come-out-to-play",
    "title": "When the Stars Come Out to Play",
    "poet": "Traditional Evening Rhyme",
    "emoji": "✨",
    "category": "bedtime-lullabies",
    "ageTier": "Ages 2-4",
    "tagline": "When the golden sun goes down, billions of twinkling stars come out to play!",
    "themeColor": "#4D96FF",
    "badgeBg": "bg-blue-100 text-blue-800 border-blue-300",
    "stanzas": [
      [
        "When the golden sun goes down,",
        "Over country, hill, and town,",
        "Little stars begin to shine,",
        "Lighting up the sky divine."
      ],
      [
        "One by one and two by two,",
        "Blinking through the navy blue;",
        "Sing a sleepy song tonight,",
        "Safe until the morning light."
      ]
    ],
    "rhymeScheme": "AABB",
    "vocabulary": [
      { "word": "Divine", "meaning": "Wonderful, heavenly, and exquisitely peaceful", "emoji": "🌟" },
      { "word": "Navy", "meaning": "A deep, rich, dark shade of blue like midnight sky", "emoji": "🌌" }
    ],
    "educationalTakeaway": "Paired counting ('one by one and two by two'), color shade distinction (navy blue), and gentle bedtime ease.",
    "recitalTips": [
      "Lower one hand like the setting sun.",
      "Twinkle fingers one by one on 'one by one and two by two'.",
      "Rest cheek against hands on 'safe until the morning light'."
    ]
  },
  {
    "id": "night-song-silver-cradle",
    "title": "The Silver Cradle (Night Song)",
    "poet": "Traditional Celtic Bedtime Verse",
    "emoji": "🌛",
    "category": "bedtime-lullabies",
    "ageTier": "All Ages",
    "tagline": "The moon is a silver cradle in the sky, rocking the sleepy world to sleep.",
    "themeColor": "#06B6D4",
    "badgeBg": "bg-cyan-100 text-cyan-800 border-cyan-300",
    "stanzas": [
      [
        "The moon is a cradle of silver bright,",
        "Rocking across the sea of night;",
        "The clouds are blankets of fluffy fleece,",
        "Wrapping the sleepy earth in peace."
      ],
      [
        "Close your eyes and drift away,",
        "You have had a happy day;",
        "Sleep until the rooster crows,",
        "And morning sun with ruby glows."
      ]
    ],
    "rhymeScheme": "AABB",
    "vocabulary": [
      { "word": "Ruby", "meaning": "A glowing precious red gemstone representing dawn light", "emoji": "💎" },
      { "word": "Blanket", "meaning": "A warm covering of soft fabric or clouds", "emoji": "🛌" }
    ],
    "educationalTakeaway": "Metaphorical thinking (moon as cradle, clouds as blankets), dawn vocabulary (rooster, ruby glow), and sleep reassurance.",
    "recitalTips": [
      "Rock arms smoothly like a cradle in the sky.",
      "Pull up imaginary blankets to your chin snugly.",
      "Smile softly as you close your eyes."
    ]
  }
]

content = 'import { Poem } from "../../types";\n\nexport const BEDTIME_LULLABIES_POEMS: Poem[] = ' + json.dumps(bedtime_lullabies, indent=2, ensure_ascii=False) + ';\n'
with open("src/data/poems/bedtimeLullabies.ts", "w", encoding="utf-8") as f:
    f.write(content)

print(f"Generated {len(bedtime_lullabies)} bedtime lullabies in src/data/poems/bedtimeLullabies.ts")
