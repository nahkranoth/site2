<template>
    <span><input type="text" class="input gill-sans-m" :value="$t('search')"></span>
</template>

<script>
    export default {
        name: "input-field"
    }
</script>

<style scoped lang="scss">
  $padding:10px;

  input{
    font-size:13px;
    color:#a7a7a7;
    width:157px - ($padding * 2);
    height:28px - ($padding * 2);
    border: 1px solid #e6e6e6;
    padding:$padding;
  }
</style>
