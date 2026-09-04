import React from 'react';
import { StudentProfile, ActiveTab, ParentSettings, ItemProgress } from '../../types';
import { ALPHABET_DATA, DIGIT_DATA, ALL_BADGES, AGE_TIER_INFO } from '../../data/curriculumData';
import { speakText, playSoundEffect } from '../../utils/sound';
import { Sparkles, Trophy, Flame, Play, PenTool, CircleDot, Utensils, BookOpen, ArrowRight } from 'lucide-react';

interface OverviewWorldProps {
  student: StudentProfile;
  settings: ParentSettings;
  onNavigate: (tab: ActiveTab) => void;
}

export const OverviewWorld: React.FC<OverviewWorldProps> = ({ student, settings, onNavigate }) => {
  const tierInfo = AGE_TIER_INFO[student.ageTier];

  // Compute overall progress
  const progressVals = (Object.values(student.progress || {}) as ItemProgress[]);
  const masteredLetters = progressVals.filter(p => p.type === 'letter' && p.mastered).length;
  const masteredDigits = progressVals.filter(p => p.type === 'digit' && p.mastered).length;

  const letterPct = Math.round((masteredLetters / 26) * 100);
  const digitPct = Math.round((masteredDigits / 21) * 100);

  const handleSpeak = (text: string) => {
    speakText(text, settings.voiceGuidance);
  };

  return (
    <div className="space-y-8 pb-12">
      
      {/* Welcome Hero Card */}
      <div className="relative overflow-hidden rounded-[32px] bg-white border-4 border-[#4D96FF] shadow-[0_8px_0_#3A72C1] p-6 sm:p-10 text-[#2D2D2D]">
        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#FFD93D] text-xs font-black text-[#2D2D2D] shadow-xs">
            <Sparkles className="w-4 h-4 text-[#2D2D2D]" />
            <span>Curriculum Tier: {tierInfo.gradeLabel}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight text-[#4D96FF]">
            READY TO LEARN TODAY, {student.name.toUpperCase()}? 🚀
          </h2>

          <p className="text-gray-600 text-sm sm:text-base font-bold">
            Explore interactive alphabets, digit counting, and phonics games designed specifically for early learners.
          </p>

          <div className="flex flex-wrap gap-3.5 pt-2">
            <button
              onClick={() => {
                playSoundEffect('click', settings.soundEffects);
                onNavigate('alphabets');
                handleSpeak("Let's learn alphabets and phonics!");
              }}
              className="flex items-center space-x-2 px-6 py-3.5 bg-[#FF6B6B] text-white font-black text-base rounded-2xl border-4 border-[#FF6B6B] shadow-[0_6px_0_#C44E4E] active:translate-y-1 active:shadow-none transition-all cursor-pointer"
            >
              <span>EXPLORE ALPHABETS A-Z</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={() => {
                playSoundEffect('click', settings.soundEffects);
                onNavigate('digits');
                handleSpeak("Let's count digits zero through twenty!");
              }}
              className="flex items-center space-x-2 px-6 py-3.5 bg-[#6BCB77] text-white font-black text-base rounded-2xl border-4 border-[#6BCB77] shadow-[0_6px_0_#4E9B56] active:translate-y-1 active:shadow-none transition-all cursor-pointer"
            >
              <span>COUNT DIGITS 0-20</span>
              <Play className="w-4 h-4 fill-white" />
            </button>
          </div>
        </div>

        {/* Floating Mascot */}
        <div className="absolute right-6 bottom-4 opacity-40 sm:opacity-100 transform translate-x-4 translate-y-4 sm:translate-y-0 text-8xl sm:text-9xl select-none">
          🦁
        </div>
      </div>

      {/* Progress Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Alphabet Progress */}
        <div className="bg-white rounded-[32px] p-6 border-4 border-[#FF6B6B] shadow-[0_6px_0_#C44E4E] space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#FF6B6B] text-white flex items-center justify-center font-black text-2xl shadow-xs">
                Aa
              </div>
              <div>
                <h3 className="font-black text-lg text-[#2D2D2D]">ALPHABET PHONICS</h3>
                <p className="text-xs text-gray-500 font-bold">{masteredLetters} of 26 letters mastered</p>
              </div>
            </div>
            <span className="text-2xl font-black text-[#FF6B6B]">{letterPct}%</span>
          </div>

          <div className="w-full bg-[#FFF9F0] rounded-full h-4 overflow-hidden border-2 border-gray-200">
            <div 
              className="bg-[#FF6B6B] h-full rounded-full transition-all duration-700" 
              style={{ width: `${letterPct}%` }}
            />
          </div>

          {/* Letter Badges Preview */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex space-x-1.5">
              {ALPHABET_DATA.slice(0, 8).map((item) => {
                const isMastered = student.progress[item.char]?.mastered;
                return (
                  <span
                    key={item.char}
                    className={`w-7 h-7 rounded-xl flex items-center justify-center font-black text-xs border-2 ${
                      isMastered 
                        ? 'bg-[#FF6B6B] text-white border-[#FF6B6B] shadow-xs' 
                        : 'bg-gray-100 text-gray-400 border-gray-200'
                    }`}
                  >
                    {item.char}
                  </span>
                );
              })}
            </div>
            <button
              onClick={() => onNavigate('alphabets')}
              className="text-xs font-black text-[#FF6B6B] hover:underline uppercase tracking-tight"
            >
              View All &rarr;
            </button>
          </div>
        </div>

        {/* Digit Progress */}
        <div className="bg-white rounded-[32px] p-6 border-4 border-[#6BCB77] shadow-[0_6px_0_#4E9B56] space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#6BCB77] text-white flex items-center justify-center font-black text-2xl shadow-xs">
                123
              </div>
              <div>
                <h3 className="font-black text-lg text-[#2D2D2D]">DIGIT COUNTING</h3>
                <p className="text-xs text-gray-500 font-bold">{masteredDigits} of 21 numbers mastered</p>
              </div>
            </div>
            <span className="text-2xl font-black text-[#6BCB77]">{digitPct}%</span>
          </div>

          <div className="w-full bg-[#FFF9F0] rounded-full h-4 overflow-hidden border-2 border-gray-200">
            <div 
              className="bg-[#6BCB77] h-full rounded-full transition-all duration-700" 
              style={{ width: `${digitPct}%` }}
            />
          </div>

          {/* Digit Badges Preview */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex space-x-1.5">
              {DIGIT_DATA.slice(0, 8).map((item) => {
                const isMastered = student.progress[String(item.value)]?.mastered;
                return (
                  <span
                    key={item.value}
                    className={`w-7 h-7 rounded-xl flex items-center justify-center font-black text-xs border-2 ${
                      isMastered 
                        ? 'bg-[#6BCB77] text-white border-[#6BCB77] shadow-xs' 
                        : 'bg-gray-100 text-gray-400 border-gray-200'
                    }`}
                  >
                    {item.value}
                  </span>
                );
              })}
            </div>
            <button
              onClick={() => onNavigate('digits')}
              className="text-xs font-black text-[#6BCB77] hover:underline uppercase tracking-tight"
            >
              View All &rarr;
            </button>
          </div>
        </div>

      </div>

      {/* Recommended Interactive Games */}
      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#2D2D2D] tracking-tight uppercase">
          FEATURED LEARNING GAMES
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <button
            onClick={() => {
              playSoundEffect('click', settings.soundEffects);
              onNavigate('tracing');
            }}
            className="p-5 rounded-[28px] bg-white border-4 border-[#FFD93D] shadow-[0_6px_0_#C9A92E] text-left space-y-3 transition-all active:translate-y-1 active:shadow-none cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-2xl bg-[#FFD93D] text-[#2D2D2D] flex items-center justify-center font-black shadow-xs">
              <PenTool className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-black text-[#2D2D2D] text-base">Guided Tracing</h4>
              <p className="text-xs text-gray-500 font-bold">Stroke tracing with real-time accuracy scoring.</p>
            </div>
          </button>

          <button
            onClick={() => {
              playSoundEffect('click', settings.soundEffects);
              onNavigate('bubble-pop');
            }}
            className="p-5 rounded-[28px] bg-white border-4 border-[#4D96FF] shadow-[0_6px_0_#3A72C1] text-left space-y-3 transition-all active:translate-y-1 active:shadow-none cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-2xl bg-[#4D96FF] text-white flex items-center justify-center font-black shadow-xs">
              <CircleDot className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-black text-[#2D2D2D] text-base">Bubble Pop Phonics</h4>
              <p className="text-xs text-gray-500 font-bold">Pop floating bubbles matching voice prompts.</p>
            </div>
          </button>

          <button
            onClick={() => {
              playSoundEffect('click', settings.soundEffects);
              onNavigate('counting-feast');
            }}
            className="p-5 rounded-[28px] bg-white border-4 border-[#FF6B6B] shadow-[0_6px_0_#C44E4E] text-left space-y-3 transition-all active:translate-y-1 active:shadow-none cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-2xl bg-[#FF6B6B] text-white flex items-center justify-center font-black shadow-xs">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-black text-[#2D2D2D] text-base">Monster Feast</h4>
              <p className="text-xs text-gray-500 font-bold">Feed friendly monsters while counting snacks.</p>
            </div>
          </button>

          <button
            onClick={() => {
              playSoundEffect('click', settings.soundEffects);
              onNavigate('phonics-stories');
            }}
            className="p-5 rounded-[28px] bg-white border-4 border-[#6BCB77] shadow-[0_6px_0_#4E9B56] text-left space-y-3 transition-all active:translate-y-1 active:shadow-none cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-2xl bg-[#6BCB77] text-white flex items-center justify-center font-black shadow-xs">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-black text-[#2D2D2D] text-base">Story World</h4>
              <p className="text-xs text-gray-500 font-bold">Listen and read along with phonics mini-stories.</p>
            </div>
          </button>

        </div>
      </div>

      {/* Badges Showcase */}
      <div className="bg-white rounded-[32px] p-6 border-4 border-[#FFD93D] shadow-[0_6px_0_#C9A92E] space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Trophy className="w-6 h-6 text-[#FFD93D]" />
            <h3 className="text-lg font-black text-[#2D2D2D]">EARNED BADGES ({student.unlockedBadges.length} / {ALL_BADGES.length})</h3>
          </div>
          <span className="text-xs font-extrabold text-gray-500">Keep practicing to unlock all!</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-3">
          {ALL_BADGES.map((b) => {
            const isUnlocked = student.unlockedBadges.includes(b.id);
            return (
              <div
                key={b.id}
                className={`p-3 rounded-2xl border-2 text-center space-y-1 transition-all ${
                  isUnlocked
                    ? 'bg-[#FFD93D]/20 border-[#FFD93D] shadow-xs'
                    : 'bg-gray-50 border-gray-200 opacity-40 grayscale'
                }`}
                title={`${b.title}: ${b.description}`}
              >
                <div className="text-2xl">{b.icon}</div>
                <div className="text-[11px] font-black text-[#2D2D2D] line-clamp-1">{b.title}</div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
