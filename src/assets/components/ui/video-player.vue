<template>
  <div>
    <video ref="videoPlayer" class="video-js"></video>
  </div>
</template>

<script>
  import videojs from 'video.js';
  import "video.js/dist/video-js.css";

  export default {
    name: "VideoPlayer",
    props: {
      options: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    data() {
      return {
        playerOptions: {
          muted: true,
          autoplay:true,
          language: 'en',
          controls: true,
          sources: [{
            type: "video/mp4",
            src: "/src/assets/videos/test-video.mp4"
          }]
        }
      }
    },
    mounted() {
      this.player = videojs(this.$refs.videoPlayer, this.playerOptions, function onPlayerReady() {
        console.log('onPlayerReady', this);
      })
    },
    beforeDestroy() {
      if (this.player) {
        this.player.dispose()
      }
    }
  }
</script>
