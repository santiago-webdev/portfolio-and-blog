<script lang="ts">
	import theme from './store';
	$: console.log($theme);
</script>

<button on:click={() => theme.set('dark')}>Dark</button>
<button on:click={() => theme.set('light')}>Light</button>
