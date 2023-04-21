<script lang="ts">
  import AboveTheFold from './AboveTheFold.svelte'
  import BlogShowcase from './BlogShowcase.svelte'
  import Introduction from './Introduction.svelte'
  import site from '$lib/site.json'
  import FeaturedProjects from './FeaturedProjects.svelte'
</script>

<AboveTheFold />
<br />
<BlogShowcase />
<FeaturedProjects />
<Introduction />

<svelte:head>
  <title>{site.title}</title>

  <!-- TODO(santigo-zero): meta tags for dynamic routing -->
  <!-- HTML Meta Tags -->
  <meta name="description" content={site.description} />

  <!-- Google / Search Engine Tags -->
  <meta itemprop="name" content={site.title} />
  <meta itemprop="description" content={site.description} />
  <meta itemprop="image" content="" />
  <!-- TODO(santigo-zero): Add image -->

  <!-- Facebook Meta Tags -->
  <meta property="og:url" content={site.url} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={site.title} />
  <meta property="og:description" content={site.description} />
  <meta property="og:image" content="" />
  <!-- TODO(santigo-zero): Add image -->

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={site.title} />
  <meta name="twitter:description" content={site.description} />
  <meta name="twitter:image" content="" />
  <!-- TODO(santigo-zero): Add image -->
</svelte:head>

<style>
  :global(header) {
    background-color: var(--clr-25);
  }
</style>
