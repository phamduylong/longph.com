<script>
	import SkillItem from './SkillItem.svelte';
	import { skills } from './assets/data';
</script>

<strong id="skills_section_header">Skills</strong>
<div id="skills_container">
	{#each skills as skill}
		<SkillItem {skill} />
	{/each}
</div>

<style>
	#skills_section_header {
		position: absolute;
		top: 35%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: 2vw;
	}

	#skills_container {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		background-color: coral;
		max-height: 30%;
		overflow: scroll;
		overflow-x: hidden;
		width: 100%;
		margin-top: 10%;
		padding: 1%;
	}
</style>
