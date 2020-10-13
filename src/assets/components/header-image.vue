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
            //Top
            gsap.fromTo(this.$refs.top_fade,{autoAlpha:0},{autoAlpha:1, duration: 0.79});
            gsap.fromTo(this.$refs.top_fade,{width:200},{width:920, duration: 0.79});

            //Bottom
            gsap.fromTo(this.$refs.bottom_fade,{autoAlpha:0},{autoAlpha:1, duration: 0.79 });
            gsap.fromTo(this.$refs.bottom_fade,{width:300},{width:1101, duration: 0.79});
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
