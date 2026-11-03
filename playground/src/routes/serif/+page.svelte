<script lang="ts">
  import {
    GeistSerif,
    GeistSerifRegular,
    GeistSerifSquare,
    GeistSerifTriangle,
    GeistSerifHeart,
  } from 'geist-svelte/font/serif';

  const statics = [
    { name: 'Regular', obj: GeistSerifRegular, refFont: "'Ref Geist Serif Regular', serif" },
    { name: 'Square', obj: GeistSerifSquare, refFont: "'Ref Geist Serif Square', serif" },
    { name: 'Triangle', obj: GeistSerifTriangle, refFont: "'Ref Geist Serif Triangle', serif" },
    { name: 'Heart', obj: GeistSerifHeart, refFont: "'Ref Geist Serif Heart', serif" },
  ];

  const instances = [
    { name: 'Regular', elsh: 0 },
    { name: 'Square', elsh: 25 },
    { name: 'Triangle', elsh: 50 },
    { name: 'Heart', elsh: 100 },
  ] as const;

  const sample = 'Sphinx of black quartz, judge my vow';
  const sampleNumbers = '0123456789 & ?!';

  let elsh = $state(0);
  const variation = $derived(`'ELSH' ${elsh}`);
</script>

<h1>Geist Serif - Variable and Static</h1>
<p><code>import {'{ GeistSerif, GeistSerifRegular, ... }'} from 'geist-svelte/font/serif'</code></p>

<h2>Variable ({GeistSerif.variable}) with ELSH axis</h2>
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
    <div class="col-header col-pkg">Package - var(--font-geist-serif)</div>
    <p class="serif-sample" style:font-family="var(--font-geist-serif)" style:font-variation-settings={variation}>{sample}</p>
    <p class="serif-sample-sm" style:font-family="var(--font-geist-serif)" style:font-variation-settings={variation}>{sampleNumbers}</p>
  </div>
  <div>
    <div class="col-header col-ref">Reference - direct @font-face</div>
    <p class="serif-sample" style:font-family="'Ref Geist Serif', serif" style:font-variation-settings={variation}>{sample}</p>
    <p class="serif-sample-sm" style:font-family="'Ref Geist Serif', serif" style:font-variation-settings={variation}>{sampleNumbers}</p>
  </div>
</div>

{#each statics as variant}
  <h2>{variant.name} ({variant.obj.variable})</h2>
  <div class="compare-grid">
    <div>
      <div class="col-header col-pkg">Package</div>
      <p class="serif-sample" style:font-family={variant.obj.style.fontFamily}>{sample}</p>
      <p class="serif-sample-sm" style:font-family={variant.obj.style.fontFamily}>{sampleNumbers}</p>
    </div>
    <div>
      <div class="col-header col-ref">Reference</div>
      <p class="serif-sample" style:font-family={variant.refFont}>{sample}</p>
      <p class="serif-sample-sm" style:font-family={variant.refFont}>{sampleNumbers}</p>
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

  .serif-sample {
    font-size: 2.5rem;
    line-height: 1.2;
    margin: 0.5rem 0 0;
  }

  .serif-sample-sm {
    font-size: 1.5rem;
    line-height: 1.3;
    margin: 0.25rem 0 0;
    color: #aaa;
  }
</style>
