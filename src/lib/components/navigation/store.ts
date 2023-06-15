import { base } from '$app/paths';
import { writable } from 'svelte/store';
import type { NavItem } from '$lib/types';

const navItems: NavItem[] = [
	{ label: 'Home', href: `${base}/` },
	{ label: 'Blog', href: `${base}/blog` },
	{ label: 'Portfolio', href: `${base}/portfolio` },
	{ label: 'Separator', href: `` },
	{ label: 'About', href: `${base}/about` },
	{ label: 'Contact', href: `${base}/#contact` }
];

export const navigationItems = writable<Array<NavItem>>(navItems);
