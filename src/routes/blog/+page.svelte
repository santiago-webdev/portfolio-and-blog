<script lang="ts">
  import SearchBar from '$lib/components/Search/SearchBar.svelte';
  import FilteredPostsCards from '$lib/components/Search/FilteredPostsCards.svelte';
  import { DESCRIPTION, TITLE_BLOG, URL_BLOG } from '$lib/config';
  import '@fontsource/pt-sans/400.css';
  import '@fontsource/pt-sans/700.css';
</script>

<main>
  <SearchBar />
  <FilteredPostsCards />
</main>

<svelte:head>
  <title>{TITLE_BLOG}</title>

  <!-- TODO(santigo-zero): meta tags for dynamic routing -->
  <!-- HTML Meta Tags -->
  <meta name="description" content={DESCRIPTION} />

  <!-- Google / Search Engine Tags -->
  <meta itemprop="name" content={TITLE_BLOG} />
  <meta itemprop="description" content={DESCRIPTION} />
  <meta itemprop="image" content="" />
  <!-- TODO(santigo-zero): Add image -->

  <!-- Facebook Meta Tags -->
  <meta property="og:url" content={URL_BLOG} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={TITLE_BLOG} />
  <meta property="og:description" content={DESCRIPTION} />
  <meta property="og:image" content="" />
  <!-- TODO(santigo-zero): Add image -->

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={TITLE_BLOG} />
  <meta name="twitter:description" content={DESCRIPTION} />
  <meta name="twitter:image" content="" />
  <!-- TODO(santigo-zero): Add image -->
</svelte:head>
