<script>
	import Section from './Section.svelte';
	import { section_datas } from './assets/data';
	import ContactMeForm from './ContactMeForm.svelte';
</script>

<div class="ml-1/4 mr-1/20 overflow-scroll overflow-x-hidden">
	<div id="intro">
		<div class="absolute -top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-4vw">Long Pham</div>
		<div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2vw">Junior Developer</div>
	</div>

	<div id="sections">
		{#each section_datas as section_data}
			<Section {section_data} />
		{/each}
		<ContactMeForm />
	</div>
</div>

<style>

	#intro {
		position: absolute;
		top: 25%;
		left: 50%;
		width: 50%;
		transform: translate(-30%, -50%);
		border-top: 5px solid;
		height: 20%;
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
			border-top: 5px solid;
			height: 20%;
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
