import { base } from '$app/paths'
import { writable } from 'svelte/store'

type NavItems = Array<{
  label?: string
  href?: string
  decoration?: string
  separator?: string
}>

export const navStore = writable<NavItems>([
  { label: 'Home', href: `${base}/` }
])
