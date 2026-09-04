import React, { useState, useEffect } from 'react';
import { 
  ActiveTab, 
  AgeTier, 
  StudentProfile, 
  ParentSettings, 
  LetterData, 
  DigitData 
} from './types';
import { Header } from './components/Header';
import { TierSelector } from './components/TierSelector';
import { SubjectNav } from './components/SubjectNav';
import { OverviewWorld } from './components/views/OverviewWorld';
import { AlphabetsExplorer } from './components/views/AlphabetsExplorer';
import { DigitsExplorer } from './components/views/DigitsExplorer';
import { TracingCanvas } from './components/games/TracingCanvas';
import { BubblePopGame } from './components/games/BubblePopGame';
import { CountingFeastGame } from './components/games/CountingFeastGame';
import { CardMatchGame } from './components/games/CardMatchGame';
import { PhonicsStoryReader } from './components/games/PhonicsStoryReader';
import { GamifiedQuiz } from './components/games/GamifiedQuiz';
import { ParentalDashboard } from './components/parent/ParentalDashboard';
import { playSoundEffect } from './utils/sound';

const INITIAL_STUDENT: StudentProfile = {
  id: 'student_1',
  name: 'Leo Explorer',
  avatar: '🦁',
  ageTier: 'kindergarten',
  stars: 12,
  streakDays: 3,
  lastActiveDate: new Date().toISOString(),
  classCode: 'CLASS-101',
  progress: {},
  unlockedBadges: ['first_step', 'alphabet_pro', 'streak_3'],
  quizHistory: []
};

const INITIAL_SETTINGS: ParentSettings = {
  pin: '1234',
  soundEffects: true,
  voiceGuidance: true,
  voiceSpeed: 0.9,
  offlineEnabled: true,
  dailyGoalMinutes: 15,
  schoolName: 'First Open School'
};

export default function App() {
  // Local storage state initialization
  const [student, setStudent] = useState<StudentProfile>(() => {
    try {
      const saved = localStorage.getItem('first_open_student');
      return saved ? JSON.parse(saved) : INITIAL_STUDENT;
    } catch {
      return INITIAL_STUDENT;
    }
  });

  const [settings, setSettings] = useState<ParentSettings>(() => {
    try {
      const saved = localStorage.getItem('first_open_settings');
      return saved ? JSON.parse(saved) : INITIAL_SETTINGS;
    } catch {
      return INITIAL_SETTINGS;
    }
  });

  const [activeTab, setActiveTab] = useState<ActiveTab>('overview');
  const [selectedTracingTarget, setSelectedTracingTarget] = useState<LetterData | DigitData | undefined>(undefined);
  const [isOffline, setIsOffline] = useState<boolean>(!navigator.onLine);
  const [showParentModal, setShowParentModal] = useState<boolean>(false);

  // Save state to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('first_open_student', JSON.stringify(student));
    } catch (err) {
      console.warn("Could not save student to localStorage:", err);
    }
  }, [student]);

  useEffect(() => {
    try {
      localStorage.setItem('first_open_settings', JSON.stringify(settings));
    } catch (err) {
      console.warn("Could not save settings to localStorage:", err);
    }
  }, [settings]);

  // Listen to offline/online events for seamless offline mode
  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Handlers
  const handleAwardStars = (amount: number) => {
    setStudent(prev => ({ ...prev, stars: prev.stars + amount }));
  };

  const handleUpdateTier = (tier: AgeTier) => {
    setStudent(prev => ({ ...prev, ageTier: tier }));
  };

  const handleUpdateStudentName = (name: string) => {
    setStudent(prev => ({ ...prev, name }));
  };

  const handleToggleSound = () => {
    setSettings(prev => ({ ...prev, soundEffects: !prev.soundEffects, voiceGuidance: !prev.voiceGuidance }));
  };

  const handleSelectLetterForTracing = (letter: LetterData) => {
    setSelectedTracingTarget(letter);
    setActiveTab('tracing');
  };

  const handleSelectDigitForTracing = (digit: DigitData) => {
    setSelectedTracingTarget(digit);
    setActiveTab('tracing');
  };

  const handleMarkItemPracticed = (itemId: string, type: 'letter' | 'digit' = 'letter') => {
    setStudent(prev => {
      const existing = prev.progress[itemId] || {
        itemId,
        type,
        timesPracticed: 0,
        accuracy: 80,
        lastPracticedDate: new Date().toISOString(),
        mastered: false
      };

      const timesPracticed = existing.timesPracticed + 1;
      const mastered = timesPracticed >= 2;

      return {
        ...prev,
        progress: {
          ...prev.progress,
          [itemId]: {
            ...existing,
            timesPracticed,
            mastered,
            lastPracticedDate: new Date().toISOString()
          }
        }
      };
    });
  };

  const handleSaveTracingProgress = (itemId: string, type: 'letter' | 'digit', accuracy: number) => {
    setStudent(prev => {
      const existing = prev.progress[itemId] || {
        itemId,
        type,
        timesPracticed: 0,
        accuracy: 80,
        lastPracticedDate: new Date().toISOString(),
        mastered: false
      };

      const timesPracticed = existing.timesPracticed + 1;
      const mastered = accuracy >= 80;

      return {
        ...prev,
        progress: {
          ...prev.progress,
          [itemId]: {
            ...existing,
            tracingAccuracy: accuracy,
            timesPracticed,
            mastered,
            lastPracticedDate: new Date().toISOString()
          }
        }
      };
    });
  };

  const handleSaveQuizResult = (score: number, total: number) => {
    setStudent(prev => ({
      ...prev,
      quizHistory: [
        ...prev.quizHistory,
        { date: new Date().toISOString(), score, total, ageTier: prev.ageTier }
      ]
    }));
  };

  return (
    <div className="min-h-screen bg-[#FFF9F0] font-sans text-[#2D2D2D] flex flex-col">
      
      {/* Header */}
      <Header
        student={student}
        settings={settings}
        onToggleParentDashboard={() => setShowParentModal(true)}
        onToggleSound={handleToggleSound}
        onUpdateStudentName={handleUpdateStudentName}
        isOffline={isOffline}
      />

      {/* Curriculum Age Tier Switcher */}
      <TierSelector
        currentTier={student.ageTier}
        onSelectTier={handleUpdateTier}
        settings={settings}
      />

      {/* Navigation Bar */}
      <SubjectNav
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        settings={settings}
      />

      {/* Main Interactive Workspace */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 lg:p-8">
        
        {activeTab === 'overview' && (
          <OverviewWorld
            student={student}
            settings={settings}
            onNavigate={setActiveTab}
          />
        )}

        {activeTab === 'alphabets' && (
          <AlphabetsExplorer
            student={student}
            settings={settings}
            onSelectLetterForTracing={handleSelectLetterForTracing}
            onMarkLetterPracticed={(char) => handleMarkItemPracticed(char, 'letter')}
          />
        )}

        {activeTab === 'digits' && (
          <DigitsExplorer
            student={student}
            settings={settings}
            onSelectDigitForTracing={handleSelectDigitForTracing}
            onMarkDigitPracticed={(val) => handleMarkItemPracticed(String(val), 'digit')}
          />
        )}

        {activeTab === 'tracing' && (
          <TracingCanvas
            initialTarget={selectedTracingTarget}
            student={student}
            settings={settings}
            onSaveProgress={handleSaveTracingProgress}
          />
        )}

        {activeTab === 'bubble-pop' && (
          <BubblePopGame
            student={student}
            settings={settings}
            onAwardStars={handleAwardStars}
          />
        )}

        {activeTab === 'counting-feast' && (
          <CountingFeastGame
            student={student}
            settings={settings}
            onAwardStars={handleAwardStars}
          />
        )}

        {activeTab === 'card-match' && (
          <CardMatchGame
            student={student}
            settings={settings}
            onAwardStars={handleAwardStars}
          />
        )}

        {activeTab === 'phonics-stories' && (
          <PhonicsStoryReader
            student={student}
            settings={settings}
            onAwardStars={handleAwardStars}
          />
        )}

        {activeTab === 'assessment' && (
          <GamifiedQuiz
            student={student}
            settings={settings}
            onAwardStars={handleAwardStars}
            onSaveQuizResult={handleSaveQuizResult}
          />
        )}

      </main>

      {/* Parental Gate Modal */}
      {showParentModal && (
        <ParentalDashboard
          student={student}
          settings={settings}
          onUpdateSettings={(newSet) => setSettings(prev => ({ ...prev, ...newSet }))}
          onClose={() => setShowParentModal(false)}
        />
      )}

      {/* Footer */}
      <footer className="bg-white border-t-4 border-[#FFD93D] py-4 px-6 text-center text-xs font-extrabold text-[#2D2D2D]/70 uppercase tracking-wider">
        First Open School • 100% Ad-Free & Safe • Offline Ready Early Literacy & Numeracy Platform
      </footer>

    </div>
  );
}
