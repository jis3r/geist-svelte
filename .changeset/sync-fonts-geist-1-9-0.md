---
"geist-svelte": patch
---

Sync bundled fonts with the official `geist@1.9.0` release and fix static weight mapping.

- Geist Sans and Geist Mono updated to font version 1.900, Geist Pixel to the latest build. Fixes include: Geist Sans small omega (U+03C9) no longer renders as the capital Omega, the Geist Sans yen sign bars are centered, Sans and Mono gain line/paragraph separator glyphs (U+2028/U+2029), and Geist Pixel picks up small outline alignment fixes.
- Non-variable fonts: `Black` is now served at `font-weight: 900` and the `UltraBlack` file (actually ExtraBold) at `800`. Previously the two were swapped, so `font-weight: 800` rendered heavier than `900`.
- The SIL Open Font License (`OFL.txt`) for the font files is now included in the package.
