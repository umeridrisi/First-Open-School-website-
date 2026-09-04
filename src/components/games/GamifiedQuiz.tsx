import React, { useState, useEffect } from 'react';
import { StudentProfile, ParentSettings, AgeTier } from '../../types';
import { speakText, playSoundEffect } from '../../utils/sound';
import confetti from 'canvas-confetti';
import { Trophy, CheckCircle, XCircle, Sparkles, Award, ArrowRight, RefreshCw } from 'lucide-react';

interface GamifiedQuizProps {
  student: StudentProfile;
  settings: ParentSettings;
  onAwardStars: (amount: number) => void;
  onSaveQuizResult: (score: number, total: number) => void;
}

interface Question {
  prompt: string;
  visualEmoji: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const GamifiedQuiz: React.FC<GamifiedQuizProps> = ({
  student,
  settings,
  onAwardStars,
  onSaveQuizResult
}) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);

  // Generate questions tailored to age tier
  const generateQuestions = (tier: AgeTier): Question[] => {
    if (tier === 'pre-k') {
      return [
        { prompt: "Which letter is for Apple?", visualEmoji: "🍎", options: ["A", "B", "C"], correctIndex: 0, explanation: "A is for Apple!" },
        { prompt: "Count the stars! How many?", visualEmoji: "⭐️ ⭐️ ⭐️", options: ["2", "3", "4"], correctIndex: 1, explanation: "There are 3 stars!" },
        { prompt: "Which letter is for Bear?", visualEmoji: "🐻", options: ["D", "B", "G"], correctIndex: 1, explanation: "B is for Bear!" },
        { prompt: "Count the apples! How many?", visualEmoji: "🍎 🍎 🍎 🍎", options: ["4", "5", "3"], correctIndex: 0, explanation: "There are 4 apples!" },
        { prompt: "Which letter is for Cat?", visualEmoji: "🐱", options: ["C", "M", "P"], correctIndex: 0, explanation: "C is for Cat!" }
      ];
    } else if (tier === 'kindergarten') {
      return [
        { prompt: "Which letter makes the 'Duh' sound?", visualEmoji: "🦆", options: ["F", "D", "K"], correctIndex: 1, explanation: "D makes the 'Duh' sound for Duck!" },
        { prompt: "What number comes right after 5?", visualEmoji: "5️⃣ ➔ ❓", options: ["6", "7", "4"], correctIndex: 0, explanation: "6 comes right after 5!" },
        { prompt: "Match uppercase B with its lowercase letter:", visualEmoji: "B", options: ["d", "b", "p"], correctIndex: 1, explanation: "b is lowercase B!" },
        { prompt: "How many balloons are there?", visualEmoji: "🎈 🎈 🎈 🎈 🎈 🎈", options: ["5", "6", "7"], correctIndex: 1, explanation: "There are 6 balloons!" },
        { prompt: "Which letter is a Vowel?", visualEmoji: "👑", options: ["E", "T", "R"], correctIndex: 0, explanation: "E is a vowel (A, E, I, O, U)!" }
      ];
    } else {
      return [
        { prompt: "What number is missing? 10, 11, __, 13", visualEmoji: "🔢", options: ["12", "14", "15"], correctIndex: 0, explanation: "12 completes the sequence 10, 11, 12, 13!" },
        { prompt: "Which word starts with letter L?", visualEmoji: "🦁", options: ["Tiger", "Lion", "Bear"], correctIndex: 1, explanation: "Lion starts with L!" },
        { prompt: "What is 3 + 2?", visualEmoji: "🍎🍎🍎 + 🍎🍎", options: ["4", "5", "6"], correctIndex: 1, explanation: "3 plus 2 equals 5!" },
        { prompt: "Match uppercase 'M' with lowercase:", visualEmoji: "M", options: ["n", "m", "w"], correctIndex: 1, explanation: "m is lowercase M!" },
        { prompt: "How many fingers on two hands?", visualEmoji: "🖐️ 🖐️", options: ["8", "10", "12"], correctIndex: 1, explanation: "5 + 5 = 10 fingers!" }
      ];
    }
  };

  const startQuiz = () => {
    const newQuestions = generateQuestions(student.ageTier);
    setQuestions(newQuestions);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setQuizFinished(false);

    speakText(`Question 1: ${newQuestions[0].prompt}`, settings.voiceGuidance);
  };

  useEffect(() => {
    startQuiz();
  }, [student.ageTier]);

  const handleSelectOption = (index: number) => {
    if (isAnswered) return;

    setSelectedOption(index);
    setIsAnswered(true);

    const q = questions[currentIndex];
    const isCorrect = index === q.correctIndex;

    if (isCorrect) {
      playSoundEffect('correct', settings.soundEffects);
      setScore(s => s + 1);
      speakText(`Correct! ${q.explanation}`, settings.voiceGuidance);
    } else {
      playSoundEffect('wrong', settings.soundEffects);
      speakText(`Not quite. ${q.explanation}`, settings.voiceGuidance);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < questions.length) {
      const nextIdx = currentIndex + 1;
      setCurrentIndex(nextIdx);
      setSelectedOption(null);
      setIsAnswered(false);
      speakText(`Question ${nextIdx + 1}: ${questions[nextIdx].prompt}`, settings.voiceGuidance);
    } else {
      // Quiz complete
      setQuizFinished(true);
      const finalScore = score + (selectedOption === questions[currentIndex].correctIndex ? 0 : 0); // score already updated
      onSaveQuizResult(finalScore, questions.length);

      playSoundEffect('victory', settings.soundEffects);
      confetti({ particleCount: 50, spread: 80 });
      onAwardStars(finalScore * 2);

      speakText(
        `Quiz complete! You scored ${finalScore} out of ${questions.length}! You earned ${finalScore * 2} stars!`,
        settings.voiceGuidance
      );
    }
  };

  if (quizFinished) {
    const pct = Math.round((score / questions.length) * 100);

    return (
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm text-center max-w-xl mx-auto space-y-6">
        <div className="w-20 h-20 rounded-full bg-yellow-100 text-yellow-500 flex items-center justify-center mx-auto shadow-inner">
          <Trophy className="w-10 h-10 fill-yellow-400" />
        </div>

        <div className="space-y-2">
          <h2 className="text-3xl font-black text-slate-800">Quiz Completed! 🎓</h2>
          <p className="text-slate-500 font-medium text-sm">
            You answered {score} of {questions.length} questions correctly ({pct}%).
          </p>
        </div>

        <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 text-amber-900 font-extrabold text-sm">
          ⭐ Earned {score * 2} Stars & Milestone Progress Point!
        </div>

        <button
          onClick={startQuiz}
          className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-base rounded-2xl shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
        >
          <RefreshCw className="w-5 h-5" />
          <span>Take Quiz Again</span>
        </button>
      </div>
    );
  }

  const currentQ = questions[currentIndex];

  if (!currentQ) return null;

  return (
    <div className="space-y-6 pb-12 max-w-3xl mx-auto">
      
      {/* Header Progress Bar */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-black uppercase text-slate-500">
            Gamified Assessment • Question {currentIndex + 1} of {questions.length}
          </span>
          <span className="text-xs font-extrabold text-blue-600">
            Score: {score} ⭐
          </span>
        </div>

        <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden border border-slate-200">
          <div 
            className="bg-blue-600 h-full rounded-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
        
        <div className="text-center space-y-3">
          <div className="text-6xl sm:text-7xl p-4 bg-slate-50 rounded-3xl inline-block border border-slate-100 shadow-inner">
            {currentQ.visualEmoji}
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-slate-800">
            {currentQ.prompt}
          </h3>
        </div>

        {/* Options */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
          {currentQ.options.map((option, idx) => {
            const isSelected = selectedOption === idx;
            const isCorrect = idx === currentQ.correctIndex;

            let buttonStyle = "bg-slate-50 hover:bg-blue-50 text-slate-800 border-slate-200 hover:border-blue-300";
            if (isAnswered) {
              if (isCorrect) buttonStyle = "bg-emerald-500 text-white border-emerald-600 shadow-md";
              else if (isSelected) buttonStyle = "bg-rose-500 text-white border-rose-600";
              else buttonStyle = "bg-slate-50 text-slate-400 border-slate-200 opacity-50";
            }

            return (
              <button
                key={idx}
                disabled={isAnswered}
                onClick={() => handleSelectOption(idx)}
                className={`p-5 rounded-2xl font-black text-2xl border transition-all transform active:scale-95 text-center ${buttonStyle}`}
              >
                {option}
              </button>
            );
          })}
        </div>

        {/* Explanation & Next Button */}
        {isAnswered && (
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs font-bold text-slate-600">
              💡 {currentQ.explanation}
            </p>

            <button
              onClick={handleNext}
              className="w-full sm:w-auto px-6 py-3.5 bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-extrabold text-sm rounded-2xl shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              <span>{currentIndex + 1 < questions.length ? "Next Question" : "See Results"}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}

      </div>

    </div>
  );
};
