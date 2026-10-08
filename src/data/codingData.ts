import { AgeTier, CodingMission, CodingBlock, CodingMascot, CsConcept } from '../types';

export interface MascotInfo {
  id: CodingMascot;
  name: string;
  emoji: string;
  tagline: string;
  description: string;
  voiceIntro: string;
  avatarBg: string;
}

export const CODING_MASCOTS: MascotInfo[] = [
  {
    id: 'robot',
    name: 'Beep-0 the Robot',
    emoji: '🤖',
    tagline: 'Logical & Methodical',
    description: 'Loves step-by-step algorithms, binary code, and spotless loops!',
    voiceIntro: 'Beep boop! I am Beep-0. Let us build our algorithm together!',
    avatarBg: 'bg-sky-100 text-sky-700 border-sky-300'
  },
  {
    id: 'bunny',
    name: 'Pippin the Bunny',
    emoji: '🐰',
    tagline: 'Speedy Jumper',
    description: 'Enthusiastic explorer hopping forward, jumping hurdles, and collecting crunchy carrots!',
    voiceIntro: 'Hop hop! I am Pippin! Show me the path to the carrots!',
    avatarBg: 'bg-amber-100 text-amber-700 border-amber-300'
  },
  {
    id: 'kitty',
    name: 'Pixel the Cyber-Cat',
    emoji: '🐱',
    tagline: 'Curious Bug Hunter',
    description: 'Sharp eyes for finding bugs in code, sneaking through mazes, and collecting shiny gems.',
    voiceIntro: 'Purr! I am Pixel. No bug can escape my logic!',
    avatarBg: 'bg-purple-100 text-purple-700 border-purple-300'
  },
  {
    id: 'turtle',
    name: 'Sheldon the Turtle',
    emoji: '🐢',
    tagline: 'Geometry Artist',
    description: 'Master of angles and geometry. Slow, steady, and paints breathtaking mathematical patterns.',
    voiceIntro: 'Hello young coder. Together we will paint shapes with code!',
    avatarBg: 'bg-emerald-100 text-emerald-700 border-emerald-300'
  },
  {
    id: 'rocket',
    name: 'Nova the Rocket',
    emoji: '🚀',
    tagline: 'Cosmic Navigator',
    description: 'Navigates cosmic asteroid belts using loops, coordinates, and stellar functions.',
    voiceIntro: 'Three, two, one! Ready for ignition and computational orbit!',
    avatarBg: 'bg-rose-100 text-rose-700 border-rose-300'
  }
];

export const CODING_BLOCKS: Record<string, CodingBlock> = {
  'forward': {
    id: 'forward',
    type: 'forward',
    label: 'Step Forward',
    emoji: '⬆️',
    color: 'bg-[#4D96FF] border-[#3A72C1] text-white',
    description: 'Moves 1 step forward in current direction',
    codeSnippet: 'mascot.moveForward();'
  },
  'backward': {
    id: 'backward',
    type: 'backward',
    label: 'Step Back',
    emoji: '⬇️',
    color: 'bg-indigo-500 border-indigo-700 text-white',
    description: 'Takes 1 step backward',
    codeSnippet: 'mascot.moveBackward();'
  },
  'turn-left': {
    id: 'turn-left',
    type: 'turn-left',
    label: 'Turn Left',
    emoji: '↺',
    color: 'bg-amber-500 border-amber-700 text-white',
    description: 'Turns 90 degrees to the left',
    codeSnippet: 'mascot.turnLeft();'
  },
  'turn-right': {
    id: 'turn-right',
    type: 'turn-right',
    label: 'Turn Right',
    emoji: '↻',
    color: 'bg-[#FF9F45] border-[#D67D27] text-white',
    description: 'Turns 90 degrees to the right',
    codeSnippet: 'mascot.turnRight();'
  },
  'jump': {
    id: 'jump',
    type: 'jump',
    label: 'Jump (2 Steps)',
    emoji: '🦘',
    color: 'bg-[#6BCB77] border-[#4E9B56] text-white',
    description: 'Leaps 2 steps ahead over puddles or grass',
    codeSnippet: 'mascot.jumpForward(2);'
  },
  'collect': {
    id: 'collect',
    type: 'collect',
    label: 'Collect Item',
    emoji: '✨',
    color: 'bg-[#FFD93D] border-[#C9A92E] text-[#2D2D2D]',
    description: 'Picks up a star, carrot, gem, or key',
    codeSnippet: 'mascot.collectItem();'
  },
  'repeat-2': {
    id: 'repeat-2',
    type: 'repeat-2',
    label: 'Repeat 2x',
    emoji: '🔁 2x',
    color: 'bg-purple-500 border-purple-700 text-white',
    description: 'Repeats next forward step 2 times',
    codeSnippet: 'for (let i = 0; i < 2; i++) { mascot.moveForward(); }'
  },
  'repeat-3': {
    id: 'repeat-3',
    type: 'repeat-3',
    label: 'Repeat 3x',
    emoji: '🔁 3x',
    color: 'bg-purple-600 border-purple-800 text-white',
    description: 'Repeats next forward step 3 times',
    codeSnippet: 'for (let i = 0; i < 3; i++) { mascot.moveForward(); }'
  },
  'repeat-4': {
    id: 'repeat-4',
    type: 'repeat-4',
    label: 'Repeat 4x',
    emoji: '🔁 4x',
    color: 'bg-purple-700 border-purple-900 text-white',
    description: 'Repeats next forward step 4 times',
    codeSnippet: 'for (let i = 0; i < 4; i++) { mascot.moveForward(); }'
  },
  'if-water': {
    id: 'if-water',
    type: 'if-water',
    label: 'If Water → Jump',
    emoji: '💧⚡',
    color: 'bg-cyan-600 border-cyan-800 text-white',
    description: 'Checks for water ahead and leaps safely',
    codeSnippet: 'if (tile === "water") { mascot.jump(); } else { mascot.moveForward(); }'
  },
  'if-key': {
    id: 'if-key',
    type: 'if-key',
    label: 'If Key → Open Gate',
    emoji: '🔑🚪',
    color: 'bg-emerald-600 border-emerald-800 text-white',
    description: 'Unlocks gate if key was picked up',
    codeSnippet: 'if (inventory.has("key")) { gate.unlock(); }'
  },
  'func-leap': {
    id: 'func-leap',
    type: 'func-leap',
    label: 'Run: LeapStep()',
    emoji: '🪄',
    color: 'bg-rose-500 border-rose-700 text-white',
    description: 'Executes reusable custom function (Jump + Collect)',
    codeSnippet: 'function leapStep() { mascot.jump(); mascot.collect(); } leapStep();'
  }
};

export const CODING_MISSIONS: CodingMission[] = [
  // ==========================================
  // PRE-K (Ages 2-4): Visual Directional Sequencing
  // ==========================================
  {
    id: 'pk-1',
    tier: 'pre-k',
    title: "Bunny's First Hop",
    levelNumber: 1,
    difficulty: 'Starter',
    concept: 'Sequencing (One Step at a Time)',
    story: 'Pippin smells a sweet crunchy carrot right in front of him! Help Pippin take 2 steps forward to reach it.',
    mascot: 'bunny',
    gridSize: { rows: 4, cols: 4 },
    start: { x: 1, y: 0, dir: 'down' },
    goal: { x: 1, y: 2 },
    collectibles: [{ x: 1, y: 2, type: 'carrot' }],
    availableCommands: ['forward'],
    maxCommands: 4,
    hint: 'Tap "Step Forward" twice to guide Pippin to the carrot!',
    pedagogicalNote: 'Introduces 1-to-1 correspondence between one block tap and one robot action.',
    solutionHint: ['forward', 'forward']
  },
  {
    id: 'pk-2',
    tier: 'pre-k',
    title: 'Turn to the Golden Star',
    levelNumber: 2,
    difficulty: 'Starter',
    concept: 'Turning & Directionality',
    story: 'Beep-0 the Robot wants to grab the shiny golden star! He needs to step forward, turn right, and step forward.',
    mascot: 'robot',
    gridSize: { rows: 4, cols: 4 },
    start: { x: 0, y: 1, dir: 'right' },
    goal: { x: 1, y: 2 },
    collectibles: [{ x: 1, y: 2, type: 'star' }],
    availableCommands: ['forward', 'turn-right', 'turn-left'],
    maxCommands: 4,
    hint: 'Step forward first, then turn right to face downwards, then step forward!',
    pedagogicalNote: 'Develops spatial orientation and mental rotation for early learners.',
    solutionHint: ['forward', 'turn-right', 'forward']
  },
  {
    id: 'pk-3',
    tier: 'pre-k',
    title: 'Hop Across the Meadow',
    levelNumber: 3,
    difficulty: 'Explorer',
    concept: 'Multi-Step Sequencing',
    story: 'Pixel the Kitty sees a sparkling gem in the sunny meadow! Guide Pixel forward 3 steps to the gem.',
    mascot: 'kitty',
    gridSize: { rows: 5, cols: 5 },
    start: { x: 1, y: 1, dir: 'right' },
    goal: { x: 4, y: 1 },
    collectibles: [{ x: 4, y: 1, type: 'gem' }],
    availableCommands: ['forward', 'turn-right', 'turn-left'],
    maxCommands: 5,
    hint: 'Pixel is facing right! Three forward steps will lead straight to the sparkling gem.',
    pedagogicalNote: 'Counting steps and connecting number quantity to program length.',
    solutionHint: ['forward', 'forward', 'forward']
  },
  {
    id: 'pk-4',
    tier: 'pre-k',
    title: 'The Zig-Zag Garden',
    levelNumber: 4,
    difficulty: 'Explorer',
    concept: 'Alternating Sequences',
    story: 'Pippin is on a twisting garden path! Step forward, turn left, forward, turn right, and forward to reach the goal.',
    mascot: 'bunny',
    gridSize: { rows: 4, cols: 4 },
    start: { x: 0, y: 3, dir: 'up' },
    goal: { x: 2, y: 1 },
    collectibles: [{ x: 2, y: 1, type: 'carrot' }],
    obstacles: [{ x: 0, y: 1, type: 'wall' }, { x: 1, y: 3, type: 'wall' }],
    availableCommands: ['forward', 'turn-right', 'turn-left'],
    maxCommands: 6,
    hint: 'Watch the hedges! Walk around the walls with careful turns.',
    pedagogicalNote: 'Obstacle awareness and spatial planning in a 2D coordinate grid.',
    solutionHint: ['forward', 'turn-right', 'forward', 'turn-left', 'forward']
  },
  {
    id: 'pk-5',
    tier: 'pre-k',
    title: 'Leap the Puddle!',
    levelNumber: 5,
    difficulty: 'Champion',
    concept: 'Special Action (Jump)',
    story: 'Uh oh! There is a big puddle of muddy water in front of Pippin! Use the Jump command to leap over it!',
    mascot: 'bunny',
    gridSize: { rows: 4, cols: 5 },
    start: { x: 0, y: 2, dir: 'right' },
    goal: { x: 3, y: 2 },
    collectibles: [{ x: 3, y: 2, type: 'star' }],
    obstacles: [{ x: 1, y: 2, type: 'puddle' }],
    availableCommands: ['forward', 'jump', 'turn-right'],
    maxCommands: 4,
    hint: 'Use the green "Jump" block to leap right over the muddy puddle in a single hop!',
    pedagogicalNote: 'Action parameters: understanding that Jump travels 2 units instead of 1.',
    solutionHint: ['jump', 'forward']
  },
  {
    id: 'pk-6',
    tier: 'pre-k',
    title: 'Pre-K Graduation Party',
    levelNumber: 6,
    difficulty: 'Champion',
    concept: 'Collecting & Goal Reaching',
    story: 'Beep-0 wants to pick up a star for his party hat and then reach the golden celebration flag!',
    mascot: 'robot',
    gridSize: { rows: 5, cols: 5 },
    start: { x: 1, y: 1, dir: 'right' },
    goal: { x: 3, y: 3 },
    collectibles: [{ x: 2, y: 1, type: 'star' }],
    availableCommands: ['forward', 'turn-right', 'turn-left', 'collect'],
    maxCommands: 7,
    hint: 'Step forward, tap Collect to grab the star, turn right, and step forward twice!',
    pedagogicalNote: 'Sub-goals: gathering required items before completing the primary mission.',
    solutionHint: ['forward', 'collect', 'turn-right', 'forward', 'forward']
  },

  // ==========================================
  // KINDERGARTEN (Ages 5-6): Loops & Pattern Recognition
  // ==========================================
  {
    id: 'k-1',
    tier: 'kindergarten',
    title: 'The Double Step Loop',
    levelNumber: 7,
    difficulty: 'Starter',
    concept: 'Introduction to Loops (Repeat 2x)',
    story: 'Instead of adding "Forward" again and again, let us use the purple Repeat 2x loop! It does the work for us.',
    mascot: 'robot',
    gridSize: { rows: 5, cols: 5 },
    start: { x: 1, y: 1, dir: 'down' },
    goal: { x: 1, y: 3 },
    collectibles: [{ x: 1, y: 3, type: 'gem' }],
    availableCommands: ['forward', 'repeat-2', 'turn-right'],
    maxCommands: 3,
    hint: 'Use "Repeat 2x" to take two steps with a single efficient code block!',
    pedagogicalNote: 'Teaches code efficiency and the foundational concept of iterations.',
    solutionHint: ['repeat-2']
  },
  {
    id: 'k-2',
    tier: 'kindergarten',
    title: 'Carrot Patch Repeat Loop',
    levelNumber: 8,
    difficulty: 'Starter',
    concept: 'Looping 3 Times (Repeat 3x)',
    story: 'Pippin has a long runway of lush grass. Reach the harvest basket at the far end using a Repeat 3x block!',
    mascot: 'bunny',
    gridSize: { rows: 5, cols: 6 },
    start: { x: 1, y: 2, dir: 'right' },
    goal: { x: 4, y: 2 },
    collectibles: [{ x: 4, y: 2, type: 'carrot' }],
    availableCommands: ['forward', 'repeat-3', 'turn-left', 'turn-right'],
    maxCommands: 3,
    hint: 'Add "Repeat 3x" to zoom straight across 3 tiles to the carrot!',
    pedagogicalNote: 'Compressing repetitive sequential steps into compact loops.',
    solutionHint: ['repeat-3']
  },
  {
    id: 'k-3',
    tier: 'kindergarten',
    title: 'Puddle Hopper Algorithm',
    levelNumber: 9,
    difficulty: 'Explorer',
    concept: 'Mixing Jumps & Turns',
    story: 'There are two puddles on the path! Guide Pixel to jump past the first puddle, turn, and jump past the second.',
    mascot: 'kitty',
    gridSize: { rows: 5, cols: 5 },
    start: { x: 0, y: 1, dir: 'right' },
    goal: { x: 2, y: 3 },
    obstacles: [{ x: 1, y: 1, type: 'puddle' }, { x: 2, y: 2, type: 'puddle' }],
    collectibles: [{ x: 2, y: 3, type: 'gem' }],
    availableCommands: ['forward', 'jump', 'turn-right', 'turn-left'],
    maxCommands: 5,
    hint: 'Jump over the first puddle, turn right, and jump over the second puddle!',
    pedagogicalNote: 'Combining complex actions and directional changes in sequence.',
    solutionHint: ['jump', 'turn-right', 'jump']
  },
  {
    id: 'k-4',
    tier: 'kindergarten',
    title: 'The Square Patrol',
    levelNumber: 10,
    difficulty: 'Explorer',
    concept: 'Geometric Loops (Repeat 4x)',
    story: 'Sheldon the Turtle wants to patrol a square perimeter! Repeat 4x: Forward and Turn Right.',
    mascot: 'turtle',
    gridSize: { rows: 5, cols: 5 },
    start: { x: 1, y: 1, dir: 'right' },
    goal: { x: 1, y: 2 },
    collectibles: [{ x: 3, y: 1, type: 'star' }, { x: 3, y: 3, type: 'star' }],
    availableCommands: ['forward', 'turn-right', 'repeat-4', 'repeat-2'],
    maxCommands: 6,
    hint: 'A square has 4 sides! Walk forward 2 steps, turn right, walk forward 2 steps, turn right.',
    pedagogicalNote: 'Connecting geometry (4 sides of a square) with algorithmic repetition.',
    solutionHint: ['repeat-2', 'turn-right', 'repeat-2', 'turn-right', 'repeat-2']
  },
  {
    id: 'k-5',
    tier: 'kindergarten',
    title: 'Gem Miner: Triple Diamond',
    levelNumber: 11,
    difficulty: 'Champion',
    concept: 'Multi-Item Collection',
    story: 'Three precious gems are scattered in the cave! Collect all three gems before stepping on the extraction pad.',
    mascot: 'robot',
    gridSize: { rows: 5, cols: 5 },
    start: { x: 0, y: 2, dir: 'right' },
    goal: { x: 4, y: 2 },
    collectibles: [{ x: 1, y: 2, type: 'gem' }, { x: 2, y: 2, type: 'gem' }, { x: 3, y: 2, type: 'gem' }],
    availableCommands: ['forward', 'collect', 'repeat-3'],
    maxCommands: 8,
    hint: 'Forward, Collect, Forward, Collect, Forward, Collect, then Forward to the exit!',
    pedagogicalNote: 'Interleaving actions (move then interact) inside stateful programs.',
    solutionHint: ['forward', 'collect', 'forward', 'collect', 'forward', 'collect', 'forward']
  },
  {
    id: 'k-6',
    tier: 'kindergarten',
    title: 'Fix the Glitch (Debugging!)',
    levelNumber: 12,
    difficulty: 'Champion',
    concept: 'Debugging & Code Inspection',
    story: 'Someone wrote code with a bug! The robot turns left instead of right and bumps into a rock wall! Find and fix the mistake.',
    mascot: 'robot',
    gridSize: { rows: 5, cols: 5 },
    start: { x: 1, y: 1, dir: 'right' },
    goal: { x: 2, y: 3 },
    obstacles: [{ x: 1, y: 0, type: 'wall' }, { x: 3, y: 1, type: 'wall' }],
    collectibles: [{ x: 2, y: 3, type: 'star' }],
    availableCommands: ['forward', 'turn-right', 'turn-left', 'repeat-2'],
    maxCommands: 5,
    hint: 'Look closely at the turn: Beep-0 needs to turn RIGHT to go downwards toward the star!',
    pedagogicalNote: 'Debugging mindset: mistakes are normal clues to examine and improve.',
    solutionHint: ['forward', 'turn-right', 'repeat-2']
  },

  // ==========================================
  // GRADE 1-2 (Ages 7-8): Conditionals & Functions
  // ==========================================
  {
    id: 'g12-1',
    tier: 'grade-1-2',
    title: 'The Secret Dungeon Key',
    levelNumber: 13,
    difficulty: 'Starter',
    concept: 'Conditionals (If Key → Unlock)',
    story: 'A massive iron gate blocks the treasure chamber! You must first collect the golden key, then unlock the gate.',
    mascot: 'kitty',
    gridSize: { rows: 5, cols: 5 },
    start: { x: 0, y: 2, dir: 'right' },
    goal: { x: 4, y: 2 },
    collectibles: [{ x: 1, y: 2, type: 'key' }],
    obstacles: [{ x: 3, y: 2, type: 'gate' }],
    availableCommands: ['forward', 'collect', 'if-key', 'repeat-2'],
    maxCommands: 6,
    hint: 'Step forward to the key, tap Collect, step forward, and use "If Key → Open Gate" to unlock the path!',
    pedagogicalNote: 'State dependencies: an action only succeeds when a precondition is met.',
    solutionHint: ['forward', 'collect', 'forward', 'if-key', 'repeat-2']
  },
  {
    id: 'g12-2',
    tier: 'grade-1-2',
    title: 'River Crossing Condition',
    levelNumber: 14,
    difficulty: 'Starter',
    concept: 'Dynamic Condition Check (If Water → Jump)',
    story: 'A sparkling blue river flows across tiles. Use the smart "If Water → Jump" condition block to clear it automatically!',
    mascot: 'bunny',
    gridSize: { rows: 5, cols: 6 },
    start: { x: 0, y: 2, dir: 'right' },
    goal: { x: 4, y: 2 },
    obstacles: [{ x: 2, y: 2, type: 'water' }],
    collectibles: [{ x: 4, y: 2, type: 'carrot' }],
    availableCommands: ['forward', 'if-water', 'repeat-2', 'collect'],
    maxCommands: 5,
    hint: 'Step forward 2 times, then run "If Water → Jump" to clear the water stream safely!',
    pedagogicalNote: 'Sensor-driven decisions: evaluating environmental conditions in real time.',
    solutionHint: ['repeat-2', 'if-water', 'forward', 'collect']
  },
  {
    id: 'g12-3',
    tier: 'grade-1-2',
    title: 'Function Magic: LeapStep()',
    levelNumber: 15,
    difficulty: 'Explorer',
    concept: 'Subroutines & Custom Functions',
    story: 'A repeated pattern of hurdles! Call the custom "LeapStep()" function to execute Jump + Collect in one reusable superpower.',
    mascot: 'bunny',
    gridSize: { rows: 5, cols: 6 },
    start: { x: 0, y: 2, dir: 'right' },
    goal: { x: 5, y: 2 },
    obstacles: [{ x: 1, y: 2, type: 'puddle' }, { x: 3, y: 2, type: 'puddle' }],
    collectibles: [{ x: 2, y: 2, type: 'carrot' }, { x: 4, y: 2, type: 'carrot' }],
    availableCommands: ['func-leap', 'forward', 'repeat-2'],
    maxCommands: 4,
    hint: 'Use the pink "Call: LeapStep()" block twice to jump and collect each carrot!',
    pedagogicalNote: 'Modularity and abstraction: packaging multi-step instructions into named functions.',
    solutionHint: ['func-leap', 'func-leap', 'forward']
  },
  {
    id: 'g12-4',
    tier: 'grade-1-2',
    title: 'The Labyrinth Corridor',
    levelNumber: 16,
    difficulty: 'Explorer',
    concept: 'Algorithmic Maze Navigation',
    story: 'Navigate the stone maze corridor with narrow turns and grab two glowing power orbs along the way.',
    mascot: 'robot',
    gridSize: { rows: 6, cols: 6 },
    start: { x: 1, y: 1, dir: 'right' },
    goal: { x: 4, y: 4 },
    obstacles: [
      { x: 2, y: 1, type: 'wall' }, 
      { x: 3, y: 2, type: 'wall' }, 
      { x: 1, y: 3, type: 'wall' },
      { x: 3, y: 4, type: 'wall' }
    ],
    collectibles: [{ x: 1, y: 2, type: 'gem' }, { x: 4, y: 2, type: 'star' }],
    availableCommands: ['forward', 'turn-right', 'turn-left', 'collect', 'repeat-2'],
    maxCommands: 10,
    hint: 'Plan your route through the open gaps: down to the gem, across, and down to the exit.',
    pedagogicalNote: 'Decomposition: breaking a complex path into smaller solvable segments.',
    solutionHint: ['turn-right', 'forward', 'collect', 'turn-left', 'repeat-2', 'turn-right', 'repeat-2']
  },
  {
    id: 'g12-5',
    tier: 'grade-1-2',
    title: 'Double Vault Locksmith',
    levelNumber: 17,
    difficulty: 'Champion',
    concept: 'Multiple Conditions & Gates',
    story: 'Two ancient gates protect the diamond vault! Gather the keys and execute the unlocking commands.',
    mascot: 'kitty',
    gridSize: { rows: 6, cols: 6 },
    start: { x: 0, y: 1, dir: 'right' },
    goal: { x: 5, y: 1 },
    collectibles: [{ x: 1, y: 1, type: 'key' }, { x: 5, y: 1, type: 'gem' }],
    obstacles: [{ x: 3, y: 1, type: 'gate' }],
    availableCommands: ['forward', 'collect', 'if-key', 'repeat-2', 'repeat-3'],
    maxCommands: 7,
    hint: 'Collect the key, move forward, trigger the unlock condition, and sprint to the gem!',
    pedagogicalNote: 'State machines: maintaining inventory states across sequential gates.',
    solutionHint: ['forward', 'collect', 'forward', 'if-key', 'repeat-2', 'collect']
  },
  {
    id: 'g12-6',
    tier: 'grade-1-2',
    title: 'Junior Scholar Algorithmic Sprint',
    levelNumber: 18,
    difficulty: 'Champion',
    concept: 'Optimal Code Length (Code Golf)',
    story: 'Can you solve this winding canyon puzzle using at most 6 code blocks? Use loops and functions smartly!',
    mascot: 'rocket',
    gridSize: { rows: 6, cols: 6 },
    start: { x: 0, y: 0, dir: 'right' },
    goal: { x: 4, y: 4 },
    collectibles: [{ x: 4, y: 0, type: 'star' }, { x: 4, y: 4, type: 'star' }],
    availableCommands: ['forward', 'turn-right', 'repeat-4', 'collect'],
    maxCommands: 6,
    hint: 'Use "Repeat 4x" to fly straight across the top row, collect, turn right, and Repeat 4x down!',
    pedagogicalNote: 'Algorithmic efficiency and time/space complexity fundamentals for kids.',
    solutionHint: ['repeat-4', 'collect', 'turn-right', 'repeat-4', 'collect']
  },

  // ==========================================
  // K-12 FOUNDATIONS (Ages 9-12+): Real Syntax, Variables & Algorithms
  // ==========================================
  {
    id: 'k12-1',
    tier: 'k12-foundations',
    title: 'Syntax Bridge: JavaScript & Python',
    levelNumber: 19,
    difficulty: 'Starter',
    concept: 'Textual Code Syntax & Methods',
    story: 'Switch between Visual Blocks and Real Code view! See how `mascot.moveForward()` and `turnRight()` execute under the hood.',
    mascot: 'robot',
    gridSize: { rows: 6, cols: 6 },
    start: { x: 1, y: 1, dir: 'right' },
    goal: { x: 4, y: 3 },
    collectibles: [{ x: 4, y: 3, type: 'gem' }],
    availableCommands: ['forward', 'turn-right', 'turn-left', 'repeat-3', 'repeat-2'],
    maxCommands: 6,
    hint: 'Switch to the "Code View" tab to see real JavaScript syntax generated live by your blocks!',
    pedagogicalNote: 'Bridging block-based visual coding to real world industry programming syntax.',
    solutionHint: ['repeat-3', 'turn-right', 'repeat-2']
  },
  {
    id: 'k12-2',
    tier: 'k12-foundations',
    title: 'Variable Counter: let gems = 0',
    levelNumber: 20,
    difficulty: 'Starter',
    concept: 'Variables & Counter Increments',
    story: 'Every time you collect a gem, a variable `let gems = 0` increments by 1. Reach gems >= 3 to activate the extraction portal!',
    mascot: 'kitty',
    gridSize: { rows: 6, cols: 6 },
    start: { x: 0, y: 2, dir: 'right' },
    goal: { x: 5, y: 2 },
    collectibles: [{ x: 1, y: 2, type: 'gem' }, { x: 2, y: 2, type: 'gem' }, { x: 3, y: 2, type: 'gem' }],
    availableCommands: ['forward', 'collect', 'repeat-3'],
    maxCommands: 7,
    hint: 'Collect all 3 gems along the central axis before reaching the final goal pad.',
    pedagogicalNote: 'State storage: understanding variables as named memory containers.',
    solutionHint: ['forward', 'collect', 'forward', 'collect', 'forward', 'collect', 'forward']
  },
  {
    id: 'k12-3',
    tier: 'k12-foundations',
    title: 'While Loop: while (!atGoal)',
    levelNumber: 21,
    difficulty: 'Explorer',
    concept: 'Loop Termination Conditions',
    story: 'Instead of counting exact steps, while-loops keep repeating as long as a condition is true. Guide Nova to the beacon!',
    mascot: 'rocket',
    gridSize: { rows: 6, cols: 6 },
    start: { x: 0, y: 3, dir: 'right' },
    goal: { x: 5, y: 3 },
    collectibles: [{ x: 5, y: 3, type: 'star' }],
    availableCommands: ['forward', 'repeat-4', 'repeat-2', 'collect'],
    maxCommands: 4,
    hint: 'Stack a Repeat 4x and Forward step to traverse the cosmic coordinate space.',
    pedagogicalNote: 'Loop bounds: avoiding off-by-one errors and infinite loop pitfalls.',
    solutionHint: ['repeat-4', 'forward', 'collect']
  },
  {
    id: 'k12-4',
    tier: 'k12-foundations',
    title: 'Shortest Path Algorithm (Dijkstra Challenge)',
    levelNumber: 22,
    difficulty: 'Explorer',
    concept: 'Graph Search & Pathfinding',
    story: 'There are two paths through the ruins: a long scenic path and a short dangerous path with hurdles. Find the optimal algorithm!',
    mascot: 'robot',
    gridSize: { rows: 6, cols: 6 },
    start: { x: 0, y: 0, dir: 'right' },
    goal: { x: 5, y: 5 },
    obstacles: [
      { x: 1, y: 0, type: 'wall' }, 
      { x: 1, y: 1, type: 'wall' }, 
      { x: 3, y: 3, type: 'wall' },
      { x: 3, y: 4, type: 'wall' }
    ],
    collectibles: [{ x: 5, y: 5, type: 'gem' }],
    availableCommands: ['forward', 'turn-right', 'turn-left', 'jump', 'repeat-3'],
    maxCommands: 8,
    hint: 'Turn down into column 0, repeat forward, and cut diagonally through the central open plaza!',
    pedagogicalNote: 'Computational heuristics: evaluating cost functions in graph navigation.',
    solutionHint: ['turn-right', 'repeat-3', 'turn-left', 'jump', 'turn-right', 'repeat-2']
  },
  {
    id: 'k12-5',
    tier: 'k12-foundations',
    title: 'Turtle Studio: The Golden Pentagon',
    levelNumber: 23,
    difficulty: 'Champion',
    concept: 'Geometry & Exterior Angles (360° / 5 = 72°)',
    story: 'Sheldon the Turtle is in the drawing arena! To draw a regular 5-sided pentagon, turn 72 degrees after every side.',
    mascot: 'turtle',
    gridSize: { rows: 6, cols: 6 },
    start: { x: 1, y: 1, dir: 'right' },
    goal: { x: 4, y: 1 },
    collectibles: [{ x: 4, y: 1, type: 'star' }],
    availableCommands: ['forward', 'turn-right', 'repeat-4', 'collect'],
    maxCommands: 6,
    hint: 'Visit the Turtle Studio tab anytime to write custom angle scripts for stars and polygons!',
    pedagogicalNote: 'Mathematical computing: calculating exterior angles of regular n-gons.',
    solutionHint: ['repeat-4', 'collect']
  },
  {
    id: 'k12-6',
    tier: 'k12-foundations',
    title: 'Master Algorithm: Galactic Mandala',
    levelNumber: 24,
    difficulty: 'Champion',
    concept: 'Nested Loops & Recursive Thinking',
    story: 'Final mastery challenge! Combine loops, obstacle detection, and item collection in a symmetric matrix pattern.',
    mascot: 'rocket',
    gridSize: { rows: 6, cols: 6 },
    start: { x: 1, y: 1, dir: 'right' },
    goal: { x: 4, y: 4 },
    collectibles: [{ x: 3, y: 1, type: 'gem' }, { x: 3, y: 3, type: 'star' }],
    obstacles: [{ x: 2, y: 2, type: 'wall' }],
    availableCommands: ['forward', 'turn-right', 'turn-left', 'jump', 'collect', 'repeat-2'],
    maxCommands: 9,
    hint: 'Collect the top gem, turn down to leap the obstacle, and pick up the star before docking!',
    pedagogicalNote: 'Synthesis: integrating sequencing, looping, functions, and obstacle avoidance.',
    solutionHint: ['repeat-2', 'collect', 'turn-right', 'repeat-2', 'collect', 'forward']
  }
];

export const CS_CONCEPTS: CsConcept[] = [
  {
    id: 'algorithm',
    title: 'Algorithm: The Step-by-Step Recipe',
    emoji: '📝',
    tagline: 'A clear list of instructions to solve a problem or finish a task.',
    kidAnalogy: 'Think of baking chocolate chip cookies! First mix the flour, next add chocolate chips, then bake for 10 minutes. If you bake BEFORE mixing, it will not work!',
    realWorldExample: 'How GPS navigation finds the fastest route to grandma’s house, or how your school morning routine gets you ready on time.',
    codeExample: `// Recipe for brushing teeth:
1. Put toothpaste on brush
2. Brush teeth for 2 minutes
3. Rinse mouth with water
4. Smile in the mirror!`,
    funFact: 'The word "Algorithm" comes from the 9th-century mathematician Muhammad ibn Musa al-Khwarizmi from Khwarizm (modern-day Uzbekistan)!',
    interactiveChallenge: {
      question: 'Which of these is the correct algorithmic order for putting on your shoes?',
      options: [
        '1. Tie laces → 2. Put on shoes → 3. Put on socks',
        '1. Put on socks → 2. Put on shoes → 3. Tie laces',
        '1. Put on shoes → 2. Tie laces → 3. Put on socks'
      ],
      correctIndex: 1,
      explanation: 'Socks must go on before shoes, and laces are tied last! Order matters in code.'
    }
  },
  {
    id: 'sequence',
    title: 'Sequence: Order Matters!',
    emoji: '🔢',
    tagline: 'Computers read instructions one by one, from top to bottom.',
    kidAnalogy: 'Reading a comic book panel by panel! If you skip backwards, the funny punchline will not make sense.',
    realWorldExample: 'A traffic light sequence: Green (Go) → Yellow (Caution) → Red (Stop).',
    codeExample: `mascot.moveForward();
mascot.turnRight();
mascot.collectStar();`,
    funFact: 'Computers follow instructions so fast that a modern smartphone can execute over 3 billion instructions in one single second!',
    interactiveChallenge: {
      question: 'If you tell a robot: "1. Turn Right, 2. Move Forward 3 steps", what does it do first?',
      options: [
        'It moves forward 3 steps first',
        'It turns right first',
        'It does both at the exact same time'
      ],
      correctIndex: 1,
      explanation: 'Code runs in sequence: Step 1 (Turn Right) executes before Step 2 (Move Forward).'
    }
  },
  {
    id: 'loops',
    title: 'Loops: Repeat Without Retyping!',
    emoji: '🔁',
    tagline: 'Repeat an action multiple times so you do not have to write it again and again.',
    kidAnalogy: 'Instead of saying "Chew, chew, chew, chew, chew, chew", your parent says "Chew your food 6 times!"',
    realWorldExample: 'The seconds hand on a wall clock loops 60 times every minute. Or brushing each tooth in circles!',
    codeExample: `// Instead of writing moveForward 5 times:
for (let step = 0; step < 5; step++) {
  robot.moveForward();
}`,
    funFact: 'NASA space probes use loops to take thousands of photos of distant moons automatically while flying by at 30,000 miles per hour!',
    interactiveChallenge: {
      question: 'If you want a robot to walk 4 steps, which code is cleanest?',
      options: [
        'forward(); forward(); forward(); forward();',
        'repeat(4) { forward(); }',
        'forward(); turn(); forward();'
      ],
      correctIndex: 1,
      explanation: 'Using `repeat(4)` is much shorter, cleaner, and less likely to have typos than writing forward 4 times!'
    }
  },
  {
    id: 'bugs',
    title: 'Bugs & Debugging: The Mystery of the Moth',
    emoji: '🐛',
    tagline: 'A "bug" is an unexpected mistake in code. "Debugging" is finding and fixing it!',
    kidAnalogy: 'Spelling the word "CAT" as "CTA". Once you see the mistake, you erase the T and A and fix it!',
    realWorldExample: 'When a game character gets stuck inside a wall, a programmer finds the boundary bug and fixes the coordinates.',
    codeExample: `// BUG:
robot.turnLeft(); // Oops! Wanted to go right!

// FIXED (DEBUGGED):
robot.turnRight();`,
    funFact: 'In 1947, computer pioneer Grace Hopper found a real moth trapped inside a Mark II computer relay. She taped it in her logbook and wrote: "First actual case of bug being found!"',
    interactiveChallenge: {
      question: 'When your code does not work the way you expected, what should you do?',
      options: [
        'Get angry and give up immediately',
        'Smile, look at each step carefully, and test where it went wrong (debug it!)',
        'Delete the whole computer'
      ],
      correctIndex: 1,
      explanation: 'Every great software engineer spends time debugging! Finding bugs is like solving a fun detective mystery.'
    }
  },
  {
    id: 'conditionals',
    title: 'Conditionals: If / Else Decisions',
    emoji: '🔀',
    tagline: 'Making decisions based on whether something is TRUE or FALSE.',
    kidAnalogy: '"IF it is raining outside, take an umbrella. ELSE, wear your favorite sunglasses!"',
    realWorldExample: 'Automatic supermarket sliding doors: IF a person steps on the sensor mat, open the doors. ELSE keep doors closed.',
    codeExample: `if (isWaterAhead()) {
  robot.jump();
} else {
  robot.moveForward();
}`,
    funFact: 'Video games use thousands of IF statements every second: "IF player touched coin, add 10 points! IF health is 0, play game over sound!"',
    interactiveChallenge: {
      question: 'Complete the rule: "IF bedtime is 8:00 PM and the clock says 8:00 PM, THEN _____"',
      options: [
        'Go eat breakfast',
        'Go brush teeth and get into bed',
        'Start playing soccer outside'
      ],
      correctIndex: 1,
      explanation: 'Condition matched (it is 8:00 PM), so the bedtime action triggers!'
    }
  },
  {
    id: 'variables',
    title: 'Variables: Magic Labeled Boxes',
    emoji: '📦',
    tagline: 'A named container that holds a value like numbers, words, or scores.',
    kidAnalogy: 'A piggy bank with your name written on it. You can look inside to see how many coins are saved, and drop in more coins anytime!',
    realWorldExample: 'Your age on your birthday, the high score in a video game, or the temperature displayed on a weather app.',
    codeExample: `let studentStars = 5;
studentStars = studentStars + 1; // Now it holds 6!`,
    funFact: 'Variables can store words (Strings), numbers (Integers), or yes/no answers (Booleans: true or false)!',
    interactiveChallenge: {
      question: 'If `let stars = 3;` and you collect 2 more stars, what does `stars` hold now?',
      options: [
        '3 stars',
        '5 stars',
        '2 stars'
      ],
      correctIndex: 1,
      explanation: '3 + 2 = 5! The variable now stores the number 5.'
    }
  },
  {
    id: 'functions',
    title: 'Functions: Packaged Superpowers',
    emoji: '🪄',
    tagline: 'A group of commands given a special name so you can summon them anytime.',
    kidAnalogy: 'Saying "Clean your room!" packs many steps: pick up toys, make the bed, fold clothes. One short phrase triggers the whole routine!',
    realWorldExample: 'The "Shuffle" button on a music player: one tap runs complex math to randomize 100 songs.',
    codeExample: `function celebrateWin() {
  robot.spinAround();
  playSoundEffect('cheer');
  dropConfetti();
}

// Call the function anytime:
celebrateWin();`,
    funFact: 'A modern operating system like Windows or iOS has over 100 million functions working together smoothly!',
    interactiveChallenge: {
      question: 'Why do programmers like using functions?',
      options: [
        'Because they make computers run out of battery faster',
        'Because you can write complex code once and reuse it easily anytime with a single name',
        'Because functions are only for mathematicians'
      ],
      correctIndex: 1,
      explanation: 'Functions keep code organized, clean, and reusable without copy-pasting the same steps over and over!'
    }
  }
];

export interface TurtleDrawingPreset {
  id: string;
  title: string;
  emoji: string;
  category: 'Geometric' | 'Nature & Art' | 'Magic Stars';
  description: string;
  commands: { action: 'forward' | 'turn' | 'color'; value: number | string }[];
  codePreview: string;
}

export const TURTLE_DRAWING_PRESETS: TurtleDrawingPreset[] = [
  {
    id: 'square',
    title: 'Colorful Square',
    emoji: '🟦',
    category: 'Geometric',
    description: '4 equal sides with 90° right turns.',
    commands: [
      { action: 'color', value: '#4D96FF' },
      { action: 'forward', value: 90 },
      { action: 'turn', value: 90 },
      { action: 'forward', value: 90 },
      { action: 'turn', value: 90 },
      { action: 'forward', value: 90 },
      { action: 'turn', value: 90 },
      { action: 'forward', value: 90 },
      { action: 'turn', value: 90 }
    ],
    codePreview: `setColor("#4D96FF");
for (let i = 0; i < 4; i++) {
  forward(90);
  turn(90);
}`
  },
  {
    id: 'star-5',
    title: 'Golden 5-Point Star',
    emoji: '⭐️',
    category: 'Magic Stars',
    description: 'A glowing star drawn with 144° turns!',
    commands: [
      { action: 'color', value: '#FFD93D' },
      { action: 'forward', value: 100 },
      { action: 'turn', value: 144 },
      { action: 'forward', value: 100 },
      { action: 'turn', value: 144 },
      { action: 'forward', value: 100 },
      { action: 'turn', value: 144 },
      { action: 'forward', value: 100 },
      { action: 'turn', value: 144 },
      { action: 'forward', value: 100 },
      { action: 'turn', value: 144 }
    ],
    codePreview: `setColor("#FFD93D");
for (let i = 0; i < 5; i++) {
  forward(100);
  turn(144);
}`
  },
  {
    id: 'hexagon',
    title: 'Honeycomb Hexagon',
    emoji: '⬡',
    category: 'Geometric',
    description: '6 equal sides with 60° gentle turns, like a real beehive!',
    commands: [
      { action: 'color', value: '#FF9F45' },
      { action: 'forward', value: 70 },
      { action: 'turn', value: 60 },
      { action: 'forward', value: 70 },
      { action: 'turn', value: 60 },
      { action: 'forward', value: 70 },
      { action: 'turn', value: 60 },
      { action: 'forward', value: 70 },
      { action: 'turn', value: 60 },
      { action: 'forward', value: 70 },
      { action: 'turn', value: 60 },
      { action: 'forward', value: 70 },
      { action: 'turn', value: 60 }
    ],
    codePreview: `setColor("#FF9F45");
for (let i = 0; i < 6; i++) {
  forward(70);
  turn(60);
}`
  },
  {
    id: 'triangle',
    title: 'Equilateral Triangle',
    emoji: '🔺',
    category: 'Geometric',
    description: '3 equal sides with 120° sharp turns.',
    commands: [
      { action: 'color', value: '#FF6B6B' },
      { action: 'forward', value: 110 },
      { action: 'turn', value: 120 },
      { action: 'forward', value: 110 },
      { action: 'turn', value: 120 },
      { action: 'forward', value: 110 },
      { action: 'turn', value: 120 }
    ],
    codePreview: `setColor("#FF6B6B");
for (let i = 0; i < 3; i++) {
  forward(110);
  turn(120);
}`
  },
  {
    id: 'flower-rosette',
    title: 'Galactic Flower Rosette',
    emoji: '🌸',
    category: 'Nature & Art',
    description: 'Nested loops drawing petals rotated around the center.',
    commands: [
      { action: 'color', value: '#8B5CF6' },
      { action: 'forward', value: 60 },
      { action: 'turn', value: 60 },
      { action: 'forward', value: 60 },
      { action: 'turn', value: 120 },
      { action: 'forward', value: 60 },
      { action: 'turn', value: 60 },
      { action: 'forward', value: 60 },
      { action: 'turn', value: 120 },
      { action: 'turn', value: 60 },
      { action: 'forward', value: 60 },
      { action: 'turn', value: 60 },
      { action: 'forward', value: 60 },
      { action: 'turn', value: 120 },
      { action: 'forward', value: 60 },
      { action: 'turn', value: 60 },
      { action: 'forward', value: 60 }
    ],
    codePreview: `setColor("#8B5CF6");
for (let petal = 0; petal < 6; petal++) {
  drawRhombus(60);
  turn(60);
}`
  },
  {
    id: 'house',
    title: 'Cozy House & Roof',
    emoji: '🏠',
    category: 'Nature & Art',
    description: 'Combining a square base with a triangular roof.',
    commands: [
      { action: 'color', value: '#6BCB77' },
      { action: 'forward', value: 80 },
      { action: 'turn', value: 90 },
      { action: 'forward', value: 80 },
      { action: 'turn', value: 90 },
      { action: 'forward', value: 80 },
      { action: 'turn', value: 90 },
      { action: 'forward', value: 80 },
      { action: 'turn', value: 90 },
      { action: 'forward', value: 80 },
      { action: 'color', value: '#FF6B6B' },
      { action: 'turn', value: 30 },
      { action: 'forward', value: 80 },
      { action: 'turn', value: 120 },
      { action: 'forward', value: 80 }
    ],
    codePreview: `// Draw base square:
drawSquare(80);
// Draw roof triangle:
moveRoofTop();
drawTriangle(80);`
  }
];
