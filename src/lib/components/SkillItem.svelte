<script lang="ts">
	import type { SkillItem } from '../assets/types';
	import { Progressbar } from 'flowbite-svelte';
	export let skill: SkillItem = { skill: '', progress: 0 };
</script>

<div class="relative mx-auto inline-block h-[2%] w-full p-1/20 text-[1.25vw]">
	<div class="hidden lg:block">
		{skill.skill}<Progressbar progress={skill.progress.toString()} size="h-3" color="green" />
	</div>

	<div class="block lg:hidden">
		{skill.skill}<Progressbar progress={skill.progress.toString()} size="h-1.5" color="green" />
	</div>
</div>
