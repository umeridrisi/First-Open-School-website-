import React from 'react';
import { StudentProfile, ActiveTab, ParentSettings, ItemProgress } from '../../types';
import { ALPHABET_DATA, DIGIT_DATA, ALL_BADGES, AGE_TIER_INFO } from '../../data/curriculumData';
import { ENCYCLOPEDIA_CATEGORIES, ENCYCLOPEDIA_ENTRIES } from '../../data/encyclopediaData';
import { POEM_CATEGORIES, POEMS_DATA } from '../../data/poemsData';
import { speakText, playSoundEffect } from '../../utils/sound';
import { formatRouteUrl } from '../../utils/router';
import { Sparkles, Trophy, Flame, Play, PenTool, CircleDot, Utensils, BookOpen, ArrowRight, Compass } from 'lucide-react';

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

  const handleAnchorClick = (e: React.MouseEvent, tab: ActiveTab, speakMsg?: string) => {
    if (!e.ctrlKey && !e.metaKey && !e.shiftKey && e.button === 0) {
      e.preventDefault();
      playSoundEffect('click', settings.soundEffects);
      onNavigate(tab);
      if (speakMsg) handleSpeak(speakMsg);
    }
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
            <a
              href="/alphabets"
              onClick={(e) => handleAnchorClick(e, 'alphabets', "Let's learn alphabets and phonics!")}
              className="flex items-center space-x-2 px-6 py-3.5 bg-[#FF6B6B] hover:bg-[#e05353] text-white font-black text-base rounded-2xl border-4 border-[#FF6B6B] shadow-[0_6px_0_#C44E4E] active:translate-y-1 active:shadow-none transition-all cursor-pointer no-underline"
            >
              <span>EXPLORE ALPHABETS A-Z</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="/digits"
              onClick={(e) => handleAnchorClick(e, 'digits', "Let's count digits zero through twenty!")}
              className="flex items-center space-x-2 px-6 py-3.5 bg-[#6BCB77] hover:bg-[#5bb867] text-white font-black text-base rounded-2xl border-4 border-[#6BCB77] shadow-[0_6px_0_#4E9B56] active:translate-y-1 active:shadow-none transition-all cursor-pointer no-underline"
            >
              <span>COUNT DIGITS 0-20</span>
              <Play className="w-4 h-4 fill-white" />
            </a>

            <a
              href="/encyclopedia"
              onClick={(e) => handleAnchorClick(e, 'encyclopedia', "Welcome to the Kids Encyclopedia!")}
              className="flex items-center space-x-2 px-6 py-3.5 bg-[#FFD93D] hover:bg-[#f0cb28] text-[#2D2D2D] font-black text-base rounded-2xl border-4 border-[#2D2D2D] shadow-[0_6px_0_#000] active:translate-y-1 active:shadow-none transition-all cursor-pointer no-underline"
            >
              <span>KIDS ENCYCLOPEDIA 📚</span>
              <BookOpen className="w-5 h-5 text-[#2D2D2D]" />
            </a>
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
            <div className="flex space-x-1.5 flex-wrap gap-y-1">
              {ALPHABET_DATA.slice(0, 8).map((item) => {
                const isMastered = student.progress[item.char]?.mastered;
                return (
                  <a
                    key={item.char}
                    href={`/alphabets/${item.char.toLowerCase()}`}
                    className={`w-7 h-7 rounded-xl flex items-center justify-center font-black text-xs border-2 no-underline ${
                      isMastered 
                        ? 'bg-[#FF6B6B] text-white border-[#FF6B6B] shadow-xs' 
                        : 'bg-gray-100 text-gray-500 border-gray-200 hover:border-[#FF6B6B]'
                    }`}
                  >
                    {item.char}
                  </a>
                );
              })}
            </div>
            <a
              href="/alphabets"
              onClick={(e) => handleAnchorClick(e, 'alphabets')}
              className="text-xs font-black text-[#FF6B6B] hover:underline uppercase tracking-tight no-underline"
            >
              View All &rarr;
            </a>
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
            <div className="flex space-x-1.5 flex-wrap gap-y-1">
              {DIGIT_DATA.slice(0, 8).map((item) => {
                const isMastered = student.progress[String(item.value)]?.mastered;
                return (
                  <a
                    key={item.value}
                    href={`/digits/${item.value}`}
                    className={`w-7 h-7 rounded-xl flex items-center justify-center font-black text-xs border-2 no-underline ${
                      isMastered 
                        ? 'bg-[#6BCB77] text-white border-[#6BCB77] shadow-xs' 
                        : 'bg-gray-100 text-gray-500 border-gray-200 hover:border-[#6BCB77]'
                    }`}
                  >
                    {item.value}
                  </a>
                );
              })}
            </div>
            <a
              href="/digits"
              onClick={(e) => handleAnchorClick(e, 'digits')}
              className="text-xs font-black text-[#6BCB77] hover:underline uppercase tracking-tight no-underline"
            >
              View All &rarr;
            </a>
          </div>
        </div>

      </div>

      {/* Recommended Interactive Games */}
      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#2D2D2D] tracking-tight uppercase">
          FEATURED LEARNING GAMES
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <a
            href="/tracing"
            onClick={(e) => handleAnchorClick(e, 'tracing')}
            className="p-5 rounded-[28px] bg-white border-4 border-[#FFD93D] shadow-[0_6px_0_#C9A92E] text-left space-y-3 transition-all active:translate-y-1 active:shadow-none cursor-pointer group no-underline block"
          >
            <div className="w-10 h-10 rounded-2xl bg-[#FFD93D] text-[#2D2D2D] flex items-center justify-center font-black shadow-xs">
              <PenTool className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-black text-[#2D2D2D] text-base group-hover:text-[#4D96FF] transition-colors">Guided Tracing</h4>
              <p className="text-xs text-gray-500 font-bold">Stroke tracing with real-time accuracy scoring.</p>
            </div>
          </a>

          <a
            href="/bubble-pop"
            onClick={(e) => handleAnchorClick(e, 'bubble-pop')}
            className="p-5 rounded-[28px] bg-white border-4 border-[#4D96FF] shadow-[0_6px_0_#3A72C1] text-left space-y-3 transition-all active:translate-y-1 active:shadow-none cursor-pointer group no-underline block"
          >
            <div className="w-10 h-10 rounded-2xl bg-[#4D96FF] text-white flex items-center justify-center font-black shadow-xs">
              <CircleDot className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-black text-[#2D2D2D] text-base group-hover:text-[#4D96FF] transition-colors">Bubble Pop Phonics</h4>
              <p className="text-xs text-gray-500 font-bold">Pop floating bubbles matching voice prompts.</p>
            </div>
          </a>

          <a
            href="/counting-feast"
            onClick={(e) => handleAnchorClick(e, 'counting-feast')}
            className="p-5 rounded-[28px] bg-white border-4 border-[#FF6B6B] shadow-[0_6px_0_#C44E4E] text-left space-y-3 transition-all active:translate-y-1 active:shadow-none cursor-pointer group no-underline block"
          >
            <div className="w-10 h-10 rounded-2xl bg-[#FF6B6B] text-white flex items-center justify-center font-black shadow-xs">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-black text-[#2D2D2D] text-base group-hover:text-[#FF6B6B] transition-colors">Monster Feast</h4>
              <p className="text-xs text-gray-500 font-bold">Feed friendly monsters while counting snacks.</p>
            </div>
          </a>

          <a
            href="/phonics-stories"
            onClick={(e) => handleAnchorClick(e, 'phonics-stories')}
            className="p-5 rounded-[28px] bg-white border-4 border-[#6BCB77] shadow-[0_6px_0_#4E9B56] text-left space-y-3 transition-all active:translate-y-1 active:shadow-none cursor-pointer group no-underline block"
          >
            <div className="w-10 h-10 rounded-2xl bg-[#6BCB77] text-white flex items-center justify-center font-black shadow-xs">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-black text-[#2D2D2D] text-base group-hover:text-[#6BCB77] transition-colors">Story World</h4>
              <p className="text-xs text-gray-500 font-bold">110+ decodable 1-line stories with comprehension quizzes.</p>
            </div>
          </a>

        </div>
      </div>

      {/* Encyclopedia Spotlight Banner */}
      <div className="bg-gradient-to-r from-[#FFD93D]/30 via-[#FFF9F0] to-[#4D96FF]/20 rounded-[32px] p-6 sm:p-8 border-4 border-[#2D2D2D] shadow-[0_8px_0_#000] flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-3 max-w-xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FF6B6B] text-white text-xs font-black uppercase tracking-wider">
            <span>NEW CDE-INSPIRED FEATURE</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-[#2D2D2D] tracking-tight">
            The Kids Encyclopedia 📚
          </h3>
          <p className="text-sm font-semibold text-[#2D2D2D]/80 leading-relaxed">
            Curious about letters, numbers, planets, or why things happen? Open full encyclopedia articles with real-world analogies, mouth shapes, ancient origins, and interactive brain quizzes!
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {ENCYCLOPEDIA_CATEGORIES.slice(0, 5).map(cat => (
              <a
                key={cat.id}
                href={`/encyclopedia/category/${cat.id}`}
                className="text-xs font-black bg-white px-2.5 py-1 rounded-xl border border-gray-300 hover:border-[#4D96FF] text-[#2D2D2D] no-underline"
              >
                {cat.icon} {cat.label}
              </a>
            ))}
          </div>
        </div>

        <a
          href="/encyclopedia"
          onClick={(e) => handleAnchorClick(e, 'encyclopedia')}
          className="px-6 py-4 bg-[#4D96FF] hover:bg-[#3A72C1] text-white font-black text-base uppercase tracking-tight rounded-2xl border-4 border-[#2D2D2D] shadow-[0_6px_0_#000] active:translate-y-1 active:shadow-none transition-all cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-2 no-underline"
        >
          <span>OPEN ENCYCLOPEDIA</span>
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>

      {/* Easy English Poems Spotlight Banner */}
      <div className="bg-gradient-to-r from-purple-100 via-[#FFF9F0] to-indigo-100 rounded-[32px] p-6 sm:p-8 border-4 border-[#8B5CF6] shadow-[0_8px_0_#6D28D9] flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-3 max-w-xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#8B5CF6] text-white text-xs font-black uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
            <span>NEW POETRY & RECITATION SECTION</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-[#2D2D2D] tracking-tight">
            Easy English Poems for Kids ⭐
          </h3>
          <p className="text-sm font-semibold text-[#2D2D2D]/80 leading-relaxed">
            Listen to 28 timeless nursery rhymes, animal verses, lullabies, and whimsical action poems! Includes audio read-aloud, stanza highlighting, vocabulary definitions, and tips to recite with expression!
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {POEM_CATEGORIES.map(cat => (
              <a
                key={cat.id}
                href={`/poems/category/${cat.id}`}
                className="text-xs font-black bg-white px-2.5 py-1 rounded-xl border border-purple-200 hover:border-[#8B5CF6] text-[#2D2D2D] no-underline"
              >
                {cat.icon} {cat.label}
              </a>
            ))}
          </div>
        </div>

        <a
          href="/poems"
          onClick={(e) => handleAnchorClick(e, 'poems', 'Explore Easy English Poems for Kids')}
          className="px-6 py-4 bg-[#8B5CF6] hover:bg-purple-700 text-white font-black text-base uppercase tracking-tight rounded-2xl border-4 border-[#2D2D2D] shadow-[0_6px_0_#000] active:translate-y-1 active:shadow-none transition-all cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-2 no-underline"
        >
          <span>EXPLORE 28 POEMS</span>
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>

      {/* Curriculum & Encyclopedia Knowledge Directory for Maximum Crawlability */}
      <div className="bg-white rounded-[32px] p-6 sm:p-8 border-4 border-[#4D96FF] shadow-[0_8px_0_#3A72C1] space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Compass className="w-6 h-6 text-[#4D96FF]" />
            <h3 className="text-xl font-black text-[#2D2D2D] tracking-tight uppercase">
              Curriculum & Encyclopedia Directory
            </h3>
          </div>
          <span className="text-xs font-extrabold text-[#4D96FF] bg-[#4D96FF]/10 px-3 py-1 rounded-full">
            250+ Dedicated Knowledge Pages
          </span>
        </div>

        {/* 8 Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {ENCYCLOPEDIA_CATEGORIES.map((cat) => {
            const count = ENCYCLOPEDIA_ENTRIES.filter(e => e.category === cat.id).length;
            return (
              <a
                key={cat.id}
                href={`/encyclopedia/category/${cat.id}`}
                className="p-4 rounded-2xl bg-[#FFF9F0] border-2 border-[#FFD93D] hover:border-[#2D2D2D] transition-all no-underline block text-[#2D2D2D] group"
              >
                <div className="text-3xl mb-1">{cat.icon}</div>
                <div className="font-black text-sm group-hover:text-[#4D96FF]">{cat.label}</div>
                <div className="text-xs text-gray-500 font-bold">{count} Articles &bull; Explore &rarr;</div>
              </a>
            );
          })}
        </div>

        {/* 6 Poem Categories Grid */}
        <div className="space-y-2 pt-2 border-t-2 border-gray-100">
          <div className="flex items-center justify-between">
            <div className="text-xs font-black uppercase tracking-wider text-[#8B5CF6]">
              Easy English Poems for Kids by Category:
            </div>
            <a href="/poems" className="text-xs font-black text-[#8B5CF6] hover:underline">
              View All 28 Poems &rarr;
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {POEM_CATEGORIES.map((cat) => {
              const count = POEMS_DATA.filter(p => p.category === cat.id).length;
              return (
                <a
                  key={cat.id}
                  href={`/poems/category/${cat.id}`}
                  className="p-3 rounded-2xl bg-purple-50/60 border border-purple-200 hover:border-[#8B5CF6] transition-all no-underline block text-[#2D2D2D] group"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xl">{cat.icon}</span>
                    <span className="font-black text-xs text-[#2D2D2D] group-hover:text-[#8B5CF6]">{cat.label}</span>
                  </div>
                  <div className="text-[11px] text-gray-500 font-bold">{count} Rhymes &bull; Recite &rarr;</div>
                </a>
              );
            })}
          </div>
        </div>

        {/* 28 Poems Fast Crawl Strip */}
        <div className="space-y-2 pt-2 border-t-2 border-gray-100">
          <div className="text-xs font-black uppercase tracking-wider text-gray-500">
            All 28 Easy English Poems to Recite:
          </div>
          <div className="flex flex-wrap gap-1.5">
            {POEMS_DATA.map((p) => (
              <a
                key={p.id}
                href={`/poems/${p.id}`}
                className="px-2.5 py-1 rounded-lg bg-[#FFF9F0] hover:bg-[#8B5CF6] hover:text-white border border-purple-200 font-bold text-xs flex items-center gap-1 text-[#2D2D2D] no-underline transition-colors"
                title={`${p.title} (${p.poet})`}
              >
                <span>{p.emoji}</span>
                <span>{p.title}</span>
              </a>
            ))}
          </div>
        </div>

        {/* 26 Alphabets Fast Crawl Strip */}
        <div className="space-y-2 pt-2 border-t-2 border-gray-100">
          <div className="text-xs font-black uppercase tracking-wider text-gray-500">
            Alphabets A to Z Phonics Pages:
          </div>
          <div className="flex flex-wrap gap-1.5">
            {ALPHABET_DATA.map((l) => (
              <a
                key={l.char}
                href={`/alphabets/${l.char.toLowerCase()}`}
                className="w-8 h-8 rounded-lg bg-[#FFF9F0] hover:bg-[#FF6B6B] hover:text-white border border-[#FF6B6B]/40 font-black text-xs flex items-center justify-center text-[#2D2D2D] no-underline transition-colors"
                title={`Letter ${l.char} Phonics`}
              >
                {l.char}
              </a>
            ))}
          </div>
        </div>

        {/* Digits 0-20 Fast Crawl Strip */}
        <div className="space-y-2 pt-2 border-t-2 border-gray-100">
          <div className="text-xs font-black uppercase tracking-wider text-gray-500">
            Numbers 0 to 20 Counting Pages:
          </div>
          <div className="flex flex-wrap gap-1.5">
            {DIGIT_DATA.map((d) => (
              <a
                key={d.value}
                href={`/digits/${d.value}`}
                className="w-8 h-8 rounded-lg bg-[#FFF9F0] hover:bg-[#6BCB77] hover:text-white border border-[#6BCB77]/40 font-black text-xs flex items-center justify-center text-[#2D2D2D] no-underline transition-colors"
                title={`Number ${d.value} Math`}
              >
                {d.value}
              </a>
            ))}
          </div>
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

