<template>
  <div class="header-image">
    <div class="image-container top" ref="top_fade"><img src="/src/assets/images/headerImage.jpg" alt=""></div>
    <div class="image-container bottom" ref="bottom_fade"><img src="/src/assets/images/headerImage.jpg" alt=""></div>
  </div>
</template>

<script>
  import { gsap } from "gsap";

  export default {
        name: "header-image",
        mounted:function(){
          this.fadeIn()
        },
        methods: {
          fadeIn(){
            var tl = gsap.timeline();
            //Top
            tl.fromTo(this.$refs.top_fade,{autoAlpha:0},{autoAlpha:1, ease: "power4.out", duration: 0.7}, .5);
            tl.fromTo(this.$refs.top_fade,{width:200},{width:920, ease: "power4.out", duration: 0.6}, .5);

            //Bottom
            tl.fromTo(this.$refs.bottom_fade,{autoAlpha:0},{autoAlpha:1, ease: "power4.out", duration: 0.7 }, .5);
            tl.fromTo(this.$refs.bottom_fade,{width:300},{width:1012, ease: "power4.out", duration: 0.4}, .5);
          }
        }
    }
</script>

<style scoped lang="scss">
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
