<script lang="ts">
  import Forward from '$lib/components/Forward.svelte'

  export let href = '/'
</script>

<a {href} {...$$restProps}>
  <slot />
  <Forward />
</a>

<style>
  a {
    display: inline-flex;
    place-items: center;
    place-content: center;
    max-width: max-content;
    padding: clamp(1.4rem, 3vw + 1rem, 2rem) clamp(2.4rem, 3vw + 1rem, 3rem);
    gap: 0.2rem;
    border-radius: 999rem;
  }
</style>
