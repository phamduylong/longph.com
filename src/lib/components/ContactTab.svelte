<script lang="ts">
	import ContactItem from './ContactItem.svelte';
	import { contact } from '../assets/data';
</script>

<strong
	id="contact_section_header"
	class="absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2vw">Contact</strong
>

<div
	id="contact_container"
	class="absolute left-1/2 top-[85%] mt-1/10 flex 
max-h-[15%] w-full -translate-x-1/2 -translate-y-1/2 flex-row flex-wrap overflow-scroll overflow-x-hidden bg-coral p-1/100"
>
	{#each contact as contact}
		<ContactItem {contact} />
	{/each}
</div>
