import React, { useState, useRef, useEffect, useCallback } from 'react';
import { 
  StudentProfile, 
  ParentSettings, 
  DrawingTemplate, 
  DrawingCategory 
} from '../../types';
import { 
  DRAWING_CATEGORIES, 
  DRAWING_TEMPLATES, 
  getDrawingTemplateById 
} from '../../data/drawingsData';
import { playSoundEffect, speakText } from '../../utils/sound';
import { 
  Paintbrush, 
  Eraser, 
  RotateCcw, 
  RotateCw, 
  Trash2, 
  Download, 
  Printer, 
  Sparkles, 
  CheckCircle, 
  Palette, 
  ChevronRight, 
  Images, 
  Share2, 
  BookOpen, 
  Eye, 
  Heart,
  Award,
  GraduationCap,
  HelpCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { CURRICULUM_TIER_DETAILS } from '../../data/curriculumData';

interface DrawingsStudioProps {
  student: StudentProfile;
  settings: ParentSettings;
  initialTemplateId?: string;
  initialCategory?: string;
  onAwardStars?: (stars: number) => void;
}

type DrawingTool = 'brush' | 'crayon' | 'rainbow' | 'eraser' | 'stamp';
type PaperType = 'white' | 'cream' | 'chalkboard' | 'sky' | 'mint';

interface Point {
  x: number;
  y: number;
}

interface SavedArtwork {
  id: string;
  title: string;
  dataUrl: string;
  createdAt: string;
}

const COLOR_SWATCHES = [
  { name: 'Pitch Black', hex: '#1E293B' },
  { name: 'Ruby Red', hex: '#EF4444' },
  { name: 'Warm Orange', hex: '#F97316' },
  { name: 'Sunflower Yellow', hex: '#FBBF24' },
  { name: 'Leaf Green', hex: '#10B981' },
  { name: 'Emerald Mint', hex: '#059669' },
  { name: 'Ocean Cyan', hex: '#06B6D4' },
  { name: 'Sky Blue', hex: '#3B82F6' },
  { name: 'Royal Purple', hex: '#8B5CF6' },
  { name: 'Bubblegum Pink', hex: '#EC4899' },
  { name: 'Rose Coral', hex: '#F43F5E' },
  { name: 'Choco Brown', hex: '#78350F' },
  { name: 'Cloud White', hex: '#FFFFFF' }
];

const STAMPS = ['⭐', '❤️', '🌸', '🦋', '👑', '🚀', '🐾', '🌈', '💎', '🎨'];

export const DrawingsStudio: React.FC<DrawingsStudioProps> = ({
  student,
  settings,
  initialTemplateId,
  initialCategory,
  onAwardStars
}) => {
  const [showParentNote, setShowParentNote] = useState<boolean>(false);
  const tierDetail = CURRICULUM_TIER_DETAILS[student.ageTier] || CURRICULUM_TIER_DETAILS['kindergarten'];
  const artCurriculum = tierDetail.subjects.drawings;

  // Main Studio Mode: 'canvas' (Drawing Studio) or 'printables' (Worksheet Library)
  const [activeView, setActiveView] = useState<'canvas' | 'printables'>(
    initialTemplateId ? 'canvas' : 'canvas'
  );

  // Active Template
  const [selectedTemplate, setSelectedTemplate] = useState<DrawingTemplate | null>(() => {
    if (initialTemplateId) {
      return getDrawingTemplateById(initialTemplateId) || null;
    }
    try {
      const saved = localStorage.getItem(`first_open_last_drawing_${student.id}`);
      if (saved) {
        const found = getDrawingTemplateById(saved);
        if (found) return found;
      }
    } catch {}
    if (student.ageTier === 'grade-1-2' || student.ageTier === 'k12-foundations') {
      const found = DRAWING_TEMPLATES.find(t => t.id === 'space-rocket' || t.category === 'vehicles-space');
      if (found) return found;
    }
    return DRAWING_TEMPLATES[0]; // Default to first template
  });

  // Persist last viewed drawing template
  useEffect(() => {
    if (selectedTemplate) {
      try {
        localStorage.setItem(`first_open_last_drawing_${student.id}`, selectedTemplate.id);
      } catch {}
    }
  }, [selectedTemplate, student.id]);

  // Filter Category for Printables Library
  const [selectedCategory, setSelectedCategory] = useState<DrawingCategory | 'all'>(
    (initialCategory as DrawingCategory) || 'all'
  );

  // Drawing Tools State
  const [activeTool, setActiveTool] = useState<DrawingTool>('brush');
  const [activeColor, setActiveColor] = useState<string>('#EF4444');
  const [brushSize, setBrushSize] = useState<number>(10);
  const [activeStamp, setActiveStamp] = useState<string>('⭐');
  const [paperType, setPaperType] = useState<PaperType>('white');

  // Canvas Refs
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isDrawingRef = useRef<boolean>(false);
  const lastPointRef = useRef<Point | null>(null);
  const rainbowHueRef = useRef<number>(0);

  // History Stack for Undo / Redo
  const undoStackRef = useRef<ImageData[]>([]);
  const redoStackRef = useRef<ImageData[]>([]);

  // Saved Artworks Gallery
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

  // Initialize Canvas
  const setupCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    // Set internal resolution
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    const width = rect.width || 600;
    const height = rect.height || 600;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    // Initial background
    fillBackground(ctx, width, height, paperType);

    // Save initial state to undo stack
    const initialImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    undoStackRef.current = [initialImageData];
    redoStackRef.current = [];
  }, [paperType]);

  const fillBackground = (ctx: CanvasRenderingContext2D, width: number, height: number, type: PaperType) => {
    switch (type) {
      case 'cream':
        ctx.fillStyle = '#FEF9EF';
        break;
      case 'chalkboard':
        ctx.fillStyle = '#1E293B';
        break;
      case 'sky':
        ctx.fillStyle = '#E0F2FE';
        break;
      case 'mint':
        ctx.fillStyle = '#DCFCE7';
        break;
      case 'white':
      default:
        ctx.fillStyle = '#FFFFFF';
        break;
    }
    ctx.fillRect(0, 0, width, height);
  };

  useEffect(() => {
    setupCanvas();
  }, [setupCanvas]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      // Re-setup on orientation or major size change
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Save current canvas state to undo stack
  const pushState = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    undoStackRef.current.push(imageData);
    if (undoStackRef.current.length > 20) {
      undoStackRef.current.shift();
    }
    redoStackRef.current = [];
  };

  // Undo
  const handleUndo = () => {
    const canvas = canvasRef.current;
    if (!canvas || undoStackRef.current.length <= 1) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    const current = undoStackRef.current.pop();
    if (current) redoStackRef.current.push(current);

    const previous = undoStackRef.current[undoStackRef.current.length - 1];
    if (previous) {
      ctx.putImageData(previous, 0, 0);
      playSoundEffect('click', settings.soundEffects);
    }
  };

  // Redo
  const handleRedo = () => {
    const canvas = canvasRef.current;
    if (!canvas || redoStackRef.current.length === 0) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    const next = redoStackRef.current.pop();
    if (next) {
      undoStackRef.current.push(next);
      ctx.putImageData(next, 0, 0);
      playSoundEffect('click', settings.soundEffects);
    }
  };

  // Clear Canvas
  const handleClear = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    fillBackground(ctx, rect.width, rect.height, paperType);
    pushState();
    playSoundEffect('pop', settings.soundEffects);
  };

  // Change paper background
  const handleChangePaper = (type: PaperType) => {
    setPaperType(type);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    fillBackground(ctx, rect.width, rect.height, type);
    pushState();
    playSoundEffect('click', settings.soundEffects);
  };

  // Get pointer coordinates relative to canvas
  const getCanvasPoint = (e: React.PointerEvent<HTMLCanvasElement>): Point => {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  };

  // Pointer Down
  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.setPointerCapture(e.pointerId);
    isDrawingRef.current = true;
    const pt = getCanvasPoint(e);
    lastPointRef.current = pt;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    if (activeTool === 'stamp') {
      // Draw stamp sticker
      ctx.save();
      ctx.font = `${brushSize * 2.5}px sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(activeStamp, pt.x, pt.y);
      ctx.restore();
      playSoundEffect('pop', settings.soundEffects);
      pushState();
    } else {
      // Start drawing stroke
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, brushSize / 2, 0, Math.PI * 2);
      ctx.fillStyle = activeTool === 'eraser' 
        ? (paperType === 'chalkboard' ? '#1E293B' : paperType === 'sky' ? '#E0F2FE' : paperType === 'mint' ? '#DCFCE7' : paperType === 'cream' ? '#FEF9EF' : '#FFFFFF')
        : activeTool === 'rainbow' 
        ? `hsl(${rainbowHueRef.current}, 100%, 50%)`
        : activeColor;
      ctx.fill();
    }
  };

  // Pointer Move
  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawingRef.current || !lastPointRef.current || activeTool === 'stamp') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    const currentPoint = getCanvasPoint(e);

    ctx.lineWidth = brushSize;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    if (activeTool === 'eraser') {
      ctx.strokeStyle = paperType === 'chalkboard' ? '#1E293B' : paperType === 'sky' ? '#E0F2FE' : paperType === 'mint' ? '#DCFCE7' : paperType === 'cream' ? '#FEF9EF' : '#FFFFFF';
    } else if (activeTool === 'rainbow') {
      rainbowHueRef.current = (rainbowHueRef.current + 3) % 360;
      ctx.strokeStyle = `hsl(${rainbowHueRef.current}, 100%, 50%)`;
    } else if (activeTool === 'crayon') {
      ctx.strokeStyle = activeColor;
      ctx.globalAlpha = 0.65;
    } else {
      ctx.strokeStyle = activeColor;
      ctx.globalAlpha = 1.0;
    }

    ctx.beginPath();
    ctx.moveTo(lastPointRef.current.x, lastPointRef.current.y);
    ctx.lineTo(currentPoint.x, currentPoint.y);
    ctx.stroke();
    ctx.globalAlpha = 1.0; // Reset

    lastPointRef.current = currentPoint;
  };

  // Pointer Up
  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawingRef.current) return;
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.releasePointerCapture(e.pointerId);
    }
    isDrawingRef.current = false;
    lastPointRef.current = null;
    if (activeTool !== 'stamp') {
      pushState();
    }
  };

  // Save to Gallery
  const handleSaveToGallery = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dataUrl = canvas.toDataURL('image/png');
    const newArt: SavedArtwork = {
      id: `art_${Date.now()}`,
      title: selectedTemplate ? selectedTemplate.title : `Free Painting #${savedArtworks.length + 1}`,
      dataUrl,
      createdAt: new Date().toLocaleDateString()
    };

    const updated = [newArt, ...savedArtworks.slice(0, 15)];
    setSavedArtworks(updated);
    try {
      localStorage.setItem('fos_saved_artworks', JSON.stringify(updated));
    } catch {}

    confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
    playSoundEffect('victory', settings.soundEffects);
    speakText('Artwork saved to your gallery!', settings.voiceGuidance);
    if (onAwardStars) onAwardStars(1);
  };

  // Download artwork image
  const handleDownloadImage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = `FirstOpenSchool_Drawing_${Date.now()}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
    playSoundEffect('star', settings.soundEffects);
  };

  // Trigger Offline Print for Parent
  const handlePrintWorksheet = (template: DrawingTemplate) => {
    setPrintTargetTemplate(template);
    setShowPrintModal(true);
  };

  const handleExecuteBrowserPrint = () => {
    window.print();
  };

  // Filter templates
  const filteredTemplates = selectedCategory === 'all'
    ? DRAWING_TEMPLATES
    : DRAWING_TEMPLATES.filter(t => t.category === selectedCategory);

  return (
    <div className="space-y-6 pb-12">
      
      {/* CURRICULUM ALIGNMENT HEADER BANNER */}
      <div className="bg-gradient-to-r from-rose-50 via-white to-amber-50 rounded-[28px] p-5 sm:p-6 border-3 border-[#2D2D2D] shadow-[0_5px_0_#000] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-1.5 max-w-2xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#FF6B6B] text-white text-xs font-black uppercase tracking-wider">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Curriculum Tier: {tierDetail.gradeLabel}</span>
            </span>
            <span className="text-xs font-bold text-gray-500">
              100% Open Access &bull; Full Blank Canvas &amp; {DRAWING_TEMPLATES.length}+ Free Templates
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-[#2D2D2D] tracking-tight">
            Creative Expression &amp; Motor Focus: {artCurriculum.focusTitle} 🎨
          </h3>

          <p className="text-xs sm:text-sm font-semibold text-gray-700 leading-relaxed">
            {artCurriculum.scopeSummary}
          </p>

          {showParentNote && (
            <div className="mt-2 p-3 bg-white rounded-xl border-2 border-rose-200 text-xs text-rose-950 font-medium leading-relaxed animate-in fade-in">
              <strong className="block font-black text-rose-900 mb-1">Parent Explanation:</strong>
              {artCurriculum.parentExplanation}
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row md:flex-col gap-2 shrink-0">
          <button
            onClick={() => {
              setShowParentNote(!showParentNote);
              playSoundEffect('click', settings.soundEffects);
            }}
            className="px-4 py-2 bg-white hover:bg-rose-50 text-rose-900 font-black text-xs uppercase tracking-wider rounded-xl border-2 border-rose-300 shadow-xs cursor-pointer flex items-center justify-center gap-1.5"
          >
            <HelpCircle className="w-4 h-4" />
            <span>{showParentNote ? 'Hide Parent Guide' : 'Why This Fits My Kid'}</span>
          </button>

          <a
            href="/curriculum"
            className="px-4 py-2 bg-[#FFD93D] hover:bg-yellow-400 text-[#2D2D2D] font-black text-xs uppercase tracking-wider rounded-xl border-2 border-[#2D2D2D] shadow-[0_3px_0_#000] active:translate-y-0.5 active:shadow-none transition-all flex items-center justify-center gap-1.5 no-underline"
          >
            <span>Full Curriculum Guide &rarr;</span>
          </a>
        </div>
      </div>

      {/* Top Banner & Header */}
      <div className="bg-gradient-to-r from-[#FF6B6B] via-[#FF8E53] to-[#FFD93D] rounded-3xl p-6 sm:p-8 border-4 border-[#2D2D2D] shadow-[0_8px_0_#000] text-white">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-xs text-white text-xs font-black uppercase tracking-wider border border-white/30">
              <Sparkles className="w-3.5 h-3.5 text-yellow-200" />
              <span>CREATIVE ARTS &amp; PRINTABLES STUDIO &bull; ONLINE &amp; OFFLINE</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Draw, Paint &amp; Print 🎨
            </h1>
            <p className="text-sm sm:text-base font-medium text-white/95 leading-relaxed">
              Express your imagination on the giant digital canvas, color inside outlined animals and vehicles, or print out clean offline paper coloring activity sheets for tabletop painting!
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            <button
              onClick={() => {
                setActiveView('canvas');
                playSoundEffect('click', settings.soundEffects);
              }}
              className={`px-5 py-3 rounded-2xl font-black text-xs uppercase tracking-tight border-3 border-[#2D2D2D] shadow-[0_4px_0_#000] transition-all cursor-pointer flex items-center gap-2 ${
                activeView === 'canvas'
                  ? 'bg-white text-[#2D2D2D]'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              <Palette className="w-4 h-4 text-[#FF6B6B]" />
              <span>Canvas Studio</span>
            </button>

            <button
              onClick={() => {
                setActiveView('printables');
                playSoundEffect('click', settings.soundEffects);
              }}
              className={`px-5 py-3 rounded-2xl font-black text-xs uppercase tracking-tight border-3 border-[#2D2D2D] shadow-[0_4px_0_#000] transition-all cursor-pointer flex items-center gap-2 ${
                activeView === 'printables'
                  ? 'bg-white text-[#2D2D2D]'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              <Printer className="w-4 h-4 text-[#4D96FF]" />
              <span>Parent Printables ({DRAWING_TEMPLATES.length})</span>
            </button>

            <button
              onClick={() => {
                setShowGalleryModal(true);
                playSoundEffect('click', settings.soundEffects);
              }}
              className="px-4 py-3 rounded-2xl bg-white/20 text-white font-black text-xs uppercase tracking-tight border-3 border-[#2D2D2D] shadow-[0_4px_0_#000] hover:bg-white/30 transition-all cursor-pointer flex items-center gap-2"
            >
              <Images className="w-4 h-4 text-amber-200" />
              <span>My Gallery ({savedArtworks.length})</span>
            </button>
          </div>
        </div>
      </div>

      {/* VIEW 1: INTERACTIVE CANVAS STUDIO */}
      {activeView === 'canvas' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Main Drawing Stage (8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            
            {/* Canvas Header Bar with Template Name & Actions */}
            <div className="bg-white rounded-2xl p-4 border-4 border-[#2D2D2D] shadow-[0_6px_0_#000] flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center space-x-3">
                <span className="text-3xl">{selectedTemplate ? selectedTemplate.emoji : '🎨'}</span>
                <div>
                  <h2 className="text-lg font-black text-[#2D2D2D] leading-tight">
                    {selectedTemplate ? selectedTemplate.title : 'Free Painting Blank Canvas'}
                  </h2>
                  <div className="text-xs font-bold text-gray-500">
                    {selectedTemplate ? `${selectedTemplate.category.toUpperCase()} &bull; ${selectedTemplate.ageRecommendation}` : 'Draw whatever your heart imagines!'}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleUndo}
                  title="Undo last stroke"
                  className="p-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 border-2 border-gray-300 text-gray-700 cursor-pointer transition-all active:scale-95"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  onClick={handleRedo}
                  title="Redo stroke"
                  className="p-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 border-2 border-gray-300 text-gray-700 cursor-pointer transition-all active:scale-95"
                >
                  <RotateCw className="w-4 h-4" />
                </button>
                <button
                  onClick={handleClear}
                  title="Clear canvas"
                  className="p-2.5 rounded-xl bg-rose-50 hover:bg-rose-100 border-2 border-rose-300 text-rose-600 cursor-pointer transition-all active:scale-95"
                >
                  <Trash2 className="w-4 h-4" />
                </button>

                {selectedTemplate && (
                  <button
                    onClick={() => handlePrintWorksheet(selectedTemplate)}
                    className="px-3.5 py-2 rounded-xl bg-[#4D96FF] text-white font-black text-xs uppercase border-2 border-[#2D2D2D] shadow-xs hover:bg-blue-600 cursor-pointer transition-all flex items-center gap-1.5"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print Sheet</span>
                  </button>
                )}

                <button
                  onClick={handleSaveToGallery}
                  className="px-4 py-2 rounded-xl bg-[#6BCB77] text-white font-black text-xs uppercase border-2 border-[#2D2D2D] shadow-xs hover:bg-emerald-600 cursor-pointer transition-all flex items-center gap-1.5"
                >
                  <Heart className="w-3.5 h-3.5 fill-white" />
                  <span>Save Artwork</span>
                </button>
              </div>
            </div>

            {/* Canvas Container with Outline Overlay */}
            <div className="relative w-full aspect-square max-h-[620px] bg-white rounded-3xl border-4 border-[#2D2D2D] shadow-[0_8px_0_#000] overflow-hidden select-none touch-none flex items-center justify-center">
              
              {/* Underlying Drawing HTML5 Canvas */}
              <canvas
                ref={canvasRef}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                className="w-full h-full cursor-crosshair touch-none block"
              />

              {/* Template Lineart Overlay (Interactive Coloring Page) */}
              {selectedTemplate && (
                <div className="absolute inset-0 pointer-events-none p-6 flex items-center justify-center">
                  <svg
                    viewBox="0 0 500 500"
                    className="w-full h-full opacity-90 transition-opacity"
                    dangerouslySetInnerHTML={{ __html: selectedTemplate.svgOutline }}
                  />
                </div>
              )}
            </div>

            {/* Parent Prompt & Learning Guidance Card */}
            {selectedTemplate && (
              <div className="bg-[#FFF9F0] border-3 border-[#FFD93D] rounded-2xl p-4 shadow-xs space-y-2">
                <div className="flex items-center gap-2 text-xs font-black uppercase text-[#B45309]">
                  <Award className="w-4 h-4 text-amber-500" />
                  <span>Parent &amp; Educator Activity Guide</span>
                </div>
                <p className="text-sm font-semibold text-[#2D2D2D]">
                  {selectedTemplate.learningPrompt}
                </p>
                <div className="text-xs text-gray-600 bg-white/80 p-2.5 rounded-xl border border-amber-200 flex items-center gap-2">
                  <span className="text-base">💡</span>
                  <span><strong>Fun Fact:</strong> {selectedTemplate.funFact}</span>
                </div>
              </div>
            )}
          </div>

          {/* Right Toolbar & Swatches (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            
            {/* Tool Selection Box */}
            <div className="bg-white rounded-3xl p-5 border-4 border-[#2D2D2D] shadow-[0_6px_0_#000] space-y-4">
              <h3 className="text-sm font-black uppercase tracking-wider text-gray-500">
                1. Pick Drawing Tool
              </h3>

              <div className="grid grid-cols-2 gap-2.5">
                <button
                  onClick={() => {
                    setActiveTool('brush');
                    playSoundEffect('click', settings.soundEffects);
                  }}
                  className={`p-3 rounded-2xl border-3 font-black text-xs uppercase flex items-center gap-2.5 transition-all cursor-pointer ${
                    activeTool === 'brush'
                      ? 'bg-[#FF6B6B] text-white border-[#2D2D2D] shadow-xs'
                      : 'bg-gray-50 border-gray-200 text-gray-700 hover:border-gray-400'
                  }`}
                >
                  <Paintbrush className="w-4 h-4" />
                  <span>Paint Brush</span>
                </button>

                <button
                  onClick={() => {
                    setActiveTool('crayon');
                    playSoundEffect('click', settings.soundEffects);
                  }}
                  className={`p-3 rounded-2xl border-3 font-black text-xs uppercase flex items-center gap-2.5 transition-all cursor-pointer ${
                    activeTool === 'crayon'
                      ? 'bg-[#F59E0B] text-white border-[#2D2D2D] shadow-xs'
                      : 'bg-gray-50 border-gray-200 text-gray-700 hover:border-gray-400'
                  }`}
                >
                  <span className="text-base">🖍️</span>
                  <span>Wax Crayon</span>
                </button>

                <button
                  onClick={() => {
                    setActiveTool('rainbow');
                    playSoundEffect('star', settings.soundEffects);
                  }}
                  className={`p-3 rounded-2xl border-3 font-black text-xs uppercase flex items-center gap-2.5 transition-all cursor-pointer ${
                    activeTool === 'rainbow'
                      ? 'bg-gradient-to-r from-red-500 via-amber-400 to-emerald-500 text-white border-[#2D2D2D] shadow-xs'
                      : 'bg-gray-50 border-gray-200 text-gray-700 hover:border-gray-400'
                  }`}
                >
                  <span className="text-base">🌈</span>
                  <span>Magic Rainbow</span>
                </button>

                <button
                  onClick={() => {
                    setActiveTool('eraser');
                    playSoundEffect('click', settings.soundEffects);
                  }}
                  className={`p-3 rounded-2xl border-3 font-black text-xs uppercase flex items-center gap-2.5 transition-all cursor-pointer ${
                    activeTool === 'eraser'
                      ? 'bg-[#4D96FF] text-white border-[#2D2D2D] shadow-xs'
                      : 'bg-gray-50 border-gray-200 text-gray-700 hover:border-gray-400'
                  }`}
                >
                  <Eraser className="w-4 h-4" />
                  <span>Clean Eraser</span>
                </button>
              </div>

              {/* Stroke Size Selector */}
              <div className="space-y-2 pt-2 border-t border-gray-100">
                <div className="flex justify-between items-center text-xs font-bold text-gray-600">
                  <span>Stroke Thickness</span>
                  <span>{brushSize}px</span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[4, 10, 20, 36].map((size) => (
                    <button
                      key={size}
                      onClick={() => setBrushSize(size)}
                      className={`py-2 rounded-xl border-2 font-bold text-xs flex items-center justify-center cursor-pointer transition-all ${
                        brushSize === size
                          ? 'bg-[#2D2D2D] text-white border-[#2D2D2D]'
                          : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <div
                        className="rounded-full bg-current"
                        style={{ width: Math.max(4, size / 2.5), height: Math.max(4, size / 2.5) }}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Kid Palette Swatches */}
            <div className="bg-white rounded-3xl p-5 border-4 border-[#2D2D2D] shadow-[0_6px_0_#000] space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-black uppercase tracking-wider text-gray-500">
                  2. Choose Color
                </h3>
                {selectedTemplate && (
                  <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                    Suggested Available
                  </span>
                )}
              </div>

              {/* Suggested Colors from Template */}
              {selectedTemplate && selectedTemplate.suggestedColors.length > 0 && (
                <div className="space-y-1.5 pb-2 border-b border-gray-100">
                  <div className="text-xs font-bold text-gray-600">Template Matches:</div>
                  <div className="flex flex-wrap gap-2">
                    {selectedTemplate.suggestedColors.map((sc) => (
                      <button
                        key={sc.hex}
                        onClick={() => {
                          setActiveColor(sc.hex);
                          if (activeTool === 'eraser') setActiveTool('brush');
                          playSoundEffect('pop', settings.soundEffects);
                        }}
                        className={`px-3 py-1.5 rounded-xl border-2 text-xs font-bold flex items-center gap-2 cursor-pointer transition-all ${
                          activeColor === sc.hex ? 'border-[#2D2D2D] shadow-xs scale-105' : 'border-gray-200'
                        }`}
                        style={{ backgroundColor: sc.hex, color: sc.hex === '#FFFFFF' ? '#2D2D2D' : '#FFFFFF' }}
                      >
                        <span className="text-shadow-xs">{sc.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Grid of 13 Kid-Friendly Swatches */}
              <div className="grid grid-cols-7 gap-2">
                {COLOR_SWATCHES.map((swatch) => (
                  <button
                    key={swatch.hex}
                    onClick={() => {
                      setActiveColor(swatch.hex);
                      if (activeTool === 'eraser') setActiveTool('brush');
                      playSoundEffect('pop', settings.soundEffects);
                    }}
                    title={swatch.name}
                    className={`w-9 h-9 rounded-xl border-3 cursor-pointer transition-all transform active:scale-90 ${
                      activeColor === swatch.hex
                        ? 'border-[#2D2D2D] scale-110 shadow-xs'
                        : 'border-transparent hover:scale-105'
                    }`}
                    style={{ backgroundColor: swatch.hex }}
                  />
                ))}
              </div>
            </div>

            {/* Fun Stickers & Stamps */}
            <div className="bg-white rounded-3xl p-5 border-4 border-[#2D2D2D] shadow-[0_6px_0_#000] space-y-3">
              <h3 className="text-sm font-black uppercase tracking-wider text-gray-500">
                3. Magic Stickers &amp; Stamps
              </h3>
              <p className="text-xs text-gray-500 font-medium">
                Tap a sticker, then tap anywhere on your canvas to stamp it!
              </p>
              <div className="grid grid-cols-5 gap-2">
                {STAMPS.map((stamp) => (
                  <button
                    key={stamp}
                    onClick={() => {
                      setActiveTool('stamp');
                      setActiveStamp(stamp);
                      playSoundEffect('pop', settings.soundEffects);
                    }}
                    className={`h-11 text-2xl rounded-xl border-2 flex items-center justify-center cursor-pointer transition-all ${
                      activeTool === 'stamp' && activeStamp === stamp
                        ? 'bg-amber-100 border-[#2D2D2D] scale-110 shadow-xs'
                        : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                    }`}
                  >
                    {stamp}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Template Switcher */}
            <div className="bg-white rounded-3xl p-5 border-4 border-[#2D2D2D] shadow-[0_6px_0_#000] space-y-3">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-black uppercase tracking-wider text-gray-500">
                  4. Coloring Pages
                </h3>
                <button
                  onClick={() => setActiveView('printables')}
                  className="text-xs font-bold text-[#4D96FF] hover:underline"
                >
                  View All &rarr;
                </button>
              </div>

              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
                <button
                  onClick={() => {
                    setSelectedTemplate(null);
                    playSoundEffect('click', settings.soundEffects);
                  }}
                  className={`px-3 py-2 rounded-xl font-bold text-xs shrink-0 border-2 cursor-pointer transition-all ${
                    selectedTemplate === null
                      ? 'bg-[#2D2D2D] text-white border-[#2D2D2D]'
                      : 'bg-gray-50 border-gray-200 text-gray-700'
                  }`}
                >
                  ✨ Blank Canvas
                </button>

                {DRAWING_TEMPLATES.slice(0, 8).map((t) => (
                  <button
                    key={t.id}
                    onClick={() => {
                      setSelectedTemplate(t);
                      playSoundEffect('click', settings.soundEffects);
                    }}
                    className={`px-3 py-2 rounded-xl font-bold text-xs shrink-0 border-2 cursor-pointer transition-all flex items-center gap-1.5 ${
                      selectedTemplate?.id === t.id
                        ? 'bg-[#FF6B6B] text-white border-[#2D2D2D]'
                        : 'bg-gray-50 border-gray-200 text-gray-700'
                    }`}
                  >
                    <span>{t.emoji}</span>
                    <span className="truncate max-w-[100px]">{t.title}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

      {/* VIEW 2: PARENT PRINTABLES & COLORING SHEETS DIRECTORY */}
      {activeView === 'printables' && (
        <div className="space-y-6">
          
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2.5 rounded-2xl font-black text-xs uppercase tracking-tight border-3 transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === 'all'
                  ? 'bg-[#2D2D2D] text-white border-[#2D2D2D] shadow-xs'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-gray-400'
              }`}
            >
              All Coloring Sheets ({DRAWING_TEMPLATES.length})
            </button>

            {DRAWING_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-2xl font-black text-xs uppercase tracking-tight border-3 transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                  selectedCategory === cat.id
                    ? 'bg-[#FF6B6B] text-white border-[#2D2D2D] shadow-xs'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-gray-400'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Grid of Printable Coloring Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTemplates.map((template) => (
              <div
                key={template.id}
                className="bg-white rounded-3xl border-4 border-[#2D2D2D] shadow-[0_6px_0_#000] p-6 flex flex-col justify-between hover:-translate-y-1 transition-all"
              >
                <div className="space-y-4">
                  {/* Outline Preview Box */}
                  <div className="w-full aspect-square bg-[#FFF9F0] rounded-2xl border-3 border-gray-200 flex items-center justify-center p-4 relative group">
                    <svg
                      viewBox="0 0 500 500"
                      className="w-full h-full max-h-[220px]"
                      dangerouslySetInnerHTML={{ __html: template.svgOutline }}
                    />
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/90 border border-gray-300 text-xs font-black">
                      {template.difficulty}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-bold text-gray-500">
                      <span>{template.emoji}</span>
                      <span className="uppercase">{template.category}</span>
                      <span>&bull;</span>
                      <span>{template.ageRecommendation}</span>
                    </div>
                    <h3 className="text-xl font-black text-[#2D2D2D]">
                      {template.title}
                    </h3>
                    <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                      {template.description}
                    </p>
                  </div>
                </div>

                {/* Card Action Buttons: Color Online vs Print Offline */}
                <div className="pt-5 mt-4 border-t border-gray-100 flex items-center gap-3">
                  <button
                    onClick={() => {
                      setSelectedTemplate(template);
                      setActiveView('canvas');
                      playSoundEffect('click', settings.soundEffects);
                    }}
                    className="flex-1 py-3 rounded-xl bg-[#FF6B6B] text-white font-black text-xs uppercase border-2 border-[#2D2D2D] shadow-xs hover:bg-rose-600 cursor-pointer transition-all flex items-center justify-center gap-1.5"
                  >
                    <Palette className="w-4 h-4" />
                    <span>Color Online</span>
                  </button>

                  <button
                    onClick={() => handlePrintWorksheet(template)}
                    className="flex-1 py-3 rounded-xl bg-[#4D96FF] text-white font-black text-xs uppercase border-2 border-[#2D2D2D] shadow-xs hover:bg-blue-600 cursor-pointer transition-all flex items-center justify-center gap-1.5"
                  >
                    <Printer className="w-4 h-4" />
                    <span>Print Sheet</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* MODAL: Printable Activity Sheet Preview & Direct Print */}
      {showPrintModal && printTargetTemplate && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl border-4 border-[#2D2D2D] shadow-[0_12px_0_#000] max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
            
            <div className="flex justify-between items-center pb-4 border-b-2 border-gray-100">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{printTargetTemplate.emoji}</span>
                <div>
                  <h3 className="text-xl font-black text-[#2D2D2D]">
                    Print Activity Sheet: {printTargetTemplate.title}
                  </h3>
                  <p className="text-xs text-gray-500 font-bold">
                    Printable Worksheet formatted for standard A4 / 8.5x11 paper
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowPrintModal(false)}
                className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 border-2 border-gray-300 font-black text-sm flex items-center justify-center cursor-pointer"
              >
                &times;
              </button>
            </div>

            {/* Printable Paper Preview (what will be sent to the printer) */}
            <div className="p-6 bg-white border-4 border-dashed border-gray-400 rounded-2xl space-y-4 print:border-none print:p-0">
              <div className="flex justify-between items-center pb-3 border-b-2 border-gray-200 text-xs font-bold text-gray-600">
                <div>
                  <span className="font-black text-[#2D2D2D]">FIRST OPEN SCHOOL</span> &bull; Art &amp; Drawing
                </div>
                <div>firstopenschool.com</div>
              </div>

              <div className="flex justify-between items-center text-xs font-bold text-gray-700 pt-2">
                <div>Artist Name: __________________________</div>
                <div>Date: ____________</div>
              </div>

              <div className="text-center pt-2">
                <h4 className="text-2xl font-black text-[#2D2D2D]">
                  {printTargetTemplate.title}
                </h4>
                <p className="text-xs text-gray-500 font-medium">
                  {printTargetTemplate.learningPrompt}
                </p>
              </div>

              {/* Large High-Contrast Vector Lineart */}
              <div className="w-full aspect-square max-w-[340px] mx-auto flex items-center justify-center my-4">
                <svg
                  viewBox="0 0 500 500"
                  className="w-full h-full stroke-[#000000]"
                  dangerouslySetInnerHTML={{ __html: printTargetTemplate.svgOutline }}
                />
              </div>

              {/* Suggested Color Palette Guide */}
              <div className="bg-gray-50 p-3 rounded-xl border border-gray-200 text-xs space-y-1">
                <div className="font-bold text-gray-700">Recommended Colors for Kids:</div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {printTargetTemplate.suggestedColors.map(c => (
                    <span key={c.hex} className="inline-flex items-center gap-1 font-semibold text-gray-600">
                      <span className="w-3.5 h-3.5 rounded-full border border-gray-400" style={{ backgroundColor: c.hex }} />
                      <span>{c.name}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-[11px] text-gray-500 italic text-center pt-2">
                &ldquo;{printTargetTemplate.funFact}&rdquo;
              </div>
            </div>

            <div className="flex flex-wrap justify-end gap-3 pt-4 border-t border-gray-100">
              <button
                onClick={() => setShowPrintModal(false)}
                className="px-5 py-2.5 rounded-xl bg-gray-100 text-gray-700 font-black text-xs uppercase cursor-pointer hover:bg-gray-200"
              >
                Close
              </button>

              <button
                onClick={handleExecuteBrowserPrint}
                className="px-6 py-2.5 rounded-xl bg-[#4D96FF] text-white font-black text-xs uppercase border-2 border-[#2D2D2D] shadow-xs hover:bg-blue-600 cursor-pointer flex items-center gap-2"
              >
                <Printer className="w-4 h-4" />
                <span>Open Print Dialog</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: Child's Masterpieces Gallery */}
      {showGalleryModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl border-4 border-[#2D2D2D] shadow-[0_12px_0_#000] max-w-3xl w-full p-6 sm:p-8 space-y-6 max-h-[85vh] overflow-y-auto">
            <div className="flex justify-between items-center pb-4 border-b-2 border-gray-100">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🖼️</span>
                <div>
                  <h3 className="text-xl font-black text-[#2D2D2D]">
                    {student.name}&apos;s Masterpiece Gallery
                  </h3>
                  <p className="text-xs text-gray-500 font-bold">
                    {savedArtworks.length} saved paintings and drawings
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowGalleryModal(false)}
                className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 border-2 border-gray-300 font-black text-sm flex items-center justify-center cursor-pointer"
              >
                &times;
              </button>
            </div>

            {savedArtworks.length === 0 ? (
              <div className="py-12 text-center space-y-3">
                <span className="text-5xl">🎨</span>
                <h4 className="text-lg font-black text-gray-700">No Saved Paintings Yet!</h4>
                <p className="text-xs text-gray-500 max-w-sm mx-auto">
                  Create a painting on the canvas and tap &ldquo;Save Artwork&rdquo; to add it to your personal gallery!
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {savedArtworks.map((art) => (
                  <div
                    key={art.id}
                    className="bg-[#FFF9F0] border-2 border-[#2D2D2D] rounded-2xl p-3 shadow-xs space-y-2 flex flex-col justify-between"
                  >
                    <div className="aspect-square bg-white rounded-xl border border-gray-200 overflow-hidden flex items-center justify-center">
                      <img src={art.dataUrl} alt={art.title} className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <div className="text-sm font-black text-[#2D2D2D] truncate">{art.title}</div>
                      <div className="text-[11px] text-gray-500">{art.createdAt}</div>
                    </div>
                    <div className="flex gap-2 pt-1">
                      <a
                        href={art.dataUrl}
                        download={`${art.title}.png`}
                        className="flex-1 py-1.5 rounded-lg bg-[#4D96FF] text-white text-xs font-bold text-center border border-[#2D2D2D] shadow-xs"
                      >
                        Download
                      </a>
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
