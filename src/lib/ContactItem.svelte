<script lang="ts">
	export let img : string = '',
		content : string = 'duy-long-pham',
		url : string = 'https://linkedin.com/in/duy-long-pham';
</script>

<span id="wrapper">
	<a href={url} target="blank" class="inline-block w-fit text-primary-green"
		><img src={img} alt="duy-long-pham" />
		<p class="inline-block font-semibold lg:hover:underline">{content}</p>
	</a>
</span>

<style>
	#wrapper {
		margin: 5%;
		width: fit-content;
		font-size: 1vw;
	}

	img {
		height: 8%;
		width: 8%;
		display: inline-block;
	}

	a {
		text-decoration: none !important;
	}
</style>
