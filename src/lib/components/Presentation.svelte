<script lang="ts">
	import { base } from '$app/paths';
	import Hollow from '$lib/components/Hollow.svelte';
</script>

<section class="focus">
	<h1>
		Building websites && <Hollow text="clean" color="brown" /> interfaces
	</h1>
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
	h1 {
		max-width: 21ch;
		color: var(--color);
		/* filter: drop-shadow(0.3ch 0.3ch 30px rgb(0 0 0 / 0.12)); */
	}

	h2 {
		/* font-size: 1.8rem; */
		/* font-family: var(--ff--cnds); */
		max-width: 35ch;
		color: var(--color);
	}

	a {
		font-size: 1.7rem;
		letter-spacing: 0;
		transition: all ease-out 0.1s;
		font-family: var(--ff--dflt);
		color: var(--color);
	}

	a:hover {
		letter-spacing: 1px;
	}

	span {
		font-family: monospace;
	}
</style>
