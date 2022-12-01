<script lang="ts">
  var userScrollPos: number

	// List of navigation items
	const navItems = [
		{ label: 'Home', href: '/' },
		{ label: 'Projects', href: '#projects' },
		{ label: 'About', href: '#' },
		{ label: 'Resume', href: '#' },
		{ label: 'Contact', href: '#' }
	];

	import { onMount } from 'svelte';

	// Show mobile icon and display menu
	let showMobileMenu = false;

	// Mobile menu click event handler
	const handleMobileIconClick = () => (showMobileMenu = !showMobileMenu);

	// Media match query handler
	const mediaQueryHandler = (e) => {
		// Reset mobile state
		if (!e.matches) {
			showMobileMenu = false;
		}
	};

	// Attach media query listener on mount hook
	onMount(() => {
		const mediaListener = window.matchMedia('(max-width: 767px)');

		mediaListener.addListener(mediaQueryHandler);
	});
</script>

<svelte:window bind:scrollY={userScrollPos} />

<div
	class="wrapper-nav"
  class:wrapper-nav-scrolled={userScrollPos > 0}
>
	<nav>
		<h3><a href="/">SG</a></h3>
		<div
			on:click={handleMobileIconClick}
			class={`mobile-icon${showMobileMenu ? ' active' : ''}`}
		>
			<div class="middle-line" />
		</div>
		<ul class={`navbar-list${showMobileMenu ? ' mobile' : ''}`}>
			{#each navItems as item}
				<li on:click={showMobileMenu && handleMobileIconClick}>
					<a href={item.href}>{item.label}</a>
				</li>
			{/each}
		</ul>
	</nav>
</div>

<style>
	.hideNav {
		transform: translate(0, calc(-100% - 3rem));
	}

	.wrapper-nav {
		transition: 0.6s ease;
		position: fixed;
		/* position: sticky; */
		/* top: 0; */
		width: 100%;

		background-color: var(--cc2-bg);

		font-size: 20px;
		font-family: 'Basier Square', sans-serif;
	}

	.wrapper-nav-scrolled {
		box-shadow: 3px 6px 9px rgba(0, 0, 0, 0.1);
		background-color: rgba(35, 33, 50, 0.6);
		-webkit-backdrop-filter: blur(13px);
		backdrop-filter: blur(13px);
	}

	nav {
		display: flex;
		margin: 0 auto;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;

		max-width: var(--content-width);
		/* padding: var(--padding); */
		padding-inline: var(--padding-inline);
		height: 50px;
		transition: all 0.4s;

		/* border-color: blue; */
		/* border-style: solid; */
	}

	ul {
		gap: 2rem;
		display: flex;
		list-style: none;
		display: none;
	}

	.navbar-list.mobile {
		background-color: rgba(35, 33, 50, 0.6);
		-webkit-backdrop-filter: blur(13px);
		backdrop-filter: blur(13px);
		position: fixed;

		display: flex;
		flex-direction: column;
		place-items: center;
		height: 100vh;
    padding-top: 2rem;
    /* margin: 0 auto; */

		bottom: 0;
		left: 0;
		top: 0;
		right: 0;
	}

	a {
		text-decoration: none;
		color: var(--cc-fg);
		transition: all 0.3s ease 0s;

		/* padding: 0 var(--padding); */
	}

	a:hover {
		color: var(--cc4-fg);
	}

	h3 a {
		font-family: 'Inter', sans-serif;
		font-weight: 800;
	}

	button {
		background: none;
		color: inherit;
		border: none;
		padding: 0;
		font: inherit;
		cursor: pointer;
	}

	/* All settings for the animated button */
	.mobile-icon {
		width: 25px;
		height: 14px;
		position: relative;
		cursor: pointer;
		z-index: 999;
	}

	.mobile-icon:after,
	.mobile-icon:before,
	.middle-line {
		content: '';
		position: absolute;
		width: 100%;
		height: 2px;
		background-color: #fff;
		transition: all 0.4s;
		transform-origin: center;
	}

	.mobile-icon:before,
	.middle-line {
		top: 0;
	}

	.mobile-icon:after,
	.middle-line {
		bottom: 0;
	}

	.mobile-icon:before {
		width: 66%;
	}

	.mobile-icon:after {
		width: 33%;
	}

	.middle-line {
		margin: auto;
	}

	.mobile-icon:hover:before,
	.mobile-icon:hover:after,
	.mobile-icon.active:before,
	.mobile-icon.active:after,
	.mobile-icon.active .middle-line {
		width: 100%;
	}

	.mobile-icon.active:before,
	.mobile-icon.active:after {
		top: 50%;
		transform: rotate(-45deg);
	}

	.mobile-icon.active .middle-line {
		transform: rotate(45deg);
	}
	/* EOL All settings for the animated button */

	@media only screen and (min-width: 43.75rem) {
		nav {
			height: 100px;
		}

		.mobile-icon {
			display: none;
		}

		.navbar-list {
			display: flex;
			padding: 0;
		}

		.navbar-list a {
			display: inline-flex;
		}
	}
</style>
