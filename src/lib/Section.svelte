<script >
	import SectionItem from "./SectionItem.svelte";
    import YouTube from 'svelte-youtube';
    import DeviceDetector from "svelte-device-detector";
    export let section_data;
</script>

<div id="title">
    {section_data.title.toUpperCase()}
    {#each section_data.entries as item}
        <SectionItem title={item.title} timeline={item.timeline} content={item.content}>
            {#if item.stack !== undefined && item.stack !== []}
                <div class="stack-container">
                    <b>Tech Stack:</b><br/>
                    {#each item.stack as tech}
                        <img src={tech} alt={tech} class="tech-item"/>
                    {/each}
                </div>
            {/if}
            

            {#if item.media !== undefined && item.media !== []}
                <br/><br/>
                {#each item.media as media}
                    {#if media.type === "youtube"}
                        <DeviceDetector showInDevice="mobile">
                            <a href={"https://www.youtube.com/watch?v=" + media.ytid}>{media.caption}</a>
                        </DeviceDetector>           

                        <DeviceDetector showInDevice="desktop">
                            <b>{media.caption}:</b><br/><br/>
                            <div class="media-wrapper">
                                <YouTube videoId={media.ytid} />
                            </div>
                        </DeviceDetector>                     
                    {/if}
                {/each}
            {/if}
            
            {#if item.links !== undefined && item.links !== []}
                <br/><br/>
                {#each item.links as hl}
                    <a href={hl.href} target="blank">{hl.text}</a><br/>
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
        margin-top: 2%;
    }

    .tech-item:hover {
        transform: scale(1.5);
        margin-left: 2%;
        margin-right: 2%;
    }

    .media-wrapper {
        position: relative;
        left: 25%;
        border-radius: 2px black solid;
    }

	
</style>