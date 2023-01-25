<script>
	export let tech;
	let showPreview = false,
		previewReady = false,
		xcoord = 0,
		ycoord = 0,
		preview_url = '';

	import { fade } from 'svelte/transition';
	import mouseCoordinate from './mouseCoordinate';
</script>

<a
	on:mouseover={() => {
		console.log(tech.url);
		showPreview = true;
		console.log($mouseCoordinate);
		preview_url = tech.url;
	}}
	on:focus={() => {}}
	on:mouseleave={() => {
		showPreview = false;
	}}
	href={tech.url}
	target="_blank"
	rel="noreferrer"><img src={tech.img} alt={tech} class="tech-item" /></a
>

{#if showPreview}
<div id="url_preview" in:fade style=" left:{$mouseCoordinate.x}px; top:{$mouseCoordinate.y + 20}px; " >
		{#if previewReady}<span />
		{:else}<p>Loading...</p>
		{/if}
		<iframe
			title="preview"
			src={preview_url}
			on:load={() => {
				previewReady = true;
				console.log('preview ready!!');
			}}
			width="100%"
			height="100%"
		/>
	</div>
{/if}

<style>
	a {
		text-decoration: underline;
	}

	a:hover {
		color: #338566;
	}

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

	#url_preview {
		width: 300px;
		height: 300px;
		border: 1px solid #ccc;
		border-radius: 5%;
		margin: 2%;
	}
</style>
