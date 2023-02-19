<script lang="ts">
  import { fly } from 'svelte/transition';
  export let url: URL;
</script>

{#key url}
  <div in:fly={{ y: -60, duration: 250 }}>
    <slot />
  </div>
{/key}
