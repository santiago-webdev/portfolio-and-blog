<script lang="ts">
	import { page } from '$app/stores';

	$: component = $page.data.content;
</script>

<svelte:component this={component} />
