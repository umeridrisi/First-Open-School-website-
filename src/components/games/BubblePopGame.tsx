import React, { useState, useEffect } from 'react';
import { StudentProfile, ParentSettings } from '../../types';
import { ALPHABET_DATA, DIGIT_DATA } from '../../data/curriculumData';
import { speakText, playSoundEffect } from '../../utils/sound';
import confetti from 'canvas-confetti';
import { Volume2, RefreshCw, Trophy, Flame } from 'lucide-react';

interface BubblePopGameProps {
  student: StudentProfile;
  settings: ParentSettings;
  onAwardStars: (amount: number) => void;
}

interface Bubble {
  id: number;
  text: string;
  emoji: string;
  x: number; // %
  speed: number;
  y: number; // %
  color: string;
}

export const BubblePopGame: React.FC<BubblePopGameProps> = ({ student, settings, onAwardStars }) => {
  const [targetItem, setTargetItem] = useState<{ text: string; word: string; emoji: string } | null>(null);
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [score, setScore] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);

  // Generate a new game round
  const startNewRound = () => {
    // Pick random target from letters or digits
    const isLetter = Math.random() > 0.4;
    let target = { text: 'A', word: 'Apple', emoji: '🍎' };

    if (isLetter) {
      const randL = ALPHABET_DATA[Math.floor(Math.random() * ALPHABET_DATA.length)];
      target = { text: randL.char, word: randL.exampleWord, emoji: randL.emoji };
    } else {
      const randD = DIGIT_DATA[Math.floor(Math.random() * DIGIT_DATA.length)];
      target = { text: String(randD.value), word: randD.word, emoji: randD.visualGroupEmoji };
    }

    setTargetItem(target);

    // Create 6 bubbles (1 correct target + 5 distractors)
    const optionsPool = [target.text];
    while (optionsPool.length < 6) {
      const randomOption = isLetter
        ? ALPHABET_DATA[Math.floor(Math.random() * ALPHABET_DATA.length)].char
        : String(DIGIT_DATA[Math.floor(Math.random() * DIGIT_DATA.length)].value);
      if (!optionsPool.includes(randomOption)) {
        optionsPool.push(randomOption);
      }
    }

    // Shuffle optionsPool
    optionsPool.sort(() => Math.random() - 0.5);

    const colors = ['bg-rose-400', 'bg-sky-400', 'bg-emerald-400', 'bg-amber-400', 'bg-purple-400', 'bg-pink-400'];

    const newBubbles: Bubble[] = optionsPool.map((optText, idx) => ({
      id: Math.random(),
      text: optText,
      emoji: isLetter 
        ? ALPHABET_DATA.find(l => l.char === optText)?.emoji || '🎈'
        : DIGIT_DATA.find(d => String(d.value) === optText)?.visualGroupEmoji || '🎈',
      x: 10 + (idx % 3) * 30 + Math.random() * 8,
      y: 80 + Math.floor(idx / 3) * 20,
      speed: 0.2 + Math.random() * 0.2,
      color: colors[idx % colors.length]
    }));

    setBubbles(newBubbles);

    // Speak prompt
    speakText(`Pop the bubble with ${isLetter ? 'letter' : 'number'} ${target.text}!`, settings.voiceGuidance);
  };

  useEffect(() => {
    startNewRound();
  }, []);

  // Float bubbles upwards
  useEffect(() => {
    const timer = setInterval(() => {
      setBubbles(prev =>
        prev.map(b => ({
          ...b,
          y: b.y <= -15 ? 100 : b.y - b.speed
        }))
      );
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const handleBubbleClick = (bubble: Bubble) => {
    if (!targetItem) return;

    if (bubble.text === targetItem.text) {
      // Correct!
      playSoundEffect('pop', settings.soundEffects);
      playSoundEffect('star', settings.soundEffects);

      const newScore = score + 10;
      const newStreak = streak + 1;
      setScore(newScore);
      setStreak(newStreak);

      if (newStreak % 3 === 0) {
        onAwardStars(5);
        confetti({ particleCount: 30, spread: 50 });
        speakText(`Awesome! 5 star bonus for ${newStreak} in a row!`, settings.voiceGuidance);
      } else {
        onAwardStars(2);
        speakText(`Great job! You popped ${targetItem.text}!`, settings.voiceGuidance);
      }

      startNewRound();
    } else {
      // Wrong bubble
      playSoundEffect('wrong', settings.soundEffects);
      setStreak(0);
      speakText(`Oops! That is ${bubble.text}. Find ${targetItem.text}!`, settings.voiceGuidance);
    }
  };

  return (
    <div className="space-y-6 pb-12">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
        <div>
          <h2 className="text-2xl font-black text-slate-800 tracking-tight flex items-center gap-2">
            <span>🫧 Bubble Pop Phonics</span>
            <span className="text-xs px-2.5 py-1 bg-sky-100 text-sky-800 font-extrabold rounded-full">
              Audio Recall
            </span>
          </h2>
          <p className="text-xs text-slate-500 font-medium">
            Listen to the voice prompt and pop the matching floating bubble!
          </p>
        </div>

        {/* Score & Streak */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1 px-3 py-1.5 bg-yellow-50 border border-yellow-200 rounded-full text-yellow-800 font-extrabold text-sm">
            <Trophy className="w-4 h-4 text-yellow-500" />
            <span>Score: {score}</span>
          </div>

          <div className="flex items-center space-x-1 px-3 py-1.5 bg-orange-50 border border-orange-200 rounded-full text-orange-800 font-extrabold text-sm">
            <Flame className="w-4 h-4 text-orange-500 fill-orange-500" />
            <span>Streak: {streak}</span>
          </div>
        </div>
      </div>

      {/* Target Audio Prompt Banner */}
      {targetItem && (
        <div className="bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-3xl p-6 shadow-md flex items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => speakText(`Pop the bubble with ${targetItem.text}!`, settings.voiceGuidance)}
              className="p-3 bg-white/20 hover:bg-white/30 rounded-2xl backdrop-blur-md transition-colors"
            >
              <Volume2 className="w-8 h-8 text-yellow-300 animate-pulse" />
            </button>
            <div>
              <h3 className="text-xl sm:text-2xl font-black">
                Find & Pop: <span className="text-yellow-300 underline font-black">{targetItem.text}</span>
              </h3>
              <p className="text-sky-100 text-xs font-medium">
                Target: {targetItem.word} {targetItem.emoji}
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              startNewRound();
              playSoundEffect('click', settings.soundEffects);
            }}
            className="p-3 bg-white/10 hover:bg-white/20 rounded-2xl backdrop-blur-md transition-colors text-xs font-bold flex items-center gap-1"
          >
            <RefreshCw className="w-4 h-4" />
            <span className="hidden sm:inline">Skip</span>
          </button>
        </div>
      )}

      {/* Floating Bubbles Stage Container */}
      <div className="relative w-full h-[450px] bg-gradient-to-b from-sky-100 via-sky-50 to-indigo-100 rounded-3xl border-2 border-sky-200 overflow-hidden shadow-inner">
        
        {bubbles.map((b) => (
          <button
            key={b.id}
            onClick={() => handleBubbleClick(b)}
            style={{
              left: `${b.x}%`,
              top: `${b.y}%`,
            }}
            className={`absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full ${b.color} text-white font-black text-2xl sm:text-3xl flex flex-col items-center justify-center shadow-lg shadow-sky-400/30 transform hover:scale-110 active:scale-90 transition-transform cursor-pointer border-2 border-white/50 backdrop-blur-xs`}
          >
            <span>{b.text}</span>
            <span className="text-xs opacity-80">{b.emoji}</span>
          </button>
        ))}

      </div>

    </div>
  );
};
