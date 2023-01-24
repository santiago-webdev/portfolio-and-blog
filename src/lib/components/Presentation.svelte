<script>
	import { base } from '$app/paths';
</script>

<section>
	<h1>Building websites && clean interfaces</h1>
	<br />
	<h2>
		Here we'll talk about web technologies and show you my projects while at it
	</h2>
	<br />
	<!-- <a href='${base}/blog'>Read the blog <span>⟶</span></a> -->
	<!-- <a href='${base}/projects'>Check my projects <span>⟶</span></a> -->
	<a href="/">Read the blog <span>⟶</span></a>
	<a href="/">Check my projects <span>⟶</span></a>
</section>

<style>
	section {
		display: grid;
		place-content: center;
	}

	h2,
	a {
		font-size: 1.5rem;
	}

	h2 {
		width: 30ch;
		font-weight: 400;
	}

	a {
		font-weight: 500;
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
