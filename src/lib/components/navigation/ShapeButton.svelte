<script lang="ts">
	import Forward from '../Forward.svelte';
	export let href = '/';
</script>

<a {href} class={`defaults ${$$props.class}`} {...$$restProps}>
	<span>
		<slot />
		{#if $$props.rel}
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
				<path
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m4-3h6v6m-11 5L21 3"
				/>
			</svg>
		{:else}
			<Forward />
		{/if}
	</span>
</a>

<style>
	a {
		display: flex;
		place-content: center;
		place-items: center;
		text-transform: uppercase;

		font-family: var(--ff-dflt);
		font-size: var(--fs-10);
		line-height: var(--fs-10);
		font-weight: 600;
		font-variation-settings: 'wght' 730;
		border-radius: 999rem;

		--pad-height: 16px;
		--pad-width: 32px;
	}

	span {
		display: flex;
		place-content: center;
		place-items: center;
		justify-content: space-between;
		gap: 0.5ch;
		min-width: min(14ch, 100%);
	}

	/* Types of buttons */
	.defaults {
		padding: var(--pad-height) var(--pad-width);
		box-shadow: 3px 6px 12px 4px rgba(0, 0, 0, 0.1);
		--background: var(--clr-45);
		--border: var(--clr-50);
		background-color: var(--background);
		border-bottom-color: var(--background);
		border-right-color: var(--background);
		border-top-color: var(--border);
		border-left-color: var(--border);
		border-style: solid;
		border-width: 1px 2px;
		color: inherit;
	}

	.reverse {
		padding: var(--pad-height) var(--pad-width);
		box-shadow: 3px 6px 8px 4px rgba(0, 0, 0, 0.1);
		--background: var(--clr-250);
		--border: var(--clr-300);
		background-color: var(--background);
		border-color: var(--border) var(--background) var(--background) var(--border);
		border-style: solid;
		border-width: 1px 2px;
		color: var(--clr-10);
	}

	.transparent {
		padding: var(--pad-height) 0;
		background-color: transparent;
		border: transparent solid;
		border-width: 1px 0 0 1px;
		color: var(--clr-90);
	}

	/* EOL Types of buttons */
</style>
