<script lang="ts">
	import { base } from '$app/paths';
	import { onMount } from 'svelte';

	const blogCards = [
		{ title: 'Title 1', description: 'Description 1' },
		{ title: 'Title 2', description: 'Description 2' },
		{ title: 'Title 3', description: 'Description 3' },
		{ title: 'Title 4', description: 'Description 4' },
		{ title: 'Title 5', description: 'Description 5' },
		{ title: 'Title 6', description: 'Description 6' }
	];

	let blog: HTMLElement;
	let blogButton: HTMLElement;
	let wrapperCards: HTMLElement;
	onMount(async () => {
		let loadBlog: IntersectionObserver = new IntersectionObserver(entries => {
			entries.some(entry => {
				if (entry.isIntersecting) {
					blogButton.focus();
					loadBlog.disconnect();
				}
			});
		});

		loadBlog.observe(blog);
	});

	let windowWidth: number;
	function gotoCard(direction: string) {
		if (direction === 'next') {
			wrapperCards.scrollBy({ top: 0, left: windowWidth / 2, behavior: 'smooth', })
		} else if (direction === 'previous') {
			wrapperCards.scrollBy({ top: 0, left: -Math.abs(windowWidth / 2), behavior: 'smooth', })
		}
	}
</script>

<svelte:window bind:outerWidth={windowWidth} />

<section class="focus wide" id="read-my-blog">
	<div class="wrapper-cards" bind:this={wrapperCards}>
		{#each blogCards as blog, i}
			<article class="blog-selection" id={`./#recommendation-${i}`}>
				<a href={`./#recommendation-${i}`}>
					{blog.title}
					{blog.description}
				</a>
			</article>
		{/each}
	</div>
	<div bind:this={blog} class="wrapper">
		<h2>Read my blog</h2>
		<p>I don't just focus in one topic, so here's a some articles</p>
		<a bind:this={blogButton} href="{base}/blog">Go read the blog</a>
		<button on:click={() => gotoCard('previous')}>Previous</button>
		<button on:click={() => gotoCard('next')}>Next</button>
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

	.blog-selection {
		background-color: red;

		width: 100%;
		height: 0;
		padding-bottom: 61.8%;

		display: inline-block;

		scroll-snap-align: center;
		scroll-snap-type: x mandatory;

		text-align: center;
	}

	.wrapper-cards {
		width: 100%;
		overflow-x: scroll;
		white-space: nowrap;

		scroll-snap-type: x mandatory;
	}

	/* This removes the scrollbar */
	/* .wrapper-cards { */
	/* 	overflow-x: scroll; */
	/* 	scrollbar-width: none; */
	/* } */

	/* .wrapper-cards::-webkit-scrollbar { */
	/* 	display: none; */
	/* } */
</style>
