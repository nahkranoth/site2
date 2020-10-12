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

  #app {
    font-family: 'Heroic-Medium',Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

</style>
