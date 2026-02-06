<script lang="ts">
  import { GeistSans } from 'geist-svelte/font/sans';
  import { GeistMono } from 'geist-svelte/font/mono';
  import { GeistPixelSquare } from 'geist-svelte/font/pixel';
</script>

<h1 class="text-3xl font-bold mb-1">Tailwind CSS v4 Integration</h1>
<p class="text-sm text-neutral-500 mb-6">
  Tailwind <code class="bg-neutral-800 px-1 rounded text-xs">@theme</code> maps
  <code class="bg-neutral-800 px-1 rounded text-xs">font-sans</code>,
  <code class="bg-neutral-800 px-1 rounded text-xs">font-mono</code>, and
  <code class="bg-neutral-800 px-1 rounded text-xs">font-pixel</code>
  to Geist CSS variables.
</p>

<div class="compare-grid">
  <div>
    <div class="col-header col-pkg">Package (Tailwind utilities)</div>

    <p class="text-xs text-neutral-500 mt-4 mb-1">font-sans</p>
    <p class="font-sans text-xl">Regular sans via Tailwind.</p>
    <p class="font-sans text-xl font-light">Light sans via Tailwind.</p>
    <p class="font-sans text-xl font-bold">Bold sans via Tailwind.</p>
    <p class="font-sans text-xl font-black">Black sans via Tailwind.</p>

    <p class="text-xs text-neutral-500 mt-6 mb-1">font-mono</p>
    <p class="font-mono text-lg">Regular mono via Tailwind.</p>
    <p class="font-mono text-lg font-bold">Bold mono via Tailwind.</p>

    <p class="text-xs text-neutral-500 mt-6 mb-1">font-pixel</p>
    <p class="font-pixel text-3xl tracking-wide font-medium">PIXEL VIA TAILWIND</p>
  </div>
  <div>
    <div class="col-header col-ref">Reference (direct @font-face)</div>

    <p class="text-xs text-neutral-500 mt-4 mb-1">Ref Geist Sans</p>
    <p class="text-xl" style:font-family="'Ref Geist Sans', sans-serif">Regular sans via reference.</p>
    <p class="text-xl font-light" style:font-family="'Ref Geist Sans', sans-serif">Light sans via reference.</p>
    <p class="text-xl font-bold" style:font-family="'Ref Geist Sans', sans-serif">Bold sans via reference.</p>
    <p class="text-xl font-black" style:font-family="'Ref Geist Sans', sans-serif">Black sans via reference.</p>

    <p class="text-xs text-neutral-500 mt-6 mb-1">Ref Geist Mono</p>
    <p class="text-lg" style:font-family="'Ref Geist Mono', monospace">Regular mono via reference.</p>
    <p class="text-lg font-bold" style:font-family="'Ref Geist Mono', monospace">Bold mono via reference.</p>

    <p class="text-xs text-neutral-500 mt-6 mb-1">Ref Geist Pixel Square</p>
    <p class="text-3xl tracking-wide font-medium" style:font-family="'Ref Geist Pixel Square', monospace">PIXEL VIA REFERENCE</p>
  </div>
</div>
