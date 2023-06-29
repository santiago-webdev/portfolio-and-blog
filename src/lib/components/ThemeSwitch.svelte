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
  class="tpl"
  aria-label="Theme switcher, current theme is {theme}"
  title="Theme switcher: Switch between a dark or light theme, or leave it to the system to decide"
>
  <div class="theme-wrapper" aria-hidden="true">
    <svg
      class="sun"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <g
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      >
        <circle cx="12" cy="12" r="4" />
        <path
          d="M12 3v1m0 16v1m-9-9h1m16 0h1m-2.636-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707.707"
        />
      </g>
    </svg>
    <svg
      class="moon"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 3a6 6 0 0 0 9 9a9 9 0 1 1-9-9Z"
      />
    </svg>
    <svg
      class="system"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 2a8 8 0 0 1 8 8a8 8 0 0 1-8 8V4Z"
      />
    </svg>
  </div>
  <span>Theme</span>
</button>

<style>
button {
  --bg: var(--clr-40);
  --brd: var(--clr-45);
  overflow: hidden;
  display: flex;
  flex-flow: row;
  place-content: center;
  padding: 0.2rem 0.8rem;
  border-radius: 9999rem;
  gap: 0.4rem;
  color: inherit;
}

@media screen and (min-width: 1280px) {
  span {
    display: none;
  }

  button {
    padding: 0.42rem;
  }
}

.theme-wrapper {
  color: inherit;
  position: relative;
  display: flex;
  place-content: center;
  place-items: center;
}

svg:first-child {
  position: absolute;
}

svg:nth-child(2) {
  position: absolute;
}

svg {
  pointer-events: none;
  display: flex;
  transition: transform 800ms cubic-bezier(0.3, 0, 0.3, 1);
}

.system {
  color: inherit;
  transform: translateY(3rem);
}

:global([data-theme='system'] .system),
:global([data-theme='system-light'] .system) {
  transform: translateX(0);
}

.sun {
  color: orangered;
  transform: rotate(180deg);
  transform-origin: 50% 3rem;
}

:global([data-theme='light'] .sun) {
  transform: rotate(0deg);
}

.moon {
  color: orange;
  transform: rotate(90deg);
  transform-origin: 50% -3rem;
}

:global([data-theme='dark'] .moon) {
  transform: rotate(0deg);
}
</style>
