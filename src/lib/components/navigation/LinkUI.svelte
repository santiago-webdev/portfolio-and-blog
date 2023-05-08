<script lang="ts">
  import Backward from '$lib/components/Backward.svelte'
  import Forward from '$lib/components/Forward.svelte'

  export let orientation = 'right'
  export let href = '/'
  export let defaults = false
</script>

<a
  style:gap={orientation === 'left' ? '0.6ch' : '0.2ch'}
  class:defaults
  {href}
  {...$$restProps}>
  {#if orientation === 'left'}
    <Backward />
    <slot />
  {:else if orientation === 'right'}
    <slot />
    <Forward />
  {:else}
    <slot />
  {/if}
</a>

<style>
  a {
    display: flex;
    color: var(--clr-90);
    transition: all 150ms ease-in-out;
    max-width: max-content;
    letter-spacing: -0.03em;
    font-weight: 400;
  }

  @media (hover: hover) {
    a:hover {
      color: var(--clr-red-40);
    }
  }

  .defaults {
    font-size: inherit;
    line-height: inherit;
  }
</style>
