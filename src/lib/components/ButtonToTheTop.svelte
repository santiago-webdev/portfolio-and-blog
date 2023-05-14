<script lang="ts">
	import { afterUpdate } from 'svelte';

	let scrollY = 0,
		isNotNecessary = false;

	const startObserving = () => {
		const main = document.querySelector('main');

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.target === main) {
					isNotNecessary = entry.isIntersecting;
				}
			});
		});

		if (main) {
			observer.observe(main);
		}

		return observer.disconnect;
	};

	afterUpdate(() => startObserving());
</script>

<svelte:window bind:scrollY />

<section class:isNotNecessary>
	<a class="reverse" href="#body">
		<iconify-icon icon="lucide:arrow-up" />Go to top
	</a>
</section>

<style>
	section {
		position: sticky;
		bottom: 1rem;
		margin-top: 1rem;
		width: min(100% - 1rem, var(--xl));
		justify-content: flex-end;
		display: flex;
	}

	.isNotNecessary {
		display: none;
	}

	a {
		border-radius: 1rem;
		padding: 0.6rem 1.2rem;
	}
</style>
