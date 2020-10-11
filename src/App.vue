<template>
  <div id="app">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'app',
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
