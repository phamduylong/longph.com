<script>
	export let title = '',
		timeline = '2023',
		content = '';

	function removeWhitespaces(str) {
		return str.replace(/\s+/g, '').toLowerCase();
	}
</script>

<div id="item">
	<div class="title" id={removeWhitespaces(title)}>
		<a href={'#' + removeWhitespaces(title)}
			>{#if title !== ''}<strong>{title} | {timeline}</strong>{/if}</a
		>
	</div>

	<div>
		{@html content}
		<slot />
	</div>
</div>

<style>
	#item {
		font-size: 1.25vw;
		margin-top: 4%;
		margin-bottom: 4%;
	}

	.title {
		font-size: 2vw;
	}

	a {
		text-decoration: none;
		color: coral;
	}
</style>
