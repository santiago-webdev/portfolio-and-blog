<script lang="ts">
	import { onMount } from 'svelte';
	import type { Theme } from '$lib/types';

	let theme: Theme = 'system',
		prefers_light = true;

	function toggleTheme() {
		switch (theme) {
			case 'system':
			case 'system-light':
				theme = 'dark';
				break;
			case 'dark':
				theme = 'light';
				break;
			case 'light':
				if (prefers_light) theme = 'system-light';
				else theme = 'system';
				break;
			default:
				return (prefers_light && 'system-light') || 'system';
		}
	}

	function setThemeCookie() {
		const ONE_YEAR_IN_MS = 31_536_000_000; // number of milliseconds in one year
		const expireDate = new Date(Date.now() + ONE_YEAR_IN_MS); // set expiration date to one year from now
		document.cookie = `theme=${theme}; expires=${expireDate.toUTCString()}; path=/; SameSite=None; secure=true;`;
	}

	function setThemeLocalStorage() {
		localStorage.setItem('theme', theme);
	}

	function click() {
		toggleTheme();
		document.documentElement.dataset.theme = theme;
		setThemeCookie();
		setThemeLocalStorage();
	}

	onMount(() => {
		let doc = document.documentElement.dataset;
		theme = doc.theme as Theme;

		prefers_light = !window.matchMedia('(prefers-color-scheme: dark)').matches;
		window
			.matchMedia('(prefers-color-scheme: dark)')
			.addEventListener('change', (event: MediaQueryListEvent) => {
				prefers_light = !event.matches;

				if (theme.startsWith('system')) {
					event.matches ? (theme = 'system') : (theme = 'system-light');
					doc.theme = theme;
				}
			});
	});
</script>

<button
	on:click={click}
	class="shiny"
	aria-label="Theme switcher, current theme is {theme}"
	title="Theme switcher: Switch between a dark or light theme, or leave it to the system to decide"
>
	<div class="theme-wrapper" aria-hidden="true">
		<iconify-icon width="28" height="28" icon="lucide:sun" />
		<iconify-icon width="28" height="28" icon="lucide:moon" />
		<iconify-icon width="28" height="28" icon="mdi:circle-half-full" />
	</div>
	<span>Theme</span>
</button>

<style>
	button {
		overflow: hidden;
		display: flex;
		flex-flow: row;
		padding: 0.4rem 0.8rem;
		border-radius: 0.8rem;
		gap: 0.4rem;
	}

	@media screen and (min-width: 1280px) {
		span {
			display: none;
		}

		button {
			padding: 0.4rem;
			border-radius: 100%;
		}
	}

	.theme-wrapper {
		/* height: 100%; */
		/* width: 100%; */
		/* margin-inline: auto; */
		position: relative;

		display: flex;

		place-content: center;
		place-items: center;
	}

	iconify-icon:first-child {
		position: absolute;
	}

	iconify-icon:nth-child(2) {
		position: absolute;
	}

	iconify-icon {
		pointer-events: none;
		/* margin-inline: auto; */
		display: flex;
		transition: all 300ms cubic-bezier(0.3, 0, 0.3, 1);
	}

	[icon='mdi:circle-half-full'] {
		color: var(--clr-100);
		transform: translateX(15rem);
	}

	:global([data-theme='system'] [icon='mdi:circle-half-full']),
	:global([data-theme='system-light'] [icon='mdi:circle-half-full']) {
		transform: translateX(0);
	}

	[icon='lucide:sun'] {
		color: orangered;
		transform: rotate(90deg);
		transform-origin: 50% 6rem;
	}

	:global([data-theme='light'] [icon='lucide:sun']) {
		transform: rotate(0deg);
	}

	[icon='lucide:moon'] {
		color: orange;
		transform: rotate(-90deg);
		transform-origin: -50% -6rem;
	}

	:global([data-theme='dark'] [icon='lucide:moon']) {
		transform: rotate(0deg);
	}
</style>
