import './line.css';
import { PIXEL_FALLBACK } from './fallback.js';

export const GeistPixelLine = {
  variable: '--font-geist-pixel-line',
  style: {
    fontFamily: `'Geist Pixel Line', ${PIXEL_FALLBACK}`,
  },
} as const;
