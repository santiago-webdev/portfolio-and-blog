<script lang="ts">
	import theme from './store';

	$: console.log($theme);

	const system =
		'<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 2a8 8 0 0 1 8 8a8 8 0 0 1-8 8V4Z"/></svg>';
	const light =
		'<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M11 5V1h2v4Zm6.65 2.75l-1.375-1.375l2.8-2.875l1.4 1.425ZM19 13v-2h4v2Zm-8 10v-4h2v4ZM6.35 7.7L3.5 4.925l1.425-1.4L7.75 6.35Zm12.7 12.8l-2.775-2.875l1.35-1.35l2.85 2.75ZM1 13v-2h4v2Zm3.925 7.5l-1.4-1.425l2.8-2.8l.725.675l.725.7ZM12 18q-2.5 0-4.25-1.75T6 12q0-2.5 1.75-4.25T12 6q2.5 0 4.25 1.75T18 12q0 2.5-1.75 4.25T12 18Z"/></svg>';
	const dark =
		'<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M9.5 2q2.075 0 3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175q.788 1.825.788 3.9t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q11.575 22 9.5 22q-1.325 0-2.587-.337Q5.65 21.325 4.5 20.65Q6.825 19.3 8.162 17Q9.5 14.7 9.5 12T8.162 7Q6.825 4.7 4.5 3.35q1.15-.675 2.413-1.013Q8.175 2 9.5 2Z"/></svg>';
</script>

<div class="themeswitcher-wrapper">
	<button on:click={() => ($theme = 'system')}>{@html system}</button>
	<button on:click={() => ($theme = 'dark')}>{@html dark}</button>
	<button on:click={() => ($theme = 'light')}>{@html light}</button>
</div>
<!-- <select bind:value="{$theme}"> -->
<!--   <option value="system">{@html system}System</option> -->
<!--   <option value="light">{@html light} Light</option> -->
<!--   <option value="dark">{@html dark} Dark</option> -->

<!-- </select> -->
<style>
	.themeswitcher-wrapper {
		display: flex;
	}

	button {
		color: brown;
	}
</style>
