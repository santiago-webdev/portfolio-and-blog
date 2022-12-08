<script lang="ts">
	const title: string = `
    Hello! I'm <strong>Santiago</strong>, a
    web developer
  `;
	const subtitle: string = "And I create clean interfaces for the web.";
</script>

<div id="home" class="wrapper-home">
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
			70% 50% at 90% 23%,
			var(--cc-grey),
			var(--cc-bg)
		); /* NOTE: You can't change `background-color` when using this */

		min-height: 100vh; /* height: min(100%, 50vh); */
	}

	header {
		width: min(100% - calc(var(--padding) * 2), var(--max-content-width));
		padding: 6rem 0;
	}

	h1 {
		/* Separate the title from the subtitle */
		padding-bottom: 1.3rem;
		max-width: 16ch;
		text-shadow: 3px 6px 9px rgba(0, 0, 0, 0.3);
	}

	/* Make the <strong> text hollow, and just use an outline for it. You have to
   * define it as global to be included in the build because <strong> is only
   * being used in `title` as a dynamic html component, so when svelte compiles
   * it's not going to include it and the styles will not be applied to this
   * only component. */
	:global(strong) {
		color: transparent;
		-webkit-text-stroke-width: 1.3px;
		-webkit-text-stroke-color: var(--cc2-fg);
	}
</style>
