<script lang="ts">
	import type { SectionItem } from '../assets/types';
	import { LinkType } from '../assets/types';
	import TechIcon from './TechIcon.svelte';
	export let item: SectionItem;

	function removeWhitespaces(str: string): string {
		return str.replace(/\s+/g, '').toLowerCase();
	}
</script>

<div class="my-[4%] text-[1.25vw]">
	<div class="text-2vw" id={removeWhitespaces(item.title)}>
		<a class="text-coral" href={'#' + removeWhitespaces(item.title)}
			>{#if item.title !== ''}<strong>{item.title} | {item.timeline}</strong>{/if}</a
		>
	</div>

	<div>
		{@html item.content}

		<!-- Render techology stack if exist-->
		{#if item.stack !== undefined}
			<div class="stack-container">
				<b>Tech Stack:</b><br />
				{#each item.stack as tech}
					<TechIcon {tech} />
				{/each}
			</div>
		{/if}

		<!-- Render media if exist-->
		{#if item.media !== undefined}
			<br /><br />
			{#each item.media as media}
					<a
						href={'https://www.youtube.com/watch?v=' + media.ytid}
						target="_blank"
						rel="noreferrer"
						class="underline hover:text-primary-green"
						>{media.text}
						<div class="relative overflow-hidden w-full lg:pt-[56.25%]">
							<iframe
								src={'https://www.youtube.com/embed/' + media.ytid}
								title="Demo"
								loading="lazy"
								allowfullscreen={true}
								class="w-full h-full border border-solid border-primary-green resize lg:absolute lg:top-0 lg:left-0 lg:bottom-0 lg:right-0 lg:border-[4px]"
							/>
						</div>
					</a>
					<br />
			{/each}
		{/if}

		<!-- Render hyperlinks-->
		{#if item.links !== undefined}
			<br /><br />
			{#each item.links as hl}
				{#if hl.type === LinkType.Demo}
					<a
						href={hl.href}
						target="_blank"
						rel="noreferrer"
						class="underline hover:text-primary-green"
						>{hl.text}
						<div class="relative overflow-hidden w-full lg:pt-[56.25%]"><iframe src={hl.href} title="Demo" loading="lazy" 
							class="w-full h-full border border-solid border-primary-green resize lg:absolute lg:top-0 lg:left-0 lg:bottom-0 lg:right-0 lg:border-[4px]"/></div>
					</a><br />
				{:else if hl.type === LinkType.GitRepo}
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
