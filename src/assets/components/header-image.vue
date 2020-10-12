<template>
    <div>Header Image</div>
</template>

<script>
  import { gsap } from "gsap";

  export default {
        name: "header-image",
        methods: {
          fade(){
            gsap.fromTo(this.$refs.logo,{autoAlpha:1},{autoAlpha:0, duration: 0.35});
          }
        }
    }
</script>

<style scoped>

</style>
