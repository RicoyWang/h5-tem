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
       .aricle{
           width: 100%;
           min-height: .9rem;
           text-align: center;
       }
       .weixin{
           margin-top: 1rem;
           min-height: .9rem;
           text-align: center;
           width: 100%;
       }
       img{
           width: 80%;
           margin-left: 10%;
           height: auto;
       }
    }
}
</style>

<template>
    <div class="flex_box">
        <mt-header class="header" fixed title="联系我们">
          <i class="iconfont icon-back" aria-hidden="true" slot="left" @click="$router.go(-1)"></i>
          <i class="iconfont icon-home" aria-hidden="true" slot="right" @click="$router.push({name: 'index'})"></i>
        </mt-header>
        <div class="text">
            <div class="aricle">XXXXXXXXXXXXXXX</div>
            <div class="weixin">XXXXXXXXXXXXXXX</div>
            <img/>
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

