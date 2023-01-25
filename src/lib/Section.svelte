<script>
	import SectionItem from './SectionItem.svelte';
	import YouTube from 'svelte-youtube';
	import DeviceDetector from 'svelte-device-detector';
    import SkillIcon from './TechIcon.svelte';
	export let section_data;
	const options = {
		height: "470vh",
		width: "100%"
	}
</script>

<div id="title">
	{section_data.title.toUpperCase()}
	{#each section_data.entries as item}
		<SectionItem title={item.title} timeline={item.timeline} content={item.content}>
			{#if item.stack !== undefined && item.stack !== []}
				<div class="stack-container">
					<b>Tech Stack:</b><br />
					{#each item.stack as tech}
                        <SkillIcon {tech}/>
					{/each}
				</div>
			{/if}

			{#if item.media !== undefined && item.media !== []}
				<br /><br />
				{#each item.media as media}
					{#if media.type === 'youtube'}
						<a href={"https://www.youtube.com/watch?v=" + media.ytid} target="_blank" rel="noreferrer">{media.caption}
							<iframe src={"https://www.youtube.com/embed/" + media.ytid} title="Demo"/>
						</a>
						<br />
					{/if}
				{/each}
			{/if}

			{#if item.links !== undefined && item.links !== []}
				<br /><br />
				{#each item.links as hl}
					{#if hl.type === "demo"}
					<a href={hl.href} target="_blank" rel="noreferrer">{hl.text}<iframe src={hl.href} title="Demo"/></a><br />
					{:else}
					<a href={hl.href} target="_blank" rel="noreferrer">{hl.text}</a><br />
					{/if}
				{/each}
			{/if}
		</SectionItem>
	{/each}
</div>



<style>
	#title {
		color: #338566;
		font-size: 3vw;
		margin: 10%;
	}

	a {
		text-decoration: underline;
	}

	a:hover {
		color: #338566;
	}

	iframe {
		width: 100%;
		height: 100vh;
		resize: both;
		border: 5px #338566 solid;
	}

	@media screen and (orientation: portrait) {
		iframe {
			width: 100%;
			height: 20vh;
			border: .5px #338566 solid;
		}
	}
</style>
