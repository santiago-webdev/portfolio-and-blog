<script lang="ts">
	import site from '$lib/site.json';
	import AboveTheFold from './-AboveTheFold.svelte';
	// import Portfolio from './-Portfolio.svelte';
	import Blog from './-Blog.svelte';
	import Introduction from './-Introduction.svelte';
</script>

<AboveTheFold />
<!-- <Portfolio /> -->
<Blog />
<Introduction />

<svelte:head>
	<title>{site.site.title}</title>

	<!-- TODO(santigo-zero): meta tags for dynamic routing -->
	<!-- HTML Meta Tags -->
	<meta name="description" content={site.site.description} />

	<!-- Google / Search Engine Tags -->
	<meta itemprop="name" content={site.site.title} />
	<meta itemprop="description" content={site.site.description} />
	<meta itemprop="image" content="" />
	<!-- TODO(santigo-zero): Add image -->

	<!-- Facebook Meta Tags -->
	<meta property="og:url" content={site.site.url} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={site.site.title} />
	<meta property="og:description" content={site.site.description} />
	<meta property="og:image" content="" />
	<!-- TODO(santigo-zero): Add image -->

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={site.site.title} />
	<meta name="twitter:description" content={site.site.description} />
	<meta name="twitter:image" content="" />
	<!-- TODO(santigo-zero): Add image -->
</svelte:head>
