<script lang="ts">
	// import { preloadData } from '$app/navigation';
	// TODO(santigo-zero): Do I need to manually preload data if we are focusing the button
	// already?
	import { base } from '$app/paths';
	import Presentation from '$lib/components/Presentation.svelte';
	import { DESCRIPTION, TITLE, URL } from '$lib/config';
	import { onMount } from 'svelte';

	let blog: HTMLElement;
	let blogButton: HTMLElement;
	onMount(async () => {
		let loadBlog: IntersectionObserver = new IntersectionObserver(entries => {
			entries.some(entry => {
				if (entry.isIntersecting) {
					// preloadData(`${base}/blog`);
					blogButton.focus();
					loadBlog.disconnect();
				}
			});
		});

		loadBlog.observe(blog);
	});
</script>

<main>
	<Presentation />
</main>
<br />
<section bind:this={blog} id="read-my-blog">
	<div class="hero-blog">Cards go here</div>
	<div class="wrapper">
		<h2>Read my blog</h2>
		<p>I don't just focus in one topic, so here's a some articles</p>
		<a bind:this={blogButton} href="{base}/blog">Go read the blog</a>
	</div>
</section>

<svelte:head>
	<title>{TITLE}</title>

	<!-- TODO(santigo-zero): meta tags for dynamic routing -->
	<!-- HTML Meta Tags -->
	<meta name="description" content={DESCRIPTION} />

	<!-- Google / Search Engine Tags -->
	<meta itemprop="name" content={TITLE} />
	<meta itemprop="description" content={DESCRIPTION} />
	<meta itemprop="image" content="" />
	<!-- TODO(santigo-zero): Add image -->

	<!-- Facebook Meta Tags -->
	<meta property="og:url" content={URL} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={TITLE} />
	<meta property="og:description" content={DESCRIPTION} />
	<meta property="og:image" content="" />
	<!-- TODO(santigo-zero): Add image -->

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={TITLE} />
	<meta name="twitter:description" content={DESCRIPTION} />
	<meta name="twitter:image" content="" />
	<!-- TODO(santigo-zero): Add image -->
</svelte:head>

<style>
	main {
		background-color: var(--clr-background-alt);
	}

	section {
		display: grid;
		place-content: center;
		grid-template-columns: repeat(2, 1fr);
		padding: 6rem 0;
		text-align: right;
	}

	/* h2 { */
	/* 	max-width: 23ch; */
	/* } */
</style>
