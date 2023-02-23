import { base } from '$app/paths';
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
