<script lang="ts">
	import { snapToggle } from './store';
	$: console.log($snapToggle);
</script>

<input type="checkbox" bind:checked={$snapToggle} />
