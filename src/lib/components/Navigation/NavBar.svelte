<script lang="ts">
  import { base } from '$app/paths';
  import { navigating, page } from '$app/stores';
  import { onMount } from 'svelte';

  let burger =
    '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M7.95 11.95h32m-32 12h32m-32 12h32"/></svg>';
  let cross =
    '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m11.25 4.75l-6.5 6.5m0-6.5l6.5 6.5"/></svg>';
  let showMobile = false;
  let desktop = false;

  const toggleMobile = () => (showMobile = !showMobile);

  let y = 0;
  $: windowHeight = 0;
  let windowWidth = 0;
  $: {
    if (windowWidth > 700) {
      desktop = true;
    } else {
      desktop = false;
    }
  }

  export let pageHeight = 0;
  $: pageHeightWithoutWindow = pageHeight - windowHeight;

  $: if ($navigating || desktop) {
    showMobile = false;
  }

  type NavItems = Array<{
    label?: string;
    href?: string;
    decoration?: string;
    separator?: string;
  }>;

  const navItems = [
    { label: 'Home', href: `${base}/` },
    { label: 'Blog', href: `${base}/blog` },
    { label: 'Projects', href: `${base}/projects` },
    { separator: '|' },
    { label: 'About', href: `${base}/about` },
    { label: 'Contact', href: `${base}/contact`, decoration: 'border' }
  ] satisfies NavItems;
</script>

<svelte:window
  bind:outerWidth={windowWidth}
  bind:innerHeight={windowHeight}
  bind:scrollY={y}
/>

<nav class="artifact-ui" class:headerActive={y > 30 || showMobile}>
  <progress max={pageHeightWithoutWindow} value={y} />
  <div
    style:flex-direction={desktop ? 'row' : 'column'}
    class="nav-container wider"
  >
    <div class="main-nav">
      <a
        style:padding-left="0"
        style:visibility={showMobile ? 'hidden' : 'visible'}
        aria-current={$page.url.pathname === `/${base}` ? 'page' : undefined}
        href="{base}/">Santiago Gonzalez</a
      >
    </div>
    {#if !desktop}
      <button on:click={toggleMobile}>
        {#if !showMobile}
          {@html burger}
        {:else}
          {@html cross}
        {/if}
      </button>
    {/if}
    <section style:display={showMobile || desktop ? 'grid' : 'none'}>
      <ul style:flex-direction={desktop ? 'row' : 'column'}>
        {#each navItems as item}
          {#if item.href}
            <li
              style:display={item.label === 'Home' && desktop
                ? 'none'
                : 'block'}
              class={item.decoration ? 'attn-border attn' : 'trn-border'}
            >
              <a
                aria-current={$page.url.pathname.startsWith(item.href)
                  ? 'page'
                  : undefined}
                href={item.href}
                on:click={toggleMobile}>{item.label}</a
              >
            </li>
            <hr
              style:display={!desktop ? 'block' : 'none'}
              style="width: 80%"
            />
          {:else}
            <li style:display={desktop ? 'block' : 'none'}>
              {@html item.separator}
            </li>
          {/if}
        {/each}
      </ul>
    </section>
  </div>
</nav>

<style>
  nav {
    top: 0;
    position: sticky;
    background-color: var(--clr-background-alt);
    padding: 0.3rem 0;
    transition: filter 0.3s ease-in;

    z-index: 999;
  }

  li,
  button,
  a {
    font-size: inherit;
    color: var(--clr-text);
  }

  .headerActive {
    filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04))
      drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
  }

  .nav-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: space-between;
    margin-inline: auto;
    gap: 1rem;
  }

  .main-nav {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  button,
  a {
    padding: 0.8rem 1.6rem;
    display: grid;
    place-items: center;
    border-radius: 0.6rem;
  }

  a:hover {
    color: var(--clr-hover);
  }

  a:focus {
    color: var(--clr-clicked);
  }

  ul {
    display: flex;
    flex-direction: row;
    place-items: center;
    justify-content: space-between;
    width: 100%;
  }

  progress {
    width: 100%;
    height: 3px;
    /* This should be the same value for header { top: } */
    top: 0;
    border: 0;
    position: fixed;
  }

  progress::-webkit-progress-bar,
  progress {
    background: inherit;
  }

  progress::-moz-progress-bar {
    background: var(--accent-peachy);
  }

  progress::-webkit-progress-value {
    background: var(--accent-peachy);
  }

  /* button, */
  /* a { */
  /*   font-weight: 500; */
  /*   font-size: clamp(0.6rem, 8vw, 1.15rem); */
  /*   color: var(--clr-title); */
  /* } */
</style>
