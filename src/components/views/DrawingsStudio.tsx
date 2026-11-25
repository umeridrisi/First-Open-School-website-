import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  StudentProfile,
  ParentSettings,
  DrawingTemplate,
  DrawingCategory,
} from '../../types';
import {
  DRAWING_CATEGORIES,
  DRAWING_TEMPLATES,
  getDrawingTemplateById,
} from '../../data/drawingsData';
import { CURRICULUM_TIER_DETAILS } from '../../data/curriculumData';
import { playSoundEffect, speakText } from '../../utils/sound';
import {
  CANVAS_LOGICAL_SIZE,
  PAPER_OPTIONS,
  PaperType,
  Point2D,
  getPaperOption,
  rasterizeSvgOutline,
  scanlineFloodFill,
  computeTemplateRegionMask,
  buildClipMaskCanvas,
  drawSmoothBrushSegment,
  drawCrayonSegment,
  drawWatercolorSegment,
  drawSpraySegment,
  compositeArtworkDataUrl,
} from '../../utils/drawingEngine';
import {
  PaintBucket,
  Paintbrush,
  Pencil,
  Droplets,
  Sparkles,
  Eraser,
  Sticker,
  RotateCcw,
  RotateCw,
  Trash2,
  Printer,
  Download,
  Heart,
  Images,
  Palette,
  Eye,
  EyeOff,
  FlipHorizontal2,
  ShieldCheck,
  GraduationCap,
  HelpCircle,
  BookOpen,
  X,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface DrawingsStudioProps {
  student: StudentProfile;
  settings: ParentSettings;
  initialTemplateId?: string;
  initialCategory?: string;
  onAwardStars?: (stars: number) => void;
}

type DrawingTool =
  | 'fill'
  | 'brush'
  | 'crayon'
  | 'watercolor'
  | 'rainbow'
  | 'spray'
  | 'eraser'
  | 'stamp';

interface SavedArtwork {
  id: string;
  title: string;
  templateId?: string;
  dataUrl: string;
  createdAt: string;
}

const COLOR_SWATCHES = [
  { name: 'Charcoal Black', hex: '#1E293B' },
  { name: 'Slate Gray', hex: '#64748B' },
  { name: 'Ruby Red', hex: '#EF4444' },
  { name: 'Sunset Orange', hex: '#F97316' },
  { name: 'Amber Gold', hex: '#F59E0B' },
  { name: 'Sun Yellow', hex: '#FACC15' },
  { name: 'Lime Green', hex: '#84CC16' },
  { name: 'Emerald Green', hex: '#10B981' },
  { name: 'Teal Mint', hex: '#0D9488' },
  { name: 'Ocean Cyan', hex: '#06B6D4' },
  { name: 'Sky Blue', hex: '#3B82F6' },
  { name: 'Indigo Blue', hex: '#4F46E5' },
  { name: 'Royal Purple', hex: '#8B5CF6' },
  { name: 'Berry Pink', hex: '#EC4899' },
  { name: 'Cocoa Brown', hex: '#78350F' },
  { name: 'Snow White', hex: '#FFFFFF' },
];

const STAMPS = ['⭐', '❤️', '🌸', '🦋', '👑', '🚀', '🐾', '🌈', '💎', '🎨', '🦄', '☀️'];

const TOOL_ITEMS: {
  id: DrawingTool;
  label: string;
  icon: React.ReactNode;
  activeClass: string;
}[] = [
  {
    id: 'fill',
    label: 'Paint Bucket',
    icon: <PaintBucket className="w-4 h-4" />,
    activeClass: 'bg-blue-600 text-white border-blue-700',
  },
  {
    id: 'brush',
    label: 'Smooth Brush',
    icon: <Paintbrush className="w-4 h-4" />,
    activeClass: 'bg-rose-600 text-white border-rose-700',
  },
  {
    id: 'crayon',
    label: 'Wax Crayon',
    icon: <Pencil className="w-4 h-4" />,
    activeClass: 'bg-amber-500 text-white border-amber-600',
  },
  {
    id: 'watercolor',
    label: 'Watercolor',
    icon: <Droplets className="w-4 h-4" />,
    activeClass: 'bg-cyan-600 text-white border-cyan-700',
  },
  {
    id: 'rainbow',
    label: 'Rainbow Ink',
    icon: <Sparkles className="w-4 h-4" />,
    activeClass: 'bg-gradient-to-r from-rose-500 via-amber-500 to-emerald-500 text-white border-slate-800',
  },
  {
    id: 'spray',
    label: 'Sparkle Spray',
    icon: <Sparkles className="w-4 h-4" />,
    activeClass: 'bg-purple-600 text-white border-purple-700',
  },
  {
    id: 'stamp',
    label: 'Stickers',
    icon: <Sticker className="w-4 h-4" />,
    activeClass: 'bg-emerald-600 text-white border-emerald-700',
  },
  {
    id: 'eraser',
    label: 'Eraser',
    icon: <Eraser className="w-4 h-4" />,
    activeClass: 'bg-slate-800 text-white border-slate-900',
  },
];

export const DrawingsStudio: React.FC<DrawingsStudioProps> = ({
  student,
  settings,
  initialTemplateId,
  initialCategory,
  onAwardStars,
}) => {
  const [showParentNote, setShowParentNote] = useState(false);
  const tierDetail = CURRICULUM_TIER_DETAILS[student.ageTier] || CURRICULUM_TIER_DETAILS['kindergarten'];
  const artCurriculum = tierDetail.subjects.drawings;

  const [activeView, setActiveView] = useState<'canvas' | 'printables'>(() =>
    initialCategory && !initialTemplateId ? 'printables' : 'canvas'
  );

  const [selectedTemplate, setSelectedTemplate] = useState<DrawingTemplate | null>(() => {
    if (initialTemplateId) {
      return getDrawingTemplateById(initialTemplateId) || null;
    }
    try {
      const saved = localStorage.getItem(`first_open_last_drawing_${student.id}`);
      if (saved === '__blank__') return null;
      if (saved) {
        const found = getDrawingTemplateById(saved);
        if (found) return found;
      }
    } catch {}
    if (student.ageTier === 'grade-1-2' || student.ageTier === 'k12-foundations') {
      const found = DRAWING_TEMPLATES.find((t) => t.id === 'cosmic-rocket');
      if (found) return found;
    }
    return DRAWING_TEMPLATES[0];
  });

  useEffect(() => {
    if (initialTemplateId) {
      const found = getDrawingTemplateById(initialTemplateId);
      if (found) {
        setSelectedTemplate(found);
        setActiveView('canvas');
      }
    }
  }, [initialTemplateId]);

  useEffect(() => {
    try {
      localStorage.setItem(
        `first_open_last_drawing_${student.id}`,
        selectedTemplate ? selectedTemplate.id : '__blank__'
      );
    } catch {}
  }, [selectedTemplate, student.id]);

  const [selectedCategory, setSelectedCategory] = useState<DrawingCategory | 'all'>(
    (initialCategory as DrawingCategory) || 'all'
  );

  useEffect(() => {
    if (initialCategory && !initialTemplateId) {
      setSelectedCategory(initialCategory as DrawingCategory);
      setActiveView('printables');
    }
  }, [initialCategory, initialTemplateId]);

  // Studio Tool States
  const [activeTool, setActiveTool] = useState<DrawingTool>('fill');
  const [activeColor, setActiveColor] = useState<string>('#F97316');
  const [brushSize, setBrushSize] = useState<number>(16);
  const [activeStamp, setActiveStamp] = useState<string>('⭐');
  const [paperType, setPaperType] = useState<PaperType>('white');
  const [showOutlines, setShowOutlines] = useState<boolean>(true);
  const [stayInLines, setStayInLines] = useState<boolean>(true);
  const [mirrorMode, setMirrorMode] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  // Stacked Canvases (fixed 640x640 logical coordinates, never cleared on resize)
  const paintCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const previewCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const outlineCanvasRef = useRef<HTMLCanvasElement | null>(null);

  // Offscreen buffers for Stay-in-Lines & Flood Fill
  const strokeBufferRef = useRef<HTMLCanvasElement | null>(null);
  const clipMaskRef = useRef<HTMLCanvasElement | null>(null);
  const outlineAlphaRef = useRef<Uint8Array | null>(null);

  // Pointer & Curve Interpolation State
  const isDrawingRef = useRef<boolean>(false);
  const activePointerIdRef = useRef<number | null>(null);
  const strokePointsRef = useRef<Point2D[]>([]);
  const activeStrokeMaskedRef = useRef<boolean>(false);
  const rainbowHueRef = useRef<number>(0);

  // Undo / Redo History
  const undoStackRef = useRef<ImageData[]>([]);
  const redoStackRef = useRef<ImageData[]>([]);
  const [historyMeta, setHistoryMeta] = useState({ canUndo: false, canRedo: false, hasPaint: false });

  // Modals & Saved Gallery
  const [savedArtworks, setSavedArtworks] = useState<SavedArtwork[]>(() => {
    try {
      const saved = localStorage.getItem('fos_saved_artworks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [showGalleryModal, setShowGalleryModal] = useState<boolean>(false);
  const [showPrintModal, setShowPrintModal] = useState<boolean>(false);
  const [printTargetTemplate, setPrintTargetTemplate] = useState<DrawingTemplate | null>(null);
  const [printMode, setPrintMode] = useState<'blank' | 'painted'>('blank');
  const [paintedPrintPreview, setPaintedPrintPreview] = useState<string | null>(null);

  const paperOpt = getPaperOption(paperType);

  const syncHistoryMeta = useCallback(() => {
    setHistoryMeta({
      canUndo: undoStackRef.current.length > 1,
      canRedo: redoStackRef.current.length > 0,
      hasPaint: undoStackRef.current.length > 1,
    });
  }, []);

  const pushHistory = useCallback(() => {
    const canvas = paintCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    const snap = ctx.getImageData(0, 0, CANVAS_LOGICAL_SIZE, CANVAS_LOGICAL_SIZE);
    undoStackRef.current.push(snap);
    if (undoStackRef.current.length > 25) {
      undoStackRef.current.shift();
    }
    redoStackRef.current = [];
    syncHistoryMeta();
  }, [syncHistoryMeta]);

  // Initialize Paint Canvas & Offscreen Buffers Once
  useEffect(() => {
    const paint = paintCanvasRef.current;
    if (!paint) return;
    const ctx = paint.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    ctx.clearRect(0, 0, CANVAS_LOGICAL_SIZE, CANVAS_LOGICAL_SIZE);
    const emptySnap = ctx.getImageData(0, 0, CANVAS_LOGICAL_SIZE, CANVAS_LOGICAL_SIZE);
    undoStackRef.current = [emptySnap];
    redoStackRef.current = [];
    syncHistoryMeta();

    const buf = document.createElement('canvas');
    buf.width = CANVAS_LOGICAL_SIZE;
    buf.height = CANVAS_LOGICAL_SIZE;
    strokeBufferRef.current = buf;
  }, [syncHistoryMeta]);

  // Rasterize Selected Template Outline whenever template, visibility, or paper ink changes
  useEffect(() => {
    let cancelled = false;
    const outlineCanvas = outlineCanvasRef.current;

    if (!selectedTemplate || !showOutlines) {
      outlineAlphaRef.current = null;
      if (outlineCanvas) {
        const ctx = outlineCanvas.getContext('2d');
        ctx?.clearRect(0, 0, CANVAS_LOGICAL_SIZE, CANVAS_LOGICAL_SIZE);
      }
      return;
    }

    rasterizeSvgOutline(selectedTemplate.svgOutline, CANVAS_LOGICAL_SIZE, paperOpt.inkHex)
      .then(({ canvas, alphaMask }) => {
        if (cancelled) return;
        outlineAlphaRef.current = alphaMask;
        if (outlineCanvas) {
          const ctx = outlineCanvas.getContext('2d');
          if (ctx) {
            ctx.clearRect(0, 0, CANVAS_LOGICAL_SIZE, CANVAS_LOGICAL_SIZE);
            ctx.drawImage(canvas, 0, 0);
          }
        }
      })
      .catch(() => {
        if (!cancelled) outlineAlphaRef.current = null;
      });

    return () => {
      cancelled = true;
    };
  }, [selectedTemplate, showOutlines, paperOpt.inkHex]);

  const handleUndo = () => {
    const canvas = paintCanvasRef.current;
    if (!canvas || undoStackRef.current.length <= 1) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    const popped = undoStackRef.current.pop();
    if (popped) redoStackRef.current.push(popped);
    const prev = undoStackRef.current[undoStackRef.current.length - 1];
    if (prev) {
      ctx.putImageData(prev, 0, 0);
      playSoundEffect('click', settings.soundEffects);
      syncHistoryMeta();
    }
  };

  const handleRedo = () => {
    const canvas = paintCanvasRef.current;
    if (!canvas || redoStackRef.current.length === 0) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    const next = redoStackRef.current.pop();
    if (next) {
      undoStackRef.current.push(next);
      ctx.putImageData(next, 0, 0);
      playSoundEffect('click', settings.soundEffects);
      syncHistoryMeta();
    }
  };

  const handleClearCanvas = () => {
    const canvas = paintCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    ctx.clearRect(0, 0, CANVAS_LOGICAL_SIZE, CANVAS_LOGICAL_SIZE);
    pushHistory();
    playSoundEffect('pop', settings.soundEffects);
  };

  const handleSelectTemplate = (template: DrawingTemplate | null) => {
    if (template?.id === selectedTemplate?.id) return;
    setSelectedTemplate(template);
    setShowOutlines(true);
    // Clear previous template's paint cleanly when switching coloring pages
    const canvas = paintCanvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      if (ctx) {
        ctx.clearRect(0, 0, CANVAS_LOGICAL_SIZE, CANVAS_LOGICAL_SIZE);
        const emptySnap = ctx.getImageData(0, 0, CANVAS_LOGICAL_SIZE, CANVAS_LOGICAL_SIZE);
        undoStackRef.current = [emptySnap];
        redoStackRef.current = [];
        syncHistoryMeta();
      }
    }
    if (!template && activeTool === 'fill') {
      setActiveTool('brush');
    }
    playSoundEffect('click', settings.soundEffects);
  };

  const getLogicalPoint = (e: React.PointerEvent<HTMLCanvasElement>): Point2D => {
    const canvas = paintCanvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    return {
      x: Math.max(0, Math.min(CANVAS_LOGICAL_SIZE, ((e.clientX - rect.left) / rect.width) * CANVAS_LOGICAL_SIZE)),
      y: Math.max(0, Math.min(CANVAS_LOGICAL_SIZE, ((e.clientY - rect.top) / rect.height) * CANVAS_LOGICAL_SIZE)),
    };
  };

  const mirrorPoint = (pt: Point2D): Point2D => ({
    x: CANVAS_LOGICAL_SIZE - pt.x,
    y: pt.y,
  });

  const refreshMaskedPreview = () => {
    const preview = previewCanvasRef.current;
    const buf = strokeBufferRef.current;
    const mask = clipMaskRef.current;
    if (!preview || !buf || !mask) return;

    const pCtx = preview.getContext('2d');
    if (!pCtx) return;

    pCtx.clearRect(0, 0, CANVAS_LOGICAL_SIZE, CANVAS_LOGICAL_SIZE);
    pCtx.globalCompositeOperation = 'source-over';
    pCtx.drawImage(buf, 0, 0);
    pCtx.globalCompositeOperation = 'destination-in';
    pCtx.drawImage(mask, 0, 0);
    pCtx.globalCompositeOperation = 'source-over';
  };

  const drawToolDot = (ctx: CanvasRenderingContext2D, pt: Point2D, color: string) => {
    if (activeTool === 'eraser') {
      ctx.save();
      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, brushSize / 2, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0,0,0,1)';
      ctx.fill();
      ctx.restore();
      return;
    }

    if (activeTool === 'crayon') {
      drawCrayonSegment(ctx, pt, pt, color, brushSize);
      return;
    }
    if (activeTool === 'watercolor') {
      drawWatercolorSegment(ctx, pt, pt, color, brushSize);
      return;
    }
    if (activeTool === 'spray') {
      drawSpraySegment(ctx, pt, pt, color, brushSize);
      return;
    }

    ctx.save();
    ctx.beginPath();
    ctx.arc(pt.x, pt.y, brushSize / 2, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.restore();
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (activePointerIdRef.current !== null) return;
    const paint = paintCanvasRef.current;
    if (!paint) return;
    const paintCtx = paint.getContext('2d', { willReadFrequently: true });
    if (!paintCtx) return;

    const pt = getLogicalPoint(e);

    // 1. Paint Bucket (Flood Fill)
    if (activeTool === 'fill') {
      const changedPrimary = scanlineFloodFill(
        paintCtx,
        showOutlines ? outlineAlphaRef.current : null,
        pt.x,
        pt.y,
        activeColor,
        CANVAS_LOGICAL_SIZE
      );
      let changedMirror = false;
      if (mirrorMode) {
        const mPt = mirrorPoint(pt);
        changedMirror = scanlineFloodFill(
          paintCtx,
          showOutlines ? outlineAlphaRef.current : null,
          mPt.x,
          mPt.y,
          activeColor,
          CANVAS_LOGICAL_SIZE
        );
      }
      if (changedPrimary || changedMirror) {
        pushHistory();
        playSoundEffect('pop', settings.soundEffects);
      }
      return;
    }

    // 2. Stamp Sticker
    if (activeTool === 'stamp') {
      const fontSize = Math.max(24, brushSize * 2.6);
      const drawStampAt = (pos: Point2D) => {
        paintCtx.save();
        paintCtx.font = `${fontSize}px sans-serif`;
        paintCtx.textAlign = 'center';
        paintCtx.textBaseline = 'middle';
        paintCtx.fillText(activeStamp, pos.x, pos.y);
        paintCtx.restore();
      };
      drawStampAt(pt);
      if (mirrorMode) drawStampAt(mirrorPoint(pt));
      pushHistory();
      playSoundEffect('pop', settings.soundEffects);
      return;
    }

    // 3. Continuous Stroke Tools
    paint.setPointerCapture(e.pointerId);
    activePointerIdRef.current = e.pointerId;
    isDrawingRef.current = true;
    strokePointsRef.current = [pt];

    const canMask =
      stayInLines &&
      activeTool !== 'eraser' &&
      Boolean(selectedTemplate && showOutlines && outlineAlphaRef.current);

    activeStrokeMaskedRef.current = canMask;

    let targetCtx: CanvasRenderingContext2D = paintCtx;
    if (canMask && outlineAlphaRef.current && strokeBufferRef.current) {
      const seeds = mirrorMode ? [pt, mirrorPoint(pt)] : [pt];
      const regionMask = computeTemplateRegionMask(
        outlineAlphaRef.current,
        seeds,
        CANVAS_LOGICAL_SIZE
      );
      clipMaskRef.current = buildClipMaskCanvas(regionMask, CANVAS_LOGICAL_SIZE);

      const bufCtx = strokeBufferRef.current.getContext('2d');
      if (bufCtx) {
        bufCtx.clearRect(0, 0, CANVAS_LOGICAL_SIZE, CANVAS_LOGICAL_SIZE);
        targetCtx = bufCtx;
      }
    }

    const strokeColor =
      activeTool === 'rainbow' ? `hsl(${rainbowHueRef.current}, 95%, 52%)` : activeColor;

    drawToolDot(targetCtx, pt, strokeColor);
    if (mirrorMode) {
      drawToolDot(targetCtx, mirrorPoint(pt), strokeColor);
    }

    if (canMask) {
      refreshMaskedPreview();
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawingRef.current || activePointerIdRef.current !== e.pointerId) return;
    const paint = paintCanvasRef.current;
    if (!paint) return;

    const targetCtx =
      activeStrokeMaskedRef.current && strokeBufferRef.current
        ? strokeBufferRef.current.getContext('2d')
        : paint.getContext('2d', { willReadFrequently: true });
    if (!targetCtx) return;

    const curr = getLogicalPoint(e);
    const pts = strokePointsRef.current;
    const prev = pts[pts.length - 1];
    const dist = Math.hypot(curr.x - prev.x, curr.y - prev.y);
    if (dist < 1.5) return;

    pts.push(curr);

    if (activeTool === 'rainbow') {
      rainbowHueRef.current = (rainbowHueRef.current + dist * 0.6) % 360;
    }
    const strokeColor =
      activeTool === 'rainbow' ? `hsl(${rainbowHueRef.current}, 95%, 52%)` : activeColor;

    if (activeTool === 'crayon') {
      drawCrayonSegment(targetCtx, prev, curr, strokeColor, brushSize);
      if (mirrorMode) drawCrayonSegment(targetCtx, mirrorPoint(prev), mirrorPoint(curr), strokeColor, brushSize);
    } else if (activeTool === 'watercolor') {
      drawWatercolorSegment(targetCtx, prev, curr, strokeColor, brushSize);
      if (mirrorMode) drawWatercolorSegment(targetCtx, mirrorPoint(prev), mirrorPoint(curr), strokeColor, brushSize);
    } else if (activeTool === 'spray') {
      drawSpraySegment(targetCtx, prev, curr, strokeColor, brushSize);
      if (mirrorMode) drawSpraySegment(targetCtx, mirrorPoint(prev), mirrorPoint(curr), strokeColor, brushSize);
    } else {
      const isEraser = activeTool === 'eraser';
      if (pts.length === 2) {
        const midEnd: Point2D = {
          x: (pts[0].x + pts[1].x) / 2,
          y: (pts[0].y + pts[1].y) / 2,
        };
        drawSmoothBrushSegment(targetCtx, pts[0], pts[0], midEnd, strokeColor, brushSize, isEraser);
        if (mirrorMode) {
          drawSmoothBrushSegment(
            targetCtx,
            mirrorPoint(pts[0]),
            mirrorPoint(pts[0]),
            mirrorPoint(midEnd),
            strokeColor,
            brushSize,
            isEraser
          );
        }
      } else {
        const pPrev = pts[pts.length - 3];
        const pCtrl = pts[pts.length - 2];
        const pNext = pts[pts.length - 1];
        const mid1: Point2D = { x: (pPrev.x + pCtrl.x) / 2, y: (pPrev.y + pCtrl.y) / 2 };
        const mid2: Point2D = { x: (pCtrl.x + pNext.x) / 2, y: (pCtrl.y + pNext.y) / 2 };

        drawSmoothBrushSegment(targetCtx, pCtrl, mid1, mid2, strokeColor, brushSize, isEraser);
        if (mirrorMode) {
          drawSmoothBrushSegment(
            targetCtx,
            mirrorPoint(pCtrl),
            mirrorPoint(mid1),
            mirrorPoint(mid2),
            strokeColor,
            brushSize,
            isEraser
          );
        }
      }
    }

    if (activeStrokeMaskedRef.current) {
      refreshMaskedPreview();
    }
  };

  const finishStroke = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawingRef.current || activePointerIdRef.current !== e.pointerId) return;
    const paint = paintCanvasRef.current;
    if (paint && paint.hasPointerCapture(e.pointerId)) {
      paint.releasePointerCapture(e.pointerId);
    }

    const paintCtx = paint?.getContext('2d', { willReadFrequently: true });
    const targetCtx =
      activeStrokeMaskedRef.current && strokeBufferRef.current
        ? strokeBufferRef.current.getContext('2d')
        : paintCtx;

    const pts = strokePointsRef.current;
    if (
      targetCtx &&
      pts.length >= 2 &&
      (activeTool === 'brush' || activeTool === 'rainbow' || activeTool === 'eraser')
    ) {
      const pCtrl = pts[pts.length - 2];
      const pEnd = pts[pts.length - 1];
      const mid: Point2D = { x: (pCtrl.x + pEnd.x) / 2, y: (pCtrl.y + pEnd.y) / 2 };
      const strokeColor =
        activeTool === 'rainbow' ? `hsl(${rainbowHueRef.current}, 95%, 52%)` : activeColor;
      const isEraser = activeTool === 'eraser';
      drawSmoothBrushSegment(targetCtx, pEnd, mid, pEnd, strokeColor, brushSize, isEraser);
      if (mirrorMode) {
        drawSmoothBrushSegment(
          targetCtx,
          mirrorPoint(pEnd),
          mirrorPoint(mid),
          mirrorPoint(pEnd),
          strokeColor,
          brushSize,
          isEraser
        );
      }
    }

    if (activeStrokeMaskedRef.current && paintCtx && previewCanvasRef.current) {
      refreshMaskedPreview();
      paintCtx.drawImage(previewCanvasRef.current, 0, 0);
      previewCanvasRef.current
        .getContext('2d')
        ?.clearRect(0, 0, CANVAS_LOGICAL_SIZE, CANVAS_LOGICAL_SIZE);
      strokeBufferRef.current
        ?.getContext('2d')
        ?.clearRect(0, 0, CANVAS_LOGICAL_SIZE, CANVAS_LOGICAL_SIZE);
    }

    isDrawingRef.current = false;
    activePointerIdRef.current = null;
    activeStrokeMaskedRef.current = false;
    strokePointsRef.current = [];
    pushHistory();
  };

  const getExportDataUrl = (): string | null => {
    const paint = paintCanvasRef.current;
    if (!paint) return null;
    const outline =
      selectedTemplate && showOutlines ? outlineCanvasRef.current : null;
    return compositeArtworkDataUrl(paperOpt.bgHex, paint, outline, CANVAS_LOGICAL_SIZE);
  };

  const handleSaveToGallery = () => {
    const dataUrl = getExportDataUrl();
    if (!dataUrl) return;

    const newArt: SavedArtwork = {
      id: `art_${Date.now()}`,
      title: selectedTemplate
        ? selectedTemplate.title
        : `Free Painting #${savedArtworks.length + 1}`,
      templateId: selectedTemplate?.id,
      dataUrl,
      createdAt: new Date().toLocaleDateString(),
    };

    const updated = [newArt, ...savedArtworks.slice(0, 15)];
    setSavedArtworks(updated);
    try {
      localStorage.setItem('fos_saved_artworks', JSON.stringify(updated));
    } catch {}

    confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
    playSoundEffect('victory', settings.soundEffects);
    speakText('Artwork saved to your gallery!', settings.voiceGuidance);
    setStatusMessage('Saved to your Masterpiece Gallery!');
    setTimeout(() => setStatusMessage(null), 3200);
    if (onAwardStars) onAwardStars(1);
  };

  const handleDownloadImage = () => {
    const dataUrl = getExportDataUrl();
    if (!dataUrl) return;
    const link = document.createElement('a');
    const slug = selectedTemplate ? selectedTemplate.id : 'free-painting';
    link.download = `first-open-school-${slug}.png`;
    link.href = dataUrl;
    link.click();
    playSoundEffect('star', settings.soundEffects);
    setStatusMessage('Downloaded PNG image!');
    setTimeout(() => setStatusMessage(null), 2600);
  };

  const handleDeleteArtwork = (id: string) => {
    const updated = savedArtworks.filter((a) => a.id !== id);
    setSavedArtworks(updated);
    try {
      localStorage.setItem('fos_saved_artworks', JSON.stringify(updated));
    } catch {}
    playSoundEffect('click', settings.soundEffects);
  };

  const handleLoadArtworkToCanvas = (art: SavedArtwork) => {
    const paint = paintCanvasRef.current;
    if (!paint) return;
    const ctx = paint.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    const img = new Image();
    img.onload = () => {
      setSelectedTemplate(null);
      setShowOutlines(false);
      ctx.clearRect(0, 0, CANVAS_LOGICAL_SIZE, CANVAS_LOGICAL_SIZE);
      ctx.drawImage(img, 0, 0, CANVAS_LOGICAL_SIZE, CANVAS_LOGICAL_SIZE);
      pushHistory();
      setShowGalleryModal(false);
      setActiveView('canvas');
      playSoundEffect('pop', settings.soundEffects);
    };
    img.src = art.dataUrl;
  };

  const handleOpenPrintModal = (template: DrawingTemplate | null) => {
    setPrintTargetTemplate(template);
    const hasCurrentPaint = historyMeta.hasPaint && template?.id === selectedTemplate?.id;
    if (hasCurrentPaint || (!template && historyMeta.hasPaint)) {
      const previewUrl = getExportDataUrl();
      setPaintedPrintPreview(previewUrl);
      setPrintMode(template ? 'blank' : 'painted');
    } else {
      setPaintedPrintPreview(null);
      setPrintMode('blank');
    }
    setShowPrintModal(true);
  };

  const filteredTemplates =
    selectedCategory === 'all'
      ? DRAWING_TEMPLATES
      : DRAWING_TEMPLATES.filter((t) => t.category === selectedCategory);

  const activeTipText = (() => {
    if (statusMessage) return statusMessage;
    if (activeTool === 'fill') {
      return selectedTemplate && showOutlines
        ? 'Tap inside any closed shape to fill it cleanly with color.'
        : 'Paint Bucket fills connected regions on your canvas.';
    }
    if (activeTool === 'stamp') {
      return `Tap anywhere on the canvas to stamp ${activeStamp} stickers.`;
    }
    if (mirrorMode) {
      return 'Mirror Draw is on — every brushstroke reflects left-to-right!';
    }
    if (stayInLines && selectedTemplate && showOutlines && activeTool !== 'eraser') {
      return 'Stay-in-Lines is on — paint stays neatly inside whichever shape you touch first.';
    }
    return selectedTemplate
      ? `Coloring ${selectedTemplate.title}. Paint sits cleanly beneath the crisp outlines!`
      : 'Free-paint canvas — mix brushes, crayons, watercolors, and stickers.';
  })();

  return (
    <div className="space-y-6 pb-12">
      {/* Studio Top Bar & Mode Switcher */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-xs space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-slate-500">
              <span className="inline-flex items-center gap-1.5 text-rose-700 font-extrabold">
                <GraduationCap className="w-4 h-4" />
                <span>{tierDetail.gradeLabel}</span>
              </span>
              <span aria-hidden="true">·</span>
              <span>{DRAWING_TEMPLATES.length} Coloring Pages &amp; Blank Canvas</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-[#2D2D2D] tracking-tight">
              Drawings &amp; Art Studio
            </h1>
            <p className="text-sm font-medium text-slate-600 max-w-2xl">
              {artCurriculum.scopeSummary}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-2xl">
              <button
                type="button"
                onClick={() => {
                  setActiveView('canvas');
                  playSoundEffect('click', settings.soundEffects);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-colors whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1.5 ${
                  activeView === 'canvas'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Palette className="w-4 h-4 text-rose-600" />
                <span>Art Canvas</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveView('printables');
                  playSoundEffect('click', settings.soundEffects);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-colors whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1.5 ${
                  activeView === 'printables'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Printer className="w-4 h-4 text-blue-600" />
                <span>Coloring Sheets ({DRAWING_TEMPLATES.length})</span>
              </button>
            </div>

            <button
              type="button"
              onClick={() => {
                setShowGalleryModal(true);
                playSoundEffect('click', settings.soundEffects);
              }}
              className="px-4 py-2.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 font-extrabold text-xs transition-colors whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1.5"
            >
              <Images className="w-4 h-4" />
              <span className="tabular-nums">My Gallery ({savedArtworks.length})</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setShowParentNote((v) => !v);
                playSoundEffect('click', settings.soundEffects);
              }}
              className="px-3.5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1.5"
            >
              <HelpCircle className="w-4 h-4" />
              <span>{showParentNote ? 'Hide Note' : 'Parent Tip'}</span>
            </button>
          </div>
        </div>

        {showParentNote && (
          <div className="pt-3 border-t border-slate-100 text-xs text-slate-600 leading-relaxed">
            <strong className="font-extrabold text-slate-800">Teacher &amp; Parent Note: </strong>
            {artCurriculum.parentExplanation}
          </div>
        )}
      </div>

      {/* VIEW 1: TWO-ZONE INTERACTIVE ART STUDIO */}
      {activeView === 'canvas' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* LEFT ZONE: Art Stage (8 cols) */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-4 sm:p-6 border border-slate-200 shadow-xs space-y-4">
            {/* Subject Header & Quick Studio Actions */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-center text-2xl shrink-0">
                  {selectedTemplate ? selectedTemplate.emoji : '🎨'}
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-black text-[#2D2D2D] leading-tight">
                    {selectedTemplate ? selectedTemplate.title : 'Blank Free-Paint Canvas'}
                  </h2>
                  <p className="text-xs font-semibold text-slate-500">
                    {selectedTemplate
                      ? `${selectedTemplate.difficulty} · ${selectedTemplate.ageRecommendation}`
                      : 'Open sketchbook · Express freely'}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={handleUndo}
                  disabled={!historyMeta.canUndo}
                  title="Undo last action"
                  className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-40 disabled:cursor-not-allowed text-slate-700 font-bold text-xs transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Undo</span>
                </button>

                <button
                  type="button"
                  onClick={handleRedo}
                  disabled={!historyMeta.canRedo}
                  title="Redo action"
                  className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-40 disabled:cursor-not-allowed text-slate-700 font-bold text-xs transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <RotateCw className="w-3.5 h-3.5" />
                  <span>Redo</span>
                </button>

                <button
                  type="button"
                  onClick={handleClearCanvas}
                  title="Clear paint"
                  className="px-3 py-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold text-xs transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Clear</span>
                </button>

                <button
                  type="button"
                  onClick={handleDownloadImage}
                  className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleOpenPrintModal(selectedTemplate)}
                  className="px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print</span>
                </button>

                <button
                  type="button"
                  onClick={handleSaveToGallery}
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <Heart className="w-3.5 h-3.5 fill-white" />
                  <span>Save</span>
                </button>
              </div>
            </div>

            {/* Smart Canvas Assist Toggles + Context Tip */}
            <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-bold text-slate-700">{activeTipText}</span>

              <div className="flex flex-wrap items-center gap-1.5 shrink-0">
                {selectedTemplate && (
                  <>
                    <button
                      type="button"
                      onClick={() => {
                        setStayInLines((v) => !v);
                        playSoundEffect('click', settings.soundEffects);
                      }}
                      className={`px-2.5 py-1 rounded-lg text-xs font-extrabold transition-colors flex items-center gap-1 whitespace-nowrap shrink-0 cursor-pointer ${
                        stayInLines
                          ? 'bg-emerald-600 text-white'
                          : 'bg-white text-slate-600 border border-slate-200 hover:text-slate-900'
                      }`}
                    >
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Stay in Lines</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setShowOutlines((v) => !v);
                        playSoundEffect('click', settings.soundEffects);
                      }}
                      className={`px-2.5 py-1 rounded-lg text-xs font-extrabold transition-colors flex items-center gap-1 whitespace-nowrap shrink-0 cursor-pointer ${
                        showOutlines
                          ? 'bg-slate-800 text-white'
                          : 'bg-white text-slate-600 border border-slate-200 hover:text-slate-900'
                      }`}
                    >
                      {showOutlines ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                      <span>{showOutlines ? 'Outlines On' : 'Outlines Off'}</span>
                    </button>
                  </>
                )}

                <button
                  type="button"
                  onClick={() => {
                    setMirrorMode((v) => !v);
                    playSoundEffect('click', settings.soundEffects);
                  }}
                  className={`px-2.5 py-1 rounded-lg text-xs font-extrabold transition-colors flex items-center gap-1 whitespace-nowrap shrink-0 cursor-pointer ${
                    mirrorMode
                      ? 'bg-purple-600 text-white'
                      : 'bg-white text-slate-600 border border-slate-200 hover:text-slate-900'
                  }`}
                >
                  <FlipHorizontal2 className="w-3.5 h-3.5" />
                  <span>Mirror Draw</span>
                </button>
              </div>
            </div>

            {/* Multi-Layer 640x640 Art Board */}
            <div className="flex justify-center">
              <div
                className="relative w-full max-w-[600px] aspect-square rounded-3xl border-2 border-slate-300 shadow-inner overflow-hidden select-none touch-none"
                style={{ backgroundColor: paperOpt.bgHex }}
              >
                {/* Layer 1: Paint Layer (Interactive Pointer Target) */}
                <canvas
                  ref={paintCanvasRef}
                  width={CANVAS_LOGICAL_SIZE}
                  height={CANVAS_LOGICAL_SIZE}
                  onPointerDown={handlePointerDown}
                  onPointerMove={handlePointerMove}
                  onPointerUp={finishStroke}
                  onPointerCancel={finishStroke}
                  className="absolute inset-0 w-full h-full cursor-crosshair touch-none block"
                />

                {/* Layer 2: Masked Live Stroke Preview (GPU clipped when Stay in Lines is active) */}
                <canvas
                  ref={previewCanvasRef}
                  width={CANVAS_LOGICAL_SIZE}
                  height={CANVAS_LOGICAL_SIZE}
                  className="absolute inset-0 w-full h-full pointer-events-none block"
                />

                {/* Layer 3: Crisp Rasterized Template Ink Overlay (Transparent Interiors!) */}
                <canvas
                  ref={outlineCanvasRef}
                  width={CANVAS_LOGICAL_SIZE}
                  height={CANVAS_LOGICAL_SIZE}
                  className="absolute inset-0 w-full h-full pointer-events-none block"
                />

                {/* Optional Mirror Axis Visual Guide (non-exported) */}
                {mirrorMode && (
                  <div
                    aria-hidden="true"
                    className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px border-l border-dashed border-purple-400/70 pointer-events-none"
                  />
                )}
              </div>
            </div>

            {/* Template Educator Prompt & Fun Fact */}
            {selectedTemplate && (
              <div className="pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-extrabold text-slate-800">
                    <BookOpen className="w-4 h-4 text-amber-600" />
                    <span>Guided Activity</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {selectedTemplate.learningPrompt}
                  </p>
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-extrabold text-slate-800">Fun Fact</div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {selectedTemplate.funFact}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT ZONE: Art Tools, Colors, Paper & Templates (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            {/* 1. Art Tools & Brush Size */}
            <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-sm font-extrabold text-slate-800">1. Art Tools</h3>

              <div className="grid grid-cols-2 gap-2">
                {TOOL_ITEMS.map((tool) => {
                  const isActive = activeTool === tool.id;
                  return (
                    <button
                      key={tool.id}
                      type="button"
                      onClick={() => {
                        setActiveTool(tool.id);
                        playSoundEffect('click', settings.soundEffects);
                      }}
                      className={`px-3 py-2.5 rounded-xl border text-xs font-extrabold flex items-center gap-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                        isActive
                          ? tool.activeClass
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {tool.icon}
                      <span className="truncate">{tool.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Stickers Picker (shown cleanly when Stamps selected) */}
              {activeTool === 'stamp' && (
                <div className="pt-3 border-t border-slate-100 space-y-2">
                  <div className="text-xs font-bold text-slate-600">Pick a sticker:</div>
                  <div className="grid grid-cols-6 gap-1.5">
                    {STAMPS.map((stamp) => (
                      <button
                        key={stamp}
                        type="button"
                        onClick={() => {
                          setActiveStamp(stamp);
                          playSoundEffect('pop', settings.soundEffects);
                        }}
                        className={`h-10 text-xl rounded-xl border flex items-center justify-center cursor-pointer transition-transform ${
                          activeStamp === stamp
                            ? 'bg-emerald-50 border-emerald-500 scale-105'
                            : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {stamp}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Smooth Size Slider + Quick Presets */}
              {activeTool !== 'fill' && (
                <div className="pt-3 border-t border-slate-100 space-y-2.5">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                    <span>{activeTool === 'stamp' ? 'Sticker Size' : 'Brush Thickness'}</span>
                    <span className="tabular-nums text-slate-900">{brushSize}px</span>
                  </div>
                  <input
                    type="range"
                    min={4}
                    max={44}
                    step={2}
                    value={brushSize}
                    onChange={(e) => setBrushSize(Number(e.target.value))}
                    aria-label="Brush thickness"
                    className="w-full accent-rose-600 cursor-pointer"
                  />
                  <div className="grid grid-cols-4 gap-2">
                    {[6, 14, 24, 38].map((sz) => (
                      <button
                        key={sz}
                        type="button"
                        onClick={() => setBrushSize(sz)}
                        aria-label={`Set size ${sz}px`}
                        className={`py-2 rounded-xl border flex items-center justify-center cursor-pointer transition-colors ${
                          brushSize === sz
                            ? 'bg-slate-900 text-white border-slate-900'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        <span
                          className="rounded-full bg-current block"
                          style={{
                            width: Math.max(4, Math.round(sz / 2.6)),
                            height: Math.max(4, Math.round(sz / 2.6)),
                          }}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 2. Color Palette & Template Matches */}
            <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-extrabold text-slate-800">2. Color Palette</h3>
                <label className="flex items-center gap-1.5 text-xs font-bold text-slate-600 cursor-pointer">
                  <span>Custom</span>
                  <input
                    type="color"
                    value={activeColor}
                    onChange={(e) => {
                      setActiveColor(e.target.value);
                      if (activeTool === 'eraser' || activeTool === 'stamp') setActiveTool('brush');
                    }}
                    aria-label="Pick custom color"
                    className="w-6 h-6 rounded-md border border-slate-300 cursor-pointer bg-transparent p-0"
                  />
                </label>
              </div>

              {selectedTemplate && selectedTemplate.suggestedColors.length > 0 && (
                <div className="space-y-2 pb-3 border-b border-slate-100">
                  <div className="text-xs font-bold text-slate-500">
                    Suggested for {selectedTemplate.title}:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedTemplate.suggestedColors.map((sc) => {
                      const isActive = activeColor.toLowerCase() === sc.hex.toLowerCase();
                      return (
                        <button
                          key={sc.hex}
                          type="button"
                          onClick={() => {
                            setActiveColor(sc.hex);
                            if (activeTool === 'eraser' || activeTool === 'stamp') {
                              setActiveTool('fill');
                            }
                            playSoundEffect('pop', settings.soundEffects);
                          }}
                          className={`px-2.5 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-colors whitespace-nowrap shrink-0 ${
                            isActive
                              ? 'bg-slate-900 text-white border-slate-900'
                              : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          <span
                            className="w-3.5 h-3.5 rounded-full border border-slate-300 shrink-0"
                            style={{ backgroundColor: sc.hex }}
                          />
                          <span>{sc.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              <div className="grid grid-cols-8 gap-2">
                {COLOR_SWATCHES.map((swatch) => {
                  const isActive = activeColor.toLowerCase() === swatch.hex.toLowerCase();
                  return (
                    <button
                      key={swatch.hex}
                      type="button"
                      title={swatch.name}
                      aria-label={swatch.name}
                      onClick={() => {
                        setActiveColor(swatch.hex);
                        if (activeTool === 'eraser' || activeTool === 'stamp') {
                          setActiveTool('brush');
                        }
                        playSoundEffect('pop', settings.soundEffects);
                      }}
                      className={`w-8 h-8 rounded-full border-2 cursor-pointer transition-transform ${
                        isActive
                          ? 'border-slate-900 scale-110 ring-2 ring-slate-300'
                          : 'border-slate-200 hover:scale-105'
                      }`}
                      style={{ backgroundColor: swatch.hex }}
                    />
                  );
                })}
              </div>
            </div>

            {/* 3. Paper & Coloring Pages */}
            <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-xs space-y-4">
              <div className="space-y-2">
                <h3 className="text-sm font-extrabold text-slate-800">3. Paper Background</h3>
                <div className="grid grid-cols-5 gap-1.5">
                  {PAPER_OPTIONS.map((p) => {
                    const isActive = paperType === p.id;
                    return (
                      <button
                        key={p.id}
                        type="button"
                        title={p.label}
                        aria-label={p.label}
                        onClick={() => {
                          setPaperType(p.id);
                          playSoundEffect('click', settings.soundEffects);
                        }}
                        className={`p-1.5 rounded-xl border text-center cursor-pointer transition-colors space-y-1 ${
                          isActive
                            ? 'border-slate-900 bg-slate-100'
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div
                          className="w-full h-5 rounded-md border border-slate-300"
                          style={{ backgroundColor: p.swatchHex }}
                        />
                        <div className="text-[10px] font-bold text-slate-600 truncate">
                          {p.label.split(' ')[0]}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 space-y-2.5">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-extrabold text-slate-800">4. Coloring Pages</h3>
                  <button
                    type="button"
                    onClick={() => setActiveView('printables')}
                    className="text-xs font-extrabold text-blue-600 hover:underline cursor-pointer"
                  >
                    Browse All ({DRAWING_TEMPLATES.length})
                  </button>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  <button
                    type="button"
                    onClick={() => handleSelectTemplate(null)}
                    className={`px-3 py-1.5 rounded-xl border text-xs font-bold cursor-pointer transition-colors whitespace-nowrap shrink-0 ${
                      selectedTemplate === null
                        ? 'bg-slate-900 text-white border-slate-900'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    Blank Canvas
                  </button>

                  {DRAWING_TEMPLATES.slice(0, 9).map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => handleSelectTemplate(t)}
                      className={`px-2.5 py-1.5 rounded-xl border text-xs font-bold cursor-pointer transition-colors flex items-center gap-1 whitespace-nowrap shrink-0 ${
                        selectedTemplate?.id === t.id
                          ? 'bg-rose-600 text-white border-rose-700'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <span>{t.emoji}</span>
                      <span className="truncate max-w-[110px]">{t.title}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: COLORING PAGES & PRINTABLES LIBRARY */}
      {activeView === 'printables' && (
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-white rounded-2xl border border-slate-200 shadow-xs">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-2 rounded-xl font-extrabold text-xs transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              All Sheets ({DRAWING_TEMPLATES.length})
            </button>

            {DRAWING_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl font-extrabold text-xs transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-rose-600 text-white'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTemplates.map((template) => (
              <article
                key={template.id}
                className="bg-white rounded-3xl border border-slate-200 shadow-xs p-5 flex flex-col justify-between space-y-4 hover:border-slate-300 transition-colors"
              >
                <div className="space-y-3.5">
                  <div className="w-full aspect-square bg-[#FFFEFA] rounded-2xl border border-slate-200 flex items-center justify-center p-4">
                    <svg
                      viewBox="0 0 500 500"
                      className="w-full h-full max-h-[220px]"
                      dangerouslySetInnerHTML={{ __html: template.svgOutline }}
                    />
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                      <span>{template.emoji}</span>
                      <span className="capitalize">{template.category.replace('-', ' ')}</span>
                      <span aria-hidden="true">·</span>
                      <span>{template.difficulty}</span>
                      <span aria-hidden="true">·</span>
                      <span>{template.ageRecommendation}</span>
                    </div>
                    <h3 className="text-lg font-black text-[#2D2D2D]">{template.title}</h3>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {template.description}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => {
                      handleSelectTemplate(template);
                      setActiveView('canvas');
                    }}
                    className="py-2.5 px-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-xs transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer"
                  >
                    <Palette className="w-4 h-4" />
                    <span>Color Online</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleOpenPrintModal(template)}
                    className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-extrabold text-xs transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer"
                  >
                    <Printer className="w-4 h-4" />
                    <span>Print Sheet</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}

      {/* MODAL: Printable Activity Sheet Preview */}
      {showPrintModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl max-w-2xl w-full p-6 sm:p-8 space-y-5 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <h3 className="text-xl font-black text-[#2D2D2D]">
                  Print {printTargetTemplate ? printTargetTemplate.title : 'Artwork'}
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  Formatted cleanly for standard Letter or A4 paper
                </p>
              </div>
              <button
                type="button"
                aria-label="Close print preview"
                onClick={() => setShowPrintModal(false)}
                className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {printTargetTemplate && paintedPrintPreview && (
              <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl w-fit">
                <button
                  type="button"
                  onClick={() => setPrintMode('blank')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer ${
                    printMode === 'blank' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                  }`}
                >
                  Blank Coloring Sheet
                </button>
                <button
                  type="button"
                  onClick={() => setPrintMode('painted')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer ${
                    printMode === 'painted' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                  }`}
                >
                  My Painted Artwork
                </button>
              </div>
            )}

            <div
              id="printable-sheet-area"
              className="p-6 bg-white border-2 border-dashed border-slate-300 rounded-2xl space-y-4"
            >
              <div className="flex justify-between items-center pb-3 border-b border-slate-200 text-xs font-bold text-slate-600">
                <span>First Open School · Drawings &amp; Art</span>
                <span>Artist: {student.name}</span>
              </div>

              {printTargetTemplate && (
                <div className="text-center space-y-1">
                  <h4 className="text-xl font-black text-[#2D2D2D]">
                    {printTargetTemplate.title}
                  </h4>
                  <p className="text-xs text-slate-500">{printTargetTemplate.learningPrompt}</p>
                </div>
              )}

              <div className="w-full aspect-square max-w-[340px] mx-auto flex items-center justify-center my-2">
                {printMode === 'painted' && paintedPrintPreview ? (
                  <img
                    src={paintedPrintPreview}
                    alt={printTargetTemplate?.title || 'Painted artwork'}
                    className="w-full h-full object-contain rounded-xl border border-slate-200"
                  />
                ) : printTargetTemplate ? (
                  <svg
                    viewBox="0 0 500 500"
                    className="w-full h-full stroke-[#000000]"
                    dangerouslySetInnerHTML={{ __html: printTargetTemplate.svgOutline }}
                  />
                ) : null}
              </div>

              {printTargetTemplate && printMode === 'blank' && (
                <div className="text-xs text-slate-600 text-center space-y-1 pt-2 border-t border-slate-100">
                  <div>
                    <strong className="text-slate-800">Suggested Colors: </strong>
                    {printTargetTemplate.suggestedColors.map((c) => c.name).join(' · ')}
                  </div>
                  <div className="italic text-slate-500">{printTargetTemplate.funFact}</div>
                </div>
              )}
            </div>

            <div className="flex justify-end gap-2.5 pt-2">
              <button
                type="button"
                onClick={() => setShowPrintModal(false)}
                className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs cursor-pointer"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => window.print()}
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs cursor-pointer flex items-center gap-1.5"
              >
                <Printer className="w-4 h-4" />
                <span>Print Now</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: Masterpiece Gallery */}
      {showGalleryModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl max-w-3xl w-full p-6 sm:p-8 space-y-6 max-h-[85vh] overflow-y-auto">
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <h3 className="text-xl font-black text-[#2D2D2D]">
                  {student.name}&apos;s Masterpiece Gallery
                </h3>
                <p className="text-xs text-slate-500 font-medium tabular-nums">
                  {savedArtworks.length} saved {savedArtworks.length === 1 ? 'artwork' : 'artworks'}
                </p>
              </div>
              <button
                type="button"
                aria-label="Close gallery"
                onClick={() => setShowGalleryModal(false)}
                className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {savedArtworks.length === 0 ? (
              <div className="py-12 text-center space-y-2">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center mx-auto text-2xl">
                  🎨
                </div>
                <h4 className="text-base font-extrabold text-slate-800">No saved paintings yet</h4>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Paint on the canvas and click Save to keep your favorite artworks in your personal gallery.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {savedArtworks.map((art) => (
                  <div
                    key={art.id}
                    className="bg-slate-50 border border-slate-200 rounded-2xl p-3 space-y-2.5 flex flex-col justify-between"
                  >
                    <div className="aspect-square bg-white rounded-xl border border-slate-200 overflow-hidden flex items-center justify-center">
                      <img
                        src={art.dataUrl}
                        alt={art.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <div className="text-sm font-extrabold text-slate-900 truncate">{art.title}</div>
                      <div className="text-xs text-slate-500">{art.createdAt}</div>
                    </div>
                    <div className="flex items-center gap-1.5 pt-1">
                      <button
                        type="button"
                        onClick={() => handleLoadArtworkToCanvas(art)}
                        className="flex-1 py-1.5 px-2 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold cursor-pointer"
                      >
                        Open
                      </button>
                      <a
                        href={art.dataUrl}
                        download={`${art.title}.png`}
                        className="py-1.5 px-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold text-center no-underline"
                      >
                        Save PNG
                      </a>
                      <button
                        type="button"
                        aria-label={`Delete ${art.title}`}
                        onClick={() => handleDeleteArtwork(art.id)}
                        className="p-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-600 cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
