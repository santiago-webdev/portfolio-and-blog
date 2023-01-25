<script lang="ts">
	export let title = 'this should work';
	export let date = 'this should work';
</script>

<article>
	<h1>{title}</h1>
	<p>Published: {date}</p>
	<slot />
</article>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<style>
	article {
		display: grid;
		place-content: center;
		justify-content: space-around;
	}
</style>
