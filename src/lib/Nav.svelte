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
		const mediaListener = window.matchMedia("(max-width: 43.75rem)");
		mediaListener.addListener(restoreMobileStatus);
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
		transition: all 0.6s cubic-bezier(0.07, 0.95, 0, 1);

		display: flex;
		align-items: center;
		justify-content: space-between;

		margin-top: 0;
		width: min(100% - calc(var(--padding) * 2), var(--max-content-width));

		height: 100px;
		text-shadow: 3px 6px 9px rgba(0, 0, 0, 0.3);

		/* The transition will use white at the start so we define the color here */
		border-color: #2a2b37;
	}

	.floating_nav {
		margin-top: 1rem;
		width: min(100% - 2rem, var(--max-content-width));
		height: 66px;

		border-style: solid;
		border-width: 0.2rem;
		border-radius: 1rem;

		/* Blur in the background */
		box-shadow: 0 0 0.9rem 0.2rem rgb(0 0 0 / 23%);
		background-color: rgba(42, 43, 56, 0.8);
		-webkit-backdrop-filter: blur(13px);
		backdrop-filter: blur(13px);

		padding-inline: calc(var(--padding) / 2);
	}

	ul {
		display: none;
		list-style: none;
		gap: 1.3rem;
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
