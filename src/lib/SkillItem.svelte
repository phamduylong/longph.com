<script>
	export let skill = '',
		progress = '';
	import { Progressbar } from 'flowbite-svelte';
</script>

<div class="skill-items">
	{skill}<Progressbar {progress} size="h-3" color="green" />
</div>

<style>
	.skill-items {
		position: relative;
		display: inline-block;
		height: 2%;
		margin: 0 auto;
		padding: 5%;
		font-size: 1.25vw;
		width: 100%;
	}
</style>
