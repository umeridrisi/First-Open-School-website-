import React from 'react';
import { ActiveTab, ParentSettings } from '../../types';
import { playSoundEffect } from '../../utils/sound';
import { 
  ShieldCheck, 
  Lock, 
  FileText, 
  Heart, 
  Sparkles, 
  Award, 
  Globe, 
  Mail, 
  CheckCircle2, 
  BookOpen, 
  UserCheck, 
  ArrowLeft,
  Building2,
  Cpu
} from 'lucide-react';

interface LegalPagesProps {
  tab: ActiveTab;
  settings: ParentSettings;
  onNavigate: (tab: ActiveTab) => void;
}

export const LegalPages: React.FC<LegalPagesProps> = ({ tab, settings, onNavigate }) => {
  const handleNavClick = (targetTab: ActiveTab) => {
    playSoundEffect('click', settings.soundEffects);
    onNavigate(targetTab);
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-16">
      
      {/* Top Navigation Ribbon */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-4 rounded-3xl border-4 border-[#FFD93D] shadow-[0_6px_0_#C9A92E]">
        <button
          onClick={() => handleNavClick('overview')}
          className="flex items-center space-x-2 px-4 py-2 bg-[#FFF9F0] hover:bg-[#FFD93D] text-[#2D2D2D] font-black text-xs uppercase tracking-wider rounded-2xl border-2 border-gray-200 transition-all cursor-pointer shadow-xs active:scale-95"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Learning World</span>
        </button>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => handleNavClick('privacy')}
            className={`px-3 py-1.5 rounded-xl font-black text-xs uppercase transition-all cursor-pointer ${
              tab === 'privacy' 
                ? 'bg-[#FF6B6B] text-white shadow-[0_3px_0_#D94B4B]' 
                : 'bg-gray-100 hover:bg-gray-200 text-[#2D2D2D]'
            }`}
          >
            Privacy
          </button>
          <button
            onClick={() => handleNavClick('terms')}
            className={`px-3 py-1.5 rounded-xl font-black text-xs uppercase transition-all cursor-pointer ${
              tab === 'terms' 
                ? 'bg-[#4D96FF] text-white shadow-[0_3px_0_#3A72C1]' 
                : 'bg-gray-100 hover:bg-gray-200 text-[#2D2D2D]'
            }`}
          >
            Terms
          </button>
          <button
            onClick={() => handleNavClick('data-safety')}
            className={`px-3 py-1.5 rounded-xl font-black text-xs uppercase transition-all cursor-pointer ${
              tab === 'data-safety' 
                ? 'bg-[#6BCB77] text-white shadow-[0_3px_0_#4E9B56]' 
                : 'bg-gray-100 hover:bg-gray-200 text-[#2D2D2D]'
            }`}
          >
            Data Safety
          </button>
          <button
            onClick={() => handleNavClick('editorial-policy')}
            className={`px-3 py-1.5 rounded-xl font-black text-xs uppercase transition-all cursor-pointer ${
              tab === 'editorial-policy' 
                ? 'bg-[#FFD93D] text-[#2D2D2D] shadow-[0_3px_0_#C9A92E]' 
                : 'bg-gray-100 hover:bg-gray-200 text-[#2D2D2D]'
            }`}
          >
            Editorial Policy
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className={`px-3 py-1.5 rounded-xl font-black text-xs uppercase transition-all cursor-pointer ${
              tab === 'about' 
                ? 'bg-[#2D2D2D] text-white shadow-[0_3px_0_#000]' 
                : 'bg-gray-100 hover:bg-gray-200 text-[#2D2D2D]'
            }`}
          >
            About & Credits
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 1. PRIVACY POLICY */}
      {/* ========================================================================= */}
      {tab === 'privacy' && (
        <article className="bg-white rounded-[36px] p-6 sm:p-10 border-4 border-[#FF6B6B] shadow-[0_10px_0_#D94B4B] space-y-8">
          
          <div className="border-b-4 border-gray-100 pb-6 space-y-3">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#FF6B6B]/15 border-2 border-[#FF6B6B] text-[#FF6B6B] text-xs font-black uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Children & Family Privacy</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-[#2D2D2D] tracking-tight">
              Privacy Policy & Safe Harbor Pledge
            </h1>
            <p className="text-sm font-bold text-gray-500">
              Effective Date: September 4, 2026 • Governing Standards: COPPA, GDPR-K, FERPA
            </p>
          </div>

          <div className="bg-[#FFF9F0] p-5 rounded-2xl border-2 border-[#FFD93D] space-y-2 text-sm text-[#2D2D2D]">
            <p className="font-extrabold text-[#2D2D2D]">
              🛡️ Our Simple Promise to Parents & Educators:
            </p>
            <p className="font-medium leading-relaxed">
              First Open School is built specifically for young children (ages 2 to 12+). We do not require account registration, do not sell user data, do not run behavioral advertisements, do not track children across websites, and do not store children’s voice recordings on remote servers.
            </p>
          </div>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-[#2D2D2D] tracking-tight flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#FF6B6B]" />
              <span>1. Compliance with COPPA & Children’s Privacy Laws</span>
            </h2>
            <p className="text-sm text-[#2D2D2D]/85 leading-relaxed font-medium">
              We strictly adhere to the United States <strong>Children’s Online Privacy Protection Act (COPPA)</strong>, the European Union <strong>General Data Protection Regulation for Kids (GDPR-K)</strong>, and the <strong>Family Educational Rights and Privacy Act (FERPA)</strong>. We never knowingly collect personally identifiable information (PII) from children under the age of 13 without verified parental consent.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-[#2D2D2D] tracking-tight flex items-center gap-2">
              <Cpu className="w-5 h-5 text-[#4D96FF]" />
              <span>2. Local Storage Architecture (Zero Cloud Profiling)</span>
            </h2>
            <p className="text-sm text-[#2D2D2D]/85 leading-relaxed font-medium">
              All learning progress, star balances, daily streak counts, assessment scores, and tracing accuracy data are stored exclusively inside the local browser storage (<code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs font-mono">localStorage</code>) of your personal device. If you clear your browser cookies and site data, or reset the student profile inside the PIN-protected Parental Dashboard, that data is permanently removed from your machine.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-[#2D2D2D] tracking-tight flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#6BCB77]" />
              <span>3. AI Queries & Audio Speech Synthesis</span>
            </h2>
            <p className="text-sm text-[#2D2D2D]/85 leading-relaxed font-medium">
              • <strong>Audio & Speech:</strong> Speech pronunciation and phonics audio use the standard, built-in browser Web Speech Synthesis API. No voice audio is recorded, transmitted, or stored on remote servers.<br />
              • <strong>AI Assistant (Gemini):</strong> When parents or students use the "Ask the Encyclopedia" or "AI Parent Coach" features, requests are processed statelessly without attaching any student names, IDs, IP histories, or private profiles.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-[#2D2D2D] tracking-tight flex items-center gap-2">
              <Mail className="w-5 h-5 text-[#FFD93D]" />
              <span>4. Data Controller & Inquiries</span>
            </h2>
            <p className="text-sm text-[#2D2D2D]/85 leading-relaxed font-medium">
              First Open School is operated and published by <strong>Arkade Digital Limited (UK)</strong> in collaboration with founder <strong>Umer Idrisi</strong>. For any privacy requests, parental inquiries, or data deletion verification, contact us at: <a href="mailto:privacy@firstopenschool.com" className="font-bold text-[#4D96FF] underline">privacy@firstopenschool.com</a>.
            </p>
          </section>

        </article>
      )}

      {/* ========================================================================= */}
      {/* 2. TERMS OF SERVICE */}
      {/* ========================================================================= */}
      {tab === 'terms' && (
        <article className="bg-white rounded-[36px] p-6 sm:p-10 border-4 border-[#4D96FF] shadow-[0_10px_0_#3A72C1] space-y-8">
          
          <div className="border-b-4 border-gray-100 pb-6 space-y-3">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#4D96FF]/15 border-2 border-[#4D96FF] text-[#4D96FF] text-xs font-black uppercase tracking-wider">
              <FileText className="w-4 h-4" />
              <span>Educational Terms of Use</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-[#2D2D2D] tracking-tight">
              Terms of Service & Open Access Charter
            </h1>
            <p className="text-sm font-bold text-gray-500">
              Last Updated: September 4, 2026 • First Open School & Arkade Digital Limited
            </p>
          </div>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-[#2D2D2D] tracking-tight">
              1. Acceptance & Educational Mission
            </h2>
            <p className="text-sm text-[#2D2D2D]/85 leading-relaxed font-medium">
              By accessing First Open School (<a href="https://firstopenschool.com" className="text-[#4D96FF] font-bold underline">https://firstopenschool.com</a>), you agree to these Terms of Service. First Open School is dedicated to providing free, accessible, and high-quality early childhood literacy and numeracy education to children, parents, teachers, and homeschoolers worldwide.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-[#2D2D2D] tracking-tight">
              2. Permitted Classroom & Family Usage
            </h2>
            <div className="space-y-2.5">
              <div className="flex items-start space-x-3 p-3.5 bg-gray-50 rounded-2xl border-2 border-gray-200 text-sm font-medium text-[#2D2D2D]">
                <CheckCircle2 className="w-5 h-5 text-[#6BCB77] shrink-0 mt-0.5" />
                <span><strong>Free for Families:</strong> Parents and guardians may use all modules, flashcards, decodable stories, and games for home learning without subscriptions.</span>
              </div>
              <div className="flex items-start space-x-3 p-3.5 bg-gray-50 rounded-2xl border-2 border-gray-200 text-sm font-medium text-[#2D2D2D]">
                <CheckCircle2 className="w-5 h-5 text-[#6BCB77] shrink-0 mt-0.5" />
                <span><strong>Classroom & Tutors:</strong> Teachers may project the lessons onto smartboards, assign stroke tracing exercises, and print study cards and completion certificates for classroom students.</span>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-[#2D2D2D] tracking-tight">
              3. Intellectual Property & Stewardship
            </h2>
            <p className="text-sm text-[#2D2D2D]/85 leading-relaxed font-medium">
              All proprietary curriculum structures, educational illustrations, gamified code architectures, and branding elements are the copyrighted property of <strong>Arkade Digital Limited (UK)</strong> and creator <strong>Umer Idrisi</strong>. You may not scrape, mirror, or repackage the application into paid commercial bundles without prior written authorization.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-[#2D2D2D] tracking-tight">
              4. Disclaimer & Educational Guidance
            </h2>
            <p className="text-sm text-[#2D2D2D]/85 leading-relaxed font-medium">
              First Open School is designed as a foundational supplementary learning tool. While designed with evidence-based phonological and numeracy standards, parental or guardian supervision is encouraged for the optimal development of young learners.
            </p>
          </section>

        </article>
      )}

      {/* ========================================================================= */}
      {/* 3. DATA SAFETY & COPPA PLEDGE */}
      {/* ========================================================================= */}
      {tab === 'data-safety' && (
        <article className="bg-white rounded-[36px] p-6 sm:p-10 border-4 border-[#6BCB77] shadow-[0_10px_0_#4E9B56] space-y-8">
          
          <div className="border-b-4 border-gray-100 pb-6 space-y-3">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#6BCB77]/15 border-2 border-[#6BCB77] text-[#6BCB77] text-xs font-black uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Child Safety Framework</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-[#2D2D2D] tracking-tight">
              Kids Data Safety & Protection Architecture
            </h1>
            <p className="text-sm font-bold text-gray-500">
              Zero Tracking • Zero Third-Party Ads • Complete Local Privacy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 bg-[#FFF9F0] rounded-2xl border-3 border-[#FFD93D] space-y-2">
              <div className="text-2xl">🚫</div>
              <h3 className="font-black text-base text-[#2D2D2D]">No Unmonitored Chat</h3>
              <p className="text-xs text-[#2D2D2D]/80 font-medium">
                Children cannot communicate with strangers. There are zero open chat rooms, direct messages, or public social feeds.
              </p>
            </div>

            <div className="p-5 bg-emerald-50 rounded-2xl border-3 border-emerald-300 space-y-2">
              <div className="text-2xl">🔒</div>
              <h3 className="font-black text-base text-emerald-950">Parental PIN Gate</h3>
              <p className="text-xs text-emerald-900/80 font-medium">
                The settings, audio pacing toggles, profile resets, and AI Coach analysis are locked behind a parental math challenge and PIN code.
              </p>
            </div>

            <div className="p-5 bg-blue-50 rounded-2xl border-3 border-blue-300 space-y-2">
              <div className="text-2xl">📱</div>
              <h3 className="font-black text-base text-blue-950">100% Offline Resilience</h3>
              <p className="text-xs text-blue-900/80 font-medium">
                The entire curriculum runs offline via Service Worker caching. Kids can safely learn in airplanes, cars, and remote classrooms without an internet link.
              </p>
            </div>

            <div className="p-5 bg-rose-50 rounded-2xl border-3 border-rose-300 space-y-2">
              <div className="text-2xl">🛡️</div>
              <h3 className="font-black text-base text-rose-950">Ad-Free Safe Haven</h3>
              <p className="text-xs text-rose-900/80 font-medium">
                No third-party advertising SDKs, pop-ups, trackers, or commercial banners will ever be injected into learning sessions.
              </p>
            </div>
          </div>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-[#2D2D2D] tracking-tight">
              Safety Verification Matrix
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm font-medium border-2 border-gray-200 rounded-2xl overflow-hidden">
                <thead className="bg-gray-100 text-[#2D2D2D] font-black uppercase text-[11px]">
                  <tr>
                    <th className="p-3">Safety Vector</th>
                    <th className="p-3">Implementation</th>
                    <th className="p-3">Risk Level</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  <tr>
                    <td className="p-3 font-bold">Personal Data Collection</td>
                    <td className="p-3 text-emerald-700 font-bold">None (Stored in local browser storage only)</td>
                    <td className="p-3 text-emerald-700 font-bold">Zero</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">Targeted Marketing</td>
                    <td className="p-3 text-emerald-700 font-bold">Strictly Prohibited & Absent</td>
                    <td className="p-3 text-emerald-700 font-bold">Zero</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">AI Interaction Safety</td>
                    <td className="p-3 text-blue-700 font-bold">Pre-filtered pedagogical prompts only</td>
                    <td className="p-3 text-blue-700 font-bold">Protected</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">Microtransactions & In-App Buys</td>
                    <td className="p-3 text-emerald-700 font-bold">None (Stars are earned strictly by learning)</td>
                    <td className="p-3 text-emerald-700 font-bold">Zero</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

        </article>
      )}

      {/* ========================================================================= */}
      {/* 4. EDITORIAL & PEDAGOGICAL POLICY */}
      {/* ========================================================================= */}
      {tab === 'editorial-policy' && (
        <article className="bg-white rounded-[36px] p-6 sm:p-10 border-4 border-[#FFD93D] shadow-[0_10px_0_#C9A92E] space-y-8">
          
          <div className="border-b-4 border-gray-100 pb-6 space-y-3">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#FFD93D]/25 border-2 border-[#FFD93D] text-[#2D2D2D] text-xs font-black uppercase tracking-wider">
              <BookOpen className="w-4 h-4" />
              <span>Educational Standards</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-[#2D2D2D] tracking-tight">
              Pedagogical Framework & Editorial Policy
            </h1>
            <p className="text-sm font-bold text-gray-500">
              Inspired by the Computer Language Company (CDE) Precision & Evidence-Based Early Literacy
            </p>
          </div>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-[#2D2D2D] tracking-tight flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#FF6B6B]" />
              <span>1. The CDE-Inspired Clarity Standard</span>
            </h2>
            <p className="text-sm text-[#2D2D2D]/85 leading-relaxed font-medium">
              Modeled after the renowned Computer Language Company (CDE) encyclopedia philosophy, every single concept in the First Open School Kids Encyclopedia is crafted to be immediately understandable, vivid, and memorable. We ban convoluted jargon, replace abstract definitions with tangible everyday physical analogies (such as comparing the heart to a garden water pump or letter A to a sturdy tent), and provide concrete anatomy breakdowns for rapid conceptual mastery.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-[#2D2D2D] tracking-tight flex items-center gap-2">
              <Award className="w-5 h-5 text-[#4D96FF]" />
              <span>2. Synthetic Phonics & Orton-Gillingham Principles</span>
            </h2>
            <p className="text-sm text-[#2D2D2D]/85 leading-relaxed font-medium">
              Early reading instruction is built upon synthetic phonics foundations:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm text-[#2D2D2D]/85 font-medium pl-2">
              <li><strong>Phonemic Isolation:</strong> Teaching pure, unclipped letter sounds (avoiding the addition of extraneous "uh" schwa sounds).</li>
              <li><strong>Mouth Mechanics & Kinesthetics:</strong> Demonstrating exactly how the tongue, lips, and vocal cords vibrate to produce vowels and consonants.</li>
              <li><strong>Decodable Continuity:</strong> Providing multi-page readers where students apply newly acquired sound-letter pairings to authentic stories.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-[#2D2D2D] tracking-tight flex items-center gap-2">
              <Globe className="w-5 h-5 text-[#6BCB77]" />
              <span>3. Subitizing & Concrete Numeracy</span>
            </h2>
            <p className="text-sm text-[#2D2D2D]/85 leading-relaxed font-medium">
              Our number curriculum follows the Concrete-Representational-Abstract (CRA) progression. Children learn to instantly recognize dot clusters (perceptual and conceptual subitizing) before transitioning to numeral writing and early arithmetic.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-[#2D2D2D] tracking-tight flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-[#2D2D2D]" />
              <span>4. Fact Verification & Anti-Slop Discipline</span>
            </h2>
            <p className="text-sm text-[#2D2D2D]/85 leading-relaxed font-medium">
              All scientific, biological, historical, and geographical articles are cross-referenced with authoritative astronomical and biological sources (NASA, Smithsonian, National Geographic for Kids) to ensure accuracy, age-appropriate fascination, and timeless educational value.
            </p>
          </section>

        </article>
      )}

      {/* ========================================================================= */}
      {/* 5. ABOUT US & CREATOR CREDITS */}
      {/* ========================================================================= */}
      {tab === 'about' && (
        <article className="bg-white rounded-[36px] p-6 sm:p-10 border-4 border-[#2D2D2D] shadow-[0_10px_0_#2D2D2D] space-y-8">
          
          <div className="border-b-4 border-gray-100 pb-6 space-y-3">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#2D2D2D] text-white text-xs font-black uppercase tracking-wider">
              <Heart className="w-4 h-4 text-[#FF6B6B]" />
              <span>Creator Credits & Mission</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-[#2D2D2D] tracking-tight">
              About First Open School
            </h1>
            <p className="text-sm font-bold text-gray-500">
              An Open Educational Project by Umer Idrisi & Arkade Digital Limited (UK)
            </p>
          </div>

          {/* Spotlight Creator Card */}
          <div className="bg-gradient-to-br from-[#FFF9F0] via-white to-amber-50 p-6 sm:p-8 rounded-3xl border-4 border-[#FFD93D] shadow-[0_6px_0_#C9A92E] space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-[#FF6B6B] text-white font-black text-2xl flex items-center justify-center border-3 border-black shadow-xs shrink-0">
                UI
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h2 className="text-2xl font-black text-[#2D2D2D]">Umer Idrisi</h2>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black border border-emerald-300">
                    Founder & Creator
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-black border border-blue-300">
                    🇵🇰 Pakistan
                  </span>
                </div>
                <p className="text-sm font-extrabold text-[#4D96FF] mt-0.5">
                  Blogger, Entrepreneur & EdTech Innovator
                </p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#2D2D2D]/90 font-medium leading-relaxed">
              <strong>Umer Idrisi</strong> is a visionary Pakistani blogger, technologist, and digital entrepreneur with a relentless passion for opening up early childhood education. Witnessing how commercial learning apps lock fundamental literacy behind paywalls and invasive advertisement trackers, Umer conceptualized <strong>First Open School</strong> — an open-access, ad-free, and universally accessible learning paradise where every child, regardless of geographic or financial boundaries, can master alphabets, numbers, and scientific curiosity.
            </p>
          </div>

          {/* Project Organization Card */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border-4 border-[#4D96FF] shadow-[0_6px_0_#3A72C1] space-y-4">
            <div className="flex items-center gap-3">
              <Building2 className="w-8 h-8 text-[#4D96FF]" />
              <div>
                <h3 className="text-xl font-black text-[#2D2D2D]">Arkade Digital Limited (UK)</h3>
                <p className="text-xs font-black text-[#4D96FF] uppercase tracking-wider">
                  Publisher & Technical Infrastructure Steward • 🇬🇧 United Kingdom
                </p>
              </div>
            </div>
            <p className="text-sm text-[#2D2D2D]/85 font-medium leading-relaxed">
              First Open School is brought to life and maintained as an official digital initiative of <strong>Arkade Digital Limited</strong>, a UK-registered digital enterprise committed to building impactful web platforms, open tools, and child-safe software.
            </p>
          </div>

          {/* Key Facts Summary */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 bg-gray-50 rounded-2xl border-2 border-gray-200 text-center space-y-1">
              <div className="text-2xl">🌱</div>
              <div className="font-black text-sm text-[#2D2D2D]">100% Free Forever</div>
              <div className="text-xs text-gray-500 font-medium">No paywalls or subscriptions</div>
            </div>

            <div className="p-4 bg-gray-50 rounded-2xl border-2 border-gray-200 text-center space-y-1">
              <div className="text-2xl">🚫</div>
              <div className="font-black text-sm text-[#2D2D2D]">Ad-Free & Safe</div>
              <div className="text-xs text-gray-500 font-medium">Zero commercial trackers</div>
            </div>

            <div className="p-4 bg-gray-50 rounded-2xl border-2 border-gray-200 text-center space-y-1">
              <div className="text-2xl">🌍</div>
              <div className="font-black text-sm text-[#2D2D2D]">Global Open Access</div>
              <div className="text-xs text-gray-500 font-medium">Offline-ready on any device</div>
            </div>
          </div>

          {/* Contact and Feedback */}
          <div className="border-t-4 border-gray-100 pt-6 space-y-3">
            <h3 className="text-lg font-black text-[#2D2D2D] flex items-center gap-2">
              <Mail className="w-5 h-5 text-[#FF6B6B]" />
              <span>Contact & Educator Inquiries</span>
            </h3>
            <p className="text-sm text-[#2D2D2D]/80 font-medium">
              We welcome partnerships with primary schools, homeschool cooperatives, and early literacy researchers:
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-black">
              <a 
                href="mailto:contact@firstopenschool.com" 
                className="px-4 py-2.5 bg-[#FFF9F0] hover:bg-[#FFD93D] text-[#2D2D2D] rounded-xl border-2 border-gray-300 transition-all"
              >
                📧 contact@firstopenschool.com
              </a>
              <span className="text-gray-400">•</span>
              <span>Official Domain: https://firstopenschool.com</span>
            </div>
          </div>

        </article>
      )}

    </div>
  );
};
