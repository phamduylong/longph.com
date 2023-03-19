<script>
	import Icon from './Icon.svelte';
	import SkillTab from './SkillTab.svelte';
	import ContactTab from './ContactTab.svelte';
</script>

<div class="sidenav">
	<Icon />

	<SkillTab />

	<ContactTab />
</div>

<style>
	.sidenav {
		border-left: 0.05vw solid;
		border-right: 0.05vw solid;
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

	@media screen and (orientation: portrait) {
		.sidenav {
			border-left: 0.05vw solid;
			border-right: 0.05vw solid;
			height: 100%;
			width: 30%;
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
	}
</style>
