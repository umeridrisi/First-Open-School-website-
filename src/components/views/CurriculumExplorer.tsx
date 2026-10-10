import React, { useState, useEffect } from 'react';
import { AgeTier, StudentProfile, ParentSettings, SubjectCurriculumBreakdown } from '../../types';
import { CURRICULUM_TIER_DETAILS, AGE_TIER_INFO, ALPHABET_DATA } from '../../data/curriculumData';
import { speakText, playSoundEffect } from '../../utils/sound';
import { navigateTo } from '../../utils/router';
import { 
  Sparkles, 
  GraduationCap, 
  CheckCircle2, 
  ArrowRight, 
  BookOpen, 
  Code2, 
  Hash, 
  Palette, 
  Volume2, 
  Compass, 
  ShieldCheck, 
  Clock, 
  Lightbulb, 
  Rocket, 
  Layers, 
  HeartHandshake, 
  HelpCircle,
  Calendar,
  Lock,
  Unlock,
  Check
} from 'lucide-react';

interface CurriculumExplorerProps {
  student: StudentProfile;
  settings: ParentSettings;
  initialTier?: AgeTier;
  onUpdateStudentTier: (tier: AgeTier) => void;
  onNavigateTab: (tab: any) => void;
}

export const CurriculumExplorer: React.FC<CurriculumExplorerProps> = ({
  student,
  settings,
  initialTier,
  onUpdateStudentTier,
  onNavigateTab
}) => {
  const [selectedTier, setSelectedTier] = useState<AgeTier>(() => {
    if (initialTier && CURRICULUM_TIER_DETAILS[initialTier]) {
      return initialTier;
    }
    return student.ageTier || 'kindergarten';
  });

  const [activeSubjectTab, setActiveSubjectTab] = useState<string>('all');
  const [tierChangeSuccess, setTierChangeSuccess] = useState<string>('');
  const [suggestionSuccess, setSuggestionSuccess] = useState<boolean>(false);

  useEffect(() => {
    if (initialTier && CURRICULUM_TIER_DETAILS[initialTier] && initialTier !== selectedTier) {
      setSelectedTier(initialTier);
    }
  }, [initialTier]);

  const tierDetail = CURRICULUM_TIER_DETAILS[selectedTier] || CURRICULUM_TIER_DETAILS['kindergarten'];
  const isActiveForStudent = student.ageTier === selectedTier;

  const handleSelectTier = (tier: AgeTier) => {
    setSelectedTier(tier);
    playSoundEffect('click', settings.soundEffects);
    navigateTo({ tab: 'curriculum', curriculumTier: tier }, true);
    speakText(`${CURRICULUM_TIER_DETAILS[tier].name}. ${CURRICULUM_TIER_DETAILS[tier].gradeLabel}. ${CURRICULUM_TIER_DETAILS[tier].tagline}`, settings.voiceGuidance);
  };

  const handleActivateCurriculum = () => {
    onUpdateStudentTier(selectedTier);
    playSoundEffect('victory', settings.soundEffects);
    setTierChangeSuccess(`Active curriculum set to ${tierDetail.name} for ${student.name}!`);
    speakText(`Curriculum successfully updated to ${tierDetail.name} for ${student.name}!`, settings.voiceGuidance);
    setTimeout(() => setTierChangeSuccess(''), 4000);
  };

  const TIERS: AgeTier[] = ['pre-k', 'kindergarten', 'grade-1-2', 'k12-foundations'];

  const handleOpenSubject = (subj: SubjectCurriculumBreakdown) => {
    playSoundEffect('click', settings.soundEffects);
    
    if (subj.subjectId === 'alphabets') {
      try {
        const saved = localStorage.getItem(`first_open_last_letter_${student.id}`);
        if (saved) {
          onNavigateTab('alphabets', { letter: saved });
          return;
        }
      } catch {}
      const unmastered = ALPHABET_DATA.find(a => !student.progress[a.char]?.mastered);
      onNavigateTab('alphabets', { letter: unmastered?.char || 'A' });
      return;
    }

    if (subj.subjectId === 'digits') {
      try {
        const saved = localStorage.getItem(`first_open_last_digit_${student.id}`);
        if (saved !== null) {
          onNavigateTab('digits', { digit: parseInt(saved, 10) });
          return;
        }
      } catch {}
      const digitMap: Record<AgeTier, number> = {
        'pre-k': 1,
        'kindergarten': 5,
        'grade-1-2': 11,
        'k12-foundations': 15
      };
      onNavigateTab('digits', { digit: digitMap[tierDetail.tier] || 1 });
      return;
    }

    if (subj.subjectId === 'coding') {
      try {
        const savedSub = localStorage.getItem(`first_open_coding_subtab_${student.id}`);
        const savedMission = localStorage.getItem(`first_open_last_coding_mission_${student.id}`);
        onNavigateTab('coding', { 
          codingTier: tierDetail.tier,
          codingSubTab: savedSub || (tierDetail.tier === 'k12-foundations' ? 'languages' : 'quests'),
          missionId: savedMission || undefined
        });
        return;
      } catch {}
      onNavigateTab('coding', { codingTier: tierDetail.tier });
      return;
    }

    if (subj.subjectId === 'encyclopedia') {
      try {
        const savedEntry = localStorage.getItem(`first_open_encyclopedia_entry_${student.id}`);
        const savedCat = localStorage.getItem(`first_open_encyclopedia_cat_${student.id}`);
        if (savedEntry && savedCat) {
          onNavigateTab('encyclopedia', { category: savedCat, entryId: savedEntry });
          return;
        }
      } catch {}
      const catMap: Record<AgeTier, { cat: string; entry: string }> = {
        'pre-k': { cat: 'animals-dinosaurs', entry: 'blue-whale' },
        'kindergarten': { cat: 'solar-system', entry: 'earth' },
        'grade-1-2': { cat: 'earth-elements', entry: 'volcano' },
        'k12-foundations': { cat: 'technology', entry: 'computer' }
      };
      const def = catMap[tierDetail.tier] || catMap['kindergarten'];
      onNavigateTab('encyclopedia', { category: def.cat, entryId: def.entry });
      return;
    }

    if (subj.subjectId === 'poems') {
      try {
        const savedPoem = localStorage.getItem(`first_open_last_poem_${student.id}`);
        if (savedPoem) {
          onNavigateTab('poems', { poemId: savedPoem });
          return;
        }
      } catch {}
      const poemMap: Record<AgeTier, string> = {
        'pre-k': 'twinkle-twinkle-little-star',
        'kindergarten': 'mary-had-a-little-lamb',
        'grade-1-2': 'the-wind',
        'k12-foundations': 'stopping-by-woods'
      };
      onNavigateTab('poems', { poemId: poemMap[tierDetail.tier] });
      return;
    }

    if (subj.subjectId === 'drawings') {
      try {
        const savedDrawing = localStorage.getItem(`first_open_last_drawing_${student.id}`);
        if (savedDrawing) {
          onNavigateTab('drawings', { drawingTemplateId: savedDrawing });
          return;
        }
      } catch {}
      const drawCat: Record<AgeTier, string> = {
        'pre-k': 'animals',
        'kindergarten': 'animals',
        'grade-1-2': 'vehicles-space',
        'k12-foundations': 'vehicles-space'
      };
      onNavigateTab('drawings', { drawingCategory: drawCat[tierDetail.tier] });
      return;
    }

    onNavigateTab(subj.linkTab);
  };

  const subjectEntries: SubjectCurriculumBreakdown[] = Object.values(tierDetail.subjects) as SubjectCurriculumBreakdown[];
  const filteredSubjects = activeSubjectTab === 'all' 
    ? subjectEntries 
    : subjectEntries.filter(s => s.subjectId === activeSubjectTab);

  return (
    <div className="space-y-8 pb-16 max-w-7xl mx-auto">
      
      {/* Top Banner & Header */}
      <div className="bg-white rounded-[32px] p-6 sm:p-8 border-4 border-[#2D2D2D] shadow-[0_8px_0_#000] relative overflow-hidden">
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FFD93D] text-[#2D2D2D] text-xs font-black uppercase tracking-wider border-2 border-[#2D2D2D]">
              <GraduationCap className="w-4 h-4" />
              <span>FIRST OPEN SCHOOL &bull; CURRICULUM FRAMEWORK</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-[#2D2D2D] tracking-tight">
              Curriculums &amp; Parent Learning Guide 🧭
            </h1>
            <p className="text-sm sm:text-base font-semibold text-[#2D2D2D]/80 leading-relaxed">
              Explore our research-backed, developmentally sequenced early learning pathways. 
              <strong> 100% open to every child</strong>, with tailored milestones for Pre-K, Kindergarten, Grades 1–2, and Elementary Mastery.
            </p>
          </div>

          {/* Quick Active Student Status Card */}
          <div className="bg-[#FFF9F0] p-4 sm:p-5 rounded-2xl border-3 border-[#4D96FF] shadow-[0_4px_0_#3A72C1] shrink-0 lg:max-w-xs space-y-2">
            <div className="flex items-center justify-between text-xs font-black text-gray-500 uppercase tracking-wider">
              <span>Current Learner</span>
              <span className="text-xl">{student.avatar}</span>
            </div>
            <div className="font-black text-base text-[#2D2D2D] flex items-center justify-between">
              <span>{student.name}</span>
              <span className="text-xs bg-white px-2 py-0.5 rounded-full border border-gray-300 font-extrabold text-[#4D96FF]">
                ⭐ {student.stars} Stars
              </span>
            </div>
            <div className="text-xs font-bold text-gray-600">
              Active Tier: <span className="font-black text-[#4D96FF]">{AGE_TIER_INFO[student.ageTier]?.gradeLabel}</span>
            </div>
          </div>
        </div>

        {/* Ambient watermark emoji */}
        <div className="absolute right-6 -bottom-6 opacity-10 select-none text-9xl pointer-events-none">
          🎓
        </div>
      </div>

      {/* Success Notification */}
      {tierChangeSuccess && (
        <div className="bg-emerald-50 border-3 border-emerald-500 text-emerald-900 px-6 py-4 rounded-2xl font-black text-sm flex items-center justify-between gap-3 shadow-md animate-in fade-in">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
            <span>{tierChangeSuccess}</span>
          </div>
          <button
            onClick={() => setTierChangeSuccess('')}
            className="text-xs text-emerald-700 hover:text-emerald-900 font-extrabold uppercase px-2 py-1 rounded-md"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* OPEN ACCESS PHILOSOPHY BANNER */}
      <div className="bg-gradient-to-r from-emerald-500/10 via-sky-500/10 to-amber-500/10 rounded-[28px] p-5 sm:p-6 border-3 border-[#2D2D2D] shadow-[0_4px_0_#000] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center space-x-3.5">
          <div className="w-12 h-12 rounded-2xl bg-white border-2 border-[#2D2D2D] flex items-center justify-center text-2xl shadow-xs shrink-0">
            🔓
          </div>
          <div className="space-y-1">
            <h2 className="text-base sm:text-lg font-black text-[#2D2D2D] flex items-center gap-2">
              <span>Open Learning Guarantee: No Locked Doors</span>
              <span className="text-[11px] bg-emerald-600 text-white px-2 py-0.5 rounded-full font-black uppercase">
                Free &amp; Open
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-700 font-semibold leading-relaxed">
              Every child develops at their own magical pace. Selecting a curriculum adjusts default recommendations and pacing, but <strong>every single module, game, coding mission, and article stays completely open to everyone</strong>. Curious learners can freely explore higher tiers or review foundational basics anytime!
            </p>
          </div>
        </div>
      </div>

      {/* 4 CURRICULUM TIERS SELECTOR TABS */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-black text-[#2D2D2D] flex items-center gap-2 tracking-tight">
            <Compass className="w-5 h-5 text-[#4D96FF]" />
            <span>SELECT CURRICULUM LEVEL TO EXPLORE</span>
          </h2>
          <span className="text-xs font-bold text-gray-500">
            Click any level to view its scope &amp; parent breakdown
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TIERS.map((t) => {
            const detail = CURRICULUM_TIER_DETAILS[t];
            const isSelected = selectedTier === t;
            const isStudentTier = student.ageTier === t;

            return (
              <button
                key={t}
                onClick={() => handleSelectTier(t)}
                className={`p-5 rounded-[24px] border-4 text-left transition-all cursor-pointer relative flex flex-col justify-between ${
                  isSelected
                    ? `bg-white border-[#2D2D2D] shadow-[0_6px_0_#000] scale-[1.02]`
                    : `bg-white/80 border-gray-200 hover:border-gray-400 hover:bg-white opacity-85 hover:opacity-100 shadow-[0_2px_0_#ddd]`
                }`}
              >
                {/* Badges */}
                <div className="flex items-center justify-between w-full mb-3">
                  <span className="text-3xl p-1 bg-[#FFF9F0] rounded-xl border border-gray-200">
                    {detail.mascotEmoji}
                  </span>
                  <div className="flex flex-col items-end gap-1">
                    {isStudentTier && (
                      <span className="text-[10px] font-black bg-[#4D96FF] text-white px-2 py-0.5 rounded-full uppercase tracking-wider shadow-xs">
                        ⭐ Active Tier
                      </span>
                    )}
                    <span className="text-[11px] font-extrabold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                      {detail.ageRange}
                    </span>
                  </div>
                </div>

                <div>
                  <div className="font-black text-lg text-[#2D2D2D] leading-tight">
                    {detail.name}
                  </div>
                  <div className="text-xs font-extrabold text-[#4D96FF] mt-0.5">
                    {detail.gradeLabel}
                  </div>
                  <p className="text-xs text-gray-600 font-medium mt-2 line-clamp-2">
                    {detail.tagline}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-black">
                  <span className={isSelected ? 'text-[#4D96FF]' : 'text-gray-400'}>
                    {isSelected ? 'Viewing Plan &rarr;' : 'Click to View'}
                  </span>
                  <span className="text-[11px] font-bold text-gray-500">
                    {detail.dailyRecommendationMinutes}m / day
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* SELECTED CURRICULUM DEEP DIVE SPOTLIGHT */}
      <div className="bg-white rounded-[32px] p-6 sm:p-8 border-4 border-[#2D2D2D] shadow-[0_8px_0_#000] space-y-8">
        
        {/* Tier Header with Activate Button */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b-3 border-gray-100">
          <div className="space-y-2 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-3xl">{tierDetail.mascotEmoji}</span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#2D2D2D] tracking-tight">
                {tierDetail.name} &bull; {tierDetail.gradeLabel}
              </h2>
              <span className={`px-3 py-1 rounded-full text-xs font-black border ${tierDetail.badgeBg}`}>
                {tierDetail.ageRange}
              </span>
            </div>
            <p className="text-sm font-semibold text-gray-700 leading-relaxed">
              {tierDetail.description}
            </p>
          </div>

          {/* Activate Curriculum Button */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            {isActiveForStudent ? (
              <div className="px-5 py-3 rounded-2xl bg-emerald-100 text-emerald-900 border-2 border-emerald-300 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Active For {student.name}</span>
              </div>
            ) : (
              <button
                onClick={handleActivateCurriculum}
                className="px-6 py-3.5 bg-[#4D96FF] hover:bg-[#3A72C1] text-white font-black text-xs uppercase tracking-wider rounded-2xl border-2 border-[#2D2D2D] shadow-[0_4px_0_#000] active:translate-y-1 active:shadow-none transition-all cursor-pointer flex items-center justify-center gap-2"
                title={`Set ${tierDetail.name} as current curriculum for ${student.name}`}
              >
                <Sparkles className="w-4 h-4 text-yellow-300" />
                <span>Set as Active Curriculum</span>
              </button>
            )}

            <button
              onClick={() => {
                const text = `${tierDetail.name}. ${tierDetail.gradeLabel}. Philosophy: ${tierDetail.pedagogicalPhilosophy}`;
                speakText(text, settings.voiceGuidance);
              }}
              className="p-3 bg-[#FFF9F0] hover:bg-[#FFD93D] rounded-2xl border-2 border-[#2D2D2D] text-[#2D2D2D] shadow-[0_3px_0_#000] active:translate-y-1 active:shadow-none transition-all cursor-pointer flex items-center justify-center"
              title="Read Curriculum Summary Aloud"
              aria-label="Read Curriculum Summary Aloud"
            >
              <Volume2 className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Pedagogical Foundations & Daily Milestones Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Pedagogical Philosophy Card */}
          <div className="bg-[#FFF9F0] p-6 rounded-[28px] border-3 border-amber-300 shadow-sm space-y-3">
            <div className="flex items-center space-x-2 text-[#2D2D2D]">
              <Lightbulb className="w-5 h-5 text-amber-500" />
              <h3 className="font-black text-base uppercase tracking-tight">
                Pedagogical Foundations
              </h3>
            </div>
            <div className="text-xs font-bold text-gray-500">
              Cognitive Stage: <span className="text-[#2D2D2D] font-extrabold">{tierDetail.cognitiveStage}</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-gray-800 leading-relaxed">
              {tierDetail.pedagogicalPhilosophy}
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-bold text-gray-600">
              <Clock className="w-4 h-4 text-[#4D96FF]" />
              <span>Recommended daily pace: <strong>{tierDetail.dailyRecommendationMinutes} minutes</strong> of playful learning</span>
            </div>
          </div>

          {/* Core Developmental Milestones Checklist */}
          <div className="bg-white p-6 rounded-[28px] border-3 border-[#6BCB77] shadow-[0_4px_0_#4E9B56] space-y-3">
            <div className="flex items-center space-x-2 text-[#2D2D2D]">
              <CheckCircle2 className="w-5 h-5 text-[#6BCB77]" />
              <h3 className="font-black text-base uppercase tracking-tight">
                Core Developmental Milestones
              </h3>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm font-semibold text-gray-800">
              {tierDetail.coreMilestones.map((milestone, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#6BCB77]/20 text-[#2E7D32] flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{milestone}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* SUBJECT-BY-SUBJECT CURRICULUM MATRIX */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-xl font-black text-[#2D2D2D] flex items-center gap-2 tracking-tight">
                <Layers className="w-5 h-5 text-[#4D96FF]" />
                <span>SUBJECT ALIGNMENT FOR {tierDetail.name.toUpperCase()}</span>
              </h3>
              <p className="text-xs text-gray-500 font-bold">
                How every learning studio adapts its focus for this developmental age
              </p>
            </div>

            {/* Subject Filter Pills */}
            <div className="flex flex-wrap gap-1.5 bg-gray-100 p-1 rounded-2xl border border-gray-200">
              <button
                onClick={() => setActiveSubjectTab('all')}
                className={`px-3 py-1 rounded-xl text-xs font-black transition-all ${
                  activeSubjectTab === 'all' 
                    ? 'bg-white text-[#2D2D2D] shadow-xs' 
                    : 'text-gray-500 hover:text-[#2D2D2D]'
                }`}
              >
                All Subjects ({subjectEntries.length})
              </button>
              {subjectEntries.map(s => (
                <button
                  key={s.subjectId}
                  onClick={() => setActiveSubjectTab(s.subjectId)}
                  className={`px-2.5 py-1 rounded-xl text-xs font-black transition-all flex items-center gap-1 ${
                    activeSubjectTab === s.subjectId 
                      ? 'bg-white text-[#2D2D2D] shadow-xs' 
                      : 'text-gray-500 hover:text-[#2D2D2D]'
                  }`}
                >
                  <span>{s.emoji}</span>
                  <span className="hidden md:inline">{s.title.split(' ')[0]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Subject Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-2">
            {filteredSubjects.map((subj) => (
              <div
                key={subj.subjectId}
                className="bg-white rounded-[24px] p-5 border-3 border-[#2D2D2D] shadow-[0_5px_0_#000] flex flex-col justify-between space-y-4 hover:-translate-y-1 transition-all"
              >
                <div className="space-y-3">
                  {/* Card Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <span className="text-2xl p-1.5 bg-[#FFF9F0] rounded-xl border border-gray-200">
                        {subj.emoji}
                      </span>
                      <div>
                        <h4 className="font-black text-sm text-[#2D2D2D]">{subj.title}</h4>
                        <span className="text-[11px] font-black text-[#4D96FF]">{subj.focusTitle}</span>
                      </div>
                    </div>
                  </div>

                  {/* Scope Summary */}
                  <p className="text-xs text-gray-700 font-semibold leading-relaxed">
                    {subj.scopeSummary}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase text-gray-400 tracking-wider">
                      Recommended Milestones:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {subj.recommendedHighlights.map((hl, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-extrabold bg-[#FFF9F0] text-[#2D2D2D] px-2 py-0.5 rounded-lg border border-gray-200"
                        >
                          &bull; {hl}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Parent Pedagogical Rationale */}
                  <div className="bg-sky-50/80 p-3 rounded-xl border border-sky-200 text-[11px] text-sky-900 font-medium leading-relaxed">
                    <strong className="font-black block text-sky-950 mb-0.5">Why this fits this age:</strong>
                    {subj.parentExplanation}
                  </div>
                </div>

                {/* Direct Action Button to Subject */}
                <button
                  onClick={() => handleOpenSubject(subj)}
                  className="w-full py-2.5 bg-[#FFF9F0] hover:bg-[#FFD93D] text-[#2D2D2D] font-black text-xs uppercase tracking-tight rounded-xl border-2 border-[#2D2D2D] shadow-[0_3px_0_#000] active:translate-y-0.5 active:shadow-none transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Open {subj.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* PARENT GUIDE & AT-HOME REINFORCEMENT TIPS */}
        <div className="bg-[#FFF9F0] rounded-[28px] p-6 border-3 border-[#FFD93D] shadow-[0_4px_0_#C9A92E] space-y-4">
          <div className="flex items-center space-x-2 text-[#2D2D2D]">
            <HeartHandshake className="w-5 h-5 text-amber-600" />
            <h3 className="font-black text-lg tracking-tight uppercase">
              Parent Guidance &amp; Home Reinforcement Tips
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tierDetail.parentGuideTips.map((tip, idx) => (
              <div key={idx} className="bg-white p-4 rounded-2xl border-2 border-amber-200 shadow-xs flex items-start gap-3">
                <span className="text-lg">💡</span>
                <p className="text-xs sm:text-sm font-semibold text-gray-800 leading-relaxed">
                  {tip}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ACTIVE HANDS-ON LEARNING STUDIOS (DEDICATED FOR THIS TIER) */}
        <div className="space-y-4 pt-4 border-t-3 border-gray-100">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <div className="inline-flex items-center space-x-1.5 px-3 py-0.5 rounded-full bg-emerald-100 text-emerald-900 text-xs font-black uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>ACTIVE LEARNING STUDIOS &bull; AVAILABLE NOW</span>
              </div>
              <h3 className="text-xl font-black text-[#2D2D2D] tracking-tight">
                Featured Learning Studios for {tierDetail.name}
              </h3>
            </div>
            <span className="text-xs font-bold text-gray-500">
              100% Free &bull; Open Access &bull; Ad-Free Learning
            </span>
          </div>

          <p className="text-xs sm:text-sm text-gray-600 font-medium">
            Explore the dedicated, fully developed interactive studios tailored for this curriculum stage:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Studio 1 */}
            <div className="bg-white rounded-[24px] p-5 border-3 border-sky-300 shadow-[0_4px_0_#0284C7] space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-3xl">
                    {tierDetail.tier === 'pre-k' ? '🐾' : tierDetail.tier === 'kindergarten' ? '🔤' : tierDetail.tier === 'grade-1-2' ? '📖' : '🌐'}
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-800 border border-sky-300">
                    Active Studio
                  </span>
                </div>
                <h4 className="font-black text-base text-[#2D2D2D]">
                  {tierDetail.tier === 'pre-k' && 'Phonics Sounds & Audio Soundboard'}
                  {tierDetail.tier === 'kindergarten' && 'Story World (110+ Phonics Stories)'}
                  {tierDetail.tier === 'grade-1-2' && 'Poetry & Recital Studio'}
                  {tierDetail.tier === 'k12-foundations' && 'Multi-Language Coding Academy'}
                </h4>
                <p className="text-xs text-gray-600 font-semibold leading-relaxed">
                  {tierDetail.tier === 'pre-k' && 'High-contrast tactile letter cards with real-time audio phonemes and friendly animal cues.'}
                  {tierDetail.tier === 'kindergarten' && '110+ decodable one-line stories with interactive word-by-word pronunciation.'}
                  {tierDetail.tier === 'grade-1-2' && 'Stanza-by-stanza audio recitals, rhyme scheme analysis, and expressive vocabulary.'}
                  {tierDetail.tier === 'k12-foundations' && 'Live in-browser playgrounds for HTML, CSS, JavaScript, Python, C++, C#, SQL, and Scratch.'}
                </p>
              </div>

              <button
                onClick={() => {
                  playSoundEffect('click', settings.soundEffects);
                  if (tierDetail.tier === 'pre-k') {
                    const saved = localStorage.getItem(`first_open_last_letter_${student.id}`);
                    const unmastered = ALPHABET_DATA.find(a => !student.progress[a.char]?.mastered);
                    onNavigateTab('alphabets', { letter: saved || unmastered?.char || 'A' });
                  }
                  else if (tierDetail.tier === 'kindergarten') onNavigateTab('phonics-stories');
                  else if (tierDetail.tier === 'grade-1-2') {
                    const saved = localStorage.getItem(`first_open_last_poem_${student.id}`);
                    onNavigateTab('poems', { poemId: saved || 'the-wind' });
                  }
                  else onNavigateTab('coding', { codingTier: 'k12-foundations', codingSubTab: 'languages' });
                }}
                className="w-full py-2.5 bg-sky-500 hover:bg-sky-600 text-white font-black text-xs uppercase tracking-tight rounded-xl border-2 border-[#2D2D2D] shadow-[0_3px_0_#000] active:translate-y-0.5 active:shadow-none transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Launch Studio &rarr;</span>
              </button>
            </div>

            {/* Studio 2 */}
            <div className="bg-white rounded-[24px] p-5 border-3 border-emerald-300 shadow-[0_4px_0_#059669] space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-3xl">
                    {tierDetail.tier === 'pre-k' ? '👆' : tierDetail.tier === 'kindergarten' ? '🍱' : tierDetail.tier === 'grade-1-2' ? '💻' : '📚'}
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                    Active Studio
                  </span>
                </div>
                <h4 className="font-black text-base text-[#2D2D2D]">
                  {tierDetail.tier === 'pre-k' && 'Guided Tracing Canvas'}
                  {tierDetail.tier === 'kindergarten' && 'Monster Feast Counting Math'}
                  {tierDetail.tier === 'grade-1-2' && 'Learn Coding Studio (Conditionals)'}
                  {tierDetail.tier === 'k12-foundations' && 'Encyclopedic Science Inquiries'}
                </h4>
                <p className="text-xs text-gray-600 font-semibold leading-relaxed">
                  {tierDetail.tier === 'pre-k' && 'Smooth finger-stroke paths with directional guide points and accuracy celebration.'}
                  {tierDetail.tier === 'kindergarten' && 'Interactive monster feeding connecting numeral quantities to tangible visual groups.'}
                  {tierDetail.tier === 'grade-1-2' && 'Key-vault puzzle mazes, conditionals, and web HTML/CSS building tags.'}
                  {tierDetail.tier === 'k12-foundations' && 'Over 250 deep knowledge articles covering technology, astronomy, and nature.'}
                </p>
              </div>

              <button
                onClick={() => {
                  playSoundEffect('click', settings.soundEffects);
                  if (tierDetail.tier === 'pre-k') {
                    const saved = localStorage.getItem(`first_open_last_tracing_letter_${student.id}`);
                    onNavigateTab('tracing', { tracingTarget: saved || 'A' });
                  }
                  else if (tierDetail.tier === 'kindergarten') onNavigateTab('counting-feast');
                  else if (tierDetail.tier === 'grade-1-2') onNavigateTab('coding', { codingTier: 'grade-1-2' });
                  else onNavigateTab('encyclopedia', { category: 'technology', entryId: 'computer' });
                }}
                className="w-full py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xs uppercase tracking-tight rounded-xl border-2 border-[#2D2D2D] shadow-[0_3px_0_#000] active:translate-y-0.5 active:shadow-none transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Launch Studio &rarr;</span>
              </button>
            </div>

            {/* Studio 3 */}
            <div className="bg-white rounded-[24px] p-5 border-3 border-amber-300 shadow-[0_4px_0_#D97706] space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-3xl">
                    {tierDetail.tier === 'pre-k' ? '🧁' : tierDetail.tier === 'kindergarten' ? '🤖' : tierDetail.tier === 'grade-1-2' ? '🏆' : '🎨'}
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-300">
                    Active Studio
                  </span>
                </div>
                <h4 className="font-black text-base text-[#2D2D2D]">
                  {tierDetail.tier === 'pre-k' && 'Bubble Pop & Sensory Games'}
                  {tierDetail.tier === 'kindergarten' && 'Coding Studio (Repeat Loops)'}
                  {tierDetail.tier === 'grade-1-2' && 'Star Assessment Quizzes'}
                  {tierDetail.tier === 'k12-foundations' && 'Vector Drawing & Art Studio'}
                </h4>
                <p className="text-xs text-gray-600 font-semibold leading-relaxed">
                  {tierDetail.tier === 'pre-k' && 'Joyful bubble popping matching spoken letters and numbers with instant feedback.'}
                  {tierDetail.tier === 'kindergarten' && 'Pattern-based repeat blocks guiding cyber-pets through garden mazes.'}
                  {tierDetail.tier === 'grade-1-2' && 'Gamified speed assessments testing vocabulary, math, and reading retention.'}
                  {tierDetail.tier === 'k12-foundations' && 'Creative freehand canvas, perspective vector outlines, and printable sheets.'}
                </p>
              </div>

              <button
                onClick={() => {
                  playSoundEffect('click', settings.soundEffects);
                  if (tierDetail.tier === 'pre-k') onNavigateTab('bubble-pop');
                  else if (tierDetail.tier === 'kindergarten') onNavigateTab('coding', { codingTier: 'kindergarten' });
                  else if (tierDetail.tier === 'grade-1-2') onNavigateTab('assessment');
                  else onNavigateTab('drawings');
                }}
                className="w-full py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-black text-xs uppercase tracking-tight rounded-xl border-2 border-[#2D2D2D] shadow-[0_3px_0_#000] active:translate-y-0.5 active:shadow-none transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Launch Studio &rarr;</span>
              </button>
            </div>
          </div>

          {/* Reassuring Educator Support Banner */}
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-5 rounded-[24px] border-2 border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <h5 className="font-black text-sm text-[#2D2D2D] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Open Early Learning Framework</span>
              </h5>
              <p className="text-xs text-gray-600 font-medium">
                All 26 alphabet letters, 21 digit modules, coding studio levels, and encyclopedic entries are open for child exploration at any time.
              </p>
            </div>
            <button
              onClick={() => {
                playSoundEffect('click', settings.soundEffects);
                onNavigateTab('overview');
              }}
              className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs uppercase tracking-wider rounded-xl border-2 border-[#2D2D2D] shadow-[0_3px_0_#000] active:translate-y-0.5 active:shadow-none transition-all cursor-pointer whitespace-nowrap shrink-0"
            >
              Explore Home World &rarr;
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
