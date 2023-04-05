<script lang="ts">
  import AboveTheFold from './AboveTheFold.svelte'
  import BlogShowcase from './BlogShowcase.svelte'
  import IntroductionAbout from './IntroductionAbout.svelte'
</script>

<AboveTheFold />
<BlogShowcase />
<IntroductionAbout />

<style>
  :global(header) {
    background-color: var(--bg-400);
  }
</style>
