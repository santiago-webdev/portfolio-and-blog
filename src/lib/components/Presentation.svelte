<script>
	import { base } from '$app/paths';
</script>

<section>
	<h1>Building websites && clean interfaces</h1>
	<br />
	<h2>
		Here we'll talk about web technologies and show you my projects while at it.
	</h2>
	<br />
	<a href="{base}/blog">Read the blog <span>⟶</span></a>
	<!-- <a href='${base}/projects'>Check my projects <span>⟶</span></a> -->
	<!-- <a href="/">Read the blog <span>⟶</span></a> -->
	<!-- <a href="/">Check my projects <span>⟶</span></a> -->
</section>

<style>
	section {
		display: grid;
		place-content: center;

		min-height: min(100vh, 80rem);
		width: min(100% - 1rem, var(--wide));
		margin-inline: auto;
	}

	h1 {
		max-width: 21ch;
	}

	h2 {
		font-size: 1.8rem;
		font-family: var(--font-family--condensed);
		max-width: 35ch;
	}

	a {
		font-size: 1.5rem;
		letter-spacing: 0;
		color: var(--cc-fg3);
		transition: all ease-out 0.1s;
	}

	a:hover {
		color: var(--cc-fg);
		letter-spacing: 1px;
	}

	span {
		font-family: monospace;
	}
</style>
