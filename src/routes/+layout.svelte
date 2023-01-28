<script lang="ts">
	import '$lib/styles/reset.css';
	import '$lib/styles/global.css';
	import '$lib/styles/system.css';

	import '@fontsource/pt-sans/400.css';
	import '@fontsource/pt-sans/700.css';
	import '@fontsource/pt-sans-narrow/400.css';
	import '@fontsource/pt-sans-narrow/700.css';

	import { onMount } from 'svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let body: HTMLElement;
	$: pageHeight = 0;
	onMount(() => {
		const resizeObserver = new ResizeObserver(entries => {
			const entry = entries.at(0);

			// Get the block size, which is basically like doing body.scrollHeight
			// but with the difference that this will update if the height of the
			// current page changes.
			// pageHeight = Math.floor(entry!.contentBoxSize[0].blockSize)
			if (entry !== undefined) {
				pageHeight = Math.floor(entry.contentBoxSize[0].blockSize);
			}
		});

		resizeObserver.observe(body);

		// This callback cleans up the observer
		return () => resizeObserver.unobserve(body);
	});
</script>

<div class="layout" bind:this={body}>
	<Nav {pageHeight} />
	<slot />
	<Footer />
</div>

<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<style>
	.layout {
		min-height: 100vh;
		min-height: 100dvh;

		display: grid;
		grid-template-rows:
			auto
			1fr
			auto;

		background-color: var(--slate-100);
	}
</style>
