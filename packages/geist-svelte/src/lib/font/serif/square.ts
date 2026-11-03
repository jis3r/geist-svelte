import './square.css';
import { SERIF_FALLBACK } from './fallback';

export const GeistSerifSquare = {
  variable: '--font-geist-serif-square',
  style: {
    fontFamily: `'Geist Serif Square', ${SERIF_FALLBACK}`,
  },
} as const;
