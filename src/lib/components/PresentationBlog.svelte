<script lang="ts">
	import { base } from '$app/paths';
	import { onMount } from 'svelte';

	let leftButton =
		'<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M15.125 21.1L6.7 12.7q-.15-.15-.212-.325q-.063-.175-.063-.375t.063-.375q.062-.175.212-.325l8.425-8.425q.35-.35.875-.35t.9.375q.375.375.375.875t-.375.875L9.55 12l7.35 7.35q.35.35.35.862q0 .513-.375.888t-.875.375q-.5 0-.875-.375Z"/></svg>';
	let rightButton =
		'<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M7.15 21.1q-.375-.375-.375-.888q0-.512.375-.887L14.475 12l-7.35-7.35q-.35-.35-.35-.875t.375-.9q.375-.375.888-.375q.512 0 .887.375l8.4 8.425q.15.15.213.325q.062.175.062.375t-.062.375q-.063.175-.213.325L8.9 21.125q-.35.35-.862.35q-.513 0-.888-.375Z"/></svg>';

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
			wrapperCards.scrollBy({
				top: 0,
				left: windowWidth / 2.3,
				behavior: 'smooth'
			});
		} else if (direction === 'previous') {
			wrapperCards.scrollBy({
				top: 0,
				left: (windowWidth / 2.3) * -1,
				behavior: 'smooth'
			});
		}
	}
</script>

<svelte:window bind:outerWidth={windowWidth} />

<section class="focus wider">
	<div class="container">
		<button
			aria-label="Go to previous card in carousel"
			class="left_button"
			on:click={() => gotoCard('previous')}>{@html leftButton}</button
		>
		<div class="wrapper-cards" bind:this={wrapperCards}>
			{#each blogCards as blog, i}
				<article class="blog-selection">
					{blog.title}
					{blog.description}
					index {i}
				</article>
			{/each}
		</div>
		<button
			aria-label="Go to next card in carousel"
			class="right_button"
			on:click={() => gotoCard('next')}>{@html rightButton}</button
		>
	</div>
	<div bind:this={blog} class="wrapper">
		<h2>Read my blog</h2>
		<p>I don't just focus in one topic, so here's a some articles</p>
		<a bind:this={blogButton} href="{base}/blog">Go read the blog</a>
	</div>
</section>

<style>
	.container {
		display: flex;
		overflow-x: auto;
		white-space: nowrap;
	}

	button {
		display: grid;
		place-items: center;
		background-color: var(--clr-background-alt);
		color: var(--accent-orange);
		border-radius: 999px;
		border: 0.3rem solid var(--clr-background);
		/* height: 3rem; */
		aspect-ratio: 1;
		margin: auto;
		text-align: center;
		/* outline: 3px red solid; */
	}

	button:hover {
		border-color: var(--accent-orange);
	}

	.left_button {
		position: relative;
		left: 1.3rem;
	}

	.right_button {
		position: relative;
		right: 1.3rem;
	}

	section {
		min-height: min(100vh, 80rem);
		min-height: min(100dvh, 80rem);
		display: grid;
		place-content: center;
		padding: 6rem 0;
		text-align: center;
		grid-template-columns: minmax(min(30rem, 100%), 1fr) fit-content(100%);
		grid-auto-flow: row dense;
	}

	@media only screen and (max-width: 750px) {
		section {
			grid-template-columns: 1fr;
		}
	}

	.blog-selection {
		background-color: var(--clr-background-alt);
		text-align: center;
		width: 100%;
		aspect-ratio: 1.618;
		display: inline-grid;
		scroll-snap-align: center;
		scroll-snap-type: x mandatory;
	}

	.wrapper-cards {
		width: 100%;
		overflow-x: scroll;
		white-space: nowrap;
		scroll-snap-type: x mandatory;
		border-radius: 0.8rem;
		color: var(--clr-title);
	}

	/* Hide scrollbar for Chrome, Safari and Opera */
	.wrapper-cards::-webkit-scrollbar {
		display: none;
	}

	/* Hide scrollbar for IE, Edge and Firefox */
	.wrapper-cards {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}

	.wrapper {
		padding: 3rem 0;
		display: grid;
		place-content: start center;
	}
</style>
