<template>
  <div id="app">

    <div class="navigation-container">
      <MainNavigation></MainNavigation>
    </div>

    <div class="header-container">
      <HeaderImage></HeaderImage>
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

export default {
  name: 'app',
  components: {VideoPlayer, HeaderImage, MainNavigation},
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

  .header-container{
    max-width: $max-width;
    margin: 30px auto 0 auto;

    .header-image{
      width: 1012px + $side-margin;
      margin: 0 0 0 auto;
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
