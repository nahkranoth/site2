<template>
  <div class="animated-copy">
    <div class="top heroic-h th-red">

      <span class="t-l">L</span>
      <span class="heart-space"></span>
      <span class="t-ve">V E</span>
      <span class="t-dot">.</span>

    </div>
    <img class="heart-icon" src="src/assets/icons/heart.svg" alt="">
    <div class="bottom heroic-h th-red">L.A.</div>
  </div>
</template>

<script>
    export default {
        name: "text-animation"
    }
</script>

<style scoped lang="scss">

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
    top: 29px;
    left: 140px;
    width: 385px;
    margin-right: 75px;
  }

  .bottom{
    left: 519px;
    top: -70px;
    display: inline;
    position: relative;
    letter-spacing: 47px;
  }

</style>
