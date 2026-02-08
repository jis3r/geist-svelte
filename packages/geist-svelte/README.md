# geist-svelte

[Geist font family](https://vercel.com/font) for Svelte and SvelteKit. Sans, Mono, and Pixel variants.

## Installation

```bash
npm i geist-svelte
```

## Usage with SvelteKit

`GeistSans` is exported from `geist-svelte/font/sans`, `GeistMono` from `geist-svelte/font/mono`, and Geist Pixel variants from `geist-svelte/font/pixel`.

### Basic Setup

In your root `+layout.svelte`:

```svelte
<script lang="ts">
  import { GeistSans } from 'geist-svelte/font/sans';

  let { children } = $props();
</script>

{@render children()}

<style>
  :global(body) {
    font-family: var(--font-geist-sans);
  }
</style>
```

### Using Multiple Fonts

```svelte
<script lang="ts">
  import { GeistSans } from 'geist-svelte/font/sans';
  import { GeistMono } from 'geist-svelte/font/mono';

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

### CSS-Only Import

If you don't need the metadata objects, you can import the CSS directly:

```svelte
<script lang="ts">
  import 'geist-svelte/font/sans';
  import 'geist-svelte/font/mono';
</script>
```

## Pixel Variants

Geist Pixel includes five distinct variants:

| Export               | CSS Variable                    | Description              |
| -------------------- | ------------------------------- | ------------------------ |
| `GeistPixelSquare`   | `--font-geist-pixel-square`     | Square pixel shapes      |
| `GeistPixelGrid`     | `--font-geist-pixel-grid`       | Grid-based pixel pattern |
| `GeistPixelCircle`   | `--font-geist-pixel-circle`     | Circular pixel shapes    |
| `GeistPixelTriangle` | `--font-geist-pixel-triangle`   | Triangular pixel shapes  |
| `GeistPixelLine`     | `--font-geist-pixel-line`       | Line-based pixel pattern |

```svelte
<script lang="ts">
  import {
    GeistPixelSquare,
    GeistPixelGrid,
    GeistPixelCircle,
    GeistPixelTriangle,
    GeistPixelLine,
  } from 'geist-svelte/font/pixel';
</script>
```

## With Tailwind CSS

All fonts are available through CSS variables. Import the fonts in your root layout, then configure Tailwind.

### Tailwind CSS v4

In your `app.css`:

```css
@theme {
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
  --font-pixel-square: var(--font-geist-pixel-square);
  --font-pixel-grid: var(--font-geist-pixel-grid);
  --font-pixel-circle: var(--font-geist-pixel-circle);
  --font-pixel-triangle: var(--font-geist-pixel-triangle);
  --font-pixel-line: var(--font-geist-pixel-line);
}
```

### Tailwind CSS v3

In your `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
        'pixel-square': ['var(--font-geist-pixel-square)'],
        'pixel-grid': ['var(--font-geist-pixel-grid)'],
        'pixel-circle': ['var(--font-geist-pixel-circle)'],
        'pixel-triangle': ['var(--font-geist-pixel-triangle)'],
        'pixel-line': ['var(--font-geist-pixel-line)'],
      },
    },
  },
};
```

## CSS Variables

| Import Path                          | CSS Variable                    |
| ------------------------------------ | ------------------------------- |
| `geist-svelte/font/sans`             | `--font-geist-sans`             |
| `geist-svelte/font/mono`             | `--font-geist-mono`             |
| `geist-svelte/font/sans-non-variable`| `--font-geist-sans-non-variable`|
| `geist-svelte/font/mono-non-variable`| `--font-geist-mono-non-variable`|
| `geist-svelte/font/pixel`            | `--font-geist-pixel-square`     |
|                                      | `--font-geist-pixel-grid`       |
|                                      | `--font-geist-pixel-circle`     |
|                                      | `--font-geist-pixel-triangle`   |
|                                      | `--font-geist-pixel-line`       |

## Non-Variable Fonts

Variable fonts (~30kb) are recommended. For browsers that don't support variable fonts, use the non-variable variants (~300kb):

```svelte
<script lang="ts">
  import { GeistSansNonVariable } from 'geist-svelte/font/sans-non-variable';
  import { GeistMonoNonVariable } from 'geist-svelte/font/mono-non-variable';
</script>
```

## TypeScript API

Each export provides a metadata object:

```ts
import { GeistSans } from 'geist-svelte/font/sans';

GeistSans.variable;       // '--font-geist-sans'
GeistSans.style.fontFamily; // full font-family string with fallbacks
```

## License

The Geist font family is free and open sourced under the [SIL Open Font License](https://scripts.sil.org/OFL).

This package is licensed under the MIT License.
