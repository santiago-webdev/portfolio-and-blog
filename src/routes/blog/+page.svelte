<script lang="ts">
  import SearchBar from '$compose/Search/SearchBar.svelte'
  import BlogHeader from '$compose/BlogHeader.svelte'
  import FilteredPostsCards from '$compose/Search/FilteredPostsCards.svelte'
  import { DESCRIPTION, TITLE_BLOG, URL_BLOG } from '$lib/config'
</script>

<main class="top-layer wide">
  <BlogHeader />
  <SearchBar />
</main>
<FilteredPostsCards />

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
