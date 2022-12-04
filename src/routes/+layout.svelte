<script lang="ts">
	import Nav from "$lib/Nav.svelte";
	import Footer from "$lib/Footer.svelte";
</script>

<Nav />
<div class="wrapper">
	<slot />
</div>
<Footer />

<style global>
	.wrapper {
		color: var(--cc-fg);
	}
</style>
