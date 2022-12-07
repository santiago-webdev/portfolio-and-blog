<script lang="ts">
	// import { onMount } from "svelte";

	var userScrollPos: number;

	// List of navigation items
	const navItems = [
		{ label: "Home", href: "/" },
		{ label: "Projects", href: "#projects" },
		{ label: "About", href: "#about" },
		{ label: "Contact", href: "#cta" },
		{ label: "Resume", href: "#" }
	];
</script>

<svelte:window bind:scrollY={userScrollPos} />

<div class="wrapper-nav">
	<nav class:floating_nav={userScrollPos > 0}>
		<h3><a href="/">SZ</a></h3>
		<ul>
			{#each navItems as item}
				<li>
					<a href={item.href}>{item.label}</a>
				</li>
			{/each}
		</ul>
		<button aria-hidden="true">
			<i class="fa-solid fa-bars" />
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
		width: min(100% - calc(var(--padding) * 2), var(--max-content-width));

		height: 100px;
		text-shadow: 3px 6px 9px rgba(0, 0, 0, 0.3);

		/* The transition will use white at the start so we define the color here */
		border-color: #2a2b37;
	}

	.floating_nav {
		margin-top: 0.6rem;
		height: 66px;
		/* background-color: red; */

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

	a {
		text-decoration: none;
		color: var(--cc-fg);
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
