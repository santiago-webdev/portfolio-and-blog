<script lang="ts">
	import '$lib/styles/global.css';
</script>

<slot />

<svelte:head>
	<link
		href="./typography.css"
		rel="stylesheet"
		type="text/css"
	/>
	<meta
		name="viewport"
		content="width=device-width, initial-scale=1"
	/>
</svelte:head>
