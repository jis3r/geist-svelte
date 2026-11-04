import './circle.css';
import { PIXEL_FALLBACK } from './fallback';

export const GeistPixelCircle = {
  variable: '--font-geist-pixel-circle',
  style: {
    fontFamily: `'Geist Pixel Circle', ${PIXEL_FALLBACK}`,
  },
} as const;
