<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';

	let y = 0;
	export let pageHeight = 0;
	$: windowHeight = 0;
	$: pageHeightWithoutWindow = pageHeight - windowHeight;

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

<svelte:window bind:innerHeight={windowHeight} bind:scrollY={y} />

<!-- <header style:position={$page.url.pathname === `/${base}` ? 'fixed' : 'sticky'}> -->
<header>
	<a href="{base}/">Logo</a>
	<nav>
		<ul class="flex">
			{#each navItems as item}
				<li>
					<a
						href={item.href}
						class:current={matchBaseRoute(
							item.href,
							$page.url.pathname.toString()
						)}>{item.label}</a
					>
				</li>
			{/each}
		</ul>
	</nav>
	<progress max={pageHeightWithoutWindow} value={y} />
</header>

<style>
	header {
		top: 3px;
		left: 0;
		right: 0;
		position: sticky;
		display: flex;
		place-items: center;
		justify-content: space-between;
		width: min(100% - 3rem, var(--wide));
		margin-inline: auto;
		/* outline: 3px red solid; */
		font-family: var(--ff-circle);
	}

	ul {
		display: flex;
		flex-direction: row;
		place-items: center;
	}

	a {
		padding: 2rem 1rem;
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

	.current {
		text-decoration: underline;
		text-decoration-thickness: 0.2ch;
		text-decoration-color: rgb(157, 161, 180);
	}

	/* header > a:first-child { */
	/* 	padding-left: 0; */
	/* } */

	/* ul li:last-child > a { */
	/* 	padding-right: 0; */
	/* 	margin-right: 1rem; */
	/* } */

	progress {
		top: 0;
		left: 0;
		right: 0;
		position: fixed;
		/* width: min(100% - 3rem, var(--wide)); */
		width: 100%;
		margin-inline: auto;
		border-radius: 0;
		height: 3px;
		border: 0;
	}

	progress::-webkit-progress-bar,
	progress {
		background: transparent;
	}

	progress::-moz-progress-bar {
		background: var(--neutral-900);
	}
	progress::-webkit-progress-value {
		background: var(--neutral-900);
	}
</style>
