# geist-svelte

## 1.1.0

### Minor Changes

- 3df11d6: Add the Geist Pixel variable font and per-variant Pixel entries.
  
  - New `geist-svelte/font/pixel/variable` entry exports `GeistPixel` (`--font-geist-pixel`, family `'Geist Pixel'`), a variable font with an `ELSH` axis: `'ELSH' 0` Regular, `1` Square, `20` Circle, `40` Grid, `60` Triangle, `80` Line. Also exported from the root `geist-svelte` barrel.
  - New per-variant entries `geist-svelte/font/pixel/square`, `/grid`, `/circle`, `/triangle`, `/line` register only the font you import.
  - `geist-svelte/font/pixel` is unchanged: it still registers and exports the five static variants with the same export names, CSS variables, and font family names. Like the official `geist` package, it does not include the variable font.
- b5edce8: Add Geist Serif from `geist@1.9.0`.
  
  - `geist-svelte/font/serif` registers all five Serif fonts and exports `GeistSerif`, `GeistSerifRegular`, `GeistSerifSquare`, `GeistSerifTriangle`, and `GeistSerifHeart`.
  - Per-style entries (`geist-svelte/font/serif/variable`, `/regular`, `/square`, `/triangle`, `/heart`) register only the font you import.
  - `GeistSerif` (`--font-geist-serif`) is the variable font with an `ELSH` axis: `'ELSH' 0` Regular, `25` Square, `50` Triangle, `100` Heart.
  - All Serif exports are also available from the root `geist-svelte` barrel.
- 55b462e: Add true italic styles for Geist Sans and Geist Mono from `geist@1.9.0`.
  
  - `geist-svelte/font/sans` and `geist-svelte/font/mono` now register an italic variable font (`font-style: italic`, weights 100 to 900) under the same font family.
  - `geist-svelte/font/sans-non-variable` and `geist-svelte/font/mono-non-variable` now register the nine static italic weights (100 to 900).
  - `font-style: italic`, `<em>`, and `<i>` render true italics instead of synthesized oblique text. Italic files are only downloaded when italic text is rendered.

### Patch Changes

- 14cb9ce: Use explicit `.js` extensions in relative imports so the published entries resolve under TypeScript `moduleResolution: nodenext` and other strict ESM resolvers.
- 00b7aa6: Sync bundled fonts with the official `geist@1.9.0` release and fix static weight mapping.
  
  - Geist Sans and Geist Mono updated to font version 1.900, Geist Pixel to the latest build. Fixes include: Geist Sans small omega (U+03C9) no longer renders as the capital Omega, the Geist Sans yen sign bars are centered, Sans and Mono gain line/paragraph separator glyphs (U+2028/U+2029), and Geist Pixel picks up small outline alignment fixes.
  - Non-variable fonts: `Black` is now served at `font-weight: 900` and the `UltraBlack` file (actually ExtraBold) at `800`. Previously the two were swapped, so `font-weight: 800` rendered heavier than `900`.
  - The SIL Open Font License (`OFL.txt`) for the font files is now included in the package.

## 1.0.2

### Patch Changes

- 7248700: Update package docs in README for clearer, shorter setup instructions.

## 1.0.0

### Major Changes

- 2cd5bb5: First stable release. Geist Sans, Mono, and Pixel for Svelte/SvelteKit with variable and non-variable fonts, Tailwind v3/v4 support, and TypeScript metadata. Fonts are synced with the official [geist-font](https://github.com/vercel/geist-font) build.
