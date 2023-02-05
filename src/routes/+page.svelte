<script lang="ts">
	import Presentation from '$lib/components/Presentation.svelte';
	import { DESCRIPTION, TITLE, URL } from '$lib/config';
</script>

<main>
	<Presentation />
</main>
<section class="focus" id="read-my-blog">
	<div class="hero-blog">Cards go here</div>
	<div class="wrapper">
		<h2>Read my blog</h2>
		<p>I don't just focus in one topic, so here's a some articles</p>
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
		height: min(100vh, 80rem);
		height: min(100dvh, 80rem);
		padding-bottom: 6rem;

		display: grid;
		place-content: center;
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
