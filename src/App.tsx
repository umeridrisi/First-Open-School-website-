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
import { SubjectNav } from './components/SubjectNav';
import { OverviewWorld } from './components/views/OverviewWorld';
import { CurriculumExplorer } from './components/views/CurriculumExplorer';
import { AlphabetsExplorer } from './components/views/AlphabetsExplorer';
import { DigitsExplorer } from './components/views/DigitsExplorer';
import { TracingCanvas } from './components/games/TracingCanvas';
import { BubblePopGame } from './components/games/BubblePopGame';
import { CountingFeastGame } from './components/games/CountingFeastGame';
import { CardMatchGame } from './components/games/CardMatchGame';
import { PhonicsStoryReader } from './components/games/PhonicsStoryReader';
import { GamifiedQuiz } from './components/games/GamifiedQuiz';
import { KidsEncyclopedia } from './components/views/KidsEncyclopedia';
import { CodingStudio } from './components/views/CodingStudio';
import { PoemsExplorer } from './components/views/PoemsExplorer';
import { DrawingsStudio } from './components/views/DrawingsStudio';
import { ParentalDashboard } from './components/parent/ParentalDashboard';
import { SettingsPage } from './components/views/SettingsPage';
import { LegalPages } from './components/views/LegalPages';
import { ALPHABET_DATA, DIGIT_DATA } from './data/curriculumData';
import { ENCYCLOPEDIA_CATEGORIES } from './data/encyclopediaData';
import { POEM_CATEGORIES, POEMS_DATA } from './data/poemsData';
import { DRAWING_CATEGORIES } from './data/drawingsData';
import { playSoundEffect } from './utils/sound';
import { parsePath, navigateTo, formatRouteUrl, ROUTE_CHANGE_EVENT, AppRoute } from './utils/router';
import { applySeoMetadata, getSeoMetadata } from './utils/seo';

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

  // URL-driven Route State
  const [currentRoute, setCurrentRoute] = useState<AppRoute>(() => parsePath(window.location.pathname));
  const [selectedTracingTarget, setSelectedTracingTarget] = useState<LetterData | DigitData | undefined>(() => {
    const route = parsePath(window.location.pathname);
    if (route.tracingTarget) {
      const char = route.tracingTarget.toUpperCase();
      const letter = ALPHABET_DATA.find(a => a.char === char);
      if (letter) return letter;
      const val = parseInt(route.tracingTarget, 10);
      if (!isNaN(val)) {
        const digit = DIGIT_DATA.find(d => d.value === val);
        if (digit) return digit;
      }
    }
    return undefined;
  });

  const [isOffline, setIsOffline] = useState<boolean>(!navigator.onLine);
  const [showParentModal, setShowParentModal] = useState<boolean>(false);

  // Sync route and apply SEO metadata
  useEffect(() => {
    applySeoMetadata(getSeoMetadata(currentRoute));

    const handleLocationChange = () => {
      const newRoute = parsePath(window.location.pathname);
      setCurrentRoute(newRoute);
      applySeoMetadata(getSeoMetadata(newRoute));

      if (newRoute.tracingTarget) {
        const char = newRoute.tracingTarget.toUpperCase();
        const letter = ALPHABET_DATA.find(a => a.char === char);
        if (letter) {
          setSelectedTracingTarget(letter);
        } else {
          const val = parseInt(newRoute.tracingTarget, 10);
          if (!isNaN(val)) {
            const digit = DIGIT_DATA.find(d => d.value === val);
            if (digit) setSelectedTracingTarget(digit);
          }
        }
      }
    };

    const handleGlobalLinkClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement)?.closest('a');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (!href) return;
      
      // Only intercept local relative routes
      if (href.startsWith('/') && !href.startsWith('//') && !anchor.hasAttribute('download') && anchor.getAttribute('target') !== '_blank') {
        if (!e.ctrlKey && !e.metaKey && !e.shiftKey && e.button === 0) {
          e.preventDefault();
          navigateTo(href);
        }
      }
    };

    document.addEventListener('click', handleGlobalLinkClick);
    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener(ROUTE_CHANGE_EVENT, handleLocationChange);

    return () => {
      document.removeEventListener('click', handleGlobalLinkClick);
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener(ROUTE_CHANGE_EVENT, handleLocationChange);
    };
  }, []);

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
    navigateTo({ tab: 'tracing', tracingTarget: letter.char });
  };

  const handleSelectDigitForTracing = (digit: DigitData) => {
    setSelectedTracingTarget(digit);
    navigateTo({ tab: 'tracing', tracingTarget: String(digit.value) });
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

  const handleUpdateStudentTier = (tier: AgeTier) => {
    setStudent(prev => ({
      ...prev,
      ageTier: tier
    }));
  };

  return (
    <div className="min-h-screen bg-[#FFF9F0] font-sans text-[#2D2D2D] flex flex-col">
      
      {/* Header */}
      <Header
        student={student}
        settings={settings}
        onToggleParentDashboard={() => setShowParentModal(true)}
        onOpenSettings={() => navigateTo({ tab: 'settings' })}
        onToggleSound={handleToggleSound}
        onUpdateStudentName={handleUpdateStudentName}
        isOffline={isOffline}
      />

      {/* Navigation Bar */}
      <SubjectNav
        activeTab={currentRoute.tab}
        onSelectTab={(tab) => navigateTo({ tab })}
        settings={settings}
      />

      {/* Main Interactive Workspace */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 lg:p-8">
        
        {currentRoute.tab === 'overview' && (
          <OverviewWorld
            student={student}
            settings={settings}
            onNavigate={(tab, params) => navigateTo(typeof params === 'object' ? { tab, ...params } : { tab })}
          />
        )}

        {currentRoute.tab === 'curriculum' && (
          <CurriculumExplorer
            student={student}
            settings={settings}
            initialTier={currentRoute.curriculumTier}
            onUpdateStudentTier={handleUpdateStudentTier}
            onNavigateTab={(tab, params) => navigateTo(typeof params === 'object' ? { tab, ...params } : { tab })}
          />
        )}

        {currentRoute.tab === 'alphabets' && (
          <AlphabetsExplorer
            student={student}
            settings={settings}
            initialLetterChar={currentRoute.letter}
            onLetterChange={(char) => navigateTo({ tab: 'alphabets', letter: char }, true)}
            onSelectLetterForTracing={handleSelectLetterForTracing}
            onMarkLetterPracticed={(char) => handleMarkItemPracticed(char, 'letter')}
          />
        )}

        {currentRoute.tab === 'digits' && (
          <DigitsExplorer
            student={student}
            settings={settings}
            initialDigitValue={currentRoute.digit}
            onDigitChange={(val) => navigateTo({ tab: 'digits', digit: val }, true)}
            onSelectDigitForTracing={handleSelectDigitForTracing}
            onMarkDigitPracticed={(val) => handleMarkItemPracticed(String(val), 'digit')}
          />
        )}

        {currentRoute.tab === 'encyclopedia' && (
          <KidsEncyclopedia
            student={student}
            settings={settings}
            initialEntryId={currentRoute.entryId}
            initialCategory={currentRoute.category}
            onEntryChange={(id) => navigateTo({ tab: 'encyclopedia', entryId: id })}
            onCategoryChange={(cat) => navigateTo(cat === 'all' ? { tab: 'encyclopedia' } : { tab: 'encyclopedia', category: cat })}
            onNavigateToTracing={(char) => {
              const letter = ALPHABET_DATA.find(a => a.char === char);
              if (letter) {
                handleSelectLetterForTracing(letter);
              }
            }}
          />
        )}

        {currentRoute.tab === 'coding' && (
          <CodingStudio
            student={student}
            settings={settings}
            initialSubTab={currentRoute.codingSubTab}
            initialTier={currentRoute.codingTier}
            initialMissionId={currentRoute.missionId}
            initialConceptId={currentRoute.conceptId}
            onAwardStars={handleAwardStars}
            onNavigateSubTab={(sub) => navigateTo({ tab: 'coding', codingSubTab: sub })}
          />
        )}

        {currentRoute.tab === 'poems' && (
          <PoemsExplorer
            student={student}
            settings={settings}
            initialPoemId={currentRoute.poemId}
            initialCategory={currentRoute.poemCategory}
            onPoemChange={(id) => navigateTo({ tab: 'poems', poemId: id })}
            onCategoryChange={(cat) => navigateTo(cat === 'all' ? { tab: 'poems' } : { tab: 'poems', poemCategory: cat })}
          />
        )}

        {currentRoute.tab === 'drawings' && (
          <DrawingsStudio
            student={student}
            settings={settings}
            initialTemplateId={currentRoute.drawingTemplateId}
            initialCategory={currentRoute.drawingCategory}
            onAwardStars={handleAwardStars}
          />
        )}

        {currentRoute.tab === 'tracing' && (
          <TracingCanvas
            initialTarget={selectedTracingTarget}
            student={student}
            settings={settings}
            onSaveProgress={handleSaveTracingProgress}
          />
        )}

        {currentRoute.tab === 'bubble-pop' && (
          <BubblePopGame
            student={student}
            settings={settings}
            onAwardStars={handleAwardStars}
          />
        )}

        {currentRoute.tab === 'counting-feast' && (
          <CountingFeastGame
            student={student}
            settings={settings}
            onAwardStars={handleAwardStars}
          />
        )}

        {currentRoute.tab === 'card-match' && (
          <CardMatchGame
            student={student}
            settings={settings}
            onAwardStars={handleAwardStars}
          />
        )}

        {currentRoute.tab === 'phonics-stories' && (
          <PhonicsStoryReader
            student={student}
            settings={settings}
            onAwardStars={handleAwardStars}
          />
        )}

        {currentRoute.tab === 'assessment' && (
          <GamifiedQuiz
            student={student}
            settings={settings}
            onAwardStars={handleAwardStars}
            onSaveQuizResult={handleSaveQuizResult}
          />
        )}

        {currentRoute.tab === 'settings' && (
          <SettingsPage
            student={student}
            settings={settings}
            onUpdateStudent={setStudent}
            onUpdateSettings={setSettings}
            onNavigateHome={() => navigateTo({ tab: 'overview' })}
          />
        )}

        {(currentRoute.tab === 'privacy' || 
          currentRoute.tab === 'terms' || 
          currentRoute.tab === 'data-safety' || 
          currentRoute.tab === 'editorial-policy' || 
          currentRoute.tab === 'about') && (
          <LegalPages
            tab={currentRoute.tab}
            settings={settings}
            onNavigate={(tab) => navigateTo({ tab })}
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

      {/* Comprehensive Footer with Creator Credits & Legal Links */}
      <footer className="bg-white border-t-4 border-[#FFD93D] mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
          
          {/* Credits Box */}
          <div className="bg-[#FFF9F0] rounded-3xl p-6 sm:p-8 border-4 border-[#FFD93D] shadow-[0_6px_0_#C9A92E] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                <span className="px-3 py-1 rounded-full bg-[#FF6B6B] text-white text-xs font-black uppercase tracking-wider shadow-xs">
                  Created by Umer Idrisi
                </span>
                <span className="px-3 py-1 rounded-full bg-[#4D96FF] text-white text-xs font-black uppercase tracking-wider shadow-xs">
                  Arkade Digital Limited (UK)
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black uppercase tracking-wider border border-emerald-300">
                  🇵🇰 Pakistan & 🇬🇧 UK
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-[#2D2D2D] tracking-tight">
                First Open School
              </h3>
              <p className="text-sm text-[#2D2D2D]/80 font-medium max-w-2xl leading-relaxed">
                This project is created by <strong>Umer Idrisi</strong> (a blogger and entrepreneur from Pakistan) and is a project of <strong>Arkade Digital Limited (UK)</strong>. Dedicated to 100% free, safe, and ad-free early childhood literacy and numeracy education worldwide.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <a
                href="/about"
                onClick={(e) => {
                  if (!e.ctrlKey && !e.metaKey && !e.shiftKey && e.button === 0) {
                    e.preventDefault();
                    navigateTo({ tab: 'about' });
                  }
                }}
                className="px-5 py-3 bg-[#2D2D2D] hover:bg-black text-white rounded-2xl font-black text-xs uppercase tracking-wider shadow-[0_4px_0_#000] active:translate-y-0.5 active:shadow-none transition-all cursor-pointer no-underline"
              >
                About & Creator Bio
              </a>
              <a
                href="/data-safety"
                onClick={(e) => {
                  if (!e.ctrlKey && !e.metaKey && !e.shiftKey && e.button === 0) {
                    e.preventDefault();
                    navigateTo({ tab: 'data-safety' });
                  }
                }}
                className="px-5 py-3 bg-[#6BCB77] hover:bg-[#4E9B56] text-white rounded-2xl font-black text-xs uppercase tracking-wider shadow-[0_4px_0_#4E9B56] active:translate-y-0.5 active:shadow-none transition-all cursor-pointer no-underline"
              >
                Data Safety Pledge
              </a>
            </div>
          </div>

          {/* Crawlable Knowledge Categories Strip */}
          <div className="pt-2 border-t-2 border-gray-100 space-y-2">
            <div className="text-xs font-black uppercase tracking-wider text-[#2D2D2D]/70">
              Kids Encyclopedia Knowledge Subjects:
            </div>
            <div className="flex flex-wrap gap-2">
              {ENCYCLOPEDIA_CATEGORIES.map(cat => (
                <a
                  key={cat.id}
                  href={`/encyclopedia/category/${cat.id}`}
                  onClick={(e) => {
                    if (!e.ctrlKey && !e.metaKey && !e.shiftKey && e.button === 0) {
                      e.preventDefault();
                      navigateTo({ tab: 'encyclopedia', category: cat.id });
                    }
                  }}
                  className="px-3 py-1.5 rounded-xl bg-[#FFF9F0] hover:bg-[#FFD93D] border border-gray-200 text-xs font-bold text-[#2D2D2D] no-underline transition-colors"
                >
                  {cat.icon} {cat.label}
                </a>
              ))}
            </div>
          </div>

          {/* Drawings & Printables Fast Crawl Links */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="text-xs font-black uppercase tracking-wider text-[#FF6B6B]">
                🎨 Creative Drawings &amp; Printable Coloring Sheets:
              </div>
              <a
                href="/drawings"
                onClick={(e) => {
                  if (!e.ctrlKey && !e.metaKey && !e.shiftKey && e.button === 0) {
                    e.preventDefault();
                    navigateTo({ tab: 'drawings' });
                  }
                }}
                className="text-xs font-black text-[#FF6B6B] hover:underline"
              >
                Open Art &amp; Printables Studio &rarr;
              </a>
            </div>
            <div className="flex flex-wrap gap-2">
              {DRAWING_CATEGORIES.map(cat => (
                <a
                  key={cat.id}
                  href={`/drawings/category/${cat.id}`}
                  onClick={(e) => {
                    if (!e.ctrlKey && !e.metaKey && !e.shiftKey && e.button === 0) {
                      e.preventDefault();
                      navigateTo({ tab: 'drawings', drawingCategory: cat.id });
                    }
                  }}
                  className="px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-[#FF6B6B] hover:text-white border border-rose-200 text-xs font-bold text-[#2D2D2D] no-underline transition-colors"
                >
                  {cat.icon} {cat.label}
                </a>
              ))}
            </div>
          </div>

          {/* Poem Categories Fast Crawl Links */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="text-xs font-black uppercase tracking-wider text-[#8B5CF6]">
                Easy English &amp; Pakistani Poems for Kids to Recite:
              </div>
              <a
                href="/poems"
                onClick={(e) => {
                  if (!e.ctrlKey && !e.metaKey && !e.shiftKey && e.button === 0) {
                    e.preventDefault();
                    navigateTo({ tab: 'poems' });
                  }
                }}
                className="text-xs font-black text-[#8B5CF6] hover:underline"
              >
                View All {POEMS_DATA.length} Poems &amp; Rhymes &rarr;
              </a>
            </div>
            <div className="flex flex-wrap gap-2">
              {POEM_CATEGORIES.map(cat => (
                <a
                  key={cat.id}
                  href={`/poems/category/${cat.id}`}
                  onClick={(e) => {
                    if (!e.ctrlKey && !e.metaKey && !e.shiftKey && e.button === 0) {
                      e.preventDefault();
                      navigateTo({ tab: 'poems', poemCategory: cat.id });
                    }
                  }}
                  className="px-3 py-1.5 rounded-xl bg-purple-50 hover:bg-[#8B5CF6] hover:text-white border border-purple-200 text-xs font-bold text-[#2D2D2D] no-underline transition-colors"
                >
                  {cat.icon} {cat.label}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Legal & Pedagogical Navigation */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t-2 border-gray-100 text-xs font-black text-[#2D2D2D]/80">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              <a 
                href="/privacy"
                onClick={(e) => {
                  if (!e.ctrlKey && !e.metaKey && !e.shiftKey && e.button === 0) {
                    e.preventDefault();
                    navigateTo({ tab: 'privacy' });
                  }
                }}
                className="hover:text-[#FF6B6B] transition-colors cursor-pointer no-underline text-[#2D2D2D]"
              >
                Privacy Policy
              </a>
              <span className="text-gray-300 hidden sm:inline">•</span>
              <a 
                href="/terms"
                onClick={(e) => {
                  if (!e.ctrlKey && !e.metaKey && !e.shiftKey && e.button === 0) {
                    e.preventDefault();
                    navigateTo({ tab: 'terms' });
                  }
                }}
                className="hover:text-[#4D96FF] transition-colors cursor-pointer no-underline text-[#2D2D2D]"
              >
                Terms of Service
              </a>
              <span className="text-gray-300 hidden sm:inline">•</span>
              <a 
                href="/data-safety"
                onClick={(e) => {
                  if (!e.ctrlKey && !e.metaKey && !e.shiftKey && e.button === 0) {
                    e.preventDefault();
                    navigateTo({ tab: 'data-safety' });
                  }
                }}
                className="hover:text-[#6BCB77] transition-colors cursor-pointer no-underline text-[#2D2D2D]"
              >
                Children's Data Safety
              </a>
              <span className="text-gray-300 hidden sm:inline">•</span>
              <a 
                href="/editorial-policy"
                onClick={(e) => {
                  if (!e.ctrlKey && !e.metaKey && !e.shiftKey && e.button === 0) {
                    e.preventDefault();
                    navigateTo({ tab: 'editorial-policy' });
                  }
                }}
                className="hover:text-[#FFD93D] transition-colors cursor-pointer no-underline text-[#2D2D2D]"
              >
                Editorial Policy
              </a>
              <span className="text-gray-300 hidden sm:inline">•</span>
              <a 
                href="/about"
                onClick={(e) => {
                  if (!e.ctrlKey && !e.metaKey && !e.shiftKey && e.button === 0) {
                    e.preventDefault();
                    navigateTo({ tab: 'about' });
                  }
                }}
                className="hover:text-[#2D2D2D] transition-colors cursor-pointer no-underline text-[#2D2D2D]"
              >
                About &amp; Credits
              </a>
              <span className="text-gray-300 hidden sm:inline">•</span>
              <a 
                href="/settings"
                onClick={(e) => {
                  if (!e.ctrlKey && !e.metaKey && !e.shiftKey && e.button === 0) {
                    e.preventDefault();
                    navigateTo({ tab: 'settings' });
                  }
                }}
                className="hover:text-[#4D96FF] transition-colors cursor-pointer no-underline text-[#2D2D2D]"
              >
                Settings &amp; Controls
              </a>
              <span className="text-gray-300 hidden sm:inline">•</span>
              <a 
                href="/sitemap.xml"
                className="hover:text-[#4D96FF] transition-colors no-underline text-gray-500"
              >
                Sitemap.xml
              </a>
              <span className="text-gray-300 hidden sm:inline">•</span>
              <a 
                href="/robots.txt"
                className="hover:text-[#4D96FF] transition-colors no-underline text-gray-500"
              >
                Robots.txt
              </a>
              <span className="text-gray-300 hidden sm:inline">•</span>
              <a 
                href="/llms.txt"
                className="hover:text-[#4D96FF] transition-colors no-underline text-[#4D96FF] font-bold"
                title="Structured Curriculum & Documentation for AI & LLM Systems"
              >
                🤖 llms.txt
              </a>
            </div>

            <div className="text-gray-500 font-bold text-center sm:text-right">
              © 2026 First Open School • Arkade Digital Limited (UK)
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
