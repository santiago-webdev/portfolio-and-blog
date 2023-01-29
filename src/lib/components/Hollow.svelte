<script lang="ts">
	export let text: string;
	export let color: string;
</script>

<span style="--color: {color}">{text}</span>

<style>
	span {
		-webkit-text-stroke-color: var(--color);
		-webkit-text-stroke-width: 0.18rem;
		/* -webkit-text-stroke-width: 0.1rem; */
		color: transparent;
	}

	@media (max-width: 700px) {
		span {
			-webkit-text-stroke-width: 0.09rem;
		}
	}
</style>
