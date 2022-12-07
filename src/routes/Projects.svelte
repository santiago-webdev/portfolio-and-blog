<script lang="ts">
	import Card from "$lib/cards/Card.svelte";
	const title: string = "Projects";
	const subtitle: string = "This are some of my best frontend projects";
</script>

<div id="projects" class="wrapper-projects">
	<main>
		<div style="text-align: center">
			<h1>{title}</h1>
			<h2>{subtitle}</h2>
		</div>

		<section>
			<Card />
		</section>
	</main>
</div>

<style>
	.wrapper-projects {
		display: grid;
		place-items: center;
		min-height: 100vh;
		background-color: #1a1724;

		padding: 6rem 0;
	}

	main {
		/* border-color: red; */
		/* border-style: solid; */

		/* max-width: 66rem; */
		padding: var(--padding);
		padding-inline: var(--padding-inline);
		max-width: 66rem;
		width: 100%;
	}

	h1 {
		font-size: clamp(1rem, 14vw, 3.3rem);
		line-height: clamp(3rem, 18vw, 4.5rem);
		font-weight: 600;

		padding-bottom: 1.3rem;
	}

	h2 {
		color: var(--cc-pale-blue);
		font-size: clamp(1rem, 10vw, 1.5rem);
		font-family: "Inter", sans-serif;
		font-weight: 400;
	}

	section {
		display: grid;
		gap: 1.05rem;
		grid-auto-rows: minmax(28rem, auto);
		grid-template-columns: repeat(auto-fill, minmax(min(20rem, 100%), 1fr));
		/* max-width: 66rem; */
		padding-top: calc(var(--padding) * 3);
		width: 100%;
	}
</style>
