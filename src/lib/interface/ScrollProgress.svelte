<script lang="ts">
  import { onMount } from 'svelte';

  let scrollY = 0;
  $: innerHeight = 0;
  $: pageHeight = 0;

  onMount(() => {
    const body = document.querySelector('body');

    const resizeObserver = new ResizeObserver(entries => {
      const entry = entries.at(0);

      if (entry !== undefined) {
        pageHeight = Math.floor(entry.contentBoxSize[0].blockSize);
      }
    });

    if (body) resizeObserver.observe(body);
    return () => body && resizeObserver.unobserve(body);
  });
</script>

<svelte:window bind:innerHeight bind:scrollY />

<progress max={pageHeight - innerHeight} value={scrollY} />

<style>
  progress {
    width: 100%;
    height: 3px;
    top: 0;
    border: 0;
    position: fixed;
    z-index: 9999;
  }

  progress::-webkit-progress-bar,
  progress {
    background-color: var(--clr-bg-400);
  }

  progress::-moz-progress-bar {
    background: var(--accent-peachy);
  }

  progress::-webkit-progress-value {
    background: var(--accent-peachy);
  }
</style>
