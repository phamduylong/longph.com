<script>
	import Section from './Section.svelte';
	import { section_datas } from './assets/data';
	import ContactMeForm from './ContactMeForm.svelte';
</script>

<div class="ml-1/4 mr-1/20 overflow-scroll overflow-x-hidden w-full">
	<div class="absolute top-1/4 left-1/2 w-1/2 -translate-x-[20%] -translate-y-1/2 border-t-[5px] border-solid h-1/5 lg:-translate-x-[30%]">
		<div class="absolute -top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-4vw">Long Pham</div>
		<div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2vw">Junior Developer</div>
	</div>

	<div class="absolute top-1/2 left-[65%] -translate-x-[55%] -translate-y-1/2 h-[60%] w-[60%] max-w-full lg:w-[80%]">
		{#each section_datas as section_data}
			<Section {section_data} />
		{/each}
		<ContactMeForm />
	</div>
</div>
