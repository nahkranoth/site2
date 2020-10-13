<template>
  <div id="app">

    <div class="navigation-container">
      <MainNavigation></MainNavigation>
    </div>

    <div class="header-wrapper">

      <div class="text-overlay-container">
        <TextOverlay></TextOverlay>
      </div>

      <div class="header-container">
        <HeaderImage></HeaderImage>
      </div>

    </div>

    <div class="video-container">
      <VideoPlayer></VideoPlayer>
    </div>

  </div>
</template>

<script>
import MainNavigation from "./assets/components/main-navigation";
import HeaderImage from "./assets/components/header-image";
import VideoPlayer from "./assets/components/ui/video-player";
import TextOverlay from "./assets/components/text-overlay";
import TextAnimation from "./assets/components/text-animation";

export default {
  name: 'app',
  components: {VideoPlayer, HeaderImage, MainNavigation, TextOverlay, TextAnimation},
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
  @import "./assets/styles/fonts";
  @import "./assets/styles/globals";
  @import "./assets/styles/colors";

  $side-margin: 14px;
  $max-width: 1303px + ($side-margin*2);
  $video-player-x: 90px;

  .header-wrapper{
    position:relative;
    max-width: $max-width;
    margin: 0 auto;
    height:1094px;
  }

  .text-overlay-container{
    position:absolute;
    margin: 162px 0 0 $side-margin;
    z-index:2;
  }

  .header-container{
    position:absolute;
    max-width: $max-width;
    right:0;
    margin: 30px 0 0 0;

    .header-image{
      width: 1012px ;
    }
  }

  .video-container{
    max-width: $max-width;
    margin: 0 auto 300px auto;

    .video-player{
      position:relative;
      top:-35px;
      margin-left: $side-margin + $video-player-x;
    }
  }


</style>
