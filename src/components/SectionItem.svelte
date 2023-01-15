<script>
	export let title = '',
		timeline = '2023', content = '';
</script>

<div id="item">
	<div id="title">
		<strong>{title}</strong>
	</div>

	<div id="timeline">
        <strong>{timeline}</strong>
    </div>

    <div id="content">
        {content}
    </div>
</div>

<style>
    #item {
        font-size: 1vw;
        color: black;
    }

    #title {
        font-size: 1.5vw;
    }
</style>
