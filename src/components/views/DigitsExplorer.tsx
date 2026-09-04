import React, { useState, useEffect } from 'react';
import { DigitData, StudentProfile, ParentSettings } from '../../types';
import { DIGIT_DATA } from '../../data/curriculumData';
import { speakText, playSoundEffect } from '../../utils/sound';
import { Volume2, PenTool, CheckCircle, Sparkles, Hash } from 'lucide-react';

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
    return DIGIT_DATA[1]; // Default to 1
  });
  const [tappedCount, setTappedCount] = useState<number>(0);

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

  return (
    <div className="space-y-6 pb-12">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
        <div>
          <h2 className="text-2xl font-black text-slate-800 tracking-tight flex items-center gap-2">
            <span>🔢 Digits & Counting (0 - 20)</span>
            <span className="text-xs px-2.5 py-1 bg-emerald-100 text-emerald-800 font-extrabold rounded-full">
              21 Numbers
            </span>
          </h2>
          <p className="text-xs text-slate-500 font-medium">
            Tap numbers to explore counting objects, subitizing, and tracing!
          </p>
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
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap sm:flex-col gap-3 w-full md:w-auto">
          <button
            onClick={() => handlePlayDigitSound(selectedDigit)}
            className="flex items-center justify-center space-x-2 px-6 py-3.5 bg-white text-emerald-600 font-extrabold text-sm rounded-2xl shadow-md hover:bg-emerald-50 transition-all active:scale-95"
          >
            <Volume2 className="w-5 h-5" />
            <span>Hear Number</span>
          </button>

          <button
            onClick={() => {
              playSoundEffect('click', settings.soundEffects);
              onSelectDigitForTracing(selectedDigit);
            }}
            className="flex items-center justify-center space-x-2 px-6 py-3.5 bg-yellow-400 text-slate-900 font-extrabold text-sm rounded-2xl shadow-md hover:bg-yellow-300 transition-all active:scale-95"
          >
            <PenTool className="w-5 h-5" />
            <span>Trace Digit {selectedDigit.value}</span>
          </button>
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
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl transition-all transform hover:scale-110 active:scale-90 border ${
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
        {DIGIT_DATA.map((item) => {
          const isSelected = selectedDigit.value === item.value;
          const isMastered = student.progress[String(item.value)]?.mastered;

          return (
            <button
              key={item.value}
              onClick={() => {
                setSelectedDigit(item);
                onDigitChange?.(item.value);
                handlePlayDigitSound(item);
              }}
              onMouseEnter={() => speakText(String(item.value), settings.voiceGuidance)}
              className={`relative p-4 rounded-3xl border text-center space-y-2 transition-all transform hover:-translate-y-1 active:scale-95 ${
                isSelected
                  ? 'bg-emerald-500 text-white border-emerald-600 shadow-lg ring-4 ring-emerald-300/40 scale-105'
                  : 'bg-white hover:bg-emerald-50/60 border-slate-200 hover:border-emerald-300 text-slate-800'
              }`}
            >
              {/* Mastered Badge */}
              {isMastered && (
                <CheckCircle className={`absolute top-2 right-2 w-4 h-4 ${isSelected ? 'text-yellow-300' : 'text-emerald-500'}`} />
              )}

              <div className="text-4xl font-black">{item.value}</div>
              <div className="text-xl">{item.visualGroupEmoji}</div>
              <div className={`text-[11px] font-bold line-clamp-1 ${isSelected ? 'text-emerald-100' : 'text-slate-500'}`}>
                {item.word}
              </div>
            </button>
          );
        })}
      </div>

    </div>
  );
};
