import { DrawingCategory, DrawingTemplate } from "../types";

export interface DrawingCategoryInfo {
  id: DrawingCategory;
  label: string;
  icon: string;
  description: string;
}

export const DRAWING_CATEGORIES: DrawingCategoryInfo[] = [
  {
    id: "animals",
    label: "Animals & Wildlife",
    icon: "🦁",
    description: "Friendly lions, playful elephants, butterflies, turtles, and ocean dolphins."
  },
  {
    id: "vehicles-space",
    label: "Vehicles & Space",
    icon: "🚀",
    description: "Cosmic rockets, steam trains, fire engines, sailboats, and ringed planets."
  },
  {
    id: "nature-flowers",
    label: "Nature & Garden",
    icon: "🌻",
    description: "Smiling rainbows, sunflowers, mushroom cottages, and cherry blossoms."
  },
  {
    id: "fantasy-fairytale",
    label: "Fantasy & Whimsy",
    icon: "🏰",
    description: "Royal castles, cuddly teddy bears, starlight unicorns, and friendly dragons."
  },
  {
    id: "alphabet-art",
    label: "Alphabet & Numbers Art",
    icon: "🔤",
    description: "Letters and numbers paired with cheerful objects to color and trace."
  },
  {
    id: "cultural-pakistan",
    label: "Pakistani Heritage",
    icon: "🇵🇰",
    description: "Minar-e-Pakistan, Crescent Star, dancing peacocks, truck art, and mango trees."
  }
];

export const DRAWING_TEMPLATES: DrawingTemplate[] = [
  {
    id: "lion-cub",
    title: "Little Lion Cub",
    category: "animals",
    emoji: "🦁",
    difficulty: "Easy",
    ageRecommendation: "All Ages",
    description: "A happy little lion cub with a scalloped fluffy mane and friendly round ears.",
    learningPrompt: "Ask your child: What sound does a lion make? Which warm yellows and oranges would look great on his fluffy mane?",
    suggestedColors: [
      { name: "Golden Yellow", hex: "#FBBF24" },
      { name: "Tawny Orange", hex: "#F97316" },
      { name: "Warm Brown", hex: "#92400E" }
    ],
    funFact: "Lions live together in family groups called prides and can roar loud enough to be heard miles away!",
    svgOutline: [
      "<path d=\"M250,70 C282,70 302,94 316,108 C342,102 368,120 374,146 C400,158 410,186 400,214 C420,236 420,268 400,290 C410,318 396,348 370,358 C362,386 334,404 306,396 C290,418 258,424 236,408 C210,420 178,410 168,384 C140,382 118,360 120,332 C94,316 88,284 102,258 C86,232 94,200 116,184 C112,154 132,126 160,124 C172,96 202,82 228,92 C234,78 242,70 250,70 Z\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"7\" stroke-linejoin=\"round\"/>",
      "<circle cx=\"158\" cy=\"148\" r=\"32\" fill=\"#FFFFFF\" stroke=\"#2D2D2D\" stroke-width=\"7\"/>",
      "<circle cx=\"158\" cy=\"148\" r=\"15\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"5\"/>",
      "<circle cx=\"342\" cy=\"148\" r=\"32\" fill=\"#FFFFFF\" stroke=\"#2D2D2D\" stroke-width=\"7\"/>",
      "<circle cx=\"342\" cy=\"148\" r=\"15\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"5\"/>",
      "<circle cx=\"250\" cy=\"250\" r=\"102\" fill=\"#FFFFFF\" stroke=\"#2D2D2D\" stroke-width=\"7\"/>",
      "<circle cx=\"212\" cy=\"228\" r=\"11\" fill=\"#2D2D2D\"/>",
      "<circle cx=\"288\" cy=\"228\" r=\"11\" fill=\"#2D2D2D\"/>",
      "<polygon points=\"250,250 232,272 268,272\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"6\" stroke-linejoin=\"round\"/>",
      "<path d=\"M250,272 L250,292 M250,292 Q232,310 218,295 M250,292 Q268,310 282,295\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"6\" stroke-linecap=\"round\"/>",
      "<path d=\"M175,262 L135,256 M175,276 L138,282 M325,262 L365,256 M325,276 L362,282\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"5\" stroke-linecap=\"round\"/>"
    ].join("")
  },
  {
    id: "happy-elephant",
    title: "Happy Baby Elephant",
    category: "animals",
    emoji: "🐘",
    difficulty: "Easy",
    ageRecommendation: "All Ages",
    description: "A cheerful baby elephant with a big floppy ear, curved trunk, and four sturdy legs.",
    learningPrompt: "Notice how the elephant lifts its trunk! In many cultures, an upward trunk is a symbol of good cheer and luck.",
    suggestedColors: [
      { name: "Sky Blue", hex: "#60A5FA" },
      { name: "Soft Gray", hex: "#9CA3AF" },
      { name: "Bubblegum Pink", hex: "#F472B6" }
    ],
    funFact: "Elephants use their long trunks like gentle hands to pick up fruit, hug family members, and spray cool water!",
    svgOutline: [
      "<path d=\"M165,245 C140,300 105,310 92,282 C82,262 96,242 114,252 C124,258 122,276 135,272 C148,268 158,242 162,218 Z\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"7\" stroke-linejoin=\"round\"/>",
      "<path d=\"M215,355 L215,425 L252,425 L252,368 L286,368 L286,425 L322,425 L322,368 L345,368 L345,425 L380,425 L380,342\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"7\" stroke-linejoin=\"round\"/>",
      "<ellipse cx=\"298\" cy=\"278\" rx=\"118\" ry=\"96\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"7\"/>",
      "<circle cx=\"205\" cy=\"202\" r=\"68\" fill=\"#FFFFFF\" stroke=\"#2D2D2D\" stroke-width=\"7\"/>",
      "<ellipse cx=\"226\" cy=\"208\" rx=\"38\" ry=\"54\" fill=\"#FFFFFF\" stroke=\"#2D2D2D\" stroke-width=\"7\"/>",
      "<circle cx=\"174\" cy=\"188\" r=\"9\" fill=\"#2D2D2D\"/>",
      "<path d=\"M152,222 Q165,236 184,228\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"5\" stroke-linecap=\"round\"/>",
      "<path d=\"M415,256 Q442,278 432,316\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"7\" stroke-linecap=\"round\"/>",
      "<circle cx=\"432\" cy=\"322\" r=\"8\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"5\"/>"
    ].join("")
  },
  {
    id: "hop-bunny",
    title: "Fluffy Hop Bunny",
    category: "animals",
    emoji: "🐰",
    difficulty: "Easy",
    ageRecommendation: "Ages 2-4",
    description: "A sweet little bunny rabbit with tall floppy ears, a cozy tummy patch, and big paws.",
    learningPrompt: "Practice coloring inside the long ears and round tummy. Will your bunny be snowy white, caramel brown, or spotted?",
    suggestedColors: [
      { name: "Cream Tan", hex: "#FDE68A" },
      { name: "Rose Pink", hex: "#F472B6" },
      { name: "Sky Blue", hex: "#38BDF8" }
    ],
    funFact: "Happy rabbits sometimes jump high into the air and twist mid-leap—a joyful move called a binky!",
    svgOutline: [
      "<ellipse cx=\"212\" cy=\"112\" rx=\"24\" ry=\"64\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"7\"/>",
      "<ellipse cx=\"212\" cy=\"116\" rx=\"11\" ry=\"42\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"5\"/>",
      "<ellipse cx=\"288\" cy=\"112\" rx=\"24\" ry=\"64\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"7\"/>",
      "<ellipse cx=\"288\" cy=\"116\" rx=\"11\" ry=\"42\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"5\"/>",
      "<ellipse cx=\"250\" cy=\"332\" rx=\"86\" ry=\"96\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"7\"/>",
      "<ellipse cx=\"250\" cy=\"340\" rx=\"48\" ry=\"60\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"5\"/>",
      "<circle cx=\"250\" cy=\"212\" r=\"64\" fill=\"#FFFFFF\" stroke=\"#2D2D2D\" stroke-width=\"7\"/>",
      "<circle cx=\"226\" cy=\"200\" r=\"8\" fill=\"#2D2D2D\"/>",
      "<circle cx=\"274\" cy=\"200\" r=\"8\" fill=\"#2D2D2D\"/>",
      "<polygon points=\"250,218 240,230 260,230\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"5\" stroke-linejoin=\"round\"/>",
      "<path d=\"M250,230 Q238,246 226,238 M250,230 Q262,246 274,238\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"5\" stroke-linecap=\"round\"/>",
      "<path d=\"M188,218 L145,212 M188,228 L148,234 M312,218 L355,212 M312,228 L352,234\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"196\" cy=\"422\" rx=\"34\" ry=\"18\" fill=\"#FFFFFF\" stroke=\"#2D2D2D\" stroke-width=\"7\"/>",
      "<ellipse cx=\"304\" cy=\"422\" rx=\"34\" ry=\"18\" fill=\"#FFFFFF\" stroke=\"#2D2D2D\" stroke-width=\"7\"/>"
    ].join("")
  },
  {
    id: "monarch-butterfly",
    title: "Fluttering Butterfly",
    category: "animals",
    emoji: "🦋",
    difficulty: "Medium",
    ageRecommendation: "All Ages",
    description: "A garden butterfly with matching symmetrical wings, decorative circles, and curly antennae.",
    learningPrompt: "Notice how the left wing mirrors the right wing! Try turning on Mirror Draw to paint both wings at once.",
    suggestedColors: [
      { name: "Bright Orange", hex: "#F97316" },
      { name: "Sunny Yellow", hex: "#FBBF24" },
      { name: "Royal Purple", hex: "#8B5CF6" }
    ],
    funFact: "Butterflies taste sweet flower nectar with tiny sensors on their feet before sipping through their curled proboscis!",
    svgOutline: [
      "<path d=\"M236,192 C145,105 74,162 104,248 C122,292 184,274 236,252 Z\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"7\" stroke-linejoin=\"round\"/>",
      "<path d=\"M264,192 C355,105 426,162 396,248 C378,292 316,274 264,252 Z\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"7\" stroke-linejoin=\"round\"/>",
      "<path d=\"M236,262 C154,284 114,358 168,400 C210,418 236,342 236,314 Z\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"7\" stroke-linejoin=\"round\"/>",
      "<path d=\"M264,262 C346,284 386,358 332,400 C290,418 264,342 264,314 Z\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"7\" stroke-linejoin=\"round\"/>",
      "<circle cx=\"158\" cy=\"204\" r=\"22\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"6\"/>",
      "<circle cx=\"342\" cy=\"204\" r=\"22\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"6\"/>",
      "<circle cx=\"182\" cy=\"348\" r=\"18\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"6\"/>",
      "<circle cx=\"318\" cy=\"348\" r=\"18\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"6\"/>",
      "<ellipse cx=\"250\" cy=\"268\" rx=\"16\" ry=\"94\" fill=\"#FFFFFF\" stroke=\"#2D2D2D\" stroke-width=\"7\"/>",
      "<circle cx=\"250\" cy=\"156\" r=\"20\" fill=\"#FFFFFF\" stroke=\"#2D2D2D\" stroke-width=\"7\"/>",
      "<circle cx=\"243\" cy=\"152\" r=\"4\" fill=\"#2D2D2D\"/>",
      "<circle cx=\"257\" cy=\"152\" r=\"4\" fill=\"#2D2D2D\"/>",
      "<path d=\"M242,138 Q216,88 190,98 M258,138 Q284,88 310,98\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"6\" stroke-linecap=\"round\"/>",
      "<circle cx=\"188\" cy=\"98\" r=\"6\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"5\"/>",
      "<circle cx=\"312\" cy=\"98\" r=\"6\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"5\"/>"
    ].join("")
  },
  {
    id: "baby-t-rex",
    title: "Friendly Baby T-Rex",
    category: "animals",
    emoji: "🦖",
    difficulty: "Medium",
    ageRecommendation: "All Ages",
    description: "A smiling prehistoric baby dinosaur with cute back plates and a playful long tail.",
    learningPrompt: "What color do you think dinosaurs were? Leafy green, bright teal, or speckled with colorful spots?",
    suggestedColors: [
      { name: "Emerald Green", hex: "#10B981" },
      { name: "Lime Glow", hex: "#84CC16" },
      { name: "Sunset Coral", hex: "#F43F5E" }
    ],
    funFact: "Dinosaurs hatched from eggs millions of years ago, and modern birds are their closest living relatives!",
    svgOutline: [
      "<path d=\"M205,125 C255,112 302,138 302,175 C302,202 276,220 245,220 C240,248 258,270 292,290 C328,312 372,306 428,262 C412,324 366,368 308,382 L308,434 L268,434 L268,386 C250,388 232,386 218,382 L218,434 L178,434 L178,364 C156,338 156,286 176,252 C164,228 158,196 164,166 C170,142 186,130 205,125 Z\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"7\" stroke-linejoin=\"round\"/>",
      "<ellipse cx=\"215\" cy=\"312\" rx=\"34\" ry=\"48\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"5\"/>",
      "<circle cx=\"222\" cy=\"158\" r=\"9\" fill=\"#2D2D2D\"/>",
      "<path d=\"M294,188 Q268,204 242,192\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"6\" stroke-linecap=\"round\"/>",
      "<path d=\"M174,264 Q142,272 152,292 Q168,298 184,284\" fill=\"#FFFFFF\" stroke=\"#2D2D2D\" stroke-width=\"6\" stroke-linejoin=\"round\"/>",
      "<polygon points=\"248,232 270,224 264,250\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"5\" stroke-linejoin=\"round\"/>",
      "<polygon points=\"268,262 292,256 284,280\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"5\" stroke-linejoin=\"round\"/>"
    ].join("")
  },
  {
    id: "happy-sea-turtle",
    title: "Happy Sea Turtle",
    category: "animals",
    emoji: "🐢",
    difficulty: "Easy",
    ageRecommendation: "All Ages",
    description: "A friendly sea turtle gliding through gentle waves with a patterned geometric shell.",
    learningPrompt: "Notice the shapes on the turtle's shell! Pick two or three different greens and blues for each shell tile.",
    suggestedColors: [
      { name: "Ocean Teal", hex: "#0D9488" },
      { name: "Seafoam Green", hex: "#10B981" },
      { name: "Sky Blue", hex: "#38BDF8" }
    ],
    funFact: "Sea turtles can hold their breath underwater for hours while resting peacefully on coral reefs!",
    svgOutline: [
      "<ellipse cx=\"240\" cy=\"260\" rx=\"118\" ry=\"88\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"7\"/>",
      "<polygon points=\"240,206 286,232 286,284 240,310 194,284 194,232\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"6\" stroke-linejoin=\"round\"/>",
      "<line x1=\"240\" y1=\"172\" x2=\"240\" y2=\"206\" stroke=\"#2D2D2D\" stroke-width=\"6\"/>",
      "<line x1=\"240\" y1=\"310\" x2=\"240\" y2=\"348\" stroke=\"#2D2D2D\" stroke-width=\"6\"/>",
      "<line x1=\"194\" y1=\"232\" x2=\"134\" y2=\"214\" stroke=\"#2D2D2D\" stroke-width=\"6\"/>",
      "<line x1=\"286\" y1=\"232\" x2=\"346\" y2=\"214\" stroke=\"#2D2D2D\" stroke-width=\"6\"/>",
      "<line x1=\"194\" y1=\"284\" x2=\"140\" y2=\"312\" stroke=\"#2D2D2D\" stroke-width=\"6\"/>",
      "<line x1=\"286\" y1=\"284\" x2=\"340\" y2=\"312\" stroke=\"#2D2D2D\" stroke-width=\"6\"/>",
      "<path d=\"M354,238 C392,216 432,232 432,262 C432,292 390,302 354,282\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"7\" stroke-linejoin=\"round\"/>",
      "<circle cx=\"398\" cy=\"250\" r=\"7\" fill=\"#2D2D2D\"/>",
      "<path d=\"M388,274 Q404,282 418,272\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"5\" stroke-linecap=\"round\"/>",
      "<path d=\"M280,174 C298,124 342,126 334,166 C328,184 306,184 294,178\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"7\"/>",
      "<path d=\"M270,346 C284,394 330,394 326,356 C322,340 300,338 286,342\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"7\"/>",
      "<path d=\"M164,336 C158,382 198,388 206,350\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"7\"/>",
      "<path d=\"M122,258 L88,266 L124,280\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"7\" stroke-linejoin=\"round\"/>"
    ].join("")
  },
  {
    id: "playful-dolphin",
    title: "Playful Ocean Dolphin",
    category: "animals",
    emoji: "🐬",
    difficulty: "Easy",
    ageRecommendation: "All Ages",
    description: "A joyful dolphin leaping cleanly over rolling sea waves with a bright sun above.",
    learningPrompt: "Paint the ocean waves in swirling shades of cyan and blue, and give the leaping dolphin a bright cheerful smile!",
    suggestedColors: [
      { name: "Ocean Cyan", hex: "#06B6D4" },
      { name: "Sky Blue", hex: "#3B82F6" },
      { name: "Sun Yellow", hex: "#FBBF24" }
    ],
    funFact: "Dolphins talk to each other underwater using special whistles and clicks—and each dolphin has its own signature whistle!",
    svgOutline: [
      "<path d=\"M136,282 C142,172 252,126 338,176 C374,196 396,214 422,216 C402,238 378,242 356,236 C326,248 280,242 246,272 C216,298 194,322 152,334 L116,368 L130,322 L92,312 L136,282 Z\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"7\" stroke-linejoin=\"round\"/>",
      "<path d=\"M246,148 C252,112 282,96 296,112 C284,128 282,144 288,156\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"7\" stroke-linejoin=\"round\"/>",
      "<path d=\"M262,248 C264,282 288,298 300,286 C294,268 286,254 276,244\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"6\" stroke-linejoin=\"round\"/>",
      "<circle cx=\"352\" cy=\"206\" r=\"7\" fill=\"#2D2D2D\"/>",
      "<path d=\"M372,224 Q390,232 408,224\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"115\" cy=\"112\" r=\"36\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"7\"/>",
      "<path d=\"M62,396 Q116,368 170,396 Q224,424 278,396 Q332,368 386,396 Q424,414 452,394\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"7\" stroke-linecap=\"round\"/>"
    ].join("")
  },
  {
    id: "cosmic-rocket",
    title: "Cosmic Rocket Ship",
    category: "vehicles-space",
    emoji: "🚀",
    difficulty: "Easy",
    ageRecommendation: "All Ages",
    description: "A sleek space rocket blasting into starry skies with fins, porthole window, and twin planets.",
    learningPrompt: "Count down together: 5, 4, 3, 2, 1, BLAST OFF! Who is looking out of the round spaceship window?",
    suggestedColors: [
      { name: "Flame Red", hex: "#EF4444" },
      { name: "Cobalt Blue", hex: "#2563EB" },
      { name: "Bright Gold", hex: "#FBBF24" }
    ],
    funFact: "Rockets must travel faster than 28,000 kilometers per hour to escape Earth's pull and orbit safely in space!",
    svgOutline: [
      "<path d=\"M250,62 C298,136 312,238 300,336 L200,336 C188,238 202,136 250,62 Z\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"7\" stroke-linejoin=\"round\"/>",
      "<path d=\"M214,132 Q250,148 286,132\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"6\"/>",
      "<circle cx=\"250\" cy=\"218\" r=\"38\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"7\"/>",
      "<circle cx=\"250\" cy=\"218\" r=\"24\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"5\"/>",
      "<path d=\"M198,256 L136,336 L200,324 Z\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"7\" stroke-linejoin=\"round\"/>",
      "<path d=\"M302,256 L364,336 L300,324 Z\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"7\" stroke-linejoin=\"round\"/>",
      "<path d=\"M218,336 Q226,406 250,438 Q274,406 282,336 Z\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"7\" stroke-linejoin=\"round\"/>",
      "<path d=\"M234,336 Q240,382 250,402 Q260,382 266,336 Z\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"5\" stroke-linejoin=\"round\"/>",
      "<circle cx=\"110\" cy=\"138\" r=\"28\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"6\"/>",
      "<ellipse cx=\"110\" cy=\"138\" rx=\"46\" ry=\"12\" transform=\"rotate(-18 110 138)\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"5\"/>",
      "<polygon points=\"392,110 399,126 416,127 403,138 407,155 392,146 377,155 381,138 368,127 385,126\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"5\" stroke-linejoin=\"round\"/>"
    ].join("")
  },
  {
    id: "steam-locomotive",
    title: "Chugga Steam Train",
    category: "vehicles-space",
    emoji: "🚂",
    difficulty: "Medium",
    ageRecommendation: "All Ages",
    description: "A classic steam locomotive with a tall smokestack, puffy steam clouds, cab window, and rolling wheels.",
    learningPrompt: "Choo choo! Ask your child where this cheerful train is traveling—over bridges, past green hills, or into town?",
    suggestedColors: [
      { name: "Ruby Red", hex: "#DC2626" },
      { name: "Engine Blue", hex: "#2563EB" },
      { name: "Brass Gold", hex: "#EAB308" }
    ],
    funFact: "Classic steam engines boiled water inside a steel boiler so expanding steam pushed heavy pistons that turned the wheels!",
    svgOutline: [
      "<rect x=\"128\" y=\"222\" width=\"172\" height=\"118\" rx=\"14\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"7\"/>",
      "<rect x=\"300\" y=\"158\" width=\"116\" height=\"182\" rx=\"12\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"7\"/>",
      "<rect x=\"288\" y=\"142\" width=\"140\" height=\"18\" rx=\"8\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"6\"/>",
      "<rect x=\"326\" y=\"182\" width=\"64\" height=\"56\" rx=\"8\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"6\"/>",
      "<polygon points=\"128,266 76,340 128,340\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"7\" stroke-linejoin=\"round\"/>",
      "<rect x=\"160\" y=\"154\" width=\"38\" height=\"68\" rx=\"6\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"7\"/>",
      "<circle cx=\"178\" cy=\"106\" r=\"22\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"5\"/>",
      "<circle cx=\"218\" cy=\"84\" r=\"26\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"5\"/>",
      "<circle cx=\"168\" cy=\"368\" r=\"34\" fill=\"#FFFFFF\" stroke=\"#2D2D2D\" stroke-width=\"7\"/>",
      "<circle cx=\"168\" cy=\"368\" r=\"14\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"5\"/>",
      "<circle cx=\"248\" cy=\"368\" r=\"34\" fill=\"#FFFFFF\" stroke=\"#2D2D2D\" stroke-width=\"7\"/>",
      "<circle cx=\"248\" cy=\"368\" r=\"14\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"5\"/>",
      "<circle cx=\"354\" cy=\"364\" r=\"42\" fill=\"#FFFFFF\" stroke=\"#2D2D2D\" stroke-width=\"7\"/>",
      "<circle cx=\"354\" cy=\"364\" r=\"18\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"5\"/>",
      "<line x1=\"62\" y1=\"406\" x2=\"438\" y2=\"406\" stroke=\"#2D2D2D\" stroke-width=\"7\" stroke-linecap=\"round\"/>"
    ].join("")
  },
  {
    id: "breeze-sailboat",
    title: "Ocean Breeze Sailboat",
    category: "vehicles-space",
    emoji: "⛵",
    difficulty: "Easy",
    ageRecommendation: "Ages 2-4",
    description: "A breezy sailboat gliding over smooth waves with two crisp sails and a fluttering flag.",
    learningPrompt: "Talk about how sailboats catch the wind in their sails to glide across water without any noisy engine!",
    suggestedColors: [
      { name: "Ocean Cyan", hex: "#06B6D4" },
      { name: "Cherry Coral", hex: "#F43F5E" },
      { name: "Sunny Yellow", hex: "#FBBF24" }
    ],
    funFact: "Sailors can steer their boats even toward the wind by angling their sails in a zigzag pattern called tacking!",
    svgOutline: [
      "<polygon points=\"112,318 388,318 346,386 154,386\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"7\" stroke-linejoin=\"round\"/>",
      "<rect x=\"244\" y=\"96\" width=\"12\" height=\"222\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"6\"/>",
      "<polygon points=\"240,124 240,296 132,296\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"7\" stroke-linejoin=\"round\"/>",
      "<polygon points=\"260,144 260,296 364,296\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"7\" stroke-linejoin=\"round\"/>",
      "<polygon points=\"256,96 256,126 298,111\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"6\" stroke-linejoin=\"round\"/>",
      "<circle cx=\"116\" cy=\"118\" r=\"34\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"7\"/>",
      "<path d=\"M72,414 Q130,392 188,414 Q246,436 304,414 Q362,392 428,414\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"7\" stroke-linecap=\"round\"/>"
    ].join("")
  },
  {
    id: "fire-engine",
    title: "Rescue Fire Truck",
    category: "vehicles-space",
    emoji: "🚒",
    difficulty: "Medium",
    ageRecommendation: "All Ages",
    description: "A shiny rescue fire engine with a rooftop ladder, flashing siren dome, and big sturdy tires.",
    learningPrompt: "Color the fire truck bold red, paint the ladder shiny yellow or silver, and light up the siren dome!",
    suggestedColors: [
      { name: "Fire Red", hex: "#EF4444" },
      { name: "Siren Yellow", hex: "#FBBF24" },
      { name: "Sky Blue", hex: "#38BDF8" }
    ],
    funFact: "Fire trucks carry hundreds of meters of tough water hose and tall extension ladders to reach high windows safely!",
    svgOutline: [
      "<path d=\"M86,232 L306,232 L322,190 L402,190 L424,254 L424,344 L86,344 Z\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"7\" stroke-linejoin=\"round\"/>",
      "<polygon points=\"332,206 388,206 404,252 332,252\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"6\" stroke-linejoin=\"round\"/>",
      "<rect x=\"122\" y=\"256\" width=\"148\" height=\"58\" rx=\"8\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"6\"/>",
      "<rect x=\"98\" y=\"192\" width=\"192\" height=\"28\" rx=\"6\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"6\"/>",
      "<line x1=\"130\" y1=\"192\" x2=\"130\" y2=\"220\" stroke=\"#2D2D2D\" stroke-width=\"5\"/>",
      "<line x1=\"166\" y1=\"192\" x2=\"166\" y2=\"220\" stroke=\"#2D2D2D\" stroke-width=\"5\"/>",
      "<line x1=\"202\" y1=\"192\" x2=\"202\" y2=\"220\" stroke=\"#2D2D2D\" stroke-width=\"5\"/>",
      "<line x1=\"238\" y1=\"192\" x2=\"238\" y2=\"220\" stroke=\"#2D2D2D\" stroke-width=\"5\"/>",
      "<path d=\"M344,190 C344,164 378,164 378,190\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"6\"/>",
      "<circle cx=\"158\" cy=\"358\" r=\"40\" fill=\"#FFFFFF\" stroke=\"#2D2D2D\" stroke-width=\"7\"/>",
      "<circle cx=\"158\" cy=\"358\" r=\"16\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"5\"/>",
      "<circle cx=\"352\" cy=\"358\" r=\"40\" fill=\"#FFFFFF\" stroke=\"#2D2D2D\" stroke-width=\"7\"/>",
      "<circle cx=\"352\" cy=\"358\" r=\"16\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"5\"/>"
    ].join("")
  },
  {
    id: "sunny-rainbow",
    title: "Radiant Sun & Rainbow",
    category: "nature-flowers",
    emoji: "🌈",
    difficulty: "Easy",
    ageRecommendation: "All Ages",
    description: "A cheerful smiling sun peeking over layered rainbow bands nestled between two puffy clouds.",
    learningPrompt: "Fill each rainbow band in order from outside to inside: Red, Orange, Yellow, Green, and Sky Blue!",
    suggestedColors: [
      { name: "Rainbow Red", hex: "#EF4444" },
      { name: "Warm Orange", hex: "#F97316" },
      { name: "Sun Yellow", hex: "#FACC15" },
      { name: "Meadow Green", hex: "#10B981" }
    ],
    funFact: "Sunlight looks white, but rain droplets act like tiny prisms that split light into all the rainbow colors!",
    svgOutline: [
      "<path d=\"M114,366 A150,150 0 0,1 414,366 L386,366 A122,122 0 0,0 142,366 Z\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"6\" stroke-linejoin=\"round\"/>",
      "<path d=\"M142,366 A122,122 0 0,1 386,366 L358,366 A94,94 0 0,0 170,366 Z\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"6\" stroke-linejoin=\"round\"/>",
      "<path d=\"M170,366 A94,94 0 0,1 358,366 L330,366 A66,66 0 0,0 198,366 Z\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"6\" stroke-linejoin=\"round\"/>",
      "<path d=\"M198,366 A66,66 0 0,1 330,366 L302,366 A38,38 0 0,0 226,366 Z\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"6\" stroke-linejoin=\"round\"/>",
      "<path d=\"M74,366 C66,342 88,322 110,328 C118,304 152,304 162,326 C186,322 204,344 192,368 C196,392 174,406 150,400 C130,410 100,404 92,390 C74,394 64,380 74,366 Z\" fill=\"#FFFFFF\" stroke=\"#2D2D2D\" stroke-width=\"7\"/>",
      "<path d=\"M322,366 C314,342 336,322 358,328 C366,304 400,304 410,326 C434,322 452,344 440,368 C444,392 422,406 398,400 C378,410 348,404 340,390 C322,394 312,380 322,366 Z\" fill=\"#FFFFFF\" stroke=\"#2D2D2D\" stroke-width=\"7\"/>",
      "<circle cx=\"142\" cy=\"150\" r=\"52\" fill=\"#FFFFFF\" stroke=\"#2D2D2D\" stroke-width=\"7\"/>",
      "<circle cx=\"124\" cy=\"142\" r=\"6\" fill=\"#2D2D2D\"/>",
      "<circle cx=\"160\" cy=\"142\" r=\"6\" fill=\"#2D2D2D\"/>",
      "<path d=\"M128,164 Q142,178 156,164\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"5\" stroke-linecap=\"round\"/>",
      "<line x1=\"142\" y1=\"72\" x2=\"142\" y2=\"90\" stroke=\"#2D2D2D\" stroke-width=\"7\" stroke-linecap=\"round\"/>",
      "<line x1=\"142\" y1=\"210\" x2=\"142\" y2=\"228\" stroke=\"#2D2D2D\" stroke-width=\"7\" stroke-linecap=\"round\"/>",
      "<line x1=\"64\" y1=\"150\" x2=\"82\" y2=\"150\" stroke=\"#2D2D2D\" stroke-width=\"7\" stroke-linecap=\"round\"/>",
      "<line x1=\"202\" y1=\"150\" x2=\"220\" y2=\"150\" stroke=\"#2D2D2D\" stroke-width=\"7\" stroke-linecap=\"round\"/>"
    ].join("")
  },
  {
    id: "garden-sunflower",
    title: "Giant Garden Sunflower",
    category: "nature-flowers",
    emoji: "🌻",
    difficulty: "Easy",
    ageRecommendation: "All Ages",
    description: "A tall happy sunflower with 8 plump petals around a smiling center, leafy stem, and flowerpot.",
    learningPrompt: "Count all 8 petals together as you paint each one sunny yellow or warm golden orange!",
    suggestedColors: [
      { name: "Sunflower Gold", hex: "#EAB308" },
      { name: "Cocoa Brown", hex: "#78350F" },
      { name: "Meadow Green", hex: "#22C55E" }
    ],
    funFact: "Young sunflowers follow the sun from east to west each day—a clever plant trick called heliotropism!",
    svgOutline: [
      "<ellipse cx=\"250\" cy=\"106\" rx=\"22\" ry=\"42\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"6\"/>",
      "<ellipse cx=\"250\" cy=\"258\" rx=\"22\" ry=\"42\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"6\"/>",
      "<ellipse cx=\"174\" cy=\"182\" rx=\"42\" ry=\"22\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"6\"/>",
      "<ellipse cx=\"326\" cy=\"182\" rx=\"42\" ry=\"22\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"6\"/>",
      "<ellipse cx=\"196\" cy=\"128\" rx=\"22\" ry=\"40\" transform=\"rotate(-45 196 128)\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"6\"/>",
      "<ellipse cx=\"304\" cy=\"128\" rx=\"22\" ry=\"40\" transform=\"rotate(45 304 128)\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"6\"/>",
      "<ellipse cx=\"196\" cy=\"236\" rx=\"22\" ry=\"40\" transform=\"rotate(45 196 236)\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"6\"/>",
      "<ellipse cx=\"304\" cy=\"236\" rx=\"22\" ry=\"40\" transform=\"rotate(-45 304 236)\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"6\"/>",
      "<rect x=\"242\" y=\"292\" width=\"16\" height=\"86\" fill=\"#FFFFFF\" stroke=\"#2D2D2D\" stroke-width=\"6\"/>",
      "<path d=\"M242,332 Q186,304 166,336 Q204,368 242,348 Z\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"6\"/>",
      "<path d=\"M258,332 Q314,304 334,336 Q296,368 258,348 Z\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"6\"/>",
      "<polygon points=\"194,378 306,378 292,448 208,448\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"7\" stroke-linejoin=\"round\"/>",
      "<rect x=\"184\" y=\"364\" width=\"132\" height=\"20\" rx=\"6\" fill=\"#FFFFFF\" stroke=\"#2D2D2D\" stroke-width=\"6\"/>",
      "<circle cx=\"250\" cy=\"182\" r=\"52\" fill=\"#FFFFFF\" stroke=\"#2D2D2D\" stroke-width=\"7\"/>",
      "<circle cx=\"232\" cy=\"172\" r=\"7\" fill=\"#2D2D2D\"/>",
      "<circle cx=\"268\" cy=\"172\" r=\"7\" fill=\"#2D2D2D\"/>",
      "<path d=\"M234,196 Q250,212 266,196\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"5\" stroke-linecap=\"round\"/>"
    ].join("")
  },
  {
    id: "mushroom-cottage",
    title: "Fairy Mushroom House",
    category: "nature-flowers",
    emoji: "🍄",
    difficulty: "Medium",
    ageRecommendation: "All Ages",
    description: "A cozy spotted mushroom cottage with an arched wooden door, round window, and grassy hill.",
    learningPrompt: "Color the giant mushroom cap bright cherry red with creamy white polka dots, and add flowers around the door!",
    suggestedColors: [
      { name: "Toadstool Red", hex: "#EF4444" },
      { name: "Warm Cream", hex: "#FDE68A" },
      { name: "Grass Green", hex: "#10B981" }
    ],
    funFact: "Real forest mushrooms aren't plants—they are fungi that help turn fallen leaves back into rich soil for trees!",
    svgOutline: [
      "<path d=\"M164,254 L336,254 L350,418 L150,418 Z\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"7\" stroke-linejoin=\"round\"/>",
      "<path d=\"M98,256 C98,136 164,84 250,84 C336,84 402,136 402,256 Z\" fill=\"#FFFFFF\" stroke=\"#2D2D2D\" stroke-width=\"7\" stroke-linejoin=\"round\"/>",
      "<circle cx=\"174\" cy=\"182\" r=\"24\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"6\"/>",
      "<circle cx=\"254\" cy=\"134\" r=\"28\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"6\"/>",
      "<circle cx=\"334\" cy=\"188\" r=\"22\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"6\"/>",
      "<circle cx=\"246\" cy=\"216\" r=\"16\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"6\"/>",
      "<path d=\"M214,418 L214,332 A36,36 0 0,1 286,332 L286,418 Z\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"7\"/>",
      "<circle cx=\"272\" cy=\"368\" r=\"5\" fill=\"#2D2D2D\"/>",
      "<circle cx=\"186\" cy=\"302\" r=\"18\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"6\"/>",
      "<circle cx=\"314\" cy=\"302\" r=\"18\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"6\"/>",
      "<path d=\"M86,418 L414,418\" stroke=\"#2D2D2D\" stroke-width=\"7\" stroke-linecap=\"round\"/>"
    ].join("")
  },
  {
    id: "royal-castle",
    title: "Royal Fairytale Castle",
    category: "fantasy-fairytale",
    emoji: "🏰",
    difficulty: "Medium",
    ageRecommendation: "All Ages",
    description: "A storybook stone castle with three pointed towers, fluttering flags, and an arched wooden gate.",
    learningPrompt: "Who lives inside this castle? Paint the pointed tower roofs royal purple or gold and the stone walls soft gray!",
    suggestedColors: [
      { name: "Royal Purple", hex: "#8B5CF6" },
      { name: "Stone Gray", hex: "#94A3B8" },
      { name: "Banner Gold", hex: "#F59E0B" }
    ],
    funFact: "Historic castles often had water-filled moats and wooden drawbridges that lifted up to keep the courtyard safe!",
    svgOutline: [
      "<rect x=\"166\" y=\"236\" width=\"168\" height=\"166\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"7\"/>",
      "<rect x=\"102\" y=\"188\" width=\"64\" height=\"214\" fill=\"#FFFFFF\" stroke=\"#2D2D2D\" stroke-width=\"7\"/>",
      "<rect x=\"334\" y=\"188\" width=\"64\" height=\"214\" fill=\"#FFFFFF\" stroke=\"#2D2D2D\" stroke-width=\"7\"/>",
      "<polygon points=\"96,188 134,102 172,188\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"7\" stroke-linejoin=\"round\"/>",
      "<polygon points=\"328,188 366,102 404,188\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"7\" stroke-linejoin=\"round\"/>",
      "<polygon points=\"204,236 250,136 296,236\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"7\" stroke-linejoin=\"round\"/>",
      "<path d=\"M212,402 L212,332 A38,38 0 0,1 288,332 L288,402 Z\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"7\"/>",
      "<rect x=\"122\" y=\"246\" width=\"24\" height=\"36\" rx=\"12\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"5\"/>",
      "<rect x=\"354\" y=\"246\" width=\"24\" height=\"36\" rx=\"12\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"5\"/>",
      "<line x1=\"134\" y1=\"102\" x2=\"134\" y2=\"66\" stroke=\"#2D2D2D\" stroke-width=\"6\"/>",
      "<polygon points=\"134,66 134,90 166,78\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"5\" stroke-linejoin=\"round\"/>",
      "<line x1=\"250\" y1=\"136\" x2=\"250\" y2=\"96\" stroke=\"#2D2D2D\" stroke-width=\"6\"/>",
      "<polygon points=\"250,96 250,122 284,109\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"5\" stroke-linejoin=\"round\"/>",
      "<line x1=\"366\" y1=\"102\" x2=\"366\" y2=\"66\" stroke=\"#2D2D2D\" stroke-width=\"6\"/>",
      "<polygon points=\"366,66 366,90 398,78\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"5\" stroke-linejoin=\"round\"/>"
    ].join("")
  },
  {
    id: "cuddly-teddy",
    title: "Cuddly Teddy Bear",
    category: "fantasy-fairytale",
    emoji: "🧸",
    difficulty: "Easy",
    ageRecommendation: "Ages 2-4",
    description: "A huggable plush teddy bear wearing a neat bow tie with soft round ears and big paw pads.",
    learningPrompt: "What color makes a teddy bear look coziest? Honey brown, soft cream, or magical pastel pink?",
    suggestedColors: [
      { name: "Honey Brown", hex: "#B45309" },
      { name: "Cream Tan", hex: "#FDE68A" },
      { name: "Ruby Bow", hex: "#E11D48" }
    ],
    funFact: "The very first teddy bear was made in 1902 and named after wildlife-loving President Theodore Roosevelt!",
    svgOutline: [
      "<circle cx=\"178\" cy=\"122\" r=\"30\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"7\"/>",
      "<circle cx=\"178\" cy=\"122\" r=\"15\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"5\"/>",
      "<circle cx=\"322\" cy=\"122\" r=\"30\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"7\"/>",
      "<circle cx=\"322\" cy=\"122\" r=\"15\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"5\"/>",
      "<ellipse cx=\"156\" cy=\"292\" rx=\"30\" ry=\"54\" transform=\"rotate(24 156 292)\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"7\"/>",
      "<ellipse cx=\"344\" cy=\"292\" rx=\"30\" ry=\"54\" transform=\"rotate(-24 344 292)\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"7\"/>",
      "<ellipse cx=\"250\" cy=\"326\" rx=\"84\" ry=\"94\" fill=\"#FFFFFF\" stroke=\"#2D2D2D\" stroke-width=\"7\"/>",
      "<ellipse cx=\"250\" cy=\"334\" rx=\"46\" ry=\"58\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"5\"/>",
      "<circle cx=\"250\" cy=\"184\" r=\"68\" fill=\"#FFFFFF\" stroke=\"#2D2D2D\" stroke-width=\"7\"/>",
      "<circle cx=\"224\" cy=\"166\" r=\"8\" fill=\"#2D2D2D\"/>",
      "<circle cx=\"276\" cy=\"166\" r=\"8\" fill=\"#2D2D2D\"/>",
      "<ellipse cx=\"250\" cy=\"198\" rx=\"26\" ry=\"18\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"5\"/>",
      "<ellipse cx=\"250\" cy=\"192\" rx=\"8\" ry=\"6\" fill=\"#2D2D2D\"/>",
      "<path d=\"M250,198 L250,206 Q240,214 234,208 M250,206 Q260,214 266,208\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"4\" stroke-linecap=\"round\"/>",
      "<polygon points=\"250,254 216,238 216,270\" fill=\"#FFFFFF\" stroke=\"#2D2D2D\" stroke-width=\"5\" stroke-linejoin=\"round\"/>",
      "<polygon points=\"250,254 284,238 284,270\" fill=\"#FFFFFF\" stroke=\"#2D2D2D\" stroke-width=\"5\" stroke-linejoin=\"round\"/>",
      "<circle cx=\"250\" cy=\"254\" r=\"9\" fill=\"#FFFFFF\" stroke=\"#2D2D2D\" stroke-width=\"5\"/>",
      "<ellipse cx=\"176\" cy=\"404\" rx=\"36\" ry=\"24\" fill=\"#FFFFFF\" stroke=\"#2D2D2D\" stroke-width=\"7\"/>",
      "<ellipse cx=\"324\" cy=\"404\" rx=\"36\" ry=\"24\" fill=\"#FFFFFF\" stroke=\"#2D2D2D\" stroke-width=\"7\"/>"
    ].join("")
  },
  {
    id: "starlight-unicorn",
    title: "Starlight Unicorn",
    category: "fantasy-fairytale",
    emoji: "🦄",
    difficulty: "Medium",
    ageRecommendation: "All Ages",
    description: "A magical smiling unicorn with a striped spiral horn, flowing mane, and twinkling stars.",
    learningPrompt: "Use rainbow pastel colors on the flowing mane and shiny gold for the unicorn's spiral horn!",
    suggestedColors: [
      { name: "Bubblegum Pink", hex: "#EC4899" },
      { name: "Lavender Purple", hex: "#A855F7" },
      { name: "Magic Gold", hex: "#FBBF24" }
    ],
    funFact: "Stories of unicorns go back thousands of years in folktales from Greece, Persia, and medieval Europe!",
    svgOutline: [
      "<path d=\"M184,414 L184,300 C160,292 146,262 152,226 C158,180 184,148 228,136 C268,124 304,138 320,168 L374,196 C392,208 386,236 364,244 L318,248 C306,276 286,294 274,302 L274,414 Z\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"7\" stroke-linejoin=\"round\"/>",
      "<polygon points=\"252,134 276,58 286,142\" fill=\"#FFFFFF\" stroke=\"#2D2D2D\" stroke-width=\"6\" stroke-linejoin=\"round\"/>",
      "<line x1=\"260\" y1=\"108\" x2=\"282\" y2=\"114\" stroke=\"#2D2D2D\" stroke-width=\"4\"/>",
      "<line x1=\"268\" y1=\"84\" x2=\"280\" y2=\"90\" stroke=\"#2D2D2D\" stroke-width=\"4\"/>",
      "<path d=\"M214,138 C196,108 222,86 242,118 Z\" fill=\"#FFFFFF\" stroke=\"#2D2D2D\" stroke-width=\"6\"/>",
      "<path d=\"M198,154 C146,142 122,188 156,214 C124,232 132,276 164,282\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"6\" stroke-linejoin=\"round\"/>",
      "<circle cx=\"304\" cy=\"184\" r=\"8\" fill=\"#2D2D2D\"/>",
      "<path d=\"M346,222 Q360,232 374,224\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"5\" stroke-linecap=\"round\"/>",
      "<polygon points=\"110,126 116,140 130,141 119,150 123,164 110,156 97,164 101,150 90,141 104,140\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"5\"/>",
      "<polygon points=\"392,112 398,126 412,127 401,136 405,150 392,142 379,150 383,136 372,127 386,126\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"5\"/>"
    ].join("")
  },
  {
    id: "alphabet-a-apple",
    title: "Letter A & Shiny Apple",
    category: "alphabet-art",
    emoji: "🍎",
    difficulty: "Easy",
    ageRecommendation: "All Ages",
    description: "Bold hollow Letter A ready for coloring next to a plump apple with a crisp green leaf.",
    learningPrompt: "Color inside the big hollow Letter A while saying 'A is for Apple!' aloud together.",
    suggestedColors: [
      { name: "Apple Red", hex: "#DC2626" },
      { name: "Leaf Green", hex: "#16A34A" },
      { name: "Letter Gold", hex: "#F59E0B" }
    ],
    funFact: "Farmers grow over 7,500 different kinds of apples around the world, from sweet red Gala to tart green Granny Smith!",
    svgOutline: [
      "<path d=\"M164,120 L204,120 L262,380 L218,380 L204,316 L164,316 L150,380 L106,380 Z M172,276 L196,276 L184,198 Z\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"7\" stroke-linejoin=\"round\"/>",
      "<path d=\"M354,194 C322,184 282,216 282,294 C282,364 316,400 354,394 C392,400 426,364 426,294 C426,216 386,184 354,194 Z\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"7\"/>",
      "<path d=\"M354,194 Q346,144 334,130\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"7\" stroke-linecap=\"round\"/>",
      "<path d=\"M350,162 Q404,132 394,168 Q366,180 350,162 Z\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"6\" stroke-linejoin=\"round\"/>"
    ].join("")
  },
  {
    id: "number-1-sun",
    title: "Number 1 & Radiant Sun",
    category: "alphabet-art",
    emoji: "☀️",
    difficulty: "Easy",
    ageRecommendation: "Ages 2-4",
    description: "A big hollow Number 1 paired with our one bright shining sun.",
    learningPrompt: "Earth has ONE bright sun in the center of our solar system! Color Number 1 and the sun in bright cheerful tones.",
    suggestedColors: [
      { name: "Warm Gold", hex: "#F59E0B" },
      { name: "Cobalt Blue", hex: "#2563EB" },
      { name: "Sunny Coral", hex: "#FB7185" }
    ],
    funFact: "Number 1 is the very first counting number—and every larger whole number is built by adding 1!",
    svgOutline: [
      "<path d=\"M164,130 L204,130 L204,344 L242,344 L242,384 L120,384 L120,344 L160,344 L160,192 L124,218 L106,184 Z\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"7\" stroke-linejoin=\"round\"/>",
      "<circle cx=\"354\" cy=\"262\" r=\"58\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"7\"/>",
      "<circle cx=\"336\" cy=\"250\" r=\"6\" fill=\"#2D2D2D\"/>",
      "<circle cx=\"372\" cy=\"250\" r=\"6\" fill=\"#2D2D2D\"/>",
      "<path d=\"M338,274 Q354,290 370,274\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"5\" stroke-linecap=\"round\"/>",
      "<line x1=\"354\" y1=\"172\" x2=\"354\" y2=\"192\" stroke=\"#2D2D2D\" stroke-width=\"7\" stroke-linecap=\"round\"/>",
      "<line x1=\"354\" y1=\"332\" x2=\"354\" y2=\"352\" stroke=\"#2D2D2D\" stroke-width=\"7\" stroke-linecap=\"round\"/>",
      "<line x1=\"264\" y1=\"262\" x2=\"284\" y2=\"262\" stroke=\"#2D2D2D\" stroke-width=\"7\" stroke-linecap=\"round\"/>",
      "<line x1=\"424\" y1=\"262\" x2=\"444\" y2=\"262\" stroke=\"#2D2D2D\" stroke-width=\"7\" stroke-linecap=\"round\"/>",
      "<line x1=\"290\" y1=\"198\" x2=\"304\" y2=\"212\" stroke=\"#2D2D2D\" stroke-width=\"7\" stroke-linecap=\"round\"/>",
      "<line x1=\"404\" y1=\"312\" x2=\"418\" y2=\"326\" stroke=\"#2D2D2D\" stroke-width=\"7\" stroke-linecap=\"round\"/>",
      "<line x1=\"290\" y1=\"326\" x2=\"304\" y2=\"312\" stroke=\"#2D2D2D\" stroke-width=\"7\" stroke-linecap=\"round\"/>",
      "<line x1=\"404\" y1=\"212\" x2=\"418\" y2=\"198\" stroke=\"#2D2D2D\" stroke-width=\"7\" stroke-linecap=\"round\"/>"
    ].join("")
  },
  {
    id: "letter-b-balloons",
    title: "Letter B & Party Balloons",
    category: "alphabet-art",
    emoji: "🎈",
    difficulty: "Easy",
    ageRecommendation: "All Ages",
    description: "Big hollow Letter B floating alongside three festive floating balloons.",
    learningPrompt: "Say 'Buh-buh-balloons!' as you color inside Letter B and pick three bright party colors for the balloons.",
    suggestedColors: [
      { name: "Berry Rose", hex: "#F43F5E" },
      { name: "Sky Blue", hex: "#3B82F6" },
      { name: "Sunny Yellow", hex: "#FBBF24" }
    ],
    funFact: "Two big rounded bellies stacked together give capital B its bouncy shape!",
    svgOutline: [
      "<path d=\"M104,126 L186,126 C226,126 244,152 244,186 C244,212 228,232 206,242 C234,252 252,276 252,308 C252,350 226,378 184,378 L104,378 Z M142,162 L142,226 L180,226 C198,226 206,214 206,194 C206,174 198,162 180,162 Z M142,262 L142,340 L182,340 C204,340 214,326 214,300 C214,274 202,262 180,262 Z\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"7\" stroke-linejoin=\"round\"/>",
      "<ellipse cx=\"328\" cy=\"184\" rx=\"38\" ry=\"48\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"7\"/>",
      "<ellipse cx=\"398\" cy=\"226\" rx=\"36\" ry=\"46\" fill=\"#FFFFFF\" stroke=\"#2D2D2D\" stroke-width=\"7\"/>",
      "<ellipse cx=\"342\" cy=\"268\" rx=\"36\" ry=\"46\" fill=\"#FFFFFF\" stroke=\"#2D2D2D\" stroke-width=\"7\"/>",
      "<path d=\"M342,314 Q328,364 344,412 M398,272 Q410,336 392,402 M328,232 Q314,306 320,396\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"5\" stroke-linecap=\"round\"/>"
    ].join("")
  },
  {
    id: "crescent-star-flag",
    title: "Crescent Moon & Star",
    category: "cultural-pakistan",
    emoji: "🇵🇰",
    difficulty: "Easy",
    ageRecommendation: "All Ages",
    description: "The national flag featuring the white stripe, emerald field, crescent moon, and five-pointed star.",
    learningPrompt: "The crescent stands for progress and the star stands for light and knowledge. Color the right field deep green!",
    suggestedColors: [
      { name: "Pakistan Green", hex: "#065F46" },
      { name: "Pure White", hex: "#FFFFFF" },
      { name: "Golden Star", hex: "#FBBF24" }
    ],
    funFact: "Pakistan's flag pairs dark emerald green with a crisp white stripe celebrating peace and harmony across all communities!",
    svgOutline: [
      "<rect x=\"76\" y=\"118\" width=\"348\" height=\"236\" rx=\"14\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"7\"/>",
      "<line x1=\"168\" y1=\"118\" x2=\"168\" y2=\"354\" stroke=\"#2D2D2D\" stroke-width=\"7\"/>",
      "<path d=\"M308,176 A58,58 0 1,0 308,296 A46,46 0 1,1 308,176 Z\" fill=\"#FFFFFF\" stroke=\"#2D2D2D\" stroke-width=\"6\" stroke-linejoin=\"round\"/>",
      "<polygon points=\"326,204 334,224 355,225 338,238 344,258 326,246 308,258 314,238 297,225 318,224\" fill=\"#FFFFFF\" stroke=\"#2D2D2D\" stroke-width=\"5\" stroke-linejoin=\"round\"/>"
    ].join("")
  },
  {
    id: "minar-e-pakistan",
    title: "Minar-e-Pakistan Monument",
    category: "cultural-pakistan",
    emoji: "🏛️",
    difficulty: "Medium",
    ageRecommendation: "All Ages",
    description: "The iconic national monument in Lahore rising from blooming star-shaped marble petals.",
    learningPrompt: "Look at the flower-like petals at the base! Paint the surrounding park lawn lush green and the sky bright blue.",
    suggestedColors: [
      { name: "Marble Cream", hex: "#FEF3C7" },
      { name: "Park Green", hex: "#10B981" },
      { name: "Sky Blue", hex: "#38BDF8" }
    ],
    funFact: "Minar-e-Pakistan stands 70 meters tall in Greater Iqbal Park, Lahore, where the 1940 Pakistan Resolution was passed!",
    svgOutline: [
      "<polygon points=\"250,62 232,272 268,272\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"7\" stroke-linejoin=\"round\"/>",
      "<line x1=\"250\" y1=\"42\" x2=\"250\" y2=\"62\" stroke=\"#2D2D2D\" stroke-width=\"6\" stroke-linecap=\"round\"/>",
      "<circle cx=\"250\" cy=\"38\" r=\"6\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"5\"/>",
      "<rect x=\"212\" y=\"272\" width=\"76\" height=\"22\" rx=\"8\" fill=\"#FFFFFF\" stroke=\"#2D2D2D\" stroke-width=\"6\"/>",
      "<rect x=\"190\" y=\"322\" width=\"120\" height=\"24\" rx=\"10\" fill=\"#FFFFFF\" stroke=\"#2D2D2D\" stroke-width=\"6\"/>",
      "<path d=\"M224,294 L214,322 L286,322 L276,294 Z\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"6\"/>",
      "<path d=\"M164,418 C176,362 204,346 226,346 L274,346 C296,346 324,362 336,418 Z\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"7\" stroke-linejoin=\"round\"/>",
      "<path d=\"M202,418 C214,376 232,356 250,356 C268,356 286,376 298,418 Z\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"6\" stroke-linejoin=\"round\"/>",
      "<rect x=\"108\" y=\"418\" width=\"284\" height=\"22\" rx=\"6\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"7\"/>"
    ].join("")
  },
  {
    id: "pakistan-mor-peacock",
    title: "Majestic Peacock (Mor)",
    category: "cultural-pakistan",
    emoji: "🦚",
    difficulty: "Creative",
    ageRecommendation: "All Ages",
    description: "A proud peacock spreading its ornate fan of eyespot tail feathers.",
    learningPrompt: "Peacocks love to dance when monsoon rains arrive! Paint each oval eyespot with turquoise, emerald, and gold.",
    suggestedColors: [
      { name: "Royal Teal", hex: "#0284C7" },
      { name: "Emerald Green", hex: "#059669" },
      { name: "Golden Glow", hex: "#EAB308" }
    ],
    funFact: "Every single peacock tail feather shimmers like tiny jewels because microscopic ridges bounce sunlight like soap bubbles!",
    svgOutline: [
      "<path d=\"M98,342 C82,158 418,158 402,342 L342,342 C340,224 160,224 158,342 Z\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"7\" stroke-linejoin=\"round\"/>",
      "<circle cx=\"146\" cy=\"262\" r=\"20\" fill=\"#FFFFFF\" stroke=\"#2D2D2D\" stroke-width=\"6\"/>",
      "<circle cx=\"146\" cy=\"262\" r=\"8\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"5\"/>",
      "<circle cx=\"196\" cy=\"202\" r=\"20\" fill=\"#FFFFFF\" stroke=\"#2D2D2D\" stroke-width=\"6\"/>",
      "<circle cx=\"196\" cy=\"202\" r=\"8\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"5\"/>",
      "<circle cx=\"250\" cy=\"178\" r=\"20\" fill=\"#FFFFFF\" stroke=\"#2D2D2D\" stroke-width=\"6\"/>",
      "<circle cx=\"250\" cy=\"178\" r=\"8\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"5\"/>",
      "<circle cx=\"304\" cy=\"202\" r=\"20\" fill=\"#FFFFFF\" stroke=\"#2D2D2D\" stroke-width=\"6\"/>",
      "<circle cx=\"304\" cy=\"202\" r=\"8\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"5\"/>",
      "<circle cx=\"354\" cy=\"262\" r=\"20\" fill=\"#FFFFFF\" stroke=\"#2D2D2D\" stroke-width=\"6\"/>",
      "<circle cx=\"354\" cy=\"262\" r=\"8\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"5\"/>",
      "<ellipse cx=\"250\" cy=\"336\" rx=\"40\" ry=\"62\" fill=\"#FFFFFF\" stroke=\"#2D2D2D\" stroke-width=\"7\"/>",
      "<circle cx=\"250\" cy=\"250\" r=\"26\" fill=\"#FFFFFF\" stroke=\"#2D2D2D\" stroke-width=\"7\"/>",
      "<circle cx=\"242\" cy=\"246\" r=\"4\" fill=\"#2D2D2D\"/>",
      "<polygon points=\"250,256 266,262 250,268\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"5\" stroke-linejoin=\"round\"/>",
      "<path d=\"M246,224 L236,198 M250,224 L250,194 M254,224 L264,198\" stroke=\"#2D2D2D\" stroke-width=\"4\" stroke-linecap=\"round\"/>",
      "<path d=\"M234,398 L234,434 M266,398 L266,434\" stroke=\"#2D2D2D\" stroke-width=\"7\" stroke-linecap=\"round\"/>"
    ].join("")
  },
  {
    id: "chaunsa-mango-tree",
    title: "Sweet Mango Tree",
    category: "cultural-pakistan",
    emoji: "🥭",
    difficulty: "Easy",
    ageRecommendation: "All Ages",
    description: "A lush shady tree hanging heavy with golden Pakistani Chaunsa and Sindhri mangoes.",
    learningPrompt: "Mango is celebrated as the King of Fruits in summer! Paint the leafy canopy bright green and the mangoes golden yellow.",
    suggestedColors: [
      { name: "Mango Gold", hex: "#F59E0B" },
      { name: "Leaf Green", hex: "#16A34A" },
      { name: "Trunk Brown", hex: "#78350F" }
    ],
    funFact: "Pakistan's sunny orchards grow over a hundred varieties of sweet mangoes including Chaunsa, Sindhri, and Anwar Ratol!",
    svgOutline: [
      "<path d=\"M218,434 L224,296 L276,296 L282,434 Z\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"7\" stroke-linejoin=\"round\"/>",
      "<path d=\"M154,302 C96,268 96,178 158,136 C202,90 298,90 342,136 C404,178 404,268 346,302 C304,330 196,330 154,302 Z\" fill=\"#FFFFFF\" stroke=\"#2D2D2D\" stroke-width=\"7\" stroke-linejoin=\"round\"/>",
      "<path d=\"M178,196 C158,196 146,228 164,254 C178,270 206,250 198,218 C194,204 186,196 178,196 Z\" fill=\"#FFFFFF\" stroke=\"#2D2D2D\" stroke-width=\"6\"/>",
      "<path d=\"M318,192 C298,192 286,224 304,250 C318,266 346,246 338,214 C334,200 326,192 318,192 Z\" fill=\"#FFFFFF\" stroke=\"#2D2D2D\" stroke-width=\"6\"/>",
      "<path d=\"M248,144 C228,144 216,176 234,202 C248,218 276,198 268,166 C264,152 256,144 248,144 Z\" fill=\"#FFFFFF\" stroke=\"#2D2D2D\" stroke-width=\"6\"/>",
      "<line x1=\"116\" y1=\"434\" x2=\"384\" y2=\"434\" stroke=\"#2D2D2D\" stroke-width=\"7\" stroke-linecap=\"round\"/>"
    ].join("")
  },
  {
    id: "pakistani-truck-art",
    title: "Colorful Truck Art",
    category: "cultural-pakistan",
    emoji: "🚛",
    difficulty: "Creative",
    ageRecommendation: "All Ages",
    description: "A cheerful decorated Pakistani Bedford-style truck with crown crest, flower medallions, and patterns.",
    learningPrompt: "Pakistani Truck Art is famous worldwide for dazzling colors and flowers! Fill every panel with a joyful new hue.",
    suggestedColors: [
      { name: "Vibrant Pink", hex: "#EC4899" },
      { name: "Peacock Teal", hex: "#06B6D4" },
      { name: "Marigold", hex: "#F59E0B" }
    ],
    funFact: "Master truck painters spend weeks hand-painting poetic verses, mountains, peacocks, and hanging bells onto highways trucks!",
    svgOutline: [
      "<path d=\"M104,174 L302,174 L302,334 L104,334 Z\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"7\" stroke-linejoin=\"round\"/>",
      "<path d=\"M164,174 L182,130 L250,114 L318,130 L336,174 Z\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"7\" stroke-linejoin=\"round\"/>",
      "<path d=\"M302,196 L382,196 L418,258 L418,334 L302,334 Z\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"7\" stroke-linejoin=\"round\"/>",
      "<polygon points=\"318,214 372,214 396,256 318,256\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"6\" stroke-linejoin=\"round\"/>",
      "<rect x=\"124\" y=\"196\" width=\"158\" height=\"112\" rx=\"10\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"6\"/>",
      "<circle cx=\"203\" cy=\"252\" r=\"32\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"6\"/>",
      "<circle cx=\"203\" cy=\"252\" r=\"12\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"5\"/>",
      "<circle cx=\"168\" cy=\"352\" r=\"40\" fill=\"#FFFFFF\" stroke=\"#2D2D2D\" stroke-width=\"7\"/>",
      "<circle cx=\"168\" cy=\"352\" r=\"16\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"5\"/>",
      "<circle cx=\"354\" cy=\"352\" r=\"40\" fill=\"#FFFFFF\" stroke=\"#2D2D2D\" stroke-width=\"7\"/>",
      "<circle cx=\"354\" cy=\"352\" r=\"16\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"5\"/>"
    ].join("")
  },
  {
    id: "friendly-dragon",
    title: "Friendly Cloud Dragon",
    category: "fantasy-fairytale",
    emoji: "🐉",
    difficulty: "Creative",
    ageRecommendation: "All Ages",
    description: "A cheerful winged baby dragon with scalloped tummy, tiny wings, and playful horns.",
    learningPrompt: "Give this friendly baby dragon emerald scales, golden horns, and bright colorful wings!",
    suggestedColors: [
      { name: "Dragon Green", hex: "#10B981" },
      { name: "Flame Orange", hex: "#F97316" },
      { name: "Wing Gold", hex: "#FBBF24" }
    ],
    funFact: "Stories of wise, colorful dragons appear in tales all across Asia and Europe—often guarding mountain treasures!",
    svgOutline: [
      "<path d=\"M164,196 C112,138 78,166 106,222 C86,238 96,274 134,274 C146,274 160,262 170,248 Z\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"7\" stroke-linejoin=\"round\"/>",
      "<path d=\"M206,126 C248,118 286,144 282,184 C280,206 258,220 236,222 C248,250 278,278 308,302 C346,328 386,318 424,278 C406,336 358,376 296,386 L296,430 L256,430 L256,388 C236,390 218,388 202,384 L202,430 L164,430 L164,366 C146,334 152,282 178,248 C166,224 162,190 172,160 C178,140 190,130 206,126 Z\" fill=\"#FFFFFF\" stroke=\"#2D2D2D\" stroke-width=\"7\" stroke-linejoin=\"round\"/>",
      "<polygon points=\"186,130 170,88 206,118\" fill=\"#FFFFFF\" stroke=\"#2D2D2D\" stroke-width=\"6\" stroke-linejoin=\"round\"/>",
      "<polygon points=\"226,124 236,84 252,126\" fill=\"#FFFFFF\" stroke=\"#2D2D2D\" stroke-width=\"6\" stroke-linejoin=\"round\"/>",
      "<ellipse cx=\"212\" cy=\"316\" rx=\"32\" ry=\"48\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"5\"/>",
      "<circle cx=\"232\" cy=\"160\" r=\"8\" fill=\"#2D2D2D\"/>",
      "<path d=\"M272,190 Q254,206 236,194\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"5\" stroke-linecap=\"round\"/>"
    ].join("")
  },
  {
    id: "sweet-cupcake",
    title: "Sprinkle Party Cupcake",
    category: "nature-flowers",
    emoji: "🧁",
    difficulty: "Easy",
    ageRecommendation: "Ages 2-4",
    description: "A frosted party cupcake topped with fluffy swirls, candy sprinkles, and a cherry on top.",
    learningPrompt: "What flavor frosting will you paint? Strawberry pink, mint green, chocolate brown, or rainbow swirl?",
    suggestedColors: [
      { name: "Frosting Pink", hex: "#EC4899" },
      { name: "Cherry Red", hex: "#EF4444" },
      { name: "Vanilla Cream", hex: "#FDE68A" }
    ],
    funFact: "Bakers used to bake tiny cakes inside ceramic teacups before muffin tins existed—that is why we call them cupcakes!",
    svgOutline: [
      "<polygon points=\"146,276 354,276 322,422 178,422\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"7\" stroke-linejoin=\"round\"/>",
      "<line x1=\"196\" y1=\"276\" x2=\"210\" y2=\"422\" stroke=\"#2D2D2D\" stroke-width=\"5\"/>",
      "<line x1=\"250\" y1=\"276\" x2=\"250\" y2=\"422\" stroke=\"#2D2D2D\" stroke-width=\"5\"/>",
      "<line x1=\"304\" y1=\"276\" x2=\"290\" y2=\"422\" stroke=\"#2D2D2D\" stroke-width=\"5\"/>",
      "<path d=\"M128,276 C106,244 128,204 166,204 C166,160 202,134 250,134 C298,134 334,160 334,204 C372,204 394,244 372,276 Z\" fill=\"#FFFFFF\" stroke=\"#2D2D2D\" stroke-width=\"7\" stroke-linejoin=\"round\"/>",
      "<circle cx=\"250\" cy=\"104\" r=\"30\" fill=\"#FFFFFF\" stroke=\"#2D2D2D\" stroke-width=\"7\"/>",
      "<path d=\"M250,74 Q264,50 284,48\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"6\" stroke-linecap=\"round\"/>",
      "<rect x=\"186\" y=\"214\" width=\"24\" height=\"10\" rx=\"5\" transform=\"rotate(-22 186 214)\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"4\"/>",
      "<rect x=\"276\" y=\"188\" width=\"24\" height=\"10\" rx=\"5\" transform=\"rotate(24 276 188)\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"4\"/>",
      "<rect x=\"236\" y=\"236\" width=\"24\" height=\"10\" rx=\"5\" transform=\"rotate(12 236 236)\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"4\"/>"
    ].join("")
  },
  {
    id: "number-5-stars",
    title: "Number 5 & Five Stars",
    category: "alphabet-art",
    emoji: "⭐",
    difficulty: "Easy",
    ageRecommendation: "Ages 4-6",
    description: "Bold hollow Number 5 surrounded by five shining stars to count and color one by one.",
    learningPrompt: "Count all five stars out loud as you color each one a bright glowing color!",
    suggestedColors: [
      { name: "Star Gold", hex: "#FBBF24" },
      { name: "Royal Blue", hex: "#3B82F6" },
      { name: "Berry Pink", hex: "#EC4899" }
    ],
    funFact: "You have five fingers on each hand and five toes on each foot—making 5 one of the easiest numbers to count!",
    svgOutline: [
      "<path d=\"M124,132 L252,132 L252,172 L166,172 L166,226 C180,218 196,214 212,214 C252,214 274,244 274,296 C274,352 240,384 190,384 C150,384 122,362 114,328 L154,316 C160,336 172,344 190,344 C216,344 232,326 232,296 C232,266 216,252 190,252 C174,252 162,258 152,268 L124,256 Z\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"7\" stroke-linejoin=\"round\"/>",
      "<polygon points=\"352,96 361,116 382,118 366,132 371,152 352,141 333,152 338,132 322,118 343,116\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"6\" stroke-linejoin=\"round\"/>",
      "<polygon points=\"406,184 415,204 436,206 420,220 425,240 406,229 387,240 392,220 376,206 397,204\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"6\" stroke-linejoin=\"round\"/>",
      "<polygon points=\"346,258 355,278 376,280 360,294 365,314 346,303 327,314 332,294 316,280 337,278\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"6\" stroke-linejoin=\"round\"/>",
      "<polygon points=\"406,336 415,356 436,358 420,372 425,392 406,381 387,392 392,372 376,358 397,356\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"6\" stroke-linejoin=\"round\"/>",
      "<polygon points=\"322,368 331,388 352,390 336,404 341,424 322,413 303,424 308,404 292,390 313,388\" fill=\"none\" stroke=\"#2D2D2D\" stroke-width=\"6\" stroke-linejoin=\"round\"/>"
    ].join("")
  }
];

export function getDrawingTemplateById(id: string): DrawingTemplate | undefined {
  return DRAWING_TEMPLATES.find(t => t.id === id);
}

export function getDrawingTemplatesByCategory(category: DrawingCategory): DrawingTemplate[] {
  return DRAWING_TEMPLATES.filter(t => t.category === category);
}
