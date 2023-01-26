<script>
	export let tech = {}, parentSection = "";
	import { Popover } from 'flowbite-svelte';
	import { slide } from 'svelte/transition';
	let placement = "bottom";
	let loaded = false; 
</script>

	<a href={tech.url} target="_blank" rel="noreferrer" id={tech.url + parentSection}>
		<img src={tech.img} alt={tech} class="tech-item" />
	</a>

	<Popover 
		class="w-64 text-sm font-bold" title="Info Page" 
		{placement} transition={slide} 
		style="z-index:1000; position: fixed; width: 300px; height: 300px;" 
		offset={50} strategy="fixed"
	>
		{#if loaded}
			<div></div>
		{:else}	
			Loading...
		{/if}
		<iframe src={tech.url} title="" on:load={() => {loaded = true;}}/>
	</Popover>


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

	iframe {
		height: 250px;
		width: 280px;
	}

</style>
