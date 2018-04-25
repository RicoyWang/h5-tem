<style lang="less" scoped>
.flex_box{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    align-items: flex-start;
    height: 100vh;
    width:100vw;
    .text{
        flex: 0 1 80%;
       align-self: auto;
       margin-top:.9rem;
       min-height: 60vh;
       padding-top: .5rem;
    }
}
</style>

<template>
    <div class="flex_box">
        <mt-header class="header" fixed title="用户协议">
          <i class="iconfont icon-back" aria-hidden="true" slot="left" @click="$router.go(-1)"></i>
          <i class="iconfont icon-home" aria-hidden="true" slot="right" @click="$router.push({name: 'index'})"></i>
        </mt-header>
        <div class="text">
            文化创意产业Cultural and Creative Industries,是一种在经济全球化背景下产生的以创造力为核心的新兴产业，强调一种主体文化或文化因素依靠个人（团队）通过技术、创意和产业化的方式开发、营销知识产权的行业。



深圳前海小萌文化科技有限公司致力于文化创意产业发展，通过技术和市场相结合，运用“互联网+消费升级”的理念，积极参与文化创意产业发展。
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    name: '',
    data () {
        return {

        }
    },
    components:{
        
    },
    computed: { 

    },
    methods: {

    },
    mounted(){
    
    },
}
</script>

