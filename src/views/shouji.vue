<template>
    <div>
        <template v-if="goods.length != 0">
            <template v-for="index in goodsContainerNum">
                <div class="goods-container">
                    <div class="goods-item" @click="goGoods(2*index-2)">
                        <img :src="media(goods[2*index-2].goods_img[0])">
                        <p class="title">{{ goods[2*index-2].title }}</p>
                        <p class="price">￥{{goods[2*index-2].items[0]}}</p>
                        <i  class="icon-font-hu add2cart">&#xe601;</i>
                    </div>
                    <div class="goods-item" @click="goGoods(2*index-1)">
                        <template v-if="2*index-1 < goods.length">
                            <img :src="media(goods[2*index-1].goods_img[0])">
                            <p class="title">{{ goods[2*index-1].title }}</p>
                            <p class="price">￥{{goods[2*index-1].items[0]}}</p>
                            <i  class="icon-font-hu add2cart">&#xe601;</i>
                        </template>
                    </div>
                </div>
            </template>
        </template>
        <div v-else class="no-product-tip">
            没有相应商品
        </div>

        <div class="nav-bar">
            <div @click="$router.push('/')" class="navbar-item">
                <span>首页</span>
                <i class="iconfont icon-shouye"></i>
            </div>
            <div @click="$router.push('shouji')" class="navbar-item selected">
                <span>手机</span>
                <i class="iconfont icon-shouji"></i>
            </div>
            <div @click="$router.push('peijian')" class="navbar-item">
                <span>配件</span>
                <i class="iconfont icon-tiemo"></i>
            </div>
            <div @click="$router.push('weixiu')" class="navbar-item">
                <span>维修</span>
                <i class="iconfont icon-cogs3"></i>
            </div>
            <div @click="$router.push('huanxin')" class="navbar-item">
                <span>回换</span>
                <i class="iconfont icon-huishou"></i>
            </div>
        </div>
    </div>
</template>
<style lang="less">
</style>
<script>
    export default{
      data () {
        return {
          name: 'shouji',
          goods: []
        }
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
        this.$emit('selected', this.name)
        this.$http.get(this.urls('/goods/category/1/')).then((response) => {
          this.goods = response.body
        })
        console.log(this.goods)
      },
      methods: {
        goGoods (index) {
          this.$router.push({name: 'goods', params: {goodsId: this.goods[index].id}})
        }
      }
    }
</script>
