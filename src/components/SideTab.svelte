<script>
  const img_url = new URL("../assets/profile_pic.jpg", import.meta.url).href;
  import ProgressBar from "./ProgressBar.svelte";
</script>

<div class="sidenav">
  <img id="icon" src={img_url} alt="avatar"/>
</div>

<style>


  .sidenav {
    border-left: 0.05vw black solid;
    border-right: 0.05vw black solid;
    height: 100%;
    width: 15%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #fff;
    overflow-x: hidden;
    background-color: coral;
    margin-left: 0.25%;
    margin-right: 0.25%;
  }
  
  
  
  @media screen and (max-height: 450px) {
    .sidenav {padding-top: 15px;}
    
  }

  #icon {
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    width: 60%;
  }
  </style>