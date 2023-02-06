import { writable } from 'svelte/store';

const snapToggle = writable<boolean>(true);

export { snapToggle };
