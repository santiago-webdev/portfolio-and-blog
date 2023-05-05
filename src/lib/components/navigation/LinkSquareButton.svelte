<script lang="ts">
  import Forward from '../Forward.svelte'

  export let href = ''
  export let rel = ''
</script>

<!-- <a {href} {...$$restProps}> -->
<!--   <slot /> -->
<!--   <svg -->
<!--     xmlns="http://www.w3.org/2000/svg" -->
<!--     width="18" -->
<!--     height="18" -->
<!--     viewBox="0 0 24 24"> -->
<!--     <path -->
<!--       fill="none" -->
<!--       stroke="currentColor" -->
<!--       stroke-linecap="round" -->
<!--       stroke-linejoin="round" -->
<!--       stroke-width="2" -->
<!--       d="M5 12h14m-7-7l7 7l-7 7" /> -->
<!--   </svg> -->
<!-- </a> -->

{#if href}
  <a class="reverse" {href} {rel}>
    <slot />
    {#if rel === 'external'}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
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
      <Forward />
    {/if}
  </a>
{:else}
  <button>
    <slot />
  </button>
{/if}

<style>
  a {
    display: inline-flex;
    place-items: center;
    place-content: center;
    max-width: max-content;
    border-radius: 1rem;
    padding: 0.6rem 1.2rem;

    gap: clamp(0.4rem, 3vw + 1rem, 1.8rem);
    transition: gap 300ms cubic-bezier(0.4, 0.4, 0, 1);
  }
</style>
