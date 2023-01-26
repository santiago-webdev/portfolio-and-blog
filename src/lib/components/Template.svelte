<script lang="ts">
	import { TITLE_BLOG_COMPOSE } from '$lib/config';

	export let title = '';
	export let date = '';
</script>

<article>
	<h1>{title}</h1>
	<p>Published: {date}</p>
	<slot />
</article>

<svelte:head>
	<title>{title}{TITLE_BLOG_COMPOSE}</title>
</svelte:head>

<style>
	article {
		display: grid;
		place-content: center;
	}
</style>
