<script lang="ts">
  import { GeistSans } from 'geist-svelte/font/sans';

  const weights = [100, 200, 300, 400, 500, 600, 700, 800, 900] as const;
  const weightNames = ['Thin', 'UltraLight', 'Light', 'Regular', 'Medium', 'SemiBold', 'Bold', 'Black', 'UltraBlack'] as const;
  const sample = 'The quick brown fox jumps over the lazy dog';
</script>

<h1>Geist Sans — Variable</h1>
<p><code>import {'{ GeistSans }'} from 'geist-svelte/font/sans'</code></p>

<div class="compare-grid">
  <div>
    <div class="col-header col-pkg">Package — var(--font-geist-sans)</div>
    {#each weights as weight, i}
      <div class="row">
        <span class="label">{weight} {weightNames[i]}</span>
        <span class="sample pkg-font" style:font-weight={weight}>{sample}</span>
      </div>
    {/each}
  </div>
  <div>
    <div class="col-header col-ref">Reference — direct @font-face</div>
    {#each weights as weight, i}
      <div class="row">
        <span class="label">{weight} {weightNames[i]}</span>
        <span class="sample ref-font" style:font-weight={weight}>{sample}</span>
      </div>
    {/each}
  </div>
</div>

<style>
  h1 { font-weight: 700; font-size: 1.75rem; margin-bottom: 0.25rem; }
  code { background: #1a1a1a; padding: 0.15rem 0.4rem; border-radius: 3px; font-size: 0.8em; }

  .row {
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
    margin-bottom: 0.75rem;
  }

  .label {
    font-size: 0.65rem;
    color: #555;
    font-weight: 400;
    font-family: system-ui;
  }

  .sample { font-size: 1.1rem; }
  .pkg-font { font-family: var(--font-geist-sans); }
  .ref-font { font-family: 'Ref Geist Sans', sans-serif; }
</style>
