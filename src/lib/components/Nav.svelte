<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';

	export let pageHeight = 0;

	let burger =
		'<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M7.95 11.95h32m-32 12h32m-32 12h32"/></svg>';
	// let cross =
	// 	'<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m11.25 4.75l-6.5 6.5m0-6.5l6.5 6.5"/></svg>';
	// let modal: HTMLDialogElement;
	// const closeModal = () => {
	// 	if (modal) modal.open ? modal.close() : null;
	// };
	// const openModal = () => modal.showModal();
	let toggleNav = false

	let y = 0;
	let windowHeight = 0;
	let windowWidth = 0;

	const navItems = [
		{ label: 'Home', href: `${base}/` },
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

<header>
	<a href="{base}/">Logo</a>
	<nav>
		<button on:click={() => toggleNav = !toggleNav}>{@html burger}</button>
		<ul style:display={toggleNav ? '' : 'none'}>
			{#each navItems as item}
				<li>
					<a
						href={item.href}
						class:activeRoute={matchBaseRoute(
							item.href,
							$page.url.pathname.toString()
						)}>{item.label}</a
					>
				</li>
			{/each}
		</ul>
	</nav>
	<!-- <progress max={pageHeight - windowHeight} value={y} /> -->
</header>

<style>
	header {
		top: 0;
		left: 0;
		right: 0;
		position: sticky;
		display: flex;
		place-items: center;
		justify-content: space-between;
		width: min(100% - 1rem, var(--wide));
		margin-inline: auto;
		height: auto;
		font-family: var(--ff-circle);
	}

	a {
		/* padding: 2rem 1rem; */
		font-weight: bold;
		font-size: clamp(0.6rem, 8vw, 1.3rem);
		color: var(--gray-900);
		text-decoration: none;
		text-decoration-thickness: 0.2ch;
		text-decoration-color: rgb(157, 161, 180);
	}

	a:hover {
		color: var(--gray-500);
	}

	a:focus {
		color: var(--stone-900);
	}

	/* dialog { */
	/* 	border: 0.18rem solid var(--neutral-600); */
	/* 	border-radius: 0.6rem; */
	/* 	box-shadow: 0 0 1em rgb(0 0 0 / 0.3); */
	/* 	width: 100%; */
	/* 	height: 100%; */
	/* } */

	/* progress { */
	/* 	top: 0; */
	/* 	left: 0; */
	/* 	right: 0; */
	/* 	position: fixed; */
	/* 	width: 100%; */
	/* 	margin-inline: auto; */
	/* 	border-radius: 0; */
	/* 	height: 10px; */
	/* 	border: 0; */
	/* } */

	/* progress::-webkit-progress-bar, */
	/* progress { */
	/* 	background: transparent; */
	/* } */

	/* progress::-moz-progress-bar { */
	/* 	background: var(--neutral-900); */
	/* } */

	/* progress::-webkit-progress-value { */
	/* 	background: var(--neutral-900); */
	/* } */

	ul {
		gap: 1rem;
		display: flex;
		flex-direction: row;
		place-items: center;
	}

	.activeRoute {
		text-decoration: underline;
		text-decoration-thickness: 0.2ch;
		text-decoration-color: rgb(157, 161, 180);
	}
</style>
