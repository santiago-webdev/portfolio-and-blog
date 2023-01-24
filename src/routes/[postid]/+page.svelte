<script lang="ts">
  import type { PageData } from "./$types"

  export let data: PageData
  console.log(data)
  $: component = data.content
</script>

<svelte:component this={component} />
