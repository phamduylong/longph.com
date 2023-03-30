<script>
	import ContactItem from './ContactItem.svelte';
	import { contact } from './assets/data';
</script>

<strong id="contact_section_header" class="absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2vw">Contact</strong>

<div id="contact_container" class="bg-coral absolute left-1/2 -translate-x-1/2 -translate-y-1/2 
flex flex-row flex-wrap w-full mt-1/10 overflow-scroll overflow-x-hidden p-1/100 max-h-[15%] top-[85%]">
	{#each contact as contact}
		<ContactItem {contact} />
	{/each}
</div>
