import { CodingLanguageDetail, AgeTier } from '../types';

export const CODING_LANGUAGES: CodingLanguageDetail[] = [
  // ==========================================
  // 1. HTML
  // ==========================================
  {
    id: 'html',
    name: 'HTML (HyperText Markup Language)',
    shortName: 'HTML',
    tagline: 'The Skeleton & Building Blocks of Every Website in the World!',
    icon: '🧱',
    badgeBg: 'bg-orange-100 text-orange-800 border-orange-300',
    borderAccent: '#F97316',
    primaryColor: '#F97316',
    tierRecommended: ['kindergarten', 'grade-1-2', 'k12-foundations'],
    recommendedAgeLabel: 'Ages 5-12+',
    difficultyLabel: 'Beginner Friendly',
    kidAnalogy: {
      title: 'The Skeleton & Bricks 🦴',
      explanation: 'Imagine building a toy house. HTML is the wooden frame, the brick walls, and the roof. Without HTML, there is no place to hang posters or install doors!',
      emoji: '🏗️'
    },
    whyKidsLoveIt: 'Within 5 seconds of typing a tag like <h1> or <button>, you can see your own real web page right in front of your eyes!',
    whatItBuilds: [
      'Websites like YouTube, Roblox.com, and Wikipedia',
      'Buttons, pictures, text titles, and secret links',
      'Web games and interactive stories'
    ],
    famousThingsBuiltWithIt: ['Every website you have ever clicked on!', 'Online game menus', 'Interactive comic books'],
    bigIdeas: [
      {
        term: 'Tags & Elements',
        meaning: 'Commands wrapped in angle brackets like <p> and </p> that tell the browser what kind of content to display.',
        kidExample: '<h1>Big Title</h1> makes giant bold words!'
      },
      {
        term: 'Attributes',
        meaning: 'Extra superpowers given to a tag, like giving an image a source URL or a button a color.',
        kidExample: '<img src="rocket.png" alt="Blast off!">'
      },
      {
        term: 'Nesting',
        meaning: 'Placing tags inside other tags, just like Russian nesting dolls or boxes inside boxes.',
        kidExample: '<button><b>Click Me Fast!</b></button>'
      }
    ],
    starterCode: `<div class="card">
  <h1>🚀 Nova Space Explorer Club</h1>
  <p>Welcome to our interstellar coding club! Grab your space helmet and prepare for launch.</p>
  <button>Join the Crew 🌟</button>
</div>`,
    starterCssCode: `.card {
  background: #FFF9E6;
  border: 4px solid #F97316;
  border-radius: 20px;
  padding: 24px;
  text-align: center;
  font-family: sans-serif;
}
h1 {
  color: #EA580C;
  font-size: 24px;
  margin-bottom: 12px;
}
p {
  color: #475569;
  font-size: 16px;
  line-height: 1.5;
}
button {
  background: #F97316;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 14px;
}`,
    interactiveTemplates: [
      {
        id: 'html-pet-badge',
        name: '🐶 Digital Pet ID Badge',
        description: 'Build a cute adoption certificate for your favorite puppy or kitten.',
        code: `<div class="pet-badge">
  <h2>🐾 Sparky the Cyber Pup</h2>
  <p class="tagline">Level 5 Good Boy & Certified Bug Catcher</p>
  <div class="stats">
    <span>🦴 Bones: 42</span> | <span>⚡ Speed: 99</span>
  </div>
  <button>Give Sparky a Treat! 🍖</button>
</div>`,
        cssCode: `.pet-badge {
  background: #FEF3C7;
  border: 4px dashed #D97706;
  border-radius: 24px;
  padding: 20px;
  text-align: center;
  font-family: sans-serif;
}
h2 { color: #92400E; margin-bottom: 4px; }
.tagline { color: #B45309; font-weight: bold; }
.stats { margin: 12px 0; font-size: 18px; color: #451A03; }
button {
  background: #D97706;
  color: white;
  padding: 10px 20px;
  border-radius: 14px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  cursor: pointer;
}`
      },
      {
        id: 'html-superhero-card',
        name: '🦸 Super Coder Hero Profile',
        description: 'Create an official secret agent superhero dossier card.',
        code: `<div class="hero-card">
  <div class="hero-badge">TOP SECRET</div>
  <h1>⚡ Captain Algorithm</h1>
  <p><strong>Superpower:</strong> Solves tricky code bugs at light speed!</p>
  <p><strong>Weakness:</strong> Cold pizza & tangled cables.</p>
  <button>Activate Photon Shield 🛡️</button>
</div>`,
        cssCode: `.hero-card {
  background: #1E293B;
  color: white;
  border: 4px solid #38BDF8;
  border-radius: 20px;
  padding: 24px;
  text-align: center;
  font-family: sans-serif;
}
.hero-badge {
  display: inline-block;
  background: #EF4444;
  color: white;
  font-weight: 900;
  font-size: 11px;
  padding: 4px 10px;
  border-radius: 6px;
  letter-spacing: 1px;
}
h1 { color: #38BDF8; margin: 12px 0 8px; }
p { color: #CBD5E1; margin: 6px 0; }
button {
  background: #38BDF8;
  color: #0F172A;
  border: none;
  padding: 12px 20px;
  border-radius: 12px;
  font-weight: 900;
  cursor: pointer;
  margin-top: 14px;
}`
      },
      {
        id: 'html-pizza-menu',
        name: '🍕 Galactic Pizza Parlor Menu',
        description: 'Design a delicious cosmic pizza menu with buttons to order.',
        code: `<div class="menu-box">
  <h2>🪐 Saturn Slice Pizzeria</h2>
  <p>Best cheese in this quadrant of the galaxy!</p>
  <ul>
    <li>🌟 Asteroid Pepperoni - 10 Space Credits</li>
    <li>🧀 Supernova 4-Cheese - 8 Space Credits</li>
    <li>🍄 Moon Mushroom Crunch - 9 Space Credits</li>
  </ul>
  <button>Order Cosmic Delivery 🚀</button>
</div>`,
        cssCode: `.menu-box {
  background: #FFF1F2;
  border: 4px solid #E11D48;
  border-radius: 20px;
  padding: 20px;
  font-family: sans-serif;
}
h2 { color: #BE123C; text-align: center; margin-bottom: 6px; }
p { color: #881337; text-align: center; font-style: italic; }
ul { list-style: none; padding: 0; margin: 16px 0; }
li {
  background: white;
  padding: 10px 14px;
  margin-bottom: 8px;
  border-radius: 10px;
  font-weight: bold;
  color: #9F1239;
  border: 2px solid #FECDD3;
}
button {
  display: block;
  width: 100%;
  background: #E11D48;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 12px;
  font-weight: bold;
  cursor: pointer;
}`
      }
    ],
    curriculumParentNote: 'For early elementary students, HTML offers immediate visual gratification. It teaches tag syntax, semantic naming, and hierarchical nesting without the stress of mathematical logic.',
    quickQuiz: {
      question: 'Which HTML tag creates the largest, boldest heading on a page?',
      options: ['<p>', '<h1>', '<button>', '<h6>'],
      correctIndex: 1,
      explanation: '<h1> stands for "Heading 1" and creates the main header of a webpage! <p> is for normal paragraph text.'
    },
    handsOnChallenge: {
      id: 'html-chal-1',
      title: 'Mission: Add a Secret Robot Button',
      prompt: 'Add a new <button> tag that says "Beep Boop Activate!" inside the container!',
      starterCode: `<div class="robot-lab">
  <h2>🤖 Robot Workshop</h2>
  <p>Assemble your companion below.</p>
  <!-- Write your new button tag here: -->
  
</div>`,
      starterCssCode: `.robot-lab {
  background: #F0FDF4;
  border: 4px solid #22C55E;
  border-radius: 20px;
  padding: 20px;
  text-align: center;
  font-family: sans-serif;
}
h2 { color: #15803D; }
button {
  background: #22C55E;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
}`,
      hint: 'Type <button>Beep Boop Activate!</button>',
      solutionCode: `<div class="robot-lab">
  <h2>🤖 Robot Workshop</h2>
  <p>Assemble your companion below.</p>
  <button>Beep Boop Activate!</button>
</div>`,
      solutionCssCode: `.robot-lab {
  background: #F0FDF4;
  border: 4px solid #22C55E;
  border-radius: 20px;
  padding: 20px;
  text-align: center;
  font-family: sans-serif;
}
h2 { color: #15803D; }
button {
  background: #22C55E;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
}`,
      checkExplanation: 'Great job! Your <button> tag is now active and clickable.',
      requiredKeywords: ['<button', '</button>']
    }
  },

  // ==========================================
  // 2. CSS
  // ==========================================
  {
    id: 'css',
    name: 'CSS (Cascading Style Sheets)',
    shortName: 'CSS',
    tagline: 'The Wardrobe, Colors, Neon Glow & Magic Animations of the Web!',
    icon: '🎨',
    badgeBg: 'bg-blue-100 text-blue-800 border-blue-300',
    borderAccent: '#3B82F6',
    primaryColor: '#3B82F6',
    tierRecommended: ['kindergarten', 'grade-1-2', 'k12-foundations'],
    recommendedAgeLabel: 'Ages 5-12+',
    difficultyLabel: 'Beginner Friendly',
    kidAnalogy: {
      title: 'The Outfits & Magic Paint 👗🎨',
      explanation: 'If HTML is a blank gingerbread cookie, CSS is the bright icing, rainbow sprinkles, chocolate chips, and candy smile that makes it spectacular!',
      emoji: '✨'
    },
    whyKidsLoveIt: 'Change a word from "red" to "lime" or change border-radius from 0 to 50% and watch straight shapes instantly turn into round bubbles!',
    whatItBuilds: [
      'Bouncy button animations and hover sparkles',
      'Dark mode vs Light mode themes',
      'Rainbow gradients and 3D card shadows'
    ],
    famousThingsBuiltWithIt: ['TikTok button pulse animations', 'Discord gaming themes', 'Animated character cards'],
    bigIdeas: [
      {
        term: 'Selectors',
        meaning: 'Tells CSS which HTML elements you want to dress up (e.g. h1, button, or .card).',
        kidExample: 'button { ... } styles all buttons on the page!'
      },
      {
        term: 'Properties & Values',
        meaning: 'The specific feature you are changing (like color) and what you set it to (like gold).',
        kidExample: 'background-color: #FFD700;'
      },
      {
        term: 'Hover Effects & Animations',
        meaning: 'Superpowers that make elements jump, glow, or rotate when the mouse hovers over them.',
        kidExample: 'button:hover { transform: scale(1.1); }'
      }
    ],
    starterCode: `<div class="magic-crystal">
  <div class="crystal-icon">💎</div>
  <h2>Mythic Power Gem</h2>
  <p>Hover over this button to see CSS magic happen!</p>
  <button class="glow-btn">Claim 100 Mana ✨</button>
</div>`,
    starterCssCode: `.magic-crystal {
  background: linear-gradient(135deg, #1E1B4B 0%, #312E81 100%);
  border: 4px solid #818CF8;
  border-radius: 28px;
  padding: 28px;
  text-align: center;
  color: white;
  font-family: sans-serif;
  box-shadow: 0 10px 25px rgba(99, 102, 241, 0.4);
}
.crystal-icon {
  font-size: 48px;
  animation: float 2s ease-in-out infinite alternate;
}
@keyframes float {
  from { transform: translateY(0px); }
  to { transform: translateY(-10px); }
}
h2 {
  color: #C7D2FE;
  margin: 10px 0;
}
p {
  color: #E0E7FF;
  font-size: 15px;
}
.glow-btn {
  background: #6366F1;
  color: white;
  border: 3px solid #A5B4FC;
  padding: 12px 24px;
  border-radius: 16px;
  font-size: 16px;
  font-weight: 900;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 16px;
}
.glow-btn:hover {
  background: #4F46E5;
  transform: scale(1.08) rotate(-2deg);
  box-shadow: 0 0 20px #818CF8;
}`,
    interactiveTemplates: [
      {
        id: 'css-neon-sign',
        name: '🌈 Cyberpunk Neon Arcade Sign',
        description: 'Use glowing text-shadows and vibrant borders for a retro arcade sign.',
        code: `<div class="arcade-sign">
  <h1 class="neon-text">ARCADE ZONE</h1>
  <p class="blink">INSERT COIN TO PLAY</p>
  <button class="neon-btn">PRESS START 🕹️</button>
</div>`,
        cssCode: `.arcade-sign {
  background: #09090B;
  border: 4px solid #EC4899;
  border-radius: 24px;
  padding: 24px;
  text-align: center;
  font-family: monospace;
  box-shadow: 0 0 30px rgba(236, 72, 153, 0.5);
}
.neon-text {
  color: #F472B6;
  font-size: 32px;
  text-shadow: 0 0 10px #EC4899, 0 0 20px #DB2777;
  letter-spacing: 4px;
}
.blink {
  color: #38BDF8;
  font-size: 14px;
  letter-spacing: 2px;
}
.neon-btn {
  background: transparent;
  color: #A855F7;
  border: 3px solid #A855F7;
  padding: 10px 24px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 14px;
}
.neon-btn:hover {
  background: #A855F7;
  color: black;
  box-shadow: 0 0 20px #C084FC;
}`
      },
      {
        id: 'css-bouncy-slime',
        name: '🧪 Bouncy Jelly Monster',
        description: 'Create an adorable jelly slime using border-radius and squash-stretch animations.',
        code: `<div class="slime-cage">
  <div class="slime">
    <div class="eyes">👀</div>
    <div class="mouth">👄</div>
  </div>
  <h3>Bubbles the Slime</h3>
</div>`,
        cssCode: `.slime-cage {
  background: #ECFDF5;
  border: 4px solid #10B981;
  border-radius: 24px;
  padding: 24px;
  text-align: center;
  font-family: sans-serif;
}
.slime {
  width: 120px;
  height: 100px;
  background: #34D399;
  border-radius: 50% 50% 40% 40%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 10px 15px rgba(16, 185, 129, 0.3);
  animation: bounce 1.2s infinite ease-in-out alternate;
}
@keyframes bounce {
  0% { transform: scale(1, 1) translateY(0); }
  50% { transform: scale(1.1, 0.9) translateY(8px); }
  100% { transform: scale(0.9, 1.1) translateY(-14px); }
}
.eyes { font-size: 24px; }
.mouth { font-size: 14px; }
h3 { color: #065F46; margin-top: 16px; }`
      }
    ],
    curriculumParentNote: 'CSS nurtures artistic expression and visual-spatial intuition. By tweaking color hex codes, padding, and animations, children connect math measurements (pixels and percentages) directly to visual art.',
    quickQuiz: {
      question: 'Which CSS property changes the color of the text words?',
      options: ['background-color', 'color', 'border-color', 'font-weight'],
      correctIndex: 1,
      explanation: 'The `color` property sets the text color! `background-color` changes the color behind the words.'
    },
    handsOnChallenge: {
      id: 'css-chal-1',
      title: 'Mission: Make the Badge Golden',
      prompt: 'Change the background color of the trophy badge to gold or yellow (#F59E0B)!',
      starterCode: `<div class="trophy-badge">
  🏆 Gold Medalist!
</div>`,
      starterCssCode: `.trophy-badge {
  background: #E2E8F0;
  color: #1E293B;
  border: 4px solid #94A3B8;
  border-radius: 20px;
  padding: 20px;
  text-align: center;
  font-size: 20px;
  font-weight: 900;
  font-family: sans-serif;
}`,
      hint: 'In the CSS, find `background: #E2E8F0;` and change the color code to #F59E0B or gold!',
      solutionCode: `<div class="trophy-badge">
  🏆 Gold Medalist!
</div>`,
      solutionCssCode: `.trophy-badge {
  background: #F59E0B;
  color: #FFFFFF;
  border: 4px solid #D97706;
  border-radius: 20px;
  padding: 20px;
  text-align: center;
  font-size: 20px;
  font-weight: 900;
  font-family: sans-serif;
}`,
      checkExplanation: 'Incredible styling! The gold background makes the trophy shine brightly.',
      requiredKeywords: ['#F59E0B', 'gold', 'yellow', '#FBBF24', '#F59E0b']
    }
  },

  // ==========================================
  // 3. JAVASCRIPT
  // ==========================================
  {
    id: 'javascript',
    name: 'JavaScript (JS)',
    shortName: 'JavaScript',
    tagline: 'The Muscles, Lightning Reflexes & Brain of Web Apps!',
    icon: '⚡',
    badgeBg: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    borderAccent: '#EAB308',
    primaryColor: '#EAB308',
    tierRecommended: ['grade-1-2', 'k12-foundations'],
    recommendedAgeLabel: 'Ages 6-12+',
    difficultyLabel: 'Elementary Starter',
    kidAnalogy: {
      title: 'The Muscles & Brain 🧠⚡',
      explanation: 'If HTML is the doll and CSS is the dress, JavaScript is the magic spell that makes the doll dance, count coins, speak out loud, and jump when you press spacebar!',
      emoji: '🪄'
    },
    whyKidsLoveIt: 'You can write 3 lines of JavaScript and instantly create a playable cookie-clicker game or play real sound effects on your computer!',
    whatItBuilds: [
      'Interactive games like 2048, Wordle, and Flappy Bird',
      'Shopping carts and live scoreboards',
      'Discord bots and smartphone apps'
    ],
    famousThingsBuiltWithIt: ['Google Maps pin dragging', 'Minecraft Classic in browser', 'Every interactive website feature'],
    bigIdeas: [
      {
        term: 'Variables (let / const)',
        meaning: 'Named storage boxes that hold scores, names, or items.',
        kidExample: 'let score = 0; score = score + 5;'
      },
      {
        term: 'Functions',
        meaning: 'Reusable action spells with a name that you can cast anytime.',
        kidExample: 'function jump() { player.y += 10; }'
      },
      {
        term: 'Event Listeners (Clicks & Taps)',
        meaning: 'The computer ears waiting for the player to press a key or tap a button.',
        kidExample: 'button.addEventListener("click", giveStar);'
      }
    ],
    starterCode: `// ⭐ Cookie Clicker Logic in JavaScript!
let cookieCount = 0;

function bakeCookie() {
  cookieCount = cookieCount + 1;
  console.log("🍪 Yum! You now have " + cookieCount + " cookies!");
  if (cookieCount === 5) {
    console.log("🎉 Level Up! You unlocked the Chocolate Fountain!");
  }
}

// Bake 5 cookies!
for (let i = 0; i < 5; i++) {
  bakeCookie();
}`,
    interactiveTemplates: [
      {
        id: 'js-magic-8ball',
        name: '🎱 Magic 8-Ball Oracle',
        description: 'Randomized fortune teller using Math.random() and arrays.',
        code: `// Magic 8-Ball Oracle
const fortunes = [
  "🌟 Yes, definitely!",
  "🚀 Signs point to YES!",
  "🤔 Ask again after eating a snack.",
  "✨ Your future looks super bright!",
  "🐱 A cyber-cat agrees!"
];

function askQuestion(question) {
  console.log("❓ You asked: " + question);
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  console.log("🎱 The Magic 8-Ball says: " + fortunes[randomIndex]);
}

askQuestion("Will I become a master coder today?");`
      },
      {
        id: 'js-dragon-battle',
        name: '🐉 Dragon Health Battle Sim',
        description: 'Turn-based RPG battle loop with variables and if/else checks.',
        code: `// Dragon Boss Battle Loop
let dragonHealth = 100;
let playerSpells = ["Fireball (30 dmg)", "Ice Spear (25 dmg)", "Lightning Bolt (40 dmg)"];

console.log("🔥 Wild Flame Dragon appeared! HP: " + dragonHealth);

function castSpell(spellName, damage) {
  dragonHealth = dragonHealth - damage;
  if (dragonHealth < 0) dragonHealth = 0;
  console.log("⚡ Cast " + spellName + "! Dragon HP is now: " + dragonHealth);
  
  if (dragonHealth === 0) {
    console.log("🏆 VICTORY! The dragon flew away and dropped 100 Gold Coins!");
  }
}

castSpell("Lightning Bolt", 40);
castSpell("Fireball", 30);
castSpell("Lightning Bolt", 40);`
      }
    ],
    curriculumParentNote: 'JavaScript provides elementary coders their first taste of real imperative programming: sequencing, variable state mutation, conditionals, and functions that run directly in any web browser.',
    quickQuiz: {
      question: 'In JavaScript, how do you print a message to the secret developer console?',
      options: ['print.message()', 'console.log("Hello!");', 'speak("Hello!");', 'show.words()'],
      correctIndex: 1,
      explanation: '`console.log("Hello!");` is the standard way JavaScript sends messages to the output log.'
    },
    handsOnChallenge: {
      id: 'js-chal-1',
      title: 'Mission: Level Up the Hero',
      prompt: 'Increase the heroLevel variable by adding 1 to it!',
      starterCode: `let heroLevel = 1;
// Your code here: Add 1 to heroLevel

console.log("Hero level is: " + heroLevel);`,
      hint: 'Type: heroLevel = heroLevel + 1; or heroLevel++;',
      solutionCode: `let heroLevel = 1;
heroLevel = heroLevel + 1;
console.log("Hero level is: " + heroLevel);`,
      checkExplanation: 'Level up achieved! Your variable math incremented smoothly.',
      requiredKeywords: ['heroLevel', '+']
    }
  },

  // ==========================================
  // 4. PYTHON
  // ==========================================
  {
    id: 'python',
    name: 'Python',
    shortName: 'Python',
    tagline: 'The Friendly, Readable Giant of Artificial Intelligence, Data & Games!',
    icon: '🐍',
    badgeBg: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    borderAccent: '#10B981',
    primaryColor: '#10B981',
    tierRecommended: ['grade-1-2', 'k12-foundations'],
    recommendedAgeLabel: 'Ages 7-12+',
    difficultyLabel: 'Elementary Starter',
    kidAnalogy: {
      title: 'The Friendly English Storyteller 📖🐍',
      explanation: 'Python code reads almost exactly like simple English sentences! Instead of complicated brackets and semicolons, it uses clean spaces so beginners can write programs quickly.',
      emoji: '🌿'
    },
    whyKidsLoveIt: 'It is so readable you can understand what a program does on your very first day! Plus, it is used by scientists at NASA and engineers at Pixar.',
    whatItBuilds: [
      'Artificial Intelligence & Smart Chatbots',
      'Robotics and Raspberry Pi hardware gadgets',
      'Data charts tracking rocket orbits and animal migrations'
    ],
    famousThingsBuiltWithIt: ['NASA James Webb Space Telescope data analysis', 'Instagram backend systems', 'YouTube video recommenders'],
    bigIdeas: [
      {
        term: 'Indentation (Clean Spaces)',
        meaning: 'Python uses tidy indented tabs to know which lines belong inside loops and if statements.',
        kidExample: 'if stars > 3:\n    print("You win!")'
      },
      {
        term: 'Lists & For Loops',
        meaning: 'Store backpacks full of items and easily do something for every item.',
        kidExample: 'for pet in ["Cat", "Dog", "Bunny"]:\n    print(pet)'
      },
      {
        term: 'Print & Input',
        meaning: 'Talking to the user: print shows text, input asks the user for an answer.',
        kidExample: 'name = "Alex"\nprint(f"Welcome, {name}!")'
      }
    ],
    starterCode: `# 🐍 Welcome to Python Space Explorer!
crew_members = ["Nova Rocket", "Beep-0 Robot", "Pixel Cyber-Cat"]
stars_collected = 15

print("🚀 Launching Spaceship Odyssey...")
for astronaut in crew_members:
    print(f"  👨‍🚀 Ready for duty: {astronaut}")

if stars_collected >= 10:
    print(f"✨ Warp Drive ENGAGED! Total Stars: {stars_collected}")
else:
    print("Need more stars to warp!")`,
    interactiveTemplates: [
      {
        id: 'python-robot-chef',
        name: '🍳 Robot Chef Recipe Bot',
        description: 'A fun kitchen script that mixes ingredients into wacky smoothies.',
        code: `# 🍳 Robo-Chef Smoothie Generator
import random

fruits = ["Banana", "Strawberry", "Dragonfruit", "Blueberry", "Mango"]
magic_boosts = ["Rainbow Sparkles", "Meteor Ice", "Honey Glow", "Galaxy Mint"]

def make_smoothie(name):
    fruit_1 = "Strawberry"
    fruit_2 = "Mango"
    boost = "Rainbow Sparkles"
    print("=" * 35)
    print(f"🍹 Fresh Blend for: {name}")
    print(f"   Ingredients: {fruit_1} + {fruit_2}")
    print(f"   Special Boost: {boost}")
    print("   Delicious rating: 10/10 ⭐")
    print("=" * 35)

make_smoothie("Commander Pippin")`
      },
      {
        id: 'python-guess-number',
        name: '🎯 Number Guessing Game Logic',
        description: 'Simulates a classic high-low guessing game loop.',
        code: `# 🎯 Secret Number Clue Game
secret_number = 7
guesses = [3, 9, 7]

print("🤖 Robot: I am thinking of a number between 1 and 10!")

for attempt, guess in enumerate(guesses, start=1):
    print(f"Attempt #{attempt}: You guessed {guess}...")
    if guess < secret_number:
        print("   📉 Too low! Aim higher.")
    elif guess > secret_number:
        print("   📈 Too high! Aim lower.")
    else:
        print("   🎉 BINGO! You guessed the secret number 7!")
        break`
      }
    ],
    curriculumParentNote: 'Python is the global standard for teaching text-based programming to students. Its syntactic simplicity allows young coders to focus on algorithmic thought rather than syntax frustration.',
    quickQuiz: {
      question: 'How do you print words to the screen in Python?',
      options: ['echo "Hello"', 'print("Hello")', 'System.out.println("Hello")', 'write.line("Hello")'],
      correctIndex: 1,
      explanation: 'In Python, `print("Hello")` prints the message straight to the output screen!'
    },
    handsOnChallenge: {
      id: 'python-chal-1',
      title: 'Mission: Print a Friendly Greeting',
      prompt: 'Use the print() function to say: "Hello Python!"',
      starterCode: `# Write your print statement below:
`,
      hint: 'Type: print("Hello Python!")',
      solutionCode: `print("Hello Python!")`,
      checkExplanation: 'Well done! Python received your command and executed the print statement.',
      requiredKeywords: ['print', 'Hello']
    }
  },

  // ==========================================
  // 5. C++
  // ==========================================
  {
    id: 'cpp',
    name: 'C++ (C-Plus-Plus)',
    shortName: 'C++',
    tagline: 'The Supersonic Rocket Engine Behind High-Speed Video Games & Spacecraft!',
    icon: '🚀',
    badgeBg: 'bg-indigo-100 text-indigo-800 border-indigo-300',
    borderAccent: '#6366F1',
    primaryColor: '#6366F1',
    tierRecommended: ['k12-foundations'],
    recommendedAgeLabel: 'Ages 8-12+',
    difficultyLabel: 'Advanced Game Engine',
    kidAnalogy: {
      title: 'The Supersonic Jet Engine 🏎️💨',
      explanation: 'If other languages are bicycles or family cars, C++ is a supersonic Formula 1 racing jet! It gives programmers direct control over the computer memory to make games run at 120 frames per second.',
      emoji: '⚡'
    },
    whyKidsLoveIt: 'It is the exact secret language used to make Minecraft Bedrock edition, Unreal Engine games, PlayStation 5 graphics, and Nintendo Switch titles!',
    whatItBuilds: [
      'Big 3D AAA video games (Minecraft, Fortnite, Rocket League)',
      'High-speed physics engines and flight simulators',
      'Mars rovers and self-driving cars'
    ],
    famousThingsBuiltWithIt: ['Minecraft (Bedrock / console version)', 'Unreal Engine 5', 'NASA Mars Curiosity Rover software'],
    bigIdeas: [
      {
        term: 'High Speed & Memory Control',
        meaning: 'C++ talks directly to computer hardware with almost zero delay.',
        kidExample: 'Renders 10,000 fireworks on screen without lagging!'
      },
      {
        term: 'Strong Types (int, double, string)',
        meaning: 'You must tell C++ exactly what kind of item every variable holds so the computer can prepare memory.',
        kidExample: 'int playerHealth = 100;'
      },
      {
        term: 'std::cout (Console Output)',
        meaning: 'Character Output: the C++ stream pipe that sends text to your monitor.',
        kidExample: 'std::cout << "Level Complete!" << std::endl;'
      }
    ],
    starterCode: `// 🚀 C++ High-Speed Game Loop
#include <iostream>
#include <string>

int main() {
    std::string playerName = "Nova";
    int playerHP = 100;
    int damageTaken = 25;

    std::cout << "=== C++ GAME ENGINE ONLINE ===" << std::endl;
    std::cout << "Player: " << playerName << " | HP: " << playerHP << std::endl;

    playerHP -= damageTaken;
    std::cout << "💥 Hit by asteroid! Remaining HP: " << playerHP << std::endl;

    if (playerHP > 0) {
        std::cout << "🛡️ Shields holding! Continuing supersonic flight!" << std::endl;
    }
    return 0;
}`,
    interactiveTemplates: [
      {
        id: 'cpp-game-physics',
        name: '🏎️ High-Speed FPS & Physics Counter',
        description: 'See how C++ computes thousands of particle updates per frame.',
        code: `// C++ Physics Engine Simulation
#include <iostream>

int main() {
    int totalParticles = 50000;
    double renderTimeMilliseconds = 0.004;

    std::cout << "Simulating 3D Physics..." << std::endl;
    std::cout << "Particles updated: " << totalParticles << std::endl;
    std::cout << "Frame processing time: " << renderTimeMilliseconds << " ms!" << std::endl;
    std::cout << "FPS: 240 frames per second (SILKY SMOOTH!)" << std::endl;

    return 0;
}`
      },
      {
        id: 'cpp-inventory',
        name: '🎒 RPG Inventory Vector System',
        description: 'Managing a warrior inventory with typed structs and arrays.',
        code: `// C++ RPG Inventory System
#include <iostream>
#include <string>

int main() {
    std::string items[3] = {"Diamond Sword", "Health Potion", "Golden Apple"};
    int gold = 250;

    std::cout << "--- HERO BACKPACK ---" << std::endl;
    for (int i = 0; i < 3; i++) {
        std::cout << "[" << (i + 1) << "] " << items[i] << std::endl;
    }
    std::cout << "Total Gold: " << gold << " coins" << std::endl;

    return 0;
}`
      }
    ],
    curriculumParentNote: 'For advanced learners in Grade 3-5 and K-12 foundations, discovering C++ demystifies how video games operate under the hood and introduces the concepts of typed variables, memory efficiency, and compilation.',
    quickQuiz: {
      question: 'Which of the following is written in C++ for maximum speed?',
      options: ['Minecraft Bedrock Edition', 'A simple shopping cart', 'A static text document', 'A basic calculator email'],
      correctIndex: 0,
      explanation: 'Minecraft Bedrock is written in C++ so it can run super fast across phones, tablets, Xbox, and Nintendo Switch!'
    },
    handsOnChallenge: {
      id: 'cpp-chal-1',
      title: 'Mission: Output a Victory Message',
      prompt: 'Use std::cout to print "Victory!" in C++.',
      starterCode: `#include <iostream>

int main() {
    // Write your std::cout command below:
    
    return 0;
}`,
      hint: 'Type: std::cout << "Victory!" << std::endl;',
      solutionCode: `#include <iostream>

int main() {
    std::cout << "Victory!" << std::endl;
    return 0;
}`,
      checkExplanation: 'Superb C++ code! The stream operator piped your message out with blazing speed.',
      requiredKeywords: ['std::cout', 'Victory']
    }
  },

  // ==========================================
  // 6. C# (C-SHARP)
  // ==========================================
  {
    id: 'csharp',
    name: 'C# (C-Sharp)',
    shortName: 'C#',
    tagline: 'The Magical Game Developer Language for Unity 3D & Virtual Worlds!',
    icon: '🎮',
    badgeBg: 'bg-purple-100 text-purple-800 border-purple-300',
    borderAccent: '#9333EA',
    primaryColor: '#9333EA',
    tierRecommended: ['k12-foundations'],
    recommendedAgeLabel: 'Ages 8-12+',
    difficultyLabel: 'Junior Developer',
    kidAnalogy: {
      title: 'The Master Game Builder 🕹️🪄',
      explanation: 'C# is the #1 superpower language inside Unity 3D! If you want to make a character jump when you press spacebar, pick up coins, or fight bosses in a 3D world, C# is your magic wand.',
      emoji: '👾'
    },
    whyKidsLoveIt: 'Unity 3D uses C# for thousands of famous indie games like Cuphead, Hollow Knight, Among Us, and Subnautica!',
    whatItBuilds: [
      'Unity 3D and 2D mobile and console games',
      'Virtual Reality (VR) and Augmented Reality (AR) worlds',
      'Cross-platform desktop software'
    ],
    famousThingsBuiltWithIt: ['Among Us', 'Cuphead', 'Hollow Knight', 'Beat Saber VR'],
    bigIdeas: [
      {
        term: 'Classes & Objects',
        meaning: 'Blueprints for game characters (Player, Enemy, Coin) that contain their health, speed, and abilities.',
        kidExample: 'public class Player { int health = 100; }'
      },
      {
        term: 'Methods',
        meaning: 'Actions an object can take, like Jump(), TakeDamage(), or CollectStar().',
        kidExample: 'void Jump() { rb.velocity = new Vector3(0, 10, 0); }'
      },
      {
        term: 'Game Loop (Update())',
        meaning: 'Unity runs the Update() method 60 times every second to check for player keystrokes and movements.',
        kidExample: 'void Update() { if (Input.GetKeyDown(KeyCode.Space)) Jump(); }'
      }
    ],
    starterCode: `// 👾 Unity 3D C# Character Controller Script
using System;

public class PlayerController {
    public string playerName = "Pippin";
    public int coins = 0;
    public int health = 100;

    public void CollectCoin(int amount) {
        coins += amount;
        Console.WriteLine($"✨ {playerName} collected {amount} coin! Total Coins: {coins}");
    }

    public void Jump() {
        Console.WriteLine($"🦘 {playerName} leaped over a spiky obstacle!");
    }
}

class Program {
    static void Main() {
        PlayerController hero = new PlayerController();
        hero.CollectCoin(1);
        hero.Jump();
        hero.CollectCoin(5);
    }
}`,
    interactiveTemplates: [
      {
        id: 'csharp-unity-powerup',
        name: '🍄 Unity Power-Up Trigger',
        description: 'Simulates OnTriggerEnter for collecting power-ups in Unity.',
        code: `// Unity C# Power-Up Trigger Script
using System;

public class PowerUpTrigger {
    public static void OnTriggerEnter(string itemType) {
        if (itemType == "SpeedBoost") {
            Console.WriteLine("⚡ ZOOM! Movement speed increased by 200% for 5 seconds!");
        } else if (itemType == "SuperMushroom") {
            Console.WriteLine("🍄 WHOA! Character doubled in size and gained invincibility!");
        } else {
            Console.WriteLine("💎 Unknown magic artifact picked up!");
        }
    }

    static void Main() {
        OnTriggerEnter("SpeedBoost");
        OnTriggerEnter("SuperMushroom");
    }
}`
      },
      {
        id: 'csharp-quest-log',
        name: '📜 RPG Quest Completion System',
        description: 'Tracking active and completed quests with C# class logic.',
        code: `// C# RPG Quest System
using System;

public class Quest {
    public string title = "Defeat the Slime King";
    public bool isCompleted = false;

    public void CompleteQuest() {
        isCompleted = true;
        Console.WriteLine($"🎉 QUEST COMPLETE: {title}");
        Console.WriteLine("💰 Reward granted: 500 EXP + Mystic Cape!");
    }
}

class Program {
    static void Main() {
        Quest myQuest = new Quest();
        Console.WriteLine($"Active Quest: {myQuest.title}");
        myQuest.CompleteQuest();
    }
}`
      }
    ],
    curriculumParentNote: 'C# provides an object-oriented foundation with clean, structured syntax. It directly bridges young developers from block coding into the professional game-making industry through Unity 3D.',
    quickQuiz: {
      question: 'Which game engine famously uses C# to script games like Among Us and Cuphead?',
      options: ['Unity 3D', 'Microsoft Word', 'Calculator OS', 'PaintBrush'],
      correctIndex: 0,
      explanation: 'Unity 3D is the world-famous game development engine powered by C#!'
    },
    handsOnChallenge: {
      id: 'csharp-chal-1',
      title: 'Mission: Print with Console.WriteLine',
      prompt: 'Use Console.WriteLine to print "Level Passed!" in C#.',
      starterCode: `using System;

class Program {
    static void Main() {
        // Your code here:
        
    }
}`,
      hint: 'Type: Console.WriteLine("Level Passed!");',
      solutionCode: `using System;

class Program {
    static void Main() {
        Console.WriteLine("Level Passed!");
    }
}`,
      checkExplanation: 'Awesome! Your C# Console.WriteLine command executed perfectly.',
      requiredKeywords: ['Console.WriteLine', 'Level Passed']
    }
  },

  // ==========================================
  // 7. SQL (DATABASE EXPLORER)
  // ==========================================
  {
    id: 'sql',
    name: 'SQL (Structured Query Language)',
    shortName: 'SQL',
    tagline: 'The Super-Organized Detective Searching Millions of Data Records!',
    icon: '🗄️',
    badgeBg: 'bg-teal-100 text-teal-800 border-teal-300',
    borderAccent: '#0D9488',
    primaryColor: '#0D9488',
    tierRecommended: ['k12-foundations'],
    recommendedAgeLabel: 'Ages 8-12+',
    difficultyLabel: 'Junior Developer',
    kidAnalogy: {
      title: 'The Super Detective Librarian 🔍🗄️',
      explanation: 'Imagine a giant library with 10 million books. Instead of looking through every shelf by hand, you ask the magic librarian: "Show me all books about Space with 5 stars!" In one second, the librarian hands you the exact list!',
      emoji: '📚'
    },
    whyKidsLoveIt: 'It is how Spotify instantly finds your playlist, how Netflix shows cartoons, and how Roblox knows how many Robux you have!',
    whatItBuilds: [
      'High-score leaderboards and player profiles',
      'Music streaming playlists and video libraries',
      'Inventory databases for online stores'
    ],
    famousThingsBuiltWithIt: ['YouTube video search filters', 'Pokemon Pokedex databases', 'Hospital and school grade systems'],
    bigIdeas: [
      {
        term: 'SELECT & FROM',
        meaning: 'Tells the database which columns you want to see and which table to look inside.',
        kidExample: 'SELECT name, score FROM players;'
      },
      {
        term: 'WHERE (The Filter)',
        meaning: 'Only show rows that match a specific condition (like stars greater than 10).',
        kidExample: 'WHERE stars > 10;'
      },
      {
        term: 'ORDER BY',
        meaning: 'Sorts the results from highest to lowest or alphabetical order.',
        kidExample: 'ORDER BY score DESC;'
      }
    ],
    starterCode: `-- 🗄️ Magical Creatures Database Query
SELECT name, creature_type, stars, power_level
FROM magical_creatures
WHERE stars >= 10
ORDER BY power_level DESC;`,
    interactiveTemplates: [
      {
        id: 'sql-pokedex',
        name: '⚡ Legendary Creature Finder',
        description: 'Find all Electric and Fire type creatures with high power.',
        code: `SELECT name, element, base_hp
FROM creature_pokedex
WHERE element = 'Electric'
ORDER BY base_hp DESC;`
      },
      {
        id: 'sql-leaderboard',
        name: '🏆 Top 5 Champions Leaderboard',
        description: 'Fetch the top 5 high scores across the entire school.',
        code: `SELECT student_name, avatar, stars_earned
FROM class_leaderboard
ORDER BY stars_earned DESC
LIMIT 5;`
      }
    ],
    curriculumParentNote: 'SQL introduces relational database concepts and data literacy. In our data-driven world, understanding how queries retrieve and filter information is an invaluable life and STEM skill.',
    quickQuiz: {
      question: 'Which SQL keyword is used to pick specific columns to view?',
      options: ['FIND', 'SELECT', 'FETCH', 'GRAB'],
      correctIndex: 1,
      explanation: '`SELECT` is the core keyword in SQL that chooses what data fields you want returned!'
    },
    handsOnChallenge: {
      id: 'sql-chal-1',
      title: 'Mission: Query All Superheroes',
      prompt: 'Write a SQL query to SELECT name FROM superheroes;',
      starterCode: `-- Write your SQL query below:
`,
      hint: 'Type: SELECT name FROM superheroes;',
      solutionCode: `SELECT name FROM superheroes;`,
      checkExplanation: 'Great query! You asked the database for exactly the right records.',
      requiredKeywords: ['SELECT', 'FROM']
    }
  },

  // ==========================================
  // 8. SCRATCH & VISUAL BLOCKS
  // ==========================================
  {
    id: 'scratch',
    name: 'Block Coding (Scratch / Blockly)',
    shortName: 'Blocks',
    tagline: 'The Colorful Puzzle Pieces of Logic for Early Inventors!',
    icon: '🧩',
    badgeBg: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    borderAccent: '#059669',
    primaryColor: '#059669',
    tierRecommended: ['pre-k', 'kindergarten', 'grade-1-2'],
    recommendedAgeLabel: 'Ages 3-8',
    difficultyLabel: 'First Steps (Visual)',
    kidAnalogy: {
      title: 'Colorful Puzzle Pieces 🧩',
      explanation: 'Like magnetic LEGO bricks that click together! Because the pieces only fit when the logic makes sense, you can never make a spelling or typing mistake.',
      emoji: '🧱'
    },
    whyKidsLoveIt: 'Zero frustrating typos! You just snap blocks together and make cats dance, play songs, and draw colorful spirals.',
    whatItBuilds: [
      'Animated cartoons and greeting cards',
      'Clicker games and maze adventures',
      'Music synthesizers and interactive stories'
    ],
    famousThingsBuiltWithIt: ['MIT Scratch community games', 'Code.org Hour of Code tutorials', 'Lego Mindstorms robotics'],
    bigIdeas: [
      {
        term: 'Snap & Click Logic',
        meaning: 'Blocks connect top-to-bottom in sequence so you clearly see the order of events.',
        kidExample: '[When Green Flag Clicked] -> [Move 10 Steps]'
      },
      {
        term: 'Broadcast Messages',
        meaning: 'One character whispers a message like "Game Over!" and all other characters hear it and react.',
        kidExample: '[Broadcast "Win Sound"]'
      },
      {
        term: 'Repeat Loops',
        meaning: 'A C-shaped block that wraps around other blocks to do them multiple times.',
        kidExample: '[Repeat (4)] -> [Turn Right 90]'
      }
    ],
    starterCode: `[When Green Flag Clicked 🟢]
├── [Set Score to 0]
├── [Repeat (10) times 🔁]
│   ├── [Move (10) Steps ➡️]
│   ├── [Play Sound "Pop" 🎵]
│   └── [Wait (0.5) Seconds ⏱️]
└── [Say "Hurray, Finished!" 🎈]`,
    interactiveTemplates: [
      {
        id: 'block-dance-party',
        name: '💃 Disco Dancing Cat',
        description: 'Loop through dance costumes and play funky beats.',
        code: `[When Space Key Pressed ⌨️]
├── [Repeat (4) times 🔁]
│   ├── [Next Costume 🐱]
│   ├── [Turn Right (15) Degrees ↻]
│   └── [Play Drum (1) for (0.2) Beats 🥁]
└── [Say "Check out my dance moves!" 🌟]`
      }
    ],
    curriculumParentNote: 'Visual block coding eliminates keyboard barriers for Pre-K and Kindergarten learners, allowing them to master foundational logic—sequences, loops, conditions—before encountering text syntax.',
    quickQuiz: {
      question: 'Why are coding blocks shaped like puzzle pieces?',
      options: [
        'To look pretty only',
        'So they snap together smoothly and prevent syntax typing errors',
        'Because computers only eat puzzles'
      ],
      correctIndex: 1,
      explanation: 'Puzzle shapes ensure only logical commands fit together, preventing tricky spelling errors for early learners!'
    },
    handsOnChallenge: {
      id: 'scratch-chal-1',
      title: 'Mission: Find the Starting Block',
      prompt: 'Identify the magic green flag trigger block used to start Scratch games!',
      starterCode: `// Which event starts a block program?
// A) [When Computer Turns Off]
// B) [When Green Flag Clicked]
// C) [Delete All Files]`,
      hint: 'Look for the green flag icon 🟢!',
      solutionCode: `[When Green Flag Clicked]`,
      checkExplanation: 'Correct! The Green Flag is the universal "GO" signal in block coding.',
      requiredKeywords: ['Green Flag']
    }
  }
];

// ==========================================
// CROSS-LANGUAGE "ROSETTA STONE" EXAMPLES
// Shows kids the same concept in all languages!
// ==========================================
export interface RosettaStoneConcept {
  id: string;
  title: string;
  emoji: string;
  description: string;
  examples: Record<string, string>;
}

export const ROSETTA_STONE_CONCEPTS: RosettaStoneConcept[] = [
  {
    id: 'hello-world',
    title: '1. Say "Hello, World!"',
    emoji: '👋',
    description: 'The famous first tradition for every coder across history!',
    examples: {
      html: `<h1>Hello, World!</h1>`,
      css: `h1::after { content: " 👋"; }`,
      javascript: `console.log("Hello, World!");`,
      python: `print("Hello, World!")`,
      cpp: `std::cout << "Hello, World!" << std::endl;`,
      csharp: `Console.WriteLine("Hello, World!");`,
      sql: `SELECT 'Hello, World!' AS message;`,
      scratch: `[Say "Hello, World!"]`
    }
  },
  {
    id: 'variables',
    title: '2. Store Player Score in a Variable',
    emoji: '📦',
    description: 'Holding and increasing numbers inside named containers.',
    examples: {
      html: `<span id="score">Score: 10</span>`,
      css: `:root { --player-score: 10; }`,
      javascript: `let score = 10;\nscore = score + 5;`,
      python: `score = 10\nscore = score + 5`,
      cpp: `int score = 10;\nscore += 5;`,
      csharp: `int score = 10;\nscore += 5;`,
      sql: `UPDATE player_profile\nSET score = score + 5;`,
      scratch: `[Change (Score) by (5)]`
    }
  },
  {
    id: 'loops',
    title: '3. Repeat an Action 3 Times',
    emoji: '🔁',
    description: 'Repeating steps without writing them over and over.',
    examples: {
      html: `<div class="stars">⭐⭐⭐</div>`,
      css: `animation: spin 1s infinite alternate;`,
      javascript: `for (let i = 0; i < 3; i++) {\n  console.log("Jump!");\n}`,
      python: `for i in range(3):\n    print("Jump!")`,
      cpp: `for (int i = 0; i < 3; i++) {\n    std::cout << "Jump!" << std::endl;\n}`,
      csharp: `for (int i = 0; i < 3; i++) {\n    Console.WriteLine("Jump!");\n}`,
      sql: `-- SQL operates on all rows automatically!`,
      scratch: `[Repeat (3) times 🔁]\n  └── [Play Sound "Hop"]`
    }
  },
  {
    id: 'conditionals',
    title: '4. Check if Player Won (If / Else)',
    emoji: '🔀',
    description: 'Making smart decisions based on true or false conditions.',
    examples: {
      html: `<div class="status">Winner!</div>`,
      css: `.winner { background: gold; }`,
      javascript: `if (stars >= 5) {\n  console.log("You win!");\n} else {\n  console.log("Keep going!");\n}`,
      python: `if stars >= 5:\n    print("You win!")\nelse:\n    print("Keep going!")`,
      cpp: `if (stars >= 5) {\n    std::cout << "You win!" << std::endl;\n}`,
      csharp: `if (stars >= 5) {\n    Console.WriteLine("You win!");\n}`,
      sql: `SELECT * FROM players\nWHERE stars >= 5;`,
      scratch: `[If <(Stars) > [4]> Then]\n  └── [Say "You win!"]`
    }
  }
];

// ==========================================
// LANGUAGE MATCHMAKER QUIZ DATA
// Helps kids & parents pick their best starting language
// ==========================================
export interface MatchmakerQuestion {
  id: number;
  question: string;
  emoji: string;
  options: {
    text: string;
    emoji: string;
    recommendedLanguage: string;
    reason: string;
  }[];
}

export const MATCHMAKER_QUESTIONS: MatchmakerQuestion[] = [
  {
    id: 1,
    question: 'What is your absolute dream project to build?',
    emoji: '✨',
    options: [
      {
        text: 'A cool website with buttons, dark mode, and neon glow',
        emoji: '🌐',
        recommendedLanguage: 'html',
        reason: 'HTML and CSS are the perfect twin languages for designing web pages!'
      },
      {
        text: 'A friendly AI robot, chatbot, or science calculator',
        emoji: '🤖',
        recommendedLanguage: 'python',
        reason: 'Python is the world champion for artificial intelligence and friendly coding!'
      },
      {
        text: 'A high-speed 3D action game like Minecraft or a racing simulator',
        emoji: '🏎️',
        recommendedLanguage: 'cpp',
        reason: 'C++ is the lightning-fast engine behind real 3D video game graphics!'
      },
      {
        text: 'A Unity 3D game like Cuphead, Among Us, or an indie adventure',
        emoji: '👾',
        recommendedLanguage: 'csharp',
        reason: 'C# is the #1 official language of the Unity 3D game engine!'
      }
    ]
  },
  {
    id: 2,
    question: 'How do you like to learn when starting out?',
    emoji: '🎯',
    options: [
      {
        text: 'Visual blocks that snap together like colorful puzzle pieces',
        emoji: '🧩',
        recommendedLanguage: 'scratch',
        reason: 'Block coding removes typing errors and lets you focus on pure fun logic!'
      },
      {
        text: 'Typing clean, readable lines that look like simple English',
        emoji: '📝',
        recommendedLanguage: 'python',
        reason: 'Python syntax is super clean with no scary brackets!'
      },
      {
        text: 'Styling colors, changing fonts, and making things look gorgeous',
        emoji: '🎨',
        recommendedLanguage: 'css',
        reason: 'CSS is pure creative design and visual art in code!'
      },
      {
        text: 'Writing interactive scripts with immediate clicks and confetti',
        emoji: '⚡',
        recommendedLanguage: 'javascript',
        reason: 'JavaScript runs in every browser and responds to every click!'
      }
    ]
  }
];
