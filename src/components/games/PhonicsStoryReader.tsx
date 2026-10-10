import React, { useState, useEffect, useMemo, useRef } from 'react';
import { StudentProfile, ParentSettings, PhonicsStory } from '../../types';
import { speakText, playSoundEffect } from '../../utils/sound';
import confetti from 'canvas-confetti';
import { 
  Sparkles, 
  Volume2, 
  CheckCircle2, 
  Wand2, 
  ArrowRight, 
  ArrowLeft, 
  Star, 
  BookOpen, 
  Award, 
  Shuffle, 
  HelpCircle,
  RotateCcw
} from 'lucide-react';
import { STORIES_COLLECTION, STORY_CATEGORIES } from '../../data/storiesData';

interface PhonicsStoryReaderProps {
  student: StudentProfile;
  settings: ParentSettings;
  onAwardStars: (amount: number) => void;
}

export const PhonicsStoryReader: React.FC<PhonicsStoryReaderProps> = ({ 
  student, 
  settings, 
  onAwardStars 
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(`first_open_last_story_cat_${student.id}`);
      if (saved) return saved;
    } catch {}
    return 'all';
  });
  const [currentStoryId, setCurrentStoryId] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(`first_open_last_story_id_${student.id}`);
      if (saved && STORIES_COLLECTION.some(s => s.id === saved)) return saved;
    } catch {}
    return STORIES_COLLECTION[0].id || 'story-001';
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [sessionCompletedCount, setSessionCompletedCount] = useState<number>(0);
  const [sessionStarsEarned, setSessionStarsEarned] = useState<number>(0);
  const loadingTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Persist story progress
  useEffect(() => {
    try {
      localStorage.setItem(`first_open_last_story_cat_${student.id}`, selectedCategory);
      localStorage.setItem(`first_open_last_story_id_${student.id}`, currentStoryId);
    } catch {}
  }, [selectedCategory, currentStoryId, student.id]);

  // Available stories filtered by category
  const filteredStories = useMemo(() => {
    if (selectedCategory === 'all') return STORIES_COLLECTION;
    return STORIES_COLLECTION.filter(s => s.category === selectedCategory);
  }, [selectedCategory]);

  // Current story object
  const currentStory = useMemo(() => {
    const found = STORIES_COLLECTION.find(s => s.id === currentStoryId);
    return found || filteredStories[0] || STORIES_COLLECTION[0];
  }, [currentStoryId, filteredStories]);

  // Index in total collection
  const totalIndex = useMemo(() => {
    const idx = STORIES_COLLECTION.findIndex(s => s.id === currentStory.id);
    return idx >= 0 ? idx + 1 : 1;
  }, [currentStory]);

  // Load a random story with simulated "AI story generation" animation
  const generateRandomStory = (targetCategory: string = selectedCategory, forceExcludeId?: string) => {
    playSoundEffect('click', settings.soundEffects);
    setIsLoading(true);
    setSelectedAnswer(null);
    setIsCorrect(null);

    if (loadingTimerRef.current) clearTimeout(loadingTimerRef.current);

    // Pick from the category pool
    let pool = STORIES_COLLECTION;
    if (targetCategory !== 'all') {
      pool = STORIES_COLLECTION.filter(s => s.category === targetCategory);
    }
    if (pool.length === 0) pool = STORIES_COLLECTION;

    const exclude = forceExcludeId || currentStory.id;
    let candidates = pool.filter(s => s.id !== exclude);
    if (candidates.length === 0) candidates = pool;

    const nextStory = candidates[Math.floor(Math.random() * candidates.length)];

    // Simulate snappy AI generation feel (380ms) without any API calls or latency
    loadingTimerRef.current = setTimeout(() => {
      setCurrentStoryId(nextStory.id || 'story-001');
      setIsLoading(false);
    }, 380);
  };

  // Step sequentially
  const stepStory = (delta: number) => {
    playSoundEffect('pop', settings.soundEffects);
    setSelectedAnswer(null);
    setIsCorrect(null);

    const pool = filteredStories.length > 0 ? filteredStories : STORIES_COLLECTION;
    const currentIndexInPool = pool.findIndex(s => s.id === currentStory.id);
    let nextIndex = currentIndexInPool + delta;
    if (nextIndex < 0) nextIndex = pool.length - 1;
    if (nextIndex >= pool.length) nextIndex = 0;

    setCurrentStoryId(pool[nextIndex].id || 'story-001');
  };

  // Select category
  const handleCategoryChange = (catId: string) => {
    setSelectedCategory(catId);
    generateRandomStory(catId);
  };

  // Initial mount - pick a lively random story from the collection
  useEffect(() => {
    const initialStory = STORIES_COLLECTION[Math.floor(Math.random() * STORIES_COLLECTION.length)];
    setCurrentStoryId(initialStory.id || 'story-001');

    return () => {
      if (loadingTimerRef.current) clearTimeout(loadingTimerRef.current);
    };
  }, []);

  // Voice narration of the story
  const handleReadAloud = () => {
    if (!currentStory) return;
    playSoundEffect('pop', settings.soundEffects);
    speakText(`${currentStory.title}. ${currentStory.story}`, settings.voiceGuidance, settings.voiceSpeed || 0.85);
  };

  // Voice narration of the comprehension question
  const handleReadQuestion = () => {
    if (!currentStory) return;
    playSoundEffect('pop', settings.soundEffects);
    speakText(currentStory.question, settings.voiceGuidance, settings.voiceSpeed || 0.85);
  };

  // Handle quiz option selection
  const handleAnswerClick = (index: number) => {
    if (isCorrect === true) return; // already solved this one

    setSelectedAnswer(index);
    if (index === currentStory.correctOptionIndex) {
      setIsCorrect(true);
      playSoundEffect('victory', settings.soundEffects);
      confetti({
        particleCount: 45,
        spread: 75,
        origin: { y: 0.65 }
      });
      onAwardStars(5);
      setSessionCompletedCount(prev => prev + 1);
      setSessionStarsEarned(prev => prev + 5);
      speakText("Brilliant reading! You got the correct answer! Five stars awarded!", settings.voiceGuidance, 0.9);
    } else {
      setIsCorrect(false);
      playSoundEffect('wrong', settings.soundEffects);
      speakText("Nice try! Read the story sentence one more time and try again!", settings.voiceGuidance, 0.9);
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-16 px-3 sm:px-6">
      
      {/* Top Header Card */}
      <div className="bg-white rounded-3xl p-5 sm:p-7 border-4 border-[#4D96FF] shadow-[0_8px_0_#3A72C1] relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-6 -mr-6 w-32 h-32 bg-blue-100 rounded-full opacity-50 blur-xl pointer-events-none" />
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-3xl">📖</span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#2D2D2D] tracking-tight">
                AI Phonics Story World
              </h2>
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#4D96FF]/15 text-[#3A72C1] font-black text-xs rounded-full border border-[#4D96FF]/30">
                <Sparkles className="w-3.5 h-3.5 text-[#4D96FF]" />
                110 Decodable 1-Line Stories
              </span>
            </div>
            <p className="text-sm sm:text-base text-slate-600 font-bold">
              Read whimsical 1-line phonics tales, test your reading comprehension, and collect star badges!
            </p>
          </div>

          {/* New Story & Session Stats */}
          <div className="flex items-center gap-2.5 flex-wrap sm:flex-nowrap">
            <div className="flex items-center gap-2 px-3.5 py-2 bg-amber-50 border-2 border-amber-300 rounded-2xl">
              <Star className="w-5 h-5 text-amber-500 fill-amber-400 animate-pulse" />
              <div className="text-xs font-black text-amber-900 leading-tight">
                <div>{sessionStarsEarned} Stars</div>
                <div className="text-[10px] text-amber-700 font-extrabold">{sessionCompletedCount} Solved</div>
              </div>
            </div>

            <button
              onClick={() => generateRandomStory()}
              disabled={isLoading}
              className={`flex items-center gap-2 px-5 py-3 bg-[#4D96FF] hover:bg-[#3A72C1] text-white font-black text-sm rounded-2xl shadow-[0_4px_0_#2B548F] active:translate-y-1 active:shadow-none transition-all disabled:opacity-75 ${
                isLoading ? 'animate-pulse' : ''
              }`}
              title="Generate a brand new random one-line story"
            >
              <Wand2 className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
              <span>{isLoading ? "Generating Story..." : "New Story ✨"}</span>
            </button>
          </div>
        </div>

        {/* Categories Horizontal Carousel */}
        <div className="mt-5 pt-4 border-t border-slate-100">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-black text-slate-500 uppercase tracking-wider flex items-center gap-1">
              <span>Choose Theme:</span>
            </span>
            <span className="text-xs font-bold text-slate-500">
              Story #{totalIndex} of {STORIES_COLLECTION.length}
            </span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {STORY_CATEGORIES.map(cat => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black whitespace-nowrap transition-all border-2 ${
                    isSelected
                      ? 'bg-[#2D2D2D] text-white border-[#2D2D2D] shadow-sm scale-105'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Story Interactive Reader Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border-4 border-[#6BCB77] shadow-[0_8px_0_#4E9B56] space-y-6 relative transition-all">
        
        {/* Story Meta Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b-2 border-slate-100 pb-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-3xl">{currentStory.emoji || '📖'}</span>
              <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-black rounded-full border border-emerald-300 uppercase tracking-wide">
                {currentStory.category || "Story World"}
              </span>
              <span className="px-3 py-1 bg-amber-100 text-amber-900 text-xs font-black rounded-full border border-amber-300">
                🎯 Focus: {currentStory.phonicsFocus}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-[#2D2D2D] tracking-tight">
              {currentStory.title}
            </h3>
          </div>

          {/* Audio Read-Aloud Button */}
          <button
            onClick={handleReadAloud}
            className="flex items-center gap-2 px-4 py-2.5 bg-[#FFD93D] hover:bg-[#E6C229] text-[#2D2D2D] font-black text-sm rounded-2xl shadow-[0_4px_0_#C9A92E] active:translate-y-1 active:shadow-none transition-all"
            title="Read story out loud with voice guidance"
          >
            <Volume2 className="w-5 h-5 text-[#2D2D2D]" />
            <span>Read Aloud 🔊</span>
          </button>
        </div>

        {/* The 1-Line Story Box */}
        <div className={`p-6 sm:p-8 rounded-2xl border-3 border-emerald-200 bg-gradient-to-r from-emerald-50/80 via-teal-50/60 to-emerald-50/80 relative transition-all ${
          isLoading ? 'opacity-40 scale-[0.99] blur-[0.5px]' : 'opacity-100 scale-100'
        }`}>
          <div className="text-xl sm:text-2xl md:text-3xl font-bold leading-relaxed text-[#2D2D2D] font-serif text-center sm:text-left selection:bg-yellow-200">
            &ldquo;{currentStory.story}&rdquo;
          </div>

          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white/70 backdrop-blur-xs rounded-2xl">
              <div className="flex items-center gap-2 font-black text-emerald-800 text-lg bg-white px-5 py-2.5 rounded-full border-2 border-emerald-300 shadow-md animate-bounce">
                <Wand2 className="w-5 h-5 text-emerald-600 animate-spin" />
                <span>Crafting Magical Story...</span>
              </div>
            </div>
          )}
        </div>

        {/* Comprehension Quiz Section */}
        <div className="bg-[#FFF9F0] rounded-2xl p-6 border-3 border-[#FFD93D] shadow-xs space-y-4">
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <h4 className="font-black text-base sm:text-lg text-[#2D2D2D] flex items-center gap-2">
              <span className="p-1.5 bg-[#FFD93D] rounded-xl text-slate-900">
                <HelpCircle className="w-5 h-5" />
              </span>
              <span>Comprehension Check: {currentStory.question}</span>
            </h4>

            <button
              onClick={handleReadQuestion}
              className="p-1.5 hover:bg-amber-200 text-amber-800 rounded-xl transition-colors"
              title="Hear question read aloud"
            >
              <Volume2 className="w-4 h-4" />
            </button>
          </div>

          {/* Multiple Choice Options */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
            {currentStory.options?.map((opt, idx) => {
              const isSelected = selectedAnswer === idx;
              const isOptionCorrect = idx === currentStory.correctOptionIndex;
              const showAsCorrect = (isSelected && isCorrect === true) || (isCorrect === true && isOptionCorrect);
              const showAsWrong = isSelected && isCorrect === false;

              let btnStyle = "bg-white hover:bg-amber-50 text-slate-800 border-slate-300 hover:border-amber-400 hover:shadow-xs";
              if (showAsCorrect) {
                btnStyle = "bg-emerald-500 text-white border-emerald-600 shadow-[0_4px_0_#2E7D32] scale-[1.02]";
              } else if (showAsWrong) {
                btnStyle = "bg-rose-500 text-white border-rose-600 shadow-[0_4px_0_#C62828] animate-shake";
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleAnswerClick(idx)}
                  className={`p-4 rounded-2xl font-black text-sm sm:text-base border-3 transition-all text-center flex items-center justify-center gap-2 active:scale-95 ${btnStyle}`}
                >
                  <span>{opt}</span>
                  {showAsCorrect && <CheckCircle2 className="w-5 h-5 text-white" />}
                </button>
              );
            })}
          </div>

          {/* Feedback Banner */}
          {isCorrect === true && (
            <div className="bg-emerald-100 border-2 border-emerald-400 text-emerald-900 p-4 rounded-2xl flex items-center justify-between gap-3 animate-fadeIn flex-wrap">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🌟</span>
                <div>
                  <div className="font-black text-sm sm:text-base">Brilliant Reading! +5 Stars!</div>
                  <div className="text-xs text-emerald-800 font-bold">You understood the story perfectly!</div>
                </div>
              </div>
              <button
                onClick={() => generateRandomStory()}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs rounded-xl shadow-xs transition-all flex items-center gap-1.5"
              >
                <span>Next Story</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {isCorrect === false && (
            <div className="bg-rose-50 border-2 border-rose-300 text-rose-800 p-3 rounded-2xl flex items-center justify-between gap-2 text-xs sm:text-sm font-bold">
              <span>Almost! Check the story sentence above and pick the right answer!</span>
              <button
                onClick={() => setSelectedAnswer(null)}
                className="px-3 py-1.5 bg-rose-200 hover:bg-rose-300 text-rose-900 font-black rounded-lg transition-colors flex items-center gap-1"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retry</span>
              </button>
            </div>
          )}
        </div>

        {/* Bottom Navigation & Shuffle Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t-2 border-slate-100">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => stepStory(-1)}
              className="flex-1 sm:flex-none flex items-center justify-center gap-1 px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl transition-colors"
              title="Previous story in collection"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>
            <button
              onClick={() => stepStory(1)}
              className="flex-1 sm:flex-none flex items-center justify-center gap-1 px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl transition-colors"
              title="Next story in collection"
            >
              <span>Next</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => generateRandomStory()}
              className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white font-black text-xs rounded-xl transition-colors shadow-xs"
            >
              <Shuffle className="w-3.5 h-3.5 text-amber-400" />
              <span>Surprise Random Story</span>
            </button>
          </div>
        </div>

      </div>

      {/* Helpful Reading & Phonics Pedagogy Footer */}
      <div className="bg-white rounded-3xl p-6 border-3 border-amber-200 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-amber-100 rounded-2xl text-2xl">💡</div>
          <div>
            <div className="font-black text-sm text-slate-800">
              How One-Line Decodable Stories Accelerate Fluency
            </div>
            <p className="text-xs text-slate-600 font-medium max-w-2xl mt-0.5">
              Single-sentence stories eliminate cognitive overload for early readers. By keeping the narrative decodable in one breath and immediately asking a focused comprehension question, children build confidence, phonemic memory, and reading joy!
            </p>
          </div>
        </div>

        <div className="text-xs font-black text-[#4D96FF] bg-blue-50 px-3.5 py-2 rounded-xl border border-blue-200 whitespace-nowrap self-stretch md:self-auto text-center">
          100% Offline &amp; Privacy-Safe
        </div>
      </div>

    </div>
  );
};
