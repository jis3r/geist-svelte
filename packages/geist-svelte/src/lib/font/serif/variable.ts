import './variable.css';
import { SERIF_FALLBACK } from './fallback';

export const GeistSerif = {
  variable: '--font-geist-serif',
  style: {
    fontFamily: `'Geist Serif', ${SERIF_FALLBACK}`,
  },
} as const;
