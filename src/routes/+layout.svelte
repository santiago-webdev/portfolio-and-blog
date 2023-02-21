<script lang="ts">
  import { onMount } from 'svelte';
  import NavBar from '$lib/components/Navigation/NavBar.svelte';
  import Footer from '$lib/components/Navigation/Footer.svelte';
  import Transition from '$lib/components/Transition.svelte';
  import { page } from '$app/stores';

  import '$lib/styles/global.css';
  import '$lib/styles/typography.css';
  import '$lib/styles/system.css';

  import '@fontsource/manrope/variable.css';
  import '@fontsource/manrope/200.css';
  import '@fontsource/manrope/300.css';
  import '@fontsource/manrope/400.css';
  import '@fontsource/manrope/500.css';
  import '@fontsource/manrope/600.css';
  import '@fontsource/manrope/700.css';
  import '@fontsource/manrope/800.css';

  import 'iconify-icon';

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
  {#await import('$lib/components/Search/Modal.svelte') then Modal}
    <Modal.default />
  {/await}
  <NavBar {pageHeight} />
  <Transition url={$page.url}>
    <slot />
  </Transition>
  <Footer />
</div>
<div class="noise" />

<style>
  .layout {
    color-scheme: dark;
    min-height: 100vh;
    min-height: 100dvh;
    display: grid;
    grid-template-rows: auto 1fr auto;
    background-color: var(--clr-background);
  }

  .noise {
    position: fixed;
    z-index: 9999;
    top: -300%;
    left: -150%;
    height: 600%;
    width: 600%;

    -webkit-animation: grain 7s steps(10) infinite;
    animation: grain 7s steps(10) infinite;
    opacity: 0.2;
    mix-blend-mode: color-dodge;

    background-image: url(/noise.png);
    background-size: 100px;
    background-repeat: repeat;

    pointer-events: none;
  }

  @keyframes grain {
    0% {
      transform: translate(0, 0);
    }

    10% {
      transform: translate(-5%, -10%);
    }

    20% {
      transform: translate(-15%, 5%);
    }

    30% {
      transform: translate(7%, -25%);
    }

    40% {
      transform: translate(-5%, 25%);
    }

    50% {
      transform: translate(-15%, 10%);
    }

    60% {
      transform: translate(15%, 0%);
    }

    70% {
      transform: translate(0%, 15%);
    }

    80% {
      transform: translate(3%, 35%);
    }

    90% {
      transform: translate(-10%, 10%);
    }

    100% {
      transform: translate(0, 0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .noise {
      all: unset;
    }
  }
</style>
