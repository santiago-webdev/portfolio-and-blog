import { browser } from '$app/environment';
import { writable } from 'svelte/store';

type ThemeMode = 'system' | 'light' | 'dark';

const prefersDark =
	(browser && window.matchMedia('(prefers-color-scheme: dark)').matches) ||
	false;

const getFromLocalStorage = (): ThemeMode => {
	if (typeof window === 'undefined') return 'system';

	const themeLocalStorage = window.localStorage.getItem('theme');
	if (themeLocalStorage) {
		const theme = themeLocalStorage as ThemeMode;
		if (theme === 'system' && prefersDark) return 'dark';
		if (theme === 'system' || theme === 'light' || theme === 'dark') {
			return theme;
		}
	}

	return 'system';
};

const setThemeLocalStorage = (theme: ThemeMode) => {
	if (typeof window === 'undefined') return;

	window.localStorage.setItem('theme', theme);
};

const setThemeBrowser = (theme: ThemeMode) => {
	if (typeof document === 'undefined') return;

	if (theme === 'system' && prefersDark) {
		document.documentElement.dataset.theme = 'dark';
		return;
	}

	document.documentElement.dataset.theme = theme;
};

const theme = writable<ThemeMode>(getFromLocalStorage());

theme.subscribe(async theme => {
	setThemeBrowser(theme);
	setThemeLocalStorage(theme);
});

export default theme;
