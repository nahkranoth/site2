<template>
  <div class="container steel-blue">
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
      <span class="logo-container"><img class="logo" src="/src/assets/images/logo.png" alt=""></span>
      <span class="menu gill-sans-m">
        <span class="item">{{ $t("women") }}</span>
        <span class="item">{{ $t("men") }}</span>
        <span class="item">{{ $t("kids") }}</span>
        <span class="item">{{ $t("labels") }}</span>
        <span class="item">{{ $t("sale") }}</span>
      </span>
      <span class="search gill-sans">
        <span class="search-bar ">{{ $t("search") }}</span>
        <span class="search-icon">img!</span>
      </span>
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
  $side-margin: 14px;
  $max-width: 1303px - ($side-margin*2);
  $top-menu-width:300px;

  hr{
    border-top: 2px solid #e6e6e6;

  }

  .horizontal-line {
    top:3px;
    position:relative;
    display:inline-block;
    width:1px;
    height:12px;
    background-color:#8088a3;
    margin: 0 5px 0 10px;
  }

  .bottom{

    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .logo-container{
      width:300px;

      .logo{
        width:220px;
        margin: 27px 0 29px $side-margin + 2px;
      }
    }

    .menu{
      width:350px;
      display:flex;
      flex-direction: row;
      justify-content: space-around;

      .item {
        font-size:14px;
      }
    }

    .search{
      width:300px;
    }

  }

  .top{

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width:$max-width;
    margin: 9px auto;

    .item {
      font-size:11px;
    }

    .customer-menu{
      align-self:flex-start;
      margin-left: $side-margin;
      width:$top-menu-width;
    }

    .pay-off{
      font-size:18px;
    }

    .user-menu{
      align-self:flex-end;
      margin-right: $side-margin;
      width:$top-menu-width;
      text-align: right;
    }

  }

</style>
