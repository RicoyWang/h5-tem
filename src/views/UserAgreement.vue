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
       padding-top: .4rem;
       text-align:left;
    }
}
</style>

<template>
    <div class="flex_box">
        <mt-header class="header" fixed title="用户协议">
          <i class="iconfont icon-back" aria-hidden="true" slot="left" @click="$router.go(-1)"></i>
          <i class="iconfont icon-home" aria-hidden="true" slot="right" @click="$router.push({name: 'index'})"></i>
        </mt-header>
        <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.</div>
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

