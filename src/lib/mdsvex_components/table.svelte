<script lang="ts">
	// <script context="module" lang="ts">
</script>

<div class="wrapper-table">
	<table>
		<slot />
	</table>
</div>

<style>
	.wrapper-table {
		margin-block-start: 1em;
		border-radius: 12px;
		border: 1px var(--clr-45) solid;
		/* width: min(var(--base), 100%); */
		overflow: hidden;
	}

	table {
		width: 100%;
		border-collapse: collapse;
		background-color: var(--clr-20);
		/* border: 1px var(--clr-70) solid; */
		/* border-radius: 1rem; */
	}
</style>
