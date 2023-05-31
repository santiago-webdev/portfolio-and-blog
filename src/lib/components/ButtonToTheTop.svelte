<script lang="ts">
	import { debounce } from '$lib/utils/utils';
	import { onMount } from 'svelte';

	let scrollY = 0,
		innerHeight = 0,
		visibility = 'hidden';

	const toggleComponent = () =>
		(visibility = window.scrollY > window.innerHeight ? 'visible' : 'hidden');
	onMount(() =>
		window.addEventListener('scroll', debounce(toggleComponent, 30), {
			passive: true,
			capture: true
		})
	);
</script>

<svelte:window bind:scrollY bind:innerHeight />

<section>
	<a style:visibility aria-label="Go to the top of the page" class="reverse" href="#body">
		<iconify-icon icon="lucide:arrow-up" />
	</a>
</section>

<style>
	section {
		position: sticky;
		bottom: 1rem;
		margin-top: 1rem;
		width: min(92%, var(--xl));
		justify-content: flex-end;
		display: flex;
	}

	a {
		border-radius: 999rem;
		padding: 0.8rem;
	}
</style>
