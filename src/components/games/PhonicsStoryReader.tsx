import React, { useState, useEffect } from 'react';
import { StudentProfile, ParentSettings, PhonicsStory } from '../../types';
import { speakText, playSoundEffect } from '../../utils/sound';
import confetti from 'canvas-confetti';
import { BookOpenCheck, Sparkles, Volume2, CheckCircle2, RefreshCw, Wand2 } from 'lucide-react';

interface PhonicsStoryReaderProps {
  student: StudentProfile;
  settings: ParentSettings;
  onAwardStars: (amount: number) => void;
}

export const PhonicsStoryReader: React.FC<PhonicsStoryReaderProps> = ({ student, settings, onAwardStars }) => {
  const [story, setStory] = useState<PhonicsStory | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const fetchStory = async () => {
    setIsLoading(true);
    setSelectedAnswer(null);
    setIsCorrect(null);

    try {
      const res = await fetch('/api/generate-phonics-story', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          letters: ['A', 'B', 'C', 'S', 'T'],
          numbers: ['1', '2', '3'],
          theme: 'Animal Safari'
        })
      });

      const json = await res.json();
      if (json.success && json.data) {
        setStory({
          title: json.data.title || "The Friendly Bear's Safari",
          story: json.data.story || "Ben the Bear saw 2 big Apples on the Tree. He shared 1 apple with Cat, and they sang A B C with glee!",
          phonicsFocus: json.data.phonicsFocus || "Letter Sound 'B' and Number '2'",
          question: json.data.question || "How many apples did Ben the Bear find?",
          options: ["1 Apple", "2 Apples", "5 Apples"],
          correctOptionIndex: 1
        });
      }
    } catch (err) {
      console.warn("Using fallback story:", err);
      setStory({
        title: "The Friendly Bear's Safari",
        story: "Ben the Bear saw 2 big Apples on the Tree. He shared 1 apple with Cat, and they sang A B C with glee!",
        phonicsFocus: "Letter Sound 'B' and Number '2'",
        question: "How many apples did Ben the Bear find?",
        options: ["1 Apple", "2 Apples", "5 Apples"],
        correctOptionIndex: 1
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchStory();
  }, []);

  const handleReadAloud = () => {
    if (!story) return;
    playSoundEffect('pop', settings.soundEffects);
    speakText(`${story.title}. ${story.story}`, settings.voiceGuidance, 0.85);
  };

  const handleAnswerClick = (index: number) => {
    if (!story || story.correctOptionIndex === undefined) return;

    setSelectedAnswer(index);
    if (index === story.correctOptionIndex) {
      setIsCorrect(true);
      playSoundEffect('victory', settings.soundEffects);
      confetti({ particleCount: 30, spread: 60 });
      onAwardStars(5);
      speakText("Correct answer! You are a brilliant reader!", settings.voiceGuidance);
    } else {
      setIsCorrect(false);
      playSoundEffect('wrong', settings.soundEffects);
      speakText("Try again!", settings.voiceGuidance);
    }
  };

  return (
    <div className="space-y-6 pb-12">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
        <div>
          <h2 className="text-2xl font-black text-slate-800 tracking-tight flex items-center gap-2">
            <span>📖 AI Phonics Story World</span>
            <span className="text-xs px-2.5 py-1 bg-teal-100 text-teal-800 font-extrabold rounded-full">
              Read Along
            </span>
          </h2>
          <p className="text-xs text-slate-500 font-medium">
            Listen and read AI-generated mini-stories crafted for early readers!
          </p>
        </div>

        <button
          onClick={() => {
            playSoundEffect('click', settings.soundEffects);
            fetchStory();
          }}
          disabled={isLoading}
          className="flex items-center space-x-2 px-4 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-extrabold text-xs rounded-2xl shadow-md transition-all active:scale-95 disabled:opacity-50"
        >
          <Wand2 className="w-4 h-4" />
          <span>{isLoading ? "Generating..." : "New Story"}</span>
        </button>
      </div>

      {/* Main Story Container */}
      {story && (
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div className="space-y-1">
              <span className="text-xs font-black uppercase text-teal-600 tracking-wider">
                Focus: {story.phonicsFocus}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-800">{story.title}</h3>
            </div>

            <button
              onClick={handleReadAloud}
              className="flex items-center space-x-2 px-5 py-3 bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-extrabold text-sm rounded-2xl shadow-md transition-all active:scale-95"
            >
              <Volume2 className="w-5 h-5" />
              <span>Read Aloud</span>
            </button>
          </div>

          {/* Story Body */}
          <div className="p-6 bg-teal-50/50 rounded-2xl border border-teal-100 text-lg sm:text-xl font-medium leading-relaxed text-slate-800 font-serif">
            "{story.story}"
          </div>

          {/* Comprehension Quiz */}
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
            <h4 className="font-extrabold text-base text-slate-800 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-500" />
              <span>Comprehension Question: {story.question}</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {story.options?.map((opt, idx) => {
                const isSelected = selectedAnswer === idx;
                const isThisCorrect = isSelected && isCorrect === true;

                return (
                  <button
                    key={idx}
                    onClick={() => handleAnswerClick(idx)}
                    className={`p-4 rounded-2xl font-black text-sm border transition-all text-center flex items-center justify-center space-x-2 ${
                      isThisCorrect
                        ? 'bg-emerald-500 text-white border-emerald-600 shadow-md'
                        : isSelected && isCorrect === false
                        ? 'bg-rose-500 text-white border-rose-600'
                        : 'bg-white hover:bg-teal-50 text-slate-800 border-slate-200 hover:border-teal-300'
                    }`}
                  >
                    <span>{opt}</span>
                    {isThisCorrect && <CheckCircle2 className="w-4 h-4 text-white" />}
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      )}

    </div>
  );
};
