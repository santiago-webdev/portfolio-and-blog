<ol class="font-20">
	<slot />
</ol>

<style>
	ol {
		display: grid;
		gap: 0.2rem;
		background-color: var(--clr-35);
		border: 1px var(--clr-65) solid;
		border-radius: 12px;
		padding: 1rem;
		list-style-position: inside;
		list-style-type: none;
		counter-reset: ol-counter;
	}

	:global(ol li::before) {
		content: counter(ol-counter) '.';
		counter-increment: ol-counter;
		padding-right: 10px;
	}

	:global(ol li) {
		padding: 0.4rem;
		border-radius: 8px;
	}

	:global(ol li:nth-child(odd)) {
		background-color: var(--clr-25);
	}
</style>
