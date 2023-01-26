<script lang="ts">
	export let text: string;
</script>

<span>{text}</span>

<style>
	/* span { */
	/* 	color: transparent; */
	/* 	-webkit-text-stroke-width: 0.1rem; */
	/* 	-webkit-text-stroke-color: var(--fg2); */
	/* } */

	@media (max-width: 600px) {
		span {
			-webkit-text-stroke-width: 0.07rem;
		}
	}
</style>
