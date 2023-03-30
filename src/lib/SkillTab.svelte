<script>
	import SkillItem from './SkillItem.svelte';
	import { skills } from './assets/data';
</script>

<strong class="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-2vw">Skills</strong>
<div class="absolute-center flex flex-row flex-wrap bg-coral overflow-scroll overflow-x-hidden w-full mt-1/10 p-1/100 max-h-[30%]">
	{#each skills as skill}
		<SkillItem {skill} />
	{/each}
</div>
