<script>
	export let tech = {};
	import { slide } from 'svelte/transition';
	import DeviceDetector from 'svelte-device-detector';
	import { Popover } from 'svelte-smooth-popover';
	import spinner from "$lib/assets/loading_gif.gif";
	function openPopover() {
		showPopover = true;
	}
	function closePopover() {
		showPopover = false;
	}
	let hoverIframe;
	let loaded = false;
	let showPopover = false;
</script>

<a href={tech.url} target="_blank" rel="noreferrer">
	<img
		src={tech.img}
		alt={tech.alt}
		class="tech-item"
		on:mouseover={openPopover}
		on:focus
		on:mouseleave={() => {
			hoverIframe = setTimeout(() => {
				closePopover();
			}, 100);
		}}
	/>
	<DeviceDetector showInDevice="desktop">
		<Popover
			transition={slide}
			align={'top-right'}
			open={showPopover}
			caretWidth={3}
			caretBg="#E5E4E2"
			offset={50}
		>
			<div class="rounded-full bg-primary-green shadow-sm">
				{#if !loaded}
					<div class="justify-center items-center flex w-full h-full"><img id="spinner" src={spinner} alt="Loading"></div>
				{/if}
				<iframe
					class="rounded-full p-1 w-full h-full"
					src={tech.url}
					title={tech.url}
					on:load={() => {
						loaded = true;
					}}
					on:mouseover={() => {
						clearTimeout(hoverIframe);
					}}
					on:focus
					on:mouseleave={closePopover}></iframe>
			</div>
		</Popover>
	</DeviceDetector>
</a>

<style>
	.tech-item {
		display: inline-block;
		height: 5%;
		width: 5%;
		margin-left: 1%;
		margin-right: 1%;
		margin-top: 2%;
	}

	.tech-item:hover {
		transform: scale(1.5);
		margin-left: 2%;
		margin-right: 2%;
	}

	a {
		font-size: 0;
	}

	#spinner {
		height: 4vh;
		width: 4vh;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}


</style>
