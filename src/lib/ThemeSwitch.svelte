<script lang="ts">
	export let classes : string = '';
	import { theme } from './stores';
	$: icon = $theme === 'dark' ? '☀️' : '🌙';

	async function toggleTheme() : Promise<void> {
		if ($theme === 'dark') await theme.setLightTheme();
		else await theme.setDarkTheme();
	}
</script>

<button class={classes} on:click={toggleTheme} tabindex="-1">{icon}</button>
