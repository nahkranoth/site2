<template>
  <div id="app">
    <MainNavigation></MainNavigation>
    <HeaderImage></HeaderImage>
    <VideoPlayer></VideoPlayer>
    {{msg}}
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
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
  @font-face {
    font-family: "Heroic-Black";
    src: url('./assets/fonts/heroiccondensed-black-webfont.ttf');
  }
  @font-face {
    font-family: "Heroic-Bold";
    src: url('./assets/fonts/heroiccondensed-bold-webfont.ttf');
  }
  @font-face {
    font-family: "Heroic-Heavy";
    src: url('./assets/fonts/heroiccondensed-heavy-webfont.ttf');
  }
  @font-face {
    font-family: "Heroic-Medium";
    src: url('./assets/fonts/heroiccondensed-medium-webfont.ttf');
  }


#app {
  font-family:  'Heroic-Medium',Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
