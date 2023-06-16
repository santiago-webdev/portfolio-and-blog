<div class="wrapper-table">
	<table>
		<slot />
	</table>
</div>

<style>
	.wrapper-table {
		border-radius: 12px;
		border: 1px var(--clr-45) solid;
		overflow: hidden;
	}

	table {
		width: 100%;
		border-collapse: collapse;
		background-color: var(--clr-20);
	}
</style>
