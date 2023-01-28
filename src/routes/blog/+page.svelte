<script lang="ts">
	import Search from '$lib/components/Search.svelte';
	import { TITLE_BLOG } from '$lib/config';
</script>

<main>
	<Search />
</main>

<svelte:head>
	<title>{TITLE_BLOG}</title>
</svelte:head>
