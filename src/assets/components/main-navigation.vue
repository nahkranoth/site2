<template>
  <div class="container">
    <div class="top">
      <span class="customer-menu">
        <span class="item">{{ $t("currency") }}</span>
        <span class="horizontal-line"></span>
        <span class="item">{{ $t("stores") }}</span>
        <span class="horizontal-line"></span>
        <span class="item">{{ $t("customer")}}</span>
      </span>
      <span class="pay-off">{{ $t("pay_off") }}</span>
      <span class="user-menu">
        <span class="item">{{ $t("newsletter") }}</span>
        <span class="horizontal-line"></span>
        <span class="item">{{ $t("sign_in") }}</span>
        <span class="horizontal-line-special"></span>
        <span class="shopping-cart-button"></span>
      </span>
    </div>
    <div class="bottom">
      <span class="logo"><img src="/src/assets/images/logo.png" alt=""></span>
      <span class="menu">
        <span class="item">{{ $t("women") }}</span>
        <span class="item">{{ $t("men") }}</span>
        <span class="item">{{ $t("kids") }}</span>
        <span class="item">{{ $t("labels") }}</span>
        <span class="item">{{ $t("sale") }}</span>
      </span>
      <span class="search">{{ $t("search") }}</span>
      <span class="search-icon">img!</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "main-navigation"
    }
</script>

<style scoped>

</style>
