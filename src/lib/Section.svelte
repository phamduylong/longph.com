<script lang="ts">
	import type { Section } from './assets/types';
	import SectionItem from './SectionItem.svelte';
	export let section_data: Section;

	function removeWhitespaces(str: string): string {
		return str.replace(/\s+/g, '').toLowerCase();
	}
</script>

<div id="wrapper">
	<p id={removeWhitespaces(section_data.title)}>
		<a class="text-primary-green no-underline" href={'#' + removeWhitespaces(section_data.title)}
			>{section_data.title.toUpperCase()}</a
		>
	</p>
	{#each section_data.entries as item}
		<SectionItem {item} />
	{/each}
</div>

<style>
	#wrapper {
		font-size: 3vw;
		margin: 10%;
		padding: 1%;
	}
</style>
