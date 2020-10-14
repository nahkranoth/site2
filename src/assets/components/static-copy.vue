<template>
  <div class="static-copy">
    <div class="live-container">
      <span class="live heroic-h th-red" ref="liveTime">{{$t("liveTime")}}</span>
    </div>
    <div class="all-products">

      <div class="spring heroic-h th-blue">{{$t("spring")}}</div>
      <span class="year heroic-h th-red">{{$t("year")}}</span>

      <div class="name-top heroic-b th-blue">{{$t("name1")}}</div>
      <span class="name-bottom heroic-b th-blue">{{$t("name2")}}</span>

      <div class="content gill-sans th-blue">{{$t("engineer_copy")}}</div>

    </div>
  </div>
</template>

<script>
  import { gsap } from "gsap";
  export default {
    name: "text-overlay",
    mounted(){
      var tl = gsap.timeline();
      tl.to(this.$refs.liveTime, {top:0, duration:1}, .8);
    }
  }
</script>

<style scoped lang="scss">
    .live-container{
      overflow: hidden;
      .live{
        font-size:40px;
        top: 100px;
        position: relative;
      }
    }

    .spring{
      font-size:48px;
      margin-top:402px;
    }
    .year{
      font-size:48px;
    }
    .name-top{
      font-size:25px;
      margin-top:40px;
    }
    .name-bottom{
      font-size:25px;
    }
    .content{
      max-width:230px;
      font-size:16px;
      margin-top:27px;
    }
    .button{
      margin-top:30px;
    }

</style>
