<script lang="ts">
	import Forward from '../Forward.svelte';
	export let href = '/';
</script>

<a {href} {...$$restProps} class={`tpl defaults font-10 ${$$props.class}`}>
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

		font-weight: 600;
		font-variation-settings: 'wght' 730;
		border-radius: 999rem;

		--pad-height: 16px;
		--pad-width: 32px;
		padding: var(--pad-height) var(--pad-width);
	}

	span {
		display: flex;
		place-content: center;
		place-items: center;
		justify-content: space-between;
		gap: 0.5ch;
		min-width: min(14ch, 100%);
	}
</style>
