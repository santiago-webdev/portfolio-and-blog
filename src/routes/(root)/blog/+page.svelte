<script lang="ts">
  import SearchBar from '$lib/components/Search/SearchBar.svelte'
  import BlogHeader from '$lib/components/BlogHeader.svelte'
  import FilteredPostsCards from '$lib/components/Search/FilteredPostsCards.svelte'
  import site from '$lib/site.json'
</script>

<main>
  <BlogHeader />
  <br />
  <SearchBar />
</main>
<FilteredPostsCards />

<svelte:head>
  <title>{site.title_blog}</title>

  <!-- TODO(santigo-zero): meta tags for dynamic routing -->
  <!-- HTML Meta Tags -->
  <meta name="description" content={site.description} />

  <!-- Google / Search Engine Tags -->
  <meta itemprop="name" content={site.title_blog} />
  <meta itemprop="description" content={site.description} />
  <meta itemprop="image" content="" />
  <!-- TODO(santigo-zero): Add image -->

  <!-- Facebook Meta Tags -->
  <meta property="og:url" content={site.url_blog} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={site.title_blog} />
  <meta property="og:description" content={site.description} />
  <meta property="og:image" content="" />
  <!-- TODO(santigo-zero): Add image -->

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={site.title_blog} />
  <meta name="twitter:description" content={site.description} />
  <meta name="twitter:image" content="" />
  <!-- TODO(santigo-zero): Add image -->
</svelte:head>

<style>
  main {
    background-color: var(--bg-400);
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
    padding-bottom: 1rem;
  }
</style>
