<script lang="ts">
  export let href = '/'
  export let rel = ''
</script>

<a {href} {rel} {...$$restProps}>
  <slot />
  {#if rel === 'external'}
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

<style>
  a {
    display: inline-flex;
    place-items: center;
    place-content: center;
    max-width: max-content;
    padding: clamp(1.2rem, 3vw + 1rem, 1.6rem) clamp(2.2rem, 3vw + 1rem, 2.6rem);
    /* gap: 0.2rem; */
    border-radius: 999rem;

    gap: clamp(0.4rem, 3vw + 1rem, 1.8rem);
    transition: gap 300ms cubic-bezier(0.4, 0.4, 0, 1);
  }

  @media (hover: hover) {
    a:hover {
      gap: clamp(1.4rem, 3vw + 1rem, 2.6rem);
    }
  }
</style>
