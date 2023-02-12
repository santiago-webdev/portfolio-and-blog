<script lang="ts">
  import '$lib/styles/reset.css';
  import '$lib/styles/global.css';
  import { onMount } from 'svelte';
  import NavBar from '$lib/components/NavBar.svelte';
  import Footer from '$lib/components/Footer.svelte';

  let body: HTMLElement;
  $: pageHeight = 0;
  onMount(() => {
    const resizeObserver = new ResizeObserver(entries => {
      const entry = entries.at(0);

      if (entry !== undefined) {
        pageHeight = Math.floor(entry.contentBoxSize[0].blockSize);
      }
    });

    resizeObserver.observe(body);
    return () => resizeObserver.unobserve(body);
  });
</script>

<div class="layout" bind:this={body}>
  <NavBar {pageHeight} />
  <slot />
  <Footer />
</div>

<style>
  .layout {
    color-scheme: dark;
    min-height: 100vh;
    min-height: 100dvh;
    display: grid;
    grid-template-rows: auto 1fr auto;
    background-color: var(--clr-background);
  }
</style>
