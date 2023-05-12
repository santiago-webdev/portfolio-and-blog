<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
</script>

<section>
	<h1>404 - {$page.error?.message}</h1>
	<p>Something has gone wrong</p>
	<a class="shiny hover" href="{base}/">Home</a>
</section>

<style>
	section {
		min-height: 100vh;
		display: flex;
		flex-flow: column wrap;
		place-content: center;
		place-items: center;
		margin-inline: auto;
		gap: 2rem;
		width: min(100% - 1rem, var(--base));
	}

	a {
		display: flex;
		place-items: center;
		place-content: center;
		padding: clamp(1rem, 1.5vw, 2rem) clamp(2rem, 3vw, 3rem);
		gap: 0.2rem;
		border-radius: 999rem;
	}
</style>
