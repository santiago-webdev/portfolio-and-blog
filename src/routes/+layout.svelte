<script lang="ts">
	import '$lib/styles/reset.css';
	import '$lib/styles/global.css';
	import Nav from '$lib/components/Nav.svelte';
	import { onMount } from 'svelte';

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

<div class="layout">
	<Nav {pageHeight} />
	<slot />
</div>

<svelte:head>
	<link href="./typography.css" rel="stylesheet" type="text/css" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<style>
	.layout {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
</style>
