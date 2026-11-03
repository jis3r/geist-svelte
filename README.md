# geist-svelte

[![npm version](https://img.shields.io/npm/v/geist-svelte)](https://www.npmjs.com/package/geist-svelte) [![license](https://img.shields.io/npm/l/geist-svelte)](https://www.npmjs.com/package/geist-svelte)

[Geist font family](https://vercel.com/font) for Svelte and SvelteKit. Sans, Mono, Serif, and Pixel variants.

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

`geist-svelte/font/pixel` registers the five static Pixel fonts. Each variant also has its own entry, so you can register just one. The variable font is only available from `geist-svelte/font/pixel/variable` (it is not part of `geist-svelte/font/pixel`, same as the official `geist` package).

| Export               | Import Path                        | CSS Variable                  | Font Family              | Description                          |
| -------------------- | ---------------------------------- | ----------------------------- | ------------------------ | ------------------------------------ |
| `GeistPixelSquare`   | `geist-svelte/font/pixel/square`   | `--font-geist-pixel-square`   | `'Geist Pixel Square'`   | Square pixel shapes                  |
| `GeistPixelGrid`     | `geist-svelte/font/pixel/grid`     | `--font-geist-pixel-grid`     | `'Geist Pixel Grid'`     | Grid-based pixel pattern             |
| `GeistPixelCircle`   | `geist-svelte/font/pixel/circle`   | `--font-geist-pixel-circle`   | `'Geist Pixel Circle'`   | Circular pixel shapes                |
| `GeistPixelTriangle` | `geist-svelte/font/pixel/triangle` | `--font-geist-pixel-triangle` | `'Geist Pixel Triangle'` | Triangular pixel shapes              |
| `GeistPixelLine`     | `geist-svelte/font/pixel/line`     | `--font-geist-pixel-line`     | `'Geist Pixel Line'`     | Line-based pixel pattern             |
| `GeistPixel`         | `geist-svelte/font/pixel/variable` | `--font-geist-pixel`          | `'Geist Pixel'`          | Variable font, all shapes via `ELSH` |

```svelte
<script lang="ts">
  import 'geist-svelte/font/pixel'; // all 5 static variants
  import 'geist-svelte/font/pixel/grid'; // or only Grid
</script>
```

The variable font (`GeistPixel`) has a single `ELSH` (Element Shape) axis from `0` to `100`. Pick a style with `font-variation-settings`:

| Style    | `font-variation-settings` |
| -------- | ------------------------- |
| Regular  | `'ELSH' 0` (default)      |
| Square   | `'ELSH' 1`                |
| Circle   | `'ELSH' 20`               |
| Grid     | `'ELSH' 40`               |
| Triangle | `'ELSH' 60`               |
| Line     | `'ELSH' 80`               |

```css
.headline {
  font-family: var(--font-geist-pixel);
  font-variation-settings: 'ELSH' 40; /* Grid */
}
```

All Pixel fonts are registered at weight 500 and fall back to Geist Mono, then the system monospace stack.

## Serif

Geist Serif ships as one variable font plus four static styles. Each style has its own entry, so you only register what you import. `geist-svelte/font/serif` registers all five.

| Export               | Import Path                        | CSS Variable                  | Font Family              |
| -------------------- | ---------------------------------- | ----------------------------- | ------------------------ |
| `GeistSerif`         | `geist-svelte/font/serif/variable` | `--font-geist-serif`          | `'Geist Serif'`          |
| `GeistSerifRegular`  | `geist-svelte/font/serif/regular`  | `--font-geist-serif-regular`  | `'Geist Serif Regular'`  |
| `GeistSerifSquare`   | `geist-svelte/font/serif/square`   | `--font-geist-serif-square`   | `'Geist Serif Square'`   |
| `GeistSerifTriangle` | `geist-svelte/font/serif/triangle` | `--font-geist-serif-triangle` | `'Geist Serif Triangle'` |
| `GeistSerifHeart`    | `geist-svelte/font/serif/heart`    | `--font-geist-serif-heart`    | `'Geist Serif Heart'`    |

```svelte
<script lang="ts">
  import 'geist-svelte/font/serif/variable';
</script>

<h1>Geist Serif</h1>

<style>
  h1 {
    font-family: var(--font-geist-serif);
    font-variation-settings: 'ELSH' 100; /* Heart */
  }
</style>
```

The variable font (`GeistSerif`) has a single `ELSH` (Element Shape) axis from `0` to `100`. Pick a style with `font-variation-settings`:

| Style    | `font-variation-settings` |
| -------- | ------------------------- |
| Regular  | `'ELSH' 0` (default)      |
| Square   | `'ELSH' 25`               |
| Triangle | `'ELSH' 50`               |
| Heart    | `'ELSH' 100`              |

All Serif styles are weight 400 and fall back to `'Times New Roman', Times, serif`.

## CSS Variables

| Import Path                           | CSS Variable                     |
| ------------------------------------- | -------------------------------- |
| `geist-svelte/font/sans`              | `--font-geist-sans`              |
| `geist-svelte/font/mono`              | `--font-geist-mono`              |
| `geist-svelte/font/sans-non-variable` | `--font-geist-sans-non-variable` |
| `geist-svelte/font/mono-non-variable` | `--font-geist-mono-non-variable` |
| `geist-svelte/font/pixel/square`      | `--font-geist-pixel-square`      |
| `geist-svelte/font/pixel/grid`        | `--font-geist-pixel-grid`        |
| `geist-svelte/font/pixel/circle`      | `--font-geist-pixel-circle`      |
| `geist-svelte/font/pixel/triangle`    | `--font-geist-pixel-triangle`    |
| `geist-svelte/font/pixel/line`        | `--font-geist-pixel-line`        |
| `geist-svelte/font/pixel/variable`    | `--font-geist-pixel`             |
| `geist-svelte/font/serif/variable`    | `--font-geist-serif`             |
| `geist-svelte/font/serif/regular`     | `--font-geist-serif-regular`     |
| `geist-svelte/font/serif/square`      | `--font-geist-serif-square`      |
| `geist-svelte/font/serif/triangle`    | `--font-geist-serif-triangle`    |
| `geist-svelte/font/serif/heart`       | `--font-geist-serif-heart`       |

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

The bundled Geist font files are licensed under the [SIL Open Font License 1.1](https://openfontlicense.org) (OFL-1.1, see [`OFL.txt`](https://github.com/jis3r/geist-svelte/blob/main/packages/geist-svelte/OFL.txt)). The package code is licensed under the MIT License.
