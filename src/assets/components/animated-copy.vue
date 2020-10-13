<template>
  <div class="animated-copy">
    <div class="top heroic-h th-red">L<span class="heart-space"></span><span class="trailing">V</span>E.</div>
    <img class="heart-icon" src="src/assets/icons/heart.svg" alt="">
    <div class="bottom heroic-h th-red">L.A.</div>
  </div>
</template>

<script>
    export default {
        name: "text-animation"
    }
</script>

<style scoped>

  .animated-copy{
    font-size:455px;
    letter-spacing: 45px;
  }

  .top{
    margin-left: -20px;
    margin-top:-30px;
  }

  .heart-space{
    display:inline-block;
    width:385px;
    height:340px;
  }

  .heart-icon{
    position: absolute;
    top: 30px;
    left: 111px;
    width: 352px;
    height: 333px;
    margin-right: 75px
  }

  .trailing{
    letter-spacing: 111px;
  }

</style>
