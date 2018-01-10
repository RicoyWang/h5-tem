<template>
  <div class="container">
    <mt-header class="header" title="66共赢家">
      <i class="iconfont icon-back" aria-hidden="true" slot="left" @click="$router.go(-1)"></i>
      <i class="iconfont icon-home" aria-hidden="true" slot="right" @click="$router.push({name: 'index'})"></i>
    </mt-header>

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
      <div class="tip">暂无维修信息</div>
    </div>

    <navbar selected="maintain"></navbar>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        goods: []
      }
    },
    components: {
      'navbar': require('components/navbar.vue')
    },
    computed: {
    },
    created () {
      this.$http.get(this.urls('/category/3/')).then((response) => {
        this.goods = response.body.all_goods
      })
    },
    methods: {
    }
  }
</script>

<style lang="less">
  @import '../style/vars.less';
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

