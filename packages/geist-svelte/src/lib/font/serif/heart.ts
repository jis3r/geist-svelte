import './heart.css';
import { SERIF_FALLBACK } from './fallback';

export const GeistSerifHeart = {
  variable: '--font-geist-serif-heart',
  style: {
    fontFamily: `'Geist Serif Heart', ${SERIF_FALLBACK}`,
  },
} as const;
