<!-- TODO(santigo-zero): Make this component not go past the footer in the layout -->
<!-- There must be a way of limiting the heigth of it to reach a top of the <footer> -->
<script lang="ts">
  var js_is_enabled = true,
    scrollY = 0,
    outerHeight = 0

  $: is_past_half_screen = scrollY > outerHeight / 2
</script>

<svelte:window bind:scrollY bind:outerHeight />

{#if js_is_enabled}
  <button
    style:display={is_past_half_screen ? 'flex' : 'none'}
    aria-label="Scroll to the top of the page"
    title="Scroll to the top of the page"
    on:click={() =>
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })}>
    <iconify-icon width="22" icon="lucide:arrow-up" /> Scroll to top
  </button>
{:else}
  <a href="#body">Scroll to top</a>
{/if}

<style>
  button,
  a {
    align-items: center;
    gap: 0.4rem;
    position: fixed;
    bottom: 1.5rem;
    right: 1.5rem;
    z-index: 999;
    background-color: var(--accent-peachy);
    opacity: 0.8;
    color: var(--clr-bg-400);
    padding: 0.6rem;
    border-radius: 0.8rem;
    font-weight: bolder;
  }
</style>
