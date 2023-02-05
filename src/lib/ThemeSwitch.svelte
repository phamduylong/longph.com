<script>
	const STORAGE_KEY = 'stored-theme';
	export let classes = '';
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import { theme } from './stores';
	$: icon = $theme === 'dark' ? '☀️' : '🌙';

	onMount(() => {
		if (browser) {
			const pref = localStorage.getItem(STORAGE_KEY);
            pref === "dark" ? theme.setDarkTheme() : theme.setLightTheme();
		}
        document.firstElementChild.setAttribute('color-scheme', $theme);
	});

	function toggleTheme() {
		if ($theme === 'dark') theme.setLightTheme();
		else theme.setDarkTheme();
		document.firstElementChild.setAttribute('color-scheme', $theme);
		localStorage.setItem(STORAGE_KEY, $theme);
	}

	onDestroy(() => {
		if (browser) localStorage.setItem(STORAGE_KEY, $theme);
	});
</script>

<div class={classes} on:click={toggleTheme} on:keypress={() => {}}>{icon}</div>
