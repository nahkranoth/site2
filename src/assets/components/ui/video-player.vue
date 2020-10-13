<template>
  <div class="video-player">
    <video ref="videoPlayer" class="video-js"></video>
    <div class="controls">
      <div class="circle-border" ref="circleBorder"></div>
      <div class="circle-full" ref="circleFull"></div>
      <div class="start-btn" ref="startBtn" v-on:click="play">
        <div class="full-circle th-red-bg">
          <div class="play-icon-container">
            <img class="play-icon" src="/src/assets/icons/play-button-icon.svg" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="bg-container">
      <div class="bg grey-bg" ref="greyBg"></div>
    </div>
  </div>
</template>

<script>
  import { gsap } from "gsap";
  import videojs from 'video.js';
  import "video.js/dist/video-js.css";

  export default {
    name: "VideoPlayer",
    data() {
      return {
        playerOptions: {
          muted: true,
          language: 'en',
          controls: false,
          width:800,
          height:520,
          sources: [{
            type: "video/mp4",
            src: "/src/assets/videos/test-video.mp4"
          }]
        }
      }
    },
    mounted() {
      this.player = videojs(this.$refs.videoPlayer, this.playerOptions, function onPlayerReady() {

      })
    },
    methods:{
      play(){
        gsap.to(this.$refs.circleBorder,{width:0, height:0, left:400, top:260, duration: 0.29});
        gsap.fromTo(this.$refs.circleFull,{width:0, height:0, left:400,top:260,},{width:80, height:80, left:400-40,top:260-40, duration:0.29});

        //TODO: GlIDE in on the right scroll position
        gsap.to(this.$refs.greyBg,{left:0, duration:0.29});

        //start later
        this.player.play();
      }
    },
    beforeDestroy() {
      if (this.player) {
        this.player.dispose()
      }
    }
  }
</script>
<style lang="scss">
  $circle-radius:43px;
  $circle-border-radius:120px;
  $circle-border-thickness:4px;
  $circle-full-radius:0px;

  $play-icon-size:6px;
  $player-width:800px;
  $player-height:520px;

  .bg-container{
    width:230px;
    height:430px;
    position:absolute;
    top:65px;
    left:$player-width;
    z-index:1;
    overflow:hidden;
    .bg{
      position:relative;
      left:230px;
      height:100%;
    }
  }

  .video-js{
    z-index:2;
  }

  .controls{
    position: absolute;
    width: $player-width;
    height: $player-height;
    top: 0;
    z-index:3;

    .circle-full{
      position:absolute;
      left:$player-width/2 - $circle-border-radius/2;
      top:$player-height/2 - $circle-border-radius/2;
      background-color:rgba(204, 12, 47, 0.5);
      height:$circle-full-radius;
      width:$circle-full-radius;
      border-radius:50%;
    }

    .circle-border {
      position:absolute;
      left:$player-width/2 - $circle-border-radius/2-$circle-border-thickness;
      top:$player-height/2 - $circle-border-radius/2-$circle-border-thickness;
      border:$circle-border-thickness solid rgb(204, 12, 47);
      height:$circle-border-radius;
      width:$circle-border-radius;
      border-radius:50%;
    }

    .start-btn{
      position: absolute;
      left: ceil($player-width/2 - $circle-radius/2);
      top: ceil($player-height/2 - $circle-radius/2);
      .full-circle{
        height: $circle-radius;
        width: $circle-radius;
        border-radius: 50%;
      }
      .play-icon{
        width:$play-icon-size;
        height:$play-icon-size;
        left:$circle-radius/2 - $play-icon-size/2;
        top:11px;
        position:relative;
      }
    }
  }

</style>
