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

<svelte:head>
	<title>{site.blog.title}</title>

	<!-- TODO(santigo-zero): meta tags for dynamic routing -->
	<!-- HTML Meta Tags -->
	<meta name="description" content={description} />

	<!-- Google / Search Engine Tags -->
	<meta itemprop="name" content={site.blog.title} />
	<meta itemprop="description" content={description} />
	<meta itemprop="image" content="" />
	<!-- TODO(santigo-zero): Add image -->

	<!-- Facebook Meta Tags -->
	<meta property="og:url" content={site.blog.url} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={site.blog.title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content="" />
	<!-- TODO(santigo-zero): Add image -->

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={site.blog.title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="" />
	<!-- TODO(santigo-zero): Add image -->
</svelte:head>

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
