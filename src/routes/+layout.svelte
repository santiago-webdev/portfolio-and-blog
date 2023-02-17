<script lang="ts">
  import { onMount } from 'svelte';
  import NavBar from '$lib/components/NavBar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Transition from '$lib/components/Transition.svelte';
  import { page } from '$app/stores';

  import '@fontsource/pt-sans/400.css';
  import '@fontsource/pt-sans/700.css';

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
  <Transition url={$page.url}>
    <slot />
  </Transition>
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
