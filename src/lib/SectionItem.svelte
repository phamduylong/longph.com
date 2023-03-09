<script>
	import TechIcon from './TechIcon.svelte';
	export let item = { title: '', timeline: '', content: `<p>This is empty :(</p>` };

	function removeWhitespaces(str) {
		return str.replace(/\s+/g, '').toLowerCase();
	}
</script>

<div id="item">
	<div class="title" id={removeWhitespaces(item.title)}>
		<a href={'#' + removeWhitespaces(item.title)}
			>{#if item.title !== ''}<strong>{item.title} | {item.timeline}</strong>{/if}</a
		>
	</div>

	<div>
		{@html item.content}

		<!-- Render techology stack if exist-->
		{#if item.stack !== undefined && item.stack !== []}
			<div class="stack-container">
				<b>Tech Stack:</b><br />
				{#each item.stack as tech}
					<TechIcon parentSection={item.title} {tech} />
				{/each}
			</div>
		{/if}

		<!-- Render media if exist-->
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
						<div class="iframe_container">
							<iframe
								src={'https://www.youtube.com/embed/' + media.ytid}
								title="Demo"
								loading="lazy"
								allowfullscreen={true}
							/>
						</div>
					</a>
					<br />
				{/if}
			{/each}
		{/if}

		<!-- Render hyperlinks-->
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
						<div class="iframe_container"><iframe src={hl.href} title="Demo" loading="lazy" /></div>
					</a><br />
				{:else}
					<a
						href={hl.href}
						target="_blank"
						rel="noreferrer"
						class="underline hover:text-primary-green"
					>
						{hl.text}
					</a><br />
				{/if}
			{/each}
		{/if}
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

	.title a {
		color: coral;
	}

	iframe {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		width: 100%;
		height: 100%;
		resize: both;
		border: 5px #338566 solid;
	}

	.iframe_container {
		position: relative;
		overflow: hidden;
		width: 100%;
		padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
	}

	@media screen and (orientation: portrait) and (max-width: 960px) {
		iframe {
			width: 100%;
			height: 100%;
			border: 1px #338566 solid;
		}

		.iframe_container {
			position: relative;
			overflow: hidden;
			width: 100%;
			padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
		}
	}
</style>
