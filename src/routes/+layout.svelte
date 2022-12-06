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
		flex: 1;
	}
</style>
