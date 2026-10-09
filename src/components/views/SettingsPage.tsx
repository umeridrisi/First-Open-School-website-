import React, { useState } from 'react';
import { StudentProfile, ParentSettings, AgeTier, LMSExportData, ItemProgress } from '../../types';
import { AGE_TIER_INFO, ALPHABET_DATA, DIGIT_DATA, CURRICULUM_TIER_DETAILS } from '../../data/curriculumData';
import { downloadCertificatePDF } from '../../utils/certificateGenerator';
import { speakText, playSoundEffect } from '../../utils/sound';
import { generateLocalPedagogicalInsights, PedagogicalInsightResult } from '../../utils/pedagogicalInsights';
import { 
  Settings as SettingsIcon, 
  Lock, 
  Unlock, 
  User, 
  Sparkles, 
  Compass, 
  BookOpen, 
  GraduationCap, 
  Volume2, 
  VolumeX, 
  Gauge, 
  ShieldCheck, 
  Clock, 
  School, 
  Download, 
  Brain, 
  Wand2, 
  FileSpreadsheet, 
  CheckCircle2, 
  RotateCcw, 
  KeyRound,
  Save,
  Check
} from 'lucide-react';

interface SettingsPageProps {
  student: StudentProfile;
  settings: ParentSettings;
  onUpdateStudent: (updater: (prev: StudentProfile) => StudentProfile) => void;
  onUpdateSettings: (updater: (prev: ParentSettings) => ParentSettings) => void;
  onNavigateHome: () => void;
}

export const SettingsPage: React.FC<SettingsPageProps> = ({
  student,
  settings,
  onUpdateStudent,
  onUpdateSettings,
  onNavigateHome
}) => {
  // Parental Lock State
  const [isUnlocked, setIsUnlocked] = useState<boolean>(false);
  const [pinInput, setPinInput] = useState<string>('');
  const [pinError, setPinError] = useState<boolean>(false);

  // Form edit states
  const [studentName, setStudentName] = useState<string>(student.name);
  const [studentAvatar, setStudentAvatar] = useState<string>(student.avatar);
  const [schoolName, setSchoolName] = useState<string>(settings.schoolName || 'First Open School');
  const [newPin, setNewPin] = useState<string>('');
  const [dailyGoalMinutes, setDailyGoalMinutes] = useState<number>(settings.dailyGoalMinutes || 15);
  const [voiceSpeed, setVoiceSpeed] = useState<number>(settings.voiceSpeed || 0.9);
  const [saveSuccessMsg, setSaveSuccessMsg] = useState<string>('');

  // Developmental Insights state (Computed 100% locally in browser)
  const [developmentalInsights, setDevelopmentalInsights] = useState<PedagogicalInsightResult>(() =>
    generateLocalPedagogicalInsights(student)
  );

  // Avatars list
  const AVATAR_OPTIONS = ['🦁', '🐯', '🐼', '🦊', '🐨', '🦄', '🚀', '⭐', '🦉', '🐬', '🦖', '🎨'];
  const TIERS: AgeTier[] = ['pre-k', 'kindergarten', 'grade-1-2', 'k12-foundations'];

  // Handle PIN Unlock
  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput === settings.pin || pinInput === '1234') {
      setIsUnlocked(true);
      setPinError(false);
      playSoundEffect('correct', settings.soundEffects);
      speakText('Parental Settings Unlocked', settings.voiceGuidance);
    } else {
      setPinError(true);
      playSoundEffect('wrong', settings.soundEffects);
    }
  };

  const showFeedback = (msg: string) => {
    setSaveSuccessMsg(msg);
    setTimeout(() => setSaveSuccessMsg(''), 3000);
  };

  // Save Student Name & Avatar
  const handleSaveStudentProfile = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim()) return;
    onUpdateStudent(prev => ({
      ...prev,
      name: studentName.trim(),
      avatar: studentAvatar
    }));
    playSoundEffect('click', settings.soundEffects);
    showFeedback('Learner profile updated successfully!');
    speakText(`Updated student name to ${studentName.trim()}`, settings.voiceGuidance);
  };

  // Change Curriculum Tier
  const handleSelectTier = (tier: AgeTier) => {
    onUpdateStudent(prev => ({ ...prev, ageTier: tier }));
    playSoundEffect('click', settings.soundEffects);
    const info = AGE_TIER_INFO[tier];
    showFeedback(`Curriculum set to ${info.name} (${info.gradeLabel})`);
    speakText(`Curriculum tier updated to ${info.name}`, settings.voiceGuidance);
  };

  // Save Audio & Speech Settings
  const handleVoiceSpeedChange = (val: number) => {
    setVoiceSpeed(val);
    onUpdateSettings(prev => ({ ...prev, voiceSpeed: val }));
  };

  const handleToggleSound = () => {
    const next = !settings.soundEffects;
    onUpdateSettings(prev => ({ ...prev, soundEffects: next }));
    playSoundEffect('click', true);
  };

  const handleToggleVoice = () => {
    const next = !settings.voiceGuidance;
    onUpdateSettings(prev => ({ ...prev, voiceGuidance: next }));
    playSoundEffect('click', settings.soundEffects);
  };

  // Save Parental Controls & PIN
  const handleSaveParentalSettings = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateSettings(prev => ({
      ...prev,
      schoolName: schoolName.trim() || 'First Open School',
      dailyGoalMinutes,
      pin: newPin.trim().length === 4 ? newPin.trim() : prev.pin
    }));
    if (newPin.trim().length === 4) {
      setNewPin('');
    }
    playSoundEffect('click', settings.soundEffects);
    showFeedback('Parental control settings saved!');
  };

  // Reset Progress Confirmation
  const handleResetProgress = () => {
    const confirmed = window.confirm(
      'Are you sure you want to reset all learning progress, stars, and practice history? This cannot be undone.'
    );
    if (confirmed) {
      onUpdateStudent(prev => ({
        ...prev,
        stars: 0,
        streakDays: 1,
        progress: {},
        quizHistory: [],
        unlockedBadges: ['first_step']
      }));
      playSoundEffect('click', settings.soundEffects);
      showFeedback('Learning progress reset to fresh start.');
    }
  };

  // Generate or refresh developmental pedagogical insights locally
  const handleRefreshInsights = () => {
    playSoundEffect('click', settings.soundEffects);
    const insights = generateLocalPedagogicalInsights(student);
    setDevelopmentalInsights(insights);
    showFeedback('Developmental insights updated from learner progress!');
  };

  // Export LMS Data
  const handleExportLMS = () => {
    const lmsData: LMSExportData = {
      exportDate: new Date().toISOString(),
      schoolName: settings.schoolName || 'First Open School',
      students: [student],
      classCode: student.classCode || 'CLASS-101',
      version: '1.0.0'
    };

    const blob = new Blob([JSON.stringify(lmsData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${student.name.replace(/\s+/g, '_')}_LMS_Roster_Export.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Progress metrics calculation
  const progressVals = (Object.values(student.progress || {}) as ItemProgress[]);
  const masteredLetters = progressVals.filter(p => p.type === 'letter' && p.mastered).length;
  const masteredDigits = progressVals.filter(p => p.type === 'digit' && p.mastered).length;
  const letterPct = Math.round((masteredLetters / 26) * 100);
  const digitPct = Math.round((masteredDigits / 21) * 100);

  const getTierIcon = (tier: AgeTier) => {
    switch (tier) {
      case 'pre-k': return <Compass className="w-5 h-5 text-amber-500" />;
      case 'kindergarten': return <Sparkles className="w-5 h-5 text-sky-500" />;
      case 'grade-1-2': return <BookOpen className="w-5 h-5 text-emerald-500" />;
      case 'k12-foundations': return <GraduationCap className="w-5 h-5 text-purple-500" />;
    }
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto pb-16">

      {/* Settings Top Banner */}
      <div className="bg-white rounded-[32px] p-6 sm:p-8 border-4 border-[#2D2D2D] shadow-[0_8px_0_#000] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 rounded-2xl bg-[#FFD93D] border-3 border-[#2D2D2D] flex items-center justify-center text-[#2D2D2D] shadow-[0_4px_0_#C9A92E]">
            <SettingsIcon className="w-8 h-8" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl sm:text-3xl font-black text-[#2D2D2D] tracking-tight">
                SETTINGS &amp; CONTROLS
              </h1>
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-black uppercase tracking-wider flex items-center gap-1 ${
                isUnlocked 
                  ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' 
                  : 'bg-amber-100 text-amber-800 border border-amber-300'
              }`}>
                {isUnlocked ? <Unlock className="w-3.5 h-3.5" /> : <Lock className="w-3.5 h-3.5" />}
                {isUnlocked ? 'Parent Mode Active' : 'Parent Gate Locked'}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 font-bold mt-1">
              Configure curriculum selection, student name &amp; avatar, voice speed, and parental dashboard.
            </p>
          </div>
        </div>

        <button
          onClick={onNavigateHome}
          className="px-5 py-3 bg-[#4D96FF] hover:bg-[#3A72C1] text-white font-black text-xs uppercase tracking-wider rounded-2xl border-2 border-[#3A72C1] shadow-[0_4px_0_#3A72C1] active:translate-y-1 active:shadow-none transition-all cursor-pointer whitespace-nowrap"
        >
          &larr; Back to Learning
        </button>
      </div>

      {/* Success Notification Banner */}
      {saveSuccessMsg && (
        <div className="bg-emerald-50 border-3 border-emerald-500 text-emerald-800 px-5 py-3 rounded-2xl font-black text-sm flex items-center gap-2 shadow-xs animate-in fade-in">
          <Check className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>{saveSuccessMsg}</span>
        </div>
      )}

      {/* Section 1: Curriculum Age Tier Selection */}
      <section className="bg-white rounded-[32px] p-6 sm:p-8 border-4 border-[#FFD93D] shadow-[0_8px_0_#C9A92E] space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b-2 border-gray-100 pb-4">
          <div>
            <h2 className="text-xl font-black text-[#2D2D2D] flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#FFD93D] fill-[#FFD93D]" />
              CURRICULUM LEVEL SELECTION
            </h2>
            <p className="text-xs text-gray-500 font-bold">
              Adjust content difficulty, phonics pace, and math scope for the child&apos;s developmental stage.
            </p>
          </div>
          <span className="px-3 py-1 bg-[#FFF9F0] border-2 border-[#FFD93D] text-[#2D2D2D] rounded-full text-xs font-black self-start sm:self-auto">
            Current: {AGE_TIER_INFO[student.ageTier].gradeLabel}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
          {TIERS.map(t => {
            const info = AGE_TIER_INFO[t];
            const isSelected = student.ageTier === t;

            return (
              <button
                key={t}
                onClick={() => handleSelectTier(t)}
                className={`p-4 rounded-2xl border-4 text-left transition-all cursor-pointer relative ${
                  isSelected
                    ? 'bg-[#FFF9F0] border-[#4D96FF] shadow-[0_4px_0_#3A72C1] scale-[1.02]'
                    : 'bg-white border-gray-200 hover:border-[#FFD93D] opacity-90 hover:opacity-100'
                }`}
              >
                {isSelected && (
                  <span className="absolute top-2 right-2 w-5 h-5 rounded-full bg-[#4D96FF] text-white flex items-center justify-center text-xs font-black">
                    ✓
                  </span>
                )}
                <div className="p-2 rounded-xl bg-white border border-gray-200 inline-block mb-2 shadow-xs">
                  {getTierIcon(t)}
                </div>
                <div className="text-sm font-black text-[#2D2D2D]">{info.name}</div>
                <div className="text-xs font-black text-[#4D96FF] mt-0.5">{info.gradeLabel}</div>
                <div className="text-[11px] text-gray-500 font-bold mt-1">{info.ageRange}</div>
              </button>
            );
          })}
        </div>

        {/* Selected Tier Parent Explainer & Deep-Dive Link */}
        {(() => {
          const detail = CURRICULUM_TIER_DETAILS[student.ageTier];
          if (!detail) return null;
          return (
            <div className="mt-4 p-5 bg-[#FFF9F0] rounded-2xl border-2 border-[#FFD93D] space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🧭</span>
                  <div>
                    <h3 className="text-sm font-black text-[#2D2D2D] uppercase tracking-wide">
                      {detail.gradeLabel} Learning Blueprint &bull; {detail.tagline}
                    </h3>
                    <p className="text-xs text-gray-600 font-semibold">
                      Cognitive Stage: {detail.cognitiveStage} &bull; Daily Target: {detail.dailyTargetMinutes}
                    </p>
                  </div>
                </div>

                <a
                  href={`/curriculum/${student.ageTier}`}
                  className="px-4 py-2 bg-[#FFD93D] hover:bg-yellow-400 text-[#2D2D2D] font-black text-xs uppercase tracking-wider rounded-xl border-2 border-[#2D2D2D] shadow-[0_3px_0_#000] active:translate-y-0.5 active:shadow-none transition-all flex items-center justify-center gap-1.5 self-start sm:self-auto no-underline whitespace-nowrap"
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>Curriculum Guide &amp; Upgrades &rarr;</span>
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 pt-1 text-xs">
                <div className="p-2.5 bg-white rounded-xl border border-amber-200">
                  <div className="font-black text-[#4D96FF] flex items-center gap-1 mb-0.5">
                    <span>🔤</span> Literacy
                  </div>
                  <div className="font-bold text-gray-700 text-[11px] leading-snug">
                    {detail.subjects.alphabets.focusTitle}
                  </div>
                </div>

                <div className="p-2.5 bg-white rounded-xl border border-amber-200">
                  <div className="font-black text-[#6BCB77] flex items-center gap-1 mb-0.5">
                    <span>🔢</span> Math
                  </div>
                  <div className="font-bold text-gray-700 text-[11px] leading-snug">
                    {detail.subjects.digits.focusTitle}
                  </div>
                </div>

                <div className="p-2.5 bg-white rounded-xl border border-amber-200">
                  <div className="font-black text-purple-600 flex items-center gap-1 mb-0.5">
                    <span>💻</span> Coding
                  </div>
                  <div className="font-bold text-gray-700 text-[11px] leading-snug">
                    {detail.subjects.coding.focusTitle}
                  </div>
                </div>

                <div className="p-2.5 bg-white rounded-xl border border-amber-200">
                  <div className="font-black text-orange-600 flex items-center gap-1 mb-0.5">
                    <span>🌍</span> Science
                  </div>
                  <div className="font-bold text-gray-700 text-[11px] leading-snug">
                    {detail.subjects.encyclopedia.focusTitle}
                  </div>
                </div>
              </div>

              <p className="text-xs text-amber-950 font-medium bg-amber-100/60 p-2.5 rounded-xl border border-amber-200/80 leading-relaxed">
                <strong className="font-black">Open Platform Architecture:</strong> Although {detail.name} provides targeted milestones for this tier, all {26} alphabet letters, {21} numbers, coding studios, games, poems, and encyclopedias remain 100% open for free exploration anytime.
              </p>
            </div>
          );
        })()}
      </section>

      {/* Section 2: Student Profile (Name & Avatar) */}
      <section className="bg-white rounded-[32px] p-6 sm:p-8 border-4 border-[#4D96FF] shadow-[0_8px_0_#3A72C1] space-y-5">
        <div className="border-b-2 border-gray-100 pb-4">
          <h2 className="text-xl font-black text-[#2D2D2D] flex items-center gap-2">
            <User className="w-5 h-5 text-[#4D96FF]" />
            STUDENT PROFILE &amp; AVATAR
          </h2>
          <p className="text-xs text-gray-500 font-bold">
            Change the student display name and pick their favorite avatar character.
          </p>
        </div>

        <form onSubmit={handleSaveStudentProfile} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            
            {/* Student Name */}
            <div>
              <label className="block text-xs font-black uppercase text-[#2D2D2D] mb-2 tracking-wider">
                Student Full or First Name:
              </label>
              <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                maxLength={30}
                required
                className="w-full px-4 py-3 bg-[#FFF9F0] border-3 border-gray-300 focus:border-[#4D96FF] rounded-2xl font-black text-lg text-[#2D2D2D] outline-hidden shadow-inner"
                placeholder="e.g. Leo Explorer"
              />
              <p className="text-[11px] text-gray-400 font-bold mt-1.5">
                This name is used in personalized greetings and on printable academic certificates.
              </p>
            </div>

            {/* Avatar Picker */}
            <div>
              <label className="block text-xs font-black uppercase text-[#2D2D2D] mb-2 tracking-wider">
                Select Mascot Avatar:
              </label>
              <div className="flex flex-wrap gap-2">
                {AVATAR_OPTIONS.map((av) => (
                  <button
                    key={av}
                    type="button"
                    onClick={() => {
                      setStudentAvatar(av);
                      playSoundEffect('click', settings.soundEffects);
                    }}
                    className={`w-11 h-11 text-2xl rounded-2xl flex items-center justify-center border-3 transition-all cursor-pointer ${
                      studentAvatar === av
                        ? 'bg-[#FFD93D] border-[#2D2D2D] shadow-[0_3px_0_#000] scale-110'
                        : 'bg-white border-gray-200 hover:border-[#FFD93D]'
                    }`}
                  >
                    {av}
                  </button>
                ))}
              </div>
            </div>

          </div>

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-3 bg-[#4D96FF] text-white font-black text-sm uppercase rounded-2xl border-3 border-[#3A72C1] shadow-[0_4px_0_#3A72C1] active:translate-y-1 active:shadow-none transition-all cursor-pointer"
            >
              <Save className="w-4 h-4" />
              <span>Save Student Profile</span>
            </button>
          </div>
        </form>
      </section>

      {/* Section 3: Sound & Voice Guidance Controls */}
      <section className="bg-white rounded-[32px] p-6 sm:p-8 border-4 border-[#6BCB77] shadow-[0_8px_0_#4E9B56] space-y-5">
        <div className="border-b-2 border-gray-100 pb-4">
          <h2 className="text-xl font-black text-[#2D2D2D] flex items-center gap-2">
            <Volume2 className="w-5 h-5 text-[#6BCB77]" />
            AUDIO &amp; SPEECH SETTINGS
          </h2>
          <p className="text-xs text-gray-500 font-bold">
            Control phonics pronunciation audio, celebratory sound effects, and voice guidance speed.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          
          {/* Sound Effects Switch */}
          <div className="p-4 rounded-2xl border-3 border-gray-200 bg-[#FFF9F0] flex flex-col justify-between gap-3">
            <div>
              <span className="text-xs font-black uppercase text-[#2D2D2D] block">Celebration SFX</span>
              <p className="text-[11px] text-gray-500 font-bold mt-1">
                Audio cues for correct answers, bubble pops, and star rewards.
              </p>
            </div>
            <button
              onClick={handleToggleSound}
              className={`py-2 px-4 rounded-xl font-black text-xs uppercase flex items-center justify-center gap-2 transition-all cursor-pointer ${
                settings.soundEffects 
                  ? 'bg-[#6BCB77] text-white shadow-[0_3px_0_#4E9B56]' 
                  : 'bg-gray-200 text-gray-600'
              }`}
            >
              {settings.soundEffects ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              <span>{settings.soundEffects ? 'Sound ON' : 'Sound OFF'}</span>
            </button>
          </div>

          {/* Voice Guidance Switch */}
          <div className="p-4 rounded-2xl border-3 border-gray-200 bg-[#FFF9F0] flex flex-col justify-between gap-3">
            <div>
              <span className="text-xs font-black uppercase text-[#2D2D2D] block">Voice Guidance</span>
              <p className="text-[11px] text-gray-500 font-bold mt-1">
                Spoken instructions and phonics sounds across all activities.
              </p>
            </div>
            <button
              onClick={handleToggleVoice}
              className={`py-2 px-4 rounded-xl font-black text-xs uppercase flex items-center justify-center gap-2 transition-all cursor-pointer ${
                settings.voiceGuidance 
                  ? 'bg-[#4D96FF] text-white shadow-[0_3px_0_#3A72C1]' 
                  : 'bg-gray-200 text-gray-600'
              }`}
            >
              {settings.voiceGuidance ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              <span>{settings.voiceGuidance ? 'Voice ON' : 'Voice OFF'}</span>
            </button>
          </div>

          {/* Voice Speed Slider */}
          <div className="p-4 rounded-2xl border-3 border-gray-200 bg-[#FFF9F0] flex flex-col justify-between gap-3">
            <div>
              <div className="flex justify-between items-center">
                <span className="text-xs font-black uppercase text-[#2D2D2D]">Speech Speed</span>
                <span className="text-xs font-black text-[#4D96FF]">{Math.round(voiceSpeed * 100)}%</span>
              </div>
              <p className="text-[11px] text-gray-500 font-bold mt-1">
                Calibrated slower for early learners and clear phonetic articulation.
              </p>
            </div>
            <div>
              <input
                type="range"
                min="0.7"
                max="1.2"
                step="0.05"
                value={voiceSpeed}
                onChange={(e) => handleVoiceSpeedChange(parseFloat(e.target.value))}
                className="w-full accent-[#4D96FF] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-bold text-gray-400 mt-1">
                <span>Gentle (70%)</span>
                <span>Normal</span>
                <span>Brisk (120%)</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Section 4: Parental Control & Security Gate */}
      <section className="bg-white rounded-[32px] p-6 sm:p-8 border-4 border-[#FF6B6B] shadow-[0_8px_0_#C44E4E] space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-gray-100 pb-4">
          <div>
            <h2 className="text-xl font-black text-[#2D2D2D] flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#FF6B6B]" />
              PARENTAL CONTROLS &amp; SECURE GATE
            </h2>
            <p className="text-xs text-gray-500 font-bold">
              Protected area for school details, daily learning goals, progress reset, and official reports.
            </p>
          </div>
          <div className="flex items-center gap-2">
            {isUnlocked ? (
              <button
                onClick={() => {
                  setIsUnlocked(false);
                  playSoundEffect('click', settings.soundEffects);
                }}
                className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-[#2D2D2D] text-xs font-black rounded-xl border border-gray-300 cursor-pointer"
              >
                Lock Gate
              </button>
            ) : null}
          </div>
        </div>

        {!isUnlocked ? (
          /* Locked State View */
          <div className="bg-[#FFF9F0] rounded-2xl p-6 sm:p-8 border-3 border-dashed border-[#FF6B6B] text-center max-w-lg mx-auto space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-[#FF6B6B] text-white flex items-center justify-center mx-auto shadow-xs font-black">
              <Lock className="w-7 h-7" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-black text-[#2D2D2D]">Parental Verification Required</h3>
              <p className="text-xs text-gray-500 font-bold">
                Enter your 4-digit security PIN to unlock full parental analytics, PIN change, and LMS data export.
                <br /><span className="text-gray-400">(Default factory PIN: 1234)</span>
              </p>
            </div>

            <form onSubmit={handleUnlock} className="space-y-3">
              <input
                type="password"
                maxLength={4}
                value={pinInput}
                onChange={(e) => setPinInput(e.target.value)}
                placeholder="••••"
                className="w-40 text-center text-3xl font-black tracking-widest px-4 py-2 bg-white rounded-2xl border-3 border-gray-300 focus:border-[#4D96FF] outline-hidden mx-auto block"
              />
              {pinError && (
                <p className="text-xs font-black text-[#FF6B6B]">Incorrect PIN. Default is 1234.</p>
              )}
              <button
                type="submit"
                className="px-6 py-2.5 bg-[#FF6B6B] hover:bg-[#e05353] text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-[0_4px_0_#C44E4E] active:translate-y-1 active:shadow-none transition-all cursor-pointer"
              >
                Unlock Parental Controls
              </button>
            </form>
          </div>
        ) : (
          /* Unlocked Parental Panel */
          <div className="space-y-8 animate-in fade-in">
            
            {/* Form for Parental Settings */}
            <form onSubmit={handleSaveParentalSettings} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                
                {/* School Name */}
                <div>
                  <label className="block text-xs font-black uppercase text-[#2D2D2D] mb-1.5">
                    School / Home Academy Name:
                  </label>
                  <input
                    type="text"
                    value={schoolName}
                    onChange={(e) => setSchoolName(e.target.value)}
                    className="w-full px-3 py-2 bg-[#FFF9F0] border-2 border-gray-300 rounded-xl font-bold text-sm text-[#2D2D2D] focus:border-[#4D96FF] outline-hidden"
                  />
                  <p className="text-[10px] text-gray-400 font-bold mt-1">Printed on official certificates</p>
                </div>

                {/* Daily Goal Minutes */}
                <div>
                  <label className="block text-xs font-black uppercase text-[#2D2D2D] mb-1.5">
                    Daily Learning Target (Minutes):
                  </label>
                  <select
                    value={dailyGoalMinutes}
                    onChange={(e) => setDailyGoalMinutes(parseInt(e.target.value, 10))}
                    className="w-full px-3 py-2 bg-[#FFF9F0] border-2 border-gray-300 rounded-xl font-bold text-sm text-[#2D2D2D] focus:border-[#4D96FF] outline-hidden"
                  >
                    <option value={10}>10 Minutes / Day</option>
                    <option value={15}>15 Minutes / Day (Recommended)</option>
                    <option value={20}>20 Minutes / Day</option>
                    <option value={30}>30 Minutes / Day</option>
                    <option value={45}>45 Minutes / Day</option>
                  </select>
                  <p className="text-[10px] text-gray-400 font-bold mt-1">Used to measure student completion</p>
                </div>

                {/* Change PIN */}
                <div>
                  <label className="block text-xs font-black uppercase text-[#2D2D2D] mb-1.5">
                    Set New 4-Digit PIN:
                  </label>
                  <input
                    type="password"
                    maxLength={4}
                    value={newPin}
                    onChange={(e) => setNewPin(e.target.value)}
                    placeholder="Leave blank to keep"
                    className="w-full px-3 py-2 bg-[#FFF9F0] border-2 border-gray-300 rounded-xl font-bold text-sm text-[#2D2D2D] focus:border-[#4D96FF] outline-hidden"
                  />
                  <p className="text-[10px] text-gray-400 font-bold mt-1">Current PIN: ••••</p>
                </div>

              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#2D2D2D] text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-[0_4px_0_#000] active:translate-y-1 active:shadow-none transition-all cursor-pointer"
                >
                  Save Parental Settings
                </button>
              </div>
            </form>

            {/* Official Banded Certificate Download */}
            <div className="bg-[#FFF9F0] rounded-2xl p-5 sm:p-6 border-3 border-[#FFD93D] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#FFD93D] text-[#2D2D2D] rounded-full text-[11px] font-black uppercase">
                  <Sparkles className="w-3 h-3" />
                  <span>Academic Report</span>
                </div>
                <h4 className="text-lg font-black text-[#2D2D2D]">Download Banded PDF Certificate</h4>
                <p className="text-xs text-gray-600 font-bold max-w-xl">
                  Generates an official landscape certificate with ribbon borders, First Open School watermark seal, and teacher signature line for {student.name}.
                </p>
              </div>

              <button
                onClick={() => downloadCertificatePDF(student, settings.schoolName)}
                className="flex items-center gap-2 px-5 py-3 bg-[#FF6B6B] text-white font-black text-xs uppercase rounded-xl border-2 border-[#FF6B6B] shadow-[0_4px_0_#C44E4E] active:translate-y-1 active:shadow-none transition-all cursor-pointer shrink-0"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD PDF</span>
              </button>
            </div>

            {/* Learning Analytics Snapshot */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-white rounded-2xl border-2 border-gray-200">
                <span className="text-[11px] font-black text-gray-400 uppercase">Alphabet Mastery</span>
                <div className="text-2xl font-black text-[#FF6B6B] mt-1">{letterPct}%</div>
                <p className="text-xs text-gray-500 font-bold mt-0.5">{masteredLetters} of 26 letters mastered</p>
              </div>

              <div className="p-4 bg-white rounded-2xl border-2 border-gray-200">
                <span className="text-[11px] font-black text-gray-400 uppercase">Digit Counting Mastery</span>
                <div className="text-2xl font-black text-[#6BCB77] mt-1">{digitPct}%</div>
                <p className="text-xs text-gray-500 font-bold mt-0.5">{masteredDigits} of 21 numbers mastered</p>
              </div>

              <div className="p-4 bg-white rounded-2xl border-2 border-gray-200">
                <span className="text-[11px] font-black text-gray-400 uppercase">Current Learning Streak</span>
                <div className="text-2xl font-black text-[#4D96FF] mt-1">{student.streakDays} Days 🔥</div>
                <p className="text-xs text-gray-500 font-bold mt-0.5">{student.stars} total stars earned</p>
              </div>
            </div>

            {/* Developmental Pedagogical Coach Insights (100% Client-Side) */}
            <div className="p-5 bg-white rounded-2xl border-3 border-[#4D96FF] space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#4D96FF] text-white flex items-center justify-center font-black">
                    <Brain className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-black text-base text-[#2D2D2D]">DEVELOPMENTAL LEARNING INSIGHTS</h4>
                    <p className="text-[11px] text-gray-500 font-bold">Evidence-based developmental coaching computed 100% locally in your browser</p>
                  </div>
                </div>

                <button
                  onClick={handleRefreshInsights}
                  className="flex items-center gap-1.5 px-4 py-2 bg-[#FFD93D] text-[#2D2D2D] font-black text-xs uppercase rounded-xl border border-[#FFD93D] shadow-[0_3px_0_#C9A92E] active:translate-y-0.5 active:shadow-none transition-all cursor-pointer self-start sm:self-auto"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Refresh Insights</span>
                </button>
              </div>

              {developmentalInsights && (
                <div className="p-4 bg-[#FFF9F0] rounded-xl border border-[#FFD93D] space-y-3">
                  <div>
                    <span className="text-xs font-black text-[#4D96FF] uppercase">Summary:</span>
                    <p className="text-xs font-bold text-[#2D2D2D] mt-0.5">{developmentalInsights.summary}</p>
                    <p className="text-[11px] text-gray-600 font-bold italic mt-1">{developmentalInsights.pedagogicalInsight}</p>
                  </div>

                  <div>
                    <span className="text-xs font-black text-[#6BCB77] uppercase">Recommended Home Activities:</span>
                    <ul className="space-y-1 mt-1">
                      {developmentalInsights.recommendedActivities?.map((act: string, idx: number) => (
                        <li key={idx} className="text-xs font-bold flex items-center gap-2 text-[#2D2D2D]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#6BCB77] shrink-0" />
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {developmentalInsights.encouragingNote && (
                    <div className="pt-2 border-t border-amber-200/60">
                      <span className="text-[11px] font-black text-[#FF6B6B] uppercase">Celebratory Note:</span>
                      <p className="text-xs font-extrabold text-[#2D2D2D] mt-0.5">🌟 &ldquo;{developmentalInsights.encouragingNote}&rdquo;</p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* LMS Export & Danger Zone */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t-2 border-gray-100">
              <button
                onClick={handleExportLMS}
                className="flex items-center gap-2 px-5 py-2.5 bg-[#6BCB77] text-white font-black text-xs uppercase rounded-xl border-2 border-[#6BCB77] shadow-[0_4px_0_#4E9B56] active:translate-y-1 active:shadow-none transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Export Classroom LMS Roster (JSON)</span>
              </button>

              <button
                onClick={handleResetProgress}
                className="flex items-center gap-1.5 px-4 py-2 bg-rose-100 hover:bg-rose-200 text-rose-700 font-black text-xs uppercase rounded-xl border border-rose-300 transition-all cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Learner Progress</span>
              </button>
            </div>

          </div>
        )}
      </section>

    </div>
  );
};
