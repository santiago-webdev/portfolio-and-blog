<script lang="ts">
	import { base } from '$app/paths';
</script>

<section class="focus">
	<h1>Building websites && clean interfaces</h1>
	<h2>
		Here we'll discuss about web technologies and show you my projects while at
		it.
	</h2>
	<div class="wrapper-links">
		<a href="{base}/#projects">PROJECTS</a>
		<a href="{base}/#contact">CONTACT</a>
	</div>
</section>

<style>
	section {
		min-height: min(100vh, 80rem);
		min-height: min(100dvh, 80rem);
		padding: 6rem 0;
		display: grid;
		gap: 2.2rem;
	}

	h1 {
		max-width: 21ch;
	}

	h2 {
		max-width: 23ch;
	}

	a {
		border-radius: 1.1rem;
		font-size: clamp(1.6rem, 8vw, 1.3rem);
		padding: 1rem 2.3rem;

		color: var(--clr-subtitle);
		line-height: calc(1.5 * clamp(1rem, 8vw, 1.8rem));
	}

	a:first-child {
		background-color: black;
		border: 0.2rem solid black;
	}

	a:last-child {
		border: 0.2rem solid var(--clr-text-muted);
		color: var(--clr-text);
	}

	.wrapper-links {
		display: grid;
		max-width: fit-content;
		place-items: center;
		gap: 1.3rem;
		grid-template-columns: repeat(2, 1fr);
	}
</style>
