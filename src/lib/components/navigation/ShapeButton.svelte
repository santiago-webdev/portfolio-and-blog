<script lang="ts">
	import Forward from '../Forward.svelte';

	export let href = '/';
	export let rel = '';
	export let target = '';
	export let custom_symbol = '';
</script>

{#if href}
	<a {href} {target} {rel} {...$$restProps}>
		<slot />
		{#if rel === 'external' || (target === '_blank' && !custom_symbol)}
			<iconify-icon width="20" height="20" icon="lucide:external-link" />
		{:else}
			<iconify-icon
				width={custom_symbol === 'mdi:github' ? '23' : 20}
				height={custom_symbol === 'mdi:github' ? '23' : 20}
				icon={custom_symbol ? custom_symbol : 'lucide:arrow-right'}
			/>
		{/if}
	</a>
{:else}
	<button>
		<slot />
		<Forward />
	</button>
{/if}

<style>
	a {
		display: inline-flex;
		place-items: center;
		place-content: center;
		max-width: max-content;
	}

	.bttn-big-round {
		padding: clamp(1rem, 2vw + 1rem, 1.25rem) clamp(2rem, 2vw + 1rem, 2.25rem);
		border-radius: 999rem;
		transition: gap 300ms cubic-bezier(0.4, 0.4, 0, 1);

		gap: clamp(1rem, 3vw + 1rem, 3rem);
	}

	.bttn-small-square {
		border-radius: 1rem;
		padding: 0.6rem 1.8rem;
		gap: 1ch;
	}

	@media (hover: hover) {
		.bttn-big-round:hover,
		.bttn-big-round:focus {
			gap: 5rem;
		}
	}
</style>
