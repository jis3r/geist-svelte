import './triangle.css';
import { PIXEL_FALLBACK } from './fallback';

export const GeistPixelTriangle = {
  variable: '--font-geist-pixel-triangle',
  style: {
    fontFamily: `'Geist Pixel Triangle', ${PIXEL_FALLBACK}`,
  },
} as const;
