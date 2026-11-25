import React, { useRef, useState, useEffect, useCallback } from 'react';
import { LetterData, DigitData, StudentProfile, ParentSettings } from '../../types';
import { ALPHABET_DATA, DIGIT_DATA } from '../../data/curriculumData';
import {
  Point2D,
  TracingStroke,
  TracingGlyph,
  TracingEvaluationResult,
  RULED_LINES,
  getGlyphForTarget,
  sampleStrokePoints,
  getStrokeStartAndDirection,
  evaluateSingleGuidedStroke,
  evaluateFullGlyphTracing,
} from '../../data/tracingPaths';
import { speakText, playSoundEffect } from '../../utils/sound';
import confetti from 'canvas-confetti';
import {
  RotateCcw,
  Undo2,
  Play,
  Square,
  Volume2,
  Star,
  CheckCircle2,
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Eye,
} from 'lucide-react';

interface TracingCanvasProps {
  initialTarget?: LetterData | DigitData;
  student: StudentProfile;
  settings: ParentSettings;
  onSaveProgress: (itemId: string, type: 'letter' | 'digit', accuracy: number) => void;
}

type CategoryMode = 'uppercase' | 'lowercase' | 'digit';
type PracticeMode = 'guided' | 'free';
type GuideStrength = 'full' | 'faint' | 'memory';

interface InkOption {
  id: string;
  label: string;
  hex: string;
}

const INK_OPTIONS: InkOption[] = [
  { id: 'blue', label: 'Royal Blue', hex: '#2563EB' },
  { id: 'rose', label: 'Berry Rose', hex: '#E11D48' },
  { id: 'emerald', label: 'Forest Green', hex: '#059669' },
  { id: 'amber', label: 'Sunset Orange', hex: '#D97706' },
  { id: 'rainbow', label: 'Rainbow Ink', hex: 'rainbow' },
];

const LOGICAL_SIZE = 460;

export const TracingCanvas: React.FC<TracingCanvasProps> = ({
  initialTarget,
  student,
  settings,
  onSaveProgress,
}) => {
  const [categoryMode, setCategoryMode] = useState<CategoryMode>(() => {
    if (initialTarget) {
      return 'value' in initialTarget ? 'digit' : 'uppercase';
    }
    try {
      const savedType = localStorage.getItem(`first_open_last_tracing_mode_${student.id}`);
      if (savedType === 'uppercase' || savedType === 'lowercase' || savedType === 'digit') {
        return savedType;
      }
      const legacyType = localStorage.getItem(`first_open_last_tracing_type_${student.id}`);
      if (legacyType === 'digit') return 'digit';
    } catch {}
    return 'uppercase';
  });

  const [selectedLetter, setSelectedLetter] = useState<LetterData>(() => {
    if (initialTarget && 'char' in initialTarget) return initialTarget;
    try {
      const savedTarget = localStorage.getItem(`first_open_last_tracing_letter_${student.id}`);
      if (savedTarget) {
        const found = ALPHABET_DATA.find((a) => a.char === savedTarget);
        if (found) return found;
      }
    } catch {}
    const unmastered = ALPHABET_DATA.find((a) => !student.progress[a.char]?.mastered);
    return unmastered || ALPHABET_DATA[0];
  });

  const [selectedDigit, setSelectedDigit] = useState<DigitData>(() => {
    if (initialTarget && 'value' in initialTarget) return initialTarget;
    try {
      const savedTarget = localStorage.getItem(`first_open_last_tracing_digit_${student.id}`);
      if (savedTarget !== null) {
        const val = parseInt(savedTarget, 10);
        const found = DIGIT_DATA.find((d) => d.value === val);
        if (found) return found;
      }
    } catch {}
    const startIdx =
      student.ageTier === 'grade-1-2' || student.ageTier === 'k12-foundations' ? 11 : 1;
    const unmastered = DIGIT_DATA.slice(startIdx).find(
      (d) => !student.progress[String(d.value)]?.mastered
    );
    return unmastered || DIGIT_DATA[startIdx] || DIGIT_DATA[1];
  });

  const [practiceMode, setPracticeMode] = useState<PracticeMode>('guided');
  const [guideStrength, setGuideStrength] = useState<GuideStrength>('full');
  const [selectedInk, setSelectedInk] = useState<InkOption>(INK_OPTIONS[0]);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const activePointerIdRef = useRef<number | null>(null);
  const demoRafRef = useRef<number | null>(null);

  // Completed strokes in normalized 0..100 coordinates
  const [completedStrokes, setCompletedStrokes] = useState<Point2D[][]>([]);
  // Currently active stroke being drawn (normalized 0..100 coordinates)
  const [currentStroke, setCurrentStroke] = useState<Point2D[]>([]);
  const [isDrawing, setIsDrawing] = useState(false);

  // Guided step feedback & demo state
  const [strokeFeedback, setStrokeFeedback] = useState<string | null>(null);
  const [evaluation, setEvaluation] = useState<TracingEvaluationResult | null>(null);
  const [showPrecisionOverlay, setShowPrecisionOverlay] = useState(true);
  const [isDemoPlaying, setIsDemoPlaying] = useState(false);
  const [demoProgress, setDemoProgress] = useState<{ strokeIdx: number; t: number } | null>(null);

  // Sync if initialTarget prop changes via route navigation
  useEffect(() => {
    if (!initialTarget) return;
    if ('value' in initialTarget) {
      setCategoryMode('digit');
      setSelectedDigit(initialTarget);
    } else {
      setCategoryMode((prev) => (prev === 'lowercase' ? 'lowercase' : 'uppercase'));
      setSelectedLetter(initialTarget);
    }
    resetWorkspaceState();
  }, [initialTarget]);

  // Persist user selections
  useEffect(() => {
    try {
      localStorage.setItem(`first_open_last_tracing_mode_${student.id}`, categoryMode);
      localStorage.setItem(
        `first_open_last_tracing_type_${student.id}`,
        categoryMode === 'digit' ? 'digit' : 'letter'
      );
      if (categoryMode !== 'digit') {
        localStorage.setItem(`first_open_last_tracing_letter_${student.id}`, selectedLetter.char);
      } else {
        localStorage.setItem(
          `first_open_last_tracing_digit_${student.id}`,
          String(selectedDigit.value)
        );
      }
    } catch {}
  }, [categoryMode, selectedLetter, selectedDigit, student.id]);

  const glyphKey =
    categoryMode === 'uppercase'
      ? selectedLetter.char
      : categoryMode === 'lowercase'
      ? selectedLetter.lowercase
      : String(selectedDigit.value);

  const activeGlyph: TracingGlyph = getGlyphForTarget(categoryMode, glyphKey);

  const progressKey =
    categoryMode === 'digit' ? String(selectedDigit.value) : selectedLetter.char;
  const savedRecord = student.progress[progressKey];

  const activeStepIndex = Math.min(completedStrokes.length, activeGlyph.strokes.length - 1);
  const allGuidedStrokesComplete =
    practiceMode === 'guided' && completedStrokes.length >= activeGlyph.strokes.length;

  const stopDemo = useCallback(() => {
    if (demoRafRef.current !== null) {
      cancelAnimationFrame(demoRafRef.current);
      demoRafRef.current = null;
    }
    setIsDemoPlaying(false);
    setDemoProgress(null);
  }, []);

  const resetWorkspaceState = useCallback(() => {
    stopDemo();
    setCompletedStrokes([]);
    setCurrentStroke([]);
    setIsDrawing(false);
    setStrokeFeedback(null);
    setEvaluation(null);
    activePointerIdRef.current = null;
  }, [stopDemo]);

  useEffect(() => {
    return () => {
      if (demoRafRef.current !== null) cancelAnimationFrame(demoRafRef.current);
    };
  }, []);

  const startDemo = () => {
    if (isDemoPlaying) {
      stopDemo();
      return;
    }
    stopDemo();
    setIsDemoPlaying(true);

    const strokeCount = activeGlyph.strokes.length;
    const msPerStroke = 1050;
    const pauseBetweenMs = 220;
    const totalPerStroke = msPerStroke + pauseBetweenMs;
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const strokeIdx = Math.floor(elapsed / totalPerStroke);

      if (strokeIdx >= strokeCount) {
        setIsDemoPlaying(false);
        setDemoProgress(null);
        demoRafRef.current = null;
        return;
      }

      const localElapsed = elapsed - strokeIdx * totalPerStroke;
      const t = Math.min(1, localElapsed / msPerStroke);
      setDemoProgress({ strokeIdx, t });
      demoRafRef.current = requestAnimationFrame(step);
    };

    demoRafRef.current = requestAnimationFrame(step);
  };

  // ============================================================================
  // CANVAS RENDERING (HiDPI, Ruled Paper, Bezier Guides, Numbered Arrows, Smooth Ink)
  // ============================================================================
  const drawStrokePath = (ctx: CanvasRenderingContext2D, s: TracingStroke, size: number) => {
    const scale = (v: number) => (v / 100) * size;
    if (s.isDot) {
      const p = s.segments[0].p0;
      ctx.beginPath();
      ctx.arc(scale(p.x), scale(p.y), 9, 0, Math.PI * 2);
      return;
    }
    ctx.beginPath();
    s.segments.forEach((seg, idx) => {
      if (idx === 0) {
        ctx.moveTo(scale(seg.p0.x), scale(seg.p0.y));
      }
      if (seg.type === 'line') {
        ctx.lineTo(scale(seg.p1.x), scale(seg.p1.y));
      } else {
        ctx.bezierCurveTo(
          scale(seg.p1.x),
          scale(seg.p1.y),
          scale(seg.p2.x),
          scale(seg.p2.y),
          scale(seg.p3.x),
          scale(seg.p3.y)
        );
      }
    });
  };

  const drawSmoothPolyline = (
    ctx: CanvasRenderingContext2D,
    pts: Point2D[],
    size: number,
    strokeStyle: string,
    lineWidth: number,
    isRainbow = false
  ) => {
    if (pts.length === 0) return;
    const scale = (v: number) => (v / 100) * size;

    if (pts.length === 1) {
      ctx.beginPath();
      ctx.fillStyle = isRainbow ? '#2563EB' : strokeStyle;
      ctx.arc(scale(pts[0].x), scale(pts[0].y), lineWidth / 2, 0, Math.PI * 2);
      ctx.fill();
      return;
    }

    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = lineWidth;

    if (!isRainbow) {
      ctx.beginPath();
      ctx.strokeStyle = strokeStyle;
      ctx.moveTo(scale(pts[0].x), scale(pts[0].y));
      for (let i = 1; i < pts.length - 1; i++) {
        const midX = (scale(pts[i].x) + scale(pts[i + 1].x)) / 2;
        const midY = (scale(pts[i].y) + scale(pts[i + 1].y)) / 2;
        ctx.quadraticCurveTo(scale(pts[i].x), scale(pts[i].y), midX, midY);
      }
      const last = pts[pts.length - 1];
      ctx.lineTo(scale(last.x), scale(last.y));
      ctx.stroke();
      return;
    }

    // Smooth rainbow gradient segments
    for (let i = 1; i < pts.length; i++) {
      const hue = (i * 7) % 360;
      ctx.beginPath();
      ctx.strokeStyle = `hsl(${hue}, 82%, 52%)`;
      ctx.moveTo(scale(pts[i - 1].x), scale(pts[i - 1].y));
      ctx.lineTo(scale(pts[i].x), scale(pts[i].y));
      ctx.stroke();
    }
  };

  const renderCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;
    const targetPx = LOGICAL_SIZE * dpr;

    if (canvas.width !== targetPx || canvas.height !== targetPx) {
      canvas.width = targetPx;
      canvas.height = targetPx;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.save();
    ctx.scale(dpr, dpr);
    const size = LOGICAL_SIZE;
    const scale = (v: number) => (v / 100) * size;

    // 1. Clean warm paper background
    ctx.fillStyle = '#FFFEFA';
    ctx.fillRect(0, 0, size, size);

    // Subtle vertical center guide
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(148, 163, 184, 0.16)';
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 6]);
    ctx.moveTo(scale(50), scale(10));
    ctx.lineTo(scale(50), scale(92));
    ctx.stroke();
    ctx.setLineDash([]);

    // 2. Primary Handwriting Ruled Lines
    // Sky line
    ctx.beginPath();
    ctx.strokeStyle = '#BAE6FD';
    ctx.lineWidth = 1.5;
    ctx.moveTo(16, scale(RULED_LINES.sky));
    ctx.lineTo(size - 16, scale(RULED_LINES.sky));
    ctx.stroke();

    // Midline (dashed)
    ctx.beginPath();
    ctx.strokeStyle = '#CBD5E1';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([7, 7]);
    ctx.moveTo(16, scale(RULED_LINES.mid));
    ctx.lineTo(size - 16, scale(RULED_LINES.mid));
    ctx.stroke();
    ctx.setLineDash([]);

    // Baseline (anchor)
    ctx.beginPath();
    ctx.strokeStyle = '#FDA4AF';
    ctx.lineWidth = 2;
    ctx.moveTo(16, scale(RULED_LINES.base));
    ctx.lineTo(size - 16, scale(RULED_LINES.base));
    ctx.stroke();

    // Descender line (subtle dashed)
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(203, 213, 225, 0.65)';
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 6]);
    ctx.moveTo(16, scale(RULED_LINES.descender));
    ctx.lineTo(size - 16, scale(RULED_LINES.descender));
    ctx.stroke();
    ctx.setLineDash([]);

    // Quiet line labels on left edge
    ctx.fillStyle = '#94A3B8';
    ctx.font = '600 10px system-ui, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('top', 18, scale(RULED_LINES.sky) - 5);
    ctx.fillText('mid', 18, scale(RULED_LINES.mid) - 5);
    ctx.fillText('base', 18, scale(RULED_LINES.base) - 5);

    // 3. Draw Guide Character Strokes (unless Memory mode with no evaluation overlay)
    if (guideStrength !== 'memory') {
      const baseAlpha = guideStrength === 'full' ? 1 : 0.38;

      activeGlyph.strokes.forEach((s, idx) => {
        const isCurrentGuided =
          practiceMode === 'guided' && !allGuidedStrokesComplete && idx === activeStepIndex;
        const isCompletedGuided = practiceMode === 'guided' && idx < completedStrokes.length;

        ctx.save();
        ctx.globalAlpha = baseAlpha;

        if (s.isDot) {
          const p = s.segments[0].p0;
          ctx.beginPath();
          ctx.fillStyle = isCurrentGuided
            ? 'rgba(59, 130, 246, 0.25)'
            : isCompletedGuided
            ? 'rgba(16, 185, 129, 0.22)'
            : 'rgba(203, 213, 225, 0.7)';
          ctx.arc(scale(p.x), scale(p.y), 13, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Outer soft road track
          drawStrokePath(ctx, s, size);
          ctx.strokeStyle = isCurrentGuided
            ? 'rgba(59, 130, 246, 0.16)'
            : isCompletedGuided
            ? 'rgba(16, 185, 129, 0.14)'
            : 'rgba(226, 232, 240, 0.8)';
          ctx.lineWidth = 30;
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          ctx.stroke();

          // Inner dashed center guide line
          drawStrokePath(ctx, s, size);
          ctx.strokeStyle = isCurrentGuided
            ? '#60A5FA'
            : isCompletedGuided
            ? '#34D399'
            : '#94A3B8';
          ctx.lineWidth = isCurrentGuided ? 4 : 3;
          ctx.setLineDash([8, 9]);
          ctx.stroke();
          ctx.setLineDash([]);
        }
        ctx.restore();
      });
    }

    // 4. Visual Precision Overlay after evaluation (shows hit vs missed spots clearly)
    if (evaluation && showPrecisionOverlay) {
      let ptr = 0;
      activeGlyph.strokes.forEach((s) => {
        const pts = sampleStrokePoints(s, 1.4);
        pts.forEach((gp) => {
          const ratio = evaluation.pointCoverageRatios[ptr++] ?? 0;
          if (ratio < 0.45) {
            ctx.beginPath();
            ctx.fillStyle = 'rgba(245, 158, 11, 0.55)';
            ctx.arc(scale(gp.x), scale(gp.y), 4.5, 0, Math.PI * 2);
            ctx.fill();
          }
        });
      });
    }

    // 5. User Drawn Ink Strokes
    const isRainbow = selectedInk.hex === 'rainbow';
    completedStrokes.forEach((st) => {
      drawSmoothPolyline(ctx, st, size, selectedInk.hex, 18, isRainbow);
    });
    if (currentStroke.length > 0) {
      drawSmoothPolyline(ctx, currentStroke, size, selectedInk.hex, 18, isRainbow);
    }

    // 6. Numbered Start Markers & Directional Arrowheads
    if (guideStrength !== 'memory' && !evaluation) {
      activeGlyph.strokes.forEach((s, idx) => {
        if (practiceMode === 'guided' && idx < completedStrokes.length) return;
        const isCurrent =
          practiceMode === 'free' || (practiceMode === 'guided' && idx === activeStepIndex);
        const { start, angle } = getStrokeStartAndDirection(s);
        const sx = scale(start.x);
        const sy = scale(start.y);

        // Directional arrow slightly ahead of start marker for non-dot strokes
        if (!s.isDot && isCurrent) {
          const pts = sampleStrokePoints(s, 1.4);
          const arrowPt = pts[Math.min(pts.length - 1, 7)];
          if (arrowPt) {
            const ax = scale(arrowPt.x);
            const ay = scale(arrowPt.y);
            const arrowAngle = Math.atan2(ay - sy, ax - sx) || angle;

            ctx.save();
            ctx.translate(ax, ay);
            ctx.rotate(arrowAngle);
            ctx.fillStyle = '#2563EB';
            ctx.beginPath();
            ctx.moveTo(8, 0);
            ctx.lineTo(-5, -5.5);
            ctx.lineTo(-5, 5.5);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
          }
        }

        // Numbered start circle badge
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = isCurrent ? '#E11D48' : '#64748B';
        ctx.arc(sx, sy, isCurrent ? 12 : 9.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#FFFFFF';
        ctx.stroke();

        ctx.fillStyle = '#FFFFFF';
        ctx.font = isCurrent ? '800 11px system-ui, sans-serif' : '700 10px system-ui, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(String(s.id), sx, sy + 0.5);
        ctx.restore();
      });
    }

    // 7. Animated Watch Demo Bead
    if (demoProgress) {
      // Render already-demonstrated strokes in bright gold
      for (let i = 0; i < demoProgress.strokeIdx; i++) {
        const s = activeGlyph.strokes[i];
        const pts = sampleStrokePoints(s, 1.4);
        drawSmoothPolyline(ctx, pts, size, '#F59E0B', 14, false);
      }

      const activeDemoStroke = activeGlyph.strokes[demoProgress.strokeIdx];
      if (activeDemoStroke) {
        const pts = sampleStrokePoints(activeDemoStroke, 1.4);
        const endIdx = Math.max(1, Math.floor(demoProgress.t * (pts.length - 1)));
        const partial = pts.slice(0, endIdx + 1);
        drawSmoothPolyline(ctx, partial, size, '#F59E0B', 14, false);

        const head = partial[partial.length - 1];
        if (head) {
          ctx.beginPath();
          ctx.fillStyle = 'rgba(245, 158, 11, 0.28)';
          ctx.arc(scale(head.x), scale(head.y), 18, 0, Math.PI * 2);
          ctx.fill();

          ctx.beginPath();
          ctx.fillStyle = '#EA580C';
          ctx.arc(scale(head.x), scale(head.y), 9, 0, Math.PI * 2);
          ctx.fill();
          ctx.lineWidth = 2.5;
          ctx.strokeStyle = '#FFFFFF';
          ctx.stroke();
        }
      }
    }

    ctx.restore();
  }, [
    activeGlyph,
    activeStepIndex,
    allGuidedStrokesComplete,
    completedStrokes,
    currentStroke,
    demoProgress,
    evaluation,
    guideStrength,
    practiceMode,
    selectedInk,
    showPrecisionOverlay,
  ]);

  useEffect(() => {
    renderCanvas();
  }, [renderCanvas]);

  // ============================================================================
  // POINTER HANDLERS & SCORING
  // ============================================================================
  const getNormalizedPos = (e: React.PointerEvent<HTMLCanvasElement>): Point2D => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    return {
      x: Math.max(0, Math.min(100, x)),
      y: Math.max(0, Math.min(100, y)),
    };
  };

  const finalizeEvaluation = useCallback(
    (strokesToScore: Point2D[][]) => {
      const result = evaluateFullGlyphTracing(strokesToScore, activeGlyph);
      setEvaluation(result);
      setStrokeFeedback(null);

      onSaveProgress(progressKey, categoryMode === 'digit' ? 'digit' : 'letter', result.overallAccuracy);

      if (result.starsEarned >= 1) {
        playSoundEffect('victory', settings.soundEffects);
        if (result.starsEarned >= 2) {
          confetti({
            particleCount: result.starsEarned * 24,
            spread: 65,
            origin: { y: 0.6 },
          });
        }
        speakText(
          `${result.feedbackTitle} Accuracy ${result.overallAccuracy} percent. You earned ${result.starsEarned} ${
            result.starsEarned === 1 ? 'star' : 'stars'
          }!`,
          settings.voiceGuidance
        );
      } else {
        playSoundEffect('pop', settings.soundEffects);
        speakText(
          `Accuracy ${result.overallAccuracy} percent. Let's trace along the numbered lines and try again!`,
          settings.voiceGuidance
        );
      }
    },
    [activeGlyph, categoryMode, onSaveProgress, progressKey, settings.soundEffects, settings.voiceGuidance]
  );

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (evaluation) return;
    if (isDemoPlaying) stopDemo();

    e.preventDefault();
    e.currentTarget.setPointerCapture(e.pointerId);
    activePointerIdRef.current = e.pointerId;
    setIsDrawing(true);
    setStrokeFeedback(null);
    const pt = getNormalizedPos(e);
    setCurrentStroke([pt]);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawing || activePointerIdRef.current !== e.pointerId) return;
    e.preventDefault();
    const pt = getNormalizedPos(e);
    setCurrentStroke((prev) => {
      const last = prev[prev.length - 1];
      if (last && Math.hypot(pt.x - last.x, pt.y - last.y) < 0.7) return prev;
      return [...prev, pt];
    });
  };

  const finishPointerStroke = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawing || activePointerIdRef.current !== e.pointerId) return;
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
    activePointerIdRef.current = null;
    setIsDrawing(false);

    if (currentStroke.length === 0) return;

    if (practiceMode === 'free') {
      // Ignore single accidental micro-taps unless it's tiny dot character like i/j
      const isShortDotAllowed = activeGlyph.strokes.some((s) => s.isDot);
      if (currentStroke.length < 3 && !isShortDotAllowed) {
        setCurrentStroke([]);
        return;
      }
      setCompletedStrokes((prev) => [...prev, currentStroke]);
      setCurrentStroke([]);
      return;
    }

    // Guided Mode: check against the current expected stroke
    const targetStroke = activeGlyph.strokes[activeStepIndex];
    const check = evaluateSingleGuidedStroke(currentStroke, targetStroke);

    if (!check.accepted) {
      setCurrentStroke([]);
      if (check.reason === 'too-short') {
        setStrokeFeedback('Keep holding and trace all the way along the path.');
      } else if (check.reason === 'off-path') {
        playSoundEffect('pop', settings.soundEffects);
        setStrokeFeedback(
          `Stay close to the blue dashed road for stroke ${targetStroke.id}!`
        );
      } else {
        playSoundEffect('pop', settings.soundEffects);
        setStrokeFeedback(
          `Almost! Trace from the red ${targetStroke.id} dot all the way to the end.`
        );
      }
      return;
    }

    const updatedStrokes = [...completedStrokes, currentStroke];
    setCompletedStrokes(updatedStrokes);
    setCurrentStroke([]);

    if (updatedStrokes.length >= activeGlyph.strokes.length) {
      finalizeEvaluation(updatedStrokes);
    } else {
      playSoundEffect('click', settings.soundEffects);
      const nextStroke = activeGlyph.strokes[updatedStrokes.length];
      setStrokeFeedback(`Nice! Now stroke ${nextStroke.id}: ${nextStroke.hint}`);
    }
  };

  const handleUndo = () => {
    if (completedStrokes.length === 0) return;
    setEvaluation(null);
    setStrokeFeedback(null);
    setCompletedStrokes((prev) => prev.slice(0, -1));
    playSoundEffect('pop', settings.soundEffects);
  };

  const handleClear = () => {
    resetWorkspaceState();
    playSoundEffect('pop', settings.soundEffects);
  };

  const handleSelectItem = (
    mode: CategoryMode,
    item: LetterData | DigitData,
    announce = true
  ) => {
    resetWorkspaceState();
    setCategoryMode(mode);
    if ('value' in item) {
      setSelectedDigit(item);
      if (announce) {
        speakText(`Trace number ${item.value}, ${item.word}`, settings.voiceGuidance);
      }
    } else {
      setSelectedLetter(item);
      if (announce) {
        speakText(
          `Trace ${mode === 'lowercase' ? 'lowercase' : 'uppercase'} ${item.char}, ${item.exampleWord}`,
          settings.voiceGuidance
        );
      }
    }
  };

  const handleStepItem = (delta: -1 | 1) => {
    if (categoryMode === 'digit') {
      const idx = DIGIT_DATA.findIndex((d) => d.value === selectedDigit.value);
      const nextIdx = (idx + delta + DIGIT_DATA.length) % DIGIT_DATA.length;
      handleSelectItem('digit', DIGIT_DATA[nextIdx]);
    } else {
      const idx = ALPHABET_DATA.findIndex((a) => a.char === selectedLetter.char);
      const nextIdx = (idx + delta + ALPHABET_DATA.length) % ALPHABET_DATA.length;
      handleSelectItem(categoryMode, ALPHABET_DATA[nextIdx]);
    }
  };

  const handleSpeakCurrent = () => {
    playSoundEffect('pop', settings.soundEffects);
    if (categoryMode === 'digit') {
      speakText(
        `Number ${selectedDigit.value}. ${selectedDigit.word}. ${selectedDigit.mathTip}`,
        settings.voiceGuidance
      );
    } else {
      const caseLabel = categoryMode === 'lowercase' ? 'Lowercase' : 'Uppercase';
      speakText(
        `${caseLabel} ${selectedLetter.char}. ${selectedLetter.char} is for ${selectedLetter.exampleWord}. Sound: ${selectedLetter.phonicsSound}`,
        settings.voiceGuidance
      );
    }
  };

  const currentStrokePrompt = allGuidedStrokesComplete
    ? 'All strokes complete!'
    : `Stroke ${activeStepIndex + 1} of ${activeGlyph.strokes.length}: ${
        activeGlyph.strokes[activeStepIndex]?.hint || ''
      }`;

  return (
    <div className="space-y-6 pb-12">
      {/* Top Toolbar: Title & Category Switcher */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-xs flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500">
            <span>Handwriting Practice</span>
            <span aria-hidden="true">·</span>
            <span>Multi-Stroke Guidance</span>
            <span aria-hidden="true">·</span>
            <span>Real-Time Accuracy</span>
          </div>
          <h2 className="text-2xl font-black text-[#2D2D2D] tracking-tight">
            Guided Letter & Number Tracing Studio
          </h2>
        </div>

        {/* Category Mode Segmented Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-100 rounded-2xl self-start lg:self-auto">
          <button
            type="button"
            onClick={() => {
              resetWorkspaceState();
              setCategoryMode('uppercase');
              playSoundEffect('click', settings.soundEffects);
            }}
            className={`px-3.5 py-2 rounded-xl text-xs font-extrabold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              categoryMode === 'uppercase'
                ? 'bg-white text-rose-600 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Uppercase A–Z
          </button>
          <button
            type="button"
            onClick={() => {
              resetWorkspaceState();
              setCategoryMode('lowercase');
              playSoundEffect('click', settings.soundEffects);
            }}
            className={`px-3.5 py-2 rounded-xl text-xs font-extrabold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              categoryMode === 'lowercase'
                ? 'bg-white text-blue-600 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Lowercase a–z
          </button>
          <button
            type="button"
            onClick={() => {
              resetWorkspaceState();
              setCategoryMode('digit');
              playSoundEffect('click', settings.soundEffects);
            }}
            className={`px-3.5 py-2 rounded-xl text-xs font-extrabold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              categoryMode === 'digit'
                ? 'bg-white text-emerald-600 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Numbers 0–20
          </button>
        </div>
      </div>

      {/* Character Selector Ribbon */}
      <div className="bg-white rounded-2xl p-3 border border-slate-200 flex items-center gap-2 overflow-x-auto scrollbar-none">
        {categoryMode !== 'digit'
          ? ALPHABET_DATA.map((l) => {
              const displayChar = categoryMode === 'lowercase' ? l.lowercase : l.char;
              const isSelected = selectedLetter.char === l.char;
              const isMastered = student.progress[l.char]?.mastered;
              return (
                <button
                  key={l.char}
                  type="button"
                  onClick={() => handleSelectItem(categoryMode, l)}
                  className={`relative flex-none w-11 h-11 rounded-xl font-black text-lg border transition-all cursor-pointer flex items-center justify-center shrink-0 ${
                    isSelected
                      ? categoryMode === 'lowercase'
                        ? 'bg-blue-600 text-white border-blue-700 shadow-sm'
                        : 'bg-rose-500 text-white border-rose-600 shadow-sm'
                      : isMastered
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-200 hover:border-emerald-400'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {displayChar}
                </button>
              );
            })
          : DIGIT_DATA.map((d) => {
              const isSelected = selectedDigit.value === d.value;
              const isMastered = student.progress[String(d.value)]?.mastered;
              return (
                <button
                  key={d.value}
                  type="button"
                  onClick={() => handleSelectItem('digit', d)}
                  className={`relative flex-none min-w-11 px-2.5 h-11 rounded-xl font-black text-base tabular-nums border transition-all cursor-pointer flex items-center justify-center shrink-0 ${
                    isSelected
                      ? 'bg-emerald-600 text-white border-emerald-700 shadow-sm'
                      : isMastered
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-200 hover:border-emerald-400'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {d.value}
                </button>
              );
            })}
      </div>

      {/* Main Two-Zone Studio Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Zone: Interactive Tracing Canvas (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-xs space-y-5">
          {/* Target Context Header & Prev/Next */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="text-3xl" aria-hidden="true">
                {categoryMode === 'digit' ? selectedDigit.emoji : selectedLetter.emoji}
              </span>
              <div>
                <h3 className="text-xl font-black text-[#2D2D2D] leading-tight">
                  {activeGlyph.label}
                </h3>
                <p className="text-xs font-semibold text-slate-500">
                  {categoryMode === 'digit'
                    ? `${selectedDigit.word} · ${selectedDigit.mathTip}`
                    : `${selectedLetter.char} is for ${selectedLetter.exampleWord} · Sound: ${selectedLetter.phonicsSound}`}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handleSpeakCurrent}
                aria-label="Hear sound"
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 text-xs font-bold transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <Volume2 className="w-4 h-4" />
                <span>Hear Sound</span>
              </button>
              <button
                type="button"
                onClick={() => handleStepItem(-1)}
                aria-label="Previous item"
                className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => handleStepItem(1)}
                aria-label="Next item"
                className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Controls Bar: Practice Mode, Guide Strength, Ink Swatches */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100">
            {/* Guided vs Free Mode */}
            <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl">
              <button
                type="button"
                onClick={() => {
                  resetWorkspaceState();
                  setPracticeMode('guided');
                  playSoundEffect('click', settings.soundEffects);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  practiceMode === 'guided'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Guided Strokes
              </button>
              <button
                type="button"
                onClick={() => {
                  resetWorkspaceState();
                  setPracticeMode('free');
                  playSoundEffect('click', settings.soundEffects);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  practiceMode === 'free'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Free Trace
              </button>
            </div>

            {/* Guide Visibility */}
            <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl">
              {(['full', 'faint', 'memory'] as GuideStrength[]).map((g) => (
                <button
                  key={g}
                  type="button"
                  onClick={() => {
                    setGuideStrength(g);
                    playSoundEffect('click', settings.soundEffects);
                  }}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-bold capitalize transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    guideStrength === g
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {g === 'full' ? 'Full Guide' : g === 'faint' ? 'Faint' : 'Memory'}
                </button>
              ))}
            </div>

            {/* Ink Colors */}
            <div className="flex items-center gap-1.5" role="group" aria-label="Pencil color">
              {INK_OPTIONS.map((ink) => {
                const isActive = selectedInk.id === ink.id;
                return (
                  <button
                    key={ink.id}
                    type="button"
                    title={ink.label}
                    aria-label={ink.label}
                    onClick={() => setSelectedInk(ink)}
                    style={{
                      background:
                        ink.hex === 'rainbow'
                          ? 'conic-gradient(#ef4444, #f59e0b, #10b981, #3b82f6, #8b5cf6, #ef4444)'
                          : ink.hex,
                    }}
                    className={`w-7 h-7 rounded-full transition-transform cursor-pointer border-2 ${
                      isActive
                        ? 'border-slate-900 scale-110 ring-2 ring-slate-300'
                        : 'border-white shadow-xs hover:scale-105'
                    }`}
                  />
                );
              })}
            </div>
          </div>

          {/* Active Stroke Guidance Banner */}
          <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-700">
            <span>
              {strokeFeedback
                ? strokeFeedback
                : practiceMode === 'guided'
                ? currentStrokePrompt
                : `Draw all ${activeGlyph.strokes.length} ${
                    activeGlyph.strokes.length === 1 ? 'stroke' : 'strokes'
                  }, then tap Check Tracing!`}
            </span>
            <span className="tabular-nums text-slate-500">
              {completedStrokes.length} / {activeGlyph.strokes.length} strokes
            </span>
          </div>

          {/* Interactive Drawing Canvas */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-[460px] aspect-square rounded-3xl border-2 border-slate-300 shadow-inner overflow-hidden bg-[#FFFEFA] touch-none select-none">
              <canvas
                ref={canvasRef}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={finishPointerStroke}
                onPointerCancel={finishPointerStroke}
                className="w-full h-full block cursor-crosshair touch-none"
              />
            </div>
          </div>

          {/* Canvas Action Controls */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={startDemo}
                className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-extrabold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  isDemoPlaying
                    ? 'bg-amber-500 text-white hover:bg-amber-600'
                    : 'bg-amber-100 text-amber-900 hover:bg-amber-200'
                }`}
              >
                {isDemoPlaying ? <Square className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span>{isDemoPlaying ? 'Stop Demo' : 'Watch Demo'}</span>
              </button>

              <button
                type="button"
                onClick={handleUndo}
                disabled={completedStrokes.length === 0}
                className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-40 disabled:cursor-not-allowed text-slate-700 text-xs font-bold transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <Undo2 className="w-3.5 h-3.5" />
                <span>Undo</span>
              </button>

              <button
                type="button"
                onClick={handleClear}
                className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            </div>

            {practiceMode === 'free' && !evaluation && (
              <button
                type="button"
                disabled={completedStrokes.length === 0}
                onClick={() => finalizeEvaluation(completedStrokes)}
                className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed text-white text-xs font-extrabold shadow-xs transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Check Tracing</span>
              </button>
            )}
          </div>
        </div>

        {/* Right Zone: Stroke Order Guide & Real Accuracy Evaluation (5 cols) */}
        <div className="lg:col-span-5 space-y-5">
          {/* Evaluation Card */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-extrabold text-lg text-[#2D2D2D]">Accuracy & Feedback</h3>
              {savedRecord?.tracingAccuracy !== undefined && (
                <span className="text-xs font-bold text-slate-500 tabular-nums">
                  Best: {savedRecord.tracingAccuracy}%
                </span>
              )}
            </div>

            {evaluation === null ? (
              <div className="py-6 text-center space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center mx-auto text-amber-600">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div className="space-y-1 max-w-xs mx-auto">
                  <p className="text-sm font-extrabold text-slate-800">
                    Start at the red numbered dot
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Follow the blue arrow along each curve. Lift your finger or mouse cleanly between
                    numbered strokes.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-5">
                {/* Stars + Score */}
                <div className="flex items-center justify-between gap-4 bg-slate-50 rounded-2xl p-4 border border-slate-200">
                  <div>
                    <div className="text-3xl font-black text-[#2D2D2D] tabular-nums">
                      {evaluation.overallAccuracy}%
                    </div>
                    <div className="flex items-center gap-1.5 mt-1 text-xs font-extrabold">
                      {evaluation.starsEarned >= 2 ? (
                        <span className="text-emerald-700 flex items-center gap-1">
                          <CheckCircle2 className="w-4 h-4" />
                          {evaluation.feedbackTitle}
                        </span>
                      ) : (
                        <span className="text-amber-700 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {evaluation.feedbackTitle}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-1" aria-label={`${evaluation.starsEarned} out of 3 stars`}>
                    {[1, 2, 3].map((st) => (
                      <Star
                        key={st}
                        className={`w-7 h-7 ${
                          st <= evaluation.starsEarned
                            ? 'text-amber-400 fill-amber-400'
                            : 'text-slate-200'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Detailed Breakdown Metrics */}
                <div className="space-y-3">
                  {[
                    { label: 'Path Coverage', value: evaluation.coverageScore, barClass: 'bg-blue-500' },
                    { label: 'Line Neatness', value: evaluation.neatnessScore, barClass: 'bg-emerald-500' },
                    { label: 'Stroke Order', value: evaluation.orderScore, barClass: 'bg-amber-500' },
                  ].map((metric) => (
                    <div key={metric.label} className="space-y-1">
                      <div className="flex items-center justify-between text-xs font-bold text-slate-600">
                        <span>{metric.label}</span>
                        <span className="tabular-nums text-slate-900">{metric.value}%</span>
                      </div>
                      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${metric.barClass} rounded-full transition-all duration-300`}
                          style={{ width: `${metric.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-xs font-medium text-slate-600 leading-relaxed">
                  {evaluation.feedbackDetail}
                </p>

                {/* Toggle Missed Spot Highlights */}
                <button
                  type="button"
                  onClick={() => setShowPrecisionOverlay((v) => !v)}
                  className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>
                    {showPrecisionOverlay ? 'Hide Missed-Spot Dots' : 'Show Missed-Spot Dots'}
                  </span>
                </button>

                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  <button
                    type="button"
                    onClick={() => {
                      handleClear();
                      speakText('Ready to trace again!', settings.voiceGuidance);
                    }}
                    className="py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-extrabold text-xs transition-colors whitespace-nowrap cursor-pointer"
                  >
                    Practice Again
                  </button>
                  <button
                    type="button"
                    onClick={() => handleStepItem(1)}
                    className="py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs transition-colors whitespace-nowrap cursor-pointer"
                  >
                    Next Character
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Stroke-by-Stroke Step Checklist */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4">
            <h3 className="font-extrabold text-base text-[#2D2D2D] border-b border-slate-100 pb-2.5">
              Stroke Order Guide ({activeGlyph.strokes.length})
            </h3>
            <ol className="space-y-2.5">
              {activeGlyph.strokes.map((s, idx) => {
                const isDone = completedStrokes.length > idx;
                const isActive =
                  practiceMode === 'guided' && !evaluation && completedStrokes.length === idx;
                return (
                  <li
                    key={s.id}
                    className={`flex items-start gap-3 p-3 rounded-2xl border text-xs transition-colors ${
                      isDone
                        ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                        : isActive
                        ? 'bg-blue-50 border-blue-200 text-blue-950'
                        : 'bg-slate-50 border-slate-200 text-slate-600'
                    }`}
                  >
                    <span
                      className={`flex-none w-6 h-6 rounded-full flex items-center justify-center font-black text-xs tabular-nums ${
                        isDone
                          ? 'bg-emerald-600 text-white'
                          : isActive
                          ? 'bg-rose-600 text-white'
                          : 'bg-slate-200 text-slate-700'
                      }`}
                    >
                      {isDone ? '✓' : s.id}
                    </span>
                    <span className="font-semibold leading-snug pt-0.5">{s.hint}</span>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};
