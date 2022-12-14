<script lang="ts">
	import { onMount } from "svelte";

	var userScrollPos: number;
	var ulMobile: boolean;

	// List of navigation items
	const navItems = [
		{
			alt_label: `<i class="fa-solid fa-house"></i>`,
			label: "Home",
			href: "/"
		},
		{
			alt_label: `<i class="fa-solid fa-briefcase"></i>`,
			label: "Projects",
			href: "#projects"
		},
		{
			alt_label: `<i class="fa-solid fa-person"></i>`,
			label: "About",
			href: "#about"
		},
		{
			alt_label: `<i class="fa-solid fa-message"></i>`,
			label: "Contact",
			href: "#cta"
		},
		{
			alt_label: `<i class="fa-solid fa-phone"></i>`,
			label: "Resume",
			href: "#"
		}
	];

	function ulMobileDisable() {
		ulMobile = false;
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
		const mediaListener: MediaQueryList = window.matchMedia("(max-width: 43.75rem)");
		mediaListener.addEventListener('change', restoreMobileStatus);
	});
</script>

<svelte:window bind:scrollY={userScrollPos} />

<div class="wrapper-nav">
	<nav class:floating_nav={userScrollPos > 0}>
		<h3><a class:hide_logo={ulMobile} href="/">SZ</a></h3>
		<ul class:ulMobile>
			{#each navItems as item}
				<li>
					{#if ulMobile}
						<a href={item.href}>{@html item.alt_label}</a>
					{:else}
						<a href={item.href}>{item.label}</a>
					{/if}
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
		display: grid;
		place-items: center;
		width: 100%;
		position: fixed;
		z-index: 9999;
	}

	nav {
		transition: all 0.3s cubic-bezier(0.07, 0.95, 0, 1);

		display: flex;
		align-items: center;
		justify-content: space-between;

		margin-top: 0;
		width: min(100% - calc(var(--padding) * 2), var(--max-content-width));

		height: 100px;
		text-shadow: 3px 6px 9px rgba(0, 0, 0, 0.3);

		/* The transition will use white at the start so we define the color here */
		border-color: var(--cc2-bg-status);
		border-width: 0.15rem;
		border-radius: 1rem;
	}

	.floating_nav {
		margin-top: 1rem;
		width: min(100% - 2rem, var(--max-content-width));
		height: 66px;

		border-style: solid;

		/* Blur in the background */
		background-color: rgba(35 33 50 / 66%);
		--blur: 12px;
		-webkit-backdrop-filter: blur(var(--blur));
		backdrop-filter: blur(var(--blur));

		padding-inline: calc(var(--padding) / 2);
	}

	ul {
		display: none;
		list-style: none;
		gap: 1.3rem;
	}

	a {
		font-size: clamp(1rem, 10vw, 1.2rem);
	}

	button {
		z-index: 9999;
		height: 100%;
		width: 3rem;
	}

	.ulMobile {
		width: 100%;
		display: inline-flex;
		justify-content: space-evenly;
	}

	.hide_logo {
		display: none;
	}

	@media only screen and (min-width: 43.75rem) {
		/* Hide the button on big enough screens. */
		button {
			display: none;
		}

		ul {
			/* display: flex; */
			display: inline-flex;
		}
	}
</style>
