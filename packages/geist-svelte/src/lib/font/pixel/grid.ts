import './grid.css';
import { PIXEL_FALLBACK } from './fallback.js';

export const GeistPixelGrid = {
  variable: '--font-geist-pixel-grid',
  style: {
    fontFamily: `'Geist Pixel Grid', ${PIXEL_FALLBACK}`,
  },
} as const;
