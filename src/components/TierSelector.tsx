import React from 'react';
import { AgeTier, ParentSettings } from '../types';
import { AGE_TIER_INFO } from '../data/curriculumData';
import { speakText, playSoundEffect } from '../utils/sound';
import { Compass, Sparkles, BookOpen, GraduationCap } from 'lucide-react';

interface TierSelectorProps {
  currentTier: AgeTier;
  onSelectTier: (tier: AgeTier) => void;
  settings: ParentSettings;
}

export const TierSelector: React.FC<TierSelectorProps> = ({ currentTier, onSelectTier, settings }) => {
  const tiers: AgeTier[] = ['pre-k', 'kindergarten', 'grade-1-2', 'k12-foundations'];

  const getTierIcon = (tier: AgeTier) => {
    switch (tier) {
      case 'pre-k': return <Compass className="w-5 h-5 text-amber-500" />;
      case 'kindergarten': return <Sparkles className="w-5 h-5 text-sky-500" />;
      case 'grade-1-2': return <BookOpen className="w-5 h-5 text-emerald-500" />;
      case 'k12-foundations': return <GraduationCap className="w-5 h-5 text-purple-500" />;
    }
  };

  return (
    <div className="bg-[#FFF9F0] border-b-4 border-[#FFD93D] py-3.5 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="flex items-center space-x-2">
          <span className="text-xs font-black uppercase tracking-widest text-[#2D2D2D]/60">
            CURRICULUM TIER:
          </span>
          <span className="text-xs font-black text-[#2D2D2D] bg-white px-3 py-1 rounded-full border-2 border-[#FFD93D] shadow-xs">
            {AGE_TIER_INFO[currentTier].gradeLabel} ({AGE_TIER_INFO[currentTier].ageRange})
          </span>
        </div>

        {/* Tier Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full md:w-auto">
          {tiers.map((t) => {
            const info = AGE_TIER_INFO[t];
            const isSelected = currentTier === t;

            return (
              <button
                key={t}
                onClick={() => {
                  playSoundEffect('click', settings.soundEffects);
                  onSelectTier(t);
                  speakText(`Selected curriculum tier: ${info.name}. ${info.gradeLabel}`, settings.voiceGuidance);
                }}
                className={`flex items-center space-x-2 px-3 py-2 rounded-2xl border-4 text-left transition-all cursor-pointer ${
                  isSelected
                    ? `bg-white border-[#4D96FF] shadow-[0_4px_0_#3A72C1] scale-102`
                    : `bg-white border-gray-200 hover:border-[#FFD93D] opacity-80 hover:opacity-100 active:translate-y-0.5`
                }`}
              >
                <div className="p-1.5 rounded-xl bg-[#FFF9F0] border border-gray-200">
                  {getTierIcon(t)}
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-black text-[#2D2D2D] truncate">{info.name}</div>
                  <div className="text-[10px] text-gray-500 font-bold">{info.ageRange}</div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
