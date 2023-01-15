<script>
	import Section from "./Section.svelte";
</script>

<div id="main">
	
	<div id="intro">
		<div id="name">Long Pham</div>
		<div id="title">Junior Developer</div>
	</div> 

	<div id="sections">
		<Section title="Education" id="education_section"/>
		<Section title="Projects" id="projects_section" />
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
