<script lang="ts">
	const title = `
    Hello! I'm <strong>Santiago</strong>, a
    web developer
  `;
	const subtitle = "And I create clean interfaces for the web.";
</script>

<div id="home" class="wrapper-home">
	<header>
		<h1>{@html title}</h1>
		<h2>{subtitle}</h2>

		<ul>
			<a href="#projects" role="button">Projects</a>
			<a href="#cta" role="button">Contacts</a>
		</ul>
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

	ul {
		display: inline-flex;
		flex-wrap: wrap;
		gap: calc(var(--padding) / 2);
	}

	a {
		text-align: center;
		background-color: var(--cc2-bg-status);
		width: min(100%, calc(var(--max-content-width) / 4.2));
		box-shadow: 3px 6px 9px rgba(0 0 0 / 10%);
		padding: 0.3rem;
		border-radius: 9px;
		font-size: clamp(1rem, 8vw, 1.5rem);
	}
</style>
