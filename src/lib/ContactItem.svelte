<script>
    export let img = "", content = "duy-long-pham", url= "https://linkedin.com/in/duy-long-pham";
</script>
<span id="wrapper">
    <a href={url} target="blank" class="inline-block w-fit text-primary-green"><img src={img} alt="duy-long-pham"/>
        <p class="lg:hover:underline inline-block font-semibold">{content}</p>
    </a>
</span>


<style>
    #wrapper {
        margin: 5%;
        width: fit-content;
        font-size: 1vw;
    }

    img {
        height: 8%;
        width: 8%;
        display: inline-block;
    }

    a {
        text-decoration: none !important;
    }
</style>