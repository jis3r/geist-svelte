---
"geist-svelte": minor
---

Add Geist Serif from `geist@1.9.0`.

- `geist-svelte/font/serif` registers all five Serif fonts and exports `GeistSerif`, `GeistSerifRegular`, `GeistSerifSquare`, `GeistSerifTriangle`, and `GeistSerifHeart`.
- Per-style entries (`geist-svelte/font/serif/variable`, `/regular`, `/square`, `/triangle`, `/heart`) register only the font you import.
- `GeistSerif` (`--font-geist-serif`) is the variable font with an `ELSH` axis: `'ELSH' 0` Regular, `25` Square, `50` Triangle, `100` Heart.
- All Serif exports are also available from the root `geist-svelte` barrel.
