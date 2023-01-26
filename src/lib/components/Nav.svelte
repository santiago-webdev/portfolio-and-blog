<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';

	let y = 0;
	export let pageHeight = 0;
	$: windowHeight = 0;
	$: pageHeightWithoutWindow = pageHeight - windowHeight;

	const navItems = [
		// { label: 'Home', href: `${base}/` },
		{ label: 'Blog', href: `${base}/blog` },
		{ label: 'Projects', href: `${base}/projects` }
		// { label: 'About', href: `${base}/about` },
		// { label: 'Contact', href: `${base}/contact` }
	];
</script>

<svelte:window bind:innerHeight={windowHeight} bind:scrollY={y} />

<header style:position={$page.url.pathname === `/${base}` ? 'fixed' : 'sticky'}>
	<a href="{base}/">Logo</a>
	<nav>
		<ul class="flex">
			{#each navItems as item}
				<li>
					<a href={item.href}>{item.label}</a>
				</li>
			{/each}
		</ul>
	</nav>
	<progress max={pageHeightWithoutWindow} value={y} />
</header>

<style>
	ul {
		display: flex;
		flex-direction: row;
		place-items: center;
	}

	header {
		top: 6px;
		left: 0;
		right: 0;
		display: flex;
		place-items: center;
		place-content: center;
		justify-content: space-between;
		width: min(100% - 3rem, var(--wide));
		margin-inline: auto;
		/* outline: 3px red solid; */
	}

	a {
		padding: 1rem;
		font-weight: bold;
		font-size: clamp(0.6rem, 8vw, 1.2rem);
	}

	progress {
		top: 0;
		left: 0;
		right: 0;
		position: fixed;
		/* width: min(100% - 3rem, var(--wide)); */
		width: 100%;
		margin-inline: auto;
		border-radius: 0;
		height: 6px;
		border: 0;
	}

	progress::-webkit-progress-bar,
	progress {
		background: transparent;
	}

	progress::-moz-progress-bar {
		background: var(--fg1);
	}
	progress::-webkit-progress-value {
		background: var(--fg1);
	}
</style>
