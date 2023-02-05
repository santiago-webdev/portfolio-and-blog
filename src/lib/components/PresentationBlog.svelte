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

<section class="focus" id="read-my-blog">
	<div class="wrapper-cards">
		<div class="hero-blog">Cards go here</div>
		<div class="hero-blog">Cards go here</div>
		<div class="hero-blog">Cards go here</div>
		<div class="hero-blog">Cards go here</div>
	</div>
	<div bind:this={blog} class="wrapper">
		<h2>Read my blog</h2>
		<p>I don't just focus in one topic, so here's a some articles</p>
		<a bind:this={blogButton} href="{base}/blog">Go read the blog</a>
	</div>
</section>

<style>
	section {
		/* display: grid; */
		/* place-content: center; */
		grid-template-columns: repeat(2, 1fr);
		padding: 6rem 0;
		text-align: right;
	}

	.hero-blog {
		background-color: red;

		width: 100%;
		height: 0;
		padding-bottom: 61.8%;

		display: inline-block;

		scroll-snap-align: center;
		scroll-snap-type: x mandatory;
	}

	.wrapper-cards {
		width: 100%;
		overflow-x: scroll;
		white-space: nowrap;

		scroll-snap-type: x mandatory;
	}
</style>
