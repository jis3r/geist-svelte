# geist-svelte

[![npm version](https://img.shields.io/npm/v/geist-svelte)](https://www.npmjs.com/package/geist-svelte) [![license](https://img.shields.io/npm/l/geist-svelte)](https://www.npmjs.com/package/geist-svelte)

[Geist font family](https://vercel.com/font) for Svelte and SvelteKit. Sans, Mono, and Pixel variants.

## Installation

```bash
npm i geist-svelte
```

**Compatibility:** Svelte 4 / 5 · Tailwind v3 / v4 · SvelteKit · Svelte (Vite)

## Quickstart

Importing a font module registers the `@font-face` rules and CSS variables (for example `--font-geist-sans`).

### SvelteKit + Tailwind v4

```svelte
<!-- src/routes/+layout.svelte -->
<script lang="ts">
  import '../app.css';
  import 'geist-svelte/font/sans';
  import 'geist-svelte/font/mono';
  let { children } = $props();
</script>

{@render children()}
```

```css
/* src/app.css */
@theme inline {
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}
```

### Tailwind v3

Use the same font imports as above, then map variables in `tailwind.config.js`:

```js
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', ...fontFamily.sans],
        mono: ['var(--font-geist-mono)', ...fontFamily.mono],
      },
    },
  },
};
```

### No Tailwind

```svelte
<!-- src/routes/+layout.svelte -->
<script lang="ts">
  import 'geist-svelte/font/sans';
  import 'geist-svelte/font/mono';
  let { children } = $props();
</script>

{@render children()}

<style>
  :global(body) {
    font-family: var(--font-geist-sans);
  }
  :global(code, pre) {
    font-family: var(--font-geist-mono);
  }
</style>
```

### Svelte (Vite)

```ts
// src/main.ts
import 'geist-svelte/font/sans';
import 'geist-svelte/font/mono';
```

## Pixel Variants

| Export               | CSS Variable                    | Description              |
| -------------------- | ------------------------------- | ------------------------ |
| `GeistPixelSquare`   | `--font-geist-pixel-square`     | Square pixel shapes      |
| `GeistPixelGrid`     | `--font-geist-pixel-grid`       | Grid-based pixel pattern |
| `GeistPixelCircle`   | `--font-geist-pixel-circle`     | Circular pixel shapes    |
| `GeistPixelTriangle` | `--font-geist-pixel-triangle`   | Triangular pixel shapes  |
| `GeistPixelLine`     | `--font-geist-pixel-line`       | Line-based pixel pattern |

```svelte
<script lang="ts">
  import 'geist-svelte/font/pixel';
</script>
```

## CSS Variables

| Import Path                           | CSS Variable                     |
| ------------------------------------- | -------------------------------- |
| `geist-svelte/font/sans`              | `--font-geist-sans`              |
| `geist-svelte/font/mono`              | `--font-geist-mono`              |
| `geist-svelte/font/sans-non-variable` | `--font-geist-sans-non-variable` |
| `geist-svelte/font/mono-non-variable` | `--font-geist-mono-non-variable` |
| `geist-svelte/font/pixel`             | `--font-geist-pixel-square`      |
| `geist-svelte/font/pixel`             | `--font-geist-pixel-grid`        |
| `geist-svelte/font/pixel`             | `--font-geist-pixel-circle`      |
| `geist-svelte/font/pixel`             | `--font-geist-pixel-triangle`    |
| `geist-svelte/font/pixel`             | `--font-geist-pixel-line`        |

## Non-Variable Fonts

Variable fonts are recommended (smaller). Use non-variable variants only for legacy browser support:

```svelte
<script lang="ts">
  import 'geist-svelte/font/sans-non-variable';
  import 'geist-svelte/font/mono-non-variable';
</script>
```

## TypeScript API

Use named imports only if you need metadata:

```ts
import { GeistSans } from 'geist-svelte/font/sans';

GeistSans.variable;       // '--font-geist-sans'
GeistSans.style.fontFamily; // full font-family string with fallbacks
```

## Troubleshooting

- **Fonts not applying:** confirm font imports run in your root entry (`+layout.svelte` or `main.ts`) and your CSS/Tailwind theme maps the variables.
- **Unused import warnings:** use side-effect imports (`import 'geist-svelte/font/sans';`).
- **Strict CSP:** allow your built asset origin in `font-src`.

## License

The Geist font family is free and open sourced under the [SIL Open Font License](https://scripts.sil.org/OFL). This package is licensed under the MIT License.
