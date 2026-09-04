import React from 'react';
import { Sparkles, Shield, Wifi, WifiOff, Volume2, VolumeX, Award, Flame, User, Lock } from 'lucide-react';
import { StudentProfile, ParentSettings } from '../types';
import { speakText, playSoundEffect } from '../utils/sound';

interface HeaderProps {
  student: StudentProfile;
  settings: ParentSettings;
  onToggleParentDashboard: () => void;
  onToggleSound: () => void;
  onUpdateStudentName: (name: string) => void;
  isOffline: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  student,
  settings,
  onToggleParentDashboard,
  onToggleSound,
  onUpdateStudentName,
  isOffline
}) => {
  const [isEditingName, setIsEditingName] = React.useState(false);
  const [tempName, setTempName] = React.useState(student.name);

  const handleSpeech = (text: string) => {
    speakText(text, settings.voiceGuidance, settings.voiceSpeed);
  };

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (tempName.trim()) {
      onUpdateStudentName(tempName.trim());
      setIsEditingName(false);
      speakText(`Hello ${tempName.trim()}! Welcome to First Open School!`, settings.voiceGuidance);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b-8 border-[#FFD93D] shadow-sm px-4 lg:px-8 py-3.5">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        
        {/* Brand & Logo */}
        <div className="flex items-center space-x-3.5">
          <div 
            className="w-12 h-12 bg-[#FF6B6B] rounded-xl flex items-center justify-center text-white font-black text-2xl shadow-[4px_4px_0px_#C44E4E] active:translate-y-1 active:shadow-none transition-all cursor-pointer"
            onClick={() => handleSpeech("First Open School. Learn Alphabets and Digits!")}
          >
            F
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="text-xl lg:text-2xl font-black tracking-tight text-[#4D96FF]">
                FIRST OPEN SCHOOL
              </h1>
              <span className="hidden sm:inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-black bg-[#6BCB77] text-white shadow-xs">
                <Shield className="w-3 h-3 mr-1 text-white" />
                Ad-Free & Safe
              </span>
            </div>
            <p className="text-xs text-gray-500 font-bold">
              Interactive Early Literacy & Numeracy
            </p>
          </div>
        </div>

        {/* Center: Student Name & Streak Counters */}
        <div className="flex items-center space-x-2 lg:space-x-4">
          {/* Student Profile Pill */}
          <div className="flex items-center space-x-2 bg-[#FFF9F0] p-1.5 pr-3.5 rounded-2xl border-2 border-gray-200 shadow-xs">
            <span className="text-2xl p-1 bg-white rounded-xl border border-gray-200 shadow-xs">{student.avatar}</span>
            {isEditingName ? (
              <form onSubmit={handleNameSubmit} className="flex items-center">
                <input
                  type="text"
                  value={tempName}
                  onChange={(e) => setTempName(e.target.value)}
                  className="w-28 px-2 py-0.5 text-sm font-black text-[#2D2D2D] bg-white rounded-xl border-2 border-[#4D96FF] focus:outline-hidden"
                  autoFocus
                  onBlur={handleNameSubmit}
                />
              </form>
            ) : (
              <button
                onClick={() => {
                  setIsEditingName(true);
                  playSoundEffect('click', settings.soundEffects);
                }}
                className="text-sm font-extrabold text-[#2D2D2D] hover:text-[#4D96FF] flex items-center gap-1.5"
              >
                <span>{student.name}</span>
                <User className="w-3.5 h-3.5 text-gray-400" />
              </button>
            )}
          </div>

          {/* Stars & Streak */}
          <div className="flex items-center space-x-2">
            <div 
              className="flex items-center space-x-1 px-3 py-1.5 bg-[#FFD93D] text-[#2D2D2D] rounded-2xl font-black text-sm shadow-[0_4px_0_#C9A92E] active:translate-y-1 active:shadow-none transition-all cursor-pointer"
              onClick={() => {
                playSoundEffect('star', settings.soundEffects);
                handleSpeech(`You have earned ${student.stars} stars!`);
              }}
            >
              <span className="text-base">⭐</span>
              <span>{student.stars}</span>
            </div>

            <div 
              className="flex items-center space-x-1.5 px-3 py-1.5 bg-[#FF6B6B] text-white rounded-2xl font-black text-sm shadow-[0_4px_0_#C44E4E] active:translate-y-1 active:shadow-none transition-all cursor-pointer"
              onClick={() => {
                playSoundEffect('click', settings.soundEffects);
                handleSpeech(`${student.streakDays} day learning streak! Keep going!`);
              }}
            >
              <Flame className="w-4 h-4 text-white fill-white" />
              <span>{student.streakDays}d</span>
            </div>
          </div>
        </div>

        {/* Right Controls: Offline Badge, Sound Toggle, Parental Gate */}
        <div className="flex items-center space-x-2">
          {/* Offline Indicator */}
          <div 
            className={`hidden md:flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-black border-2 ${
              isOffline 
                ? 'bg-[#FFD93D]/20 text-[#2D2D2D] border-[#FFD93D]' 
                : 'bg-[#6BCB77]/20 text-[#2D2D2D] border-[#6BCB77]'
            }`}
            title={isOffline ? "Offline mode active - All games available!" : "Connected - Online Mode"}
          >
            {isOffline ? (
              <>
                <WifiOff className="w-3.5 h-3.5 text-[#FF6B6B]" />
                <span>OFFLINE READY</span>
              </>
            ) : (
              <>
                <Wifi className="w-3.5 h-3.5 text-[#6BCB77]" />
                <span>ONLINE</span>
              </>
            )}
          </div>

          {/* Sound & Voice Toggle */}
          <button
            onClick={() => {
              onToggleSound();
              playSoundEffect('click', true);
            }}
            className={`p-2.5 rounded-2xl border-2 transition-all font-black ${
              settings.soundEffects 
                ? 'bg-[#4D96FF] text-white border-[#3A72C1] shadow-[0_4px_0_#3A72C1] active:translate-y-1 active:shadow-none' 
                : 'bg-gray-100 text-gray-400 border-gray-300'
            }`}
            title="Toggle Voice Guidance & Sound Effects"
            aria-label="Toggle Sound"
          >
            {settings.soundEffects ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
          </button>

          {/* Parental Dashboard Button */}
          <button
            onClick={() => {
              playSoundEffect('click', settings.soundEffects);
              onToggleParentDashboard();
            }}
            className="flex items-center space-x-2 px-4 py-2 bg-[#2D2D2D] hover:bg-black text-white font-extrabold text-xs uppercase tracking-tight rounded-2xl shadow-[0_4px_0_#000] active:translate-y-1 active:shadow-none transition-all cursor-pointer"
          >
            <Lock className="w-4 h-4 text-[#FFD93D]" />
            <span className="hidden sm:inline">Parental Mode</span>
          </button>
        </div>

      </div>
    </header>
  );
};
