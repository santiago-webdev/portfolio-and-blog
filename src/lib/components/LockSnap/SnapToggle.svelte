<script lang="ts">
	import { snapToggle } from './store';
	// $: console.log($snapToggle);

	const LockStateIcon = new Map<boolean, string>([
		[
			true,
			'<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48"><mask id="ipTAnchorTwo0"><g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path d="M10 24H4c0 11.046 8.954 20 20 20s20-8.954 20-20h-6M24 44V14"/><path fill="#555" fill-rule="evenodd" d="M24 14a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z" clip-rule="evenodd"/></g></mask><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTAnchorTwo0)"/></svg>'
		],
		[
			false,
			'<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48"><mask id="ipTAlignTextBothOne0"><g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><rect width="36" height="36" x="6" y="6" fill="#555" rx="3"/><path stroke-linecap="round" d="M34 24H14m20-9H14m20 18H14"/></g></mask><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTAlignTextBothOne0)"/></svg>'
		]
	]);
</script>

<!-- <input type="checkbox" bind:checked={$snapToggle} /> -->

<button on:click={() => ($snapToggle = !$snapToggle)}
	>{@html LockStateIcon.get($snapToggle)} Snap</button
>

<style>
	button {
		display: grid;
		place-items: center;
		gap: 0.3em;
		grid-template-columns: repeat(2, 1fr);
	}
</style>
