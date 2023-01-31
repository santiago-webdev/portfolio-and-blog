import { writable } from 'svelte/store';

type ThemeMode = 'system' | 'light' | 'dark';

const getFromCookie = (): ThemeMode => {
	if (typeof document === 'undefined') return 'system';

	const themeCookie = document.cookie
		.split(';')
		.find(c => c.trim().startsWith('theme='));
	if (themeCookie) {
		const theme = themeCookie.split('=')[1] as ThemeMode;
		if (
			theme === 'system' &&
			window.matchMedia('(prefers-color-scheme: dark)').matches
		)
			return 'dark';
		if (theme === 'system' || theme === 'light' || theme === 'dark') {
			return theme;
		}
	}

	return 'system';
};

const setThemeCookie = (theme: ThemeMode) => {
	if (typeof document === 'undefined') return;

	document.cookie = `theme=${theme};SameSite=None;Secure;expires=${new Date(
		Date.now() + 365 * 24 * 60 * 60 * 1000
	).toUTCString()}`;
};

const setThemeBrowser = (theme: ThemeMode) => {
	if (typeof document === 'undefined') return;

	if (
		theme === 'system' &&
		window.matchMedia('(prefers-color-scheme: dark)').matches
	) {
		document.documentElement.dataset.theme = 'dark';
		return;
	}

	document.documentElement.dataset.theme = theme;
};

const theme = writable<ThemeMode>(getFromCookie());

theme.subscribe(theme => {
	setThemeBrowser(theme);
	setThemeCookie(theme);
});

export default theme;
