<script lang="ts">
	import '$lib/styles/reset.css';
	import '$lib/styles/global.css';
</script>

<div class="layout">
	<slot />
</div>

<svelte:head>
	<link href="./typography.css" rel="stylesheet" type="text/css" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<style>
	.layout {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
</style>
