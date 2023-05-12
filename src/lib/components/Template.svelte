<script context="module">
	import { img } from '$lib/mdsvex_components/index';
	export { img };
</script>

<script lang="ts">
	import site from '$lib/site.json';
	import { page } from '$app/stores';
	import Hollow from './Hollow.svelte';
	import { readableDate, relativeTime } from '$lib/utils/utils';
	import { base } from '$app/paths';
	import LinkUI from './navigation/LinkUI.svelte';

	export let title = '';
	export let datetime = '';
	export let description = '';
	export let finished = false;
	export let tags = [''];

	const dateRelative = !datetime ? datetime : relativeTime(new Date(), new Date(datetime));
	const dateReadable = !datetime ? datetime : readableDate(datetime);

	let isHollow = false;
	let hollowPrefix = '';
	let fillSuffix = '';

	const keywords = ['How', 'How to', 'How to:', 'How To'];

	if (title) {
		keywords.some((keyword) => {
			if (title.startsWith(keyword)) {
				hollowPrefix = keyword;
				fillSuffix = title.replace(keyword, '');
				isHollow = true;
			}
		});
	}
</script>

<section>
	<div role="banner">
		<div class="back-button">
			<LinkUI orientation="left" href="{base}/blog">Back to Blog</LinkUI>
		</div>
		<div class="wrapper-header">
			{#if isHollow}
				<h1 class="font-80">
					<Hollow color={'var(--clr-100)'}>{hollowPrefix}</Hollow>
					{fillSuffix}
				</h1>
			{:else}
				<h1 class="font-80">{title}</h1>
			{/if}
			<p>{description}</p>
			{#if tags[0] !== ''}
				<ul class="tags inline-items">
					{#each tags as tag}
						<li class="shiny">{tag}</li>
					{/each}
				</ul>
			{/if}

			{#if datetime}
				<time {datetime}>
					<svg
						aria-label="Published: "
						xmlns="http://www.w3.org/2000/svg"
						width="22"
						height="22"
						viewBox="0 0 24 24"
					>
						<g
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
						>
							<rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
							<path d="M16 2v4M8 2v4m-5 4h18" />
						</g>
					</svg>&nbsp;{dateRelative}
					<div aria-orientation="vertical" role="separator">&nbsp;•&nbsp;</div>
					{dateReadable}
				</time>
			{/if}

			{#if !finished}
				<div class="wip">
					<small>🏗 Construction site, keep out 🏗</small>
					<small>🚧 This article is not finished 🚧</small>
				</div>
			{/if}
			<br />
		</div>
	</div>
	<main>
		<slot />
	</main>
</section>

<svelte:head>
	<title>{title} - {site.blog.title_append}</title>

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
	[role='banner'] {
		background-color: var(--clr-25);
		border-bottom-right-radius: 1.6rem;
		border-bottom-left-radius: 1.6rem;
		display: flex;
		flex-direction: column;
		place-items: start;
		padding-bottom: 1rem;
	}

	.back-button {
		margin-inline: auto;
		width: min(92%, var(--base));
		margin-top: 0.8rem;
		margin-bottom: 0.4rem;
	}

	.wrapper-header,
	.wip {
		display: grid;
		width: min(92%, var(--xl));
		margin-inline: auto;
	}

	main {
		width: min(92%, var(--base));
		margin-inline: auto;
		padding-top: 1rem;
	}

	:global(main p) {
		width: min(100%, 60ch);
	}

	.wrapper-header {
		gap: 1rem;
		text-align: center;
	}

	.wrapper-header p {
		max-width: 44ch;
		margin-inline: auto;
	}

	.wip {
		place-items: center;
		margin-top: 0.6rem;
	}

	small {
		font-weight: 500;
	}

	.tags {
		/* width: min(100%, var(--sm)); */
		max-width: var(--sm);
		margin-inline: auto;
	}

	.tags li {
		margin-top: 0.6rem;
		display: flex;
		gap: 0.5ch;
		padding: 0.4rem 0.8rem;
		border-radius: 0.75rem;
	}

	time {
		display: flex;
		place-items: center;
		justify-content: center;
		flex-wrap: wrap;
	}
</style>
