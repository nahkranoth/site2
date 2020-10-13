<template>
  <div class="text-overlay">
    <span class="live heroic-h th-red">24/7 LIVE.</span>
    <div class="all-products">

      <div class="spring heroic-h th-blue">SPRING</div>
      <span class="year heroic-h th-red">2017</span>

      <div class="name-top heroic-b th-blue">WITH ANWAR HADIO</div>
      <span class="name-bottom heroic-b th-blue">& SOPHIA RICHIE</span>

      <div class="content gill-sans th-blue">Engineered for perfect form and exceptional fit – whatever you do in them.</div>

      <div class="button">
        <CustomButton></CustomButton>
      </div>

    </div>
  </div>
</template>

<script>
    import CustomButton from "./ui/button"
    export default {
      name: "text-overlay",
      components:{CustomButton}
    }
</script>

<style scoped lang="scss">

    .live{
      font-size:30px;
    }

    .spring{
      font-size:48px;
      margin-top:420px;
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
