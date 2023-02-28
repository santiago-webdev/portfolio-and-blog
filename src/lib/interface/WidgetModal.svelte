<script lang="ts">
  import IconSearch from '$lib/Icons/IconSearch.svelte';
  import { inPixels } from '$lib/utils/utils';

  var onDesktop = true,
    outerWidth = 0;

  $: onDesktop = outerWidth > inPixels('48rem') ? true : false;
</script>

<svelte:window bind:outerWidth />

<button
  on:click={() => console.log('test')}
  class={onDesktop ? 'attn attnactive' : ''}
  aria-keyshortcuts="Control+K"
>
  <IconSearch />
  {#if onDesktop}
    <span> &nbsp;&nbsp;&nbsp </span>
    <kbd>Ctrl K</kbd>
  {/if}
</button>

<style>
  button {
    display: flex;
    place-items: center;
    padding-inline: 0.8rem;
    gap: 0.6rem;
  }

  span {
    text-decoration: underline solid var(--accent-orange) 0.15em;
    text-underline-offset: 0em;
  }

  kbd {
    pointer-events: none;
    border-top: 1px solid var(--clr-text-muted);
    border-left: 1px solid var(--clr-text-muted);
    border-right: 3px solid var(--clr-text-muted);
    border-bottom: 3px solid var(--clr-text-muted);
    border-radius: 0.4rem;
    /* padding-inline: 0.3rem; */
  }
</style>
