<script context="module">
	import { img } from '$lib/mdsvex_components/index';
	export { img };
</script>

<script>
	import Hollow from './Hollow.svelte';
	import { readableDate, relativeTime, retrieve_icon } from '$lib/utils/utils';
	import { base } from '$app/paths';
	import Seo from '$lib/seo.svelte';
	import { page } from '$app/stores';

	import LinkArrow from './navigation/LinkArrow.svelte';

	export let title = '';
	export let datetime = '';
	export let description = '';
	export let finished = false;
	/** @type {string[]} */
	export let tags = [];

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
			<LinkArrow orientation="left" href="{base}/blog">Back to Blog</LinkArrow>
		</div>
		<div class="wrapper-header">
			<hgroup>
				{#if isHollow}
					<h1 class="font-80">
						<Hollow color={'var(--clr-250)'}>{hollowPrefix}</Hollow>
						{fillSuffix}
					</h1>
				{:else}
					<h1 class="font-80">{title}</h1>
				{/if}
				<p>{description}</p>
			</hgroup>
			{#if tags}
				<ul class="tags inline-items">
					{#each tags as tag}
						<li class="shiny">
							<iconify-icon width="22" height="22" icon={retrieve_icon(tag)} />
							{tag}
						</li>
					{/each}
				</ul>
			{/if}

			{#if datetime}
				<time {datetime}>
					<iconify-icon width="21" heigh="21" icon="lucide:calendar" />
					&nbsp;{dateRelative}
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
<Seo url={$page.url} data={{ title: `${title} - Santiago's Blog`, description: description }} />

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

	hgroup {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	:global(main p) {
		width: min(100%, 60ch);
	}

	.wrapper-header {
		gap: 1.2rem;
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
		place-content: center;
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
