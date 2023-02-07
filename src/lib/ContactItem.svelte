<script>
    export let img = "", content = "duy-long-pham", url= "https://linkedin.com/in/duy-long-pham";
</script>
<span id="wrapper">
    <a href={url} target="blank" class="inline-block text-primary-green"><img align="center" src={img} alt="duy-long-pham"/>
        <p class="lg:hover:underline inline-block">{content}</p>
    </a>
</span>


<style>
    #wrapper {
        margin: 5%;
        width: 100%;
        font-size: 0.9vw;
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