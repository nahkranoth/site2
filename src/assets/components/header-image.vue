<template>
  <div class="header-image">
    <div class="image-container top"><img src="/src/assets/images/headerImage.jpg" alt=""></div>
    <div class="image-container bottom"><img src="/src/assets/images/headerImage.jpg" alt=""></div>
  </div>
</template>

<script>
  import { gsap } from "gsap";

  export default {
        name: "header-image",
        methods: {
          fade(){
            gsap.fromTo(this.$refs.logo,{autoAlpha:1},{autoAlpha:0, duration: 0.35});
          }
        }
    }
</script>

<style scoped lang="scss">
  $side-margin: 14px;
  $max-width: 1303px + ($side-margin*2);

  .image-container{
    overflow:hidden;
    &.top{
      width:200px;
      height:400px;
    }

    &.bottom{
      width:300px;
      height:694px;
      img{
        position:relative;
        top:-400px;
      }
    }
  }

  img{
    width:1011px;
    height:1094px;

  }
</style>
