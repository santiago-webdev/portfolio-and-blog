<script lang="ts">
	import SearchBar from './-SearchBar.svelte';
	import FilteredPostsCards from './-FilteredPostsCards.svelte';
	import config from '$lib/config.json';
	import { Posts } from '$lib/components/blog/store';

	let description = `${$Posts.length} ${config.blog.description}`;
	const boldWords = ['Linux', 'web development', 'tooling'];

	boldWords.forEach((word: string) => {
		description = description.replace(new RegExp(word, 'g'), `<strong>${word}</strong>`);
	});
</script>

<main>
	<hgroup>
		<h1 class="font-80">Blog</h1>
		<!-- eslint-disable -->
		<p>{@html description}</p>
	</hgroup>
	<SearchBar />
</main>
<FilteredPostsCards />

<style>
	main {
		background-color: var(--clr-25);
		border-bottom-right-radius: 1.6rem;
		border-bottom-left-radius: 1.6rem;
		padding-bottom: 1.4rem;
		display: grid;
		gap: 2.4rem;
	}

	h1,
	p {
		text-align: center;
		width: min(100% - 1.4rem, 33ch);
	}

	hgroup {
		display: grid;
		place-items: center;
		gap: 1.6rem;
		width: min(100% - 2.2rem, var(--md));
		margin-inline: auto;
	}
</style>
