<script>
  import { onMount } from 'svelte'

  let js_is_enabled = false

  onMount(() => {
    js_is_enabled = true
  })
</script>

{#if js_is_enabled}
  <button
    aria-label="Scroll to the top of the page"
    title="Scroll to the top of the page"
    on:click={() =>
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })}>
    <iconify-icon width="28" icon="lucide:chevron-up" />
  </button>
{:else}
  <a href="#body">Scroll to Top</a>
{/if}

<style>
  button,
  a {
    display: grid;
    position: fixed;
    bottom: 1.5rem;
    right: 1.5rem;
    z-index: 999;
    background-color: var(--accent-peachy);
    opacity: 0.6;
    color: var(--clr-bg-400);
    padding: 0.8rem;
    border-radius: 50%;
  }

  a {
    border-radius: 1rem;
    font-weight: bolder;
  }
</style>
