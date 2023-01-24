<script lang="ts">
	import Presentation from '$lib/components/Presentation.svelte';
</script>

<main>
	<Presentation />
</main>

<style>
	main {
		/* min-height: min(100vh - 90px, 80rem); */
		padding: var(--general-padding);
		display: grid;
		place-content: center;
	}
</style>
