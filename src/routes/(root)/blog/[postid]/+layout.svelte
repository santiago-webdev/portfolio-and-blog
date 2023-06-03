<script lang="ts">
	import Seo from '$lib/seo.svelte';
	import { page } from '$app/stores';
</script>

<slot />
<Seo url={$page.url} data={{ title: $page.data.title, description: $page.data.description }} />

<svelte:head>
	<link rel="stylesheet" href="/syntax-highlighting.css" type="text/css" />
</svelte:head>
