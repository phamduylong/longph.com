<script>
	import SectionItem from "./SectionItem.svelte";

    export let section_data;
</script>

<div id="title">
    {section_data.title.toUpperCase()}
    {#each section_data.entries as item, index}
        <SectionItem title={item.title} timeline={item.timeline} content={item.content}>
            {#if item.stack !== undefined}
            <div class="stack-container">
                Tech Stack:
                {#each item.stack as tech}
                    <img src={tech} alt={tech} class="tech-item"/>
                {/each}
            </div>
                
            {/if}
            
            {#if item.links !== undefined}
            <br/><br/>
                {#each item.links as hl}
                    <a href="{hl.href}" target="blank">{hl.text}</a><br/>
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

    .tech-item {
        display: inline-block;
        height: 5%;
        width: 5%;
        margin-left: 1%;
    }
</style>