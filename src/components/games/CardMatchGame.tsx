import React, { useState, useEffect } from 'react';
import { StudentProfile, ParentSettings } from '../../types';
import { ALPHABET_DATA, DIGIT_DATA } from '../../data/curriculumData';
import { speakText, playSoundEffect } from '../../utils/sound';
import confetti from 'canvas-confetti';
import { Grid2X2, RefreshCw, Trophy, Sparkles } from 'lucide-react';

interface CardMatchGameProps {
  student: StudentProfile;
  settings: ParentSettings;
  onAwardStars: (amount: number) => void;
}

interface Card {
  id: number;
  key: string;
  type: 'symbol' | 'visual';
  content: string; // 'A' or 'Apple 🍎' or '5' or 'Five 🍎🍎🍎'
  isFlipped: boolean;
  isMatched: boolean;
}

export const CardMatchGame: React.FC<CardMatchGameProps> = ({ student, settings, onAwardStars }) => {
  const [matchMode, setMatchMode] = useState<'letters' | 'digits'>(
    student.ageTier === 'grade-1-2' ? 'digits' : 'letters'
  );
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<Card[]>([]);
  const [moves, setMoves] = useState<number>(0);
  const [matchesCount, setMatchesCount] = useState<number>(0);

  const initGame = (mode: 'letters' | 'digits' = matchMode) => {
    const generatedCards: Card[] = [];

    if (mode === 'letters') {
      const shuffledPool = [...ALPHABET_DATA].sort(() => Math.random() - 0.5).slice(0, 4);
      shuffledPool.forEach((item, idx) => {
        generatedCards.push({
          id: idx * 2,
          key: item.char,
          type: 'symbol',
          content: item.char,
          isFlipped: false,
          isMatched: false,
        });
        generatedCards.push({
          id: idx * 2 + 1,
          key: item.char,
          type: 'visual',
          content: `${item.exampleWord} ${item.emoji}`,
          isFlipped: false,
          isMatched: false,
        });
      });
      speakText("Flip cards to match letters with their phonics word pictures!", settings.voiceGuidance);
    } else {
      // Pick 4 digits based on curriculum
      const pool = student.ageTier === 'grade-1-2' ? DIGIT_DATA.slice(10, 20) : DIGIT_DATA.slice(1, 10);
      const shuffledPool = [...pool].sort(() => Math.random() - 0.5).slice(0, 4);
      shuffledPool.forEach((item, idx) => {
        generatedCards.push({
          id: idx * 2,
          key: String(item.value),
          type: 'symbol',
          content: String(item.value),
          isFlipped: false,
          isMatched: false,
        });
        generatedCards.push({
          id: idx * 2 + 1,
          key: String(item.value),
          type: 'visual',
          content: `${item.word} ${item.visualGroupEmoji}`,
          isFlipped: false,
          isMatched: false,
        });
      });
      speakText("Flip cards to match numbers with their counting pictures!", settings.voiceGuidance);
    }

    // Shuffle cards
    generatedCards.sort(() => Math.random() - 0.5);

    setCards(generatedCards);
    setFlippedCards([]);
    setMoves(0);
    setMatchesCount(0);
  };

  useEffect(() => {
    initGame(matchMode);
  }, [matchMode]);

  const handleCardClick = (card: Card) => {
    if (card.isFlipped || card.isMatched || flippedCards.length >= 2) return;

    playSoundEffect('pop', settings.soundEffects);
    speakText(card.content, settings.voiceGuidance);

    // Flip card
    const updatedCards = cards.map(c => c.id === card.id ? { ...c, isFlipped: true } : c);
    setCards(updatedCards);

    const newFlipped = [...flippedCards, card];
    setFlippedCards(newFlipped);

    if (newFlipped.length === 2) {
      setMoves(m => m + 1);

      // Check match
      if (newFlipped[0].letter === newFlipped[1].letter) {
        // Match!
        setTimeout(() => {
          playSoundEffect('correct', settings.soundEffects);
          setCards(prev => prev.map(c => c.letter === newFlipped[0].letter ? { ...c, isMatched: true } : c));
          setFlippedCards([]);

          const nextMatches = matchesCount + 1;
          setMatchesCount(nextMatches);

          if (nextMatches === 4) {
            playSoundEffect('victory', settings.soundEffects);
            confetti({ particleCount: 40, spread: 70 });
            onAwardStars(5);
            speakText("Super job! All cards matched perfectly!", settings.voiceGuidance);
          } else {
            speakText(`Matched Letter ${newFlipped[0].letter}!`, settings.voiceGuidance);
          }
        }, 600);
      } else {
        // No match
        setTimeout(() => {
          playSoundEffect('wrong', settings.soundEffects);
          setCards(prev => prev.map(c => (c.id === newFlipped[0].id || c.id === newFlipped[1].id) ? { ...c, isFlipped: false } : c));
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  return (
    <div className="space-y-6 pb-12">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
        <div>
          <h2 className="text-2xl font-black text-slate-800 tracking-tight flex items-center gap-2">
            <span>🃏 Phonics Card Match</span>
            <span className="text-xs px-2.5 py-1 bg-purple-100 text-purple-800 font-extrabold rounded-full">
              Memory & Phonics
            </span>
          </h2>
          <p className="text-xs text-slate-500 font-medium">
            Pair uppercase letters with their matching phonics pictures!
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <div className="px-3 py-1.5 bg-slate-100 rounded-full font-bold text-xs text-slate-700">
            Moves: {moves}
          </div>

          <div className="flex items-center space-x-1 px-3 py-1.5 bg-purple-50 border border-purple-200 rounded-full text-purple-800 font-extrabold text-xs">
            <Trophy className="w-4 h-4 text-purple-600" />
            <span>Matches: {matchesCount} / 4</span>
          </div>

          <button
            onClick={() => {
              initGame();
              playSoundEffect('click', settings.soundEffects);
            }}
            className="p-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-2xl transition-colors"
          >
            <RefreshCw className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* 8 Card Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {cards.map((card) => {
          const showFace = card.isFlipped || card.isMatched;

          return (
            <button
              key={card.id}
              onClick={() => handleCardClick(card)}
              className={`h-36 sm:h-44 rounded-3xl border-2 flex flex-col items-center justify-center p-4 transition-all transform duration-300 active:scale-95 shadow-md ${
                card.isMatched
                  ? 'bg-emerald-100 border-emerald-400 text-emerald-800 opacity-80 scale-95'
                  : showFace
                  ? 'bg-white border-purple-400 text-purple-900 ring-2 ring-purple-300'
                  : 'bg-gradient-to-br from-purple-600 to-indigo-700 border-indigo-800 text-white hover:scale-102'
              }`}
            >
              {showFace ? (
                <div className="space-y-1 text-center">
                  <div className="text-3xl sm:text-4xl font-black">{card.content}</div>
                  <div className="text-xs font-extrabold text-slate-500 capitalize">{card.type}</div>
                </div>
              ) : (
                <div className="flex flex-col items-center space-y-2">
                  <Sparkles className="w-8 h-8 text-yellow-300" />
                  <span className="text-xs font-black tracking-widest text-purple-200 uppercase">First Open</span>
                </div>
              )}
            </button>
          );
        })}
      </div>

    </div>
  );
};
