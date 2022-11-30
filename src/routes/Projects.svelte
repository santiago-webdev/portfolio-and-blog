<script>
	const title = 'Projects';
	const subtitle = 'This are some of my best frontend projects';
</script>

<div id="wrapper-projects" class="wrapper-projects">
	<main>
		<div style="text-align: center">
			<h1>{title}</h1>
			<h2>{subtitle}</h2>
		</div>
	</main>
</div>

<style>
	.wrapper-projects {
		display: grid;
		place-items: center;
		min-height: 100vh;
		background-color: var(--cc-bg);
	}

	main {
		border-color: red;
		border-style: solid;

		max-width: var(--content-width);
		padding: var(--padding);
		padding-inline: var(--padding-inline);
	}

	h1 {
		font-size: clamp(1rem, 14vw, 4.4rem);
		line-height: clamp(3rem, 18vw, 5.6rem);
		font-weight: 600;

		padding-bottom: 1.3rem;
	}

	h2 {
		color: var(--cc-pale-blue);
		font-size: clamp(1rem, 10vw, 1.5rem);
		font-family: 'Inter', sans-serif;
		font-weight: 400;
	}
</style>
