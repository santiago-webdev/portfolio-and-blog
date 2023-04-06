<script lang="ts">
  import { onMount } from 'svelte'
  import { fly } from 'svelte/transition'
  export let url: URL

  let use = false

  onMount(() => {
    use = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    // if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    // const bigger_than_48 = window.matchMedia('(min-width: 48rem)')
    // use = bigger_than_48.matches
    // bigger_than_48.addEventListener(
    //   'change',
    //   (event: MediaQueryListEvent) => (use = event.matches)
    // )
  })
</script>

{#key url}
  <div in:fly={{ y: -60, duration: use ? 250 : 0 }}>
    <slot />
  </div>
{/key}
