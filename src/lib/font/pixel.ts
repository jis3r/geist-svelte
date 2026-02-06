import './pixel.css';

const PIXEL_FALLBACK =
  "'Geist Mono', ui-monospace, SFMono-Regular, 'Roboto Mono', Menlo, Monaco, 'Liberation Mono', 'DejaVu Sans Mono', 'Courier New', monospace";

export const GeistPixelSquare = {
  variable: '--font-geist-pixel-square',
  style: {
    fontFamily: `'Geist Pixel Square', ${PIXEL_FALLBACK}`,
  },
} as const;

export const GeistPixelGrid = {
  variable: '--font-geist-pixel-grid',
  style: {
    fontFamily: `'Geist Pixel Grid', ${PIXEL_FALLBACK}`,
  },
} as const;

export const GeistPixelCircle = {
  variable: '--font-geist-pixel-circle',
  style: {
    fontFamily: `'Geist Pixel Circle', ${PIXEL_FALLBACK}`,
  },
} as const;

export const GeistPixelTriangle = {
  variable: '--font-geist-pixel-triangle',
  style: {
    fontFamily: `'Geist Pixel Triangle', ${PIXEL_FALLBACK}`,
  },
} as const;

export const GeistPixelLine = {
  variable: '--font-geist-pixel-line',
  style: {
    fontFamily: `'Geist Pixel Line', ${PIXEL_FALLBACK}`,
  },
} as const;
