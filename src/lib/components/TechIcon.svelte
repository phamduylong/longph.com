<script lang="ts">
	import type { TechIcon } from '../assets/types';
	export let tech: TechIcon = { img: '', alt: '', url: '', text: '' };
</script>

<a href={tech.url} target="_blank" rel="noreferrer" title={tech.text} class="text-[0]">
	<img
		src={tech.img}
		alt={tech.alt}
		class="mx-1/100 mt-[2%] inline-block h-[5%] w-[5%] hover:mx-1/50 hover:scale-150"
	/>
</a>
