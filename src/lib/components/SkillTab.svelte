<script>
	import SkillItem from './SkillItem.svelte';
	import { skills } from '../assets/data';
</script>

<strong class="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-2vw"
	>Skills</strong
>
<div
	class="absolute-center mt-1/10 flex max-h-[30%] w-full flex-row flex-wrap overflow-scroll overflow-x-hidden bg-coral p-1/100"
>
	{#each skills as skill}
		<SkillItem {skill} />
	{/each}
</div>
