<script lang="ts">
	import SearchBar from '$lib/components/search/SearchBar.svelte';
	import FilteredPostsCards from '$lib/components/search/FilteredPostsCards.svelte';
	import site from '$lib/site.json';
	import { Posts } from '$lib/components/search/store';

	let base = `${$Posts.length} ${site.blog.description}`;
	const description = base;
	const boldWords = ['Linux', 'web development', 'tooling'];

	boldWords.forEach((word: string) => {
		base = base.replace(new RegExp(word, 'g'), `<strong>${word}</strong>`);
	});
</script>

<main>
	<hgroup>
		<h1>Blog</h1>
		<!-- eslint-disable -->
		<p>{@html base}</p>
	</hgroup>
	<br />
	<SearchBar />
</main>
<FilteredPostsCards />

<style>
	main {
		background-color: var(--clr-25);
		border-bottom-right-radius: 1.6rem;
		border-bottom-left-radius: 1.6rem;
		padding-bottom: 1.4rem;
	}

	h1,
	p {
		text-align: center;
		width: min(92%, 33ch);
	}

	hgroup {
		display: grid;
		place-items: center;
		gap: 1rem;
	}
</style>
