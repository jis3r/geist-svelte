---
"geist-svelte": minor
---

Add the Geist Pixel variable font and per-variant Pixel entries.

- New `geist-svelte/font/pixel/variable` entry exports `GeistPixel` (`--font-geist-pixel`, family `'Geist Pixel'`), a variable font with an `ELSH` axis: `'ELSH' 0` Regular, `1` Square, `20` Circle, `40` Grid, `60` Triangle, `80` Line. Also exported from the root `geist-svelte` barrel.
- New per-variant entries `geist-svelte/font/pixel/square`, `/grid`, `/circle`, `/triangle`, `/line` register only the font you import.
- `geist-svelte/font/pixel` is unchanged: it still registers and exports the five static variants with the same export names, CSS variables, and font family names. Like the official `geist` package, it does not include the variable font.
