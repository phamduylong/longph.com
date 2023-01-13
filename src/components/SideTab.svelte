<script>
	const img_url = new URL('../assets/profile_pic.jpg', import.meta.url).href;
	import { Progressbar } from 'flowbite-svelte';
	const skills = [
		{ skill: 'NodeJs', progress: '70' },
		{ skill: 'Express', progress: '70' },
		{ skill: 'EJS Template', progress: '60' },
		{ skill: 'MongoDB', progress: '50' },
		{ skill: 'SQL', progress: '50' },
		{ skill: 'Svelte', progress: '50' },
		{ skill: 'HTML5', progress: '50' },
		{ skill: 'CSS3', progress: '40' },
		{ skill: 'Embedded Programming', progress: '50' },
		{ skill: 'C', progress: '60' },
		{ skill: 'C++', progress: '70' },
		{ skill: 'Python', progress: '60' },
		{ skill: 'Robot Framework', progress: '50' },
		{ skill: 'Jenkins', progress: '40' },
		{ skill: 'Linux', progress: '50' },
		{ skill: 'Git', progress: '70' }
	];
</script>

<div class="sidenav">
	<div id="icon_container"><img id="icon" src={img_url} alt="avatar" /></div>

	<strong id="skills_section_header">Skills</strong>
	<div id="skills_container">
		{#each skills as skill, index}
			<div class="skill-items">
				{skill.skill}<Progressbar progress={skill.progress} size="h-3" color="blue" />
			</div>
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

	#icon_container {
		height: 20%;
		width: 100%;
		position: absolute;
		top: 5%;
	}


	#icon {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border: 2px solid black;
		border-radius: 50%;
		width: 50%;
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
		max-height: 25%;
		overflow: scroll;
		overflow-x: hidden;
		width: 100%;
	}

	.skill-items {
		position: relative;
		display: inline-block;
		height: 2%;
		margin: 0 auto;
		padding: 10%;
		font-size: 1vw;
		width: 100%;
	}

</style>
