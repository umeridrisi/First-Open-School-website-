import React, { useState, useEffect } from 'react';
import { LetterData, StudentProfile, ParentSettings } from '../../types';
import { ALPHABET_DATA, CURRICULUM_TIER_DETAILS, AGE_TIER_INFO } from '../../data/curriculumData';
import { speakText, playSoundEffect } from '../../utils/sound';
import { Volume2, PenTool, CheckCircle, Sparkles, GraduationCap, Info, HelpCircle } from 'lucide-react';

interface AlphabetsExplorerProps {
  student: StudentProfile;
  settings: ParentSettings;
  initialLetterChar?: string;
  onLetterChange?: (char: string) => void;
  onSelectLetterForTracing: (letter: LetterData) => void;
  onMarkLetterPracticed: (char: string) => void;
}

export const AlphabetsExplorer: React.FC<AlphabetsExplorerProps> = ({
  student,
  settings,
  initialLetterChar,
  onLetterChange,
  onSelectLetterForTracing,
  onMarkLetterPracticed
}) => {
  const [selectedLetter, setSelectedLetter] = useState<LetterData>(() => {
    if (initialLetterChar) {
      const found = ALPHABET_DATA.find(a => a.char.toUpperCase() === initialLetterChar.toUpperCase());
      if (found) return found;
    }
    try {
      const saved = localStorage.getItem(`first_open_last_letter_${student.id}`);
      if (saved) {
        const found = ALPHABET_DATA.find(a => a.char === saved);
        if (found) return found;
      }
    } catch {}
    // Resume at next unmastered letter based on progress
    const unmastered = ALPHABET_DATA.find(a => !student.progress[a.char]?.mastered);
    if (unmastered) return unmastered;
    return ALPHABET_DATA[0];
  });
  const [showCase, setShowCase] = useState<'uppercase' | 'lowercase' | 'both'>('both');
  const [letterFilter, setLetterFilter] = useState<'all' | 'tier-recommended' | 'vowels' | 'consonants'>('all');
  const [showParentNote, setShowParentNote] = useState<boolean>(false);

  // Persist last viewed letter
  useEffect(() => {
    try {
      localStorage.setItem(`first_open_last_letter_${student.id}`, selectedLetter.char);
    } catch {}
  }, [selectedLetter, student.id]);

  const tierDetail = CURRICULUM_TIER_DETAILS[student.ageTier] || CURRICULUM_TIER_DETAILS['kindergarten'];
  const alphabetCurriculum = tierDetail.subjects.alphabets;

  // Sync when initialLetterChar changes from URL
  useEffect(() => {
    if (initialLetterChar) {
      const found = ALPHABET_DATA.find(a => a.char.toUpperCase() === initialLetterChar.toUpperCase());
      if (found && found.char !== selectedLetter.char) {
        setSelectedLetter(found);
      }
    }
  }, [initialLetterChar]);

  const handlePlayLetterSound = (letter: LetterData) => {
    playSoundEffect('pop', settings.soundEffects);
    onMarkLetterPracticed(letter.char);
    
    // Voice guidance: "A, A is for Apple. Phonics sound: Ah"
    const textToSpeak = `${letter.char}. ${letter.char} is for ${letter.exampleWord}. Sound: ${letter.phonicsSound}`;
    speakText(textToSpeak, settings.voiceGuidance);
  };

  // Determine if a letter is especially recommended for current tier
  const isRecommendedForTier = (char: string) => {
    if (student.ageTier === 'pre-k') {
      return ['A', 'B', 'C', 'D', 'E', 'O', 'M', 'P', 'S', 'T'].includes(char);
    }
    if (student.ageTier === 'kindergarten') {
      return true; // Kindergarten covers all 26
    }
    if (student.ageTier === 'grade-1-2') {
      return ['A', 'E', 'I', 'O', 'U', 'C', 'G', 'K', 'Q', 'W', 'X', 'Y', 'Z'].includes(char);
    }
    return true;
  };

  const displayedLetters = ALPHABET_DATA.filter(l => {
    if (letterFilter === 'tier-recommended') return isRecommendedForTier(l.char);
    if (letterFilter === 'vowels') return l.category === 'vowel';
    if (letterFilter === 'consonants') return l.category === 'consonant';
    return true;
  });

  return (
    <div className="space-y-6 pb-12">
      
      {/* CURRICULUM ALIGNMENT HEADER BANNER */}
      <div className="bg-gradient-to-r from-rose-50 via-white to-amber-50 rounded-[28px] p-5 sm:p-6 border-3 border-[#2D2D2D] shadow-[0_5px_0_#000] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-1.5 max-w-2xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#FF6B6B] text-white text-xs font-black uppercase tracking-wider">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Curriculum Tier: {tierDetail.gradeLabel}</span>
            </span>
            <span className="text-xs font-bold text-gray-500">
              100% Open Access &bull; Every Letter Available
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-[#2D2D2D] tracking-tight">
            Phonics Focus: {alphabetCurriculum.focusTitle} 🔤
          </h3>

          <p className="text-xs sm:text-sm font-semibold text-gray-700 leading-relaxed">
            {alphabetCurriculum.scopeSummary}
          </p>

          {showParentNote && (
            <div className="mt-2 p-3 bg-white rounded-xl border-2 border-rose-200 text-xs text-rose-950 font-medium leading-relaxed animate-in fade-in">
              <strong className="block font-black text-rose-900 mb-1">Parent Explanation:</strong>
              {alphabetCurriculum.parentExplanation}
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row md:flex-col gap-2 shrink-0">
          <button
            onClick={() => {
              setShowParentNote(!showParentNote);
              playSoundEffect('click', settings.soundEffects);
            }}
            className="px-4 py-2 bg-white hover:bg-rose-50 text-rose-700 font-black text-xs uppercase tracking-wider rounded-xl border-2 border-rose-300 shadow-xs cursor-pointer flex items-center justify-center gap-1.5"
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

      {/* Header & Filter Controls */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 bg-white p-5 rounded-3xl border border-slate-200 shadow-sm">
        
        {/* Curriculum Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-xs font-black text-gray-400 uppercase tracking-wider mr-1">
            Filter:
          </span>
          <button
            onClick={() => {
              setLetterFilter('all');
              playSoundEffect('click', settings.soundEffects);
            }}
            className={`px-3 py-1.5 rounded-xl font-black text-xs transition-all cursor-pointer ${
              letterFilter === 'all'
                ? 'bg-[#2D2D2D] text-white shadow-xs'
                : 'bg-gray-100 text-gray-600 hover:text-black'
            }`}
          >
            All 26 Letters (Open to All)
          </button>
          <button
            onClick={() => {
              setLetterFilter('tier-recommended');
              playSoundEffect('click', settings.soundEffects);
            }}
            className={`px-3 py-1.5 rounded-xl font-black text-xs transition-all cursor-pointer flex items-center gap-1 ${
              letterFilter === 'tier-recommended'
                ? 'bg-[#FF6B6B] text-white shadow-xs'
                : 'bg-rose-50 text-rose-700 hover:bg-rose-100'
            }`}
          >
            <span>⭐ Recommended for {tierDetail.name}</span>
          </button>
          <button
            onClick={() => {
              setLetterFilter('vowels');
              playSoundEffect('click', settings.soundEffects);
            }}
            className={`px-3 py-1.5 rounded-xl font-black text-xs transition-all cursor-pointer ${
              letterFilter === 'vowels'
                ? 'bg-amber-400 text-black shadow-xs'
                : 'bg-gray-100 text-gray-600 hover:text-black'
            }`}
          >
            Vowels (5)
          </button>
          <button
            onClick={() => {
              setLetterFilter('consonants');
              playSoundEffect('click', settings.soundEffects);
            }}
            className={`px-3 py-1.5 rounded-xl font-black text-xs transition-all cursor-pointer ${
              letterFilter === 'consonants'
                ? 'bg-sky-500 text-white shadow-xs'
                : 'bg-gray-100 text-gray-600 hover:text-black'
            }`}
          >
            Consonants (21)
          </button>
        </div>

        {/* Case Toggle Buttons */}
        <div className="flex items-center bg-slate-100 p-1 rounded-2xl border border-slate-200 shrink-0">
          <button
            onClick={() => {
              setShowCase('uppercase');
              playSoundEffect('click', settings.soundEffects);
            }}
            className={`px-3 py-1.5 rounded-xl font-extrabold text-xs transition-all cursor-pointer ${
              showCase === 'uppercase' ? 'bg-white text-slate-800 shadow-xs' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            UPPER (A)
          </button>
          <button
            onClick={() => {
              setShowCase('lowercase');
              playSoundEffect('click', settings.soundEffects);
            }}
            className={`px-3 py-1.5 rounded-xl font-extrabold text-xs transition-all cursor-pointer ${
              showCase === 'lowercase' ? 'bg-white text-slate-800 shadow-xs' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            lower (a)
          </button>
          <button
            onClick={() => {
              setShowCase('both');
              playSoundEffect('click', settings.soundEffects);
            }}
            className={`px-3 py-1.5 rounded-xl font-extrabold text-xs transition-all cursor-pointer ${
              showCase === 'both' ? 'bg-white text-slate-800 shadow-xs' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Both (Aa)
          </button>
        </div>
      </div>

      {/* Featured Active Letter Focus Card */}
      <div className="bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 rounded-3xl p-6 sm:p-8 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center space-x-6">
          <div 
            onClick={() => handlePlayLetterSound(selectedLetter)}
            className="w-28 h-28 sm:w-36 sm:h-36 rounded-3xl bg-white/20 backdrop-blur-md border-2 border-white/40 flex items-center justify-center text-6xl sm:text-7xl font-black cursor-pointer transform hover:scale-105 transition-transform shadow-inner"
          >
            {showCase === 'uppercase' && selectedLetter.char}
            {showCase === 'lowercase' && selectedLetter.lowercase}
            {showCase === 'both' && `${selectedLetter.char}${selectedLetter.lowercase}`}
          </div>

          <div className="space-y-2">
            <div className="inline-flex items-center space-x-1 px-3 py-1 bg-white/20 rounded-full text-xs font-black uppercase text-yellow-200">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Phonics Sound: {selectedLetter.phonicsSound}</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-black">
              {selectedLetter.char} is for {selectedLetter.exampleWord} {selectedLetter.emoji}
            </h3>

            <div className="flex items-center gap-2 text-rose-100 text-sm font-medium">
              <span>Category: <strong className="capitalize">{selectedLetter.category}</strong></span>
              {isRecommendedForTier(selectedLetter.char) && (
                <span className="bg-yellow-400 text-slate-900 text-xs px-2 py-0.5 rounded-full font-black">
                  ⭐ Core for {tierDetail.name}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap sm:flex-col gap-3 w-full md:w-auto">
          <button
            onClick={() => handlePlayLetterSound(selectedLetter)}
            className="flex items-center justify-center space-x-2 px-6 py-3.5 bg-white text-rose-600 font-extrabold text-sm rounded-2xl shadow-md hover:bg-rose-50 transition-all active:scale-95 cursor-pointer"
          >
            <Volume2 className="w-5 h-5" />
            <span>Hear Sound</span>
          </button>

          <a
            href={`/tracing/${selectedLetter.char}`}
            onClick={(e) => {
              if (!e.ctrlKey && !e.metaKey && !e.shiftKey && e.button === 0) {
                e.preventDefault();
                playSoundEffect('click', settings.soundEffects);
                onSelectLetterForTracing(selectedLetter);
              }
            }}
            className="flex items-center justify-center space-x-2 px-6 py-3.5 bg-yellow-400 text-slate-900 font-extrabold text-sm rounded-2xl shadow-md hover:bg-yellow-300 transition-all active:scale-95 no-underline cursor-pointer"
          >
            <PenTool className="w-5 h-5" />
            <span>Trace Letter {selectedLetter.char}</span>
          </a>
        </div>

      </div>

      {/* 26 Alphabet Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-3">
        {displayedLetters.map((item) => {
          const isSelected = selectedLetter.char === item.char;
          const isMastered = student.progress[item.char]?.mastered;
          const isCoreTier = isRecommendedForTier(item.char);

          return (
            <a
              key={item.char}
              href={`/alphabets/${item.char.toLowerCase()}`}
              onClick={(e) => {
                if (!e.ctrlKey && !e.metaKey && !e.shiftKey && e.button === 0) {
                  e.preventDefault();
                  setSelectedLetter(item);
                  onLetterChange?.(item.char.toLowerCase());
                  handlePlayLetterSound(item);
                }
              }}
              onMouseEnter={() => speakText(item.char, settings.voiceGuidance)}
              className={`relative p-4 rounded-3xl border text-center space-y-2 transition-all transform hover:-translate-y-1 active:scale-95 no-underline block ${
                isSelected
                  ? 'bg-rose-500 text-white border-rose-600 shadow-lg ring-4 ring-rose-300/40 scale-105'
                  : 'bg-white hover:bg-rose-50/60 border-slate-200 hover:border-rose-300 text-slate-800'
              }`}
            >
              {/* Mastered Badge */}
              {isMastered && (
                <CheckCircle className={`absolute top-2 right-2 w-4 h-4 ${isSelected ? 'text-yellow-300' : 'text-emerald-500'}`} />
              )}

              {/* Recommended Star Pill */}
              {isCoreTier && !isMastered && (
                <span className="absolute top-2 left-2 text-[10px]" title={`Core Milestone for ${tierDetail.name}`}>
                  ⭐
                </span>
              )}

              <div className="text-3xl font-black">
                {showCase === 'uppercase' && item.char}
                {showCase === 'lowercase' && item.lowercase}
                {showCase === 'both' && item.char}
              </div>

              <div className="text-xl">{item.emoji}</div>

              <div className={`text-[11px] font-bold line-clamp-1 ${isSelected ? 'text-rose-100' : 'text-slate-500'}`}>
                {item.exampleWord}
              </div>
            </a>
          );
        })}
      </div>

    </div>
  );
};
