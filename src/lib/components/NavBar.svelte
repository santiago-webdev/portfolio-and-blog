<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import SwitchButton from './ThemeSwitcher/SwitchButton.svelte';

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

	const navItems = [
		// { label: 'Home', href: `${base}/` },
		{ label: 'Projects', href: `${base}/projects` },
		{ label: 'Blog', href: `${base}/blog` },
		{ label: 'About', href: `${base}/about` },
		{ label: 'Contact', href: `${base}/contact` }
	];

	function matchBaseRoute(navItemLink: string, currentLink: string) {
		if (navItemLink === '/') {
			if (navItemLink === currentLink) {
				return true;
			} else {
				return false;
			}
		}

		return currentLink.match(navItemLink) !== null;
	}
</script>

<svelte:window
	bind:outerWidth={windowWidth}
	bind:innerHeight={windowHeight}
	bind:scrollY={y}
/>

<!-- TODO(santigo-zero): False positive with blur-bg when navigating -->
<!-- <div class:blur-bg={y || showMobile} class="header-wrapper"> -->
<div class="header-wrapper">
	<header style:flex-direction={desktop ? 'row' : 'column'}>
		<div class="main-header">
			<a href="{base}/">Santiago Gonzalez</a>
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
		<nav style:display={showMobile || desktop ? 'grid' : 'none'}>
			<ul style:flex-direction={desktop ? 'row' : 'column'}>
				<li><SwitchButton /></li>
				{#each navItems as item}
					<li>
						<a
							href={item.href}
							class:activeRoute={matchBaseRoute(
								item.href,
								$page.url.pathname.toString()
							)}
							on:click={toggleMobile}>{item.label}</a
						>
					</li>
					<hr style:display={!desktop ? 'block' : 'none'} style="width: 80%" />
				{/each}
			</ul>
		</nav>
	</header>
</div>

<style>
	.header-wrapper {
		width: 100%;
		top: 0;
		left: 0;
		right: 0;
		position: sticky;
		transition: all 0.3s ease-in-out;
		/* TODO(santigo-zero): Make this change the color based on scroll position */
		background-color: var(--clr-background-alt);
	}

	header {
		display: flex;
		justify-content: space-between;
		width: min(100% - 1rem, var(--wide) * 1.6);
		margin-inline: auto;
		/* height: auto; */
		font-family: var(--ff-circle);
	}

	.main-header {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}

	a {
		font-weight: bold;
		font-size: clamp(0.6rem, 8vw, 1.1rem);
		/* text-decoration: none; */
		/* text-decoration-thickness: 0.2ch; */
		/* text-decoration-color: var(--clr-text); */
	}

	button,
	a {
		color: var(--clr-text);
		padding: 0.7rem 0.3rem;
		margin: 0.6rem 0;
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
		gap: 0 1rem;
		display: flex;
		flex-direction: row;
		place-items: center;
	}

	.activeRoute {
		background-color: #502e3a;
		/* text-decoration: underline; */
		/* text-decoration-thickness: 0.2ch; */
		/* text-decoration-color: rgb(157, 161, 180); */
	}
</style>
