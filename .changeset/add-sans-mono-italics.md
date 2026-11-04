---
"geist-svelte": minor
---

Add true italic styles for Geist Sans and Geist Mono from `geist@1.9.0`.

- `geist-svelte/font/sans` and `geist-svelte/font/mono` now register an italic variable font (`font-style: italic`, weights 100 to 900) under the same font family.
- `geist-svelte/font/sans-non-variable` and `geist-svelte/font/mono-non-variable` now register the nine static italic weights (100 to 900).
- `font-style: italic`, `<em>`, and `<i>` render true italics instead of synthesized oblique text. Italic files are only downloaded when italic text is rendered.
