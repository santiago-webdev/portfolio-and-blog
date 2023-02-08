<script lang="ts">
	export let text: string;
	export let color: string;
</script>

<span style="--color: {color}">{text}</span>

<style>
	span {
		-webkit-text-stroke-color: var(--color);
		-webkit-text-stroke-width: 0.09rem;
		color: transparent;
	}
</style>
