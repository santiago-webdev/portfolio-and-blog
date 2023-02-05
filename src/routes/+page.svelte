<script lang="ts">
	import Presentation from '$lib/components/Presentation.svelte';
	import PresentationBlog from '$lib/components/PresentationBlog.svelte';
	import { DESCRIPTION, TITLE, URL } from '$lib/config';
	import { onMount } from 'svelte';

	let currentIndex = 0;
	let main: HTMLElement;
	let section1: HTMLElement;

	let sections: Array<HTMLElement>

	onMount(() => {
		const observer = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting && entry.target.parentNode) {
					currentIndex = Array.from(entry.target.parentNode.children).indexOf(
						entry.target
					);
				}
			});
		});

		// sections = document.querySelectorAll('main, #section1');
		sections = [
			main,
			section1
		]

		sections.forEach((section: any) => {
			observer.observe(section);
		});

		window.addEventListener('wheel', event => {
			if (event.deltaY > 0) {
				currentIndex = Math.min(currentIndex + 1, sections.length - 1);
			} else {
				currentIndex = Math.max(currentIndex - 1, 0);
			}

			document.body.scrollTop = sections[currentIndex].offsetTop;
			document.documentElement.scrollTop = sections[currentIndex].offsetTop;
		});
	});
</script>

<main bind:this={main}>
	<Presentation />
</main>
<section bind:this={section1}>
	<PresentationBlog />
</section>

<svelte:head>
	<title>{TITLE}</title>

	<!-- TODO(santigo-zero): meta tags for dynamic routing -->
	<!-- HTML Meta Tags -->
	<meta name="description" content={DESCRIPTION} />

	<!-- Google / Search Engine Tags -->
	<meta itemprop="name" content={TITLE} />
	<meta itemprop="description" content={DESCRIPTION} />
	<meta itemprop="image" content="" />
	<!-- TODO(santigo-zero): Add image -->

	<!-- Facebook Meta Tags -->
	<meta property="og:url" content={URL} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={TITLE} />
	<meta property="og:description" content={DESCRIPTION} />
	<meta property="og:image" content="" />
	<!-- TODO(santigo-zero): Add image -->

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={TITLE} />
	<meta name="twitter:description" content={DESCRIPTION} />
	<meta name="twitter:image" content="" />
	<!-- TODO(santigo-zero): Add image -->
</svelte:head>

<style>
	main {
		background-color: var(--clr-background-alt);
	}
</style>
