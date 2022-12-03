<script>
	const title = "I'm Santiago, a web developer";
	const subtitle = 'And I create clean interfaces for the web.';
</script>

<div class="wrapper-home">
	<main>
		<p>Hello!</p>
		<h1>{title}</h1>
		<h2>{subtitle}</h2>
	</main>
</div>

<style>
	.wrapper-home {
    background-image: radial-gradient(70% 50% at 100% 23%, #3E4352, var(--cc2-bg));
    /* background-image: none; */
		transition: all 0.3s ease 0s;
		display: grid;
		place-items: center;
		min-height: 100vh;
		background-color: var(--cc2-bg);
	}

	main {
		/* border-color: red; */
		/* border-style: solid; */

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

	p {
		font-family: 'Inter', sans-serif;
		margin-left: 0.8ch;
		font-size: clamp(20px, 10vw, 26px);
		color: var(--cc-vanilla-red);
	}

	h2 {
		font-size: clamp(1rem, 10vw, 1.5rem);
		font-family: 'Inter', sans-serif;
		font-weight: 400;
	}
</style>
