<template>
  <div class="container steel-blue">
    <div class="top">
      <span class="menu customer gill-sans-m">
        <span class="item currency heroic-bl">{{ $t("currency") }}</span>
        <span class="horizontal-line"></span>
        <span class="item stores heroic-bl">{{ $t("stores") }}</span>
        <span class="horizontal-line"></span>
        <span class="item customer heroic-bl">{{ $t("customer")}}</span>
      </span>

      <span class="pay-off caslon">{{ $t("pay_off") }}</span>

      <span class="menu user gill-sans-m">
        <span class="item newsletter">{{ $t("newsletter") }}</span>
        <span class="horizontal-line"></span>
        <span class="item sign-in">{{ $t("sign_in") }}</span>
        <span class="horizontal-line special"></span>
        <span class="item shopping-cart"><span class="shopping-cart-button"><img src="/src/assets/icons/shopping-cart.png" alt=""></span></span>
      </span>
    </div>

    <hr>

    <div class="bottom">
      <span class="logo-container"><img class="logo" src="/src/assets/images/logo.png" alt=""></span>
      <span class="menu gill-sans-m">
        <span class="item">{{ $t("women") }}</span>
        <span class="item">{{ $t("men") }}</span>
        <span class="item">{{ $t("kids") }}</span>
        <span class="item">{{ $t("labels") }}</span>
        <span class="item">{{ $t("sale") }}</span>
      </span>
      <span class="search gill-sans">
        <span class="search-input"><InputField></InputField></span>
        <span class="search-icon"><img src="/src/assets/icons/search.png" alt=""></span>
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
        .item{
          &.currency{
            margin-right:5px;
          }

          &.stores{
            margin-left:5px;
            margin-right:5px;
          }

          &.customer{
            margin-left:4px;
          }
        }
      }
      &.user{
        margin-right: $side-margin;
        .horizontal-line{
          margin-left: auto;
          order: 2;
        }
        .item{
          position:relative;
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
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width:$max-width;
    margin: 0 auto;

    .logo-container{
      width:300px;

      .logo{
        width:220px;
        margin: 27px 0 29px $side-margin + 2px;
      }
    }

    .menu{
      width:350px;
      display: flex;
      align-items: center;
      justify-content: space-around;

      .item {
        font-size:14px;
        margin: 0 22px;

      }


    }

    .search{
      width:300px;
      display: flex;
      align-items: center;
      margin-right:$side-margin;
      span{
        position:relative;
        margin-left: auto;
        &.search-icon{
          width: 58px;
          text-align: right;
          left: -4px;
          position: relative;
          top: 1px;
        }
        &.search-input{
          text-align: right;
          left: 60px;
        }
      }
    }

  }

</style>
