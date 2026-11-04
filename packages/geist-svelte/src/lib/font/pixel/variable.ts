import './variable.css';
import { PIXEL_FALLBACK } from './fallback';

export const GeistPixel = {
  variable: '--font-geist-pixel',
  style: {
    fontFamily: `'Geist Pixel', ${PIXEL_FALLBACK}`,
  },
} as const;
