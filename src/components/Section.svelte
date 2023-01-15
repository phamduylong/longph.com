<script>
	import SectionItem from "./SectionItem.svelte";

    export let title = "";
</script>

<div id="title">
    {title.toUpperCase()}
    <SectionItem title="METROPOLIA UNIVERSITY OF APPLIED SCIENCES" timeline="2020-2024 (Estimated)" content="Major in Embedded Systems Programming
    "/>
</div>

<style>
    #title {
        color: #338566;
        font-size: 3vw;
        margin: 10%;
    }
</style>