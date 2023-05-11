<script lang="ts">
  import Forward from '../Forward.svelte'

  export let href = '/'
  export let rel = ''
  export let target = ''
  export let custom_symbol = ''
</script>

{#if href}
  <a {href} {target} {rel} {...$$restProps}>
    <slot />
    {#if custom_symbol}
      {@html custom_symbol}
    {:else if rel === 'external' || (target === '_blank' && !custom_symbol)}
      <!-- Box with diagonal arrow(Link) -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24">
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m4-3h6v6m-11 5L21 3" />
      </svg>
    {:else}
      <!-- Horizontal arrow(Internal Link) -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24">
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 12h14m-7-7l7 7l-7 7" />
      </svg>
    {/if}
  </a>
{:else}
  <button>
    <slot />
    <Forward />
  </button>
{/if}

<style>
  a {
    display: inline-flex;
    place-items: center;
    place-content: center;
    max-width: max-content;
  }

  .bttn-big-round {
    padding: clamp(1rem, 2vw + 1rem, 1.25rem) clamp(2rem, 2vw + 1rem, 2.25rem);
    border-radius: 999rem;
    transition: gap 300ms cubic-bezier(0.4, 0.4, 0, 1);

    gap: clamp(1rem, 3vw + 1rem, 3rem);
  }

  .bttn-small-square {
    border-radius: 1rem;
    padding: 0.6rem 1.8rem;
    gap: 1ch;
  }

  @media (hover: hover) {
    .bttn-big-round:hover {
      gap: 5rem;
    }
  }
</style>
