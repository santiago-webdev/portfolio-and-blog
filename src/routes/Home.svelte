<script>
	const title = "I'm Santiago, a web developer";
	const subtitle = 'And I create clean interfaces for the web.';
</script>

<div class="wrapper-home">
	<header>
		<h1>{title}</h1>
		<h2>{subtitle}</h2>
	</header>
</div>

<style>
	.wrapper-home {
		display: grid;
		place-items: center;

		background-image: radial-gradient(
			70% 50% at 100% 23%,
			#3e4352,
			var(--cc2-bg)
		); /* NOTE: You can't change `background-color` when using this */

		min-height: 100vh; /* height: min(100%, 50vh); */
	}

	header {
		width: min(100% - var(--padding), var(--max-content-width));
		padding: 6rem 0; /* Put a little bit of blank-space between Nav and Projects */
	}

	h1 {
		font-size: clamp(1rem, 14vw, 4.4rem);
		line-height: clamp(3rem, 18vw, 5.6rem);
		font-weight: 600;

		padding-bottom: 1.3rem;
	}

	h2 {
		font-size: clamp(1rem, 10vw, 1.5rem);
		font-weight: 400;
		font-family: 'Inter', sans-serif;
	}
</style>
