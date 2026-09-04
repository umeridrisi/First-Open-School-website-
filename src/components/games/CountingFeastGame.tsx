import React, { useState, useEffect } from 'react';
import { StudentProfile, ParentSettings } from '../../types';
import { DIGIT_DATA } from '../../data/curriculumData';
import { speakText, playSoundEffect } from '../../utils/sound';
import confetti from 'canvas-confetti';
import { Utensils, RefreshCw, Trophy, Heart } from 'lucide-react';

interface CountingFeastGameProps {
  student: StudentProfile;
  settings: ParentSettings;
  onAwardStars: (amount: number) => void;
}

export const CountingFeastGame: React.FC<CountingFeastGameProps> = ({ student, settings, onAwardStars }) => {
  const [targetCount, setTargetCount] = useState<number>(3);
  const [snackType, setSnackType] = useState<{ emoji: string; name: string }>({ emoji: '🍎', name: 'Apples' });
  const [fedCount, setFedCount] = useState<number>(0);
  const [score, setScore] = useState<number>(0);

  const snacksPool = [
    { emoji: '🍎', name: 'Red Apples' },
    { emoji: '🍌', name: 'Yellow Bananas' },
    { emoji: '🍓', name: 'Strawberries' },
    { emoji: '🍪', name: 'Yummy Cookies' },
    { emoji: '🎈', name: 'Balloons' },
    { emoji: '🫐', name: 'Blueberries' }
  ];

  const startNewFeast = () => {
    const nextCount = Math.floor(Math.random() * 8) + 1; // 1 to 8
    const nextSnack = snacksPool[Math.floor(Math.random() * snacksPool.length)];
    setTargetCount(nextCount);
    setSnackType(nextSnack);
    setFedCount(0);

    speakText(`Feed Barnaby ${nextCount} ${nextSnack.name}!`, settings.voiceGuidance);
  };

  useEffect(() => {
    startNewFeast();
  }, []);

  const handleFeedSnack = () => {
    const nextFed = fedCount + 1;
    setFedCount(nextFed);

    playSoundEffect('pop', settings.soundEffects);
    speakText(`${nextFed}`, settings.voiceGuidance);

    if (nextFed === targetCount) {
      playSoundEffect('victory', settings.soundEffects);
      confetti({ particleCount: 35, spread: 60 });
      onAwardStars(3);
      setScore(s => s + 15);

      speakText(
        `Yum yum! Barnaby ate all ${targetCount} ${snackType.name}! Great counting!`,
        settings.voiceGuidance
      );

      setTimeout(() => {
        startNewFeast();
      }, 2500);
    }
  };

  return (
    <div className="space-y-6 pb-12">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
        <div>
          <h2 className="text-2xl font-black text-slate-800 tracking-tight flex items-center gap-2">
            <span>🦁 Monster Counting Feast</span>
            <span className="text-xs px-2.5 py-1 bg-orange-100 text-orange-800 font-extrabold rounded-full">
              Subitizing & Counting
            </span>
          </h2>
          <p className="text-xs text-slate-500 font-medium">
            Help Barnaby the hungry dino count and eat the exact number of snacks!
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1 px-3 py-1.5 bg-yellow-50 border border-yellow-200 rounded-full text-yellow-800 font-extrabold text-sm">
            <Trophy className="w-4 h-4 text-yellow-500" />
            <span>Points: {score}</span>
          </div>

          <button
            onClick={() => {
              startNewFeast();
              playSoundEffect('click', settings.soundEffects);
            }}
            className="p-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-2xl transition-colors"
          >
            <RefreshCw className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Game Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Left: Barnaby Mascot & Mouth Target */}
        <div className="bg-gradient-to-b from-amber-50 to-orange-100 rounded-3xl p-8 border border-orange-200 shadow-sm flex flex-col items-center justify-center text-center space-y-4">
          
          <div className="text-8xl sm:text-9xl animate-bounce">
            🦁
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-black text-slate-800">
              "I want {targetCount} {snackType.name} please!" {snackType.emoji}
            </h3>

            <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-white rounded-full border border-orange-200 text-orange-800 font-extrabold text-sm shadow-xs">
              <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
              <span>Fed So Far: {fedCount} / {targetCount}</span>
            </div>
          </div>

          {/* Progress Dots */}
          <div className="flex space-x-2 pt-2">
            {Array.from({ length: targetCount }).map((_, idx) => (
              <span
                key={idx}
                className={`w-4 h-4 rounded-full border transition-all ${
                  idx < fedCount ? 'bg-orange-500 border-orange-600 scale-125' : 'bg-white border-slate-300'
                }`}
              />
            ))}
          </div>

        </div>

        {/* Right: Interactive Snack Tray */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-6 flex flex-col justify-between">
          <div>
            <h3 className="font-extrabold text-lg text-slate-800 border-b pb-3 border-slate-100">
              Snack Tray (Tap each item to feed!)
            </h3>

            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 py-6">
              {Array.from({ length: 10 }).map((_, idx) => {
                const isAlreadyFed = idx < fedCount;
                const isOverLimit = fedCount >= targetCount;

                return (
                  <button
                    key={idx}
                    disabled={isAlreadyFed || isOverLimit}
                    onClick={handleFeedSnack}
                    className={`h-20 rounded-2xl border text-4xl flex items-center justify-center transition-all transform hover:scale-105 active:scale-95 ${
                      isAlreadyFed
                        ? 'bg-slate-100 border-slate-200 opacity-20 grayscale cursor-not-allowed scale-90'
                        : isOverLimit
                        ? 'bg-slate-50 border-slate-200 opacity-50 cursor-not-allowed'
                        : 'bg-orange-50 hover:bg-orange-100 border-orange-200 shadow-xs hover:border-orange-400'
                    }`}
                  >
                    {snackType.emoji}
                  </button>
                );
              })}
            </div>
          </div>

          <p className="text-xs text-slate-400 font-medium text-center">
            Tap snacks one by one until Barnaby is full!
          </p>
        </div>

      </div>

    </div>
  );
};
