<script lang="ts">
	import { snapToggle } from './store';
	$: console.log($snapToggle);

	const LockStateIcon = new Map<boolean, string>([
		[
			true,
			'<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M17 21v-4H7v4H5v-5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v5h-2zM7 3v4h10V3h2v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3h2zM2 9l4 3l-4 3V9zm20 0v6l-4-3l4-3z"/></svg>'
		],
		[
			false,
			'<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19v-4h2v4h4v2Zm10 0v-2h4v-4h2v4q0 .825-.587 1.413Q19.825 21 19 21ZM3 9V5q0-.825.587-1.413Q4.175 3 5 3h4v2H5v4Zm16 0V5h-4V3h4q.825 0 1.413.587Q21 4.175 21 5v4Z"/></svg>'
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
