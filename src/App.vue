<template>
  <div id="app">
    <MainNavigation></MainNavigation>
    <HeaderImage></HeaderImage>
    <VideoPlayer></VideoPlayer>
  </div>
</template>

<script>
import MainNavigation from "./assets/components/main-navigation";
import HeaderImage from "./assets/components/header-image";
import VideoPlayer from "./assets/components/video-player";
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



</style>
