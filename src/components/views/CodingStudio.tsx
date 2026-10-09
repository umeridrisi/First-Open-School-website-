import React, { useState, useEffect, useRef } from 'react';
import { 
  StudentProfile, 
  ParentSettings, 
  AgeTier, 
  CodingSubTab, 
  CodingMascot, 
  CodingCommandType, 
  CodingMission,
  GridTileType,
  CodingBlock
} from '../../types';
import { 
  CODING_MASCOTS, 
  CODING_BLOCKS, 
  CODING_MISSIONS, 
  CS_CONCEPTS, 
  TURTLE_DRAWING_PRESETS,
  TurtleDrawingPreset,
  MascotInfo 
} from '../../data/codingData';
import { AGE_TIER_INFO } from '../../data/curriculumData';
import { speakText, playSoundEffect } from '../../utils/sound';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  StepForward, 
  Sparkles, 
  Trophy, 
  CheckCircle2, 
  ArrowRight, 
  Lightbulb, 
  Terminal, 
  Grid, 
  PenTool, 
  BookOpen, 
  HelpCircle, 
  Code2, 
  Trash2, 
  Volume2, 
  ChevronRight,
  Download,
  Share2,
  RefreshCw,
  Compass,
  GraduationCap
} from 'lucide-react';

interface CodingStudioProps {
  student: StudentProfile;
  settings: ParentSettings;
  initialSubTab?: CodingSubTab;
  initialTier?: AgeTier;
  initialMissionId?: string;
  initialConceptId?: string;
  onAwardStars: (stars: number, reason: string) => void;
  onNavigateSubTab?: (subTab: CodingSubTab) => void;
}

export const CodingStudio: React.FC<CodingStudioProps> = ({
  student,
  settings,
  initialSubTab = 'quests',
  initialTier,
  initialMissionId,
  initialConceptId,
  onAwardStars,
  onNavigateSubTab
}) => {
  // Navigation & Filter states
  const [activeSubTab, setActiveSubTab] = useState<CodingSubTab>(initialSubTab);
  const [selectedTier, setSelectedTier] = useState<AgeTier>(initialTier || student.ageTier || 'pre-k');
  
  // Selected Mission state
  const missionsForTier = CODING_MISSIONS.filter(m => m.tier === selectedTier);
  const [currentMission, setCurrentMission] = useState<CodingMission>(() => {
    if (initialMissionId) {
      const found = CODING_MISSIONS.find(m => m.id === initialMissionId);
      if (found) return found;
    }
    return missionsForTier[0] || CODING_MISSIONS[0];
  });

  // Selected Mascot
  const [selectedMascotId, setSelectedMascotId] = useState<CodingMascot>(currentMission.mascot || 'robot');
  const activeMascot = CODING_MASCOTS.find(m => m.id === selectedMascotId) || CODING_MASCOTS[0];

  // Code Sequence state
  const [programSequence, setProgramSequence] = useState<CodingCommandType[]>([]);
  const [activeStepIndex, setActiveStepIndex] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'blocks' | 'code'>('blocks');

  // Simulation execution state
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1); // 0.5 (slow), 1 (normal), 2 (fast)
  const [robotPos, setRobotPos] = useState<{ x: number; y: number; dir: 'up' | 'down' | 'left' | 'right' }>({
    x: currentMission.start.x,
    y: currentMission.start.y,
    dir: currentMission.start.dir
  });
  const [inventory, setInventory] = useState<{ stars: number; carrots: number; gems: number; keys: number }>({
    stars: 0,
    carrots: 0,
    gems: 0,
    keys: 0
  });
  const [collectedItems, setCollectedItems] = useState<Set<string>>(new Set());
  const [unlockedGates, setUnlockedGates] = useState<Set<string>>(new Set());
  const [executionMessage, setExecutionMessage] = useState<string | null>(null);
  const [missionCompleted, setMissionCompleted] = useState<boolean>(false);
  const [showVictoryModal, setShowVictoryModal] = useState<boolean>(false);
  const [showHintModal, setShowHintModal] = useState<boolean>(false);

  // Completed missions tracked in local state / student stars
  const [completedMissions, setCompletedMissions] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem('first_open_completed_missions');
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  });

  // Concepts Tab state
  const [selectedConceptId, setSelectedConceptId] = useState<string>(initialConceptId || CS_CONCEPTS[0].id);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [quizResults, setQuizResults] = useState<Record<string, boolean>>({});

  // Turtle Canvas Tab state
  const turtleCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const [selectedTurtlePreset, setSelectedTurtlePreset] = useState<TurtleDrawingPreset>(TURTLE_DRAWING_PRESETS[0]);
  const [turtlePenColor, setTurtlePenColor] = useState<string>('#4D96FF');
  const [turtleStrokeWidth, setTurtleStrokeWidth] = useState<number>(4);
  const [turtleIsDrawing, setTurtleIsDrawing] = useState<boolean>(false);

  // Sync when mission changes
  useEffect(() => {
    resetMissionState(currentMission);
    setSelectedMascotId(currentMission.mascot);
  }, [currentMission]);

  // Sync tier filter changes
  useEffect(() => {
    const list = CODING_MISSIONS.filter(m => m.tier === selectedTier);
    if (list.length > 0 && (!currentMission || currentMission.tier !== selectedTier)) {
      setCurrentMission(list[0]);
    }
  }, [selectedTier]);

  const resetMissionState = (mission: CodingMission) => {
    setIsRunning(false);
    setActiveStepIndex(null);
    setRobotPos({
      x: mission.start.x,
      y: mission.start.y,
      dir: mission.start.dir
    });
    setInventory({ stars: 0, carrots: 0, gems: 0, keys: 0 });
    setCollectedItems(new Set());
    setUnlockedGates(new Set());
    setExecutionMessage(null);
    setMissionCompleted(false);
    setShowVictoryModal(false);
  };

  const handleSubTabChange = (sub: CodingSubTab) => {
    playSoundEffect('click', settings.soundEffects);
    setActiveSubTab(sub);
    if (onNavigateSubTab) {
      onNavigateSubTab(sub);
    }
  };

  const handleAddCommand = (cmd: CodingCommandType) => {
    if (isRunning) return;
    if (currentMission.maxCommands && programSequence.length >= currentMission.maxCommands) {
      playSoundEffect('wrong', settings.soundEffects);
      speakText(`Program limit reached! Maximum ${currentMission.maxCommands} commands.`, settings.voiceGuidance);
      return;
    }
    playSoundEffect('pop', settings.soundEffects);
    setProgramSequence(prev => [...prev, cmd]);
    const block = CODING_BLOCKS[cmd];
    if (block) {
      speakText(block.label, settings.voiceGuidance);
    }
  };

  const handleRemoveCommand = (index: number) => {
    if (isRunning) return;
    playSoundEffect('click', settings.soundEffects);
    setProgramSequence(prev => prev.filter((_, i) => i !== index));
  };

  const handleClearProgram = () => {
    if (isRunning) return;
    playSoundEffect('click', settings.soundEffects);
    setProgramSequence([]);
    resetMissionState(currentMission);
  };

  // Turn helper
  const getNextDir = (currentDir: 'up' | 'down' | 'left' | 'right', turn: 'left' | 'right'): 'up' | 'down' | 'left' | 'right' => {
    const clockwise: ('up' | 'right' | 'down' | 'left')[] = ['up', 'right', 'down', 'left'];
    const idx = clockwise.indexOf(currentDir);
    if (turn === 'right') {
      return clockwise[(idx + 1) % 4];
    } else {
      return clockwise[(idx + 3) % 4];
    }
  };

  // Step vector helper
  const getStepDelta = (dir: 'up' | 'down' | 'left' | 'right', distance: number = 1): { dx: number; dy: number } => {
    switch (dir) {
      case 'up': return { dx: 0, dy: -distance };
      case 'down': return { dx: 0, dy: distance };
      case 'left': return { dx: -distance, dy: 0 };
      case 'right': return { dx: distance, dy: 0 };
    }
  };

  // Step execution runner
  const executeStep = async (stepIndex: number): Promise<boolean> => {
    if (stepIndex >= programSequence.length) {
      return false;
    }

    setActiveStepIndex(stepIndex);
    const cmd = programSequence[stepIndex];
    let nextPos = { ...robotPos };
    let newInventory = { ...inventory };
    let newCollected = new Set(collectedItems);
    let newGates = new Set(unlockedGates);

    // Speak action if voice guidance enabled
    const block = CODING_BLOCKS[cmd];
    if (block && settings.voiceGuidance) {
      speakText(block.label, true, settings.voiceSpeed || 0.9);
    }

    let moveFailed = false;

    switch (cmd) {
      case 'forward': {
        const delta = getStepDelta(robotPos.dir, 1);
        const targetX = robotPos.x + delta.dx;
        const targetY = robotPos.y + delta.dy;

        // Check grid bounds
        if (targetX < 0 || targetX >= currentMission.gridSize.cols || targetY < 0 || targetY >= currentMission.gridSize.rows) {
          moveFailed = true;
          setExecutionMessage("Bumped into the boundary edge! Turn around!");
          playSoundEffect('wrong', settings.soundEffects);
          break;
        }

        // Check obstacles
        const obstacle = currentMission.obstacles?.find(o => o.x === targetX && o.y === targetY);
        if (obstacle) {
          if (obstacle.type === 'gate' && newGates.has(`${targetX},${targetY}`)) {
            // Gate unlocked
          } else {
            moveFailed = true;
            setExecutionMessage(`Blocked by ${obstacle.type}! Find a path around or unlock it.`);
            playSoundEffect('wrong', settings.soundEffects);
            break;
          }
        }

        nextPos.x = targetX;
        nextPos.y = targetY;
        playSoundEffect('pop', settings.soundEffects);
        break;
      }

      case 'backward': {
        const delta = getStepDelta(robotPos.dir, -1);
        const targetX = robotPos.x + delta.dx;
        const targetY = robotPos.y + delta.dy;
        if (targetX >= 0 && targetX < currentMission.gridSize.cols && targetY >= 0 && targetY < currentMission.gridSize.rows) {
          nextPos.x = targetX;
          nextPos.y = targetY;
          playSoundEffect('pop', settings.soundEffects);
        } else {
          moveFailed = true;
          playSoundEffect('wrong', settings.soundEffects);
        }
        break;
      }

      case 'turn-left': {
        nextPos.dir = getNextDir(robotPos.dir, 'left');
        playSoundEffect('click', settings.soundEffects);
        break;
      }

      case 'turn-right': {
        nextPos.dir = getNextDir(robotPos.dir, 'right');
        playSoundEffect('click', settings.soundEffects);
        break;
      }

      case 'jump': {
        const delta = getStepDelta(robotPos.dir, 2);
        const targetX = robotPos.x + delta.dx;
        const targetY = robotPos.y + delta.dy;
        if (targetX >= 0 && targetX < currentMission.gridSize.cols && targetY >= 0 && targetY < currentMission.gridSize.rows) {
          nextPos.x = targetX;
          nextPos.y = targetY;
          playSoundEffect('star', settings.soundEffects);
        } else {
          moveFailed = true;
          playSoundEffect('wrong', settings.soundEffects);
        }
        break;
      }

      case 'collect': {
        const item = currentMission.collectibles?.find(c => c.x === robotPos.x && c.y === robotPos.y);
        const key = `${robotPos.x},${robotPos.y}`;
        if (item && !newCollected.has(key)) {
          newCollected.add(key);
          setCollectedItems(newCollected);
          if (item.type === 'star') newInventory.stars += 1;
          if (item.type === 'carrot') newInventory.carrots += 1;
          if (item.type === 'gem') newInventory.gems += 1;
          if (item.type === 'key') newInventory.keys += 1;
          setInventory(newInventory);
          playSoundEffect('star', settings.soundEffects);
          speakText(`Collected ${item.type}!`, settings.voiceGuidance);
        } else {
          setExecutionMessage("Nothing to collect on this tile.");
        }
        break;
      }

      case 'repeat-2':
      case 'repeat-3':
      case 'repeat-4': {
        const count = cmd === 'repeat-2' ? 2 : cmd === 'repeat-3' ? 3 : 4;
        const delta = getStepDelta(robotPos.dir, count);
        const targetX = robotPos.x + delta.dx;
        const targetY = robotPos.y + delta.dy;
        if (targetX >= 0 && targetX < currentMission.gridSize.cols && targetY >= 0 && targetY < currentMission.gridSize.rows) {
          nextPos.x = targetX;
          nextPos.y = targetY;
          playSoundEffect('star', settings.soundEffects);
        } else {
          moveFailed = true;
          playSoundEffect('wrong', settings.soundEffects);
        }
        break;
      }

      case 'if-water': {
        // Look ahead 1 step
        const delta = getStepDelta(robotPos.dir, 1);
        const checkX = robotPos.x + delta.dx;
        const checkY = robotPos.y + delta.dy;
        const isWaterAhead = currentMission.obstacles?.some(o => (o.type === 'water' || o.type === 'puddle') && o.x === checkX && o.y === checkY);

        if (isWaterAhead) {
          // Leap across 2 steps
          const jumpDelta = getStepDelta(robotPos.dir, 2);
          nextPos.x = robotPos.x + jumpDelta.dx;
          nextPos.y = robotPos.y + jumpDelta.dy;
          speakText("Water detected! Executing automatic leap!", settings.voiceGuidance);
          playSoundEffect('star', settings.soundEffects);
        } else {
          // Normal step forward
          nextPos.x = robotPos.x + delta.dx;
          nextPos.y = robotPos.y + delta.dy;
          playSoundEffect('pop', settings.soundEffects);
        }
        break;
      }

      case 'if-key': {
        if (inventory.keys > 0) {
          const delta = getStepDelta(robotPos.dir, 1);
          const gatePosKey = `${robotPos.x + delta.dx},${robotPos.y + delta.dy}`;
          newGates.add(gatePosKey);
          setUnlockedGates(newGates);
          speakText("Key used! Gate unlocked!", settings.voiceGuidance);
          playSoundEffect('victory', settings.soundEffects);
        } else {
          setExecutionMessage("No key in inventory! Collect the key first.");
          playSoundEffect('wrong', settings.soundEffects);
        }
        break;
      }

      case 'func-leap': {
        // Jump + Collect
        const delta = getStepDelta(robotPos.dir, 2);
        nextPos.x = robotPos.x + delta.dx;
        nextPos.y = robotPos.y + delta.dy;
        const itemKey = `${nextPos.x},${nextPos.y}`;
        const item = currentMission.collectibles?.find(c => c.x === nextPos.x && c.y === nextPos.y);
        if (item && !newCollected.has(itemKey)) {
          newCollected.add(itemKey);
          setCollectedItems(newCollected);
          if (item.type === 'carrot') newInventory.carrots += 1;
          setInventory(newInventory);
        }
        playSoundEffect('star', settings.soundEffects);
        break;
      }
    }

    setRobotPos(nextPos);

    // Auto-collect if stepped directly onto star or carrot
    const curItem = currentMission.collectibles?.find(c => c.x === nextPos.x && c.y === nextPos.y);
    const posKey = `${nextPos.x},${nextPos.y}`;
    if (curItem && !newCollected.has(posKey)) {
      newCollected.add(posKey);
      setCollectedItems(newCollected);
      if (curItem.type === 'star') newInventory.stars += 1;
      if (curItem.type === 'carrot') newInventory.carrots += 1;
      if (curItem.type === 'gem') newInventory.gems += 1;
      if (curItem.type === 'key') newInventory.keys += 1;
      setInventory(newInventory);
      playSoundEffect('star', settings.soundEffects);
    }

    // Check goal achievement
    if (nextPos.x === currentMission.goal.x && nextPos.y === currentMission.goal.y) {
      // Check if all collectibles gathered
      const totalCollectibles = currentMission.collectibles?.length || 0;
      const gatheredCount = newCollected.size;

      if (totalCollectibles === 0 || gatheredCount >= totalCollectibles) {
        setMissionCompleted(true);
        setShowVictoryModal(true);
        setIsRunning(false);
        playSoundEffect('victory', settings.soundEffects);
        speakText("Mission accomplished! Fantastic algorithm!", settings.voiceGuidance);

        // Save completed mission
        const updatedCompleted = new Set(completedMissions);
        updatedCompleted.add(currentMission.id);
        setCompletedMissions(updatedCompleted);
        try {
          localStorage.setItem('first_open_completed_missions', JSON.stringify(Array.from(updatedCompleted)));
        } catch {}

        // Award stars
        onAwardStars(3, `Coding Quest Completed: ${currentMission.title}`);
        return false;
      } else {
        setExecutionMessage(`Reached the goal, but missed some items! Collected ${gatheredCount}/${totalCollectibles}.`);
      }
    }

    return !moveFailed;
  };

  // Run all steps sequentially with timer
  const handleRunProgram = async () => {
    if (programSequence.length === 0) {
      playSoundEffect('wrong', settings.soundEffects);
      speakText("Add commands from the toolbox first!", settings.voiceGuidance);
      return;
    }

    resetMissionState(currentMission);
    setIsRunning(true);
    setExecutionMessage("Executing program...");

    const delayMs = playbackSpeed === 0.5 ? 1000 : playbackSpeed === 2 ? 350 : 600;

    for (let i = 0; i < programSequence.length; i++) {
      const ok = await executeStep(i);
      if (!ok) {
        setIsRunning(false);
        return;
      }
      await new Promise(res => setTimeout(res, delayMs));
    }

    setIsRunning(false);
    setActiveStepIndex(null);

    // Final evaluation if not yet reached
    if (robotPos.x !== currentMission.goal.x || robotPos.y !== currentMission.goal.y) {
      setExecutionMessage("Program finished, but did not reach the flag! Check your steps and try again.");
      speakText("Try adding more steps or fixing turns!", settings.voiceGuidance);
    }
  };

  // Step-by-step debugger
  const handleSingleStep = async () => {
    if (programSequence.length === 0) return;
    const nextIdx = activeStepIndex === null ? 0 : (activeStepIndex + 1) % programSequence.length;
    await executeStep(nextIdx);
  };

  // Turtle Canvas Render & Presets
  const drawTurtlePattern = (preset: TurtleDrawingPreset) => {
    const canvas = turtleCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    setTurtleIsDrawing(true);
    playSoundEffect('pop', settings.soundEffects);

    // Clear background
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw coordinate guide grid
    ctx.strokeStyle = '#F3F4F6';
    ctx.lineWidth = 1;
    for (let x = 0; x < canvas.width; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += 40) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }

    // Start in center
    let x = canvas.width / 2;
    let y = canvas.height / 2;
    let angleDeg = -90; // Facing Upwards

    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = turtleStrokeWidth;

    let currentColor = turtlePenColor;

    preset.commands.forEach((cmd, idx) => {
      setTimeout(() => {
        if (!canvas) return;
        const curCtx = canvas.getContext('2d');
        if (!curCtx) return;

        if (cmd.action === 'color') {
          currentColor = String(cmd.value);
        } else if (cmd.action === 'turn') {
          angleDeg += Number(cmd.value);
        } else if (cmd.action === 'forward') {
          const dist = Number(cmd.value);
          const rad = (angleDeg * Math.PI) / 180;
          const targetX = x + Math.cos(rad) * dist;
          const targetY = y + Math.sin(rad) * dist;

          curCtx.strokeStyle = currentColor;
          curCtx.beginPath();
          curCtx.moveTo(x, y);
          curCtx.lineTo(targetX, targetY);
          curCtx.stroke();

          x = targetX;
          y = targetY;
        }

        if (idx === preset.commands.length - 1) {
          setTurtleIsDrawing(false);
          playSoundEffect('star', settings.soundEffects);
          speakText(`Finished drawing ${preset.title}!`, settings.voiceGuidance);
          onAwardStars(2, `Turtle Drawing Created: ${preset.title}`);
        }
      }, idx * 120);
    });
  };

  useEffect(() => {
    if (activeSubTab === 'turtle') {
      const timer = setTimeout(() => {
        drawTurtlePattern(selectedTurtlePreset);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [activeSubTab, selectedTurtlePreset]);

  // Concept Quiz Handler
  const handleAnswerConceptQuiz = (conceptId: string, optionIndex: number) => {
    const concept = CS_CONCEPTS.find(c => c.id === conceptId);
    if (!concept) return;

    playSoundEffect('click', settings.soundEffects);
    setQuizAnswers(prev => ({ ...prev, [conceptId]: optionIndex }));

    const isCorrect = optionIndex === concept.interactiveChallenge.correctIndex;
    setQuizResults(prev => ({ ...prev, [conceptId]: isCorrect }));

    if (isCorrect) {
      playSoundEffect('correct', settings.soundEffects);
      speakText("Correct answer! Great computational thinking!", settings.voiceGuidance);
      onAwardStars(1, `CS Concept Mastered: ${concept.title}`);
    } else {
      playSoundEffect('wrong', settings.soundEffects);
      speakText("Not quite! Read the concept analogy again.", settings.voiceGuidance);
    }
  };

  // Next Mission selector
  const handleNextMission = () => {
    const currentIdx = CODING_MISSIONS.findIndex(m => m.id === currentMission.id);
    if (currentIdx < CODING_MISSIONS.length - 1) {
      const next = CODING_MISSIONS[currentIdx + 1];
      setSelectedTier(next.tier);
      setCurrentMission(next);
      setProgramSequence([]);
      resetMissionState(next);
    } else {
      setShowVictoryModal(false);
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Top Banner & Module Header */}
      <div className="bg-gradient-to-r from-[#4D96FF]/15 via-white to-[#6BCB77]/15 rounded-[32px] p-6 sm:p-8 border-4 border-[#4D96FF] shadow-[0_8px_0_#3A72C1] space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-xs font-bold text-[#4D96FF] tracking-wider uppercase">
              <Code2 className="w-4 h-4 text-[#4D96FF]" />
              <span>Interactive Computational Thinking &bull; 100% In-Browser</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-[#2D2D2D] tracking-tight flex items-center gap-3">
              <span>Learn Coding Studio</span>
              <span className="text-3xl sm:text-4xl">💻</span>
            </h1>
            <p className="text-sm font-semibold text-[#2D2D2D]/75 max-w-2xl leading-relaxed">
              Step-by-step algorithms, loops, conditionals, and geometric turtle art crafted for your curriculum level. Code in blocks or view clean real-world JavaScript!
            </p>
          </div>

          {/* Module Navigation Tabs (Segmented Buttons - Zero-Pill Compliant) */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#FFF9F0] rounded-2xl border-2 border-gray-200">
            <button
              onClick={() => handleSubTabChange('quests')}
              className={`px-4 py-2.5 rounded-xl font-black text-xs uppercase tracking-tight transition-all flex items-center space-x-2 cursor-pointer ${
                activeSubTab === 'quests'
                  ? 'bg-[#4D96FF] text-white shadow-sm'
                  : 'text-gray-600 hover:text-[#2D2D2D]'
              }`}
            >
              <Trophy className="w-4 h-4" />
              <span>Quests ({CODING_MISSIONS.length})</span>
            </button>

            <button
              onClick={() => handleSubTabChange('sandbox')}
              className={`px-4 py-2.5 rounded-xl font-black text-xs uppercase tracking-tight transition-all flex items-center space-x-2 cursor-pointer ${
                activeSubTab === 'sandbox'
                  ? 'bg-[#6BCB77] text-white shadow-sm'
                  : 'text-gray-600 hover:text-[#2D2D2D]'
              }`}
            >
              <Grid className="w-4 h-4" />
              <span>Code Sandbox</span>
            </button>

            <button
              onClick={() => handleSubTabChange('turtle')}
              className={`px-4 py-2.5 rounded-xl font-black text-xs uppercase tracking-tight transition-all flex items-center space-x-2 cursor-pointer ${
                activeSubTab === 'turtle'
                  ? 'bg-[#FF9F45] text-white shadow-sm'
                  : 'text-gray-600 hover:text-[#2D2D2D]'
              }`}
            >
              <PenTool className="w-4 h-4" />
              <span>Turtle Studio</span>
            </button>

            <button
              onClick={() => handleSubTabChange('concepts')}
              className={`px-4 py-2.5 rounded-xl font-black text-xs uppercase tracking-tight transition-all flex items-center space-x-2 cursor-pointer ${
                activeSubTab === 'concepts'
                  ? 'bg-[#8B5CF6] text-white shadow-sm'
                  : 'text-gray-600 hover:text-[#2D2D2D]'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>CS Concepts</span>
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* SUB-TAB 1: QUESTS & MISSIONS                              */}
      {/* ========================================================= */}
      {activeSubTab === 'quests' && (
        <div className="space-y-6">
          
          {/* Curriculum Tier Filter & Level Select Bar */}
          <div className="bg-white rounded-[28px] p-5 border-4 border-gray-200 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Select Curriculum Tier:</span>
                  <a
                    href={`/curriculum/${selectedTier}`}
                    className="text-xs font-black text-[#4D96FF] hover:underline flex items-center gap-1 no-underline"
                  >
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>View Tier Curriculum &rarr;</span>
                  </a>
                </div>
                <div className="flex flex-wrap gap-2 pt-1.5">
                  {(Object.keys(AGE_TIER_INFO) as AgeTier[]).map(tierKey => {
                    const info = AGE_TIER_INFO[tierKey];
                    const isSelected = selectedTier === tierKey;
                    return (
                      <button
                        key={tierKey}
                        onClick={() => {
                          playSoundEffect('click', settings.soundEffects);
                          setSelectedTier(tierKey);
                        }}
                        className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer border-2 ${
                          isSelected
                            ? 'bg-[#4D96FF] border-[#3A72C1] text-white shadow-xs'
                            : 'bg-gray-50 border-gray-200 text-gray-700 hover:border-[#4D96FF]'
                        }`}
                      >
                        {info.gradeLabel} ({info.ageRange})
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Mascot Selector */}
              <div className="flex items-center space-x-2">
                <span className="text-xs font-bold text-gray-500 uppercase">Mascot:</span>
                <div className="flex items-center space-x-1">
                  {CODING_MASCOTS.map(m => (
                    <button
                      key={m.id}
                      onClick={() => {
                        playSoundEffect('click', settings.soundEffects);
                        setSelectedMascotId(m.id);
                        speakText(m.voiceIntro, settings.voiceGuidance);
                      }}
                      title={m.name}
                      className={`w-9 h-9 rounded-xl flex items-center justify-center text-lg transition-transform cursor-pointer border-2 ${
                        selectedMascotId === m.id
                          ? 'border-[#4D96FF] bg-sky-50 scale-110 shadow-xs'
                          : 'border-transparent hover:border-gray-300'
                      }`}
                    >
                      {m.emoji}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Missions Carousel / Grid */}
            <div className="pt-2 border-t border-gray-100">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-black text-gray-500 uppercase">
                  {AGE_TIER_INFO[selectedTier].gradeLabel} Missions ({missionsForTier.length}):
                </span>
                <span className="text-xs font-bold text-gray-400">
                  {missionsForTier.filter(m => completedMissions.has(m.id)).length} of {missionsForTier.length} completed
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
                {missionsForTier.map(m => {
                  const isCurrent = currentMission.id === m.id;
                  const isDone = completedMissions.has(m.id);
                  return (
                    <button
                      key={m.id}
                      onClick={() => {
                        playSoundEffect('click', settings.soundEffects);
                        setCurrentMission(m);
                      }}
                      className={`p-2.5 rounded-2xl text-left border-3 transition-all cursor-pointer relative ${
                        isCurrent
                          ? 'bg-sky-50 border-[#4D96FF] shadow-xs scale-102'
                          : isDone
                          ? 'bg-emerald-50/50 border-emerald-300 hover:border-emerald-500'
                          : 'bg-white border-gray-200 hover:border-gray-400'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-black uppercase text-gray-500">Lv {m.levelNumber}</span>
                        {isDone && <CheckCircle2 className="w-3.5 h-3.5 text-[#6BCB77]" />}
                      </div>
                      <div className="font-black text-xs text-[#2D2D2D] truncate">{m.title}</div>
                      <div className="text-[10px] text-gray-500 truncate">{m.difficulty}</div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mission Mission Board & Interactive Coding Workspace */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* LEFT / CENTER: Grid World Canvas (7 cols) */}
            <div className="lg:col-span-7 bg-white rounded-[32px] p-6 border-4 border-[#4D96FF] shadow-[0_8px_0_#3A72C1] space-y-4 flex flex-col justify-between">
              
              {/* Mission Story & Objective Header */}
              <div className="space-y-1.5 pb-2 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="w-8 h-8 rounded-xl bg-[#4D96FF] text-white flex items-center justify-center font-black text-xs shadow-xs">
                      #{currentMission.levelNumber}
                    </span>
                    <div>
                      <h3 className="font-black text-lg text-[#2D2D2D]">{currentMission.title}</h3>
                      <p className="text-xs text-gray-500 font-bold">{currentMission.concept}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      playSoundEffect('click', settings.soundEffects);
                      setShowHintModal(true);
                      speakText(currentMission.hint, settings.voiceGuidance);
                    }}
                    className="flex items-center space-x-1.5 px-3 py-1.5 bg-amber-50 hover:bg-amber-100 text-amber-800 text-xs font-black rounded-xl border border-amber-300 transition-colors cursor-pointer"
                  >
                    <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                    <span>Hint</span>
                  </button>
                </div>
                <p className="text-xs text-gray-600 font-medium leading-relaxed bg-[#FFF9F0] p-3 rounded-xl border border-amber-200">
                  {currentMission.story}
                </p>
              </div>

              {/* 2D Interactive Grid */}
              <div className="flex items-center justify-center py-4 bg-gradient-to-b from-[#FFFDF9] to-[#FFF6E9] rounded-2xl border-2 border-amber-100 p-2 overflow-x-auto">
                <div 
                  className="grid gap-2 select-none"
                  style={{
                    gridTemplateColumns: `repeat(${currentMission.gridSize.cols}, minmax(48px, 68px))`
                  }}
                >
                  {Array.from({ length: currentMission.gridSize.rows }).map((_, r) => (
                    Array.from({ length: currentMission.gridSize.cols }).map((_, c) => {
                      const isRobotHere = robotPos.x === c && robotPos.y === r;
                      const isGoalHere = currentMission.goal.x === c && currentMission.goal.y === r;
                      const obstacle = currentMission.obstacles?.find(o => o.x === c && o.y === r);
                      const collectible = currentMission.collectibles?.find(item => item.x === c && item.y === r);
                      const isCollected = collectedItems.has(`${c},${r}`);
                      const isGateUnlocked = unlockedGates.has(`${c},${r}`);

                      // Mascot rotation transform based on direction
                      const getRotation = () => {
                        switch (robotPos.dir) {
                          case 'right': return 'rotate-0';
                          case 'down': return 'rotate-90';
                          case 'left': return 'rotate-180';
                          case 'up': return '-rotate-90';
                        }
                      };

                      return (
                        <div
                          key={`${r}-${c}`}
                          className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl border-2 flex items-center justify-center relative transition-all duration-300 ${
                            isRobotHere
                              ? 'bg-sky-100 border-[#4D96FF] shadow-sm'
                              : isGoalHere
                              ? 'bg-amber-100 border-[#FFD93D] shadow-sm animate-pulse'
                              : obstacle?.type === 'wall'
                              ? 'bg-gray-300 border-gray-400 text-gray-600'
                              : obstacle?.type === 'water' || obstacle?.type === 'puddle'
                              ? 'bg-blue-100 border-blue-300'
                              : obstacle?.type === 'gate' && !isGateUnlocked
                              ? 'bg-amber-800/10 border-amber-600'
                              : 'bg-white border-gray-200/80 hover:border-gray-300'
                          }`}
                        >
                          {/* Obstacle Icon */}
                          {obstacle && obstacle.type === 'wall' && (
                            <span className="text-xl">🪨</span>
                          )}
                          {obstacle && (obstacle.type === 'water' || obstacle.type === 'puddle') && (
                            <span className="text-xl">💧</span>
                          )}
                          {obstacle && obstacle.type === 'gate' && (
                            <span className="text-xl">{isGateUnlocked ? '🚪✨' : '🚪🔒'}</span>
                          )}

                          {/* Collectible Icon */}
                          {collectible && !isCollected && (
                            <span className="text-2xl animate-bounce">
                              {collectible.type === 'carrot' ? '🥕' : collectible.type === 'star' ? '⭐️' : collectible.type === 'key' ? '🔑' : '💎'}
                            </span>
                          )}

                          {/* Goal Flag */}
                          {isGoalHere && !isRobotHere && (
                            <span className="text-2xl">🏁</span>
                          )}

                          {/* Active Mascot */}
                          {isRobotHere && (
                            <div className={`text-3xl sm:text-4xl transform transition-transform duration-300 ${getRotation()}`}>
                              {activeMascot.emoji}
                            </div>
                          )}

                          {/* Subtle coordinate watermark */}
                          <span className="absolute bottom-1 right-1 text-[8px] font-bold text-gray-300">
                            {c},{r}
                          </span>
                        </div>
                      );
                    })
                  ))}
                </div>
              </div>

              {/* Status & Feedback message */}
              {executionMessage && (
                <div className="p-3 bg-sky-50 border border-sky-200 rounded-xl text-xs font-semibold text-sky-900 flex items-center justify-between">
                  <span>{executionMessage}</span>
                  <button 
                    onClick={() => setExecutionMessage(null)}
                    className="text-sky-600 hover:text-sky-900 font-bold ml-2 cursor-pointer"
                  >
                    ✕
                  </button>
                </div>
              )}

              {/* Live Inventory Bar */}
              <div className="flex items-center justify-between pt-2 border-t border-gray-100 text-xs font-black text-gray-600">
                <div className="flex items-center space-x-3">
                  <span>Inventory:</span>
                  <span className="flex items-center gap-1">⭐️ {inventory.stars}</span>
                  <span className="flex items-center gap-1">🥕 {inventory.carrots}</span>
                  <span className="flex items-center gap-1">💎 {inventory.gems}</span>
                  <span className="flex items-center gap-1">🔑 {inventory.keys}</span>
                </div>

                <div className="flex items-center space-x-1.5 text-gray-400 font-bold">
                  <span>Speed:</span>
                  {[0.5, 1, 2].map(s => (
                    <button
                      key={s}
                      onClick={() => setPlaybackSpeed(s)}
                      className={`px-2 py-0.5 rounded text-[10px] font-black cursor-pointer ${
                        playbackSpeed === s ? 'bg-[#4D96FF] text-white' : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {s}x
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* RIGHT: Code Sequence Builder & Command Toolbox (5 cols) */}
            <div className="lg:col-span-5 bg-white rounded-[32px] p-6 border-4 border-[#6BCB77] shadow-[0_8px_0_#4E9B56] space-y-5 flex flex-col justify-between">
              
              {/* Workspace Header & View Mode Switch */}
              <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                <div>
                  <h4 className="font-black text-base text-[#2D2D2D]">Code Program</h4>
                  <p className="text-[11px] text-gray-500 font-bold">
                    {programSequence.length} {currentMission.maxCommands ? `/ ${currentMission.maxCommands}` : ''} commands
                  </p>
                </div>

                <div className="flex items-center p-1 bg-gray-100 rounded-xl text-xs font-bold">
                  <button
                    onClick={() => setViewMode('blocks')}
                    className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                      viewMode === 'blocks' ? 'bg-white text-[#2D2D2D] shadow-xs' : 'text-gray-500'
                    }`}
                  >
                    Blocks
                  </button>
                  <button
                    onClick={() => setViewMode('code')}
                    className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                      viewMode === 'code' ? 'bg-white text-[#2D2D2D] shadow-xs' : 'text-gray-500'
                    }`}
                  >
                    JavaScript
                  </button>
                </div>
              </div>

              {/* Scheduled Program Steps Sequence */}
              <div className="flex-1 min-h-[160px] max-h-[260px] overflow-y-auto space-y-1.5 p-2 bg-[#FFF9F0] rounded-2xl border-2 border-gray-200">
                {programSequence.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center p-4 text-gray-400 space-y-2">
                    <Terminal className="w-8 h-8 opacity-40" />
                    <p className="text-xs font-bold">Your code sequence is empty.</p>
                    <p className="text-[10px]">Tap commands from the toolbox below to build your algorithm!</p>
                  </div>
                ) : viewMode === 'blocks' ? (
                  programSequence.map((cmd, idx) => {
                    const block = CODING_BLOCKS[cmd];
                    const isActive = activeStepIndex === idx;
                    return (
                      <div
                        key={idx}
                        className={`flex items-center justify-between p-2.5 rounded-xl border-2 transition-all ${
                          isActive
                            ? 'bg-amber-100 border-[#FFD93D] shadow-md scale-102 ring-2 ring-[#FFD93D]'
                            : 'bg-white border-gray-200 shadow-xs'
                        }`}
                      >
                        <div className="flex items-center space-x-2.5">
                          <span className="w-5 h-5 rounded-md bg-gray-100 text-gray-600 font-black text-[10px] flex items-center justify-center">
                            {idx + 1}
                          </span>
                          <span className="text-lg">{block?.emoji}</span>
                          <span className="font-black text-xs text-[#2D2D2D]">{block?.label}</span>
                        </div>

                        <button
                          onClick={() => handleRemoveCommand(idx)}
                          disabled={isRunning}
                          className="w-6 h-6 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 flex items-center justify-center text-xs transition-colors cursor-pointer"
                        >
                          ✕
                        </button>
                      </div>
                    );
                  })
                ) : (
                  /* Real JavaScript Code View */
                  <pre className="text-xs font-mono text-emerald-800 bg-emerald-950/5 p-3 rounded-xl overflow-x-auto leading-relaxed">
                    <code>
{`// First Open School - Kid Code Engine
const mascot = new Mascot("${activeMascot.name}");

async function runQuest() {
${programSequence.map((cmd, i) => `  /* step ${i + 1} */ ${CODING_BLOCKS[cmd]?.codeSnippet || cmd}`).join('\n')}
  await mascot.celebrateGoal();
}

runQuest();`}
                    </code>
                  </pre>
                )}
              </div>

              {/* Execution Action Controls */}
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={handleRunProgram}
                  disabled={isRunning || programSequence.length === 0}
                  className="col-span-2 flex items-center justify-center space-x-2 py-3 bg-[#6BCB77] hover:bg-[#5bb867] disabled:opacity-50 text-white font-black text-sm rounded-2xl border-4 border-[#6BCB77] shadow-[0_4px_0_#4E9B56] active:translate-y-1 active:shadow-none transition-all cursor-pointer"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>{isRunning ? 'RUNNING...' : 'RUN CODE'}</span>
                </button>

                <button
                  onClick={handleSingleStep}
                  disabled={isRunning || programSequence.length === 0}
                  className="flex items-center justify-center space-x-1 py-3 bg-[#4D96FF] hover:bg-[#3A72C1] disabled:opacity-50 text-white font-black text-xs rounded-2xl border-4 border-[#4D96FF] shadow-[0_4px_0_#3A72C1] active:translate-y-1 active:shadow-none transition-all cursor-pointer"
                  title="Execute 1 step at a time"
                >
                  <StepForward className="w-4 h-4" />
                  <span>STEP</span>
                </button>
              </div>

              <div className="flex items-center justify-between text-xs font-black text-gray-500 pt-1">
                <button
                  onClick={() => resetMissionState(currentMission)}
                  disabled={isRunning}
                  className="flex items-center space-x-1.5 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-xl cursor-pointer text-gray-700 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Board</span>
                </button>

                <button
                  onClick={handleClearProgram}
                  disabled={isRunning || programSequence.length === 0}
                  className="flex items-center space-x-1.5 px-3 py-1.5 bg-red-50 hover:bg-red-100 rounded-xl cursor-pointer text-red-700 transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Clear All</span>
                </button>
              </div>

              {/* Available Commands Toolbox */}
              <div className="space-y-2 pt-2 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-gray-600 uppercase tracking-tight">Command Toolbox:</span>
                  <span className="text-[10px] text-gray-400 font-bold">Tap to add</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {currentMission.availableCommands.map(cmd => {
                    const block = CODING_BLOCKS[cmd];
                    if (!block) return null;
                    return (
                      <button
                        key={cmd}
                        onClick={() => handleAddCommand(cmd)}
                        disabled={isRunning}
                        className={`flex items-center space-x-2 p-2.5 rounded-2xl border-3 font-black text-xs transition-all active:translate-y-1 active:shadow-none cursor-pointer shadow-[0_3px_0_rgba(0,0,0,0.15)] ${block.color}`}
                      >
                        <span className="text-base">{block.emoji}</span>
                        <span className="truncate">{block.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

          </div>

        </div>
      )}

      {/* ========================================================= */}
      {/* SUB-TAB 2: CODE SANDBOX (FREE PLAY)                       */}
      {/* ========================================================= */}
      {activeSubTab === 'sandbox' && (
        <div className="bg-white rounded-[32px] p-6 sm:p-8 border-4 border-[#6BCB77] shadow-[0_8px_0_#4E9B56] space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-gray-100">
            <div>
              <h2 className="text-2xl font-black text-[#2D2D2D] tracking-tight">Code Sandbox: Free Creative Play</h2>
              <p className="text-xs text-gray-500 font-semibold">
                Compose any algorithm sequence freely! Test multi-step loops, jumps, and turns without level restrictions.
              </p>
            </div>

            <div className="flex items-center space-x-3">
              <span className="text-xs font-black text-gray-500 uppercase">Pick Mascot:</span>
              <div className="flex items-center space-x-1.5">
                {CODING_MASCOTS.map(m => (
                  <button
                    key={m.id}
                    onClick={() => {
                      playSoundEffect('click', settings.soundEffects);
                      setSelectedMascotId(m.id);
                    }}
                    className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl border-2 transition-all cursor-pointer ${
                      selectedMascotId === m.id ? 'border-[#4D96FF] bg-sky-50 scale-105' : 'border-gray-200'
                    }`}
                  >
                    {m.emoji}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {Object.keys(CODING_BLOCKS).map(key => {
              const b = CODING_BLOCKS[key];
              return (
                <div 
                  key={key}
                  className="p-3.5 rounded-2xl bg-gray-50 border-2 border-gray-200 space-y-1.5"
                >
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">{b.emoji}</span>
                    <h5 className="font-black text-xs text-[#2D2D2D]">{b.label}</h5>
                  </div>
                  <p className="text-[11px] text-gray-500">{b.description}</p>
                  <code className="text-[10px] font-mono text-blue-700 bg-white px-2 py-0.5 rounded border border-blue-200 block truncate">
                    {b.codeSnippet}
                  </code>
                </div>
              );
            })}
          </div>

          <div className="p-4 bg-[#FFF9F0] rounded-2xl border-2 border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div>
              <h4 className="font-black text-sm text-[#2D2D2D]">Ready to test your algorithms in action?</h4>
              <p className="text-xs text-gray-600">Jump over to the Quests tab to guide your mascot through 24 progressive adventure levels.</p>
            </div>
            <button
              onClick={() => handleSubTabChange('quests')}
              className="px-5 py-2.5 bg-[#4D96FF] text-white font-black text-xs rounded-xl border-3 border-[#3A72C1] shadow-[0_4px_0_#3A72C1] cursor-pointer whitespace-nowrap"
            >
              Start Quests 🚀
            </button>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* SUB-TAB 3: TURTLE GEOMETRY STUDIO                         */}
      {/* ========================================================= */}
      {activeSubTab === 'turtle' && (
        <div className="bg-white rounded-[32px] p-6 sm:p-8 border-4 border-[#FF9F45] shadow-[0_8px_0_#D67D27] space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-gray-100">
            <div>
              <div className="flex items-center space-x-2 text-xs font-bold text-[#FF9F45] uppercase">
                <Compass className="w-4 h-4" />
                <span>Logo Turtle Graphics &bull; Mathematical Geometry</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#2D2D2D] tracking-tight">
                Sheldon the Turtle’s Code Drawing Studio 🐢
              </h2>
              <p className="text-xs text-gray-500 font-semibold">
                Control the turtle pen with angles and steps! Draw colorful polygons, stars, and rosettes with code loops.
              </p>
            </div>

            {/* Color Palette Selector */}
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold text-gray-500 uppercase">Ink:</span>
              {['#4D96FF', '#FF6B6B', '#FFD93D', '#6BCB77', '#8B5CF6', '#2D2D2D'].map(col => (
                <button
                  key={col}
                  onClick={() => setTurtlePenColor(col)}
                  className={`w-7 h-7 rounded-full border-2 transition-transform cursor-pointer ${
                    turtlePenColor === col ? 'scale-125 ring-2 ring-offset-2 ring-gray-400' : ''
                  }`}
                  style={{ backgroundColor: col }}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* LEFT: Drawing Presets (4 cols) */}
            <div className="lg:col-span-4 space-y-3">
              <span className="text-xs font-black text-gray-500 uppercase">Select Geometric Pattern:</span>
              <div className="space-y-2">
                {TURTLE_DRAWING_PRESETS.map(preset => {
                  const isSelected = selectedTurtlePreset.id === preset.id;
                  return (
                    <button
                      key={preset.id}
                      onClick={() => {
                        setSelectedTurtlePreset(preset);
                        drawTurtlePattern(preset);
                      }}
                      disabled={turtleIsDrawing}
                      className={`w-full p-3 rounded-2xl border-3 text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-amber-50 border-[#FF9F45] shadow-xs'
                          : 'bg-white border-gray-200 hover:border-gray-400'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-black text-xs text-[#2D2D2D] flex items-center gap-2">
                          <span>{preset.emoji}</span>
                          <span>{preset.title}</span>
                        </span>
                        <span className="text-[10px] font-bold text-gray-400">{preset.category}</span>
                      </div>
                      <p className="text-[11px] text-gray-500 mt-1">{preset.description}</p>
                    </button>
                  );
                })}
              </div>

              {/* Real Code Preview for Preset */}
              <div className="p-4 bg-gray-900 rounded-2xl text-emerald-400 font-mono text-xs space-y-1.5 shadow-sm">
                <span className="text-[10px] text-gray-400 uppercase font-sans font-bold">Under the Hood Code:</span>
                <pre className="overflow-x-auto text-[11px] leading-relaxed">
                  <code>{selectedTurtlePreset.codePreview}</code>
                </pre>
              </div>
            </div>

            {/* RIGHT: HTML5 Interactive Canvas (8 cols) */}
            <div className="lg:col-span-8 flex flex-col items-center justify-center bg-gray-50 rounded-3xl p-4 border-2 border-gray-200 space-y-4">
              <canvas
                ref={turtleCanvasRef}
                width={480}
                height={400}
                className="bg-white rounded-2xl border-4 border-gray-300 shadow-md max-w-full"
              />

              <div className="flex flex-wrap items-center justify-between gap-3 w-full px-2">
                <div className="flex items-center space-x-2 text-xs font-bold text-gray-500">
                  <span>Line Thickness:</span>
                  {[2, 4, 8].map(w => (
                    <button
                      key={w}
                      onClick={() => setTurtleStrokeWidth(w)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-black cursor-pointer ${
                        turtleStrokeWidth === w ? 'bg-[#FF9F45] text-white' : 'bg-gray-200 text-gray-700'
                      }`}
                    >
                      {w}px
                    </button>
                  ))}
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => drawTurtlePattern(selectedTurtlePreset)}
                    disabled={turtleIsDrawing}
                    className="flex items-center space-x-1.5 px-4 py-2 bg-[#FF9F45] hover:bg-[#D67D27] disabled:opacity-50 text-white font-black text-xs rounded-xl border-2 border-[#D67D27] shadow-xs cursor-pointer"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${turtleIsDrawing ? 'animate-spin' : ''}`} />
                    <span>Redraw Pattern</span>
                  </button>

                  <button
                    onClick={() => {
                      const canvas = turtleCanvasRef.current;
                      if (!canvas) return;
                      const link = document.createElement('a');
                      link.download = `first_open_coding_${selectedTurtlePreset.id}.png`;
                      link.href = canvas.toDataURL();
                      link.click();
                      playSoundEffect('click', settings.soundEffects);
                    }}
                    className="flex items-center space-x-1.5 px-4 py-2 bg-white hover:bg-gray-100 text-gray-700 font-black text-xs rounded-xl border-2 border-gray-300 shadow-xs cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Save Image</span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* SUB-TAB 4: COMPUTER SCIENCE CONCEPTS                      */}
      {/* ========================================================= */}
      {activeSubTab === 'concepts' && (
        <div className="space-y-6">
          <div className="bg-white rounded-[32px] p-6 sm:p-8 border-4 border-[#8B5CF6] shadow-[0_8px_0_#6D28D9] space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black text-[#2D2D2D] tracking-tight">
              Computer Science Concepts &amp; Kid Analogies 💡
            </h2>
            <p className="text-xs text-gray-600 font-semibold max-w-2xl">
              Learn the big ideas of software engineering through everyday real-life stories! Every concept includes a kid-friendly analogy, code snippet, and mini brain challenge.
            </p>

            {/* Concept Navigation Buttons */}
            <div className="flex flex-wrap gap-2 pt-2">
              {CS_CONCEPTS.map(c => {
                const isSelected = selectedConceptId === c.id;
                const isSolved = quizResults[c.id];
                return (
                  <button
                    key={c.id}
                    onClick={() => {
                      playSoundEffect('click', settings.soundEffects);
                      setSelectedConceptId(c.id);
                    }}
                    className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all cursor-pointer border-2 flex items-center space-x-1.5 ${
                      isSelected
                        ? 'bg-[#8B5CF6] border-[#6D28D9] text-white shadow-xs'
                        : 'bg-white border-gray-200 text-gray-700 hover:border-[#8B5CF6]'
                    }`}
                  >
                    <span>{c.emoji}</span>
                    <span>{c.title.split(':')[0]}</span>
                    {isSolved && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Concept Card Details */}
          {(() => {
            const concept = CS_CONCEPTS.find(c => c.id === selectedConceptId) || CS_CONCEPTS[0];
            const chosenAnswer = quizAnswers[concept.id];
            const isAnswered = chosenAnswer !== undefined;
            const isCorrect = quizResults[concept.id];

            return (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Concept Story & Analogy (7 cols) */}
                <div className="lg:col-span-7 bg-white rounded-[32px] p-6 sm:p-8 border-4 border-gray-200 shadow-xs space-y-5">
                  <div className="flex items-center space-x-3 pb-3 border-b border-gray-100">
                    <span className="text-4xl p-2 bg-purple-50 rounded-2xl border border-purple-200">{concept.emoji}</span>
                    <div>
                      <h3 className="text-xl font-black text-[#2D2D2D]">{concept.title}</h3>
                      <p className="text-xs text-purple-700 font-bold">{concept.tagline}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h5 className="text-xs font-black text-gray-500 uppercase tracking-wider">🍦 Kid-Friendly Analogy:</h5>
                    <p className="text-sm font-semibold text-[#2D2D2D] leading-relaxed bg-[#FFF9F0] p-4 rounded-2xl border border-amber-200">
                      {concept.kidAnalogy}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h5 className="text-xs font-black text-gray-500 uppercase tracking-wider">🌍 Real-World Example:</h5>
                    <p className="text-xs text-gray-600 font-medium leading-relaxed bg-sky-50 p-3.5 rounded-2xl border border-sky-200">
                      {concept.realWorldExample}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h5 className="text-xs font-black text-gray-500 uppercase tracking-wider">📜 What It Looks Like in Code:</h5>
                    <pre className="p-3.5 bg-gray-900 rounded-2xl text-emerald-400 font-mono text-xs overflow-x-auto leading-relaxed">
                      <code>{concept.codeExample}</code>
                    </pre>
                  </div>

                  <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-start space-x-2">
                    <span className="text-base">💡</span>
                    <div>
                      <strong className="font-black">Historical Fun Fact:</strong> {concept.funFact}
                    </div>
                  </div>
                </div>

                {/* Interactive Challenge Quiz (5 cols) */}
                <div className="lg:col-span-5 bg-white rounded-[32px] p-6 border-4 border-[#8B5CF6] shadow-[0_6px_0_#6D28D9] space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-xs font-black text-purple-700 uppercase">
                      <Sparkles className="w-4 h-4" />
                      <span>Interactive Mini-Quiz</span>
                    </div>

                    <h4 className="font-black text-base text-[#2D2D2D] leading-snug">
                      {concept.interactiveChallenge.question}
                    </h4>

                    <div className="space-y-2 pt-2">
                      {concept.interactiveChallenge.options.map((opt, optIdx) => {
                        const isThisChosen = chosenAnswer === optIdx;
                        const isThisCorrect = optIdx === concept.interactiveChallenge.correctIndex;

                        return (
                          <button
                            key={optIdx}
                            onClick={() => handleAnswerConceptQuiz(concept.id, optIdx)}
                            className={`w-full p-3.5 rounded-2xl text-left border-3 font-black text-xs transition-all cursor-pointer ${
                              isAnswered && isThisCorrect
                                ? 'bg-emerald-50 border-emerald-500 text-emerald-800'
                                : isAnswered && isThisChosen && !isThisCorrect
                                ? 'bg-red-50 border-red-500 text-red-800'
                                : 'bg-[#FFF9F0] border-gray-200 text-[#2D2D2D] hover:border-[#8B5CF6]'
                            }`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {isAnswered && (
                    <div className={`p-4 rounded-2xl border-2 text-xs font-bold ${
                      isCorrect ? 'bg-emerald-50 border-emerald-300 text-emerald-800' : 'bg-red-50 border-red-300 text-red-800'
                    }`}>
                      <div className="flex items-center space-x-1.5 mb-1 font-black">
                        {isCorrect ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <span>✕</span>}
                        <span>{isCorrect ? 'Spot on!' : 'Not quite!'}</span>
                      </div>
                      <p>{concept.interactiveChallenge.explanation}</p>
                    </div>
                  )}

                  <div className="pt-2 text-center text-xs text-gray-400 font-bold">
                    Answer correctly to earn a golden star for your learning profile!
                  </div>
                </div>

              </div>
            );
          })()}
        </div>
      )}

      {/* ========================================================= */}
      {/* VICTORY MODAL WITH REWARD & NEXT MISSION                   */}
      {/* ========================================================= */}
      {showVictoryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-[36px] max-w-md w-full p-6 sm:p-8 border-4 border-[#FFD93D] shadow-[0_12px_0_#C9A92E] space-y-6 text-center animate-in zoom-in-95 duration-200">
            <div className="text-6xl animate-bounce">
              🎉
            </div>

            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black uppercase tracking-wider">
                Mission Complete!
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#2D2D2D]">
                Outstanding Code!
              </h3>
              <p className="text-xs text-gray-600 font-semibold leading-relaxed">
                You successfully programmed {activeMascot.name} to solve the quest and reach the goal!
              </p>
            </div>

            <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 text-xs font-semibold text-amber-900 text-left space-y-1">
              <strong className="font-black flex items-center gap-1.5 text-amber-800">
                <Lightbulb className="w-4 h-4 text-amber-600" />
                Pedagogical Skill Mastered:
              </strong>
              <p>{currentMission.pedagogicalNote}</p>
            </div>

            <div className="flex items-center justify-center space-x-2 text-xl font-black text-amber-500">
              <span>⭐️</span>
              <span>⭐️</span>
              <span>⭐️</span>
              <span className="text-xs text-gray-500 font-bold ml-1">+3 Stars Added!</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => setShowVictoryModal(false)}
                className="flex-1 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-black text-xs rounded-2xl transition-colors cursor-pointer"
              >
                Replay Mission
              </button>

              <button
                onClick={handleNextMission}
                className="flex-1 py-3 bg-[#4D96FF] hover:bg-[#3A72C1] text-white font-black text-xs rounded-2xl border-2 border-[#3A72C1] shadow-[0_4px_0_#3A72C1] active:translate-y-1 active:shadow-none transition-all cursor-pointer flex items-center justify-center space-x-1.5"
              >
                <span>Next Mission</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* HINT MODAL                                                */}
      {/* ========================================================= */}
      {showHintModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
          <div className="bg-white rounded-[32px] max-w-sm w-full p-6 border-4 border-amber-300 shadow-xl space-y-4 text-center">
            <div className="text-4xl">💡</div>
            <h4 className="font-black text-lg text-[#2D2D2D]">Level Hint</h4>
            <p className="text-xs text-gray-600 font-semibold leading-relaxed bg-[#FFF9F0] p-4 rounded-2xl border border-amber-200">
              {currentMission.hint}
            </p>
            <button
              onClick={() => setShowHintModal(false)}
              className="w-full py-2.5 bg-amber-400 hover:bg-amber-500 text-[#2D2D2D] font-black text-xs rounded-xl cursor-pointer"
            >
              Got It, Let's Code!
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
