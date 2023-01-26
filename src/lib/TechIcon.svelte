<script>
	export let tech = {},
		parentSection = '';
	import { Popover } from 'flowbite-svelte';
	import { slide } from 'svelte/transition';
	import DeviceDetector from 'svelte-device-detector';
	let placement = 'bottom';
	let loaded = false;
</script>

<a href={tech.url} target="_blank" rel="noreferrer" id={tech.url + parentSection}>
	<img src={tech.img} alt={tech} class="tech-item" />
</a>

<DeviceDetector showInDevice="desktop">
	<Popover
		class="w-64 text-sm font-bold z-50"
		title="Info Page"
		{placement}
		transition={slide}
		style="position: fixed; width: 12.5vw; height: 12.5vw;"
		offset={50}
		strategy="fixed"
	>
		{#if loaded}
			<div />
		{:else}
			Loading...
		{/if}
		<iframe
			src={tech.url}
			title=""
			on:load={() => {
				loaded = true;
			}}
			style="height: 10vw; width: 12vw; z-index: 50"
		/>
	</Popover>
</DeviceDetector>

<DeviceDetector showInDevice="mobile">
	<Popover
		class="w-64 text-xs font-bold z-50"
		title="Info Page"
		{placement}
		transition={slide}
		style="position: fixed; width: 16vh; height: 16vh;"
		offset={20}
		strategy="fixed"
	>
		{#if loaded}
			<div />
		{:else}
			Loading...
		{/if}
		<iframe
			src={tech.url}
			title=""
			on:load={() => {
				loaded = true;
			}}
			style="height: 8vh; width: 14vh; z-index: 50"
		/>
	</Popover>
</DeviceDetector>

<style>
	.tech-item {
		display: inline-block;
		height: 5%;
		width: 5%;
		margin-left: 1%;
		margin-top: 2%;
	}

	.tech-item:hover {
		transform: scale(1.5);
		margin-left: 2%;
		margin-right: 2%;
	}
</style>
