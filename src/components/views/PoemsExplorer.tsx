import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Poem, PoemCategory, StudentProfile, ParentSettings } from '../../types';
import { POEMS_DATA, POEM_CATEGORIES, getPoemById } from '../../data/poemsData';
import { CURRICULUM_TIER_DETAILS } from '../../data/curriculumData';
import { speakText, playSoundEffect } from '../../utils/sound';
import {
  Sparkles,
  Search,
  Volume2,
  VolumeX,
  Printer,
  ChevronRight,
  ChevronLeft,
  BookOpen,
  Award,
  Smile,
  Mic,
  RotateCcw,
  CheckCircle2,
  Share2,
  ArrowRight,
  Filter,
  Play,
  Square,
  GraduationCap,
  HelpCircle
} from 'lucide-react';

interface PoemsExplorerProps {
  student: StudentProfile;
  settings: ParentSettings;
  initialPoemId?: string;
  initialCategory?: string;
  onPoemChange?: (poemId: string) => void;
  onCategoryChange?: (category: string) => void;
}

export const PoemsExplorer: React.FC<PoemsExplorerProps> = ({
  student,
  settings,
  initialPoemId,
  initialCategory,
  onPoemChange,
  onCategoryChange
}) => {
  const [showParentNote, setShowParentNote] = useState<boolean>(false);
  const tierDetail = CURRICULUM_TIER_DETAILS[student.ageTier] || CURRICULUM_TIER_DETAILS['kindergarten'];
  const poemsCurriculum = tierDetail.subjects.poems;
  // Selected category filter
  const [selectedCategory, setSelectedCategory] = useState<PoemCategory | 'all'>(() => {
    if (initialCategory) {
      const isValid = POEM_CATEGORIES.some(c => c.id === initialCategory);
      if (isValid) return initialCategory as PoemCategory;
    }
    return 'all';
  });

  // Selected poem
  const [selectedPoemId, setSelectedPoemId] = useState<string>(() => {
    if (initialPoemId) {
      const found = getPoemById(initialPoemId);
      if (found) return found.id;
    }
    return 'twinkle-twinkle-little-star';
  });

  // Search filter
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Age filter
  const [ageFilter, setAgeFilter] = useState<string>('all');

  // Recital mode: audio playback & active stanza index
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [activeStanzaIndex, setActiveStanzaIndex] = useState<number>(-1);
  const [reciteCompleted, setReciteCompleted] = useState<boolean>(false);
  const [reciteSpeed, setReciteSpeed] = useState<number>(0.95);
  const [practiceMode, setPracticeMode] = useState<boolean>(false);

  // Sync with initialPoemId from URL
  useEffect(() => {
    if (initialPoemId) {
      const found = getPoemById(initialPoemId);
      if (found && found.id !== selectedPoemId) {
        setSelectedPoemId(found.id);
        if (selectedCategory !== 'all' && found.category !== selectedCategory) {
          setSelectedCategory(found.category);
        }
      }
    }
  }, [initialPoemId]);

  // Sync with initialCategory from URL
  useEffect(() => {
    if (initialCategory) {
      const isValid = POEM_CATEGORIES.some(c => c.id === initialCategory);
      if (isValid && initialCategory !== selectedCategory) {
        setSelectedCategory(initialCategory as PoemCategory);
      }
    }
  }, [initialCategory]);

  // Current active poem
  const currentPoem: Poem = useMemo(() => {
    const found = getPoemById(selectedPoemId);
    return found || POEMS_DATA[0];
  }, [selectedPoemId]);

  // Current poem category object
  const currentCategoryInfo = useMemo(() => {
    return POEM_CATEGORIES.find(c => c.id === currentPoem.category) || POEM_CATEGORIES[0];
  }, [currentPoem]);

  // Filtered poems based on category, search, and age
  const filteredPoems = useMemo(() => {
    return POEMS_DATA.filter(poem => {
      const matchesCategory = selectedCategory === 'all' || poem.category === selectedCategory;
      
      const isRecommended = () => {
        if (!poem.ageTier || poem.ageTier === 'All Ages') return true;
        if (student.ageTier === 'pre-k') return poem.ageTier.includes('2-4') || poem.ageTier.includes('2–4');
        if (student.ageTier === 'kindergarten') return poem.ageTier.includes('4-6') || poem.ageTier.includes('3-5');
        return true;
      };

      const matchesAge = 
        ageFilter === 'all'
          ? true
          : ageFilter === 'tier-rec'
          ? isRecommended()
          : poem.ageTier === ageFilter || poem.ageTier === 'All Ages';

      if (!searchQuery.trim()) {
        return matchesCategory && matchesAge;
      }

      const q = searchQuery.toLowerCase();
      const matchesTitle = poem.title.toLowerCase().includes(q);
      const matchesPoet = poem.poet.toLowerCase().includes(q);
      const matchesTagline = poem.tagline.toLowerCase().includes(q);
      const matchesLines = poem.stanzas.some(stanza =>
        stanza.some(line => line.toLowerCase().includes(q))
      );
      const matchesVocab = poem.vocabulary.some(v => v.word.toLowerCase().includes(q));

      return matchesCategory && matchesAge && (matchesTitle || matchesPoet || matchesTagline || matchesLines || matchesVocab);
    });
  }, [selectedCategory, ageFilter, searchQuery]);

  // Reset audio playback whenever poem changes
  useEffect(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsPlayingAudio(false);
    setActiveStanzaIndex(-1);
    setReciteCompleted(false);
  }, [selectedPoemId]);

  // Handler for selecting poem
  const handleSelectPoem = (poem: Poem) => {
    setSelectedPoemId(poem.id);
    onPoemChange?.(poem.id);
    playSoundEffect('click', settings.soundEffects);
  };

  // Handler for category change
  const handleCategorySelect = (category: PoemCategory | 'all') => {
    setSelectedCategory(category);
    onCategoryChange?.(category);
    playSoundEffect('click', settings.soundEffects);
  };

  // Audio recitation playback
  const handlePlayRecitation = () => {
    if (!('speechSynthesis' in window)) {
      alert('Speech synthesis is not supported on this browser.');
      return;
    }

    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
      setActiveStanzaIndex(-1);
      return;
    }

    playSoundEffect('click', settings.soundEffects);
    setIsPlayingAudio(true);
    setActiveStanzaIndex(0);
    setReciteCompleted(false);

    // Speak title and author first, then stanzas with pauses
    const utterances: SpeechSynthesisUtterance[] = [];

    // Title intro
    const introUtterance = new SpeechSynthesisUtterance(`${currentPoem.title}. By ${currentPoem.poet}.`);
    introUtterance.rate = reciteSpeed;
    introUtterance.pitch = 1.05;
    utterances.push(introUtterance);

    // Stanzas
    currentPoem.stanzas.forEach((stanza, idx) => {
      const stanzaText = stanza.join(', ');
      const utterance = new SpeechSynthesisUtterance(stanzaText);
      utterance.rate = reciteSpeed;
      utterance.pitch = 1.05;

      utterance.onstart = () => {
        setActiveStanzaIndex(idx);
      };

      utterances.push(utterance);
    });

    // Final finish utterance
    const lastUtterance = utterances[utterances.length - 1];
    if (lastUtterance) {
      const originalOnEnd = lastUtterance.onend;
      lastUtterance.onend = (e) => {
        if (originalOnEnd) originalOnEnd.call(lastUtterance, e);
        setIsPlayingAudio(false);
        setActiveStanzaIndex(-1);
        setReciteCompleted(true);
        playSoundEffect('victory', settings.soundEffects);
      };
    }

    // Queue and speak
    utterances.forEach(u => window.speechSynthesis.speak(u));
  };

  // Speak single stanza on click
  const handleSpeakStanza = (stanzaLines: string[], stanzaIndex: number) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    setIsPlayingAudio(true);
    setActiveStanzaIndex(stanzaIndex);

    const utterance = new SpeechSynthesisUtterance(stanzaLines.join(', '));
    utterance.rate = reciteSpeed;
    utterance.pitch = 1.05;
    utterance.onend = () => {
      setIsPlayingAudio(false);
      setActiveStanzaIndex(-1);
    };
    window.speechSynthesis.speak(utterance);
  };

  // Speak vocabulary word
  const handleSpeakWord = (word: string, meaning: string) => {
    playSoundEffect('click', settings.soundEffects);
    speakText(`${word}. It means: ${meaning}`, true);
  };

  // Navigate to previous/next poem
  const currentIndex = POEMS_DATA.findIndex(p => p.id === currentPoem.id);
  const prevPoem = currentIndex > 0 ? POEMS_DATA[currentIndex - 1] : POEMS_DATA[POEMS_DATA.length - 1];
  const nextPoem = currentIndex < POEMS_DATA.length - 1 ? POEMS_DATA[currentIndex + 1] : POEMS_DATA[0];

  return (
    <div className="space-y-8 pb-16">
      
      {/* CURRICULUM ALIGNMENT HEADER BANNER */}
      <div className="bg-gradient-to-r from-purple-50 via-white to-pink-50 rounded-[28px] p-5 sm:p-6 border-3 border-[#2D2D2D] shadow-[0_5px_0_#000] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-1.5 max-w-2xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#8B5CF6] text-white text-xs font-black uppercase tracking-wider">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Curriculum Tier: {tierDetail.gradeLabel}</span>
            </span>
            <span className="text-xs font-bold text-gray-500">
              100% Open Access &bull; All {POEMS_DATA.length} Rhymes &amp; Verses Available
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-[#2D2D2D] tracking-tight">
            Poetry &amp; Speech Focus: {poemsCurriculum.focusTitle} 🎵
          </h3>

          <p className="text-xs sm:text-sm font-semibold text-gray-700 leading-relaxed">
            {poemsCurriculum.scopeSummary}
          </p>

          {showParentNote && (
            <div className="mt-2 p-3 bg-white rounded-xl border-2 border-purple-200 text-xs text-purple-950 font-medium leading-relaxed animate-in fade-in">
              <strong className="block font-black text-purple-900 mb-1">Parent Explanation:</strong>
              {poemsCurriculum.parentExplanation}
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row md:flex-col gap-2 shrink-0">
          <button
            onClick={() => {
              setShowParentNote(!showParentNote);
              playSoundEffect('click', settings.soundEffects);
            }}
            className="px-4 py-2 bg-white hover:bg-purple-50 text-purple-900 font-black text-xs uppercase tracking-wider rounded-xl border-2 border-purple-300 shadow-xs cursor-pointer flex items-center justify-center gap-1.5"
          >
            <HelpCircle className="w-4 h-4" />
            <span>{showParentNote ? 'Hide Parent Guide' : 'Why This Fits My Kid'}</span>
          </button>

          <a
            href="/curriculum"
            className="px-4 py-2 bg-[#FFD93D] hover:bg-yellow-400 text-[#2D2D2D] font-black text-xs uppercase tracking-wider rounded-xl border-2 border-[#2D2D2D] shadow-[0_3px_0_#000] active:translate-y-0.5 active:shadow-none transition-all flex items-center justify-center gap-1.5 no-underline"
          >
            <span>Full Curriculum Guide &rarr;</span>
          </a>
        </div>
      </div>

      {/* Top Banner / Hero */}
      <div className="bg-gradient-to-r from-[#8B5CF6] via-[#A78BFA] to-[#C4B5FD] rounded-[36px] p-6 sm:p-10 border-4 border-[#2D2D2D] shadow-[0_8px_0_#000] text-white space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-xs text-white text-xs font-black uppercase tracking-wider border border-white/30">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              <span>EASY ENGLISH &amp; WORLD POEMS &bull; {POEMS_DATA.length} VERSES</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Learn, Recite & Rhyme ⭐
            </h1>
            <p className="text-sm sm:text-base font-medium text-white/90 leading-relaxed">
              Timeless nursery rhymes, joyful animal verses, lullabies, and action poems! Practice clear speech, follow the musical rhythm, learn new vocabulary words, and recite with confidence!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handlePlayRecitation}
              className={`px-6 py-4 rounded-2xl font-black text-sm uppercase tracking-tight border-4 border-[#2D2D2D] shadow-[0_6px_0_#000] active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-2.5 cursor-pointer ${
                isPlayingAudio ? 'bg-[#FF6B6B] text-white hover:bg-red-600' : 'bg-[#FFD93D] text-[#2D2D2D] hover:bg-amber-300'
              }`}
            >
              {isPlayingAudio ? (
                <>
                  <Square className="w-5 h-5 fill-current" />
                  <span>STOP RECITAL</span>
                </>
              ) : (
                <>
                  <Play className="w-5 h-5 fill-current" />
                  <span>LISTEN TO POEM</span>
                </>
              )}
            </button>

            <button
              onClick={() => window.print()}
              className="px-5 py-4 rounded-2xl font-black text-sm uppercase tracking-tight bg-white text-[#2D2D2D] hover:bg-gray-100 border-4 border-[#2D2D2D] shadow-[0_6px_0_#000] active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer"
              title="Print Poem Recital Card"
            >
              <Printer className="w-5 h-5" />
              <span>PRINT CARD</span>
            </button>
          </div>
        </div>

        {/* Quick Category Tabs Ribbon */}
        <div className="flex items-center space-x-2 pt-2 overflow-x-auto scrollbar-none pb-1">
          <a
            href="/poems"
            onClick={(e) => {
              e.preventDefault();
              handleCategorySelect('all');
            }}
            className={`px-4 py-2 rounded-xl font-black text-xs uppercase tracking-tight border-2 transition-all cursor-pointer no-underline whitespace-nowrap ${
              selectedCategory === 'all'
                ? 'bg-white text-[#2D2D2D] border-white shadow-xs'
                : 'bg-black/15 text-white border-white/20 hover:bg-black/25'
            }`}
          >
            All {POEMS_DATA.length} Poems
          </a>
          {POEM_CATEGORIES.map((cat) => {
            const isCatActive = selectedCategory === cat.id;
            return (
              <a
                key={cat.id}
                href={`/poems/category/${cat.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleCategorySelect(cat.id);
                }}
                className={`px-4 py-2 rounded-xl font-black text-xs uppercase tracking-tight border-2 transition-all cursor-pointer no-underline whitespace-nowrap flex items-center gap-1.5 ${
                  isCatActive
                    ? 'bg-white text-[#2D2D2D] border-white shadow-xs'
                    : 'bg-black/15 text-white border-white/20 hover:bg-black/25'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </a>
            );
          })}
        </div>
      </div>

      {/* Main 2-Column Explorer: Left List (Catalog) & Right Content (Active Poem) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Search, Filters & Poem Cards List (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Search & Age Filter Box */}
          <div className="bg-white rounded-3xl p-4 border-4 border-[#2D2D2D] shadow-[0_6px_0_#000] space-y-3">
            <div className="relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search poems, rhymes, lines..."
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-[#FFF9F0] border-2 border-gray-200 font-bold text-sm text-[#2D2D2D] focus:outline-hidden focus:border-[#8B5CF6]"
              />
            </div>

            {/* Age Tier Selector */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 text-xs font-black">
              <span className="text-gray-500 uppercase">Age Level:</span>
              <div className="flex flex-wrap gap-1.5">
                {[
                  { id: 'all', label: 'All Ages (Open)' },
                  { id: 'tier-rec', label: `⭐ For ${tierDetail.name}` },
                  { id: 'Ages 2-4', label: '2-4 yrs' },
                  { id: 'Ages 4-6', label: '4-6 yrs' }
                ].map(tier => (
                  <button
                    key={tier.id}
                    onClick={() => setAgeFilter(tier.id)}
                    className={`px-2.5 py-1 rounded-lg border cursor-pointer font-extrabold ${
                      ageFilter === tier.id
                        ? 'bg-[#8B5CF6] text-white border-[#8B5CF6]'
                        : 'bg-gray-100 text-gray-600 border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    {tier.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Poem List */}
          <div className="space-y-3 max-h-[750px] overflow-y-auto pr-1">
            {filteredPoems.length === 0 ? (
              <div className="p-8 text-center bg-white rounded-3xl border-4 border-dashed border-gray-300 text-gray-500">
                <Smile className="w-10 h-10 mx-auto mb-2 text-gray-400" />
                <p className="font-bold">No poems found matching your filter.</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                    setAgeFilter('all');
                  }}
                  className="mt-3 px-4 py-2 bg-[#8B5CF6] text-white rounded-xl font-black text-xs uppercase"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              filteredPoems.map((poem) => {
                const isSelected = poem.id === currentPoem.id;
                return (
                  <a
                    key={poem.id}
                    href={`/poems/${poem.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSelectPoem(poem);
                    }}
                    className={`p-4 rounded-2xl border-4 transition-all block no-underline text-left cursor-pointer group ${
                      isSelected
                        ? 'bg-[#FFF9F0] border-[#8B5CF6] shadow-[0_4px_0_#6D28D9] scale-101'
                        : 'bg-white border-gray-200 hover:border-[#8B5CF6] shadow-xs hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-2xl bg-[#FFF9F0] border-2 border-gray-200 flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform">
                          {poem.emoji}
                        </div>
                        <div>
                          <h4 className="font-black text-base text-[#2D2D2D] leading-tight group-hover:text-[#8B5CF6]">
                            {poem.title}
                          </h4>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs font-bold text-gray-500">{poem.poet}</span>
                            <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-purple-100 text-purple-700">
                              {poem.ageTier}
                            </span>
                          </div>
                        </div>
                      </div>

                      <span className="text-xs font-extrabold text-[#8B5CF6] uppercase tracking-wider shrink-0 mt-1">
                        Rhyme {poem.rhymeScheme}
                      </span>
                    </div>

                    <p className="text-xs font-medium text-gray-600 line-clamp-2 mt-2 leading-relaxed">
                      {poem.tagline}
                    </p>
                  </a>
                );
              })
            )}
          </div>
        </div>

        {/* Right Column: Active Poem Card & Recitation Studio (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          <div className="bg-white rounded-[36px] p-6 sm:p-8 border-4 border-[#2D2D2D] shadow-[0_8px_0_#000] space-y-6">
            
            {/* Header of Active Poem */}
            <div className="flex flex-wrap items-start justify-between gap-4 pb-4 border-b-2 border-gray-100">
              <div className="space-y-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider border ${currentCategoryInfo.badgeBg}`}>
                    {currentCategoryInfo.icon} {currentCategoryInfo.label}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-black bg-blue-100 text-blue-800 border border-blue-300">
                    {currentPoem.ageTier}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-black bg-amber-100 text-amber-800 border border-amber-300">
                    Rhyme: {currentPoem.rhymeScheme}
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-black text-[#2D2D2D] tracking-tight flex items-center gap-3">
                  <span>{currentPoem.emoji}</span>
                  <span>{currentPoem.title}</span>
                </h2>

                <p className="text-sm font-bold text-gray-500">
                  Written by <span className="text-[#8B5CF6]">{currentPoem.poet}</span>
                </p>
              </div>

              {/* Prev / Next Quick Nav */}
              <div className="flex items-center gap-1.5 self-center">
                <a
                  href={`/poems/${prevPoem.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSelectPoem(prevPoem);
                  }}
                  className="p-2.5 rounded-xl bg-[#FFF9F0] border-2 border-gray-300 hover:border-[#8B5CF6] text-[#2D2D2D] no-underline cursor-pointer"
                  title={`Previous: ${prevPoem.title}`}
                >
                  <ChevronLeft className="w-5 h-5" />
                </a>
                <a
                  href={`/poems/${nextPoem.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSelectPoem(nextPoem);
                  }}
                  className="p-2.5 rounded-xl bg-[#FFF9F0] border-2 border-gray-300 hover:border-[#8B5CF6] text-[#2D2D2D] no-underline cursor-pointer"
                  title={`Next: ${nextPoem.title}`}
                >
                  <ChevronRight className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Tagline Summary */}
            <p className="text-base font-semibold text-gray-700 leading-relaxed bg-[#FFF9F0] p-4 rounded-2xl border-2 border-[#FFD93D]">
              💡 {currentPoem.tagline}
            </p>

            {/* Recitation Audio Control Bar */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-50 to-indigo-50 border-2 border-purple-200 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-3">
                <button
                  onClick={handlePlayRecitation}
                  className={`w-12 h-12 rounded-xl flex items-center justify-center font-black text-white shadow-xs cursor-pointer transition-transform active:scale-95 ${
                    isPlayingAudio ? 'bg-[#FF6B6B]' : 'bg-[#8B5CF6]'
                  }`}
                  title={isPlayingAudio ? 'Pause / Stop' : 'Play Audio Recital'}
                >
                  {isPlayingAudio ? <Square className="w-5 h-5 fill-current" /> : <Play className="w-6 h-6 fill-current ml-0.5" />}
                </button>
                <div>
                  <h4 className="font-black text-sm text-[#2D2D2D]">
                    {isPlayingAudio ? 'Reading Aloud...' : 'Read Aloud Audio'}
                  </h4>
                  <p className="text-xs text-gray-500 font-bold">
                    {isPlayingAudio ? `Reciting Stanza ${activeStanzaIndex + 1}` : 'Tap lines or press Play to hear rhythm'}
                  </p>
                </div>
              </div>

              {/* Speed Controls */}
              <div className="flex items-center space-x-1.5 text-xs font-black">
                <span className="text-gray-500 mr-1">Speed:</span>
                {[
                  { rate: 0.85, label: 'Slow' },
                  { rate: 0.95, label: 'Normal' },
                  { rate: 1.1, label: 'Brisk' }
                ].map(s => (
                  <button
                    key={s.label}
                    onClick={() => {
                      setReciteSpeed(s.rate);
                      playSoundEffect('click', settings.soundEffects);
                    }}
                    className={`px-2.5 py-1 rounded-lg border cursor-pointer ${
                      reciteSpeed === s.rate
                        ? 'bg-[#8B5CF6] text-white border-[#8B5CF6]'
                        : 'bg-white text-gray-600 border-gray-300 hover:border-gray-500'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Poem Stanzas Canvas */}
            <div className="space-y-6 my-6">
              {currentPoem.stanzas.map((stanza, sIdx) => {
                const isActive = activeStanzaIndex === sIdx;
                return (
                  <div
                    key={sIdx}
                    onClick={() => handleSpeakStanza(stanza, sIdx)}
                    className={`p-6 rounded-3xl border-4 transition-all cursor-pointer relative group ${
                      isActive
                        ? 'bg-[#FFF9F0] border-[#8B5CF6] shadow-[0_6px_0_#6D28D9] scale-102'
                        : 'bg-gray-50/70 hover:bg-[#FFF9F0] border-gray-200 hover:border-[#8B5CF6]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3 text-xs font-black">
                      <span className={`px-2.5 py-0.5 rounded-full uppercase ${isActive ? 'bg-[#8B5CF6] text-white' : 'bg-gray-200 text-gray-600'}`}>
                        Stanza {sIdx + 1}
                      </span>
                      <span className="text-gray-400 group-hover:text-[#8B5CF6] flex items-center gap-1 font-bold">
                        <Volume2 className="w-3.5 h-3.5" /> Tap to hear stanza
                      </span>
                    </div>

                    <div className="space-y-2 text-xl sm:text-2xl font-black text-[#2D2D2D] font-serif leading-relaxed tracking-wide">
                      {stanza.map((line, lIdx) => (
                        <p key={lIdx} className="m-0 hover:text-[#8B5CF6] transition-colors">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Recite Completed Celebration */}
            {reciteCompleted && (
              <div className="p-5 rounded-2xl bg-emerald-50 border-2 border-emerald-300 text-emerald-800 flex items-center gap-3 animate-fade-in">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 shrink-0" />
                <div>
                  <div className="font-black text-base">Hooray! Great recitation! ⭐</div>
                  <div className="text-xs font-bold text-emerald-700">
                    You listened to the full poem. Now try reciting it line-by-line using your own voice!
                  </div>
                </div>
              </div>
            )}

            {/* Vocabulary & Rhyme Words */}
            {currentPoem.vocabulary.length > 0 && (
              <div className="space-y-3 pt-4 border-t-2 border-gray-100">
                <div className="flex items-center space-x-2">
                  <BookOpen className="w-5 h-5 text-[#8B5CF6]" />
                  <h3 className="text-lg font-black text-[#2D2D2D] uppercase tracking-tight">
                    Poem Vocabulary Words (Tap to Pronounce)
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentPoem.vocabulary.map((vocab) => (
                    <button
                      key={vocab.word}
                      onClick={() => handleSpeakWord(vocab.word, vocab.meaning)}
                      className="p-3.5 rounded-2xl bg-[#FFF9F0] border-2 border-amber-200 hover:border-[#8B5CF6] text-left transition-all cursor-pointer group active:scale-98"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center space-x-2">
                          <span className="text-xl">{vocab.emoji}</span>
                          <span className="font-black text-base text-[#2D2D2D] group-hover:text-[#8B5CF6]">
                            {vocab.word}
                          </span>
                        </div>
                        <Volume2 className="w-4 h-4 text-gray-400 group-hover:text-[#8B5CF6]" />
                      </div>
                      <p className="text-xs font-medium text-gray-600 leading-snug">
                        {vocab.meaning}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Recital Tips & Performance Gestures */}
            <div className="p-5 rounded-3xl bg-[#FFF9F0] border-4 border-[#FFD93D] shadow-[0_6px_0_#C9A92E] space-y-3">
              <div className="flex items-center space-x-2">
                <Smile className="w-6 h-6 text-[#EA580C]" />
                <h3 className="text-lg font-black text-[#2D2D2D] uppercase tracking-tight">
                  How to Recite with Expression 🌟
                </h3>
              </div>

              <ul className="space-y-2 text-sm font-semibold text-gray-700 pl-5 list-disc leading-relaxed">
                {currentPoem.recitalTips.map((tip, idx) => (
                  <li key={idx}>{tip}</li>
                ))}
              </ul>

              <div className="pt-2 border-t border-amber-200 text-xs font-extrabold text-[#2D2D2D]">
                🎯 Educational Takeaway: <span className="font-bold text-gray-600">{currentPoem.educationalTakeaway}</span>
              </div>
            </div>

            {/* Recite Myself Practice Area */}
            <div className="p-5 rounded-3xl bg-purple-50 border-2 border-purple-200 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Mic className="w-5 h-5 text-[#8B5CF6]" />
                  <h4 className="font-black text-base text-[#2D2D2D]">Recite with Your Own Voice</h4>
                </div>
                <button
                  onClick={() => setPracticeMode(!practiceMode)}
                  className="px-3 py-1 rounded-xl text-xs font-black bg-[#8B5CF6] text-white hover:bg-purple-700 cursor-pointer"
                >
                  {practiceMode ? 'Close Studio' : 'Open Recital Studio'}
                </button>
              </div>

              {practiceMode && (
                <div className="p-4 rounded-2xl bg-white border border-purple-200 text-center space-y-3">
                  <p className="text-sm font-bold text-gray-700">
                    Stand up straight, smile warmly, look at your family or class, and recite each line loud and proud!
                  </p>
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => {
                        playSoundEffect('cheer', settings.soundEffects);
                        setReciteCompleted(true);
                      }}
                      className="px-4 py-2 bg-[#6BCB77] text-white rounded-xl font-black text-xs uppercase shadow-xs cursor-pointer hover:bg-emerald-600"
                    >
                      👏 I Finished My Recital!
                    </button>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};
