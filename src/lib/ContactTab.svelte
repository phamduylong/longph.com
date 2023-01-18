<script>
	import ContactItem from './ContactItem.svelte';
	import { contact } from '../assets/data.js';
</script>

<strong id="contact_section_header">Contact</strong>

<div id="contact_container">
	{#each contact as contact}
		<ContactItem img={contact.img} content={contact.content} url={contact.url} />
	{/each}
</div>

<style>

	#contact_section_header {
		position: absolute;
		top: 75%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: 2vw;
	}

	#contact_container {
		background-color: coral;
		position: absolute;
		top: 85%;
		left: 50%;
		transform: translate(-50%, -50%);
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		width: 100%;
		margin-top: 10%;
		max-height: 15%;
		overflow: scroll;
		overflow-x: hidden;
		padding: 1%;
		border-top: 1px solid black;
		border-bottom: 1px solid black;
		box-shadow: 2px 2px;
	}

</style>
