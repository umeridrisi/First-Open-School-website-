export const CANVAS_LOGICAL_SIZE = 640;

export type PaperType = 'white' | 'cream' | 'sky' | 'mint' | 'chalkboard';

export interface PaperOption {
  id: PaperType;
  label: string;
  bgHex: string;
  swatchHex: string;
  inkHex: string;
  isDark: boolean;
}

export const PAPER_OPTIONS: PaperOption[] = [
  { id: 'white', label: 'White Paper', bgHex: '#FFFFFF', swatchHex: '#FFFFFF', inkHex: '#1E293B', isDark: false },
  { id: 'cream', label: 'Sketch Cream', bgHex: '#FEF9EF', swatchHex: '#FEF3C7', inkHex: '#1E293B', isDark: false },
  { id: 'sky', label: 'Sky Blue', bgHex: '#E0F2FE', swatchHex: '#BAE6FD', inkHex: '#1E293B', isDark: false },
  { id: 'mint', label: 'Mint Meadow', bgHex: '#DCFCE7', swatchHex: '#BBF7D0', inkHex: '#1E293B', isDark: false },
  { id: 'chalkboard', label: 'Chalkboard', bgHex: '#1E293B', swatchHex: '#1E293B', inkHex: '#F8FAFC', isDark: true },
];

export interface Point2D {
  x: number;
  y: number;
}

export function getPaperOption(type: PaperType): PaperOption {
  return PAPER_OPTIONS.find((p) => p.id === type) || PAPER_OPTIONS[0];
}

export function hexToRgb(hex: string): [number, number, number] {
  const clean = hex.replace('#', '');
  const full =
    clean.length === 3
      ? clean
          .split('')
          .map((c) => c + c)
          .join('')
      : clean;
  const num = parseInt(full, 16);
  if (Number.isNaN(num)) return [30, 41, 59];
  return [(num >> 16) & 255, (num >> 8) & 255, num & 255];
}

/**
 * Rasterizes an SVG template (viewBox 0 0 500 500) onto an offscreen canvas of `size x size`.
 * Any bright white fill regions (used as interior layer masks in SVG) are converted to
 * transparent alpha=0 so user paint shows cleanly underneath crisp outline ink.
 */
export async function rasterizeSvgOutline(
  svgInnerMarkup: string,
  size: number,
  inkHex: string
): Promise<{ canvas: HTMLCanvasElement; alphaMask: Uint8Array }> {
  const svgDoc = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="${size}" height="${size}">${svgInnerMarkup}</svg>`;
  const blob = new Blob([svgDoc], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(blob);

  try {
    const img = await new Promise<HTMLImageElement>((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = (err) => reject(err);
      image.src = url;
    });

    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    const alphaMask = new Uint8Array(size * size);

    if (!ctx) return { canvas, alphaMask };

    ctx.clearRect(0, 0, size, size);
    ctx.drawImage(img, 0, 0, size, size);

    const imageData = ctx.getImageData(0, 0, size, size);
    const data = imageData.data;
    const [inkR, inkG, inkB] = hexToRgb(inkHex);

    for (let i = 0, p = 0; i < data.length; i += 4, p++) {
      const a = data[i + 3];
      if (a === 0) {
        alphaMask[p] = 0;
        continue;
      }
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      // Luminance 0..255: dark ink strokes ~45, white interior masks ~255
      const lum = (r * 299 + g * 587 + b * 114) / 1000;
      const inkAlpha = Math.max(0, Math.min(255, Math.round(((222 - lum) / 172) * a)));

      alphaMask[p] = inkAlpha;
      if (inkAlpha === 0) {
        data[i + 3] = 0;
      } else {
        data[i] = inkR;
        data[i + 1] = inkG;
        data[i + 2] = inkB;
        data[i + 3] = inkAlpha;
      }
    }

    ctx.putImageData(imageData, 0, 0);
    return { canvas, alphaMask };
  } finally {
    URL.revokeObjectURL(url);
  }
}

/**
 * Finds the nearest interior pixel within a small radius if the user accidentally taps directly on an outline.
 */
function findNearestOpenPixel(
  startX: number,
  startY: number,
  size: number,
  outlineAlpha: Uint8Array | null
): { x: number; y: number } | null {
  const clampX = Math.max(0, Math.min(size - 1, Math.round(startX)));
  const clampY = Math.max(0, Math.min(size - 1, Math.round(startY)));
  if (!outlineAlpha || outlineAlpha[clampY * size + clampX] < 85) {
    return { x: clampX, y: clampY };
  }

  for (let radius = 1; radius <= 7; radius++) {
    for (let dy = -radius; dy <= radius; dy++) {
      for (let dx = -radius; dx <= radius; dx++) {
        if (Math.abs(dx) !== radius && Math.abs(dy) !== radius) continue;
        const nx = clampX + dx;
        const ny = clampY + dy;
        if (nx < 0 || nx >= size || ny < 0 || ny >= size) continue;
        if (outlineAlpha[ny * size + nx] < 85) {
          return { x: nx, y: ny };
        }
      }
    }
  }
  return null;
}

/**
 * Fast iterative scanline flood fill on `paintCtx`.
 * Respects both active template outline barriers (`outlineAlpha`) AND existing painted strokes,
 * and includes 1px anti-halo tuck under anti-aliased template edges so there are zero white gaps.
 */
export function scanlineFloodFill(
  paintCtx: CanvasRenderingContext2D,
  outlineAlpha: Uint8Array | null,
  rawStartX: number,
  rawStartY: number,
  fillHex: string,
  size: number = CANVAS_LOGICAL_SIZE
): boolean {
  const origin = findNearestOpenPixel(rawStartX, rawStartY, size, outlineAlpha);
  if (!origin) return false;

  const { x: startX, y: startY } = origin;
  const imgData = paintCtx.getImageData(0, 0, size, size);
  const data = imgData.data;

  const startIdx = startY * size + startX;
  const startOff = startIdx * 4;
  const sr = data[startOff];
  const sg = data[startOff + 1];
  const sb = data[startOff + 2];
  const sa = data[startOff + 3];

  const [tr, tg, tb] = hexToRgb(fillHex);

  // Skip if clicking a region already filled with the exact same opaque color
  if (
    sa > 240 &&
    Math.abs(sr - tr) <= 6 &&
    Math.abs(sg - tg) <= 6 &&
    Math.abs(sb - tb) <= 6
  ) {
    return false;
  }

  const tol = 44;
  const visited = new Uint8Array(size * size);

  const isWall = (idx: number): boolean => {
    if (outlineAlpha && outlineAlpha[idx] >= 85) return true;
    const off = idx * 4;
    const pa = data[off + 3];
    if (sa < 25) {
      // Starting on transparent region: stop at opaque paint pixels
      return pa >= 90;
    }
    const pr = data[off];
    const pg = data[off + 1];
    const pb = data[off + 2];
    return (
      Math.abs(pr - sr) > tol ||
      Math.abs(pg - sg) > tol ||
      Math.abs(pb - sb) > tol ||
      Math.abs(pa - sa) > tol
    );
  };

  if (isWall(startIdx)) return false;

  const stack: number[] = [startX, startY];
  const filledIndices: number[] = [];

  while (stack.length > 0) {
    const y = stack.pop()!;
    const x = stack.pop()!;

    let lx = x;
    while (lx >= 0) {
      const idx = y * size + lx;
      if (visited[idx] || isWall(idx)) break;
      lx--;
    }
    lx++;

    let rx = x;
    while (rx < size) {
      const idx = y * size + rx;
      if (visited[idx] || isWall(idx)) break;
      rx++;
    }
    rx--;

    let spanAbove = false;
    let spanBelow = false;

    for (let cx = lx; cx <= rx; cx++) {
      const idx = y * size + cx;
      visited[idx] = 1;
      filledIndices.push(idx);

      const off = idx * 4;
      data[off] = tr;
      data[off + 1] = tg;
      data[off + 2] = tb;
      data[off + 3] = 255;

      if (y > 0) {
        const upIdx = (y - 1) * size + cx;
        const upValid = !visited[upIdx] && !isWall(upIdx);
        if (!spanAbove && upValid) {
          stack.push(cx, y - 1);
          spanAbove = true;
        } else if (spanAbove && !upValid) {
          spanAbove = false;
        }
      }

      if (y < size - 1) {
        const dnIdx = (y + 1) * size + cx;
        const dnValid = !visited[dnIdx] && !isWall(dnIdx);
        if (!spanBelow && dnValid) {
          stack.push(cx, y + 1);
          spanBelow = true;
        } else if (spanBelow && !dnValid) {
          spanBelow = false;
        }
      }
    }
  }

  // Anti-halo edge tuck: expand 1px into outline/anti-aliased fringe so color kisses the crisp ink line
  for (let i = 0; i < filledIndices.length; i++) {
    const idx = filledIndices[i];
    const cx = idx % size;
    const cy = (idx - cx) / size;
    const neighbors = [
      cx > 0 ? idx - 1 : -1,
      cx < size - 1 ? idx + 1 : -1,
      cy > 0 ? idx - size : -1,
      cy < size - 1 ? idx + size : -1,
    ];
    for (let n = 0; n < 4; n++) {
      const nIdx = neighbors[n];
      if (nIdx < 0 || visited[nIdx]) continue;
      // Tuck under template outline or translucent paint edge
      if ((outlineAlpha && outlineAlpha[nIdx] > 0) || data[nIdx * 4 + 3] < 200) {
        const nOff = nIdx * 4;
        data[nOff] = tr;
        data[nOff + 1] = tg;
        data[nOff + 2] = tb;
        data[nOff + 3] = 255;
      }
    }
  }

  paintCtx.putImageData(imgData, 0, 0);
  return filledIndices.length > 0;
}

/**
 * Computes a binary mask (1 = inside enclosed region, 0 = outside) using only the template outline.
 * Used for "Stay Inside Lines" brush assistance.
 */
export function computeTemplateRegionMask(
  outlineAlpha: Uint8Array,
  seedPoints: Point2D[],
  size: number = CANVAS_LOGICAL_SIZE
): Uint8Array {
  const mask = new Uint8Array(size * size);

  for (const pt of seedPoints) {
    const origin = findNearestOpenPixel(pt.x, pt.y, size, outlineAlpha);
    if (!origin) continue;
    const { x: startX, y: startY } = origin;
    const startIdx = startY * size + startX;
    if (mask[startIdx] === 1) continue;

    const stack: number[] = [startX, startY];
    const regionPixels: number[] = [];

    while (stack.length > 0) {
      const y = stack.pop()!;
      const x = stack.pop()!;

      let lx = x;
      while (lx >= 0) {
        const idx = y * size + lx;
        if (mask[idx] === 1 || outlineAlpha[idx] >= 85) break;
        lx--;
      }
      lx++;

      let rx = x;
      while (rx < size) {
        const idx = y * size + rx;
        if (mask[idx] === 1 || outlineAlpha[idx] >= 85) break;
        rx++;
      }
      rx--;

      let spanAbove = false;
      let spanBelow = false;

      for (let cx = lx; cx <= rx; cx++) {
        const idx = y * size + cx;
        mask[idx] = 1;
        regionPixels.push(idx);

        if (y > 0) {
          const upIdx = (y - 1) * size + cx;
          const upValid = mask[upIdx] === 0 && outlineAlpha[upIdx] < 85;
          if (!spanAbove && upValid) {
            stack.push(cx, y - 1);
            spanAbove = true;
          } else if (spanAbove && !upValid) {
            spanAbove = false;
          }
        }

        if (y < size - 1) {
          const dnIdx = (y + 1) * size + cx;
          const dnValid = mask[dnIdx] === 0 && outlineAlpha[dnIdx] < 85;
          if (!spanBelow && dnValid) {
            stack.push(cx, y + 1);
            spanBelow = true;
          } else if (spanBelow && !dnValid) {
            spanBelow = false;
          }
        }
      }
    }

    // Tuck 1px into outline edge so brush strokes reach neatly under the black line
    for (let i = 0; i < regionPixels.length; i++) {
      const idx = regionPixels[i];
      const cx = idx % size;
      const cy = (idx - cx) / size;
      if (cx > 0 && outlineAlpha[idx - 1] > 0) mask[idx - 1] = 1;
      if (cx < size - 1 && outlineAlpha[idx + 1] > 0) mask[idx + 1] = 1;
      if (cy > 0 && outlineAlpha[idx - size] > 0) mask[idx - size] = 1;
      if (cy < size - 1 && outlineAlpha[idx + size] > 0) mask[idx + size] = 1;
    }
  }

  return mask;
}

export function buildClipMaskCanvas(
  mask: Uint8Array,
  size: number = CANVAS_LOGICAL_SIZE
): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  if (!ctx) return canvas;

  const imgData = ctx.createImageData(size, size);
  const data = imgData.data;
  for (let i = 0, p = 0; i < mask.length; i++, p += 4) {
    if (mask[i] === 1) {
      data[p] = 255;
      data[p + 1] = 255;
      data[p + 2] = 255;
      data[p + 3] = 255;
    }
  }
  ctx.putImageData(imgData, 0, 0);
  return canvas;
}

/**
 * Draws a smooth quadratic Bezier curve stroke between points [pPrev -> pCurr -> pNext]
 */
export function drawSmoothBrushSegment(
  ctx: CanvasRenderingContext2D,
  from: Point2D,
  midFrom: Point2D,
  midTo: Point2D,
  color: string,
  width: number,
  isEraser: boolean = false
) {
  ctx.save();
  ctx.lineWidth = width;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  if (isEraser) {
    ctx.globalCompositeOperation = 'destination-out';
    ctx.strokeStyle = 'rgba(0,0,0,1)';
  } else {
    ctx.strokeStyle = color;
  }
  ctx.beginPath();
  ctx.moveTo(midFrom.x, midFrom.y);
  ctx.quadraticCurveTo(from.x, from.y, midTo.x, midTo.y);
  ctx.stroke();
  ctx.restore();
}

/**
 * Wax Crayon effect: stamps textured paper-tooth micro-grains along the segment.
 */
export function drawCrayonSegment(
  ctx: CanvasRenderingContext2D,
  from: Point2D,
  to: Point2D,
  color: string,
  brushSize: number
) {
  const dist = Math.hypot(to.x - from.x, to.y - from.y);
  const steps = Math.max(1, Math.ceil(dist / 2.2));
  const radius = Math.max(2, brushSize / 2);
  const grainsPerStep = Math.max(6, Math.round(brushSize * 0.9));

  ctx.save();
  ctx.fillStyle = color;

  for (let s = 0; s <= steps; s++) {
    const t = s / steps;
    const cx = from.x + (to.x - from.x) * t;
    const cy = from.y + (to.y - from.y) * t;

    for (let g = 0; g < grainsPerStep; g++) {
      const angle = Math.random() * Math.PI * 2;
      const r = Math.sqrt(Math.random()) * radius;
      const gx = cx + Math.cos(angle) * r;
      const gy = cy + Math.sin(angle) * r;
      const grainSize = 1 + Math.random() * Math.max(1.2, brushSize * 0.12);
      ctx.globalAlpha = 0.2 + Math.random() * 0.45;
      ctx.beginPath();
      ctx.arc(gx, gy, grainSize, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  ctx.restore();
}

/**
 * Watercolor effect: soft layered translucent wash with feathered edge.
 */
export function drawWatercolorSegment(
  ctx: CanvasRenderingContext2D,
  from: Point2D,
  to: Point2D,
  color: string,
  brushSize: number
) {
  const dist = Math.hypot(to.x - from.x, to.y - from.y);
  const steps = Math.max(1, Math.ceil(dist / Math.max(2, brushSize * 0.25)));
  const radius = Math.max(4, brushSize * 0.65);
  const [r, g, b] = hexToRgb(color);

  ctx.save();
  for (let s = 0; s <= steps; s++) {
    const t = s / steps;
    const cx = from.x + (to.x - from.x) * t;
    const cy = from.y + (to.y - from.y) * t;

    const grad = ctx.createRadialGradient(cx, cy, radius * 0.15, cx, cy, radius);
    grad.addColorStop(0, `rgba(${r},${g},${b},0.16)`);
    grad.addColorStop(0.7, `rgba(${r},${g},${b},0.1)`);
    grad.addColorStop(1, `rgba(${r},${g},${b},0)`);

    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();
}

/**
 * Sparkle & Mist Spray effect: scatters colorful droplets plus occasional crisp 4-point star sparkles.
 */
export function drawSpraySegment(
  ctx: CanvasRenderingContext2D,
  from: Point2D,
  to: Point2D,
  color: string,
  brushSize: number
) {
  const dist = Math.hypot(to.x - from.x, to.y - from.y);
  const steps = Math.max(1, Math.ceil(dist / 6));
  const spread = Math.max(10, brushSize * 1.15);
  const droplets = Math.max(8, Math.round(brushSize * 0.7));

  ctx.save();
  for (let s = 0; s <= steps; s++) {
    const t = s / steps;
    const cx = from.x + (to.x - from.x) * t;
    const cy = from.y + (to.y - from.y) * t;

    for (let d = 0; d < droplets; d++) {
      const angle = Math.random() * Math.PI * 2;
      const r = Math.pow(Math.random(), 0.7) * spread;
      const dx = cx + Math.cos(angle) * r;
      const dy = cy + Math.sin(angle) * r;
      const dotR = 0.8 + Math.random() * Math.max(1.5, brushSize * 0.08);
      ctx.globalAlpha = 0.45 + Math.random() * 0.5;
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(dx, dy, dotR, 0, Math.PI * 2);
      ctx.fill();
    }

    // Occasional twinkling 4-point sparkle
    if (Math.random() < 0.35) {
      const angle = Math.random() * Math.PI * 2;
      const r = Math.random() * spread * 0.85;
      const sx = cx + Math.cos(angle) * r;
      const sy = cy + Math.sin(angle) * r;
      const starSize = Math.max(4, brushSize * 0.28);
      ctx.globalAlpha = 0.9;
      ctx.fillStyle = Math.random() < 0.35 ? '#FBBF24' : color;
      ctx.beginPath();
      ctx.moveTo(sx, sy - starSize);
      ctx.quadraticCurveTo(sx, sy, sx + starSize, sy);
      ctx.quadraticCurveTo(sx, sy, sx, sy + starSize);
      ctx.quadraticCurveTo(sx, sy, sx - starSize, sy);
      ctx.quadraticCurveTo(sx, sy, sx, sy - starSize);
      ctx.fill();
    }
  }
  ctx.restore();
}

/**
 * Composites Paper Background + Paint Canvas + Active Outline Canvas into a crisp downloadable PNG Data URL.
 */
export function compositeArtworkDataUrl(
  paperHex: string,
  paintCanvas: HTMLCanvasElement,
  outlineCanvas: HTMLCanvasElement | null,
  size: number = CANVAS_LOGICAL_SIZE
): string {
  const out = document.createElement('canvas');
  out.width = size;
  out.height = size;
  const ctx = out.getContext('2d');
  if (!ctx) return paintCanvas.toDataURL('image/png');

  ctx.fillStyle = paperHex;
  ctx.fillRect(0, 0, size, size);
  ctx.drawImage(paintCanvas, 0, 0, size, size);
  if (outlineCanvas) {
    ctx.drawImage(outlineCanvas, 0, 0, size, size);
  }
  return out.toDataURL('image/png');
}
