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
    font-variation-settings: 'wght' 500;
  }

  .defaults {
    font-size: inherit;
    line-height: inherit;
  }
</style>
