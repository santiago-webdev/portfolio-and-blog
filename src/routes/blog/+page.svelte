<script lang="ts">
	import SearchBar from '$lib/components/FilterFunctionality/SearchBar.svelte';
	import { TITLE_BLOG } from '$lib/config';
</script>

<main>
	<SearchBar />
</main>

<svelte:head>
	<title>{TITLE_BLOG}</title>
</svelte:head>

<!-- TODO(santigo-zero): Add meta tags -->
