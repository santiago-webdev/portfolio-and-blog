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
  <div class="wrapper-button">
    <button
      style:transform={is_past_half_screen
        ? 'translateY(0)'
        : 'translateY(300%)'}
      aria-label="Scroll to the top of the page"
      title="Scroll to the top of the page"
      class="ff-sz-900"
      on:click={() =>
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })}>
      <iconify-icon width="22" icon="lucide:arrow-up" /> Scroll to top
    </button>
  </div>
{:else}
  <a href="#body">Scroll to top</a>
{/if}

<style>
  .wrapper-button {
    width: min(100% - 2rem, var(--xl));
    margin-inline: auto;
    position: sticky;
    bottom: 0;
  }

  button,
  a {
    bottom: 2rem;
    margin-bottom: 2rem;
    margin-top: 0.5rem;
    margin-left: auto;

    display: flex;
    gap: 0.4rem;
    place-items: center;
    padding: 0.6rem;
    border-radius: 0.8rem;
    font-weight: bolder;
    transition: all 0.5s ease-in-out;
    background-color: var(--accent-peachy);
    color: var(--clr-bg-400);
  }
</style>
