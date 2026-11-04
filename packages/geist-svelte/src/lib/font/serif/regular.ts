import './regular.css';
import { SERIF_FALLBACK } from './fallback';

export const GeistSerifRegular = {
  variable: '--font-geist-serif-regular',
  style: {
    fontFamily: `'Geist Serif Regular', ${SERIF_FALLBACK}`,
  },
} as const;
