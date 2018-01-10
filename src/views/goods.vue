<template>
    <div class="container">
        <mt-header class="header" title="66共赢家">
          <i class="iconfont icon-back" aria-hidden="true" slot="left" @click="$router.go(-1)"></i>
          <i class="iconfont icon-home" aria-hidden="true" slot="right" @click="$router.push({name: 'index'})"></i>
        </mt-header>
        <div style="width:7.5rem; height: 7.5rem">
            <mt-swipe :auto="4000">
                <mt-swipe-item v-for="item in goods.goods_img" :key="item.id">
                    <img width="100%" :src="media(item)">
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <div class="info">
            <p class="title">{{ goods.title }}</p>
            <div class="price">
              <div class="main">
                <span class="money-placeholder">￥</span>
                <span>{{ itemPrice }}</span>
              </div>
              <div class="sub">
                <span class="aux-btn">降价通知</span>
              </div>
            </div>
        </div>
        <div class="attributes">
            <div class="attr-key">规格：</div>
            <div class="attr-vals">
              <div class="attr" :class="{selected: selectedItem == item.id}" :key="item.attribute"
                v-for="(item, index) in goods.items" @click="changeItem(index)">
                  {{ item.attribute }}
              </div>
            </div>
        </div>
        <div class="attributes">
          <div class="attr-key">数量：</div>
          <div class="attr-vals num-actions">
            <span class="iconfont icon-minus" @click="goods_num = goods_num > 1 ? goods_num-1 : 1"></span>
            <input type="text" class="goods-num" v-model="goods_num">
            <span class="iconfont icon-plus" @click="goods_num = goods_num + 1"></span>
          </div>
        </div>
        <div class="detail">
            <img width="100%" :src="media(item)" v-for="item in goods.goods_detail_img" :key="item.id">
        </div>
        <div class="action-bar">
            <div class="action">
                <i class="iconfont icon-xinchangtai"></i>
                <span class="desc">收藏</span>
            </div>
            <div class="add-to-cart">加入购物车</div>
            <div class="buy-now">立即购买</div>
        </div>
    </div>
</template>
<script>
    export default{
      data () {
        return {
          goods: {},
          itemPrice: '--',
          selectedItem: 0,
          goods_num: 1
        }
      },
      created () {
        this.$http.get(this.urls('/goods/') + this.$route.params.goodsId + '/').then(
                (response) => {
                  this.goods = response.body
                  console.log(this.goods.items)
                  this.goods.items.sort((a, b) => {
                    return a.price - b.price
                  })
                  console.log(this.goods.items)
                  for (var item of this.goods.items) {
                    if (item.stock > 0) {
                      this.selectedItem = item.id
                      this.itemPrice = item.price
                      break
                    }
                  }
                }
            )
      },
      methods: {
        changeItem (index) {
          this.selectedItem = this.goods.items[index].id
          this.itemPrice = this.goods.items[index].price
        }
      }
    }
</script>

<style lang="less">
    @import '../style/vars.less';

    .header {
        font-size: 0.36rem !important;
    }
    .aux-btn{
      border: 1px solid @borderColor;
      border-radius: 3px;
      padding: 5px;
      font-size: 0.2rem;
      color: @lightMainFont;
    }
    @barHeight: 0.9rem;
    .num-actions{
      display: flex;
      margin-left: 0.1rem;
      text-align: center;
      .icon-minus, .icon-plus{
        margin:0;
        width: 0.4rem;
        height: 0.4rem;
        border: 1px solid @borderColor;
      }
      .icon-minus{
        border-radius: 5px 0 0 5px;
      }
      .icon-plus{
        border-radius: 0 5px 5px 0;
      }
      .goods-num{
        width: 0.6rem;
        border: 1px solid @borderColor;
        text-align: center;
      }
    }
    .info {
        border-top: 1px solid @lineColor;
        padding: 0 0.2rem 0.2rem 0.2rem;
        background-color: #fff;
        .title {
            font-size: 0.32rem;
            color: #333;
        }
        .price {
          display: flex;
          justify-content: space-between;
          .main{
            color: @mainColor;
            font-size: 0.44rem;
            font-weight: bold;
            .money-placeholder{
              font-size: 0.3rem;
            }
          }
          .sub{
            position: relative;
            bottom: -5px;
            width: 1.5rem;
            text-align: center;
          }
        }
    }

    .attributes {
      display: flex;
      margin-top: 0.2rem;
      padding: 0.2rem;
      background: #fff;
      .attr-key{
        width: 1rem;
      }
      .attr-vals{
      }
      .attr {
          border: 1px solid @borderColor;
          border-radius: 6px;
          margin-right: 0.2rem;
          margin-left: 0.1rem;
          margin-bottom: 0.1rem;
          padding: 2px 5px;
          font-size: 0.26rem;
          min-width: 2rem;
          text-align:center;
          &.selected {
              border: 1px solid @darkMain;
              color: @darkMain;
          }
      }
    }

    .action-bar {
        position: fixed;
        bottom: 0;
        height: @barHeight;
        background-color: #fff;
        width: 100%;
        .action {
            display: inline-block;
            width: 1.5rem;
            height: 100%;
            position: relative;
            border-top: 1px solid @borderColor;
            color: @lightMainFont;
            .iconfont {
                font-size: 20px;
                position: absolute;
                top: 0.1rem;
                left: 0.48rem;
                width: 0.5rem;
                height: 0.5rem;
            }
            .desc {
                position: absolute;
                left: 0.46rem;
                bottom: 0.1rem;
                font-size: 0.24rem;
            }
        }
        .action-btn {
            float: right;
            width: 3rem;
            height: 100%;
            color: #fff;
            text-align: center;
            line-height: @barHeight;
            font-size: 0.32rem;
        }
        .add-to-cart {
            .action-btn;
            right: 0;
            background-color: @mainColor;
        }
        .buy-now {
            .action-btn;
            background-color: @subColor;
        }
    }

    .detail {
      margin-top: 0.2rem;
      margin-bottom: @barHeight + 0.2rem;
      img{
        display: block;
      }
    }

    .mint-swipe-indicator .is-active {
        background: @mainColor !important;
    }

    .mint-swipe-indicator {
        background-color: @mainFont;
        opacity: 0.7 !important;
    }

</style>
