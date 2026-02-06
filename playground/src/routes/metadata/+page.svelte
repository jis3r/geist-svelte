<script lang="ts">
  import { GeistSans } from 'geist-svelte/font/sans';
  import { GeistSansNonVariable } from 'geist-svelte/font/sans-non-variable';
  import { GeistMono } from 'geist-svelte/font/mono';
  import { GeistMonoNonVariable } from 'geist-svelte/font/mono-non-variable';
  import {
    GeistPixelSquare,
    GeistPixelGrid,
    GeistPixelCircle,
    GeistPixelTriangle,
    GeistPixelLine,
  } from 'geist-svelte/font/pixel';

  const allFonts = [
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

<h1>TypeScript Metadata API</h1>
<p>Each export provides <code>.variable</code> and <code>.style.fontFamily</code>.</p>

<table>
  <thead>
    <tr>
      <th>Export</th>
      <th>.variable</th>
      <th class="col-pkg">Package sample</th>
      <th class="col-ref">Reference sample</th>
    </tr>
  </thead>
  <tbody>
    {#each allFonts as font}
      <tr>
        <td class="name">{font.name}</td>
        <td><code>{font.obj.variable}</code></td>
        <td><span style:font-family={font.obj.style.fontFamily}>Hello Geist</span></td>
        <td><span style:font-family={font.ref}>Hello Geist</span></td>
      </tr>
    {/each}
  </tbody>
</table>

<style>
  h1 { font-weight: 700; font-size: 1.75rem; margin-bottom: 0.25rem; }
  code { background: #1a1a1a; padding: 0.1rem 0.35rem; border-radius: 3px; font-size: 0.75em; word-break: break-all; }

  table { width: 100%; border-collapse: collapse; margin-top: 1.5rem; font-size: 0.85rem; }
  th { text-align: left; padding: 0.5rem; border-bottom: 1px solid #333; color: #888; font-weight: 500; font-size: 0.75rem; }
  td { padding: 0.5rem; border-bottom: 1px solid #1a1a1a; vertical-align: middle; }
  .name { font-weight: 600; white-space: nowrap; }
</style>
