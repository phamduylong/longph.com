<script lang="ts">
	import type { TechIcon } from './assets/types';
	export let tech : TechIcon = { img: '', alt: '', url: ''};
</script>

<a href={tech.url} target="_blank" rel="noreferrer">
	<img
		src={tech.img}
		alt={tech.alt}
		class="tech-item"
	/>
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
</style>
