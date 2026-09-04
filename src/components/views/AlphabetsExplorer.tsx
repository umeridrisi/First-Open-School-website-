import React, { useState, useEffect } from 'react';
import { LetterData, StudentProfile, ParentSettings } from '../../types';
import { ALPHABET_DATA } from '../../data/curriculumData';
import { speakText, playSoundEffect } from '../../utils/sound';
import { Volume2, PenTool, CheckCircle, Sparkles } from 'lucide-react';

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
    return ALPHABET_DATA[0];
  });
  const [showCase, setShowCase] = useState<'uppercase' | 'lowercase' | 'both'>('both');

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

  return (
    <div className="space-y-6 pb-12">
      
      {/* Header & Filter Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
        <div>
          <h2 className="text-2xl font-black text-slate-800 tracking-tight flex items-center gap-2">
            <span>🔤 Alphabets & Phonics</span>
            <span className="text-xs px-2.5 py-1 bg-rose-100 text-rose-800 font-extrabold rounded-full">
              26 Letters
            </span>
          </h2>
          <p className="text-xs text-slate-500 font-medium">
            Tap any letter to hear phonics sounds, example words, and practice tracing!
          </p>
        </div>

        {/* Case Toggle Buttons */}
        <div className="flex items-center bg-slate-100 p-1 rounded-2xl border border-slate-200">
          <button
            onClick={() => {
              setShowCase('uppercase');
              playSoundEffect('click', settings.soundEffects);
            }}
            className={`px-3 py-1.5 rounded-xl font-extrabold text-xs transition-all ${
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
            className={`px-3 py-1.5 rounded-xl font-extrabold text-xs transition-all ${
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
            className={`px-3 py-1.5 rounded-xl font-extrabold text-xs transition-all ${
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

            <p className="text-rose-100 text-sm font-medium">
              Category: <span className="font-bold capitalize">{selectedLetter.category}</span>
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap sm:flex-col gap-3 w-full md:w-auto">
          <button
            onClick={() => handlePlayLetterSound(selectedLetter)}
            className="flex items-center justify-center space-x-2 px-6 py-3.5 bg-white text-rose-600 font-extrabold text-sm rounded-2xl shadow-md hover:bg-rose-50 transition-all active:scale-95"
          >
            <Volume2 className="w-5 h-5" />
            <span>Hear Sound</span>
          </button>

          <button
            onClick={() => {
              playSoundEffect('click', settings.soundEffects);
              onSelectLetterForTracing(selectedLetter);
            }}
            className="flex items-center justify-center space-x-2 px-6 py-3.5 bg-yellow-400 text-slate-900 font-extrabold text-sm rounded-2xl shadow-md hover:bg-yellow-300 transition-all active:scale-95"
          >
            <PenTool className="w-5 h-5" />
            <span>Trace Letter {selectedLetter.char}</span>
          </button>
        </div>

      </div>

      {/* 26 Alphabet Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-3">
        {ALPHABET_DATA.map((item) => {
          const isSelected = selectedLetter.char === item.char;
          const isMastered = student.progress[item.char]?.mastered;

          return (
            <button
              key={item.char}
              onClick={() => {
                setSelectedLetter(item);
                onLetterChange?.(item.char.toLowerCase());
                handlePlayLetterSound(item);
              }}
              onMouseEnter={() => speakText(item.char, settings.voiceGuidance)}
              className={`relative p-4 rounded-3xl border text-center space-y-2 transition-all transform hover:-translate-y-1 active:scale-95 ${
                isSelected
                  ? 'bg-rose-500 text-white border-rose-600 shadow-lg ring-4 ring-rose-300/40 scale-105'
                  : 'bg-white hover:bg-rose-50/60 border-slate-200 hover:border-rose-300 text-slate-800'
              }`}
            >
              {/* Mastered Badge */}
              {isMastered && (
                <CheckCircle className={`absolute top-2 right-2 w-4 h-4 ${isSelected ? 'text-yellow-300' : 'text-emerald-500'}`} />
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
            </button>
          );
        })}
      </div>

    </div>
  );
};
