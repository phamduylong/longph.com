<script>
	import Section from "./Section.svelte";
	import { section_datas } from './assets/data.js';
	import ContactMeTab from "./ContactMeTab.svelte";
</script>

<div id="main">
	<div id="intro">
		<div id="name">Long Pham</div>
		<div id="title">Junior Developer</div>
	</div>

	<div id="sections">
		{#each section_datas as section_data}
			<Section {section_data}></Section>
		{/each}
		<ContactMeTab/>
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
		transform: translate(-38%, -50%);
		height: 60%;
		width: 80%;
	}

	@media screen and (orientation: portrait) {

		#intro {
			position: absolute;
			top: 25%;
			left: 50%;
			width: 50%;
			transform: translate(-15%, -50%);
			border-top: black 5px solid;
			height: 20%;
		}


		#main {
			margin-left: 25%;
			margin-right: 5%;
			overflow: scroll;
			overflow-x: hidden;
		}

		#sections {
			position: absolute;
			top: 50%;
			left: 60%;
			transform: translate(-38%, -50%);
			height: 60%;
			max-width: 100%;
			width: 60%;
		}
	}
</style>
