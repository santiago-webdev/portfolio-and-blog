<script lang="ts">
	import { base } from '$app/paths';
	import { navigating, page } from '$app/stores';
	import SwitchButton from './ThemeSwitcher/SwitchButton.svelte';
	// import SnapToggle from './LockSnap/SnapToggle.svelte';

	let burger =
		'<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M7.95 11.95h32m-32 12h32m-32 12h32"/></svg>';
	let cross =
		'<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m11.25 4.75l-6.5 6.5m0-6.5l6.5 6.5"/></svg>';
	let showMobile = false;
	let desktop = false;

	const toggleMobile = () => (showMobile = !showMobile);

	let y = 0;
	$: windowHeight = 0;
	let windowWidth = 0;
	$: {
		if (windowWidth > 700) {
			desktop = true;
		} else {
			desktop = false;
		}
	}

	export let pageHeight = 0;
	$: pageHeightWithoutWindow = pageHeight - windowHeight;

	$: if ($navigating || desktop || y) {
		showMobile = false;
	}

	// Why does the logo flickers each time we click in "About"?
	// $: console.log('showMobile ->', showMobile)

	type NavItems = Array<{
		label?: string;
		href?: string;
		separator?: string;
	}>;

	const navItems = [
		{ separator: '|' },
		{ label: 'Home', href: `${base}/` },
		{ label: 'Projects', href: `${base}/projects` },
		{ label: 'Blog', href: `${base}/blog` },
		{ separator: '|' },
		{ label: 'About', href: `${base}/#blog` },
		{ label: 'Contact', href: `${base}/contact` }
	] satisfies NavItems;
</script>

<svelte:window
	bind:outerWidth={windowWidth}
	bind:innerHeight={windowHeight}
	bind:scrollY={y}
/>

<!-- TODO(santigo-zero): False positive with blur-bg when navigating -->
<!-- <div class:blur-bg={y || showMobile} class="header-wrapper"> -->
<!-- TODO(santigo-zero): Remove header and use something else. -->
<nav class:headerScroll={y} class:headerActive={y > 150 || showMobile}>
	<progress max={pageHeightWithoutWindow} value={y} />
	<div
		style:flex-direction={desktop ? 'row' : 'column'}
		class="nav-container wider"
	>
		<div class="main-nav">
			<a style:visibility={showMobile ? 'hidden' : 'visible'} href="{base}/"
				>Santiago Gonzalez</a
			>
			{#if !desktop}
				<button on:click={toggleMobile}>
					{#if !showMobile}
						{@html burger}
					{:else}
						{@html cross}
					{/if}
				</button>
			{/if}
		</div>
		<section style:display={showMobile || desktop ? 'grid' : 'none'}>
			<ul style:flex-direction={desktop ? 'row' : 'column'}>
				<!-- <li> -->
				<!-- 	<SnapToggle /> -->
				<!-- </li> -->
				<li>
					<SwitchButton />
				</li>
				{#each navItems as item}
					{#if item.href}
						<li
							style:display={item.label === 'Home' && desktop
								? 'none'
								: 'block'}
						>
							<a href={item.href} on:click={toggleMobile}>{item.label}</a>
						</li>
						<hr
							style:display={!desktop ? 'block' : 'none'}
							style="width: 80%"
						/>
					{:else}
						<li style:display={desktop ? 'block' : 'none'}>
							{@html item.separator}
						</li>
					{/if}
				{/each}
			</ul>
		</section>
	</div>
</nav>

<style>
	/* TODO(santigo-zero): Try making the fonts slightly smaller when scrolling */
	nav {
		top: 0;
		position: sticky;
		background-color: var(--clr-background-alt);
		padding: clamp(0.6rem, 5vw, 2.3rem) 0;
		transition: background-color 666ms ease-in-out 0s,
			padding 333ms ease-in-out 0s;

		display: grid;
		place-items: center stretch;
		/* TODO(santigo-zero): Fix this */
	}

	@media (prefers-reduced-motion: reduce) {
		nav {
			padding: 0.6rem 0;
		}
	}

	.headerScroll {
		padding: 0.6rem 0;
	}

	.headerActive {
		background-color: var(--clr-background);
		filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04))
			drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
	}

	.nav-container {
		display: flex;
		justify-content: space-between;
		margin-inline: auto;
		/* height: auto; */
	}

	.main-nav {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}

	button,
	a,
	li {
		color: var(--clr-text);
	}

	button,
	a {
		padding: 0.7rem 0.3rem;
		display: grid;
		place-items: center;
		border-radius: 0.6rem;
		/* outline: 3px solid red; */
	}

	a:hover {
		color: var(--clr-hover);
		/* background-color: var(--clr-hover-bg); */
		/* text-decoration-color: var(--clr-hover); */
	}

	a:focus {
		color: var(--clr-clicked);
	}

	ul {
		gap: 1rem;
		display: flex;
		flex-direction: row;
		place-items: center;
	}

	/* ul > li:first-child { */
	/* 	background-color: red; */
	/* } */

	progress {
		width: 100%;
		height: 3px;
		/* This should be the same value for header { top: } */
		top: 0;
		border: 0;
		position: fixed;
	}

	/* TODO(santigo-zero): Make background-color match the navbar color even when scrolling */
	progress::-webkit-progress-bar,
	progress {
		background: inherit;
	}

	progress::-moz-progress-bar {
		background: var(--accent-peachy);
	}

	progress::-webkit-progress-value {
		background: var(--accent-peachy);
	}

	a,
	button {
		font-weight: 400;
		font-size: clamp(0.6rem, 8vw, 1.15rem);
		color: var(--clr-title);
	}
</style>
