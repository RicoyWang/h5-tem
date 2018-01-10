<template>
  <div class="container">
    <mt-header class="header" title="66共赢家">
      <i class="iconfont icon-back" aria-hidden="true" slot="left" @click="$router.go(-1)"></i>
      <i class="iconfont icon-home" aria-hidden="true" slot="right" @click="$router.push({name: 'index'})"></i>
    </mt-header>
    <div class="categories-bar">
      <span :class="{'selected': categoryId == 1}" @click="changeCategory(1)">手机</span>
      <span :class="{'selected': categoryId == 2}" @click="changeCategory(2)">配件</span>
      <span :class="{'selected': categoryId == 3}" @click="changeCategory(3)">维修</span>
      <span :class="{'selected': categoryId == 4}" @click="changeCategory(4)">智能家居</span>
    </div>
    <template v-if="goods.length != 0">
      <div class="goods-container" v-if="index%2 == 0" v-for="(g, index) in goods" :key="g.id">
        <div class="goods-row">
          <div class="goods-item" @click="goGoods(goods[index].id)">
            <img :src="media(goods[index].goods_img[0])">
            <p class="title">{{ goods[index].title }}</p>
            <p class="price">￥{{goods[index].items[0].price}}</p>
            <i  class="icon-font-hu add2cart">&#xe601;</i>
          </div>
          <div class="goods-item" @click="goGoods(goods[index+1].id)"  v-if="index+1 < goods.length">
            <img :src="media(goods[index+1].goods_img[0])">
            <p class="title">{{ goods[index+1].title }}</p>
            <p class="price">￥{{goods[index+1].items[0].price}}</p>
            <i  class="icon-font-hu add2cart">&#xe601;</i>
          </div>
        </div>
      </div>
    </template>
    <div v-else class="no-product-tip">
      <div class="iconfont icon-nothing"></div>
      <div class="tip">没有相应商品</div>
    </div>
    <navbar selected="categories"></navbar>
  </div>
</template>
<style lang="less">
  @import '../style/vars.less';

  @categories-bar-height: 0.7rem;
  .categories-bar{
    background: #fff;
    height: @categories-bar-height;
    padding-left: 0.2rem;
    margin-bottom: 0.2rem;
    span{
      display: inline-block;
      padding-right: 0.3rem;
      padding-left: 0.3rem;
      line-height: @categories-bar-height;
      &.selected{
        color: @mainColor;
        border-bottom: 2px solid @mainColor;
      }
    }
  }

  .goods-container {
    .goods-row{
      display: flex;
    }
    .goods-item {
      margin: 0.1rem 0.15rem 0.1rem 0.1rem;
      height: 4.6rem;
      width: 3.5rem;
      text-align: center;
      background-color: #fff;
      font-size: 0.28rem;
      box-shadow: 3px 2px 5px #ccc;
      p{
        margin: 0.1rem;
        // width: 3.2rem;
      }
      img {
        width: 3.5rem;
        height: 3.5rem;
      }
      .title {
        display: block;
        height: 0.4rem;
        font-size: 0.26rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: @darkFont;
      }
      .price {
        float: left;
        margin: auto 0.1rem;
        color: @mainColor;
      }
      .add2cart {
        float: right;
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
        goods: [],
        categoryId: 1
      }
    },
    components: {
      'navbar': require('components/navbar.vue')
    },
    computed: {
      goodsContainerNum () {
        let goodsLength = this.goods.length
        if (goodsLength % 2) {
          return parseInt(goodsLength / 2) + 1
        } else {
          return goodsLength / 2
        }
      }
    },
    created () {
      this.getGoods()
    },
    methods: {
      goGoods (goodsId) {
        this.$router.push({name: 'goods', params: {goodsId: goodsId}})
      },
      getGoods () {
        this.$http.get(this.urls('/category/' + this.categoryId)).then((response) => {
          this.goods = response.body.all_goods
        })
      },
      changeCategory (categoryId) {
        this.categoryId = categoryId
        this.getGoods()
      }
    }
  }
</script>

