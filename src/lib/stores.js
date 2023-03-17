import { writable } from 'svelte/store';
import { asyncLocalStorage } from './asyncLocalStorage.js';
let init_theme;
const STORAGE_KEY = 'stored-theme';

function createThemeStore() {
	const { subscribe, set } = writable( "dark" );

	return {
		subscribe,
		init: async () => { init_theme = await asyncLocalStorage.getItem(STORAGE_KEY); set(init_theme); document.firstElementChild.setAttribute('color-scheme', init_theme) },
		setDarkTheme: async () => {set('dark'); document.firstElementChild.setAttribute('color-scheme', "dark"); await asyncLocalStorage.setItem(STORAGE_KEY, "dark"); },
		setLightTheme: async () => {set('light'); document.firstElementChild.setAttribute('color-scheme', "light"); await asyncLocalStorage.setItem(STORAGE_KEY, "light");}
	};
}

const theme = createThemeStore();

export { theme };
