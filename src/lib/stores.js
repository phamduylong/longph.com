import { writable } from 'svelte/store';
import { asyncLocalStorage } from './asyncLocalStorage.js';
const STORAGE_KEY = 'stored-theme';

function createThemeStore() {
	const { subscribe, set } = writable('dark');

	return {
		subscribe,

		init: async () => {
			const stored_theme = await asyncLocalStorage.getItem(STORAGE_KEY);

			// Check if the user has a preference already
			if (stored_theme !== null) {
				set(stored_theme);
				document.firstElementChild.setAttribute('color-scheme', stored_theme);
			}

			// Fallback for first run
			else {
				const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
					? 'dark'
					: 'light';

				set(preferredTheme);
				document.firstElementChild.setAttribute('color-scheme', preferredTheme);
				await asyncLocalStorage.setItem(STORAGE_KEY, preferredTheme);
			}
		},

		setDarkTheme: async () => {
			set('dark');
			document.firstElementChild.setAttribute('color-scheme', 'dark');
			await asyncLocalStorage.setItem(STORAGE_KEY, 'dark');
		},

		setLightTheme: async () => {
			set('light');
			document.firstElementChild.setAttribute('color-scheme', 'light');
			await asyncLocalStorage.setItem(STORAGE_KEY, 'light');
		}
	};
}

const theme = createThemeStore();

export { theme };
