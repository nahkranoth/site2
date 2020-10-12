<template>
  <div class="container">
    <div class="top content-width">
      <span class="customer-menu gill-sans-m">
        <span class="item heroic-bl">{{ $t("currency") }}</span>
        <span class="horizontal-line"></span>
        <span class="item heroic-bl">{{ $t("stores") }}</span>
        <span class="horizontal-line"></span>
        <span class="item heroic-bl">{{ $t("customer")}}</span>
      </span>
      <span class="pay-off caslon">{{ $t("pay_off") }}</span>
      <span class="user-menu gill-sans-m">
        <span class="item">{{ $t("newsletter") }}</span>
        <span class="horizontal-line"></span>
        <span class="item">{{ $t("sign_in") }}</span>
        <span class="horizontal-line-special"></span>
        <span class="shopping-cart-button"></span>
      </span>
    </div>
    <hr>
    <div class="bottom content-width">
      <img class="logo" src="/src/assets/images/logo.png" alt="">
      <span class="menu gill-sans-m">
        <span class="item">{{ $t("women") }}</span>
        <span class="item">{{ $t("men") }}</span>
        <span class="item">{{ $t("kids") }}</span>
        <span class="item">{{ $t("labels") }}</span>
        <span class="item">{{ $t("sale") }}</span>
      </span>
      <span class="search">{{ $t("search") }}</span>
      <span class="search-icon">img!</span>
    </div>
    <hr>
  </div>
</template>

<script>
    export default {
        name: "main-navigation"
    }
</script>

<style scoped lang="scss">
  hr{
    border-top: 2px solid #e6e6e6;
  }
  .item {
    font-size:11px;
    color:#8088a3;
  }

  .horizontal-line {
    top:1px;
    position:relative;
    display:inline-block;
    width:1px;
    height:10px;
    background-color:#8088a3;
  }

  .bottom{

    .logo{
      width:220px;
    }

  }

  .top{

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width:1303px;
    margin: 9px auto;

    .item{

    }

    .customer-menu{
      align-self:flex-start;
      margin-left: 14px;
    }

    .pay-off{
      font-size:18px;
      color:#8088a3;
    }

    .user-menu{
      align-self:flex-end;
      margin-right: 14px;
    }

  }

</style>
