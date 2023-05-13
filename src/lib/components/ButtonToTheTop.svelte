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
		<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
			<path
				fill="none"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M12 19V5m-7 7l7-7l7 7"
			/>
		</svg>
		Go to top
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
