<script>
	import Icon from './Icon.svelte';
	import SkillItem from './SkillItem.svelte';
	import ContactItem from './ContactItem.svelte';
	import { skills, contact } from '../assets/data.js';
</script>

<div class="sidenav">
	<Icon />

	<strong id="skills_section_header">Skills</strong>
	<div id="skills_container">
		{#each skills as skill}
			<SkillItem skill={skill.skill} progress={skill.progress} />
		{/each}
	</div>

	<strong id="contact_section_header">Contact</strong>
	<div id="contact_container">
		{#each contact as contact}
			<ContactItem img={contact.img} content={contact.content} url={contact.url} />
		{/each}
		
	</div>
</div>

<style>

	::-webkit-scrollbar {
		width: 12px;
	}

	::-webkit-scrollbar-track {
		-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
		border-radius: 10px;
	}

	::-webkit-scrollbar-thumb {
		border-radius: 10px;
		-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.7);
	}

	::-webkit-scrollbar-thumb:hover {
		background: rgba(0, 0, 0, 0.1);
	}

	.sidenav {
		border-left: 0.05vw black solid;
		border-right: 0.05vw black solid;
		height: 100%;
		width: 20%;
		position: fixed;
		z-index: 1;
		top: 0;
		left: 0;
		background-color: #fff;
		overflow-x: hidden;
		background-color: coral;
		margin-left: 0.25%;
		margin-right: 0.25%;
	}


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
	}

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
	}



</style>
