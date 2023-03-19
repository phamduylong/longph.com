<script>
	export let skill = '',
		progress = '';
	import { Progressbar } from 'flowbite-svelte';
	import DeviceDetector from 'svelte-device-detector';
</script>

<div class="skill-items">
	<DeviceDetector showInDevice="desktop"
		>{skill}<Progressbar {progress} size="h-3" color="green" /></DeviceDetector
	>
	<DeviceDetector showInDevice="mobile"
		>{skill}<Progressbar {progress} size="h-1.5" color="green" /></DeviceDetector
	>
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
