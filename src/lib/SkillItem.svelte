<script lang="ts">
	import type { SkillItem } from './assets/types';
	import { Progressbar } from 'flowbite-svelte';
	export let skill: SkillItem = { skill: '', progress: 0 };
</script>

<div class="skill-items">
	<div id="lg_prog_bar">
		{skill.skill}<Progressbar progress:{ skill.progress } size="h-3" color="green" />
	</div>

	<div id="sm_prog_bar">
		{skill.skill}<Progressbar progress:{ skill.progress } size="h-1.5" color="green" />
	</div>
</div>

<style>
	#lg_prog_bar {
		display: none;
	}

	@media screen and (min-width: 768px) {
		#sm_prog_bar {
			display: none;
		}
		#lg_prog_bar {
			display: block;
		}
	}

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
