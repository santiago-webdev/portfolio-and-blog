<script lang="ts">
	var userScrollPos: number;

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

<div class="wrapper-nav" class:wrapper-nav-scrolled={userScrollPos > 0}>
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
		transition: all 0.6s cubic-bezier(0.07, 0.95, 0, 1);
		position: fixed;
		/* position: sticky; */
		/* top: 0; */
		width: 100%;

		background-color: var(--cc2-bg);

		font-size: 20px;
		font-family: 'Basier Square', sans-serif;
		height: 100px;

    z-index: 9999;
	}

	.wrapper-nav-scrolled {
		box-shadow: 3px 6px 9px rgba(0, 0, 0, 0.1);
		background-color: rgba(35, 33, 50, 0.6);
		-webkit-backdrop-filter: blur(13px);
		backdrop-filter: blur(13px);
		height: 60px;
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
		gap: 2rem;
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

	button {
		background: none;
		color: inherit;
		border: none;
		padding: 0;
		font: inherit;
		cursor: pointer;
	}

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
