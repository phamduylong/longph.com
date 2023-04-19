<script lang="ts">
	import type { Section } from '../assets/types';
	import SectionItem from './SectionItem.svelte';
	export let section_data: Section;

	function removeWhitespaces(str: string): string {
		return str.replace(/\s+/g, '').toLowerCase();
	}
</script>

<div id="wrapper" class="m-1/10 p-1/100 text-3vw">
	<p id={removeWhitespaces(section_data.title)}>
		<a class="text-primary-green" href={'#' + removeWhitespaces(section_data.title)}
			>{section_data.title.toUpperCase()}</a
		>
	</p>
	{#each section_data.entries as item}
		<SectionItem {item} />
	{/each}
</div>
