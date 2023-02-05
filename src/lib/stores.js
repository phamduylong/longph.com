import { writable } from 'svelte/store';
import { browser } from '$app/environment';
const STORAGE_KEY = 'stored-theme';
let init_theme = "light";

//check if initial theme is available
if (browser) {
	if (typeof localStorage && localStorage.getItem(STORAGE_KEY) !== null)
		init_theme = localStorage.getItem(STORAGE_KEY);
	else { localStorage.setItem(STORAGE_KEY, init_theme); }
}

function createThemeStore() {
	const { subscribe, set } = writable(init_theme);

	return {
		subscribe,
		setDarkTheme: () => set('dark'),
		setLightTheme: () => set('light')
	};
}

const theme = createThemeStore();

export { theme };
