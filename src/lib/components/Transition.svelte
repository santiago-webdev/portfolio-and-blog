<script lang="ts">
  import { onMount } from 'svelte'
  import { fly } from 'svelte/transition'
  export let url: URL

  let client_big_screen = false

  onMount(() => {
    const bigger_than_48 = window.matchMedia('(min-width: 48rem)')
    client_big_screen = bigger_than_48.matches
    bigger_than_48.addEventListener(
      'change',
      (event: MediaQueryListEvent) => (client_big_screen = event.matches)
    )
  })
</script>

{#key url}
  <div
    in:fly={client_big_screen
      ? { y: -60, duration: 250 }
      : { y: 0, duration: 0 }}>
    <slot />
  </div>
{/key}
