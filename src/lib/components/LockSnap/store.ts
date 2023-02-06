import { writable } from 'svelte/store';

const snapToggle = writable<boolean>(false);

export { snapToggle };
