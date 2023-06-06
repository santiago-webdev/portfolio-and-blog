<script lang="ts">
	import NavigationBar from '$lib/components/navigation/NavigationBar.svelte';
	import ButtonToTheTop from '$lib/components/ButtonToTheTop.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { fly } from 'svelte/transition';
	import Seo from '$lib/seo.svelte';
	import { page } from '$app/stores';

	export let data;
</script>

<div id="layout">
	<NavigationBar />
	{#key data.pathname}
		<div in:fly={{ y: -60, duration: 300, delay: 300 }} out:fly={{ y: -60, duration: 300 }}>
			<slot />
		</div>
	{/key}
	<ButtonToTheTop />
	<Footer />
</div>
<Seo
	url={$page.data.pathname}
	data={{ title: $page.data.title, description: $page.data.description }}
/>

<style>
	#layout {
		min-height: 100vh;
		display: grid;
		grid-template-rows: auto 1fr auto;
	}
</style>
