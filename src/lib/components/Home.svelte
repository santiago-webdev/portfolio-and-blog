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

		<section>
			<button>
				<a href="#projects">
					<p>Projects</p>
				</a>
			</button>
			<button>
				<a href="#cta">
					<p>Contacts</p>
				</a>
			</button>
		</section>
	</header>
</div>

<style>
	.wrapper-home {
		display: grid;
		place-items: center;

		background-image: radial-gradient(
			70% 50% at 90% 23%,
			var(--cc-grey),
			transparent
		); /* NOTE: You can't change `background-color` when using this */

		min-height: min(100vh, 60rem);
	}

	header {
		width: min(100% - calc(var(--padding) * 2), var(--max-content-width));

		/* This initial padding is in here so that the nav doesn't overlap with
     * this component when viewing the site in landscape mode */
		padding: 6rem 0;

		display: grid;
		gap: 1.3rem;
	}

	h1 {
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

	section {
		display: flex;
		flex-wrap: wrap;
		gap: calc(var(--padding) / 2);
	}

	button {
		box-shadow: 3px 6px 9px rgba(0, 0, 0, 0.1);
		background-color: var(--cc2-bg-status);
		color: var(--cc2-fg-status);

		padding: 0.3rem;
		border-radius: 9px;

		/* TODO(santigo-zero): Normalize fonts, including this for buttons */
		font-size: clamp(1rem, 8vw, 1.5rem);
		font-weight: 400;

		width: min(100%, calc(var(--max-content-width) / 4.2));
		/* width: 100%; */
	}

	/* If the width of the viewport is ^bigger^ than this. */
	@media only screen and (min-width: 43.75rem) {
		button {
			border-radius: 1rem;
		}
	}
</style>
