<template>
    <div class="container">
        <mt-header class="header" title="66共赢家">
            <!-- <i class="iconfont icon-search" aria-hidden="true" slot="right"></i> -->
        </mt-header>
        <div class="swiper">
            <mt-swipe :auto="4000">
                <mt-swipe-item v-for="(item,index) in swipers" :key="item.id">
                    <img width="100%" :src="media(item.image)" @click="goIndex(index)">
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <div class="tip-bar">
          <div class="tip-item">
            <i class="iconfont icon-checkon"></i>
            <span class="desc">共赢自营品牌</span>
          </div>
          <div class="tip-item">
            <i class="iconfont icon-checkon"></i>
            <span class="desc">七天无忧退货</span>
          </div>
          <div class="tip-item">
            <i class="iconfont icon-checkon"></i>
            <span class="desc">24小时快速发货</span>
          </div>
        </div>
        <div>
            <div id="new-product-block">
                <div class="title">
                  <img :src="media(marketImages.new)" v-if="marketImages.new">
                  <span v-else class="word-title">最新商品</span>
                  </div>
                <div class="product-grid">
                  <div class="product-row" v-if="index % 2 == 0" v-for="(goods, index) in newGoods" :key="goods.id">
                     <div class="product-item" @click="goGoodsPage(newGoods[index].goods.id)" >
                      <img :src="media(newGoodsImgs[index] || newGoods[index].image)">
                       <div class="product-info">
                          <p class="desc">{{ newGoods[index].desc }}</p>
                          <p class="sub-desc">{{ newGoods[index].sub_desc}}</p>
                          <span class="small-btn" v-if="newGoods[index].label">{{newGoods[index].label}}</span>
                      </div>
                    </div>
                     <div class="product-item" @click="goGoodsPage(newGoods[index+1].goods.id)" >
                      <img :src="media(newGoodsImgs[index+1] || newGoods[index+1].image)">
                       <div class="product-info">
                          <p class="desc">{{ newGoods[index+1].desc }}</p>
                          <p class="sub-desc">{{ newGoods[index+1].sub_desc}}</p>
                          <span class="small-btn" v-if="newGoods[index+1].label">{{newGoods[index+1].label}}</span>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div id="hot-product-block">
                <div class="title">
                  <img :src="media(marketImages.hot)" v-if="marketImages.hot">
                  <span v-else class="word-title">热门商品</span>
                </div>
                <div class="product-scroll-view">
                  <div class="product-item" v-for="(goods, index) in hotGoods" :key="goods.id"  @click="goGoodsPage(goods.goods.id)" >
                    <img :src="media(hotGoods[index].image)">
                    <span class="title">{{goods.goods.title}}</span>
                    <span class="price">￥{{goods.goods.items[0].price}}</span>
                  </div>
                </div>
            </div>
        </div>
        <!-- <div class="back-top-btn" @click="toTop">
            <i class="iconfont icon-gouwuche"></i>
        </div> -->
        <navbar selected="home"></navbar>
    </div>
</template>
<style lang="less" scoped>
    @import '../style/vars.less';
    .swiper{
      height: 4.5rem !important;
    }
    .tip-bar{
      display: flex;
      background: #FFF;
      padding: 5px;
      .tip-item{
        flex: 1;
        text-align: center;
        .desc{
          font-size: 0.22rem;
        }
      }
      .iconfont{
        color: @mainColor;
        font-size: 0.28rem;
      }
    }
    #new-product-block, #hot-product-block{
        margin: 0.1rem auto;
        padding: 0.1rem auto;
        background: #fff;
        .title{
          padding: 0.2rem;
          text-align: center;
          color: @lightMainFont;
          img{
            height: 1rem;
            width: 100%;
          }
        }
        .word-title:before{
          content: ' ';
          display: inline-block;
          border-bottom: 1px solid @borderColor;
          width: 0.3rem;
          height: 1px;
          margin-right: 0.2rem;
        }
        .word-title:after{
          content: ' ';
          display: inline-block;
          border-bottom: 1px solid @borderColor;
          width: 0.3rem;
          height: 1px;
          margin-left: 0.2rem;
        }
    }
    .small-btn{
      padding: 1px 3px;
      border: 1px solid @auxColor;
      color: @auxColor;
      border-radius: 4px;
      font-size: 0.22rem;
    }
    .product-grid{
      display: table;
      width: 7.5rem;
      border-collapse: separate;
      border-spacing: 5px 2px;
      padding-bottom: 10px;
      .product-row{
        display: table-row;
        margin: 5px;
        .product-item{
          display: table-cell;
          position: relative;
          background: #f4f4f4;
          img{
            width: 100%;
          }
          .product-info{
            position: absolute;
            top: 0.4rem;
            left: 0.2rem;
            .desc{
              font-size: 0.26rem;
              line-height: 0.3rem;
              margin:0;
            }
            .sub-desc{
              font-size: 0.22rem;
              line-height: 0.3rem;
              margin:0 0 0.4rem;
            }
          }
        }
      }
    }
    .product-scroll-view{
      display: flex;
      height: 4.7rem;
      width: 7.5rem;
      overflow-x: scroll;
      overflow-y: hidden;
      .product-item{
        img{
          margin: 0.2rem;
          background: #f4f4f4;
          width: 3rem;
        }
        .title{
          padding: 0.2rem;
          display: inline-block;
          width: 3rem;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow:hidden;
        }
        .price{
          padding-left: 0.2rem;
          color: @mainColor;
        }
      }
    }
    .product-list {
        background-color: #fff;
        position: relative;
        width: 7.3rem;
        height: 2rem;
        margin: 0.1rem;
        border: solid 1px @borderColor;
        border-radius: 0.1rem;
        -webkit-border-radius: 0.1rem;
        -moz-border-radius: 0.1rem;
        img {
            float: left;
            width: 2rem;
            height: 100%;
        }
        .product-info {
            position: relative;
            float: left;
            width: 5rem;
            padding: 0 0.1rem;
            height: 100%;

            p {
                margin: 0.1rem;
                font-size: 0.28rem;
                &.price {
                    position: absolute;
                    bottom: 0.1rem;
                    color: #f00;
                }
            }
            .add2cart {
                position: absolute;
                bottom: 0.1rem;
                right: 0.1rem;
                margin: auto 0.2rem;
                color: #eb3f2f;;
            }
        }
    }
</style>
<script>
    export default {
      data () {
        return {
          name: 'index',
          swipers: [],
          newGoods: [],
          newGoodsImgs: [],
          hotGoods: [],
          hotGoodsImgs: [],
          selected: 1,
          marketImages: {}
        }
      },
      components: {
        'navbar': require('components/navbar.vue')
      },
      created () {
        this.$emit('selected', this.name)
        this.$http.get(this.urls('/market/index/')).then((response) => {
          this.swipers = response.body.index_swipers
          this.newGoods = response.body.new_goods
          this.hotGoods = response.body.hot_goods
          this.marketImages = response.body.marketImages
          // this.newGoodsImgs = response.body.newGoodsImgs
          // this.hotGoodsImgs = response.body.hotGoodsImgs
          // console.log(this.hotGoods)
          // console.log(this.hotGoodsImgs)
        }, (response) => {

        })
      },
      methods: {
        goGoodsPage (goodsId) {
          this.$router.push({name: 'goods', params: {goodsId: goodsId}})
        },
        toTop () {
          document.documentElement.scrollTop = document.body.scrollTop = 0
        },
        goIndex (index) {
          this.$router.push(this.swipers[index].redirect_url)
        }
      }
    }
</script>
