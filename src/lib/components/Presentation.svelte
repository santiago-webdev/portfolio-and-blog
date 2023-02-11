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
		<!-- <a href="{base}/#projects">PROJECTS</a> -->
		<!-- <a href="{base}/#contact">CONTACT</a> -->
	</div>
</section>

<style>
	section {
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
		font-size: clamp(1rem, 8vw, 1.3rem);
		padding: 1rem 2.6rem;
		/* max-width: 100%; */
		color: var(--clr-subtitle);
		/* flex: 1; */
		text-align: center;
		/* width: 100%; */
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
		/* background-color: red; */
		display: flex;
		place-items: start;
		gap: 1.3rem;
		/* justify-content: space-between; */
		flex-wrap: wrap;
	}
</style>
