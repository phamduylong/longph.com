<script>
	export let classes = '';
	import { theme } from './stores';
	$: icon = $theme === 'dark' ? '☀️' : '🌙';


	async function toggleTheme() {
		if ($theme === 'dark') await theme.setLightTheme();
		else  await theme.setDarkTheme();
	}
</script>

<div class={classes} on:click={toggleTheme} on:keypress>{icon}</div>
