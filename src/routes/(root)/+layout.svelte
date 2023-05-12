<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import NavigationBar from '$lib/components/navigation/NavigationBar.svelte';
	import { fly } from 'svelte/transition';

	export let data;
</script>

<div id="layout">
	<NavigationBar />
	{#key data.pathname}
		<div in:fly={{ y: -60, duration: 300, delay: 300 }} out:fly={{ y: -60, duration: 300 }}>
			<slot />
		</div>
	{/key}
	<Footer />
</div>

<style>
	#layout {
		min-height: 100vh;
		display: grid;
		grid-template-rows: auto 1fr auto;
	}
</style>
