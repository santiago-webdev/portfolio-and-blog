<script>
	const title = `
    I'm <strong>Santiago</strong>, a
    web developer
  `;
	const subtitle = "And I create clean interfaces for the web.";
</script>

<div class="wrapper-home">
	<header>
		<h1>{@html title}</h1>
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
		padding-bottom: 1.3rem;
    max-width: 11ch;
    word-wrap: break-word;
	}

	:global(strong) {
		color: transparent;
		-webkit-text-stroke-width: 1.3px;
		-webkit-text-stroke-color: var(--cc2-fg);
	}
</style>
