<script>
	export let title = '',
		timeline = '2023',
		content = '';
</script>

<div id="item">
	<div id="title">
		{#if title !== ''}<strong>{title} | {timeline}</strong>{/if}
	</div>

	<div id="content">
		{@html content}
		<slot />
	</div>
</div>

<style>
	#item {
		font-size: 1vw;
		margin-top: 4%;
		margin-bottom: 4%;
	}

	#title {
		font-size: 1.5vw;
	}
</style>
