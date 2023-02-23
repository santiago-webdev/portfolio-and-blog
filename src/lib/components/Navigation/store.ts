import { base } from '$app/paths';
import type { SvelteComponent } from 'svelte';
import { writable } from 'svelte/store';

type NavItems = Array<{
  label?: string;
  href?: string;
  decoration?: string;
  separator?: boolean;
}>;

export const navItems = writable<NavItems>([
  { label: 'Home', href: `${base}/` }
]);

type NavElements = Array<{
  component?: typeof SvelteComponent
}>

export const navElements = writable<NavElements>([]);
