import { base } from '$app/paths';
import type { SvelteComponent } from 'svelte';
import { writable } from 'svelte/store';

type NavItems = Array<{
  label: string;
  href: string;
  decoration?: string;
  separator?: boolean;
}>;

export const navItems = writable<NavItems>([
  { separator: true, label: 'Home', href: `${base}/` },
  { label: 'Blog', href: `${base}/blog` },
  { label: 'Projects', href: `${base}/projects` },
  { separator: true, label: 'About', href: `${base}/about` },
  { label: 'Contact', href: `${base}/contact`, decoration: 'border' }
]);

type NavElements = Array<{
  component?: typeof SvelteComponent;
}>;

export const navElements = writable<NavElements>([]);
