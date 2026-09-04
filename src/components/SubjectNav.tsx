import React from 'react';
import { ActiveTab, ParentSettings } from '../types';
import { speakText, playSoundEffect } from '../utils/sound';
import { 
  Sparkles, 
  PenTool, 
  CircleDot, 
  Utensils, 
  Grid2X2, 
  Trophy, 
  BookOpenCheck,
  Grid
} from 'lucide-react';

interface SubjectNavProps {
  activeTab: ActiveTab;
  onSelectTab: (tab: ActiveTab) => void;
  settings: ParentSettings;
}

export const SubjectNav: React.FC<SubjectNavProps> = ({ activeTab, onSelectTab, settings }) => {
  const navItems: { id: ActiveTab; label: string; icon: React.ReactNode; color: string; activeBg: string; voicePrompt: string }[] = [
    { 
      id: 'overview', 
      label: 'Home World', 
      icon: <Grid className="w-5 h-5" />, 
      color: 'text-[#4D96FF]', 
      activeBg: 'bg-white border-[#4D96FF] shadow-[0_4px_0_#3A72C1]',
      voicePrompt: 'Home Learning World'
    },
    { 
      id: 'alphabets', 
      label: 'Alphabets A-Z', 
      icon: <span className="text-xl font-black">Aa</span>, 
      color: 'text-[#FF6B6B]', 
      activeBg: 'bg-white border-[#FF6B6B] shadow-[0_4px_0_#C44E4E]',
      voicePrompt: 'Learn Alphabets and Phonics Sounds'
    },
    { 
      id: 'digits', 
      label: 'Digits 0-20', 
      icon: <span className="text-xl font-black">123</span>, 
      color: 'text-[#6BCB77]', 
      activeBg: 'bg-white border-[#6BCB77] shadow-[0_4px_0_#4E9B56]',
      voicePrompt: 'Learn Digits and Counting'
    },
    { 
      id: 'tracing', 
      label: 'Letter Tracing', 
      icon: <PenTool className="w-5 h-5" />, 
      color: 'text-[#FFD93D]', 
      activeBg: 'bg-white border-[#FFD93D] shadow-[0_4px_0_#C9A92E]',
      voicePrompt: 'Practice Letter and Digit Tracing'
    },
    { 
      id: 'bubble-pop', 
      label: 'Bubble Pop', 
      icon: <CircleDot className="w-5 h-5" />, 
      color: 'text-[#4D96FF]', 
      activeBg: 'bg-white border-[#4D96FF] shadow-[0_4px_0_#3A72C1]',
      voicePrompt: 'Play Bubble Pop Phonics Game'
    },
    { 
      id: 'counting-feast', 
      label: 'Monster Feast', 
      icon: <Utensils className="w-5 h-5" />, 
      color: 'text-[#FF6B6B]', 
      activeBg: 'bg-white border-[#FF6B6B] shadow-[0_4px_0_#C44E4E]',
      voicePrompt: 'Play Counting Monster Feast Game'
    },
    { 
      id: 'card-match', 
      label: 'Card Match', 
      icon: <Grid2X2 className="w-5 h-5" />, 
      color: 'text-[#6BCB77]', 
      activeBg: 'bg-white border-[#6BCB77] shadow-[0_4px_0_#4E9B56]',
      voicePrompt: 'Play Phonics Card Matching Game'
    },
    { 
      id: 'phonics-stories', 
      label: 'Story World', 
      icon: <BookOpenCheck className="w-5 h-5" />, 
      color: 'text-[#4D96FF]', 
      activeBg: 'bg-white border-[#4D96FF] shadow-[0_4px_0_#3A72C1]',
      voicePrompt: 'Read Interactive Phonics Stories'
    },
    { 
      id: 'assessment', 
      label: 'Star Quiz', 
      icon: <Trophy className="w-5 h-5 text-[#FFD93D] fill-[#FFD93D]" />, 
      color: 'text-[#2D2D2D]', 
      activeBg: 'bg-white border-[#FFD93D] shadow-[0_4px_0_#C9A92E]',
      voicePrompt: 'Take Gamified Assessment Quiz'
    }
  ];

  return (
    <nav className="bg-white border-b-8 border-[#FFD93D] py-3.5 px-4 lg:px-8 shadow-xs overflow-x-auto scrollbar-none">
      <div className="max-w-7xl mx-auto flex items-center space-x-3 min-w-max">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => {
                playSoundEffect('click', settings.soundEffects);
                onSelectTab(item.id);
                speakText(item.voicePrompt, settings.voiceGuidance);
              }}
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-2xl border-4 font-black text-sm transition-all transform active:translate-y-1 active:shadow-none cursor-pointer ${
                isActive
                  ? `${item.activeBg} ${item.color} scale-102`
                  : 'bg-[#FFF9F0] border-gray-200 text-[#2D2D2D]/70 hover:border-[#FFD93D] hover:text-[#2D2D2D]'
              }`}
            >
              <div className="flex items-center justify-center">{item.icon}</div>
              <span className="whitespace-nowrap uppercase tracking-tight">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
