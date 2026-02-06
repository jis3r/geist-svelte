<script lang="ts">
  import {
    GeistPixelSquare,
    GeistPixelGrid,
    GeistPixelCircle,
    GeistPixelTriangle,
    GeistPixelLine,
  } from 'geist-svelte/font/pixel';

  const variants = [
    { name: 'Square', pkgVar: 'var(--font-geist-pixel-square)', refFont: "'Ref Geist Pixel Square', monospace" },
    { name: 'Grid', pkgVar: 'var(--font-geist-pixel-grid)', refFont: "'Ref Geist Pixel Grid', monospace" },
    { name: 'Circle', pkgVar: 'var(--font-geist-pixel-circle)', refFont: "'Ref Geist Pixel Circle', monospace" },
    { name: 'Triangle', pkgVar: 'var(--font-geist-pixel-triangle)', refFont: "'Ref Geist Pixel Triangle', monospace" },
    { name: 'Line', pkgVar: 'var(--font-geist-pixel-line)', refFont: "'Ref Geist Pixel Line', monospace" },
  ];

  const sampleText = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const sampleNumbers = '0123456789';
</script>

<h1>Geist Pixel — All 5 Variants</h1>
<p><code>import {'{ GeistPixelSquare, ... }'} from 'geist-svelte/font/pixel'</code></p>

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
