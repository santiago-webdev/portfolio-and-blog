<script lang="ts">
	import { page } from '$app/stores';

	console.log($page.data.content);

	$: component = $page.data.content;
</script>

<svelte:component this={component} />
