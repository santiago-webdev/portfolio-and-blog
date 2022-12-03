<script lang="ts">
	// import { onMount } from 'svelte';

	var userScrollPos: number;
	let prevPos: number;

	// List of navigation items
	const navItems = [
		{ label: 'Home', href: '/' },
		{ label: 'Projects', href: '#projects' },
		{ label: 'About', href: '#' },
		{ label: 'Resume', href: '#' },
		{ label: 'Contact', href: '#' }
	];

	function handleScroll(curPos): boolean {
		if (curPos > 0 && curPos >= prevPos) {
			// console.log('We are moving DOWN', Math.trunc(curPos), Math.trunc(prevPos));
			prevPos = curPos;
			return true;
		}
    prevPos = curPos;
    return false;
	}
</script>

<svelte:window bind:scrollY={userScrollPos} />

<div
	class="wrapper-nav"
	class:scrolled={userScrollPos > 0}
	class:hidden={handleScroll(userScrollPos)}
>
	<nav>
		<h3><a href="/">SZ</a></h3>
		<div>
			<div class="middle-line" />
		</div>
		<ul>
			{#each navItems as item}
				<li>
					<a href={item.href}>{item.label}</a>
				</li>
			{/each}
		</ul>
	</nav>
</div>

<style>
	.wrapper-nav {
		transition: all 0.6s cubic-bezier(0.07, 0.95, 0, 1);
		position: fixed;
		/* position: sticky; */
		/* top: 0; */
		width: 100%;

		/* background-color: var(--cc2-bg); */
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
		margin: 0 auto;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;

		max-width: var(--content-width);
		padding-inline: var(--padding-inline);
		height: 100%;
	}

	ul {
		gap: var(--padding);
		display: flex;
		list-style: none;
	}

	a {
		text-decoration: none;
		color: var(--cc-fg);
		transition: all 0.3s ease 0s;
	}

	a:hover {
		color: var(--cc4-fg);
	}

	h3 a {
		font-family: 'Inter', sans-serif;
		font-weight: 800;
	}

	/* button { */
	/* 	background: none; */
	/* 	color: inherit; */
	/* 	border: none; */
	/* 	padding: 0; */
	/* 	font: inherit; */
	/* 	cursor: pointer; */
	/* } */

	@media only screen and (max-width: 43.75rem) {
		* {
			/*CSS transitions*/
			-o-transition-property: none !important;
			-moz-transition-property: none !important;
			-ms-transition-property: none !important;
			-webkit-transition-property: none !important;
			transition-property: none !important;
			/*CSS transforms*/
			-o-transform: none !important;
			-moz-transform: none !important;
			-ms-transform: none !important;
			-webkit-transform: none !important;
			transform: none !important;
			/*CSS animations*/
			-webkit-animation: none !important;
			-moz-animation: none !important;
			-o-animation: none !important;
			-ms-animation: none !important;
			animation: none !important;
		}
	}
</style>
