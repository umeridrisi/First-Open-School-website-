# -*- coding: utf-8 -*-
import json

categories = [
  {
    "id": "animals",
    "label": "Animals & Wildlife",
    "icon": "🦁",
    "description": "Friendly lions, playful kittens, turtles, dinosaurs, and ocean dolphins."
  },
  {
    "id": "vehicles-space",
    "label": "Vehicles & Space",
    "icon": "🚀",
    "description": "Rockets, airplanes, steam trains, fire engines, and swift sailboats."
  },
  {
    "id": "nature-flowers",
    "label": "Nature & Garden",
    "icon": "🌻",
    "description": "Smiling rainbows, sunflowers, apple trees, and fairy mushroom cottages."
  },
  {
    "id": "fantasy-fairytale",
    "label": "Fantasy & Whimsy",
    "icon": "🏰",
    "description": "Royal castles, starlight unicorns, teddy bears, and friendly dragons."
  },
  {
    "id": "alphabet-art",
    "label": "Alphabet & Numbers Art",
    "icon": "🔤",
    "description": "Letters and numbers paired with delightful creative illustrations to paint."
  },
  {
    "id": "cultural-pakistan",
    "label": "Pakistani Heritage",
    "icon": "🇵🇰",
    "description": "Minar-e-Pakistan, Crescent Star, dancing peacocks, truck art, and mango trees."
  }
]

templates = [
  # 1. Animals
  {
    "id": "lion-cub",
    "title": "Little Lion Cub",
    "category": "animals",
    "emoji": "🦁",
    "difficulty": "Easy",
    "ageRecommendation": "All Ages",
    "description": "A happy little lion cub with a fluffy mane and friendly round ears.",
    "learningPrompt": "Ask your child: What sound does a lion make? What colors would you like to paint his furry mane?",
    "suggestedColors": [{"name": "Golden Yellow", "hex": "#FBBF24"}, {"name": "Tawny Orange", "hex": "#F97316"}, {"name": "Warm Brown", "hex": "#92400E"}],
    "funFact": "Lions are called the King of the Jungle and live together in family groups called prides!",
    "svgOutline": '<circle cx="250" cy="250" r="140" fill="none" stroke="#2D2D2D" stroke-width="8"/><circle cx="250" cy="250" r="95" fill="none" stroke="#2D2D2D" stroke-width="8"/><circle cx="160" cy="150" r="35" fill="none" stroke="#2D2D2D" stroke-width="8"/><circle cx="340" cy="150" r="35" fill="none" stroke="#2D2D2D" stroke-width="8"/><circle cx="215" cy="225" r="14" fill="#2D2D2D"/><circle cx="285" cy="225" r="14" fill="#2D2D2D"/><polygon points="250,250 230,275 270,275" fill="#2D2D2D"/><path d="M250,275 Q250,300 230,300 M250,275 Q250,300 270,300" fill="none" stroke="#2D2D2D" stroke-width="7" stroke-linecap="round"/><path d="M120,250 Q100,210 130,190 M380,250 Q400,210 370,190 M250,110 Q210,80 190,120 M250,110 Q290,80 310,120" fill="none" stroke="#2D2D2D" stroke-width="8" stroke-linecap="round"/>'
  },
  {
    "id": "happy-elephant",
    "title": "Happy Elephant",
    "category": "animals",
    "emoji": "🐘",
    "difficulty": "Easy",
    "ageRecommendation": "All Ages",
    "description": "A cheerful baby elephant with giant floppy ears and an upward curved trunk.",
    "learningPrompt": "Notice how the elephant lifts its trunk! In many cultures, an upward trunk brings good luck and joy.",
    "suggestedColors": [{"name": "Sky Blue", "hex": "#60A5FA"}, {"name": "Soft Gray", "hex": "#9CA3AF"}, {"name": "Bubblegum Pink", "hex": "#F472B6"}],
    "funFact": "Elephants use their long trunks like human hands to pick up food, hug their friends, and spray water!",
    "svgOutline": '<ellipse cx="270" cy="280" rx="130" ry="110" fill="none" stroke="#2D2D2D" stroke-width="8"/><circle cx="190" cy="210" r="75" fill="none" stroke="#2D2D2D" stroke-width="8"/><ellipse cx="140" cy="210" rx="45" ry="65" fill="none" stroke="#2D2D2D" stroke-width="8"/><path d="M190,240 Q160,310 130,310 Q110,310 120,280 Q130,260 160,260" fill="none" stroke="#2D2D2D" stroke-width="8" stroke-linecap="round"/><circle cx="205" cy="195" r="10" fill="#2D2D2D"/><path d="M220,380 L220,440 M260,380 L260,440 M320,380 L320,440 M360,380 L360,440" fill="none" stroke="#2D2D2D" stroke-width="12" stroke-linecap="round"/><path d="M395,260 Q420,290 410,330" fill="none" stroke="#2D2D2D" stroke-width="7" stroke-linecap="round"/>'
  },
  {
    "id": "hop-bunny",
    "title": "Fluffy Hop Bunny",
    "category": "animals",
    "emoji": "🐰",
    "difficulty": "Easy",
    "ageRecommendation": "Ages 2-4",
    "description": "A sweet little bunny rabbit with two long ears and a crunchy orange carrot.",
    "learningPrompt": "Practice coloring inside the long ears. Will your bunny be snowy white, caramel brown, or spotted?",
    "suggestedColors": [{"name": "Snow White", "hex": "#FFFFFF"}, {"name": "Carrot Orange", "hex": "#FB923C"}, {"name": "Garden Leaf", "hex": "#4ADE80"}],
    "funFact": "Rabbits can hop forward nearly three meters in a single joyful leap called a binky!",
    "svgOutline": '<ellipse cx="250" cy="320" rx="90" ry="100" fill="none" stroke="#2D2D2D" stroke-width="8"/><circle cx="250" cy="210" r="65" fill="none" stroke="#2D2D2D" stroke-width="8"/><ellipse cx="215" cy="100" rx="22" ry="60" fill="none" stroke="#2D2D2D" stroke-width="8"/><ellipse cx="285" cy="100" rx="22" ry="60" fill="none" stroke="#2D2D2D" stroke-width="8"/><circle cx="225" cy="195" r="9" fill="#2D2D2D"/><circle cx="275" cy="195" r="9" fill="#2D2D2D"/><polygon points="250,215 242,225 258,225" fill="#2D2D2D"/><path d="M250,225 Q240,240 230,235 M250,225 Q260,240 270,235" fill="none" stroke="#2D2D2D" stroke-width="6" stroke-linecap="round"/><path d="M190,215 L140,210 M190,225 L145,230 M310,215 L360,210 M310,225 L355,230" fill="none" stroke="#2D2D2D" stroke-width="5" stroke-linecap="round"/><ellipse cx="190" cy="410" rx="35" ry="18" fill="none" stroke="#2D2D2D" stroke-width="8"/><ellipse cx="310" cy="410" rx="35" ry="18" fill="none" stroke="#2D2D2D" stroke-width="8"/>'
  },
  {
    "id": "monarch-butterfly",
    "title": "Fluttering Butterfly",
    "category": "animals",
    "emoji": "🦋",
    "difficulty": "Medium",
    "ageRecommendation": "All Ages",
    "description": "A beautiful garden butterfly with symmetrical decorative wings and curly antennae.",
    "learningPrompt": "Notice how the left wing mirrors the right wing! Symmetry means both sides are matching partners.",
    "suggestedColors": [{"name": "Bright Orange", "hex": "#F97316"}, {"name": "Sunny Yellow", "hex": "#FBBF24"}, {"name": "Velvet Indigo", "hex": "#6366F1"}],
    "funFact": "Butterflies taste sweet flower nectar with their tiny feet before sipping it through their long proboscis!",
    "svgOutline": '<ellipse cx="250" cy="250" rx="14" ry="90" fill="#2D2D2D"/><circle cx="250" cy="150" r="18" fill="#2D2D2D"/><path d="M245,135 Q220,90 195,100 M255,135 Q280,90 305,100" fill="none" stroke="#2D2D2D" stroke-width="6" stroke-linecap="round"/><path d="M236,180 C150,110 90,170 120,250 C135,290 190,270 236,250 Z" fill="none" stroke="#2D2D2D" stroke-width="8"/><path d="M264,180 C350,110 410,170 380,250 C365,290 310,270 264,250 Z" fill="none" stroke="#2D2D2D" stroke-width="8"/><path d="M236,260 C160,280 120,350 170,390 C210,410 236,330 236,310 Z" fill="none" stroke="#2D2D2D" stroke-width="8"/><path d="M264,260 C340,280 380,350 330,390 C290,410 264,330 264,310 Z" fill="none" stroke="#2D2D2D" stroke-width="8"/><circle cx="165" cy="200" r="16" fill="none" stroke="#2D2D2D" stroke-width="6"/><circle cx="335" cy="200" r="16" fill="none" stroke="#2D2D2D" stroke-width="6"/><circle cx="185" cy="340" r="14" fill="none" stroke="#2D2D2D" stroke-width="6"/><circle cx="315" cy="340" r="14" fill="none" stroke="#2D2D2D" stroke-width="6"/>'
  },
  {
    "id": "baby-t-rex",
    "title": "Friendly Baby T-Rex",
    "category": "animals",
    "emoji": "🦖",
    "difficulty": "Medium",
    "ageRecommendation": "All Ages",
    "description": "A smiling little prehistoric dinosaur walking on the ancient volcanic plains.",
    "learningPrompt": "What color do you think dinosaurs were? Green, purple, striped, or spotted like a lizard?",
    "suggestedColors": [{"name": "Emerald Green", "hex": "#10B981"}, {"name": "Lime Glow", "hex": "#84CC16"}, {"name": "Sunset Coral", "hex": "#F43F5E"}],
    "funFact": "Dinosaurs hatched from giant eggs millions of years ago, and modern birds are their closest relatives!",
    "svgOutline": '<path d="M160,180 C160,120 280,120 290,170 C295,190 280,210 250,210 C210,210 220,240 230,270 C240,300 320,290 350,330 C380,370 330,410 260,400 C210,390 170,330 170,270 Z" fill="none" stroke="#2D2D2D" stroke-width="8"/><circle cx="210" cy="155" r="10" fill="#2D2D2D"/><path d="M280,195 Q250,215 220,195" fill="none" stroke="#2D2D2D" stroke-width="6" stroke-linecap="round"/><path d="M210,285 Q170,295 180,315" fill="none" stroke="#2D2D2D" stroke-width="7" stroke-linecap="round"/><path d="M210,390 L210,440 L185,440 M270,390 L270,440 L245,440" fill="none" stroke="#2D2D2D" stroke-width="10" stroke-linecap="round"/><path d="M350,330 Q430,300 450,260 Q420,340 330,380" fill="none" stroke="#2D2D2D" stroke-width="8"/>'
  },

  # 2. Vehicles & Space
  {
    "id": "cosmic-rocket",
    "title": "Cosmic Rocket Ship",
    "category": "vehicles-space",
    "emoji": "🚀",
    "category": "vehicles-space",
    "difficulty": "Easy",
    "ageRecommendation": "All Ages",
    "description": "Blasting off into the galaxy with blazing rocket engines and viewing porthole window.",
    "learningPrompt": "Countdown with your child: 5, 4, 3, 2, 1, BLAST OFF! Who is riding inside this spaceship?",
    "suggestedColors": [{"name": "Flame Red", "hex": "#EF4444"}, {"name": "Cosmic White", "hex": "#F8FAFC"}, {"name": "Bright Gold", "hex": "#EAB308"}],
    "funFact": "Rockets must fly faster than 28,000 kilometers per hour to escape Earth\'s gravity into orbit!",
    "svgOutline": '<path d="M250,70 C290,140 310,240 300,340 L200,340 C190,240 210,140 250,70 Z" fill="none" stroke="#2D2D2D" stroke-width="8"/><circle cx="250" cy="210" r="35" fill="none" stroke="#2D2D2D" stroke-width="8"/><circle cx="250" cy="210" r="22" fill="none" stroke="#2D2D2D" stroke-width="5"/><path d="M200,270 L140,350 L200,340 Z" fill="none" stroke="#2D2D2D" stroke-width="8"/><path d="M300,270 L360,350 L300,340 Z" fill="none" stroke="#2D2D2D" stroke-width="8"/><path d="M220,340 Q250,440 250,440 Q250,440 280,340" fill="none" stroke="#2D2D2D" stroke-width="8" stroke-linecap="round"/><path d="M235,340 Q250,400 250,400 Q250,400 265,340" fill="none" stroke="#2D2D2D" stroke-width="6"/>'
  },
  {
    "id": "steam-locomotive",
    "title": "Chugga Chugga Steam Train",
    "category": "vehicles-space",
    "emoji": "🚂",
    "difficulty": "Medium",
    "ageRecommendation": "All Ages",
    "description": "A classic steam train with puffy smoke clouds, boiler engine, and rolling wheels.",
    "learningPrompt": "Choo choo! Ask your child where this train is traveling. Through mountains, past farms, or to town?",
    "suggestedColors": [{"name": "Engine Navy", "hex": "#1E3A8A"}, {"name": "Ruby Red", "hex": "#DC2626"}, {"name": "Brass Gold", "hex": "#CA8A04"}],
    "funFact": "Steam locomotives boiled water to make high-pressure steam that pushed giant steel pistons to turn the wheels!",
    "svgOutline": '<rect x="120" y="220" width="180" height="110" rx="10" fill="none" stroke="#2D2D2D" stroke-width="8"/><rect x="290" y="160" width="110" height="170" rx="10" fill="none" stroke="#2D2D2D" stroke-width="8"/><rect x="315" y="185" width="60" height="50" rx="5" fill="none" stroke="#2D2D2D" stroke-width="6"/><polygon points="120,240 70,330 120,330" fill="none" stroke="#2D2D2D" stroke-width="8"/><rect x="150" y="160" width="40" height="60" fill="none" stroke="#2D2D2D" stroke-width="8"/><circle cx="160" cy="370" r="32" fill="none" stroke="#2D2D2D" stroke-width="8"/><circle cx="240" cy="370" r="32" fill="none" stroke="#2D2D2D" stroke-width="8"/><circle cx="340" cy="370" r="40" fill="none" stroke="#2D2D2D" stroke-width="8"/><path d="M170,140 Q150,110 170,90 Q190,70 170,50" fill="none" stroke="#2D2D2D" stroke-width="6" stroke-linecap="round"/>'
  },
  {
    "id": "breeze-sailboat",
    "title": "Ocean Breeze Sailboat",
    "category": "vehicles-space",
    "emoji": "⛵",
    "difficulty": "Easy",
    "ageRecommendation": "Ages 2-4",
    "description": "Gliding on the peaceful blue waves with billowing triangular sails and fluttering pennant flag.",
    "learningPrompt": "Talk about how sailboats use wind energy to travel across deep water without any motor noise!",
    "suggestedColors": [{"name": "Ocean Cyan", "hex": "#06B6D4"}, {"name": "Sail White", "hex": "#FFFFFF"}, {"name": "Cherry Coral", "hex": "#F43F5E"}],
    "funFact": "Sailors can steer their boats into the wind by angling their sails in a zigzag pattern called tacking!",
    "svgOutline": '<polygon points="120,320 380,320 340,380 160,380" fill="none" stroke="#2D2D2D" stroke-width="8"/><line x1="240" y1="110" x2="240" y2="310" stroke="#2D2D2D" stroke-width="9"/><polygon points="230,130 230,300 130,290" fill="none" stroke="#2D2D2D" stroke-width="8"/><polygon points="250,140 250,300 350,300" fill="none" stroke="#2D2D2D" stroke-width="8"/><polygon points="240,110 240,85 275,98" fill="#2D2D2D"/><path d="M80,410 Q140,390 200,410 Q260,430 320,410 Q380,390 440,410" fill="none" stroke="#2D2D2D" stroke-width="7" stroke-linecap="round"/>'
  },

  # 3. Nature & Flowers
  {
    "id": "sunny-rainbow",
    "title": "Radiant Sun & Rainbow",
    "category": "nature-flowers",
    "emoji": "🌈",
    "difficulty": "Easy",
    "ageRecommendation": "All Ages",
    "description": "A happy smiling sun with radiating beams rising over a colorful arc rainbow and puffy clouds.",
    "learningPrompt": "Name the colors of the rainbow in order: Red, Orange, Yellow, Green, Blue, Indigo, and Violet!",
    "suggestedColors": [{"name": "Sunbeam Yellow", "hex": "#FACC15"}, {"name": "Rainbow Red", "hex": "#EF4444"}, {"name": "Sky Blue", "hex": "#38BDF8"}],
    "funFact": "Rainbows are actually complete full circles in the sky! We usually only see half from the ground.",
    "svgOutline": '<circle cx="150" cy="180" r="60" fill="none" stroke="#2D2D2D" stroke-width="8"/><circle cx="130" cy="170" r="8" fill="#2D2D2D"/><circle cx="170" cy="170" r="8" fill="#2D2D2D"/><path d="M135,195 Q150,215 165,195" fill="none" stroke="#2D2D2D" stroke-width="6" stroke-linecap="round"/><line x1="150" y1="90" x2="150" y2="110" stroke="#2D2D2D" stroke-width="8" stroke-linecap="round"/><line x1="150" y1="250" x2="150" y2="270" stroke="#2D2D2D" stroke-width="8" stroke-linecap="round"/><line x1="60" y1="180" x2="80" y2="180" stroke="#2D2D2D" stroke-width="8" stroke-linecap="round"/><line x1="220" y1="180" x2="240" y2="180" stroke="#2D2D2D" stroke-width="8" stroke-linecap="round"/><path d="M120,400 A200,200 0 0,1 420,400" fill="none" stroke="#2D2D2D" stroke-width="12"/><path d="M140,400 A180,180 0 0,1 400,400" fill="none" stroke="#2D2D2D" stroke-width="12"/><path d="M160,400 A160,160 0 0,1 380,400" fill="none" stroke="#2D2D2D" stroke-width="12"/><ellipse cx="380" cy="390" rx="60" ry="35" fill="none" stroke="#2D2D2D" stroke-width="8"/>'
  },
  {
    "id": "garden-sunflower",
    "title": "Giant Garden Sunflower",
    "category": "nature-flowers",
    "emoji": "🌻",
    "difficulty": "Easy",
    "ageRecommendation": "All Ages",
    "description": "A tall cheerful sunflower with blooming golden petals, lush leaves, and friendly face.",
    "learningPrompt": "Notice how sunflowers turn their faces toward the sun throughout the morning and afternoon!",
    "suggestedColors": [{"name": "Sunflower Gold", "hex": "#EAB308"}, {"name": "Cocoa Seed", "hex": "#78350F"}, {"name": "Meadow Green", "hex": "#22C55E"}],
    "funFact": "Young sunflowers follow the sun across the sky every single day in a natural phenomenon called heliotropism!",
    "svgOutline": '<circle cx="250" cy="190" r="55" fill="none" stroke="#2D2D2D" stroke-width="8"/><circle cx="230" cy="180" r="7" fill="#2D2D2D"/><circle cx="270" cy="180" r="7" fill="#2D2D2D"/><path d="M235,205 Q250,220 265,205" fill="none" stroke="#2D2D2D" stroke-width="5" stroke-linecap="round"/><path d="M250,120 Q240,80 250,60 Q260,80 250,120 M250,260 Q240,300 250,320 Q260,300 250,260 M180,190 Q140,180 120,190 Q140,200 180,190 M320,190 Q360,180 380,190 Q360,200 320,190 M200,140 Q170,110 150,110 Q160,130 200,140 M300,140 Q330,110 350,110 Q340,130 300,140 M200,240 Q170,270 150,270 Q160,250 200,240 M300,240 Q330,270 350,270 Q340,250 300,240" fill="none" stroke="#2D2D2D" stroke-width="7"/><path d="M250,320 L250,460" stroke="#2D2D2D" stroke-width="12" stroke-linecap="round"/><path d="M250,380 Q190,360 170,390 Q220,420 250,390" fill="none" stroke="#2D2D2D" stroke-width="8"/>'
  },

  # 4. Fantasy & Fairytale
  {
    "id": "royal-castle",
    "title": "Royal Fairytale Castle",
    "category": "fantasy-fairytale",
    "emoji": "🏰",
    "difficulty": "Medium",
    "ageRecommendation": "All Ages",
    "description": "A grand stone castle with tall spires, flying flags, battlements, and welcoming wooden drawbridge.",
    "learningPrompt": "Who lives in this magical castle? A king, a queen, a brave knight, or a friendly wizard?",
    "suggestedColors": [{"name": "Royal Purple", "hex": "#9333EA"}, {"name": "Stone Slate", "hex": "#64748B"}, {"name": "Gold Banner", "hex": "#F59E0B"}],
    "funFact": "Historic castles had thick stone walls and wide moats filled with water to keep all the villagers safe inside!",
    "svgOutline": '<rect x="170" y="240" width="160" height="150" fill="none" stroke="#2D2D2D" stroke-width="8"/><rect x="110" y="190" width="70" height="200" fill="none" stroke="#2D2D2D" stroke-width="8"/><rect x="320" y="190" width="70" height="200" fill="none" stroke="#2D2D2D" stroke-width="8"/><polygon points="110,190 145,100 180,190" fill="none" stroke="#2D2D2D" stroke-width="8"/><polygon points="320,190 355,100 390,190" fill="none" stroke="#2D2D2D" stroke-width="8"/><polygon points="215,240 250,150 285,240" fill="none" stroke="#2D2D2D" stroke-width="8"/><path d="M210,390 C210,320 290,320 290,390 Z" fill="none" stroke="#2D2D2D" stroke-width="8"/><line x1="145" y1="100" x2="145" y2="70" stroke="#2D2D2D" stroke-width="6"/><polygon points="145,70 145,90 175,80" fill="#2D2D2D"/><line x1="355" y1="100" x2="355" y2="70" stroke="#2D2D2D" stroke-width="6"/><polygon points="355,70 355,90 385,80" fill="#2D2D2D"/>'
  },
  {
    "id": "cuddly-teddy",
    "title": "Cuddly Teddy Bear",
    "category": "fantasy-fairytale",
    "emoji": "🧸",
    "difficulty": "Easy",
    "ageRecommendation": "Ages 2-4",
    "description": "A soft plush teddy bear wearing a fancy polka dot bow tie and warm friendly smile.",
    "learningPrompt": "Does your child have a favorite stuffed toy for bedtime? What color fur would make this bear cuddly?",
    "suggestedColors": [{"name": "Honey Brown", "hex": "#B45309"}, {"name": "Cream Tan", "hex": "#FDE68A"}, {"name": "Ruby Bow", "hex": "#E11D48"}],
    "funFact": "The very first teddy bear was created in 1902 and named in honor of nature-loving President Theodore Roosevelt!",
    "svgOutline": '<circle cx="250" cy="180" r="65" fill="none" stroke="#2D2D2D" stroke-width="8"/><circle cx="180" cy="125" r="28" fill="none" stroke="#2D2D2D" stroke-width="8"/><circle cx="320" cy="125" r="28" fill="none" stroke="#2D2D2D" stroke-width="8"/><circle cx="225" cy="165" r="9" fill="#2D2D2D"/><circle cx="275" cy="165" r="9" fill="#2D2D2D"/><ellipse cx="250" cy="195" rx="22" ry="15" fill="none" stroke="#2D2D2D" stroke-width="5"/><circle cx="250" cy="190" r="6" fill="#2D2D2D"/><path d="M250,196 L250,204 Q240,212 235,206 M250,204 Q260,212 265,206" fill="none" stroke="#2D2D2D" stroke-width="4"/><ellipse cx="250" cy="310" rx="80" ry="90" fill="none" stroke="#2D2D2D" stroke-width="8"/><ellipse cx="250" cy="320" rx="45" ry="55" fill="none" stroke="#2D2D2D" stroke-width="5"/><polygon points="250,240 220,225 220,255" fill="#2D2D2D"/><polygon points="250,240 280,225 280,255" fill="#2D2D2D"/><circle cx="250" cy="240" r="8" fill="#2D2D2D"/><ellipse cx="170" cy="380" rx="35" ry="25" fill="none" stroke="#2D2D2D" stroke-width="8"/><ellipse cx="330" cy="380" rx="35" ry="25" fill="none" stroke="#2D2D2D" stroke-width="8"/>'
  },

  # 5. Alphabet & Numbers Art
  {
    "id": "alphabet-a-apple",
    "title": "Letter A & Shiny Apple",
    "category": "alphabet-art",
    "emoji": "🍎",
    "difficulty": "Easy",
    "ageRecommendation": "All Ages",
    "description": "Uppercase Letter A next to a plump, juicy red apple with green leaf.",
    "learningPrompt": "Practice tracing the straight lines of Letter A with a finger first, then color the round red apple!",
    "suggestedColors": [{"name": "Apple Crimson", "hex": "#DC2626"}, {"name": "Stem Green", "hex": "#16A34A"}, {"name": "Letter Gold", "hex": "#F59E0B"}],
    "funFact": "There are over 7,500 different varieties of apples grown around the world, from sweet Gala to crisp Granny Smith!",
    "svgOutline": '<path d="M120,380 L180,120 L240,380 M145,290 L215,290" fill="none" stroke="#2D2D2D" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/><path d="M350,190 C320,190 280,230 280,310 C280,380 320,410 350,410 C380,410 420,380 420,310 C420,230 380,190 350,190 Z" fill="none" stroke="#2D2D2D" stroke-width="8"/><path d="M350,190 Q345,140 330,130" fill="none" stroke="#2D2D2D" stroke-width="7" stroke-linecap="round"/><path d="M345,160 Q390,140 380,165 Q355,175 345,160" fill="none" stroke="#2D2D2D" stroke-width="6"/>'
  },
  {
    "id": "number-1-sun",
    "title": "Number 1 & Radiant Sun",
    "category": "alphabet-art",
    "emoji": "☀️",
    "difficulty": "Easy",
    "ageRecommendation": "Ages 2-4",
    "description": "Bold Number 1 standing proudly next to our one singular shining sun.",
    "learningPrompt": "We have ONE shining sun in our solar system that brings light to all of planet Earth!",
    "suggestedColors": [{"name": "Warm Gold", "hex": "#F59E0B"}, {"name": "Cobalt Blue", "hex": "#2563EB"}, {"name": "Sunny Coral", "hex": "#FB7185"}],
    "funFact": "Number 1 is the first counting number and the foundation of all mathematical arithmetic!",
    "svgOutline": '<path d="M130,200 L180,150 L180,390 M130,390 L230,390" fill="none" stroke="#2D2D2D" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/><circle cx="340" cy="270" r="55" fill="none" stroke="#2D2D2D" stroke-width="8"/><line x1="340" y1="175" x2="340" y2="195" stroke="#2D2D2D" stroke-width="8" stroke-linecap="round"/><line x1="340" y1="345" x2="340" y2="365" stroke="#2D2D2D" stroke-width="8" stroke-linecap="round"/><line x1="245" y1="270" x2="265" y2="270" stroke="#2D2D2D" stroke-width="8" stroke-linecap="round"/><line x1="415" y1="270" x2="435" y2="270" stroke="#2D2D2D" stroke-width="8" stroke-linecap="round"/>'
  },

  # 6. Pakistani Heritage & Nature
  {
    "id": "crescent-star-flag",
    "title": "Crescent Moon & Star",
    "category": "cultural-pakistan",
    "emoji": "🇵🇰",
    "difficulty": "Easy",
    "ageRecommendation": "All Ages",
    "description": "The green and white crescent and five-pointed star symbol of peace, progress, and light.",
    "learningPrompt": "The crescent represents progress and the star represents light and knowledge for all children!",
    "suggestedColors": [{"name": "Pakistan Green", "hex": "#065F46"}, {"name": "Pure White", "hex": "#FFFFFF"}, {"name": "Golden Radiance", "hex": "#FBBF24"}],
    "funFact": "Pakistan\'s national flag features deep green representing peace and a crisp white stripe honoring all diverse communities!",
    "svgOutline": '<rect x="80" y="100" width="340" height="240" rx="15" fill="none" stroke="#2D2D2D" stroke-width="8"/><line x1="160" y1="100" x2="160" y2="340" stroke="#2D2D2D" stroke-width="8"/><path d="M300,165 A55,55 0 1,0 300,275 A45,45 0 1,1 300,165 Z" fill="none" stroke="#2D2D2D" stroke-width="7"/><polygon points="315,190 322,207 340,208 326,219 331,237 316,226 302,237 306,219 293,208 310,207" fill="none" stroke="#2D2D2D" stroke-width="5"/>'
  },
  {
    "id": "minar-e-pakistan",
    "title": "Minar-e-Pakistan Monument",
    "category": "cultural-pakistan",
    "emoji": "🏛️",
    "difficulty": "Medium",
    "ageRecommendation": "All Ages",
    "description": "The historic national tower in Iqbal Park Lahore with blooming petals base.",
    "learningPrompt": "Ask your child: Have you seen photos of this famous monument in Lahore? Its base is shaped like an unfolding flower!",
    "suggestedColors": [{"name": "Marble White", "hex": "#F8FAFC"}, {"name": "Park Lawn Green", "hex": "#10B981"}, {"name": "Sky Blue", "hex": "#38BDF8"}],
    "funFact": "Minar-e-Pakistan stands 70 meters tall in Greater Iqbal Park where the historic Lahore Resolution was passed in 1940!",
    "svgOutline": '<path d="M250,60 L240,270 L260,270 Z" fill="none" stroke="#2D2D2D" stroke-width="7"/><line x1="250" y1="40" x2="250" y2="60" stroke="#2D2D2D" stroke-width="6"/><circle cx="250" cy="38" r="5" fill="#2D2D2D"/><ellipse cx="250" cy="270" rx="35" ry="10" fill="none" stroke="#2D2D2D" stroke-width="6"/><ellipse cx="250" cy="330" rx="65" ry="15" fill="none" stroke="#2D2D2D" stroke-width="7"/><path d="M170,410 C190,340 220,330 250,330 C280,330 310,340 330,410 Z" fill="none" stroke="#2D2D2D" stroke-width="8"/><line x1="120" y1="410" x2="380" y2="410" stroke="#2D2D2D" stroke-width="10" stroke-linecap="round"/>'
  },
  {
    "id": "pakistan-mor-peacock",
    "title": "Majestic Peacock (Mor)",
    "category": "cultural-pakistan",
    "emoji": "🦚",
    "difficulty": "Creative",
    "ageTier": "All Ages",
    "ageRecommendation": "All Ages",
    "description": "A magnificent peacock displaying a radiant fan of emerald, turquoise, and violet feathers.",
    "learningPrompt": "Peacocks love to dance when the fresh monsoon rain arrives! Use bright blue, green, and gold for the feather eyes.",
    "suggestedColors": [{"name": "Royal Turquoise", "hex": "#0284C7"}, {"name": "Emerald Feather", "hex": "#059669"}, {"name": "Golden Glow", "hex": "#EAB308"}],
    "funFact": "The male peafowl is called a peacock, and each individual tail feather is marked with a shimmering oval eyespot!",
    "svgOutline": '<ellipse cx="250" cy="330" rx="35" ry="55" fill="none" stroke="#2D2D2D" stroke-width="8"/><circle cx="250" cy="245" r="24" fill="none" stroke="#2D2D2D" stroke-width="8"/><polygon points="250,250 240,255 250,260" fill="#2D2D2D"/><path d="M250,225 Q240,195 235,190 M250,225 Q250,190 250,185 M250,225 Q260,195 265,190" stroke="#2D2D2D" stroke-width="4"/><path d="M120,340 C100,180 400,180 380,340" fill="none" stroke="#2D2D2D" stroke-width="8"/><circle cx="170" cy="240" r="16" fill="none" stroke="#2D2D2D" stroke-width="6"/><circle cx="215" cy="180" r="16" fill="none" stroke="#2D2D2D" stroke-width="6"/><circle cx="285" cy="180" r="16" fill="none" stroke="#2D2D2D" stroke-width="6"/><circle cx="330" cy="240" r="16" fill="none" stroke="#2D2D2D" stroke-width="6"/>'
  },
  {
    "id": "chaunsa-mango-tree",
    "title": "Sweet Mango Tree",
    "category": "cultural-pakistan",
    "emoji": "🥭",
    "difficulty": "Easy",
    "ageRecommendation": "All Ages",
    "description": "A leafy green fruit tree laden with golden Pakistani Chaunsa and Sindhri mangoes.",
    "learningPrompt": "Mango is known as the King of Fruits in Pakistan! Have you tasted sweet golden mango slices in the summer?",
    "suggestedColors": [{"name": "Mango Golden", "hex": "#F59E0B"}, {"name": "Lush Green", "hex": "#15803D"}, {"name": "Tree Trunk Brown", "hex": "#78350F"}],
    "funFact": "Pakistan grows some of the sweetest mangoes in the world, including Chaunsa, Sindhri, and Anwar Ratol!",
    "svgOutline": '<path d="M220,440 L220,300 L280,300 L280,440" fill="none" stroke="#2D2D2D" stroke-width="12" stroke-linecap="round"/><path d="M160,300 C110,260 110,180 170,140 C210,100 290,100 330,140 C390,180 390,260 340,300 C300,340 200,340 160,300 Z" fill="none" stroke="#2D2D2D" stroke-width="8"/><path d="M180,220 C160,200 160,250 180,270 C200,280 210,240 180,220 Z" fill="none" stroke="#2D2D2D" stroke-width="6"/><path d="M310,210 C290,190 290,240 310,260 C330,270 340,230 310,210 Z" fill="none" stroke="#2D2D2D" stroke-width="6"/><path d="M240,160 C220,140 220,190 240,210 C260,220 270,180 240,160 Z" fill="none" stroke="#2D2D2D" stroke-width="6"/>'
  }
]

content = 'import { DrawingCategory, DrawingTemplate } from "../types";\n\n'
content += 'export interface DrawingCategoryInfo {\n'
content += '  id: DrawingCategory;\n'
content += '  label: string;\n'
content += '  icon: string;\n'
content += '  description: string;\n'
content += '}\n\n'
content += 'export const DRAWING_CATEGORIES: DrawingCategoryInfo[] = ' + json.dumps(categories, indent=2, ensure_ascii=False) + ';\n\n'
content += 'export const DRAWING_TEMPLATES: DrawingTemplate[] = ' + json.dumps(templates, indent=2, ensure_ascii=False) + ';\n\n'
content += 'export function getDrawingTemplateById(id: string): DrawingTemplate | undefined {\n'
content += '  return DRAWING_TEMPLATES.find(t => t.id === id);\n'
content += '}\n\n'
content += 'export function getDrawingTemplatesByCategory(category: DrawingCategory): DrawingTemplate[] {\n'
content += '  return DRAWING_TEMPLATES.filter(t => t.category === category);\n'
content += '}\n'

with open("src/data/drawingsData.ts", "w", encoding="utf-8") as f:
    f.write(content)

print(f"Created src/data/drawingsData.ts with {len(templates)} templates and {len(categories)} categories!")
