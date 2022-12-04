<script lang="ts">
	import { onMount } from 'svelte';

	var userScrollPos: number;
	var prevPos: number;
	var ulMobile: boolean;

	// List of navigation items
	const navItems = [
		{ label: 'Home', href: '/' },
		{ label: 'Projects', href: '#projects' },
		{ label: 'About', href: '#' },
		{ label: 'Resume', href: '#' },
		{ label: 'Contact', href: '#' }
	];

	function ulMobileDisable() {
		ulMobile = false;
	}

	function handleScroll(curPos): boolean {
		ulMobileDisable();
		if (curPos > 0 && curPos >= prevPos) {
			// console.log('We are moving DOWN', Math.trunc(curPos), Math.trunc(prevPos));
			prevPos = curPos;
			return true;
		}
		prevPos = curPos;
		return false;
	}

	// Media match query handler
	const restoreMobileStatus = (e) => {
		// Reset mobile state
		if (!e.matches) {
			ulMobileDisable();
		}
	};

	const toggleMobileClick = () => (ulMobile = !ulMobile);

	// Attach media query listener on mount hook
	onMount(() => {
		const mediaListener = window.matchMedia('(max-width: 767px)');

		mediaListener.addListener(restoreMobileStatus);
	});
</script>

<svelte:window bind:scrollY={userScrollPos} />

<div
	class="wrapper-nav"
	class:scrolled={userScrollPos > 0}
	class:hidden={handleScroll(userScrollPos)}
>
	<nav>
		<h3><a href="/">SZ</a></h3>
		<ul class:ulMobile>
			{#each navItems as item}
				<li>
					<a on:click={restoreMobileStatus} href={item.href}>{item.label}</a>
				</li>
			{/each}
		</ul>
		<button aria-hidden="true" on:click={toggleMobileClick}>
			{#if ulMobile}
				<i class="fa-solid fa-xmark" />
			{:else}
				<i class="fa-solid fa-bars" />
			{/if}
		</button>
	</nav>
</div>

<style>
	.wrapper-nav {
		position: fixed;
		width: 100%;

		display: grid;
		place-items: center;

		background-color: transparent;

		font-size: 20px;
		font-family: 'Basier Square', sans-serif;
		height: 90px;

		z-index: 9999;
	}

	.scrolled {
		box-shadow: 0 -0.4rem 0.9rem 0.2rem rgb(0 0 0 / 30%);
		background-color: rgba(35, 33, 50, 0.6);
		-webkit-backdrop-filter: blur(13px);
		backdrop-filter: blur(13px);
		height: 60px;
	}

	.hidden {
		transform: translate(0, -130%);
	}

	nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: min(100% - var(--padding), var(--max-content-width));
		height: 100%;
	}

	ul {
		display: flex;
		list-style: none;
	}

	a {
		text-decoration: none;
		color: var(--cc-fg);
		transition: all 0.3s ease 0s;
		padding: var(--padding) var(--padding-inline);
	}

	a:hover {
		color: var(--cc4-fg);
	}

	h3 a {
		font-family: 'Inter', sans-serif;
		font-weight: 800;
	}

	button {
		display: none;
	}

	@media only screen and (max-width: 43.75rem) {
		button {
			display: block;
			z-index: 9999;

			background-color: inherit;
			color: var(--cc2-fg);
			border: none;
			font: inherit;
			cursor: pointer;
			height: 100%;
      width: min(3rem);
		}

		ul {
			display: none;
		}

		.ulMobile {
			position: fixed;
			display: flex;
			flex-direction: column;
			place-items: center;
			/* justify-content: space-evenly; */
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			padding: 0;
			margin: 0;
			width: 100vw;
			height: 100vh;
			padding-top: 3rem;
			gap: var(--padding);

			/* Blur in the background */
			box-shadow: 0 -0.4rem 0.9rem 0.2rem rgb(0 0 0 / 30%);
			background-color: rgba(35, 33, 50, 0.6);
			-webkit-backdrop-filter: blur(13px);
			backdrop-filter: blur(13px);
		}
	}
</style>
