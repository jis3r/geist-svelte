<script lang="ts">
  import {
    GeistPixelSquare,
    GeistPixelGrid,
    GeistPixelCircle,
    GeistPixelTriangle,
    GeistPixelLine,
  } from 'geist-svelte/font/pixel';
  import { GeistPixel } from 'geist-svelte/font/pixel/variable';

  const variants = [
    { name: 'Square', pkgVar: 'var(--font-geist-pixel-square)', refFont: "'Ref Geist Pixel Square', monospace" },
    { name: 'Grid', pkgVar: 'var(--font-geist-pixel-grid)', refFont: "'Ref Geist Pixel Grid', monospace" },
    { name: 'Circle', pkgVar: 'var(--font-geist-pixel-circle)', refFont: "'Ref Geist Pixel Circle', monospace" },
    { name: 'Triangle', pkgVar: 'var(--font-geist-pixel-triangle)', refFont: "'Ref Geist Pixel Triangle', monospace" },
    { name: 'Line', pkgVar: 'var(--font-geist-pixel-line)', refFont: "'Ref Geist Pixel Line', monospace" },
  ];

  const sampleText = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const sampleNumbers = '0123456789';

  const instances = [
    { name: 'Regular', elsh: 0 },
    { name: 'Square', elsh: 1 },
    { name: 'Circle', elsh: 20 },
    { name: 'Grid', elsh: 40 },
    { name: 'Triangle', elsh: 60 },
    { name: 'Line', elsh: 80 },
  ] as const;

  let elsh = $state(0);
  const variation = $derived(`'ELSH' ${elsh}`);
</script>

<h1>Geist Pixel - Variable and 5 Static Variants</h1>
<p><code>import {'{ GeistPixelSquare, ... }'} from 'geist-svelte/font/pixel'</code></p>
<p><code>import {'{ GeistPixel }'} from 'geist-svelte/font/pixel/variable'</code></p>

<h2>Variable ({GeistPixel.variable}) with ELSH axis</h2>
<div class="controls">
  <label>
    ELSH <input type="range" min="0" max="100" step="1" bind:value={elsh} />
    <code>font-variation-settings: {variation}</code>
  </label>
  <div class="presets">
    {#each instances as instance}
      <button type="button" class:active={elsh === instance.elsh} onclick={() => (elsh = instance.elsh)}>
        {instance.name} ({instance.elsh})
      </button>
    {/each}
  </div>
</div>

<div class="compare-grid">
  <div>
    <div class="col-header col-pkg">Package - var(--font-geist-pixel)</div>
    <p class="pixel-sample" style:font-family="var(--font-geist-pixel)" style:font-weight={500} style:font-variation-settings={variation}>{sampleText}</p>
    <p class="pixel-sample-sm" style:font-family="var(--font-geist-pixel)" style:font-weight={500} style:font-variation-settings={variation}>{sampleNumbers}</p>
  </div>
  <div>
    <div class="col-header col-ref">Reference - direct @font-face</div>
    <p class="pixel-sample" style:font-family="'Ref Geist Pixel', monospace" style:font-weight={500} style:font-variation-settings={variation}>{sampleText}</p>
    <p class="pixel-sample-sm" style:font-family="'Ref Geist Pixel', monospace" style:font-weight={500} style:font-variation-settings={variation}>{sampleNumbers}</p>
  </div>
</div>

{#each variants as variant}
  <h2>{variant.name}</h2>
  <div class="compare-grid">
    <div>
      <div class="col-header col-pkg">Package</div>
      <p class="pixel-sample" style:font-family={variant.pkgVar} style:font-weight={500}>{sampleText}</p>
      <p class="pixel-sample-sm" style:font-family={variant.pkgVar} style:font-weight={500}>{sampleNumbers}</p>
    </div>
    <div>
      <div class="col-header col-ref">Reference</div>
      <p class="pixel-sample" style:font-family={variant.refFont} style:font-weight={500}>{sampleText}</p>
      <p class="pixel-sample-sm" style:font-family={variant.refFont} style:font-weight={500}>{sampleNumbers}</p>
    </div>
  </div>
{/each}

<style>
  h1 { font-weight: 700; font-size: 1.75rem; margin-bottom: 0.25rem; }
  h2 { font-weight: 600; font-size: 1rem; margin-top: 2rem; color: #888; }
  code { background: #1a1a1a; padding: 0.15rem 0.4rem; border-radius: 3px; font-size: 0.8em; }

  .controls {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    font-size: 0.85rem;
  }

  .controls label {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex-wrap: wrap;
  }

  .presets {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .presets button {
    background: #1a1a1a;
    color: #ededed;
    border: 1px solid #333;
    border-radius: 4px;
    padding: 0.25rem 0.6rem;
    font: inherit;
    cursor: pointer;
  }

  .presets button.active {
    border-color: #0091ff;
    color: #0091ff;
  }

  .pixel-sample {
    font-size: 2.5rem;
    line-height: 1.3;
    margin: 0.5rem 0 0;
    letter-spacing: 0.05em;
    word-break: break-all;
  }

  .pixel-sample-sm {
    font-size: 2rem;
    line-height: 1.3;
    margin: 0.25rem 0 0;
    color: #aaa;
    letter-spacing: 0.05em;
  }
</style>
