<script>
	import Section from "./Section.svelte";
	const section_datas = [
		{
			title: "Education", 
			entries: [
				{title: "Metropolia University Of Applied Sciences", timeline: "August 2020 - July 2024 (estimated)", content: "Majority of people are stupid"}
			]
		}, 

		{
			title: "Projects", 
			entries: [
				{title: "ABB Ventilation Project", timeline: "2022", content: "An IoT Project controlled by LPC1549 board with LCD & Web Interface"},
				{title: "Ring Tone Text Transfer Language Player", timeline: "2022", content: "An IoT Device to play classic Nokia ringtones"},
				{title: "CuteBot", timeline: "2020", content: "A Discord bot to fetch quotes and jokes through an API and send it to Discord server chatboxes"},
			]
		}
	];
</script>

<div id="main">
	<div id="intro">
		<div id="name">Long Pham</div>
		<div id="title">Junior Developer</div>
	</div>

	<div id="sections">
		{#each section_datas as section}
			<Section section_data={section} />
		{/each}
	</div>
</div>

<style>
	#main {
		margin-left: 25%;
		margin-right: 5%;
	}

	#name {
		position: absolute;
		top: -40%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: 4vw;
	}

	#intro {
		position: absolute;
		top: 25%;
		left: 50%;
		width: 50%;
		transform: translate(-25%, -50%);
		border-top: black 5px solid;
		height: 20%;
	}

	#title {
		position: absolute;
		top: 25%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: 2vw;
	}

	#sections {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		height: 60%;
		width: 60%;
	}
</style>
