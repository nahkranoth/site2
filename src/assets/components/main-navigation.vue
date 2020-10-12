<template>
  <div class="container steel-blue">
    <div class="top content-width">
      <span class="menu customer gill-sans-m">
        <span class="item heroic-bl">{{ $t("currency") }}</span>
        <span class="horizontal-line"></span>
        <span class="item heroic-bl">{{ $t("stores") }}</span>
        <span class="horizontal-line"></span>
        <span class="item heroic-bl">{{ $t("customer")}}</span>
      </span>

      <span class="pay-off caslon">{{ $t("pay_off") }}</span>

      <span class="menu user gill-sans-m">
        <span class="item">{{ $t("newsletter") }}</span>
        <span class="horizontal-line"></span>
        <span class="item">{{ $t("sign_in") }}</span>
        <span class="horizontal-line special"></span>
        <span class="item"><span class="shopping-cart-button">img</span></span>
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
        <span class="search-bar "><InputField></InputField></span>
        <span class="search-icon">img!</span>
      </span>
    </div>
    <hr>
  </div>
</template>

<script>
  import InputField from "./ui/input-field";


  export default {
        name: "main-navigation",
        components:{InputField}
    }
</script>

<style scoped lang="scss">
  $side-margin: 14px;
  $max-width: 1303px + ($side-margin*2);
  $top-menu-width:300px;

  hr{
    border-top: 2px solid #e6e6e6;

  }

  .horizontal-line {

    position:relative;
    display:inline-block;
    width:1px;
    height:12px;
    background-color:#8088a3;
    margin: 0 5px 0 10px;
    top:1px;

    &.special{
      background-color:#e6e6e6;
      height:25px;

    }
  }

  .top{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width:$max-width;
    margin: 0 auto;
    height:36px;

    .item {
      font-size:11px;
    }

    .menu{
      display:flex;
      align-items:center;
      width:$top-menu-width;

      &.customer{
        margin-left: $side-margin;
      }
      &.user{
        margin-right: $side-margin;
        .horizontal-line{
          margin-left: auto;
          order: 2;
        }
        .item{
          position:relative;
          top:0;
          margin-left: auto;
          order: 2;
        }
      }
    }

    .pay-off{
      font-size:18px;
      display: flex;
      align-items: center;
    }

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
      text-align: right;
      margin-right:$side-margin;
    }

  }

</style>
