<script lang="ts">
	// import { preloadData } from '$app/navigation';
	// TODO(santigo-zero): Do I need to manually preload data if we are focusing the button
	// already?
	import { base } from '$app/paths';
	import { onMount } from 'svelte';

	let blog: HTMLElement;
	let blogButton: HTMLElement;
	onMount(async () => {
		let loadBlog: IntersectionObserver = new IntersectionObserver(entries => {
			entries.some(entry => {
				if (entry.isIntersecting) {
					console.log('test')
					// preloadData(`${base}/blog`);
					blogButton.focus();
					loadBlog.disconnect();
				}
			});
		});

		loadBlog.observe(blog);
	});
</script>

<section id="read-my-blog">
	<div class="hero-blog">Cards go here</div>
	<div bind:this={blog} class="wrapper">
		<h2>Read my blog</h2>
		<p>I don't just focus in one topic, so here's a some articles</p>
		<a bind:this={blogButton} href="{base}/blog">Go read the blog</a>
	</div>
</section>

<style>
	section {
		display: grid;
		place-content: center;
		grid-template-columns: repeat(2, 1fr);
		padding: 6rem 0;
		text-align: right;
	}
</style>
