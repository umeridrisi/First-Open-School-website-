export interface Point2D {
  x: number;
  y: number;
}

export type PathSegment =
  | { type: 'line'; p0: Point2D; p1: Point2D }
  | { type: 'cubic'; p0: Point2D; p1: Point2D; p2: Point2D; p3: Point2D };

export interface TracingStroke {
  id: number;
  hint: string;
  isDot?: boolean;
  segments: PathSegment[];
}

export interface TracingGlyph {
  key: string;
  label: string;
  strokes: TracingStroke[];
}

export const RULED_LINES = {
  sky: 18,
  mid: 48,
  base: 78,
  descender: 93,
} as const;

const pt = (x: number, y: number): Point2D => ({ x, y });

const line = (x0: number, y0: number, x1: number, y1: number): PathSegment => ({
  type: 'line',
  p0: pt(x0, y0),
  p1: pt(x1, y1),
});

/**
 * Generates smooth cubic Bezier segments approximating an elliptical arc
 * in screen coordinates (0 deg = East/right, 90 deg = South/down, 180 deg = West, 270/-90 deg = North/up).
 */
const ellipseArc = (
  cx: number,
  cy: number,
  rx: number,
  ry: number,
  startDeg: number,
  endDeg: number
): PathSegment[] => {
  const totalDeg = endDeg - startDeg;
  const steps = Math.max(1, Math.ceil(Math.abs(totalDeg) / 75));
  const stepDeg = totalDeg / steps;
  const segs: PathSegment[] = [];

  for (let i = 0; i < steps; i++) {
    const a1 = ((startDeg + i * stepDeg) * Math.PI) / 180;
    const a2 = ((startDeg + (i + 1) * stepDeg) * Math.PI) / 180;
    const delta = a2 - a1;
    const alpha = (4 / 3) * Math.tan(delta / 4);

    const cos1 = Math.cos(a1);
    const sin1 = Math.sin(a1);
    const cos2 = Math.cos(a2);
    const sin2 = Math.sin(a2);

    const p0 = pt(cx + rx * cos1, cy + ry * sin1);
    const p3 = pt(cx + rx * cos2, cy + ry * sin2);
    const p1 = pt(p0.x - alpha * rx * sin1, p0.y + alpha * ry * cos1);
    const p2 = pt(p3.x + alpha * rx * sin2, p3.y - alpha * ry * cos2);

    segs.push({ type: 'cubic', p0, p1, p2, p3 });
  }

  return segs;
};

const getArcEndpoint = (
  cx: number,
  cy: number,
  rx: number,
  ry: number,
  deg: number
): Point2D => {
  const rad = (deg * Math.PI) / 180;
  return pt(cx + rx * Math.cos(rad), cy + ry * Math.sin(rad));
};

const stroke = (id: number, hint: string, segments: PathSegment[], isDot = false): TracingStroke => ({
  id,
  hint,
  isDot,
  segments,
});

// ============================================================================
// UPPERCASE LETTERS (A - Z) aligned to Sky=18, Mid=48, Base=78
// ============================================================================
export const UPPERCASE_GLYPHS: Record<string, TracingGlyph> = {
  A: {
    key: 'A',
    label: 'Uppercase A',
    strokes: [
      stroke(1, 'Slant down to the left', [line(50, 18, 25, 78)]),
      stroke(2, 'Slant down to the right', [line(50, 18, 75, 78)]),
      stroke(3, 'Cross across the middle', [line(34, 55, 66, 55)]),
    ],
  },
  B: {
    key: 'B',
    label: 'Uppercase B',
    strokes: [
      stroke(1, 'Go straight down from top to bottom', [line(28, 18, 28, 78)]),
      stroke(2, 'Make the top bump to the middle', [
        line(28, 18, 48, 18),
        ...ellipseArc(48, 32.5, 22, 14.5, -90, 90),
        line(48, 47, 28, 47),
      ]),
      stroke(3, 'Make the bottom bump to the bottom line', [
        line(28, 47, 50, 47),
        ...ellipseArc(50, 62.5, 24, 15.5, -90, 90),
        line(50, 78, 28, 78),
      ]),
    ],
  },
  C: {
    key: 'C',
    label: 'Uppercase C',
    strokes: [
      stroke(1, 'Curve up, around left, and down like a crescent', [
        ...ellipseArc(52, 48, 26, 30, -38, -322),
      ]),
    ],
  },
  D: {
    key: 'D',
    label: 'Uppercase D',
    strokes: [
      stroke(1, 'Go straight down', [line(27, 18, 27, 78)]),
      stroke(2, 'Curve a big belly all the way to the bottom', [
        line(27, 18, 43, 18),
        ...ellipseArc(43, 48, 32, 30, -90, 90),
        line(43, 78, 27, 78),
      ]),
    ],
  },
  E: {
    key: 'E',
    label: 'Uppercase E',
    strokes: [
      stroke(1, 'Go straight down', [line(28, 18, 28, 78)]),
      stroke(2, 'Draw the top arm', [line(28, 18, 72, 18)]),
      stroke(3, 'Draw the middle arm', [line(28, 48, 63, 48)]),
      stroke(4, 'Draw the bottom arm', [line(28, 78, 72, 78)]),
    ],
  },
  F: {
    key: 'F',
    label: 'Uppercase F',
    strokes: [
      stroke(1, 'Go straight down', [line(29, 18, 29, 78)]),
      stroke(2, 'Draw the top arm', [line(29, 18, 73, 18)]),
      stroke(3, 'Draw the middle arm', [line(29, 48, 65, 48)]),
    ],
  },
  G: {
    key: 'G',
    label: 'Uppercase G',
    strokes: [
      stroke(1, 'Curve around like C and climb up to the middle', [
        ...ellipseArc(51, 48, 25, 30, -38, -360),
      ]),
      stroke(2, 'Draw a shelf inward at the middle', [line(53, 48, 76, 48)]),
    ],
  },
  H: {
    key: 'H',
    label: 'Uppercase H',
    strokes: [
      stroke(1, 'Draw the left line straight down', [line(26, 18, 26, 78)]),
      stroke(2, 'Draw the right line straight down', [line(74, 18, 74, 78)]),
      stroke(3, 'Connect them across the middle', [line(26, 48, 74, 48)]),
    ],
  },
  I: {
    key: 'I',
    label: 'Uppercase I',
    strokes: [
      stroke(1, 'Draw straight down the middle', [line(50, 18, 50, 78)]),
      stroke(2, 'Draw the top hat across', [line(32, 18, 68, 18)]),
      stroke(3, 'Draw the bottom base across', [line(32, 78, 68, 78)]),
    ],
  },
  J: {
    key: 'J',
    label: 'Uppercase J',
    strokes: [
      stroke(1, 'Go straight down and hook left', [
        line(64, 18, 64, 59),
        ...ellipseArc(46, 59, 18, 19, 0, 168),
      ]),
      stroke(2, 'Draw the top bar across', [line(42, 18, 78, 18)]),
    ],
  },
  K: {
    key: 'K',
    label: 'Uppercase K',
    strokes: [
      stroke(1, 'Go straight down', [line(27, 18, 27, 78)]),
      stroke(2, 'Slant in from top right to middle', [line(72, 18, 27, 50)]),
      stroke(3, 'Kick out down to the bottom right', [line(40, 41, 74, 78)]),
    ],
  },
  L: {
    key: 'L',
    label: 'Uppercase L',
    strokes: [
      stroke(1, 'Go straight down, then turn right along the bottom', [
        line(28, 18, 28, 78),
        line(28, 78, 72, 78),
      ]),
    ],
  },
  M: {
    key: 'M',
    label: 'Uppercase M',
    strokes: [
      stroke(1, 'Draw the left wall straight down', [line(21, 18, 21, 78)]),
      stroke(2, 'Slant down to the center, up to the right, and down', [
        line(21, 18, 50, 62),
        line(50, 62, 79, 18),
        line(79, 18, 79, 78),
      ]),
    ],
  },
  N: {
    key: 'N',
    label: 'Uppercase N',
    strokes: [
      stroke(1, 'Draw the left line straight down', [line(26, 18, 26, 78)]),
      stroke(2, 'Slant down to the bottom right, then straight up', [
        line(26, 18, 74, 78),
        line(74, 78, 74, 18),
      ]),
    ],
  },
  O: {
    key: 'O',
    label: 'Uppercase O',
    strokes: [
      stroke(1, 'Start at the top and curve all the way around', [
        ...ellipseArc(50, 48, 26, 30, -90, -450),
      ]),
    ],
  },
  P: {
    key: 'P',
    label: 'Uppercase P',
    strokes: [
      stroke(1, 'Go straight down', [line(28, 18, 28, 78)]),
      stroke(2, 'Curve around the top half to the middle', [
        line(28, 18, 50, 18),
        ...ellipseArc(50, 34, 23, 16, -90, 90),
        line(50, 50, 28, 50),
      ]),
    ],
  },
  Q: {
    key: 'Q',
    label: 'Uppercase Q',
    strokes: [
      stroke(1, 'Draw a smooth oval all the way around', [
        ...ellipseArc(50, 48, 26, 30, -90, -450),
      ]),
      stroke(2, 'Add a little tail kicking out', [line(57, 62, 79, 82)]),
    ],
  },
  R: {
    key: 'R',
    label: 'Uppercase R',
    strokes: [
      stroke(1, 'Go straight down', [line(28, 18, 28, 78)]),
      stroke(2, 'Make a loop on top to the middle', [
        line(28, 18, 49, 18),
        ...ellipseArc(49, 33.5, 22, 15.5, -90, 90),
        line(49, 49, 28, 49),
      ]),
      stroke(3, 'Kick a leg down to the bottom right', [line(45, 49, 74, 78)]),
    ],
  },
  S: {
    key: 'S',
    label: 'Uppercase S',
    strokes: [
      stroke(1, 'Curve like a little c at the top, then curve back at the bottom', [
        ...ellipseArc(50, 33, 21, 15, -25, -270),
        ...ellipseArc(50, 63, 22, 15, -90, 155),
      ]),
    ],
  },
  T: {
    key: 'T',
    label: 'Uppercase T',
    strokes: [
      stroke(1, 'Draw the top roof from left to right', [line(22, 18, 78, 18)]),
      stroke(2, 'Go straight down the middle', [line(50, 18, 50, 78)]),
    ],
  },
  U: {
    key: 'U',
    label: 'Uppercase U',
    strokes: [
      stroke(1, 'Go down, scoop around the bottom, and climb up', [
        line(26, 18, 26, 56),
        ...ellipseArc(50, 56, 24, 22, 180, 0),
        line(74, 56, 74, 18),
      ]),
    ],
  },
  V: {
    key: 'V',
    label: 'Uppercase V',
    strokes: [
      stroke(1, 'Slant down to the bottom point, then slant up', [
        line(23, 18, 50, 78),
        line(50, 78, 77, 18),
      ]),
    ],
  },
  W: {
    key: 'W',
    label: 'Uppercase W',
    strokes: [
      stroke(1, 'Slant down, up, down, and up like mountain peaks', [
        line(15, 18, 32, 78),
        line(32, 78, 50, 34),
        line(50, 34, 68, 78),
        line(68, 78, 85, 18),
      ]),
    ],
  },
  X: {
    key: 'X',
    label: 'Uppercase X',
    strokes: [
      stroke(1, 'Slant from top left to bottom right', [line(23, 18, 77, 78)]),
      stroke(2, 'Cross from top right to bottom left', [line(77, 18, 23, 78)]),
    ],
  },
  Y: {
    key: 'Y',
    label: 'Uppercase Y',
    strokes: [
      stroke(1, 'Slant from top left to the center', [line(23, 18, 50, 48)]),
      stroke(2, 'Slant from top right to center, then straight down', [
        line(77, 18, 50, 48),
        line(50, 48, 50, 78),
      ]),
    ],
  },
  Z: {
    key: 'Z',
    label: 'Uppercase Z',
    strokes: [
      stroke(1, 'Go across the top, slant down left, then across the bottom', [
        line(24, 18, 76, 18),
        line(76, 18, 24, 78),
        line(24, 78, 76, 78),
      ]),
    ],
  },
};

// ============================================================================
// LOWERCASE LETTERS (a - z) aligned to Sky=18, Mid=48, Base=78, Descender=93
// ============================================================================
export const LOWERCASE_GLYPHS: Record<string, TracingGlyph> = {
  a: {
    key: 'a',
    label: 'Lowercase a',
    strokes: [
      stroke(1, 'Curve around like a little c between the middle and bottom lines', [
        ...ellipseArc(48, 63, 19, 15, -35, -330),
      ]),
      stroke(2, 'Go straight down on the right side', [line(67, 48, 67, 78)]),
    ],
  },
  b: {
    key: 'b',
    label: 'Lowercase b',
    strokes: [
      stroke(1, 'Start at the top line and go straight down', [line(32, 18, 32, 78)]),
      stroke(2, 'Curve around clockwise from the middle to the bottom', [
        ...ellipseArc(50, 63, 18, 15, 180, 540),
      ]),
    ],
  },
  c: {
    key: 'c',
    label: 'Lowercase c',
    strokes: [
      stroke(1, 'Curve around from the middle line to the bottom line', [
        ...ellipseArc(52, 63, 19, 15, -40, -320),
      ]),
    ],
  },
  d: {
    key: 'd',
    label: 'Lowercase d',
    strokes: [
      stroke(1, 'Make a round belly between the middle and bottom lines', [
        ...ellipseArc(49, 63, 19, 15, -35, -330),
      ]),
      stroke(2, 'Draw a tall line down from the top line', [line(68, 18, 68, 78)]),
    ],
  },
  e: {
    key: 'e',
    label: 'Lowercase e',
    strokes: [
      stroke(1, 'Go across the middle, then curve up and all the way around', [
        line(33, 63, 68, 63),
        ...ellipseArc(50, 63, 18, 15, 0, -325),
      ]),
    ],
  },
  f: {
    key: 'f',
    label: 'Lowercase f',
    strokes: [
      stroke(1, 'Hook over from the top line and go straight down', [
        ...ellipseArc(56, 30, 13, 12, -20, -180),
        line(43, 30, 43, 78),
      ]),
      stroke(2, 'Cross across on the middle line', [line(29, 48, 60, 48)]),
    ],
  },
  g: {
    key: 'g',
    label: 'Lowercase g',
    strokes: [
      stroke(1, 'Make a circle between the middle and bottom lines', [
        ...ellipseArc(49, 63, 18, 15, -30, -335),
      ]),
      stroke(2, 'Go down past the bottom line and curl left', [
        line(67, 48, 67, 81),
        ...ellipseArc(51, 81, 16, 12, 0, 158),
      ]),
    ],
  },
  h: {
    key: 'h',
    label: 'Lowercase h',
    strokes: [
      stroke(1, 'Start at the top line and go straight down', [line(32, 18, 32, 78)]),
      stroke(2, 'Bounce up to the middle, arch over, and go down', [
        line(32, 62, 32, 61),
        ...ellipseArc(50, 61, 18, 13, 180, 360),
        line(68, 61, 68, 78),
      ]),
    ],
  },
  i: {
    key: 'i',
    label: 'Lowercase i',
    strokes: [
      stroke(1, 'Go straight down from the middle line to the bottom', [line(50, 48, 50, 78)]),
      stroke(2, 'Tap a neat dot right above', [line(50, 32, 50, 33.5)], true),
    ],
  },
  j: {
    key: 'j',
    label: 'Lowercase j',
    strokes: [
      stroke(1, 'Go down past the bottom line and hook left', [
        line(56, 48, 56, 81),
        ...ellipseArc(42, 81, 14, 12, 0, 158),
      ]),
      stroke(2, 'Tap a neat dot right above', [line(56, 32, 56, 33.5)], true),
    ],
  },
  k: {
    key: 'k',
    label: 'Lowercase k',
    strokes: [
      stroke(1, 'Draw a tall line straight down', [line(33, 18, 33, 78)]),
      stroke(2, 'Slant in from the middle line to the stem', [line(64, 48, 33, 64)]),
      stroke(3, 'Kick down to the bottom line', [line(44, 58, 66, 78)]),
    ],
  },
  l: {
    key: 'l',
    label: 'Lowercase l',
    strokes: [
      stroke(1, 'Start at the top line and go straight down', [line(50, 18, 50, 78)]),
    ],
  },
  m: {
    key: 'm',
    label: 'Lowercase m',
    strokes: [
      stroke(1, 'Go down from the middle line to the bottom', [line(22, 48, 22, 78)]),
      stroke(2, 'Make the first hump down to the bottom', [
        ...ellipseArc(36, 61, 14, 13, 180, 360),
        line(50, 61, 50, 78),
      ]),
      stroke(3, 'Make the second hump down to the bottom', [
        ...ellipseArc(64, 61, 14, 13, 180, 360),
        line(78, 61, 78, 78),
      ]),
    ],
  },
  n: {
    key: 'n',
    label: 'Lowercase n',
    strokes: [
      stroke(1, 'Go down from the middle line to the bottom', [line(32, 48, 32, 78)]),
      stroke(2, 'Arch over and go straight down', [
        ...ellipseArc(50, 61, 18, 13, 180, 360),
        line(68, 61, 68, 78),
      ]),
    ],
  },
  o: {
    key: 'o',
    label: 'Lowercase o',
    strokes: [
      stroke(1, 'Draw a circle between the middle and bottom lines', [
        ...ellipseArc(50, 63, 19, 15, -90, -450),
      ]),
    ],
  },
  p: {
    key: 'p',
    label: 'Lowercase p',
    strokes: [
      stroke(1, 'Go straight down past the bottom line', [line(33, 48, 33, 93)]),
      stroke(2, 'Curve around clockwise between the middle and bottom lines', [
        ...ellipseArc(51, 63, 18, 15, 180, 540),
      ]),
    ],
  },
  q: {
    key: 'q',
    label: 'Lowercase q',
    strokes: [
      stroke(1, 'Curve around like a circle between middle and bottom', [
        ...ellipseArc(49, 63, 18, 15, -35, -335),
      ]),
      stroke(2, 'Go straight down past the bottom line and flick up', [
        line(67, 48, 67, 93),
        line(67, 93, 77, 84),
      ]),
    ],
  },
  r: {
    key: 'r',
    label: 'Lowercase r',
    strokes: [
      stroke(1, 'Go down from the middle line to the bottom', [line(36, 48, 36, 78)]),
      stroke(2, 'Bounce up and curve slightly over at the top', [
        ...ellipseArc(52, 61, 16, 13, 180, 325),
      ]),
    ],
  },
  s: {
    key: 's',
    label: 'Lowercase s',
    strokes: [
      stroke(1, 'Curve left then back right between middle and bottom', [
        ...ellipseArc(50, 55.5, 14, 7.5, -25, -270),
        ...ellipseArc(50, 70.5, 15, 7.5, -90, 155),
      ]),
    ],
  },
  t: {
    key: 't',
    label: 'Lowercase t',
    strokes: [
      stroke(1, 'Start near the top and go straight down', [line(50, 22, 50, 78)]),
      stroke(2, 'Cross across on the middle line', [line(34, 48, 66, 48)]),
    ],
  },
  u: {
    key: 'u',
    label: 'Lowercase u',
    strokes: [
      stroke(1, 'Go down, scoop under, and climb up to the middle line', [
        line(32, 48, 32, 64),
        ...ellipseArc(49, 64, 17, 14, 180, 0),
        line(66, 64, 66, 48),
      ]),
      stroke(2, 'Slide straight down on the right', [line(66, 48, 66, 78)]),
    ],
  },
  v: {
    key: 'v',
    label: 'Lowercase v',
    strokes: [
      stroke(1, 'Slant down to the bottom line, then slant up', [
        line(31, 48, 50, 78),
        line(50, 78, 69, 48),
      ]),
    ],
  },
  w: {
    key: 'w',
    label: 'Lowercase w',
    strokes: [
      stroke(1, 'Slant down, up, down, and up between middle and bottom', [
        line(20, 48, 35, 78),
        line(35, 78, 50, 52),
        line(50, 52, 65, 78),
        line(65, 78, 80, 48),
      ]),
    ],
  },
  x: {
    key: 'x',
    label: 'Lowercase x',
    strokes: [
      stroke(1, 'Slant down from left to right', [line(33, 48, 67, 78)]),
      stroke(2, 'Cross from right to left', [line(67, 48, 33, 78)]),
    ],
  },
  y: {
    key: 'y',
    label: 'Lowercase y',
    strokes: [
      stroke(1, 'Slant down to the bottom line', [line(32, 48, 50, 78)]),
      stroke(2, 'Slant from the right all the way down to the tail line', [
        line(68, 48, 40, 93),
      ]),
    ],
  },
  z: {
    key: 'z',
    label: 'Lowercase z',
    strokes: [
      stroke(1, 'Go across, slant down left, and go across the bottom', [
        line(32, 48, 68, 48),
        line(68, 48, 32, 78),
        line(32, 78, 68, 78),
      ]),
    ],
  },
};

// ============================================================================
// DIGITS 0 - 9 (single digit centered around x=50, Sky=18 .. Base=78)
// ============================================================================
const SINGLE_DIGITS: Record<string, TracingGlyph> = {
  '0': {
    key: '0',
    label: 'Digit 0',
    strokes: [
      stroke(1, 'Start at the top and trace an oval all the way around', [
        ...ellipseArc(50, 48, 22, 30, -90, -450),
      ]),
    ],
  },
  '1': {
    key: '1',
    label: 'Digit 1',
    strokes: [
      stroke(1, 'Start at the top and go straight down', [line(50, 18, 50, 78)]),
    ],
  },
  '2': {
    key: '2',
    label: 'Digit 2',
    strokes: [
      stroke(1, 'Curve around the top, slant down left, then go flat across', [
        ...ellipseArc(50, 34, 20, 16, 195, 385),
        line(getArcEndpoint(50, 34, 20, 16, 385).x, getArcEndpoint(50, 34, 20, 16, 385).y, 28, 78),
        line(28, 78, 73, 78),
      ]),
    ],
  },
  '3': {
    key: '3',
    label: 'Digit 3',
    strokes: [
      stroke(1, 'Curve around the top to the middle, then around the bottom', [
        ...ellipseArc(49, 33, 19, 15, 200, 450),
        ...ellipseArc(50, 63, 21, 15, -90, 155),
      ]),
    ],
  },
  '4': {
    key: '4',
    label: 'Digit 4',
    strokes: [
      stroke(1, 'Go down to the middle, then turn flat right', [
        line(32, 18, 28, 54),
        line(28, 54, 74, 54),
      ]),
      stroke(2, 'Go straight down from top to bottom', [line(62, 18, 62, 78)]),
    ],
  },
  '5': {
    key: '5',
    label: 'Digit 5',
    strokes: [
      stroke(1, 'Go straight down halfway, then curve a big belly around', [
        line(34, 18, 34, 45),
        ...ellipseArc(49, 59, 21, 19, -135, 145),
      ]),
      stroke(2, 'Put the top hat across to the right', [line(34, 18, 69, 18)]),
    ],
  },
  '6': {
    key: '6',
    label: 'Digit 6',
    strokes: [
      stroke(1, 'Curve down from the top and loop around the bottom circle', [
        {
          type: 'cubic',
          p0: pt(64, 22),
          p1: pt(45, 13),
          p2: pt(28, 35),
          p3: pt(28, 61),
        },
        ...ellipseArc(49, 61, 21, 17, 180, 540),
      ]),
    ],
  },
  '7': {
    key: '7',
    label: 'Digit 7',
    strokes: [
      stroke(1, 'Go straight across the top, then slant down left', [
        line(26, 18, 74, 18),
        line(74, 18, 39, 78),
      ]),
    ],
  },
  '8': {
    key: '8',
    label: 'Digit 8',
    strokes: [
      stroke(1, 'Make an S-curve down, loop around the bottom, and climb back up', [
        ...ellipseArc(50, 33, 18, 15, -90, -270),
        ...ellipseArc(50, 63, 20, 15, -90, 270),
        ...ellipseArc(50, 33, 18, 15, 90, -90),
      ]),
    ],
  },
  '9': {
    key: '9',
    label: 'Digit 9',
    strokes: [
      stroke(1, 'Loop around the top circle, then go straight down', [
        ...ellipseArc(49, 35, 19, 17, 0, -360),
        line(68, 35, 68, 78),
      ]),
    ],
  },
};

const transformPointToBox = (
  p: Point2D,
  targetLeft: number,
  targetWidth: number
): Point2D => {
  // Single digits live roughly inside x: 24..76 (center 50, width 52)
  const normX = (p.x - 24) / 52;
  return {
    x: targetLeft + normX * targetWidth,
    y: p.y,
  };
};

const transformStrokeToBox = (
  s: TracingStroke,
  newId: number,
  prefixHint: string,
  targetLeft: number,
  targetWidth: number
): TracingStroke => ({
  id: newId,
  hint: `${prefixHint}: ${s.hint}`,
  isDot: s.isDot,
  segments: s.segments.map((seg) =>
    seg.type === 'line'
      ? {
          type: 'line',
          p0: transformPointToBox(seg.p0, targetLeft, targetWidth),
          p1: transformPointToBox(seg.p1, targetLeft, targetWidth),
        }
      : {
          type: 'cubic',
          p0: transformPointToBox(seg.p0, targetLeft, targetWidth),
          p1: transformPointToBox(seg.p1, targetLeft, targetWidth),
          p2: transformPointToBox(seg.p2, targetLeft, targetWidth),
          p3: transformPointToBox(seg.p3, targetLeft, targetWidth),
        }
  ),
});

const composeTwoDigits = (tens: string, ones: string): TracingGlyph => {
  const leftGlyph = SINGLE_DIGITS[tens];
  const rightGlyph = SINGLE_DIGITS[ones];
  const strokes: TracingStroke[] = [];
  let nextId = 1;

  // Give '1' a narrower slot so two-digit numbers look balanced and crisp
  const leftWidth = tens === '1' ? 22 : 34;
  const leftStart = tens === '1' ? 21 : 13;
  const rightWidth = 36;
  const rightStart = tens === '1' ? 48 : 53;

  leftGlyph.strokes.forEach((s) => {
    strokes.push(transformStrokeToBox(s, nextId++, `First digit (${tens})`, leftStart, leftWidth));
  });
  rightGlyph.strokes.forEach((s) => {
    strokes.push(transformStrokeToBox(s, nextId++, `Second digit (${ones})`, rightStart, rightWidth));
  });

  return {
    key: `${tens}${ones}`,
    label: `Number ${tens}${ones}`,
    strokes,
  };
};

export const DIGIT_GLYPHS: Record<string, TracingGlyph> = {
  ...SINGLE_DIGITS,
  '10': composeTwoDigits('1', '0'),
  '11': composeTwoDigits('1', '1'),
  '12': composeTwoDigits('1', '2'),
  '13': composeTwoDigits('1', '3'),
  '14': composeTwoDigits('1', '4'),
  '15': composeTwoDigits('1', '5'),
  '16': composeTwoDigits('1', '6'),
  '17': composeTwoDigits('1', '7'),
  '18': composeTwoDigits('1', '8'),
  '19': composeTwoDigits('1', '9'),
  '20': composeTwoDigits('2', '0'),
};

export const getGlyphForTarget = (
  category: 'uppercase' | 'lowercase' | 'digit',
  key: string
): TracingGlyph => {
  if (category === 'uppercase') return UPPERCASE_GLYPHS[key.toUpperCase()] || UPPERCASE_GLYPHS.A;
  if (category === 'lowercase') return LOWERCASE_GLYPHS[key.toLowerCase()] || LOWERCASE_GLYPHS.a;
  return DIGIT_GLYPHS[key] || DIGIT_GLYPHS['0'];
};

// ============================================================================
// GEOMETRY SAMPLING & ACCURACY EVALUATION ENGINE
// ============================================================================

const evalSegmentPoint = (seg: PathSegment, t: number): Point2D => {
  if (seg.type === 'line') {
    return {
      x: seg.p0.x + (seg.p1.x - seg.p0.x) * t,
      y: seg.p0.y + (seg.p1.y - seg.p0.y) * t,
    };
  }
  const mt = 1 - t;
  const mt2 = mt * mt;
  const t2 = t * t;
  return {
    x: mt2 * mt * seg.p0.x + 3 * mt2 * t * seg.p1.x + 3 * mt * t2 * seg.p2.x + t2 * t * seg.p3.x,
    y: mt2 * mt * seg.p0.y + 3 * mt2 * t * seg.p1.y + 3 * mt * t2 * seg.p2.y + t2 * t * seg.p3.y,
  };
};

const estimateSegmentLength = (seg: PathSegment): number => {
  if (seg.type === 'line') {
    return Math.hypot(seg.p1.x - seg.p0.x, seg.p1.y - seg.p0.y);
  }
  let len = 0;
  let prev = seg.p0;
  const steps = 16;
  for (let i = 1; i <= steps; i++) {
    const curr = evalSegmentPoint(seg, i / steps);
    len += Math.hypot(curr.x - prev.x, curr.y - prev.y);
    prev = curr;
  }
  return len;
};

/**
 * Samples evenly spaced points (~every 1.4 normalized units) along a TracingStroke.
 */
export const sampleStrokePoints = (s: TracingStroke, spacing = 1.4): Point2D[] => {
  if (s.isDot) {
    return [s.segments[0].p0];
  }
  const points: Point2D[] = [];
  s.segments.forEach((seg, segIdx) => {
    const len = estimateSegmentLength(seg);
    const steps = Math.max(4, Math.ceil(len / spacing));
    for (let i = segIdx === 0 ? 0 : 1; i <= steps; i++) {
      points.push(evalSegmentPoint(seg, i / steps));
    }
  });
  return points;
};

export const getStrokeStartAndDirection = (s: TracingStroke): { start: Point2D; angle: number } => {
  const firstSeg = s.segments[0];
  const start = firstSeg.p0;
  const next = evalSegmentPoint(firstSeg, firstSeg.type === 'line' ? 0.35 : 0.15);
  const angle = Math.atan2(next.y - start.y, next.x - start.x);
  return { start, angle };
};

/**
 * Resamples a user-drawn polyline into evenly spaced points so drawing speed
 * does not bias precision scoring.
 */
export const resampleUserStroke = (raw: Point2D[], spacing = 1.5): Point2D[] => {
  if (raw.length === 0) return [];
  if (raw.length === 1) return [raw[0]];

  const out: Point2D[] = [raw[0]];
  let accum = 0;
  let prev = raw[0];

  for (let i = 1; i < raw.length; i++) {
    let curr = raw[i];
    let dist = Math.hypot(curr.x - prev.x, curr.y - prev.y);

    while (accum + dist >= spacing && dist > 0.0001) {
      const ratio = (spacing - accum) / dist;
      const inserted = {
        x: prev.x + ratio * (curr.x - prev.x),
        y: prev.y + ratio * (curr.y - prev.y),
      };
      out.push(inserted);
      prev = inserted;
      dist = Math.hypot(curr.x - prev.x, curr.y - prev.y);
      accum = 0;
    }
    accum += dist;
    prev = curr;
  }

  const last = raw[raw.length - 1];
  const tailDist = Math.hypot(last.x - out[out.length - 1].x, last.y - out[out.length - 1].y);
  if (tailDist > 0.4) {
    out.push(last);
  }
  return out;
};

const minDistanceToPoints = (p: Point2D, targets: Point2D[]): number => {
  let min = Infinity;
  for (let i = 0; i < targets.length; i++) {
    const d = Math.hypot(p.x - targets[i].x, p.y - targets[i].y);
    if (d < min) min = d;
  }
  return min;
};

export interface SingleStrokeCheck {
  accepted: boolean;
  coverage: number;
  neatness: number;
  startedNearOrigin: boolean;
  reason?: 'too-short' | 'off-path' | 'incomplete';
}

export const evaluateSingleGuidedStroke = (
  rawUserStroke: Point2D[],
  targetStroke: TracingStroke
): SingleStrokeCheck => {
  const guidePts = sampleStrokePoints(targetStroke, 1.4);

  if (targetStroke.isDot) {
    if (rawUserStroke.length === 0) {
      return { accepted: false, coverage: 0, neatness: 0, startedNearOrigin: false, reason: 'too-short' };
    }
    const minDist = minDistanceToPoints(guidePts[0], rawUserStroke);
    const hit = minDist <= 11;
    return {
      accepted: hit,
      coverage: hit ? 100 : 0,
      neatness: hit ? 100 : 0,
      startedNearOrigin: hit,
      reason: hit ? undefined : 'off-path',
    };
  }

  const userPts = resampleUserStroke(rawUserStroke, 1.4);
  if (userPts.length < 4) {
    return { accepted: false, coverage: 0, neatness: 0, startedNearOrigin: false, reason: 'too-short' };
  }

  // Coverage of this stroke
  let coveredSum = 0;
  for (const gp of guidePts) {
    const d = minDistanceToPoints(gp, userPts);
    if (d <= 7.5) coveredSum += 1;
    else if (d <= 14.5) coveredSum += Math.max(0.2, 1 - (d - 7.5) / 7);
  }
  const coverage = Math.round((coveredSum / guidePts.length) * 100);

  // Neatness of user ink relative to this stroke
  let neatSum = 0;
  for (const up of userPts) {
    const d = minDistanceToPoints(up, guidePts);
    if (d <= 8.5) neatSum += 1;
    else if (d <= 16.5) neatSum += Math.max(0.15, 1 - (d - 8.5) / 8);
  }
  const neatness = Math.round((neatSum / userPts.length) * 100);

  const startDist = Math.hypot(rawUserStroke[0].x - guidePts[0].x, rawUserStroke[0].y - guidePts[0].y);
  const startedNearOrigin = startDist <= 18;

  if (neatness < 38) {
    return { accepted: false, coverage, neatness, startedNearOrigin, reason: 'off-path' };
  }
  if (coverage < 58) {
    return { accepted: false, coverage, neatness, startedNearOrigin, reason: 'incomplete' };
  }

  return { accepted: true, coverage, neatness, startedNearOrigin };
};

export interface TracingEvaluationResult {
  overallAccuracy: number;
  coverageScore: number;
  neatnessScore: number;
  orderScore: number;
  starsEarned: 0 | 1 | 2 | 3;
  pointCoverageRatios: number[]; // 0..1 per sampled guide point across all strokes
  feedbackTitle: string;
  feedbackDetail: string;
}

export const evaluateFullGlyphTracing = (
  userStrokes: Point2D[][],
  glyph: TracingGlyph
): TracingEvaluationResult => {
  const allGuidePts: Point2D[] = [];
  const strokeGuideLists: Point2D[][] = [];

  glyph.strokes.forEach((s) => {
    const pts = sampleStrokePoints(s, 1.4);
    strokeGuideLists.push(pts);
    allGuidePts.push(...pts);
  });

  const resampledUserStrokes = userStrokes
    .map((st, idx) => {
      const target = glyph.strokes[idx];
      if (target?.isDot && st.length > 0) return [st[0]];
      return resampleUserStroke(st, 1.4);
    })
    .filter((st) => st.length > 0);

  const allUserPts = resampledUserStrokes.flat();

  if (allUserPts.length === 0 || allGuidePts.length === 0) {
    return {
      overallAccuracy: 0,
      coverageScore: 0,
      neatnessScore: 0,
      orderScore: 0,
      starsEarned: 0,
      pointCoverageRatios: allGuidePts.map(() => 0),
      feedbackTitle: 'Ready to Trace',
      feedbackDetail: 'Trace along the numbered guide lines to see your precision score.',
    };
  }

  // 1. Coverage score: how much of the entire character shape was traced
  const pointCoverageRatios: number[] = [];
  let covSum = 0;

  for (const gp of allGuidePts) {
    const d = minDistanceToPoints(gp, allUserPts);
    let credit = 0;
    if (d <= 6.8) credit = 1;
    else if (d <= 14.0) credit = Math.max(0.15, 1 - (d - 6.8) / 7.2);
    pointCoverageRatios.push(credit);
    covSum += credit;
  }
  const coverageScore = Math.round((covSum / allGuidePts.length) * 100);

  // 2. Neatness / Precision score: penalizes scribbles and stray strokes outside the guide corridor
  let neatSum = 0;
  for (const up of allUserPts) {
    const d = minDistanceToPoints(up, allGuidePts);
    if (d <= 7.8) neatSum += 1;
    else if (d <= 15.5) neatSum += Math.max(0.1, 1 - (d - 7.8) / 7.7);
  }
  const neatnessScore = Math.round((neatSum / allUserPts.length) * 100);

  // 3. Stroke Start & Order score
  let orderHits = 0;
  glyph.strokes.forEach((s, idx) => {
    const guideStart = sampleStrokePoints(s, 1.4)[0];
    const matchingUserStroke = userStrokes[idx];
    if (matchingUserStroke && matchingUserStroke.length > 0) {
      const startDist = Math.hypot(
        matchingUserStroke[0].x - guideStart.x,
        matchingUserStroke[0].y - guideStart.y
      );
      if (startDist <= 13) orderHits += 1;
      else if (startDist <= 22) orderHits += 0.6;
    } else {
      // In Free Trace mode where user might combine or reorder strokes, give partial credit if any stroke started near it
      const anyNear = userStrokes.some(
        (us) => us.length > 0 && Math.hypot(us[0].x - guideStart.x, us[0].y - guideStart.y) <= 15
      );
      if (anyNear) orderHits += 0.7;
    }
  });
  const orderScore = Math.round((orderHits / glyph.strokes.length) * 100);

  const overallAccuracy = Math.min(
    100,
    Math.max(0, Math.round(coverageScore * 0.5 + neatnessScore * 0.38 + orderScore * 0.12))
  );

  let starsEarned: 0 | 1 | 2 | 3 = 0;
  let feedbackTitle = 'Keep Practicing!';
  let feedbackDetail = 'Tap Watch Demo to see how each stroke curves, then follow the red start dot.';

  if (overallAccuracy >= 88) {
    starsEarned = 3;
    feedbackTitle = 'Outstanding Precision!';
    feedbackDetail = 'Smooth curves, tidy lines, and awesome stroke control!';
  } else if (overallAccuracy >= 72) {
    starsEarned = 2;
    feedbackTitle = 'Great Tracing!';
    feedbackDetail = 'Very neat work! Trace right over the dashed line for 3 full stars.';
  } else if (overallAccuracy >= 50) {
    starsEarned = 1;
    feedbackTitle = 'Good Effort!';
    feedbackDetail = 'Check the amber spots on the guide to see where your pencil drifted.';
  }

  return {
    overallAccuracy,
    coverageScore,
    neatnessScore,
    orderScore,
    starsEarned,
    pointCoverageRatios,
    feedbackTitle,
    feedbackDetail,
  };
};
