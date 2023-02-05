<script>
	import '../app.postcss';
	import ThemeSwitch from '../lib/ThemeSwitch.svelte';
</script>

<ThemeSwitch classes="absolute top-1 right-2 text-base md:top-2 md:right-6 md:text-lg lg:top-6 lg:right-10 lg:text-3xl" />

<slot />
