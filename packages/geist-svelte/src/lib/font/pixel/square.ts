import './square.css';
import { PIXEL_FALLBACK } from './fallback.js';

export const GeistPixelSquare = {
  variable: '--font-geist-pixel-square',
  style: {
    fontFamily: `'Geist Pixel Square', ${PIXEL_FALLBACK}`,
  },
} as const;
