<script lang="ts">
	import Footer from "$lib/Footer.svelte";
</script>

<div class="wrapper">
	<slot />
</div>
<Footer />

<style global>
	.wrapper {
		flex: 1;
	}
</style>
