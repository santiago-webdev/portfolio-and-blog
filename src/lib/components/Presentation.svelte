<script lang="ts">
	import { AUTHOR, DESCRIPTION_ALT } from '$lib/config';
</script>

<section>
	<h1>{AUTHOR}</h1>
	<br />
	<h2>{DESCRIPTION_ALT}</h2>
</section>

<style>
	section {
		text-align: center;
		width: min(100% - 3rem, var(--wide));
		margin-inline: auto;
	}
</style>
