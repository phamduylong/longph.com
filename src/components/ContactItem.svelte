<script>
    export let img = "", content = "duy-long-pham", url= "https://linkedin.com/in/duy-long-pham";
</script>
<div id="wrapper">
    <a href={url} target="blank"><img align="center" src= {img} alt="duy-long-pham"/>
        {content}
    </a>
</div>


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
        display: inline-block;
    }
</style>