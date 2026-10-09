import React, { useState, useMemo, useEffect } from 'react';
import { 
  StudentProfile, 
  ParentSettings, 
  AgeTier, 
  CodingLanguageDetail, 
  CodingLanguageId 
} from '../../types';
import { 
  CODING_LANGUAGES, 
  ROSETTA_STONE_CONCEPTS, 
  MATCHMAKER_QUESTIONS 
} from '../../data/languagesData';
import { AGE_TIER_INFO, CURRICULUM_TIER_DETAILS } from '../../data/curriculumData';
import { playSoundEffect, speakText } from '../../utils/sound';
import confetti from 'canvas-confetti';
import { 
  Code2, 
  Sparkles, 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  HelpCircle, 
  Eye, 
  Award, 
  GraduationCap, 
  Copy, 
  Layers, 
  Terminal, 
  Compass, 
  BookOpen, 
  Check, 
  ChevronRight,
  Flame,
  Zap,
  ShieldCheck,
  Search,
  ExternalLink
} from 'lucide-react';

interface CodingLanguagesStudioProps {
  student: StudentProfile;
  settings: ParentSettings;
  onAwardStars: (stars: number, reason: string) => void;
}

export const CodingLanguagesStudio: React.FC<CodingLanguagesStudioProps> = ({
  student,
  settings,
  onAwardStars
}) => {
  // Navigation inside Languages Studio
  const [activeView, setActiveView] = useState<'learn' | 'playground' | 'rosetta' | 'matchmaker'>('playground');
  const [selectedLanguageId, setSelectedLanguageId] = useState<CodingLanguageId>('html');
  const [filterCurriculumOnly, setFilterCurriculumOnly] = useState<boolean>(false);
  const [copiedSnippetId, setCopiedSnippetId] = useState<string | null>(null);

  // Active language detail
  const currentLang = useMemo(() => {
    return CODING_LANGUAGES.find(l => l.id === selectedLanguageId) || CODING_LANGUAGES[0];
  }, [selectedLanguageId]);

  // Curriculum tier info for active student
  const activeTierInfo = AGE_TIER_INFO[student.ageTier] || AGE_TIER_INFO['grade-1-2'];
  const activeTierDetails = CURRICULUM_TIER_DETAILS[student.ageTier] || CURRICULUM_TIER_DETAILS['grade-1-2'];

  // Filtered languages
  const displayedLanguages = useMemo(() => {
    if (!filterCurriculumOnly) return CODING_LANGUAGES;
    return CODING_LANGUAGES.filter(lang => lang.tierRecommended.includes(student.ageTier));
  }, [filterCurriculumOnly, student.ageTier]);

  // ==========================================
  // PLAYGROUND CODE EDITING STATE
  // ==========================================
  const [activeTemplateId, setActiveTemplateId] = useState<string>('default');
  const [htmlCode, setHtmlCode] = useState<string>(currentLang.starterCode);
  const [cssCode, setCssCode] = useState<string>(currentLang.starterCssCode || '');
  const [codeOutput, setCodeOutput] = useState<string>('Ready to run! Tap "Run Code" above.');
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  // SQL interactive demo table
  const [sqlTableFilter, setSqlTableFilter] = useState<'all' | 'high-stars' | 'electric' | 'leaderboard'>('all');

  // Scratch visual block sequence
  const [scratchBlocks, setScratchBlocks] = useState<string[]>([
    'When Green Flag Clicked 🟢',
    'Move 10 Steps ➡️',
    'Play Sound "Pop" 🎵',
    'Say "Hello, Coder!" 🎈'
  ]);
  const [scratchMascotStep, setScratchMascotStep] = useState<number>(0);

  // Synchronize code when language changes
  useEffect(() => {
    setHtmlCode(currentLang.starterCode);
    setCssCode(currentLang.starterCssCode || '');
    setActiveTemplateId('default');
    setCodeOutput(`Ready to explore ${currentLang.name}! Tap "Run Code" to test.`);
    setTerminalLogs([]);
  }, [currentLang]);

  // ==========================================
  // HANDS-ON CHALLENGE STATE
  // ==========================================
  const [challengeCode, setChallengeCode] = useState<string>('');
  const [challengeCssCode, setChallengeCssCode] = useState<string>('');
  const [challengeFeedback, setChallengeFeedback] = useState<{ status: 'idle' | 'success' | 'retry'; message: string }>({
    status: 'idle',
    message: ''
  });
  const [showChallengeHint, setShowChallengeHint] = useState<boolean>(false);
  const [showChallengeSolution, setShowChallengeSolution] = useState<boolean>(false);
  const [completedChallenges, setCompletedChallenges] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem('first_open_completed_lang_challenges');
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  });

  // Sync challenge code when language changes
  useEffect(() => {
    if (currentLang.handsOnChallenge) {
      setChallengeCode(currentLang.handsOnChallenge.starterCode);
      setChallengeCssCode(currentLang.handsOnChallenge.starterCssCode || '');
      setChallengeFeedback({ status: 'idle', message: '' });
      setShowChallengeHint(false);
      setShowChallengeSolution(false);
    }
  }, [currentLang]);

  // ==========================================
  // QUIZ STATE
  // ==========================================
  const [selectedQuizOption, setSelectedQuizOption] = useState<number | null>(null);
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);
  const [completedQuizzes, setCompletedQuizzes] = useState<Set<string>>(new Set());

  // Reset quiz state on language switch
  useEffect(() => {
    setSelectedQuizOption(null);
    setQuizSubmitted(false);
  }, [selectedLanguageId]);

  // ==========================================
  // MATCHMAKER STATE
  // ==========================================
  const [matchAnswers, setMatchAnswers] = useState<Record<number, number>>({});
  const [matchmakerResult, setMatchmakerResult] = useState<CodingLanguageDetail | null>(null);

  // ==========================================
  // HANDLERS
  // ==========================================
  const handleSelectLanguage = (langId: CodingLanguageId) => {
    playSoundEffect('click', settings.soundEffects);
    setSelectedLanguageId(langId);
  };

  const handleApplyTemplate = (template: typeof currentLang.interactiveTemplates[0]) => {
    playSoundEffect('pop', settings.soundEffects);
    setActiveTemplateId(template.id);
    setHtmlCode(template.code);
    if (template.cssCode) {
      setCssCode(template.cssCode);
    }
  };

  const handleResetToStarter = () => {
    playSoundEffect('click', settings.soundEffects);
    setActiveTemplateId('default');
    setHtmlCode(currentLang.starterCode);
    setCssCode(currentLang.starterCssCode || '');
    setCodeOutput('Reset to original starter code.');
    setTerminalLogs([]);
  };

  // Safe Code Runner Simulation
  const handleRunPlaygroundCode = () => {
    playSoundEffect('star', settings.soundEffects);
    setIsSimulating(true);

    if (currentLang.id === 'html' || currentLang.id === 'css') {
      setCodeOutput('✨ HTML & CSS updated live in the preview sandbox!');
      setIsSimulating(false);
      return;
    }

    if (currentLang.id === 'javascript') {
      const logs: string[] = [];
      try {
        // Safe simulation of console.log for kids
        const simulatedConsole = {
          log: (...args: any[]) => {
            logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' '));
          }
        };

        const safeCode = `
          const console = simulatedConsole;
          ${htmlCode}
        `;
        const runFn = new Function('simulatedConsole', safeCode);
        runFn(simulatedConsole);

        setTerminalLogs(logs.length > 0 ? logs : ['Execution finished with 0 logs.']);
        setCodeOutput(`JavaScript executed successfully! Generated ${logs.length} log statements.`);
        confetti({ particleCount: 30, spread: 60, origin: { y: 0.7 } });
      } catch (err: any) {
        setTerminalLogs([`❌ Error: ${err.message || 'Syntax issue'}`]);
        setCodeOutput('Check your syntax for missing brackets or quotes!');
      }
      setIsSimulating(false);
      return;
    }

    if (currentLang.id === 'python') {
      // Python simulator for children
      const lines = htmlCode.split('\n');
      const outputs: string[] = [];
      let stepCount = 0;

      for (const line of lines) {
        const trimmed = line.trim();
        if (trimmed.startsWith('#') || trimmed === '') continue;
        stepCount++;
        if (trimmed.includes('print(')) {
          const match = trimmed.match(/print\((.*)\)/);
          if (match) {
            let content = match[1].replace(/["']/g, '');
            if (content.startsWith('f')) content = content.substring(1);
            outputs.push(`[Python stdout] > ${content}`);
          }
        } else if (trimmed.includes('for ')) {
          outputs.push(`[Loop started] > Processing sequence items...`);
        }
      }

      if (outputs.length === 0) {
        outputs.push('[Python stdout] > Script completed successfully with 0 printed lines.');
      }
      outputs.push(`⚡ Executed in 0.012 seconds (Python 3.12 Engine)`);

      setTimeout(() => {
        setTerminalLogs(outputs);
        setCodeOutput('Python script executed cleanly! Great job!');
        setIsSimulating(false);
        confetti({ particleCount: 25, spread: 50, origin: { y: 0.7 } });
      }, 400);
      return;
    }

    if (currentLang.id === 'cpp') {
      setTimeout(() => {
        setTerminalLogs([
          'Compiling with Clang++ -O3 (Supersonic optimizations enabled)...',
          'Executable compiled in 0.089 seconds (Binary size: 48 KB)',
          '----------------------------------------',
          '=== C++ GAME ENGINE ONLINE ===',
          'Player: Nova | HP: 100',
          '💥 Hit by asteroid! Remaining HP: 75',
          '🛡️ Shields holding! Continuing supersonic flight!',
          '----------------------------------------',
          'Process returned 0 (0x0) | Frame processing: 0.003 ms (240 FPS)'
        ]);
        setCodeOutput('C++ compiled and executed with supersonic speed!');
        setIsSimulating(false);
        confetti({ particleCount: 30, spread: 60, origin: { y: 0.7 } });
      }, 500);
      return;
    }

    if (currentLang.id === 'csharp') {
      setTimeout(() => {
        setTerminalLogs([
          'Unity Engine C# Script Assembly Loaded: Assembly-CSharp.dll',
          'Instantiating PlayerController GameObject...',
          '✨ Pippin collected 1 coin! Total Coins: 1',
          '🦘 Pippin leaped over a spiky obstacle! (Physics Velocity: (0, 8, 0))',
          '✨ Pippin collected 5 coin! Total Coins: 6',
          '🎮 Unity Frame Rate: 60 FPS Target Locked'
        ]);
        setCodeOutput('C# script executed within Unity Game Object simulation!');
        setIsSimulating(false);
        confetti({ particleCount: 30, spread: 60, origin: { y: 0.7 } });
      }, 500);
      return;
    }

    if (currentLang.id === 'sql') {
      setTimeout(() => {
        setTerminalLogs([
          'Connected to database: SchoolMagicalWorld.db (SQLite 3.42)',
          'Executing Query: SELECT name, creature_type, stars FROM magical_creatures WHERE stars >= 10...',
          'Returned 4 rows in 0.0004 seconds:',
          '| Row # | Name            | Type       | Stars | Power |',
          '| 1     | Astral Phoenix  | Flying/Fire| 15    | 980   |',
          '| 2     | Cyber Dragon    | Electric   | 14    | 940   |',
          '| 3     | Golden Unicorn  | Magic      | 12    | 890   |',
          '| 4     | Tidal Leviathan | Water      | 10    | 870   |'
        ]);
        setCodeOutput('SQL query executed! 4 matching records returned instantly.');
        setIsSimulating(false);
        confetti({ particleCount: 30, spread: 60, origin: { y: 0.7 } });
      }, 400);
      return;
    }

    if (currentLang.id === 'scratch') {
      setScratchMascotStep(prev => prev + 1);
      setTimeout(() => {
        setTerminalLogs([
          'Green Flag Clicked 🟢',
          'Running block stack sequence 1 to 4...',
          'Mascot stepped 10 paces ahead!',
          'Sound FX "Pop" triggered 🎵',
          'Speech bubble displayed: "Hello, Coder!" 🎈'
        ]);
        setCodeOutput('Block program executed without a single syntax error!');
        setIsSimulating(false);
        confetti({ particleCount: 35, spread: 70, origin: { y: 0.7 } });
      }, 400);
      return;
    }

    setIsSimulating(false);
  };

  // Check Hands-On Challenge
  const handleCheckChallenge = () => {
    const challenge = currentLang.handsOnChallenge;
    if (!challenge) return;

    const codeToTest = challengeCode.toLowerCase();
    const cssToTest = challengeCssCode.toLowerCase();
    const combined = codeToTest + ' ' + cssToTest;

    const allKeywordsPresent = challenge.requiredKeywords.every(kw => 
      combined.includes(kw.toLowerCase())
    );

    if (allKeywordsPresent) {
      playSoundEffect('victory', settings.soundEffects);
      confetti({ particleCount: 80, spread: 100, origin: { y: 0.6 } });
      setChallengeFeedback({
        status: 'success',
        message: challenge.checkExplanation
      });

      const chalKey = `${currentLang.id}_challenge`;
      if (!completedChallenges.has(chalKey)) {
        const next = new Set(completedChallenges);
        next.add(chalKey);
        setCompletedChallenges(next);
        try {
          localStorage.setItem('first_open_completed_lang_challenges', JSON.stringify(Array.from(next)));
        } catch {}
        onAwardStars(10, `Completed ${currentLang.shortName} coding challenge!`);
      }
    } else {
      playSoundEffect('wrong', settings.soundEffects);
      setChallengeFeedback({
        status: 'retry',
        message: 'Almost there! Check the hint to see what keywords or tags are missing.'
      });
    }
  };

  // Submit Quiz Answer
  const handleQuizAnswer = (index: number) => {
    if (quizSubmitted) return;
    setSelectedQuizOption(index);
    setQuizSubmitted(true);

    const isCorrect = index === currentLang.quickQuiz.correctIndex;
    if (isCorrect) {
      playSoundEffect('correct', settings.soundEffects);
      confetti({ particleCount: 50, spread: 80, origin: { y: 0.7 } });
      if (!completedQuizzes.has(currentLang.id)) {
        setCompletedQuizzes(prev => new Set(prev).add(currentLang.id));
        onAwardStars(5, `Mastered ${currentLang.shortName} Concept Quiz!`);
      }
    } else {
      playSoundEffect('wrong', settings.soundEffects);
    }
  };

  // Matchmaker Selection
  const handleSelectMatchAnswer = (questionId: number, optionIndex: number) => {
    playSoundEffect('click', settings.soundEffects);
    const updated = { ...matchAnswers, [questionId]: optionIndex };
    setMatchAnswers(updated);

    if (Object.keys(updated).length >= MATCHMAKER_QUESTIONS.length) {
      // Calculate recommended language
      const q1Choice = MATCHMAKER_QUESTIONS[0].options[updated[1] ?? 0];
      const recId = q1Choice.recommendedLanguage;
      const foundLang = CODING_LANGUAGES.find(l => l.id === recId) || CODING_LANGUAGES[0];
      setMatchmakerResult(foundLang);
      playSoundEffect('victory', settings.soundEffects);
      confetti({ particleCount: 70, spread: 90, origin: { y: 0.6 } });
    }
  };

  const handleCopyCode = (snippet: string, id: string) => {
    playSoundEffect('click', settings.soundEffects);
    try {
      navigator.clipboard.writeText(snippet);
      setCopiedSnippetId(id);
      setTimeout(() => setCopiedSnippetId(null), 2000);
    } catch {}
  };

  // Helper quick insert tags into HTML code
  const handleQuickInsert = (insertString: string) => {
    playSoundEffect('pop', settings.soundEffects);
    setHtmlCode(prev => prev + '\n' + insertString);
  };

  return (
    <div className="space-y-8 pb-16">
      
      {/* ========================================================= */}
      {/* 1. CURRICULUM ALIGNMENT HEADER BANNER                     */}
      {/* ========================================================= */}
      <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-[28px] p-5 sm:p-6 border-3 border-[#2D2D2D] shadow-[0_5px_0_#2D2D2D]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border-2 border-[#2D2D2D] rounded-full text-xs font-black text-[#2D2D2D] shadow-xs">
                <GraduationCap className="w-3.5 h-3.5 text-[#4D96FF]" />
                Curriculum Tier: {activeTierDetails.gradeLabel}
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#6BCB77]/20 border-2 border-[#2D2D2D] rounded-full text-xs font-black text-emerald-900">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                All Languages 100% Free & Open
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-[#2D2D2D] tracking-tight flex items-center gap-2.5">
              <span>Coding Languages Academy</span>
              <span className="text-2xl sm:text-3xl">💻🌐</span>
            </h2>

            <p className="text-sm font-semibold text-[#2D2D2D]/80 max-w-3xl leading-relaxed">
              Every computer program is built using specialized languages! Explore the superpowers of 
              <span className="font-black text-[#F97316]"> HTML</span>, 
              <span className="font-black text-[#3B82F6]"> CSS</span>, 
              <span className="font-black text-[#EAB308]"> JavaScript</span>, 
              <span className="font-black text-[#10B981]"> Python</span>, 
              <span className="font-black text-[#6366F1]"> C++</span>, 
              <span className="font-black text-[#9333EA]"> C#</span>, 
              <span className="font-black text-[#0D9488]"> SQL</span>, and 
              <span className="font-black text-[#059669]"> Scratch</span> through kid-friendly mental models, live simulators, and curriculum guidance!
            </p>
          </div>

          {/* Quick Curriculum Alignment Advice for Parents & Kids */}
          <div className="bg-white/90 backdrop-blur-xs p-4 rounded-2xl border-2 border-[#2D2D2D] shadow-xs min-w-[280px]">
            <div className="text-xs font-black text-gray-500 uppercase tracking-wider flex items-center gap-1.5 mb-1.5">
              <span>🎯 Recommended for {student.name}</span>
            </div>
            <p className="text-xs font-bold text-[#2D2D2D] leading-snug">
              {student.ageTier === 'pre-k' && 'Start with Scratch block logic and visual sequences before moving to text!'}
              {student.ageTier === 'kindergarten' && 'Explore Scratch puzzle blocks & the very first HTML building tags!'}
              {student.ageTier === 'grade-1-2' && 'HTML structure, CSS color styling, and JavaScript interactive buttons!'}
              {student.ageTier === 'k12-foundations' && 'Full developer tour: Python AI, C++ supersonic speed, C# Unity 3D & SQL!'}
            </p>
            <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center justify-between">
              <span className="text-[11px] font-bold text-gray-500">Tier: {activeTierDetails.ageRange}</span>
              <button
                onClick={() => setFilterCurriculumOnly(!filterCurriculumOnly)}
                className={`text-[11px] font-black px-2.5 py-1 rounded-lg border cursor-pointer transition-all ${
                  filterCurriculumOnly 
                    ? 'bg-[#4D96FF] text-white border-[#3A72C1]' 
                    : 'bg-gray-100 text-[#2D2D2D] border-gray-300 hover:bg-gray-200'
                }`}
              >
                {filterCurriculumOnly ? 'Showing: Recommended' : 'Showing: All 8 Languages'}
              </button>
            </div>
          </div>
        </div>

        {/* Sub-Navigation Tabs inside Languages Studio */}
        <div className="mt-5 pt-4 border-t-2 border-gray-200/80 flex flex-wrap items-center gap-2">
          <button
            onClick={() => {
              playSoundEffect('click', settings.soundEffects);
              setActiveView('playground');
            }}
            className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-tight flex items-center gap-2 cursor-pointer transition-all border-2 ${
              activeView === 'playground'
                ? 'bg-[#4D96FF] text-white border-[#3A72C1] shadow-xs'
                : 'bg-white text-gray-700 border-gray-300 hover:border-[#4D96FF]'
            }`}
          >
            <Play className="w-3.5 h-3.5" />
            <span>Interactive Playground & Simulators</span>
          </button>

          <button
            onClick={() => {
              playSoundEffect('click', settings.soundEffects);
              setActiveView('learn');
            }}
            className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-tight flex items-center gap-2 cursor-pointer transition-all border-2 ${
              activeView === 'learn'
                ? 'bg-[#8B5CF6] text-white border-[#7C3AED] shadow-xs'
                : 'bg-white text-gray-700 border-gray-300 hover:border-[#8B5CF6]'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Mental Models & Big Ideas</span>
          </button>

          <button
            onClick={() => {
              playSoundEffect('click', settings.soundEffects);
              setActiveView('rosetta');
            }}
            className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-tight flex items-center gap-2 cursor-pointer transition-all border-2 ${
              activeView === 'rosetta'
                ? 'bg-[#FF9F45] text-white border-[#EA580C] shadow-xs'
                : 'bg-white text-gray-700 border-gray-300 hover:border-[#FF9F45]'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Language Rosetta Stone (Translator)</span>
          </button>

          <button
            onClick={() => {
              playSoundEffect('click', settings.soundEffects);
              setActiveView('matchmaker');
            }}
            className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-tight flex items-center gap-2 cursor-pointer transition-all border-2 ${
              activeView === 'matchmaker'
                ? 'bg-[#6BCB77] text-white border-[#16A34A] shadow-xs'
                : 'bg-white text-gray-700 border-gray-300 hover:border-[#6BCB77]'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Which Language Is Right For Me?</span>
          </button>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 2. LANGUAGE SELECTOR CARDS HORIZONTAL STRIP              */}
      {/* ========================================================= */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-black text-[#2D2D2D] uppercase tracking-wider flex items-center gap-2">
            <span>Choose a Coding Language to Explore:</span>
            <span className="text-xs px-2 py-0.5 bg-gray-200 text-gray-700 rounded-full font-bold">
              {displayedLanguages.length} Languages
            </span>
          </h3>
          {filterCurriculumOnly && (
            <span className="text-xs font-bold text-[#4D96FF]">
              Filtered for {activeTierDetails.name}
            </span>
          )}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {displayedLanguages.map(lang => {
            const isSelected = lang.id === selectedLanguageId;
            const isRec = lang.tierRecommended.includes(student.ageTier);

            return (
              <button
                key={lang.id}
                onClick={() => handleSelectLanguage(lang.id)}
                className={`p-3 rounded-2xl border-3 text-left transition-all cursor-pointer relative flex flex-col justify-between ${
                  isSelected
                    ? 'border-[#2D2D2D] bg-white shadow-[0_4px_0_#2D2D2D] -translate-y-1'
                    : 'border-gray-200 bg-white hover:border-gray-400 hover:shadow-xs'
                }`}
                style={{
                  borderTopColor: isSelected ? lang.primaryColor : undefined,
                  borderTopWidth: isSelected ? '6px' : undefined
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-2xl">{lang.icon}</span>
                    {isRec && (
                      <span className="text-[10px] font-black px-1.5 py-0.5 bg-amber-100 text-amber-800 rounded-md border border-amber-300" title="Recommended for your curriculum tier">
                        ⭐ Rec
                      </span>
                    )}
                  </div>
                  <h4 className="text-sm font-black text-[#2D2D2D] truncate">
                    {lang.shortName}
                  </h4>
                  <p className="text-[10px] font-bold text-gray-500 line-clamp-1 mt-0.5">
                    {lang.recommendedAgeLabel}
                  </p>
                </div>

                <div className="mt-2 pt-1.5 border-t border-gray-100 flex items-center justify-between text-[10px] font-bold text-gray-400">
                  <span className="truncate">{lang.difficultyLabel.split(' ')[0]}</span>
                  {isSelected && <Check className="w-3.5 h-3.5 text-blue-600 stroke-[3]" />}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* ========================================================= */}
      {/* 3. ACTIVE VIEW: PLAYGROUND & SIMULATORS (PRIMARY)         */}
      {/* ========================================================= */}
      {activeView === 'playground' && (
        <div className="space-y-6">
          
          {/* Language Profile Bar */}
          <div className="bg-white rounded-[28px] p-5 border-3 border-[#2D2D2D] shadow-[0_4px_0_#2D2D2D] flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div 
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-inner border-2 border-black/10 shrink-0"
                style={{ backgroundColor: `${currentLang.primaryColor}20` }}
              >
                {currentLang.icon}
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-xl font-black text-[#2D2D2D]">
                    {currentLang.name}
                  </h3>
                  <span className={`text-[11px] font-black px-2.5 py-0.5 rounded-full border ${currentLang.badgeBg}`}>
                    {currentLang.difficultyLabel}
                  </span>
                  {currentLang.tierRecommended.includes(student.ageTier) && (
                    <span className="text-[11px] font-black px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                      🎯 Aligned with {activeTierDetails.name}
                    </span>
                  )}
                </div>
                <p className="text-xs font-bold text-gray-600 mt-1 max-w-xl">
                  {currentLang.tagline}
                </p>
              </div>
            </div>

            {/* Template Chooser & Reset Controls */}
            <div className="flex flex-wrap items-center gap-2">
              {currentLang.interactiveTemplates.map(tmpl => (
                <button
                  key={tmpl.id}
                  onClick={() => handleApplyTemplate(tmpl)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-black cursor-pointer border-2 transition-all ${
                    activeTemplateId === tmpl.id
                      ? 'bg-amber-100 border-amber-400 text-amber-900 shadow-xs'
                      : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {tmpl.name}
                </button>
              ))}

              <button
                onClick={handleResetToStarter}
                className="px-3 py-1.5 rounded-xl text-xs font-black bg-gray-100 hover:bg-gray-200 text-gray-700 border-2 border-gray-300 cursor-pointer flex items-center gap-1.5 transition-all"
                title="Reset to starter snippet"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            </div>
          </div>

          {/* ========================================================= */}
          {/* SPECIALIZED PLAYGROUND PER LANGUAGE                       */}
          {/* ========================================================= */}
          
          {/* A. HTML & CSS DUAL PLAYGROUND WITH LIVE PREVIEW */}
          {(currentLang.id === 'html' || currentLang.id === 'css') && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Left Column: Code Editors */}
              <div className="space-y-4">
                <div className="bg-[#1E1E2E] rounded-[24px] p-4 border-3 border-[#2D2D2D] shadow-[0_4px_0_#2D2D2D] text-white">
                  <div className="flex items-center justify-between pb-3 border-b border-gray-700 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-400"></span>
                      <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                      <span className="w-3 h-3 rounded-full bg-green-400"></span>
                      <span className="text-xs font-mono font-bold text-gray-300 ml-2">index.html</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => handleQuickInsert('<h1>✨ Brand New Header!</h1>')}
                        className="text-[10px] font-bold px-2 py-0.5 bg-gray-700 hover:bg-gray-600 rounded text-gray-200 cursor-pointer"
                      >
                        + Title
                      </button>
                      <button
                        onClick={() => handleQuickInsert('<button>🚀 Blast Off!</button>')}
                        className="text-[10px] font-bold px-2 py-0.5 bg-gray-700 hover:bg-gray-600 rounded text-gray-200 cursor-pointer"
                      >
                        + Button
                      </button>
                    </div>
                  </div>

                  <textarea
                    value={htmlCode}
                    onChange={(e) => setHtmlCode(e.target.value)}
                    rows={8}
                    className="w-full bg-[#181825] text-amber-200 font-mono text-xs sm:text-sm p-3 rounded-xl border border-gray-700 focus:outline-none focus:border-[#4D96FF] resize-none leading-relaxed"
                    spellCheck={false}
                    aria-label="HTML code editor"
                  />

                  {/* CSS Editor below HTML */}
                  <div className="mt-4 pt-3 border-t border-gray-700">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold text-blue-400 flex items-center gap-1.5">
                        <span>styles.css</span>
                      </span>
                      <button
                        onClick={() => handleCopyCode(cssCode, 'css-editor')}
                        className="text-[10px] font-bold text-gray-400 hover:text-white flex items-center gap-1 cursor-pointer"
                      >
                        {copiedSnippetId === 'css-editor' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                        <span>Copy CSS</span>
                      </button>
                    </div>
                    <textarea
                      value={cssCode}
                      onChange={(e) => setCssCode(e.target.value)}
                      rows={7}
                      className="w-full bg-[#181825] text-sky-200 font-mono text-xs sm:text-sm p-3 rounded-xl border border-gray-700 focus:outline-none focus:border-[#38BDF8] resize-none leading-relaxed"
                      spellCheck={false}
                      aria-label="CSS code editor"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs font-bold text-gray-500 px-2">
                  <span>💡 Tip: Type new tags or change colors above — watch the preview update live!</span>
                </div>
              </div>

              {/* Right Column: Live Rendered Output */}
              <div className="space-y-4">
                <div className="bg-white rounded-[24px] border-3 border-[#2D2D2D] shadow-[0_4px_0_#2D2D2D] overflow-hidden flex flex-col h-full min-h-[460px]">
                  
                  {/* Browser Window Header */}
                  <div className="bg-gray-100 p-3 border-b-2 border-gray-200 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-rose-400"></span>
                        <span className="w-3 h-3 rounded-full bg-amber-400"></span>
                        <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
                      </div>
                      <div className="bg-white px-3 py-1 rounded-lg border border-gray-300 text-[11px] font-mono text-gray-600 flex items-center gap-1.5 ml-2">
                        <span>https://my-kid-coder-app.local</span>
                      </div>
                    </div>

                    <span className="text-[11px] font-black text-emerald-600 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span>Live Rendered</span>
                    </span>
                  </div>

                  {/* Sandbox Frame */}
                  <div className="p-6 flex-1 flex items-center justify-center bg-[#FAFAFA] overflow-auto">
                    <div className="w-full max-w-md mx-auto">
                      {/* Inject Scoped Style Tag + HTML Container */}
                      <style dangerouslySetInnerHTML={{ __html: cssCode }} />
                      <div dangerouslySetInnerHTML={{ __html: htmlCode }} />
                    </div>
                  </div>

                  {/* Educational Feedback Footer */}
                  <div className="p-3 bg-amber-50 border-t-2 border-amber-200 flex items-center justify-between text-xs font-bold text-amber-900">
                    <span>🧱 HTML gives the tags &bull; 🎨 CSS gives the magic styles</span>
                    <button
                      onClick={() => handleCopyCode(htmlCode, 'html-live')}
                      className="px-2.5 py-1 bg-white border border-amber-300 rounded-lg text-amber-800 hover:bg-amber-100 cursor-pointer flex items-center gap-1"
                    >
                      <Copy className="w-3 h-3" />
                      <span>{copiedSnippetId === 'html-live' ? 'Copied!' : 'Copy Page Code'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* B. JAVASCRIPT, PYTHON, C++, C#, SQL INTERACTIVE RUNNER */}
          {currentLang.id !== 'html' && currentLang.id !== 'css' && currentLang.id !== 'scratch' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Left Column: Code Editor */}
              <div className="space-y-4">
                <div className="bg-[#1E1E2E] rounded-[24px] p-4 border-3 border-[#2D2D2D] shadow-[0_4px_0_#2D2D2D] text-white">
                  <div className="flex items-center justify-between pb-3 border-b border-gray-700 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-400"></span>
                      <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                      <span className="w-3 h-3 rounded-full bg-green-400"></span>
                      <span className="text-xs font-mono font-bold text-gray-300 ml-2">
                        {currentLang.id === 'javascript' && 'main.js'}
                        {currentLang.id === 'python' && 'app.py'}
                        {currentLang.id === 'cpp' && 'engine.cpp'}
                        {currentLang.id === 'csharp' && 'PlayerController.cs'}
                        {currentLang.id === 'sql' && 'query.sql'}
                      </span>
                    </div>

                    <button
                      onClick={handleRunPlaygroundCode}
                      disabled={isSimulating}
                      className="px-4 py-1.5 rounded-xl text-xs font-black uppercase tracking-tight bg-[#4D96FF] hover:bg-[#3A72C1] text-white cursor-pointer shadow-xs flex items-center gap-1.5 transition-all"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>{isSimulating ? 'Executing...' : 'Run Code ⚡'}</span>
                    </button>
                  </div>

                  <textarea
                    value={htmlCode}
                    onChange={(e) => setHtmlCode(e.target.value)}
                    rows={14}
                    className="w-full bg-[#181825] text-emerald-300 font-mono text-xs sm:text-sm p-3.5 rounded-xl border border-gray-700 focus:outline-none focus:border-[#4D96FF] resize-none leading-relaxed"
                    spellCheck={false}
                    aria-label="Code editor"
                  />

                  <div className="mt-3 flex items-center justify-between text-xs font-mono text-gray-400">
                    <span>Syntax: {currentLang.shortName}</span>
                    <button
                      onClick={() => handleCopyCode(htmlCode, 'code-editor')}
                      className="hover:text-white flex items-center gap-1 cursor-pointer"
                    >
                      {copiedSnippetId === 'code-editor' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      <span>Copy Snippet</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: Execution Output Terminal */}
              <div className="space-y-4">
                <div className="bg-[#0F172A] rounded-[24px] border-3 border-[#2D2D2D] shadow-[0_4px_0_#2D2D2D] overflow-hidden flex flex-col h-full min-h-[420px] text-white">
                  
                  {/* Terminal Header */}
                  <div className="bg-[#1E293B] p-3 border-b border-gray-700 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-[#38BDF8]" />
                      <span className="text-xs font-mono font-black text-gray-200">
                        Interactive Output Terminal &bull; {currentLang.shortName}
                      </span>
                    </div>

                    <button
                      onClick={() => setTerminalLogs([])}
                      className="text-[11px] font-bold text-gray-400 hover:text-gray-200 cursor-pointer"
                    >
                      Clear
                    </button>
                  </div>

                  {/* Terminal Log Stream */}
                  <div className="p-4 flex-1 font-mono text-xs sm:text-sm space-y-2 overflow-auto bg-[#090D16]">
                    <div className="text-gray-500 text-xs">
                      $ initialize {currentLang.shortName.toLowerCase()}-runtime v3.12 --interactive
                    </div>

                    {terminalLogs.length === 0 ? (
                      <div className="py-12 text-center text-gray-500">
                        <Terminal className="w-8 h-8 mx-auto mb-2 opacity-30" />
                        <p>No output yet. Click <span className="text-[#38BDF8] font-bold">"Run Code ⚡"</span> to execute!</p>
                      </div>
                    ) : (
                      terminalLogs.map((log, idx) => (
                        <div 
                          key={idx} 
                          className={`leading-relaxed ${
                            log.includes('Error') 
                              ? 'text-rose-400 font-bold' 
                              : log.includes('VICTORY') || log.includes('COMPLETE') || log.includes('ONLINE')
                              ? 'text-amber-300 font-black'
                              : 'text-emerald-400'
                          }`}
                        >
                          {log}
                        </div>
                      ))
                    )}
                  </div>

                  {/* Status Bar */}
                  <div className="p-3 bg-[#1E293B] border-t border-gray-700 flex items-center justify-between text-xs font-bold text-gray-300">
                    <span className="truncate">{codeOutput}</span>
                    <button
                      onClick={handleRunPlaygroundCode}
                      className="px-3 py-1 bg-[#38BDF8] hover:bg-[#0EA5E9] text-gray-900 rounded-lg font-black cursor-pointer flex items-center gap-1 shrink-0"
                    >
                      <Play className="w-3 h-3 fill-current" />
                      <span>Re-Run</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* C. SCRATCH / BLOCK CODING VISUAL SEQUENCER */}
          {currentLang.id === 'scratch' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Left Column: Visual Blocks Canvas */}
              <div className="bg-amber-50 rounded-[28px] p-5 border-3 border-[#2D2D2D] shadow-[0_4px_0_#2D2D2D] space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-black text-[#2D2D2D] uppercase tracking-wider flex items-center gap-2">
                    <span>🧩 Visual Puzzle Blocks Stack:</span>
                  </h4>

                  <button
                    onClick={handleRunPlaygroundCode}
                    className="px-4 py-2 rounded-xl text-xs font-black uppercase tracking-tight bg-[#22C55E] hover:bg-[#16A34A] text-white cursor-pointer shadow-xs flex items-center gap-1.5 transition-all"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Run Blocks 🟢</span>
                  </button>
                </div>

                {/* Stacked Puzzle Blocks */}
                <div className="space-y-2.5">
                  {scratchBlocks.map((blk, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl border-3 border-[#2D2D2D] bg-[#4D96FF] text-white font-black text-sm shadow-[0_4px_0_#2D2D2D] flex items-center justify-between transition-transform hover:scale-[1.01]"
                      style={{
                        backgroundColor: idx === 0 ? '#22C55E' : idx === 1 ? '#4D96FF' : idx === 2 ? '#EC4899' : '#F59E0B'
                      }}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">
                          {idx + 1}
                        </span>
                        <span>{blk}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-3.5 bg-white rounded-xl border-2 border-amber-300 text-xs font-bold text-amber-900 leading-relaxed">
                  Notice how blocks snap cleanly top-to-bottom. In block coding, you can never make a spelling or punctuation typo!
                </div>
              </div>

              {/* Right Column: Visual Stage / Mascot Reaction */}
              <div className="bg-white rounded-[28px] p-6 border-3 border-[#2D2D2D] shadow-[0_4px_0_#2D2D2D] flex flex-col justify-between items-center text-center min-h-[420px]">
                <div className="w-full flex items-center justify-between text-xs font-black text-gray-500 uppercase">
                  <span>Scratch Stage 🎬</span>
                  <span className="text-emerald-600">Status: Running</span>
                </div>

                <div className="my-auto space-y-4">
                  <div 
                    className="text-8xl transition-transform duration-500 transform cursor-pointer"
                    style={{ transform: `translateX(${scratchMascotStep % 4 * 25}px)` }}
                    onClick={handleRunPlaygroundCode}
                  >
                    🐱
                  </div>

                  <div className="inline-block bg-sky-100 text-sky-900 px-4 py-2 rounded-2xl border-2 border-sky-300 font-black text-sm">
                    {terminalLogs[terminalLogs.length - 1] || 'Tap "Run Blocks 🟢" to start the dance!'}
                  </div>
                </div>

                <div className="w-full p-3 bg-gray-50 rounded-xl border-2 border-gray-200 text-xs font-bold text-gray-600 flex items-center justify-between">
                  <span>Pippin the Cyber Cat is ready to execute!</span>
                  <button
                    onClick={() => setScratchMascotStep(0)}
                    className="text-[11px] font-bold text-[#4D96FF] hover:underline cursor-pointer"
                  >
                    Reset Mascot
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* 4. HANDS-ON CODING CHALLENGE FOR THIS LANGUAGE            */}
          {/* ========================================================= */}
          <div className="bg-gradient-to-r from-amber-50 via-white to-orange-50 rounded-[28px] p-6 border-3 border-[#2D2D2D] shadow-[0_5px_0_#2D2D2D] space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-200 text-amber-900 font-black text-xs border border-amber-300">
                    ⭐ Challenge Mission (+10 Stars)
                  </span>
                  {completedChallenges.has(`${currentLang.id}_challenge`) && (
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-black text-xs border border-emerald-300 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Completed!
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-black text-[#2D2D2D] mt-1">
                  {currentLang.handsOnChallenge.title}
                </h3>
                <p className="text-xs font-bold text-gray-700 mt-0.5">
                  {currentLang.handsOnChallenge.prompt}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowChallengeHint(!showChallengeHint)}
                  className="px-3 py-1.5 rounded-xl text-xs font-black bg-white hover:bg-gray-100 border-2 border-gray-300 text-gray-700 cursor-pointer flex items-center gap-1.5 transition-all"
                >
                  <HelpCircle className="w-3.5 h-3.5 text-amber-500" />
                  <span>{showChallengeHint ? 'Hide Hint' : 'Hint 💡'}</span>
                </button>

                <button
                  onClick={() => setShowChallengeSolution(!showChallengeSolution)}
                  className="px-3 py-1.5 rounded-xl text-xs font-black bg-white hover:bg-gray-100 border-2 border-gray-300 text-gray-700 cursor-pointer flex items-center gap-1.5 transition-all"
                >
                  <Eye className="w-3.5 h-3.5 text-blue-500" />
                  <span>{showChallengeSolution ? 'Hide Solution' : 'Peek Solution'}</span>
                </button>

                <button
                  onClick={handleCheckChallenge}
                  className="px-4 py-2 rounded-xl text-xs font-black uppercase tracking-tight bg-[#6BCB77] hover:bg-[#4E9B56] text-white cursor-pointer shadow-xs flex items-center gap-1.5 transition-all"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Test My Solution ✨</span>
                </button>
              </div>
            </div>

            {/* Hint Box */}
            {showChallengeHint && (
              <div className="p-3.5 bg-amber-100/80 rounded-xl border-2 border-amber-300 text-xs font-bold text-amber-900 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-amber-600 shrink-0" />
                <span>💡 Hint: {currentLang.handsOnChallenge.hint}</span>
              </div>
            )}

            {/* Solution Box */}
            {showChallengeSolution && (
              <div className="p-3.5 bg-blue-50 rounded-xl border-2 border-blue-300 text-xs font-mono text-blue-900 space-y-1">
                <div className="font-sans font-black text-xs text-blue-800 flex items-center gap-1 mb-1">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Solution Code:</span>
                </div>
                <pre className="p-2.5 bg-white rounded-lg border border-blue-200 overflow-x-auto whitespace-pre-wrap">
                  {currentLang.handsOnChallenge.solutionCode}
                </pre>
              </div>
            )}

            {/* Challenge Code Input */}
            <div className="space-y-2">
              <textarea
                value={challengeCode}
                onChange={(e) => setChallengeCode(e.target.value)}
                rows={5}
                className="w-full bg-[#181825] text-amber-200 font-mono text-xs sm:text-sm p-3.5 rounded-xl border-2 border-gray-700 focus:outline-none focus:border-[#4D96FF] resize-none"
                placeholder="Type your solution here..."
                spellCheck={false}
              />
            </div>

            {/* Challenge Feedback Message */}
            {challengeFeedback.status !== 'idle' && (
              <div className={`p-4 rounded-xl border-2 flex items-center gap-3 ${
                challengeFeedback.status === 'success'
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-900 font-black'
                  : 'bg-rose-50 border-rose-300 text-rose-900 font-bold'
              }`}>
                {challengeFeedback.status === 'success' ? (
                  <Award className="w-5 h-5 text-emerald-600 shrink-0" />
                ) : (
                  <HelpCircle className="w-5 h-5 text-rose-600 shrink-0" />
                )}
                <span className="text-xs sm:text-sm">{challengeFeedback.message}</span>
              </div>
            )}
          </div>

          {/* ========================================================= */}
          {/* 5. QUICK CONCEPT CHECK QUIZ                               */}
          {/* ========================================================= */}
          <div className="bg-white rounded-[28px] p-6 border-3 border-[#2D2D2D] shadow-[0_5px_0_#2D2D2D] space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black text-[#8B5CF6] uppercase tracking-wider flex items-center gap-1.5">
                <BookOpen className="w-4 h-4" />
                <span>Knowledge Check: {currentLang.shortName}</span>
              </span>
              <span className="text-xs font-bold text-gray-500">Reward: +5 Stars ⭐</span>
            </div>

            <h4 className="text-base sm:text-lg font-black text-[#2D2D2D]">
              {currentLang.quickQuiz.question}
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {currentLang.quickQuiz.options.map((opt, oIdx) => {
                const isSelected = selectedQuizOption === oIdx;
                const isCorrect = oIdx === currentLang.quickQuiz.correctIndex;

                let btnStyle = 'bg-gray-50 border-gray-200 text-gray-800 hover:border-[#8B5CF6]';
                if (quizSubmitted) {
                  if (isCorrect) {
                    btnStyle = 'bg-emerald-100 border-emerald-400 text-emerald-900 font-black';
                  } else if (isSelected) {
                    btnStyle = 'bg-rose-100 border-rose-400 text-rose-900';
                  }
                }

                return (
                  <button
                    key={oIdx}
                    onClick={() => handleQuizAnswer(oIdx)}
                    disabled={quizSubmitted}
                    className={`p-3.5 rounded-xl border-2 text-left text-xs font-bold cursor-pointer transition-all ${btnStyle}`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-black/10 flex items-center justify-center text-[10px] font-black">
                        {String.fromCharCode(65 + oIdx)}
                      </span>
                      <span>{opt}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {quizSubmitted && (
              <div className="p-3.5 bg-indigo-50 rounded-xl border-2 border-indigo-200 text-xs font-bold text-indigo-900">
                {currentLang.quickQuiz.explanation}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 4. ACTIVE VIEW: MENTAL MODELS & BIG IDEAS                 */}
      {/* ========================================================= */}
      {activeView === 'learn' && (
        <div className="space-y-6">
          
          {/* Kid Analogy Spotlight Card */}
          <div className="bg-gradient-to-r from-purple-50 via-white to-pink-50 rounded-[28px] p-6 border-3 border-[#2D2D2D] shadow-[0_5px_0_#2D2D2D] space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-purple-100 border-2 border-purple-300 flex items-center justify-center text-4xl shrink-0">
                {currentLang.kidAnalogy.emoji}
              </div>
              <div>
                <span className="text-xs font-black text-purple-700 uppercase tracking-wider">
                  Kid Mental Model & Analogy
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#2D2D2D]">
                  {currentLang.kidAnalogy.title}
                </h3>
                <p className="text-sm font-semibold text-gray-700 mt-1 max-w-2xl leading-relaxed">
                  {currentLang.kidAnalogy.explanation}
                </p>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t-2 border-purple-100 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl border-2 border-purple-200">
                <span className="text-xs font-black text-purple-700 uppercase">💖 Why Kids Love It</span>
                <p className="text-xs font-bold text-gray-700 mt-1">{currentLang.whyKidsLoveIt}</p>
              </div>
              <div className="bg-white p-4 rounded-xl border-2 border-purple-200">
                <span className="text-xs font-black text-purple-700 uppercase">🚀 Famous Things Built With It</span>
                <ul className="text-xs font-bold text-gray-700 mt-1 list-disc list-inside space-y-0.5">
                  {currentLang.famousThingsBuiltWithIt.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Core Big Ideas Grid */}
          <div className="space-y-3">
            <h3 className="text-sm font-black text-[#2D2D2D] uppercase tracking-wider">
              3 Big Ideas to Master in {currentLang.shortName}:
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {currentLang.bigIdeas.map((idea, idx) => (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl p-5 border-3 border-[#2D2D2D] shadow-[0_4px_0_#2D2D2D] flex flex-col justify-between"
                >
                  <div>
                    <span className="w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 font-black text-xs flex items-center justify-center border border-indigo-200 mb-2">
                      #{idx + 1}
                    </span>
                    <h4 className="text-base font-black text-[#2D2D2D]">{idea.term}</h4>
                    <p className="text-xs font-semibold text-gray-600 mt-1.5 leading-relaxed">
                      {idea.meaning}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-gray-100">
                    <span className="text-[10px] font-black text-gray-400 uppercase">Kid Example:</span>
                    <pre className="text-xs font-mono font-bold text-indigo-700 bg-indigo-50 p-2 rounded-lg mt-1 whitespace-pre-wrap">
                      {idea.kidExample}
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Parent Curriculum Explainer */}
          <div className="bg-emerald-50 rounded-[24px] p-5 border-3 border-[#2D2D2D] shadow-[0_4px_0_#2D2D2D] space-y-2">
            <h4 className="text-sm font-black text-emerald-900 uppercase tracking-wider flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-emerald-700" />
              <span>Parent & Educator Curriculum Note</span>
            </h4>
            <p className="text-xs sm:text-sm font-semibold text-emerald-950 leading-relaxed">
              {currentLang.curriculumParentNote}
            </p>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 5. ACTIVE VIEW: ROSETTA STONE (TRANSLATOR MATRIX)         */}
      {/* ========================================================= */}
      {activeView === 'rosetta' && (
        <div className="space-y-6">
          <div className="bg-white rounded-[28px] p-6 border-3 border-[#2D2D2D] shadow-[0_5px_0_#2D2D2D] space-y-3">
            <h3 className="text-xl sm:text-2xl font-black text-[#2D2D2D] flex items-center gap-2">
              <span>The Coding Rosetta Stone</span>
              <span>🗿✨</span>
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-gray-700 max-w-2xl leading-relaxed">
              Did you know that all programming languages share the same core superpowers? They just express them with slightly different words! 
              See how the exact same code concept is written across every language below:
            </p>
          </div>

          {ROSETTA_STONE_CONCEPTS.map(concept => (
            <div 
              key={concept.id}
              className="bg-white rounded-[24px] p-5 sm:p-6 border-3 border-[#2D2D2D] shadow-[0_4px_0_#2D2D2D] space-y-4"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-base sm:text-lg font-black text-[#2D2D2D] flex items-center gap-2">
                    <span>{concept.emoji}</span>
                    <span>{concept.title}</span>
                  </h4>
                  <p className="text-xs font-semibold text-gray-500 mt-0.5">
                    {concept.description}
                  </p>
                </div>
              </div>

              {/* Languages Comparison Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {Object.entries(concept.examples).map(([langKey, codeSnippet]) => {
                  const langMeta = CODING_LANGUAGES.find(l => l.id === langKey);
                  if (!langMeta) return null;

                  return (
                    <div 
                      key={langKey}
                      className="bg-gray-50 rounded-xl p-3 border-2 border-gray-200 flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-black text-[#2D2D2D] flex items-center gap-1.5">
                          <span>{langMeta.icon}</span>
                          <span>{langMeta.shortName}</span>
                        </span>
                        <button
                          onClick={() => handleCopyCode(codeSnippet, `${concept.id}_${langKey}`)}
                          className="text-[10px] font-bold text-gray-400 hover:text-gray-700 cursor-pointer"
                        >
                          {copiedSnippetId === `${concept.id}_${langKey}` ? 'Copied!' : 'Copy'}
                        </button>
                      </div>

                      <pre className="text-xs font-mono font-bold text-gray-800 bg-white p-2.5 rounded-lg border border-gray-300 overflow-x-auto whitespace-pre-wrap leading-tight">
                        {codeSnippet}
                      </pre>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ========================================================= */}
      {/* 6. ACTIVE VIEW: MATCHMAKER QUIZ                           */}
      {/* ========================================================= */}
      {activeView === 'matchmaker' && (
        <div className="bg-white rounded-[28px] p-6 border-3 border-[#2D2D2D] shadow-[0_5px_0_#2D2D2D] space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-black text-[#6BCB77] uppercase tracking-wider flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-emerald-600" />
              <span>Language Matchmaker Discovery</span>
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-[#2D2D2D]">
              Which Coding Language Fits Your Dreams?
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-gray-600 max-w-2xl">
              Answer these 2 fun questions to discover your personalized starting language!
            </p>
          </div>

          <div className="space-y-6">
            {MATCHMAKER_QUESTIONS.map(q => (
              <div key={q.id} className="p-4 bg-gray-50 rounded-2xl border-2 border-gray-200 space-y-3">
                <h4 className="text-sm sm:text-base font-black text-[#2D2D2D] flex items-center gap-2">
                  <span>{q.emoji}</span>
                  <span>Question {q.id}: {q.question}</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {q.options.map((opt, oIdx) => {
                    const isSelected = matchAnswers[q.id] === oIdx;
                    return (
                      <button
                        key={oIdx}
                        onClick={() => handleSelectMatchAnswer(q.id, oIdx)}
                        className={`p-3 rounded-xl border-2 text-left cursor-pointer transition-all flex items-start gap-3 ${
                          isSelected
                            ? 'bg-[#6BCB77]/20 border-[#16A34A] text-emerald-950 font-black shadow-xs'
                            : 'bg-white border-gray-200 text-gray-700 hover:border-gray-400'
                        }`}
                      >
                        <span className="text-2xl shrink-0">{opt.emoji}</span>
                        <div>
                          <p className="text-xs font-bold leading-tight">{opt.text}</p>
                          {isSelected && (
                            <p className="text-[10px] font-semibold text-emerald-700 mt-1">
                              {opt.reason}
                            </p>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Matchmaker Recommendation Result */}
          {matchmakerResult && (
            <div className="p-6 bg-gradient-to-r from-emerald-50 via-teal-50 to-sky-50 rounded-2xl border-3 border-[#2D2D2D] shadow-[0_4px_0_#2D2D2D] space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-white border-2 border-[#2D2D2D] flex items-center justify-center text-4xl shadow-xs">
                  {matchmakerResult.icon}
                </div>
                <div>
                  <span className="text-xs font-black text-emerald-700 uppercase">
                    🎉 Your Perfect Match:
                  </span>
                  <h4 className="text-2xl font-black text-[#2D2D2D]">
                    {matchmakerResult.name}!
                  </h4>
                  <p className="text-xs font-semibold text-gray-700 mt-0.5">
                    {matchmakerResult.tagline}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => {
                    setSelectedLanguageId(matchmakerResult.id);
                    setActiveView('playground');
                    playSoundEffect('star', settings.soundEffects);
                  }}
                  className="px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-tight bg-[#4D96FF] hover:bg-[#3A72C1] text-white cursor-pointer shadow-xs flex items-center gap-2"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Start Coding in {matchmakerResult.shortName} Now &rarr;</span>
                </button>

                <button
                  onClick={() => {
                    setSelectedLanguageId(matchmakerResult.id);
                    setActiveView('learn');
                    playSoundEffect('click', settings.soundEffects);
                  }}
                  className="px-4 py-2 rounded-xl text-xs font-black bg-white hover:bg-gray-100 text-gray-800 border-2 border-gray-300 cursor-pointer"
                >
                  Read Mental Model & Big Ideas
                </button>
              </div>
            </div>
          )}
        </div>
      )}

    </div>
  );
};
