import './triangle.css';
import { SERIF_FALLBACK } from './fallback.js';

export const GeistSerifTriangle = {
  variable: '--font-geist-serif-triangle',
  style: {
    fontFamily: `'Geist Serif Triangle', ${SERIF_FALLBACK}`,
  },
} as const;
