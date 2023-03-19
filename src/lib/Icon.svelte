<script>
	import img_url from '$lib/assets/pp.jpg';
</script>

<div id="icon_container"><img id="icon" src={img_url} alt="avatar" /></div>

<style>
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
</style>
