<script lang="ts">
	import { TITLE_BLOG_COMPOSE } from '$lib/config';
	import { page } from '$app/stores';

	export let title = '';
	export let date = '';
	export let description = '';
</script>

<article>
	{#if title}
		<h1>{title}</h1>
	{/if}

	{#if date}
		<p>PUBLISHED: {date}</p>
	{/if}
	<slot />
</article>

<svelte:head>
	<title>{title}{TITLE_BLOG_COMPOSE}</title>

	<!-- TODO(santigo-zero): meta tags for dynamic routing -->
	<!-- HTML Meta Tags -->
	<meta name="description" content={description} />

	<!-- Google / Search Engine Tags -->
	<meta itemprop="name" content={title} />
	<meta itemprop="description" content={description} />
	<meta itemprop="image" content="" />
	<!-- TODO(santigo-zero): Add image -->

	<!-- Facebook Meta Tags -->
	<meta property="og:url" content={$page.url.toString()} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content="" />
	<!-- TODO(santigo-zero): Add image -->

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="" />
	<!-- TODO(santigo-zero): Add image -->
</svelte:head>

<style>
	article {
		width: min(100% - 1rem, var(--wide));
		margin-inline: auto;
	}
</style>
