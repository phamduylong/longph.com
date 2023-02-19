<script>
	import SectionItem from './SectionItem.svelte';
	import TechIcon from './TechIcon.svelte';
	export let section_data;

	function removeWhitespaces(str) {
		return str.replace(/\s+/g, '').toLowerCase();
	}
</script>

<div id="wrapper">
	<p id={removeWhitespaces(section_data.title)}>
		<a class="text-primary-green no-underline" 
		href={'#' + removeWhitespaces(section_data.title)}
			>{section_data.title.toUpperCase()}</a
		>
	</p>
	{#each section_data.entries as item}
		<SectionItem title={item.title} 
		timeline={item.timeline} 
		content={item.content}>
			{#if item.stack !== undefined && item.stack !== []}
				<div class="stack-container">
					<b>Tech Stack:</b><br />
					{#each item.stack as tech}
						<TechIcon parentSection={item.title} {tech} />
					{/each}
				</div>
			{/if}

			{#if item.media !== undefined && item.media !== []}
				<br /><br />
				{#each item.media as media}
					{#if media.type === 'youtube'}
						<a
							href={'https://www.youtube.com/watch?v=' + media.ytid}
							target="_blank"
							rel="noreferrer"
							class="underline hover:text-primary-green"
							>{media.caption}
							<iframe
								src={'https://www.youtube.com/embed/' + media.ytid}
								title="Demo"
								loading="lazy"
								allowfullscreen={true}
							/>
						</a>
						<br />
					{/if}
				{/each}
			{/if}

			{#if item.links !== undefined && item.links !== []}
				<br /><br />
				{#each item.links as hl}
					{#if hl.type === 'demo'}
						<a
							href={hl.href}
							target="_blank"
							rel="noreferrer"
							class="underline hover:text-primary-green"
							>{hl.text}
							<iframe src={hl.href} title="Demo" loading="lazy" />
						</a><br />
					{:else}
						<a
							href={hl.href}
							target="_blank"
							rel="noreferrer"
							class="underline hover:text-primary-green">
							{hl.text}
						</a
						><br />
					{/if}
				{/each}
			{/if}
		</SectionItem>
	{/each}
</div>

<style>
	#wrapper {
		font-size: 3vw;
		margin: 10%;
		padding: 1%;
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
			border: 1px #338566 solid;
		}
	}
</style>
