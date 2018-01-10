<template>
    <div>
        <div class="add-box" v-for="(changeImage, index) in changeImages" @click="goGoods(index)">
            <img :src="media(changeImage.image)">
        </div>

        <div class="nav-bar">
            <div @click="$router.push('/')" class="navbar-item">
                <span>首页</span>
                <i class="iconfont icon-shouye"></i>
            </div>
            <div @click="$router.push('shouji')" class="navbar-item">
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
            <div @click="$router.push('huanxin')" class="navbar-item selected">
                <span>回换</span>
                <i class="iconfont icon-huishou"></i>
            </div>
        </div>
    </div>
</template>
<style lang="less">
    .add-box {
        border: 0.05rem solid #fff;
        img {
            width: 7.4rem;
        }
    }
</style>
<script>
    export default{
      data () {
        return {
          name: 'huanxin',
          changeImages: []
        }
      },
      computed: {
        goodsContainerNum () {
          let goodsLength = this.goods.length
          if (goodsLength % 4) {
            return parseInt(goodsLength / 4) + 1
          } else {
            return goodsLength / 4
          }
        }
      },
      created () {
        this.$emit('selected', this.name)
        this.$http.get(this.urls('/huanxin/')).then((response) => {
          this.changeImages = response.body['changeImgs']
        })
      },
      methods: {
        goGoods (index) {
          console.log(index)
          this.$router.push({ name: 'goods', params: {goodsId: this.changeImages[index].goods} })
        }
      }
    }
</script>
