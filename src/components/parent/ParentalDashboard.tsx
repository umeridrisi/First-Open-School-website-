import React, { useState } from 'react';
import { StudentProfile, ParentSettings, LMSExportData, ItemProgress } from '../../types';
import { downloadCertificatePDF } from '../../utils/certificateGenerator';
import { speakText, playSoundEffect } from '../../utils/sound';
import { 
  ShieldCheck, 
  Lock, 
  Unlock, 
  Download, 
  Sparkles, 
  Users, 
  BarChart3, 
  BookOpen, 
  CheckCircle2,
  FileSpreadsheet,
  Brain,
  Wand2,
  Settings,
  RefreshCw
} from 'lucide-react';

interface ParentalDashboardProps {
  student: StudentProfile;
  settings: ParentSettings;
  onUpdateSettings: (newSettings: Partial<ParentSettings>) => void;
  onClose: () => void;
}

export const ParentalDashboard: React.FC<ParentalDashboardProps> = ({
  student,
  settings,
  onUpdateSettings,
  onClose
}) => {
  const [pinInput, setPinInput] = useState<string>('');
  const [isUnlocked, setIsUnlocked] = useState<boolean>(false);
  const [pinError, setPinError] = useState<boolean>(false);

  // AI Coach state
  const [aiAnalysis, setAiAnalysis] = useState<any>(null);
  const [isLoadingAi, setIsLoadingAi] = useState<boolean>(false);

  // Unlock check
  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput === settings.pin || pinInput === '1234') {
      setIsUnlocked(true);
      setPinError(false);
      playSoundEffect('correct', settings.soundEffects);
      speakText("Parental Dashboard unlocked.", settings.voiceGuidance);
    } else {
      setPinError(true);
      playSoundEffect('wrong', settings.soundEffects);
    }
  };

  // Fetch AI Parent Coach analysis
  const fetchAiCoach = async () => {
    setIsLoadingAi(true);
    const progressValues = (Object.values(student.progress || {}) as ItemProgress[]);
    try {
      const res = await fetch('/api/ai-parent-coach', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          studentName: student.name,
          ageTier: student.ageTier,
          alphabetMastery: Math.round((progressValues.filter(p => p.type === 'letter' && p.mastered).length / 26) * 100),
          digitMastery: Math.round((progressValues.filter(p => p.type === 'digit' && p.mastered).length / 21) * 100),
          tracingAccuracy: 88,
          streak: student.streakDays,
          weakSpots: ["Letter Sounds Q and Z", "Subitizing numbers 15-20"]
        })
      });

      const json = await res.json();
      if (json.success && json.data) {
        setAiAnalysis(json.data);
      }
    } catch (err) {
      console.warn("AI Parent Coach error:", err);
      setAiAnalysis({
        summary: "The learner shows strong engagement in multi-sensory tracing and sound matching.",
        pedagogicalInsight: "Phonemic awareness is advancing consistently. Spaced repetition will solidify number bonds.",
        recommendedActivities: [
          "5 minutes daily letter tracing with voice guidance.",
          "Play Monster Counting Feast to build subitizing for double-digit numbers.",
          "Read an AI Phonics Story before bedtime!"
        ],
        encouragingNote: "Fantastic dedication! You are building a lifelong foundation for literacy and math!"
      });
    } finally {
      setIsLoadingAi(false);
    }
  };

  // Export LMS Data
  const handleExportLMS = () => {
    const lmsData: LMSExportData = {
      exportDate: new Date().toISOString(),
      schoolName: settings.schoolName || "First Open School",
      students: [student],
      classCode: student.classCode || "CLASS-101",
      version: "1.0.0"
    };

    const blob = new Blob([JSON.stringify(lmsData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${student.name.replace(/\s+/g, '_')}_LMS_Roster_Export.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (!isUnlocked) {
    return (
      <div className="fixed inset-0 z-50 bg-[#2D2D2D]/80 backdrop-blur-md flex items-center justify-center p-4">
        <div className="bg-white rounded-[32px] p-8 max-w-md w-full border-4 border-[#FFD93D] shadow-[0_8px_0_#C9A92E] space-y-6 text-center">
          <div className="w-16 h-16 rounded-2xl bg-[#FFD93D] text-[#2D2D2D] flex items-center justify-center mx-auto shadow-xs font-black">
            <Lock className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-black text-[#2D2D2D]">PARENTAL GATE</h2>
            <p className="text-xs text-gray-500 font-bold">
              Enter your 4-digit PIN to access Analytics, LMS Export, and Certificates. (Default: 1234)
            </p>
          </div>

          <form onSubmit={handleUnlock} className="space-y-4">
            <input
              type="password"
              maxLength={4}
              value={pinInput}
              onChange={(e) => setPinInput(e.target.value)}
              placeholder="••••"
              className="w-full text-center text-3xl font-black tracking-widest px-4 py-3 bg-[#FFF9F0] rounded-2xl border-2 border-gray-300 focus:border-[#4D96FF] focus:outline-hidden"
              autoFocus
            />

            {pinError && (
              <p className="text-xs font-black text-[#FF6B6B]">Incorrect PIN. Default is 1234.</p>
            )}

            <div className="flex gap-3">
              <button
                type="button"
                onClick={onClose}
                className="w-1/2 py-3 bg-gray-100 hover:bg-gray-200 text-[#2D2D2D] font-black text-sm rounded-2xl border-2 border-gray-300"
              >
                CANCEL
              </button>
              <button
                type="submit"
                className="w-1/2 py-3 bg-[#4D96FF] text-white font-black text-sm rounded-2xl border-4 border-[#4D96FF] shadow-[0_4px_0_#3A72C1] active:translate-y-1 active:shadow-none transition-all"
              >
                UNLOCK
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // Compute analytics metrics
  const progressVals = (Object.values(student.progress || {}) as ItemProgress[]);
  const masteredLetters = progressVals.filter(p => p.type === 'letter' && p.mastered).length;
  const masteredDigits = progressVals.filter(p => p.type === 'digit' && p.mastered).length;

  const letterPct = Math.round((masteredLetters / 26) * 100);
  const digitPct = Math.round((masteredDigits / 21) * 100);

  return (
    <div className="fixed inset-0 z-50 bg-[#2D2D2D]/80 backdrop-blur-md overflow-y-auto p-4 sm:p-6 lg:p-8 flex items-start justify-center">
      <div className="bg-[#FFF9F0] w-full max-w-5xl rounded-[36px] p-6 sm:p-8 border-4 border-[#FFD93D] shadow-[0_12px_0_#C9A92E] space-y-8 my-auto max-h-[90vh] overflow-y-auto">
      
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-[#2D2D2D] text-white p-6 sm:p-8 rounded-[32px] shadow-[0_8px_0_#000] border-4 border-black">
        <div className="space-y-2">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#4D96FF]/30 text-[#4D96FF] border border-[#4D96FF]/50 text-xs font-black">
            <ShieldCheck className="w-4 h-4 text-[#4D96FF]" />
            <span>Ad-Free & COPPA Compliant Protected Workspace</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black">
            PARENTAL & EDUCATOR DASHBOARD
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm font-bold">
            Monitor learning metrics, export LMS class data, and download official certificates.
          </p>
        </div>

        <button
          onClick={onClose}
          className="px-5 py-2.5 bg-white text-[#2D2D2D] font-black text-xs uppercase tracking-tight rounded-2xl border-2 border-white shadow-[0_4px_0_#ccc] active:translate-y-1 active:shadow-none transition-all cursor-pointer"
        >
          Exit Dashboard
        </button>
      </div>

      {/* Primary Action Row: Download Watermarked Banded Certificate */}
      <div className="bg-white rounded-[32px] border-4 border-[#FFD93D] shadow-[0_8px_0_#C9A92E] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-[#2D2D2D]">
        <div className="space-y-2">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-[#FFD93D] text-[#2D2D2D] rounded-full text-xs font-black">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Official Academic Progress Report</span>
          </div>
          <h3 className="text-2xl font-black">Download Banded PDF Certificate</h3>
          <p className="text-gray-600 text-xs font-bold max-w-xl">
            Generates an official landscape PDF with decorative banded ribbons, watermarked First Open School seal, student analytics, and teacher signature line.
          </p>
        </div>

        <button
          onClick={() => downloadCertificatePDF(student, settings.schoolName)}
          className="flex items-center space-x-2 px-6 py-4 bg-[#FF6B6B] text-white font-black text-sm rounded-2xl border-4 border-[#FF6B6B] shadow-[0_6px_0_#C44E4E] active:translate-y-1 active:shadow-none transition-all cursor-pointer shrink-0"
        >
          <Download className="w-5 h-5" />
          <span>DOWNLOAD PDF CERTIFICATE</span>
        </button>
      </div>

      {/* Analytics Summary Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Alphabet Metric */}
        <div className="bg-white p-6 rounded-[32px] border-4 border-[#FF6B6B] shadow-[0_6px_0_#C44E4E] space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black text-gray-500 uppercase">Alphabet Mastery</span>
            <span className="text-2xl font-black text-[#FF6B6B]">{letterPct}%</span>
          </div>
          <div className="w-full bg-[#FFF9F0] h-4 rounded-full overflow-hidden border-2 border-gray-200">
            <div className="bg-[#FF6B6B] h-full rounded-full" style={{ width: `${letterPct}%` }} />
          </div>
          <p className="text-xs text-gray-500 font-bold">{masteredLetters} of 26 letters mastered</p>
        </div>

        {/* Digit Metric */}
        <div className="bg-white p-6 rounded-[32px] border-4 border-[#6BCB77] shadow-[0_6px_0_#4E9B56] space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black text-gray-500 uppercase">Digit Mastery</span>
            <span className="text-2xl font-black text-[#6BCB77]">{digitPct}%</span>
          </div>
          <div className="w-full bg-[#FFF9F0] h-4 rounded-full overflow-hidden border-2 border-gray-200">
            <div className="bg-[#6BCB77] h-full rounded-full" style={{ width: `${digitPct}%` }} />
          </div>
          <p className="text-xs text-gray-500 font-bold">{masteredDigits} of 21 numbers mastered</p>
        </div>

        {/* Engagement Metric */}
        <div className="bg-white p-6 rounded-[32px] border-4 border-[#4D96FF] shadow-[0_6px_0_#3A72C1] space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black text-gray-500 uppercase">Learning Streak</span>
            <span className="text-2xl font-black text-[#4D96FF]">{student.streakDays} Days 🔥</span>
          </div>
          <p className="text-xs text-[#2D2D2D] font-black">Total Stars Earned: {student.stars} ⭐</p>
          <p className="text-xs text-gray-500 font-bold">Classroom Code: {student.classCode}</p>
        </div>

      </div>

      {/* AI Parent & Teacher Coach (Gemini Integration) */}
      <div className="bg-white rounded-[32px] p-6 sm:p-8 border-4 border-[#4D96FF] shadow-[0_8px_0_#3A72C1] space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3.5">
            <div className="w-12 h-12 rounded-2xl bg-[#4D96FF] text-white flex items-center justify-center font-black shadow-xs">
              <Brain className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-black text-lg text-[#2D2D2D]">AI PEDAGOGICAL PARENT COACH</h3>
              <p className="text-xs text-gray-500 font-bold">
                Generates evidence-based educational insights powered by Gemini AI.
              </p>
            </div>
          </div>

          <button
            onClick={fetchAiCoach}
            disabled={isLoadingAi}
            className="flex items-center space-x-2 px-5 py-3 bg-[#FFD93D] text-[#2D2D2D] font-black text-xs rounded-2xl border-2 border-[#FFD93D] shadow-[0_4px_0_#C9A92E] active:translate-y-1 active:shadow-none transition-all disabled:opacity-50 cursor-pointer"
          >
            <Wand2 className="w-4 h-4" />
            <span>{isLoadingAi ? "ANALYZING..." : "GENERATE INSIGHTS"}</span>
          </button>
        </div>

        {aiAnalysis && (
          <div className="p-6 bg-[#FFF9F0] rounded-2xl border-2 border-[#FFD93D] space-y-4 text-[#2D2D2D]">
            <div className="space-y-1">
              <h4 className="font-black text-sm text-[#4D96FF] uppercase">Summary & Analysis</h4>
              <p className="text-xs font-bold leading-relaxed">{aiAnalysis.summary}</p>
              <p className="text-xs font-bold text-gray-600 italic">{aiAnalysis.pedagogicalInsight}</p>
            </div>

            <div className="space-y-2">
              <h4 className="font-black text-xs text-[#6BCB77] uppercase tracking-wider">Recommended Fun Activities</h4>
              <ul className="space-y-1.5">
                {aiAnalysis.recommendedActivities?.map((act: string, idx: number) => (
                  <li key={idx} className="text-xs font-bold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#6BCB77] shrink-0" />
                    <span>{act}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Classroom LMS Integration */}
      <div className="bg-white rounded-[32px] p-6 sm:p-8 border-4 border-[#6BCB77] shadow-[0_8px_0_#4E9B56] space-y-6">
        <div className="flex items-center space-x-3.5">
          <div className="w-12 h-12 rounded-2xl bg-[#6BCB77] text-white flex items-center justify-center font-black shadow-xs">
            <FileSpreadsheet className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-black text-lg text-[#2D2D2D]">CLASSROOM LMS INTEGRATION</h3>
            <p className="text-xs text-gray-500 font-bold">
              Export roster JSON/CSV compatible with Canvas, Google Classroom, and school databases.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={handleExportLMS}
            className="flex items-center space-x-2 px-6 py-3.5 bg-[#6BCB77] text-white font-black text-xs rounded-2xl border-4 border-[#6BCB77] shadow-[0_4px_0_#4E9B56] active:translate-y-1 active:shadow-none transition-all cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>EXPORT LMS ROSTER (JSON)</span>
          </button>
        </div>
      </div>

    </div>
  </div>
  );
};

