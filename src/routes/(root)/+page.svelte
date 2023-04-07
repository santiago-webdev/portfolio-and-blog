<script lang="ts">
  import AboveTheFold from './AboveTheFold.svelte'
  import BlogShowcase from './BlogShowcase.svelte'
  import Introduction from './Introduction.svelte'
</script>

<AboveTheFold />
<BlogShowcase />
<Introduction />

<style>
  :global(header) {
    background-color: var(--bg-400);
  }
</style>
