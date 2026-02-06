<h1>geist-svelte playground</h1>
<p>Each test page shows a <span class="col-pkg">package import</span> column on the left and a <span class="col-ref">direct reference</span> column on the right. If both columns look identical, the package works correctly.</p>

<section>
  <h2>Test pages</h2>
  <ul>
    <li><a href="/sans">Sans</a> — Variable Geist Sans, weights 100–900</li>
    <li><a href="/sans-nv">Sans NV</a> — Non-variable Geist Sans, 9 static weight files</li>
    <li><a href="/mono">Mono</a> — Variable Geist Mono, weights 100–900</li>
    <li><a href="/mono-nv">Mono NV</a> — Non-variable Geist Mono, 9 static weight files</li>
    <li><a href="/pixel">Pixel</a> — All 5 pixel variants (Square, Grid, Circle, Triangle, Line)</li>
    <li><a href="/tailwind">Tailwind</a> — Tailwind v4 utility class integration</li>
    <li><a href="/metadata">Metadata</a> — TypeScript API (.variable, .style.fontFamily)</li>
    <li><a href="/barrel">Barrel</a> — Root barrel import from 'geist-svelte'</li>
  </ul>
</section>

<section>
  <h2>Quick check</h2>
  <div class="compare-grid">
    <div>
      <div class="col-header col-pkg">Package (CSS variable)</div>
      <p style:font-family="var(--font-geist-sans)">Geist Sans via package</p>
      <p><code style:font-family="var(--font-geist-mono)">Geist Mono via package</code></p>
    </div>
    <div>
      <div class="col-header col-ref">Reference (direct @font-face)</div>
      <p style:font-family="'Ref Geist Sans', sans-serif">Geist Sans via reference</p>
      <p><code style:font-family="'Ref Geist Mono', monospace">Geist Mono via reference</code></p>
    </div>
  </div>
</section>

<style>
  h1 { font-weight: 700; font-size: 2rem; margin-bottom: 0.5rem; }
  h2 { font-weight: 600; font-size: 1.25rem; margin-top: 2rem; }
  ul { line-height: 1.8; }
  a { color: #0091ff; }
  code { background: #1a1a1a; padding: 0.15rem 0.4rem; border-radius: 3px; font-size: 0.9em; }
</style>
