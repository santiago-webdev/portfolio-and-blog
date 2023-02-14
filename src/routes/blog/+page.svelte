<script lang="ts">
  import SearchBar from '$lib/components/Search/SearchBar.svelte';
  import FilteredPostsCards from '$lib/components/Search/FilteredPostsCards.svelte';
  import { TITLE_BLOG } from '$lib/config';
  import '@fontsource/pt-sans/400.css';
  import '@fontsource/pt-sans/700.css';
</script>

<main>
  <SearchBar />
  <FilteredPostsCards />
</main>

<svelte:head>
  <title>{TITLE_BLOG}</title>
</svelte:head>

<!-- TODO(santigo-zero): Add meta tags -->
