<script>
	import SectionItem from "./SectionItem.svelte";

    export let section_data;
</script>

<div id="title">
    {section_data.title.toUpperCase()}
    {#each section_data.entries as item, index}
        <SectionItem title={item.title} timeline={item.timeline} content={item.content}/>
    {/each}
</div>

<style>
    #title {
        color: #338566;
        font-size: 3vw;
        margin: 10%;
    }
</style>