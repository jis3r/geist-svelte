<script lang="ts">
  import { GeistSans } from 'geist-svelte/font/sans';
  import { GeistMono } from 'geist-svelte/font/mono';
  import '../app.css';
  import '../reference-fonts.css';

  let { children } = $props();

  const routes = [
    { href: '/', label: 'Home' },
    { href: '/sans', label: 'Sans' },
    { href: '/sans-nv', label: 'Sans NV' },
    { href: '/mono', label: 'Mono' },
    { href: '/mono-nv', label: 'Mono NV' },
    { href: '/pixel', label: 'Pixel' },
    { href: '/tailwind', label: 'Tailwind' },
    { href: '/metadata', label: 'Metadata' },
    { href: '/barrel', label: 'Barrel' },
  ];
</script>

<nav>
  {#each routes as route}
    <a href={route.href}>{route.label}</a>
  {/each}
</nav>

<main>
  {@render children()}
</main>

<style>
  :global(body) {
    font-family: var(--font-geist-sans);
    margin: 0;
    padding: 2rem;
    background: #0a0a0a;
    color: #ededed;
  }

  :global(code, pre) {
    font-family: var(--font-geist-mono);
  }

  :global(.col-header) {
    font-size: 0.7rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #333;
    margin-bottom: 0.75rem;
  }

  :global(.col-pkg) { color: #0091ff; }
  :global(.col-ref) { color: #f59e0b; }

  :global(.compare-grid) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-top: 1.5rem;
  }

  nav {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    padding-bottom: 1.5rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid #333;
  }

  nav a {
    color: #888;
    text-decoration: none;
    font-size: 0.875rem;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    transition: color 0.15s, background 0.15s;
  }

  nav a:hover {
    color: #fff;
    background: #1a1a1a;
  }

  main {
    max-width: 1200px;
  }
</style>
