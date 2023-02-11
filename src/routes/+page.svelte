<script lang="ts">
	import Presentation from '$lib/components/Presentation.svelte';
	import PresentationBlog from '$lib/components/PresentationBlog.svelte';
	import { DESCRIPTION, TITLE, URL } from '$lib/config';
</script>

<main>
	<Presentation />
</main>
<!-- <section id="blog"> -->
<!-- 	<PresentationBlog /> -->
<!-- </section> -->
<!---->
<!-- <section id="projects" /> -->
<!---->
<!-- <section id="contact" /> -->

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
		/* min-height: min(100vh, 80rem); */
		/* min-height: min(100dvh, 80rem); */
		padding: 6rem 0;
		display: grid;
		place-content: center;
	}
</style>
