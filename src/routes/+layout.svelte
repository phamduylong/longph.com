<script lang="ts">
	import '../app.postcss';
	import ThemeSwitch from '../lib/components/ThemeSwitch.svelte';
	import { theme } from '../lib/assets/stores';
	import '$lib/assets/styles/vendor.css';
</script>

<!-- Theme to be initiated here so that it doesn't flash a theme change before page content loads up -->
{#await theme.init()}
	<span />
{:then}
	<ThemeSwitch
		classes="bg-coral rounded-lg p-0.5 absolute top-2 right-2 text-xs md:top-6 md:right-6 md:text-lg lg:rounded-xl lg:text-base lg:p-2"
	/>
	<slot />
{/await}
