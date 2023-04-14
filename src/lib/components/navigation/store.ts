import { base } from '$app/paths'
import { writable } from 'svelte/store'

type NavItem = {
  label: string
  href: string
  classes?: string
}

const navItems: NavItem[] = [
  { label: 'Home', href: `${base}/` },
  { label: 'Blog', href: `${base}/blog` },
  { label: 'Projects', href: `${base}/projects` },
  { label: 'Separator', href: `` },
  { label: 'About', href: `${base}/about` },
  { label: 'Contact', href: `${base}/contact`, classes: 'block' },
]

export const navigationItems = writable<Array<NavItem>>(navItems)
