import React, { useRef, useState, useEffect } from 'react';
import { LetterData, DigitData, StudentProfile, ParentSettings } from '../../types';
import { ALPHABET_DATA, DIGIT_DATA } from '../../data/curriculumData';
import { speakText, playSoundEffect } from '../../utils/sound';
import confetti from 'canvas-confetti';
import { RotateCcw, Sparkles, Star, Award, CheckCircle } from 'lucide-react';

interface TracingCanvasProps {
  initialTarget?: LetterData | DigitData;
  student: StudentProfile;
  settings: ParentSettings;
  onSaveProgress: (itemId: string, type: 'letter' | 'digit', accuracy: number) => void;
}

export const TracingCanvas: React.FC<TracingCanvasProps> = ({
  initialTarget,
  student,
  settings,
  onSaveProgress
}) => {
  const [targetType, setTargetType] = useState<'letter' | 'digit'>(
    initialTarget && 'value' in initialTarget ? 'digit' : 'letter'
  );
  
  const [selectedLetter, setSelectedLetter] = useState<LetterData>(
    initialTarget && 'char' in initialTarget ? initialTarget : ALPHABET_DATA[0]
  );

  const [selectedDigit, setSelectedDigit] = useState<DigitData>(
    initialTarget && 'value' in initialTarget ? initialTarget : DIGIT_DATA[1]
  );

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [drawnPoints, setDrawnPoints] = useState<{ x: number; y: number }[]>([]);
  const [accuracy, setAccuracy] = useState<number | null>(null);
  const [stars, setStars] = useState<number>(0);

  const activePath = targetType === 'letter' ? selectedLetter.tracingPath : selectedDigit.tracingPath;
  const activeChar = targetType === 'letter' ? selectedLetter.char : String(selectedDigit.value);
  const activeTitle = targetType === 'letter' 
    ? `Letter ${selectedLetter.char} (${selectedLetter.exampleWord} ${selectedLetter.emoji})`
    : `Digit ${selectedDigit.value} (${selectedDigit.word} ${selectedDigit.emoji})`;

  // Redraw canvas guide and drawn lines
  const drawCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw Guide Outline (Dotted Line)
    if (activePath && activePath.length > 0) {
      ctx.beginPath();
      ctx.strokeStyle = '#cbd5e1'; // Slate-300
      ctx.lineWidth = 28;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.setLineDash([12, 12]);

      activePath.forEach((pt, idx) => {
        const px = (pt.x / 100) * canvas.width;
        const py = (pt.y / 100) * canvas.height;
        if (idx === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      });
      ctx.stroke();
      ctx.setLineDash([]);

      // Draw Guide Points & Directional Dots
      activePath.forEach((pt, idx) => {
        const px = (pt.x / 100) * canvas.width;
        const py = (pt.y / 100) * canvas.height;
        ctx.beginPath();
        ctx.fillStyle = idx === 0 ? '#ef4444' : '#3b82f6'; // Start red, then blue
        ctx.arc(px, py, idx === 0 ? 10 : 6, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    // Draw User Strokes
    if (drawnPoints.length > 0) {
      ctx.beginPath();
      ctx.strokeStyle = '#3b82f6'; // Bright Blue
      ctx.lineWidth = 22;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      drawnPoints.forEach((pt, idx) => {
        if (idx === 0) ctx.moveTo(pt.x, pt.y);
        else ctx.lineTo(pt.x, pt.y);
      });
      ctx.stroke();
    }
  };

  useEffect(() => {
    drawCanvas();
  }, [selectedLetter, selectedDigit, targetType, drawnPoints]);

  const handleClear = () => {
    setDrawnPoints([]);
    setAccuracy(null);
    setStars(0);
    playSoundEffect('pop', settings.soundEffects);
    speakText("Canvas cleared! Try tracing again.", settings.voiceGuidance);
  };

  const getCanvasPos = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();

    let clientX = 0;
    let clientY = 0;

    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    return {
      x: ((clientX - rect.left) / rect.width) * canvas.width,
      y: ((clientY - rect.top) / rect.height) * canvas.height,
    };
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    const pos = getCanvasPos(e);
    setDrawnPoints([pos]);
  };

  const drawMove = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const pos = getCanvasPos(e);
    setDrawnPoints(prev => [...prev, pos]);
  };

  const stopDrawing = () => {
    if (!isDrawing) return;
    setIsDrawing(false);

    // Calculate Tracing Accuracy
    if (drawnPoints.length > 5) {
      calculateAccuracy();
    }
  };

  const calculateAccuracy = () => {
    const canvas = canvasRef.current;
    if (!canvas || !activePath || activePath.length === 0) return;

    // Check how close drawn points are to guide path points
    let hitCount = 0;
    const pathPixels = activePath.map(pt => ({
      x: (pt.x / 100) * canvas.width,
      y: (pt.y / 100) * canvas.height,
    }));

    pathPixels.forEach(guidePt => {
      const isHit = drawnPoints.some(userPt => {
        const dist = Math.hypot(userPt.x - guidePt.x, userPt.y - guidePt.y);
        return dist < 35; // Touch tolerance radius
      });
      if (isHit) hitCount++;
    });

    const score = Math.round((hitCount / pathPixels.length) * 100);
    const clampedScore = Math.min(100, Math.max(50, score));

    setAccuracy(clampedScore);

    let earnedStars = 1;
    if (clampedScore >= 85) earnedStars = 3;
    else if (clampedScore >= 70) earnedStars = 2;

    setStars(earnedStars);

    // Save progress to student state
    onSaveProgress(activeChar, targetType, clampedScore);

    // Trigger celebration effects
    playSoundEffect('victory', settings.soundEffects);
    confetti({ particleCount: earnedStars * 25, spread: 60, origin: { y: 0.6 } });

    speakText(
      `Wonderful tracing! Accuracy ${clampedScore} percent. You earned ${earnedStars} stars!`,
      settings.voiceGuidance
    );
  };

  return (
    <div className="space-y-6 pb-12">
      
      {/* Header Controls */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
        <div>
          <h2 className="text-2xl font-black text-slate-800 tracking-tight flex items-center gap-2">
            <span>🎨 Interactive Guided Tracing</span>
            <span className="text-xs px-2.5 py-1 bg-amber-100 text-amber-800 font-extrabold rounded-full">
              Fine Motor Skills
            </span>
          </h2>
          <p className="text-xs text-slate-500 font-medium">
            Follow the red dot start marker and trace over the guide path!
          </p>
        </div>

        {/* Target Selector */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => {
              setTargetType('letter');
              playSoundEffect('click', settings.soundEffects);
            }}
            className={`px-4 py-2 rounded-2xl font-black text-xs transition-all ${
              targetType === 'letter' ? 'bg-rose-500 text-white shadow-md' : 'bg-slate-100 text-slate-600'
            }`}
          >
            Letters A-Z
          </button>
          <button
            onClick={() => {
              setTargetType('digit');
              playSoundEffect('click', settings.soundEffects);
            }}
            className={`px-4 py-2 rounded-2xl font-black text-xs transition-all ${
              targetType === 'digit' ? 'bg-emerald-500 text-white shadow-md' : 'bg-slate-100 text-slate-600'
            }`}
          >
            Digits 0-20
          </button>
        </div>
      </div>

      {/* Target Item Carousel */}
      <div className="flex overflow-x-auto space-x-2 pb-2 scrollbar-none">
        {targetType === 'letter' ? (
          ALPHABET_DATA.map((l) => (
            <button
              key={l.char}
              onClick={() => {
                setSelectedLetter(l);
                handleClear();
                speakText(`Trace Letter ${l.char}`, settings.voiceGuidance);
              }}
              className={`flex-none w-12 h-12 rounded-2xl font-black text-lg border transition-all ${
                selectedLetter.char === l.char
                  ? 'bg-rose-500 text-white border-rose-600 shadow-md scale-105 ring-2 ring-rose-300'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
              }`}
            >
              {l.char}
            </button>
          ))
        ) : (
          DIGIT_DATA.map((d) => (
            <button
              key={d.value}
              onClick={() => {
                setSelectedDigit(d);
                handleClear();
                speakText(`Trace Digit ${d.value}`, settings.voiceGuidance);
              }}
              className={`flex-none w-12 h-12 rounded-2xl font-black text-lg border transition-all ${
                selectedDigit.value === d.value
                  ? 'bg-emerald-500 text-white border-emerald-600 shadow-md scale-105 ring-2 ring-emerald-300'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
              }`}
            >
              {d.value}
            </button>
          ))
        )}
      </div>

      {/* Tracing Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Canvas Area (2 cols on desktop) */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4 flex flex-col items-center justify-center">
          
          <div className="flex items-center justify-between w-full">
            <h3 className="font-extrabold text-lg text-slate-800">{activeTitle}</h3>
            <button
              onClick={handleClear}
              className="flex items-center space-x-1 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Canvas</span>
            </button>
          </div>

          {/* Touch Canvas */}
          <div className="relative touch-none bg-slate-50 border-2 border-dashed border-slate-300 rounded-3xl shadow-inner p-2 cursor-crosshair">
            <canvas
              ref={canvasRef}
              width={400}
              height={400}
              onMouseDown={startDrawing}
              onMouseMove={drawMove}
              onMouseUp={stopDrawing}
              onMouseLeave={stopDrawing}
              onTouchStart={startDrawing}
              onTouchMove={drawMove}
              onTouchEnd={stopDrawing}
              className="w-full max-w-[360px] h-[360px] rounded-2xl"
            />
          </div>

          <p className="text-xs text-slate-400 font-medium text-center">
            🔴 Red dot is start point. Drag finger or mouse along guide path.
          </p>

        </div>

        {/* Score & Feedback Panel */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-6 flex flex-col justify-between">
          <div>
            <h3 className="font-extrabold text-lg text-slate-800 border-b pb-3 border-slate-100">
              Tracing Evaluation
            </h3>

            {accuracy === null ? (
              <div className="text-center py-12 space-y-3">
                <Sparkles className="w-12 h-12 text-amber-400 mx-auto animate-bounce" />
                <p className="text-slate-500 font-bold text-sm">
                  Trace the path above to evaluate your stroke accuracy!
                </p>
              </div>
            ) : (
              <div className="space-y-6 py-6 text-center">
                <div className="flex items-center justify-center space-x-2">
                  {[1, 2, 3].map((st) => (
                    <Star
                      key={st}
                      className={`w-10 h-10 ${
                        st <= stars ? 'text-amber-400 fill-amber-400 animate-pulse' : 'text-slate-200'
                      }`}
                    />
                  ))}
                </div>

                <div className="space-y-1">
                  <div className="text-4xl font-black text-slate-800">{accuracy}%</div>
                  <div className="text-xs font-bold text-emerald-600 flex items-center justify-center gap-1">
                    <CheckCircle className="w-4 h-4" />
                    <span>Great Fine Motor Control!</span>
                  </div>
                </div>

                <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 text-amber-900 text-xs font-medium">
                  {stars === 3 ? "🌟 Outstanding tracing precision! Perfect score!" : "👍 Keep practicing for 3 full stars!"}
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => {
              handleClear();
              speakText("Ready for next trace!", settings.voiceGuidance);
            }}
            className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm rounded-2xl shadow-md transition-all active:scale-95"
          >
            Practice Again
          </button>
        </div>

      </div>

    </div>
  );
};
