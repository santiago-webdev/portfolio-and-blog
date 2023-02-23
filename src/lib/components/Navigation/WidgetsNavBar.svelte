<script lang="ts">
  import WidgetSearchBar from '$lib/interface/WidgetSearchBar.svelte';
  import { navElements } from './store';

  $navElements.push({ component: WidgetSearchBar });
</script>

{#each $navElements as element}
  <svelte:component this={element.component} />
{/each}

<style>
</style>
