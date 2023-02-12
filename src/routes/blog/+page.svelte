<script lang="ts">
  import SearchBar from '$lib/components/Search/SearchBar.svelte';
  import ListCardPost from '$lib/components/Search/ListCardPost.svelte';
  import { TITLE_BLOG } from '$lib/config';
</script>

<main>
  <SearchBar />
  <ListCardPost />
</main>

<svelte:head>
  <title>{TITLE_BLOG}</title>
</svelte:head>

<!-- TODO(santigo-zero): Add meta tags -->
