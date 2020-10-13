<template>
  <div class="animated-copy">
    <div class="top heroic-h th-red">
      <span class="t-l" ref="tl">L</span>
      <span class="heart-space"></span>
      <span class="t-ve" ref="tve">V E</span>
      <span class="t-dot" ref="tdot">.</span>
    </div>
    <img class="heart-icon" ref="heart" src="src/assets/icons/heart.svg" alt="">


    <div class="bottom heroic-h th-red">

      <span class="d-l" ref="dl">L</span>
      <span class="d-dot1" ref="ddotl">.</span>
      <span class="d-a" ref="da">A</span>
      <span class="d-dot2" ref="ddot2">.</span>

    </div>

    <div class="arm-overlay" ref="armOverlay"><img src="src/assets/images/armOVerlay.png" class="arm-overlay"></div>

  </div>
</template>

<script>
  import { gsap } from "gsap";

    export default {
      name: "text-animation",
      mounted:function(){
        this.fadeIn()
      },
      props: ['tl'],
      methods: {
        fadeIn(){
          var tl = gsap.timeline();

          tl.fromTo(this.$refs.armOverlay,{autoAlpha:0},{autoAlpha:1, ease: "power4.out", duration: 0.7}, .5);

          //Top
          tl.fromTo(this.$refs.tl,{top:60, autoAlpha:0},{top:0, autoAlpha:1, ease: "power4.out", duration: 0.8}, "-=0.2");

          tl.fromTo(this.$refs.heart,{autoAlpha:0},{autoAlpha:1, duration: 0.01}, "-=0.7");
          tl.fromTo(this.$refs.heart,{top:120},{top:30, duration: 0.8}, "-=0.7");

          tl.fromTo(this.$refs.tve,{top:60, autoAlpha:0},{top:0, autoAlpha:1, ease: "power4.out", duration: 0.8}, "-=0.7");
          tl.fromTo(this.$refs.tdot,{top:60, autoAlpha:0},{top:0, autoAlpha:1, ease: "power4.out", duration: 0.8}, "-=0.7");
          //Bottom
          tl.fromTo(this.$refs.dl,{top:60, autoAlpha:0},{top:0, autoAlpha:1, duration: 0.8}, "-=0.7");
          tl.fromTo(this.$refs.ddotl,{top:60, autoAlpha:0},{top:0, autoAlpha:1, duration: 0.8}, "-=0.7");

          tl.to(this.$refs.heart,{left:180, duration: 0.05});
          tl.to(this.$refs.heart,{left:140, duration: 0.05});

          tl.fromTo(this.$refs.da,{top:60, autoAlpha:0},{top:0, autoAlpha:1, duration: .8}, "-=0.7");
          tl.fromTo(this.$refs.ddot2,{top:60, autoAlpha:0},{top:0, autoAlpha:1, duration: .8}, "-=0.5");

        }
      }
    }
</script>

<style scoped lang="scss">
  .arm-overlay{
    position:absolute;
    left: 283px;
    top: 30px;
  }

  .animated-copy{
    font-size:455px;
  }

  .top{
    margin-left: -20px;
    margin-top:-30px;
    white-space: nowrap;

    .heart-space{
      display:inline-block;
      width:355px;
      height:340px;
    }
    span{
      position:relative;
    }
    .t-l{
    }
    .t-ve{
      letter-spacing: 17px;
    }
    .t-dot{
      margin-left:-42px;
    }
  }

  .heart-icon{
    position: absolute;
    left: 140px;
    width: 385px;
    margin-right: 75px;
    opacity:0;
  }

  .bottom{
    left: 519px;
    top: -70px;
    display: inline;
    position: relative;
    span{
      position:relative;
    }

  }

</style>
