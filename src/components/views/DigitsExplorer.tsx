import React, { useState, useEffect } from 'react';
import { DigitData, StudentProfile, ParentSettings } from '../../types';
import { DIGIT_DATA, CURRICULUM_TIER_DETAILS, AGE_TIER_INFO } from '../../data/curriculumData';
import { speakText, playSoundEffect } from '../../utils/sound';
import { Volume2, PenTool, CheckCircle, Sparkles, Hash, GraduationCap, HelpCircle } from 'lucide-react';

interface DigitsExplorerProps {
  student: StudentProfile;
  settings: ParentSettings;
  initialDigitValue?: number;
  onDigitChange?: (value: number) => void;
  onSelectDigitForTracing: (digit: DigitData) => void;
  onMarkDigitPracticed: (value: number) => void;
}

export const DigitsExplorer: React.FC<DigitsExplorerProps> = ({
  student,
  settings,
  initialDigitValue,
  onDigitChange,
  onSelectDigitForTracing,
  onMarkDigitPracticed
}) => {
  const [selectedDigit, setSelectedDigit] = useState<DigitData>(() => {
    if (initialDigitValue !== undefined) {
      const found = DIGIT_DATA.find(d => d.value === initialDigitValue);
      if (found) return found;
    }
    try {
      const saved = localStorage.getItem(`first_open_last_digit_${student.id}`);
      if (saved !== null) {
        const val = parseInt(saved, 10);
        const found = DIGIT_DATA.find(d => d.value === val);
        if (found) return found;
      }
    } catch {}
    // Curriculum milestone start: Grade 1-2 focuses on teen numbers 11-20
    const startIndex = (student.ageTier === 'grade-1-2' || student.ageTier === 'k12-foundations') ? 11 : 1;
    const unmastered = DIGIT_DATA.slice(startIndex).find(d => !student.progress[String(d.value)]?.mastered);
    if (unmastered) return unmastered;
    return DIGIT_DATA[startIndex] || DIGIT_DATA[1];
  });
  const [tappedCount, setTappedCount] = useState<number>(0);
  const [digitFilter, setDigitFilter] = useState<'all' | 'tier-recommended' | 'first-ten' | 'teens'>('all');
  const [showParentNote, setShowParentNote] = useState<boolean>(false);

  // Persist last viewed digit
  useEffect(() => {
    try {
      localStorage.setItem(`first_open_last_digit_${student.id}`, String(selectedDigit.value));
    } catch {}
  }, [selectedDigit, student.id]);

  const tierDetail = CURRICULUM_TIER_DETAILS[student.ageTier] || CURRICULUM_TIER_DETAILS['kindergarten'];
  const mathCurriculum = tierDetail.subjects.digits;

  // Sync when initialDigitValue changes from URL
  useEffect(() => {
    if (initialDigitValue !== undefined) {
      const found = DIGIT_DATA.find(d => d.value === initialDigitValue);
      if (found && found.value !== selectedDigit.value) {
        setSelectedDigit(found);
      }
    }
  }, [initialDigitValue]);

  const handlePlayDigitSound = (digit: DigitData) => {
    playSoundEffect('pop', settings.soundEffects);
    onMarkDigitPracticed(digit.value);
    setTappedCount(0);

    const textToSpeak = `Number ${digit.value}. ${digit.word}! ${digit.mathTip}`;
    speakText(textToSpeak, settings.voiceGuidance);
  };

  const handleTapCountItem = (index: number) => {
    const nextCount = index + 1;
    setTappedCount(nextCount);
    playSoundEffect('star', settings.soundEffects);
    speakText(`${nextCount}`, settings.voiceGuidance);

    if (nextCount === selectedDigit.value) {
      playSoundEffect('victory', settings.soundEffects);
      speakText(`Hooray! You counted all ${selectedDigit.value} ${selectedDigit.word}!`, settings.voiceGuidance);
    }
  };

  const isRecommendedForTier = (val: number) => {
    if (student.ageTier === 'pre-k') return val >= 0 && val <= 5;
    if (student.ageTier === 'kindergarten') return val >= 0 && val <= 10;
    if (student.ageTier === 'grade-1-2') return val >= 10 && val <= 20;
    return true;
  };

  const displayedDigits = DIGIT_DATA.filter(d => {
    if (digitFilter === 'tier-recommended') return isRecommendedForTier(d.value);
    if (digitFilter === 'first-ten') return d.value <= 10;
    if (digitFilter === 'teens') return d.value >= 11;
    return true;
  });

  return (
    <div className="space-y-6 pb-12">
      
      {/* CURRICULUM ALIGNMENT HEADER BANNER */}
      <div className="bg-gradient-to-r from-emerald-50 via-white to-teal-50 rounded-[28px] p-5 sm:p-6 border-3 border-[#2D2D2D] shadow-[0_5px_0_#000] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-1.5 max-w-2xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#6BCB77] text-white text-xs font-black uppercase tracking-wider">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Curriculum Tier: {tierDetail.gradeLabel}</span>
            </span>
            <span className="text-xs font-bold text-gray-500">
              100% Open Access &bull; Numbers 0 through 20 Available
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-[#2D2D2D] tracking-tight">
            Math Focus: {mathCurriculum.focusTitle} 🔢
          </h3>

          <p className="text-xs sm:text-sm font-semibold text-gray-700 leading-relaxed">
            {mathCurriculum.scopeSummary}
          </p>

          {showParentNote && (
            <div className="mt-2 p-3 bg-white rounded-xl border-2 border-emerald-200 text-xs text-emerald-950 font-medium leading-relaxed animate-in fade-in">
              <strong className="block font-black text-emerald-900 mb-1">Parent Explanation:</strong>
              {mathCurriculum.parentExplanation}
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row md:flex-col gap-2 shrink-0">
          <button
            onClick={() => {
              setShowParentNote(!showParentNote);
              playSoundEffect('click', settings.soundEffects);
            }}
            className="px-4 py-2 bg-white hover:bg-emerald-50 text-emerald-800 font-black text-xs uppercase tracking-wider rounded-xl border-2 border-emerald-300 shadow-xs cursor-pointer flex items-center justify-center gap-1.5"
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
        <div>
          <h2 className="text-2xl font-black text-slate-800 tracking-tight flex items-center gap-2">
            <span>🔢 Digits &amp; Counting (0 - 20)</span>
            <span className="text-xs px-2.5 py-1 bg-emerald-100 text-emerald-800 font-extrabold rounded-full">
              21 Numbers
            </span>
          </h2>
          <p className="text-xs text-slate-500 font-medium">
            Tap numbers to explore counting objects, subitizing, and tracing!
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5">
          <button
            onClick={() => {
              setDigitFilter('all');
              playSoundEffect('click', settings.soundEffects);
            }}
            className={`px-3 py-1.5 rounded-xl font-black text-xs transition-all cursor-pointer ${
              digitFilter === 'all'
                ? 'bg-[#2D2D2D] text-white shadow-xs'
                : 'bg-gray-100 text-gray-600 hover:text-black'
            }`}
          >
            All 21 Numbers (Open to All)
          </button>
          <button
            onClick={() => {
              setDigitFilter('tier-recommended');
              playSoundEffect('click', settings.soundEffects);
            }}
            className={`px-3 py-1.5 rounded-xl font-black text-xs transition-all cursor-pointer flex items-center gap-1 ${
              digitFilter === 'tier-recommended'
                ? 'bg-[#6BCB77] text-white shadow-xs'
                : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100'
            }`}
          >
            <span>⭐ Recommended for {tierDetail.name}</span>
          </button>
          <button
            onClick={() => {
              setDigitFilter('first-ten');
              playSoundEffect('click', settings.soundEffects);
            }}
            className={`px-3 py-1.5 rounded-xl font-black text-xs transition-all cursor-pointer ${
              digitFilter === 'first-ten'
                ? 'bg-sky-500 text-white shadow-xs'
                : 'bg-gray-100 text-gray-600 hover:text-black'
            }`}
          >
            0 - 10
          </button>
          <button
            onClick={() => {
              setDigitFilter('teens');
              playSoundEffect('click', settings.soundEffects);
            }}
            className={`px-3 py-1.5 rounded-xl font-black text-xs transition-all cursor-pointer ${
              digitFilter === 'teens'
                ? 'bg-purple-500 text-white shadow-xs'
                : 'bg-gray-100 text-gray-600 hover:text-black'
            }`}
          >
            11 - 20 (Teens)
          </button>
        </div>
      </div>

      {/* Active Featured Digit Card */}
      <div className="bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 rounded-3xl p-6 sm:p-8 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center space-x-6">
          <div 
            onClick={() => handlePlayDigitSound(selectedDigit)}
            className="w-28 h-28 sm:w-36 sm:h-36 rounded-3xl bg-white/20 backdrop-blur-md border-2 border-white/40 flex items-center justify-center text-6xl sm:text-7xl font-black cursor-pointer transform hover:scale-105 transition-transform shadow-inner"
          >
            {selectedDigit.value}
          </div>

          <div className="space-y-2">
            <div className="inline-flex items-center space-x-1 px-3 py-1 bg-white/20 rounded-full text-xs font-black uppercase text-yellow-200">
              <Hash className="w-3.5 h-3.5" />
              <span>Spelled: {selectedDigit.word}</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-black">
              Number {selectedDigit.value} ({selectedDigit.word})
            </h3>

            <p className="text-emerald-100 text-sm font-medium">
              💡 {selectedDigit.mathTip}
            </p>

            {isRecommendedForTier(selectedDigit.value) && (
              <span className="inline-block bg-yellow-400 text-slate-900 text-xs px-2.5 py-0.5 rounded-full font-black">
                ⭐ Core Target for {tierDetail.name}
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap sm:flex-col gap-3 w-full md:w-auto">
          <button
            onClick={() => handlePlayDigitSound(selectedDigit)}
            className="flex items-center justify-center space-x-2 px-6 py-3.5 bg-white text-emerald-600 font-extrabold text-sm rounded-2xl shadow-md hover:bg-emerald-50 transition-all active:scale-95 cursor-pointer"
          >
            <Volume2 className="w-5 h-5" />
            <span>Hear Number</span>
          </button>

          <a
            href={`/tracing/${selectedDigit.value}`}
            onClick={(e) => {
              if (!e.ctrlKey && !e.metaKey && !e.shiftKey && e.button === 0) {
                e.preventDefault();
                playSoundEffect('click', settings.soundEffects);
                onSelectDigitForTracing(selectedDigit);
              }
            }}
            className="flex items-center justify-center space-x-2 px-6 py-3.5 bg-yellow-400 text-slate-900 font-extrabold text-sm rounded-2xl shadow-md hover:bg-yellow-300 transition-all active:scale-95 no-underline cursor-pointer"
          >
            <PenTool className="w-5 h-5" />
            <span>Trace Digit {selectedDigit.value}</span>
          </a>
        </div>

      </div>

      {/* Interactive Subitizing Object Counter Box */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-black text-slate-800">
            Interactive Object Counting (Tap each to count!)
          </h3>
          <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Counted: {tappedCount} / {selectedDigit.value}
          </span>
        </div>

        <div className="flex flex-wrap gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-200 min-h-[100px] items-center justify-center">
          {selectedDigit.value === 0 ? (
            <p className="text-slate-400 font-bold text-sm italic">
              Zero means an empty set! Nothing to count here ⭕️
            </p>
          ) : (
            Array.from({ length: selectedDigit.value }).map((_, idx) => {
              const isTapped = idx < tappedCount;
              return (
                <button
                  key={idx}
                  onClick={() => handleTapCountItem(idx)}
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl transition-all transform hover:scale-110 active:scale-90 border cursor-pointer ${
                    isTapped
                      ? 'bg-emerald-100 border-emerald-400 scale-105 shadow-md ring-2 ring-emerald-400/40'
                      : 'bg-white border-slate-200 shadow-xs hover:border-slate-300'
                  }`}
                >
                  {selectedDigit.visualGroupEmoji}
                </button>
              );
            })
          )}
        </div>
      </div>

      {/* Digits 0 to 20 Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3">
        {displayedDigits.map((item) => {
          const isSelected = selectedDigit.value === item.value;
          const isMastered = student.progress[String(item.value)]?.mastered;
          const isCore = isRecommendedForTier(item.value);

          return (
            <a
              key={item.value}
              href={`/digits/${item.value}`}
              onClick={(e) => {
                if (!e.ctrlKey && !e.metaKey && !e.shiftKey && e.button === 0) {
                  e.preventDefault();
                  setSelectedDigit(item);
                  onDigitChange?.(item.value);
                  handlePlayDigitSound(item);
                }
              }}
              onMouseEnter={() => speakText(String(item.value), settings.voiceGuidance)}
              className={`relative p-4 rounded-3xl border text-center space-y-2 transition-all transform hover:-translate-y-1 active:scale-95 no-underline block ${
                isSelected
                  ? 'bg-emerald-500 text-white border-emerald-600 shadow-lg ring-4 ring-emerald-300/40 scale-105'
                  : 'bg-white hover:bg-emerald-50/60 border-slate-200 hover:border-emerald-300 text-slate-800'
              }`}
            >
              {/* Mastered Badge */}
              {isMastered && (
                <CheckCircle className={`absolute top-2 right-2 w-4 h-4 ${isSelected ? 'text-yellow-300' : 'text-emerald-500'}`} />
              )}

              {/* Recommended Star */}
              {isCore && !isMastered && (
                <span className="absolute top-2 left-2 text-[10px]" title={`Core Milestone for ${tierDetail.name}`}>
                  ⭐
                </span>
              )}

              <div className="text-4xl font-black">{item.value}</div>
              <div className="text-xl">{item.visualGroupEmoji}</div>
              <div className={`text-[11px] font-bold line-clamp-1 ${isSelected ? 'text-emerald-100' : 'text-slate-500'}`}>
                {item.word}
              </div>
            </a>
          );
        })}
      </div>

    </div>
  );
};
