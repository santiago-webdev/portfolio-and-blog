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
		background-color: var(--clr-20);
		display: grid;
	}

	:global(thead) {
		display: grid;
	}

	:global(thead th:first-child),
	:global(tbody td:first-child) {
		min-width: 14ch;
	}
</style>
