<script lang="ts">
	// import { snapToggle } from '$lib/components/LockSnap/store';
	import Presentation from '$lib/components/Presentation.svelte';
	import PresentationBlog from '$lib/components/PresentationBlog.svelte';
	import { DESCRIPTION, TITLE, URL } from '$lib/config';
	// import { onMount } from 'svelte';

	// let currentIndex = 0;
	// let main: HTMLElement;
	// let section1: HTMLElement;
	// let observer: IntersectionObserver;

	// let sections: Array<HTMLElement>;

	// onMount(() => {
	// 	sections = [main, section1];

	// 	observer = new IntersectionObserver(entries => {
	// 		entries.forEach(entry => {
	// 			if (entry.isIntersecting) {
	// 				const currentSection = entry.target;
	// 				currentSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
	// 			}
	// 		});
	// 	});

	// 	window.addEventListener('wheel', event => {
	// 		snapToggle.subscribe(value => {
	// 			if (value) {
	// 				if (event.deltaY > 0) {
	// 					currentIndex = Math.min(currentIndex + 1, sections.length - 1);
	// 				} else {
	// 					currentIndex = Math.max(currentIndex - 1, 0);
	// 				}

	// 				document.body.scrollTop = sections[currentIndex].offsetTop;
	// 				document.documentElement.scrollTop = sections[currentIndex].offsetTop;
	// 			}
	// 		});
	// 	});

	// 	snapToggle.subscribe(value => {
	// 		if (value) {
	// 			sections.forEach(section => observer.observe(section));
	// 		} else {
	// 			sections.forEach(section => observer.unobserve(section));
	// 		}
	// 	});
	// });
</script>

<!-- <main bind:this={main}> -->
<main>
	<Presentation />
</main>
<!-- TODO(santigo-zero): Avoid using this br -->
<!-- Use the options for the IntersectionObserver API to not snap immediately -->
<br />
<!-- <section bind:this={section1}> -->
<section id="blog">
	<PresentationBlog />
</section>

<section id="projects" />

<section id="contact" />

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
