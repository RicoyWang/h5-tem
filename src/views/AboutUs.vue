<style lang="less" scoped>
.flex_box{
    height: 80vh;
    width:100vw;
    .text{
        height: .9rem;
        background-color: white;
        border-bottom: 1px solid #f5f5f7;
        text-align: center;
        line-height: .9rem;
       &:nth-of-type(1){
            margin-top:.9rem;
       }
    }
}
</style>

<template>
    <div class="flex_box">
        <mt-header class="header" fixed title="关于我们">
          <i class="iconfont icon-back" aria-hidden="true" slot="left" @click="$router.go(-1)"></i>
          <i class="iconfont icon-home" aria-hidden="true" slot="right" @click="$router.push({name: 'index'})"></i>
        </mt-header>
        <div class="text" @click="$router.push({name: 'UserAgreement'})">用户协议</div>
        <div class="text" @click="$router.push({name: 'CompanyProfile'})">公司简介</div>
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

