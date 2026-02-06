<script lang="ts">
  import {
    GeistSans,
    GeistSansNonVariable,
    GeistMono,
    GeistMonoNonVariable,
    GeistPixelSquare,
    GeistPixelGrid,
    GeistPixelCircle,
    GeistPixelTriangle,
    GeistPixelLine,
  } from 'geist-svelte';

  const fonts = [
    { name: 'GeistSans', obj: GeistSans, ref: "'Ref Geist Sans', sans-serif" },
    { name: 'GeistSansNonVariable', obj: GeistSansNonVariable, ref: "'Ref Geist Sans NV', sans-serif" },
    { name: 'GeistMono', obj: GeistMono, ref: "'Ref Geist Mono', monospace" },
    { name: 'GeistMonoNonVariable', obj: GeistMonoNonVariable, ref: "'Ref Geist Mono NV', monospace" },
    { name: 'GeistPixelSquare', obj: GeistPixelSquare, ref: "'Ref Geist Pixel Square', monospace" },
    { name: 'GeistPixelGrid', obj: GeistPixelGrid, ref: "'Ref Geist Pixel Grid', monospace" },
    { name: 'GeistPixelCircle', obj: GeistPixelCircle, ref: "'Ref Geist Pixel Circle', monospace" },
    { name: 'GeistPixelTriangle', obj: GeistPixelTriangle, ref: "'Ref Geist Pixel Triangle', monospace" },
    { name: 'GeistPixelLine', obj: GeistPixelLine, ref: "'Ref Geist Pixel Line', monospace" },
  ];
</script>

<h1>Barrel Import</h1>
<p><code>import {'{ GeistSans, GeistMono, ... }'} from 'geist-svelte'</code></p>
<p class="note">All 9 exports from the root package path.</p>

<div class="compare-grid">
  <div>
    <div class="col-header col-pkg">Package (.style.fontFamily)</div>
    {#each fonts as font}
      <div class="card">
        <span class="card-name">{font.name}</span>
        <p class="card-sample" style:font-family={font.obj.style.fontFamily}>Hello Geist 0123</p>
      </div>
    {/each}
  </div>
  <div>
    <div class="col-header col-ref">Reference (direct @font-face)</div>
    {#each fonts as font}
      <div class="card">
        <span class="card-name">{font.name}</span>
        <p class="card-sample" style:font-family={font.ref}>Hello Geist 0123</p>
      </div>
    {/each}
  </div>
</div>

<style>
  h1 { font-weight: 700; font-size: 1.75rem; margin-bottom: 0.25rem; }
  code { background: #1a1a1a; padding: 0.15rem 0.4rem; border-radius: 3px; font-size: 0.8em; }
  .note { font-size: 0.8rem; color: #666; margin-top: 0.5rem; }

  .card {
    border: 1px solid #222;
    border-radius: 6px;
    padding: 0.75rem;
    margin-bottom: 0.5rem;
  }

  .card-name { font-weight: 600; font-size: 0.75rem; color: #888; }
  .card-sample { font-size: 1.25rem; margin-top: 0.25rem; }
</style>
