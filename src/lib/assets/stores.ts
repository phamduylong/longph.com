import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import { asyncLocalStorage } from './asyncLocalStorage';
const STORAGE_KEY: string = 'stored-theme';

function createThemeStore() {
	const { subscribe, set } : Writable<string> = writable('dark');

	return {
		subscribe,

		init: async (): Promise<void> => {
			const stored_theme: string | null = await asyncLocalStorage.getItem(STORAGE_KEY);

			// Check if the user has a preference already
			if (stored_theme !== null) {
				set(stored_theme);
				if (document.firstElementChild !== null)
					document.firstElementChild.setAttribute('color-scheme', stored_theme);
			}

			// Fallback for first run
			else {
				const preferredTheme: string = window.matchMedia('(prefers-color-scheme: dark)').matches
					? 'dark'
					: 'light';

				set(preferredTheme);
				if (document.firstElementChild !== null)
					document.firstElementChild.setAttribute('color-scheme', preferredTheme);
				await asyncLocalStorage.setItem(STORAGE_KEY, preferredTheme);
			}
		},

		setDarkTheme: async (): Promise<void> => {
			set('dark');
			if (document.firstElementChild !== null)
				document.firstElementChild.setAttribute('color-scheme', 'dark');
			await asyncLocalStorage.setItem(STORAGE_KEY, 'dark');
		},

		setLightTheme: async (): Promise<void> => {
			set('light');
			if (document.firstElementChild !== null)
				document.firstElementChild.setAttribute('color-scheme', 'light');
			await asyncLocalStorage.setItem(STORAGE_KEY, 'light');
		}
	};
}

const theme = createThemeStore();

export { theme };
