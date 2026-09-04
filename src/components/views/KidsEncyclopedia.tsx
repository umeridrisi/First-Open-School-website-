import React, { useState, useMemo, useEffect } from 'react';
import { EncyclopediaEntry, EncyclopediaCategory, StudentProfile, ParentSettings } from '../../types';
import { ENCYCLOPEDIA_ENTRIES, ENCYCLOPEDIA_CATEGORIES } from '../../data/encyclopediaData';
import { speakText, playSoundEffect } from '../../utils/sound';
import { 
  BookOpen, 
  Search, 
  Volume2, 
  Sparkles, 
  HelpCircle, 
  ChevronRight, 
  Lightbulb, 
  History, 
  Printer, 
  CheckCircle2, 
  XCircle, 
  ArrowRight,
  Compass,
  Send,
  Loader2,
  Share2
} from 'lucide-react';

interface KidsEncyclopediaProps {
  student: StudentProfile;
  settings: ParentSettings;
  initialEntryId?: string;
  initialCategory?: string;
  onEntryChange?: (entryId: string) => void;
  onCategoryChange?: (category: string) => void;
  onNavigateToTracing?: (charOrDigit: string) => void;
}

export const KidsEncyclopedia: React.FC<KidsEncyclopediaProps> = ({
  student: _student,
  settings,
  initialEntryId,
  initialCategory,
  onEntryChange,
  onCategoryChange,
  onNavigateToTracing
}) => {
  const [selectedCategory, setSelectedCategory] = useState<EncyclopediaCategory | 'all'>(() => {
    if (initialCategory) {
      const isValid = ENCYCLOPEDIA_CATEGORIES.some(c => c.id === initialCategory);
      if (isValid) return initialCategory as EncyclopediaCategory;
    }
    return 'alphabets';
  });

  const [selectedEntryId, setSelectedEntryId] = useState<string>(() => {
    if (initialEntryId) {
      const found = ENCYCLOPEDIA_ENTRIES.find(e => e.id === initialEntryId);
      if (found) return found.id;
    }
    return 'letter-a';
  });

  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Sync with initialEntryId
  useEffect(() => {
    if (initialEntryId) {
      const found = ENCYCLOPEDIA_ENTRIES.find(e => e.id === initialEntryId);
      if (found && found.id !== selectedEntryId) {
        setSelectedEntryId(found.id);
        setSelectedCategory(found.category);
      }
    }
  }, [initialEntryId]);

  // Sync with initialCategory
  useEffect(() => {
    if (initialCategory) {
      const isValid = ENCYCLOPEDIA_CATEGORIES.some(c => c.id === initialCategory);
      if (isValid && initialCategory !== selectedCategory) {
        setSelectedCategory(initialCategory as EncyclopediaCategory);
      }
    }
  }, [initialCategory]);
  
  // Custom AI generated entry state
  const [customEntry, setCustomEntry] = useState<EncyclopediaEntry | null>(null);
  const [aiQuestion, setAiQuestion] = useState<string>('');
  const [isLoadingAi, setIsLoadingAi] = useState<boolean>(false);
  const [aiError, setAiError] = useState<string | null>(null);

  // Micro quiz state
  const [selectedQuizAnswer, setSelectedQuizAnswer] = useState<number | null>(null);
  const [showQuizResult, setShowQuizResult] = useState<boolean>(false);

  // Filter entries based on search & category
  const filteredEntries = useMemo(() => {
    return ENCYCLOPEDIA_ENTRIES.filter(entry => {
      const matchesCategory = selectedCategory === 'all' || entry.category === selectedCategory;
      if (!searchQuery.trim()) return matchesCategory;

      const q = searchQuery.toLowerCase();
      const matchesTitle = entry.title.toLowerCase().includes(q);
      const matchesTagline = entry.tagline.toLowerCase().includes(q);
      const matchesAnalogy = entry.analogy.story.toLowerCase().includes(q);
      const matchesKidWords = entry.kidWords?.some(kw => kw.word.toLowerCase().includes(q));

      return (selectedCategory === 'all' || entry.category === selectedCategory) && 
             (matchesTitle || matchesTagline || matchesAnalogy || matchesKidWords);
    });
  }, [selectedCategory, searchQuery]);

  // Current active entry (custom AI entry or selected entry from list)
  const currentEntry = useMemo(() => {
    if (customEntry && customEntry.id === selectedEntryId) {
      return customEntry;
    }
    const found = ENCYCLOPEDIA_ENTRIES.find(e => e.id === selectedEntryId);
    return found || ENCYCLOPEDIA_ENTRIES[0];
  }, [selectedEntryId, customEntry]);

  // Alphabet letters list for quick A-Z ribbon
  const alphabetLetters = useMemo(() => {
    return ENCYCLOPEDIA_ENTRIES.filter(e => e.category === 'alphabets');
  }, []);

  const handleSelectEntry = (entry: EncyclopediaEntry) => {
    setSelectedEntryId(entry.id);
    setSelectedQuizAnswer(null);
    setShowQuizResult(false);
    onEntryChange?.(entry.id);
    playSoundEffect('click', settings.soundEffects);
    speakText(entry.title, settings.voiceGuidance);
  };

  const handlePronounce = (entry: EncyclopediaEntry) => {
    playSoundEffect('click', settings.soundEffects);
    const pronounceText = `${entry.title}. Pronounced: ${entry.pronunciation}. ${entry.tagline}`;
    speakText(pronounceText, settings.voiceGuidance);
  };

  const handleReadArticle = (entry: EncyclopediaEntry) => {
    playSoundEffect('click', settings.soundEffects);
    const fullText = `${entry.title}. ${entry.tagline}. Here is a fun analogy: ${entry.analogy.title}. ${entry.analogy.story}. Did you know? ${entry.didYouKnowOrigin}`;
    speakText(fullText, settings.voiceGuidance);
  };

  const handleQuizAnswer = (index: number) => {
    if (showQuizResult) return;
    setSelectedQuizAnswer(index);
    setShowQuizResult(true);

    if (index === currentEntry.microQuiz.correctIndex) {
      playSoundEffect('victory', settings.soundEffects);
      speakText(`Correct! ${currentEntry.microQuiz.explanation}`, settings.voiceGuidance);
    } else {
      playSoundEffect('wrong', settings.soundEffects);
      speakText(`Nice try! The answer is: ${currentEntry.microQuiz.options[currentEntry.microQuiz.correctIndex]}. ${currentEntry.microQuiz.explanation}`, settings.voiceGuidance);
    }
  };

  const handleAskAi = async (questionText?: string) => {
    const q = questionText || aiQuestion;
    if (!q.trim() || isLoadingAi) return;

    setIsLoadingAi(true);
    setAiError(null);
    playSoundEffect('click', settings.soundEffects);

    try {
      const response = await fetch('/api/encyclopedia-ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: q })
      });

      const resData = await response.json();
      const generated = resData.data || resData.fallbackData;

      if (generated) {
        const newEntry: EncyclopediaEntry = {
          id: `ai-custom-${Date.now()}`,
          title: generated.title || q,
          symbol: generated.symbol || '💡',
          pronunciation: generated.pronunciation || `(${q.toLowerCase()})`,
          category: 'earth-elements',
          tagline: generated.tagline || 'A fascinating wonder explored by the Kids Encyclopedia!',
          analogy: generated.analogy || {
            title: 'Everyday Comparison',
            story: 'Everything in the world is connected through amazing patterns you can see all around you.',
            emoji: '✨'
          },
          howItWorks: generated.howItWorks || {
            title: 'How It Works',
            points: ['It connects to natural laws.', 'It can be observed.', 'It helps us understand the world.']
          },
          funFacts: generated.funFacts || ['Every day humans learn new things about this topic!'],
          didYouKnowOrigin: generated.didYouKnowOrigin || 'Scientists continue to research this exciting topic.',
          microQuiz: generated.microQuiz || {
            question: `What makes ${q} so interesting?`,
            options: ['It teaches us about the universe', 'It is invisible', 'It never changes'],
            correctIndex: 0,
            explanation: 'Learning about the universe makes our minds grow!'
          },
          seeAlso: [
            { id: 'sun', title: 'The Sun', category: 'solar-system' },
            { id: 'water-element', title: 'Water', category: 'earth-elements' }
          ]
        };

        setCustomEntry(newEntry);
        setSelectedEntryId(newEntry.id);
        setSelectedQuizAnswer(null);
        setShowQuizResult(false);
        speakText(`Here is what the encyclopedia found for: ${newEntry.title}`, settings.voiceGuidance);
      }
    } catch (err) {
      console.error('Failed to query encyclopedia AI:', err);
      setAiError('Could not reach the encyclopedia assistant right now.');
    } finally {
      setIsLoadingAi(false);
    }
  };

  const handlePrint = () => {
    playSoundEffect('click', settings.soundEffects);
    window.print();
  };

  return (
    <div className="space-y-8 pb-16">
      
      {/* Header Banner - Inspired by CDE Encyclopedic Authority */}
      <div className="bg-white rounded-[32px] p-6 sm:p-8 border-4 border-[#FFD93D] shadow-[0_8px_0_#C9A92E] relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#FFD93D]/25 border-2 border-[#FFD93D] text-[#2D2D2D] text-xs font-black uppercase tracking-wider">
              <BookOpen className="w-4 h-4 text-[#2D2D2D]" />
              <span>CDE Style Early Literacy & Science Encyclopedia</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-[#2D2D2D] tracking-tight flex items-center gap-3">
              <span>Kids Encyclopedia</span>
              <span className="text-3xl">📚</span>
            </h1>
            <p className="text-base text-[#2D2D2D]/80 font-medium leading-relaxed">
              Clear definitions, phonetic pronunciations, real-life analogies, and visual anatomy breakdowns.
              Explore all 26 alphabets in depth, followed by numbers, the solar system, earth elements, and world geography!
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center space-x-2 px-4 py-2.5 bg-[#FFF9F0] hover:bg-white text-[#2D2D2D] font-black text-xs uppercase tracking-tight rounded-2xl border-4 border-gray-300 hover:border-[#FFD93D] shadow-[0_4px_0_#ccc] active:translate-y-1 active:shadow-none transition-all cursor-pointer"
              title="Print current entry study card"
            >
              <Printer className="w-4 h-4" />
              <span>Print Study Card</span>
            </button>
          </div>
        </div>
      </div>

      {/* A-Z Quick Jump Ribbon for Fast Letter Discovery */}
      <div className="bg-white p-4 rounded-[24px] border-4 border-[#4D96FF] shadow-[0_6px_0_#3A72C1] space-y-2">
        <div className="flex items-center justify-between px-2">
          <span className="text-xs font-black uppercase tracking-wider text-[#4D96FF] flex items-center gap-1.5">
            <Compass className="w-4 h-4" />
            <span>Alphabet A to Z Quick Jump</span>
          </span>
          <span className="text-xs text-gray-500 font-bold hidden sm:inline">Click any letter to open its encyclopedia article</span>
        </div>
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {alphabetLetters.map((item) => {
            const isSelected = selectedEntryId === item.id;
            const letterChar = item.title.charAt(7); // "Letter A (Aa)" -> "A"
            return (
              <button
                key={item.id}
                onClick={() => {
                  setSelectedCategory('alphabets');
                  handleSelectEntry(item);
                }}
                className={`w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-xl font-black text-base flex items-center justify-center border-2 transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#FF6B6B] text-white border-black shadow-[0_3px_0_#000] scale-105'
                    : 'bg-[#FFF9F0] text-[#2D2D2D] border-gray-200 hover:border-[#FF6B6B] hover:bg-white'
                }`}
              >
                {letterChar}
              </button>
            );
          })}
        </div>
      </div>

      {/* Category Tabs & Search Bar */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          <button
            onClick={() => {
              playSoundEffect('click', settings.soundEffects);
              setSelectedCategory('all');
              onCategoryChange?.('all');
            }}
            className={`px-4 py-2.5 rounded-2xl border-4 font-black text-xs uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-[#2D2D2D] text-white border-black shadow-[0_4px_0_#000]'
                : 'bg-white text-[#2D2D2D]/70 border-gray-200 hover:border-[#FFD93D]'
            }`}
          >
            All Entries ({ENCYCLOPEDIA_ENTRIES.length})
          </button>

          {ENCYCLOPEDIA_CATEGORIES.map(cat => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  playSoundEffect('click', settings.soundEffects);
                  setSelectedCategory(cat.id);
                  onCategoryChange?.(cat.id);
                  const firstOfCat = ENCYCLOPEDIA_ENTRIES.find(e => e.category === cat.id);
                  if (firstOfCat) {
                    setSelectedEntryId(firstOfCat.id);
                    onEntryChange?.(firstOfCat.id);
                  }
                }}
                className={`flex items-center space-x-1.5 px-4 py-2.5 rounded-2xl border-4 font-black text-xs uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-white text-[#2D2D2D] border-[#FFD93D] shadow-[0_4px_0_#C9A92E]'
                    : 'bg-white text-[#2D2D2D]/70 border-gray-200 hover:border-[#FFD93D]'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[280px]">
          <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search letters, planets, words..."
            className="w-full pl-11 pr-4 py-2.5 bg-white rounded-2xl border-4 border-gray-200 focus:border-[#4D96FF] font-bold text-sm text-[#2D2D2D] outline-none transition-all"
          />
        </div>
      </div>

      {/* Main Two-Column Layout: Sidebar Catalog + Detailed Article Pane */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Sidebar: Entries Navigation */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-white rounded-[28px] p-4 border-4 border-gray-200 shadow-xs max-h-[700px] overflow-y-auto space-y-2">
            <div className="px-2 py-1 text-xs font-black uppercase tracking-wider text-gray-400 flex items-center justify-between">
              <span>Articles ({filteredEntries.length})</span>
              <span>Select to view</span>
            </div>

            {filteredEntries.length === 0 ? (
              <div className="text-center py-8 text-gray-400 font-bold text-sm">
                No entries match your search. Try asking the AI below!
              </div>
            ) : (
              filteredEntries.map(entry => {
                const isSelected = selectedEntryId === entry.id;
                return (
                  <button
                    key={entry.id}
                    onClick={() => handleSelectEntry(entry)}
                    className={`w-full text-left p-3 rounded-2xl border-2 transition-all flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? 'bg-[#FFF9F0] border-[#FF6B6B] shadow-[0_3px_0_#FF6B6B] translate-x-1'
                        : 'bg-white border-gray-100 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center text-lg font-black shrink-0 border border-gray-200">
                        {entry.symbol || '📖'}
                      </span>
                      <div>
                        <div className="font-black text-sm text-[#2D2D2D]">{entry.title}</div>
                        <div className="text-xs text-gray-400 font-bold">{entry.pronunciation}</div>
                      </div>
                    </div>
                    <ChevronRight className={`w-4 h-4 ${isSelected ? 'text-[#FF6B6B]' : 'text-gray-300'}`} />
                  </button>
                );
              })
            )}
          </div>

          {/* AI Curious Question Box ("Ask the Kids Encyclopedia") */}
          <div className="bg-gradient-to-br from-[#4D96FF]/10 to-[#6BCB77]/10 p-5 rounded-[28px] border-4 border-[#4D96FF] shadow-[0_6px_0_#3A72C1] space-y-3">
            <div className="flex items-center space-x-2 text-[#4D96FF]">
              <Sparkles className="w-5 h-5" />
              <h3 className="font-black text-sm uppercase tracking-tight">Ask the Encyclopedia</h3>
            </div>
            <p className="text-xs text-[#2D2D2D]/80 font-medium">
              Have a curious question? Get a kid-friendly CDE-style encyclopedia entry with analogies and fun facts!
            </p>

            <div className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={aiQuestion}
                  onChange={(e) => setAiQuestion(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAskAi()}
                  placeholder="e.g. Why is the sky blue?"
                  className="flex-1 px-3 py-2 text-xs font-bold bg-white rounded-xl border-2 border-gray-300 focus:border-[#4D96FF] outline-none"
                />
                <button
                  onClick={() => handleAskAi()}
                  disabled={isLoadingAi || !aiQuestion.trim()}
                  className="px-3 py-2 bg-[#4D96FF] text-white rounded-xl font-black text-xs flex items-center justify-center hover:bg-[#3A72C1] active:scale-95 disabled:opacity-50 cursor-pointer shadow-xs"
                >
                  {isLoadingAi ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                </button>
              </div>

              {/* Sample Quick Questions */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                <button
                  onClick={() => handleAskAi("Why is Mars red?")}
                  className="text-[11px] font-bold px-2 py-1 bg-white hover:bg-[#4D96FF] hover:text-white text-[#2D2D2D] rounded-lg border border-gray-200 transition-all cursor-pointer"
                >
                  Why is Mars red? 🔴
                </button>
                <button
                  onClick={() => handleAskAi("Why do we have silent letters like K in Knife?")}
                  className="text-[11px] font-bold px-2 py-1 bg-white hover:bg-[#4D96FF] hover:text-white text-[#2D2D2D] rounded-lg border border-gray-200 transition-all cursor-pointer"
                >
                  Silent letters? 🔤
                </button>
                <button
                  onClick={() => handleAskAi("Why is the ocean salty?")}
                  className="text-[11px] font-bold px-2 py-1 bg-white hover:bg-[#4D96FF] hover:text-white text-[#2D2D2D] rounded-lg border border-gray-200 transition-all cursor-pointer"
                >
                  Why is ocean salty? 🌊
                </button>
              </div>

              {aiError && (
                <div className="text-[11px] font-bold text-red-500">{aiError}</div>
              )}
            </div>
          </div>
        </div>

        {/* Right Main Article Pane - Structured Exactly in Computer Language Co Style */}
        <div className="lg:col-span-8 space-y-6">
          <article className="bg-white rounded-[36px] p-6 sm:p-10 border-4 border-[#2D2D2D] shadow-[0_10px_0_#2D2D2D] space-y-8">
            
            {/* 1. Term Header: Title, Phonetic Pronunciation, Audio Button */}
            <div className="border-b-4 border-gray-100 pb-6 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#FFF9F0] border-2 border-gray-200 text-[#2D2D2D]">
                  Category: {currentEntry.category}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handlePronounce(currentEntry)}
                    className="flex items-center space-x-1.5 px-3 py-1.5 bg-[#4D96FF] hover:bg-[#3A72C1] text-white font-black text-xs uppercase tracking-tight rounded-xl shadow-[0_3px_0_#3A72C1] active:translate-y-0.5 active:shadow-none transition-all cursor-pointer"
                    title="Listen to phonetic pronunciation"
                  >
                    <Volume2 className="w-4 h-4" />
                    <span>Say It</span>
                  </button>

                  <button
                    onClick={() => handleReadArticle(currentEntry)}
                    className="flex items-center space-x-1.5 px-3 py-1.5 bg-[#6BCB77] hover:bg-[#4E9B56] text-white font-black text-xs uppercase tracking-tight rounded-xl shadow-[0_3px_0_#4E9B56] active:translate-y-0.5 active:shadow-none transition-all cursor-pointer"
                    title="Read entire article aloud"
                  >
                    <Volume2 className="w-4 h-4" />
                    <span>Read Aloud</span>
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#FFF9F0] border-4 border-[#FFD93D] flex items-center justify-center text-3xl sm:text-4xl font-black text-[#2D2D2D] shadow-xs shrink-0">
                  {currentEntry.symbol || '📖'}
                </div>
                <div>
                  <div className="flex items-baseline flex-wrap gap-3">
                    <h1 className="text-2xl sm:text-4xl font-black text-[#2D2D2D] tracking-tight">
                      {currentEntry.title}
                    </h1>
                    <span className="text-lg sm:text-xl font-extrabold text-[#4D96FF] bg-blue-50 px-2.5 py-0.5 rounded-lg border border-blue-200">
                      {currentEntry.pronunciation}
                    </span>
                  </div>
                  <p className="text-base sm:text-lg font-bold text-[#2D2D2D]/80 mt-1">
                    {currentEntry.tagline}
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Distinctive Info & Mental Model Spotlight (Category-Tailored) */}
            {(() => {
              const getCategoryTheme = (category: EncyclopediaCategory) => {
                switch (category) {
                  case 'alphabets':
                    return {
                      badge: 'Letter Info',
                      borderColor: 'border-[#FF6B6B]',
                      shadowColor: 'shadow-[0_6px_0_#D94B4B]',
                      bg: 'bg-rose-50/70',
                      tagBg: 'bg-[#FF6B6B]',
                      tagText: 'text-white',
                      titlePrefix: 'How to Picture It'
                    };
                  case 'numbers':
                    return {
                      badge: 'Math Info',
                      borderColor: 'border-[#6BCB77]',
                      shadowColor: 'shadow-[0_6px_0_#4E9B56]',
                      bg: 'bg-emerald-50/70',
                      tagBg: 'bg-[#6BCB77]',
                      tagText: 'text-white',
                      titlePrefix: 'In Real Life'
                    };
                  case 'solar-system':
                    return {
                      badge: 'Cosmic Info',
                      borderColor: 'border-[#4D96FF]',
                      shadowColor: 'shadow-[0_6px_0_#3A72C1]',
                      bg: 'bg-blue-50/70',
                      tagBg: 'bg-[#4D96FF]',
                      tagText: 'text-white',
                      titlePrefix: 'Space Spotlight'
                    };
                  case 'earth-elements':
                    return {
                      badge: 'Earth Info',
                      borderColor: 'border-[#FFD93D]',
                      shadowColor: 'shadow-[0_6px_0_#C9A92E]',
                      bg: 'bg-amber-50/70',
                      tagBg: 'bg-[#FFD93D]',
                      tagText: 'text-[#2D2D2D]',
                      titlePrefix: 'Nature in Action'
                    };
                  case 'animals-dinosaurs':
                    return {
                      badge: 'Creature Info',
                      borderColor: 'border-emerald-400',
                      shadowColor: 'shadow-[0_6px_0_#2B8A4E]',
                      bg: 'bg-emerald-50/70',
                      tagBg: 'bg-emerald-600',
                      tagText: 'text-white',
                      titlePrefix: 'Creature Spotlight'
                    };
                  case 'human-body':
                    return {
                      badge: 'Body Power Info',
                      borderColor: 'border-rose-400',
                      shadowColor: 'shadow-[0_6px_0_#B8334E]',
                      bg: 'bg-rose-50/70',
                      tagBg: 'bg-rose-500',
                      tagText: 'text-white',
                      titlePrefix: 'Inside You'
                    };
                  case 'how-things-work':
                    return {
                      badge: 'Engineering Info',
                      borderColor: 'border-amber-400',
                      shadowColor: 'shadow-[0_6px_0_#B8860B]',
                      bg: 'bg-amber-50/70',
                      tagBg: 'bg-amber-500',
                      tagText: 'text-[#2D2D2D]',
                      titlePrefix: 'Behind the Scenes'
                    };
                  case 'countries-world':
                    return {
                      badge: 'World Explorer Info',
                      borderColor: 'border-purple-400',
                      shadowColor: 'shadow-[0_6px_0_#6B3BA7]',
                      bg: 'bg-purple-50/70',
                      tagBg: 'bg-purple-600',
                      tagText: 'text-white',
                      titlePrefix: 'World Spotlight'
                    };
                  default:
                    return {
                      badge: 'Key Info',
                      borderColor: 'border-[#FFD93D]',
                      shadowColor: 'shadow-[0_6px_0_#C9A92E]',
                      bg: 'bg-[#FFF9F0]',
                      tagBg: 'bg-[#FFD93D]',
                      tagText: 'text-[#2D2D2D]',
                      titlePrefix: 'Picture It'
                    };
                }
              };

              const theme = getCategoryTheme(currentEntry.category);

              return (
                <div className={`${theme.bg} rounded-[28px] p-6 border-4 ${theme.borderColor} ${theme.shadowColor} space-y-3`}>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl">{currentEntry.analogy.emoji}</span>
                      <h2 className="text-lg font-black tracking-tight text-[#2D2D2D]">
                        <span className="text-xs font-black uppercase text-gray-500 mr-2 tracking-wider">{theme.titlePrefix}:</span>
                        <span>{currentEntry.analogy.title}</span>
                      </h2>
                    </div>
                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider ${theme.tagBg} ${theme.tagText} shadow-xs`}>
                      {theme.badge}
                    </span>
                  </div>
                  <p className="text-base text-[#2D2D2D]/90 font-medium leading-relaxed">
                    {currentEntry.analogy.story}
                  </p>
                </div>
              );
            })()}

            {/* 3. How It Works / Mouth Mechanics & Phonics Rules */}
            <div className="space-y-4">
              <h2 className="text-lg font-black text-[#2D2D2D] uppercase tracking-tight flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-[#FF6B6B]" />
                <span>{currentEntry.howItWorks.title}</span>
              </h2>
              <div className="space-y-2.5">
                {currentEntry.howItWorks.points.map((pt, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-3.5 bg-gray-50 rounded-2xl border-2 border-gray-200">
                    <span className="w-6 h-6 rounded-full bg-[#FF6B6B] text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="text-sm font-semibold text-[#2D2D2D] leading-normal">{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Letter Anatomy / Diagram (When Applicable) */}
            {currentEntry.anatomyDiagram && (
              <div className="bg-white rounded-[28px] p-6 border-4 border-[#4D96FF] shadow-[0_6px_0_#3A72C1] space-y-4">
                <h3 className="text-base font-black text-[#4D96FF] uppercase tracking-tight flex items-center gap-2">
                  <Compass className="w-5 h-5" />
                  <span>{currentEntry.anatomyDiagram.headline}</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentEntry.anatomyDiagram.parts.map((part, idx) => (
                    <div key={idx} className="p-3 bg-[#4D96FF]/10 rounded-2xl border-2 border-[#4D96FF]/30">
                      <div className="font-black text-sm text-[#2D2D2D]">{part.label}</div>
                      <div className="text-xs text-[#2D2D2D]/80 font-medium mt-0.5">{part.desc}</div>
                    </div>
                  ))}
                </div>

                {onNavigateToTracing && currentEntry.category === 'alphabets' && (
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        const letterChar = currentEntry.title.charAt(7);
                        onNavigateToTracing(letterChar);
                      }}
                      className="inline-flex items-center space-x-2 px-4 py-2 bg-[#FF6B6B] hover:bg-[#C44E4E] text-white font-black text-xs uppercase tracking-tight rounded-xl shadow-[0_3px_0_#C44E4E] active:translate-y-0.5 active:shadow-none transition-all cursor-pointer"
                    >
                      <span>Practice Tracing {currentEntry.symbol}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* 5. Real-World Vocabulary Words (For Alphabets) */}
            {currentEntry.kidWords && currentEntry.kidWords.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-lg font-black text-[#2D2D2D] uppercase tracking-tight flex items-center gap-2">
                  <span>Vocabulary Builder</span>
                  <span>✨</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {currentEntry.kidWords.map((kw, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-white border-2 border-gray-200 hover:border-[#FFD93D] transition-all space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl">{kw.emoji}</span>
                        <span className="font-black text-base text-[#2D2D2D]">{kw.word}</span>
                      </div>
                      <p className="text-xs text-gray-500 font-medium leading-relaxed">{kw.meaning}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 6. Ancient History / Origin Story ("Did You Know?") */}
            <div className="bg-purple-50 rounded-[28px] p-6 border-4 border-purple-300 space-y-2">
              <div className="flex items-center space-x-2 text-purple-800">
                <History className="w-5 h-5" />
                <h3 className="font-black text-sm uppercase tracking-tight">Ancient Origin & History</h3>
              </div>
              <p className="text-sm text-purple-950 font-medium leading-relaxed">
                {currentEntry.didYouKnowOrigin}
              </p>
            </div>

            {/* 7. Hands-On Mini Experiment or Activity (When Available) */}
            {currentEntry.handsOnExperiment && (
              <div className="bg-emerald-50 rounded-[28px] p-6 border-4 border-emerald-400 shadow-[0_6px_0_#2b8a3e] space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-emerald-900">
                    <span className="text-2xl">{currentEntry.handsOnExperiment.emoji || '🔬'}</span>
                    <h3 className="font-black text-base uppercase tracking-tight">
                      Try It Yourself: {currentEntry.handsOnExperiment.title}
                    </h3>
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-wider bg-emerald-200 text-emerald-900 px-2.5 py-1 rounded-full">
                    Hands-On Activity
                  </span>
                </div>

                {/* Materials List */}
                {currentEntry.handsOnExperiment.materials && currentEntry.handsOnExperiment.materials.length > 0 && (
                  <div className="bg-white/80 p-3.5 rounded-2xl border-2 border-emerald-200 space-y-1.5">
                    <div className="text-xs font-black uppercase tracking-wider text-emerald-950">
                      What You Need:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {currentEntry.handsOnExperiment.materials.map((item, mIdx) => (
                        <span key={mIdx} className="text-xs font-bold bg-white text-emerald-900 px-2.5 py-1 rounded-xl border border-emerald-300 shadow-2xs">
                          ✓ {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step-by-Step Instructions */}
                <div className="space-y-2">
                  <div className="text-xs font-black uppercase tracking-wider text-emerald-950">
                    Step-by-Step Steps:
                  </div>
                  <div className="space-y-2">
                    {currentEntry.handsOnExperiment.steps.map((step, sIdx) => (
                      <div key={sIdx} className="flex items-start space-x-3 p-3 bg-white rounded-xl border border-emerald-200">
                        <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                          {sIdx + 1}
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-emerald-950">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* The Science Behind It */}
                <div className="p-3 bg-emerald-100/70 rounded-xl border border-emerald-300 text-xs font-bold text-emerald-950">
                  <span className="font-black">Why This Works: </span>
                  <span>{currentEntry.handsOnExperiment.explanation}</span>
                </div>
              </div>
            )}

            {/* 8. Tongue Twister or Rhyme (When Available) */}
            {currentEntry.kidTongueTwisterOrRhyme && (
              <div className="bg-amber-50 rounded-[28px] p-5 border-4 border-amber-300 shadow-[0_4px_0_#d97706] space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-amber-900 font-black text-sm uppercase tracking-tight">
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    <span>Speedy Tongue Twister & Phonics Rhyme</span>
                  </div>
                  <button
                    onClick={() => speakText(currentEntry.kidTongueTwisterOrRhyme || '', settings.voiceGuidance)}
                    className="flex items-center space-x-1 px-2.5 py-1 bg-amber-200 hover:bg-amber-300 text-amber-950 font-black text-xs rounded-lg transition-all cursor-pointer"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>Say Fast</span>
                  </button>
                </div>
                <p className="text-sm sm:text-base font-extrabold text-amber-950 italic bg-white/70 p-3 rounded-xl border border-amber-200">
                  "{currentEntry.kidTongueTwisterOrRhyme}"
                </p>
              </div>
            )}

            {/* 9. Fun Facts Bullet Points */}
            <div className="space-y-3">
              <h2 className="text-lg font-black text-[#2D2D2D] uppercase tracking-tight flex items-center gap-2">
                <span>Fun Facts You Can Tell Your Friends</span>
                <span>🎉</span>
              </h2>
              <ul className="space-y-2">
                {currentEntry.funFacts.map((fact, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-sm text-[#2D2D2D] font-medium">
                    <span className="text-base text-[#6BCB77] font-black shrink-0">★</span>
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 10. Interactive Micro-Quiz ("Check Your Brain") */}
            <div className="bg-[#FFF9F0] rounded-[28px] p-6 border-4 border-[#FF6B6B] shadow-[0_6px_0_#C44E4E] space-y-4">
              <div className="flex items-center space-x-2 text-[#FF6B6B]">
                <HelpCircle className="w-5 h-5" />
                <h3 className="font-black text-base uppercase tracking-tight">Check Your Brain: Quick Question!</h3>
              </div>
              <p className="text-base font-black text-[#2D2D2D]">
                {currentEntry.microQuiz.question}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {currentEntry.microQuiz.options.map((opt, idx) => {
                  const isSelected = selectedQuizAnswer === idx;
                  const isCorrect = idx === currentEntry.microQuiz.correctIndex;

                  let btnStyle = 'bg-white border-2 border-gray-300 text-[#2D2D2D] hover:border-[#FF6B6B]';
                  if (showQuizResult) {
                    if (isCorrect) {
                      btnStyle = 'bg-[#6BCB77] text-white border-[#4E9B56] shadow-[0_3px_0_#4E9B56] font-black';
                    } else if (isSelected) {
                      btnStyle = 'bg-[#FF6B6B] text-white border-[#C44E4E] opacity-75';
                    } else {
                      btnStyle = 'bg-gray-100 text-gray-400 border-gray-200';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleQuizAnswer(idx)}
                      disabled={showQuizResult}
                      className={`p-3 rounded-2xl text-xs font-black text-left transition-all cursor-pointer flex items-center justify-between ${btnStyle}`}
                    >
                      <span>{opt}</span>
                      {showQuizResult && isCorrect && <CheckCircle2 className="w-4 h-4 text-white shrink-0" />}
                      {showQuizResult && isSelected && !isCorrect && <XCircle className="w-4 h-4 text-white shrink-0" />}
                    </button>
                  );
                })}
              </div>

              {showQuizResult && (
                <div className="p-3 bg-white rounded-xl border-2 border-[#FF6B6B]/40 text-xs font-bold text-[#2D2D2D] animate-fade-in">
                  💡 {currentEntry.microQuiz.explanation}
                </div>
              )}
            </div>

            {/* 9. See Also / Cross-Linked Terms (CDE Hyperlinking Pattern) */}
            {currentEntry.seeAlso && currentEntry.seeAlso.length > 0 && (
              <div className="border-t-4 border-gray-100 pt-6 space-y-3">
                <div className="text-xs font-black uppercase tracking-wider text-gray-400 flex items-center gap-1.5">
                  <Share2 className="w-4 h-4" />
                  <span>See Also / Related Concepts</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {currentEntry.seeAlso.map((rel, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        const target = ENCYCLOPEDIA_ENTRIES.find(e => e.id === rel.id);
                        if (target) {
                          setSelectedCategory(target.category);
                          handleSelectEntry(target);
                        }
                      }}
                      className="px-3.5 py-1.5 rounded-xl bg-[#FFF9F0] hover:bg-[#FFD93D] border-2 border-gray-200 hover:border-[#2D2D2D] font-black text-xs text-[#2D2D2D] transition-all cursor-pointer shadow-2xs"
                    >
                      {rel.title} →
                    </button>
                  ))}
                </div>
              </div>
            )}

          </article>
        </div>

      </div>

    </div>
  );
};
