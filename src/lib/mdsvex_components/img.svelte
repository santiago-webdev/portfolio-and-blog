<script lang="ts">
	export let src: string;
	export let alt: string;
</script>

<img {src} {alt} loading="lazy" />

<style>
	img {
		display: block;
		max-width: 100%;
	}
</style>
