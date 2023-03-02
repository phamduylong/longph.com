<script>
	import '../app.postcss';
	import ThemeSwitch from '../lib/ThemeSwitch.svelte';
	import { theme } from '$lib/stores';
</script>

{#await theme.init()}
<div></div>
{:then}
	<ThemeSwitch classes="bg-coral rounded-lg p-0.5 absolute top-2 right-2 text-base md:top-6 md:right-6 md:text-lg lg:rounded-xl lg:text-2xl lg:p-2" />
	<slot />
{/await}