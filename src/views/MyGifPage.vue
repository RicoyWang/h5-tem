<style lang="less" scoped>
    .gif_box{
        width: 100vw;
        min-height: 80vh;
    }
    .navbar{
        margin-top: .9rem;
        position: relative;
    }
    .add_address{
        margin-top:0;
        height: .9rem;
        line-height: .9rem;
        text-align: center;
        position: relative;
        div{
            height: 100%;
            width: 100%;
        }
        .edit{
            height: 80%;
            float: right;
            background-color: rgb(49, 132, 201);
        }
    }
</style>

<template>
    <div class="gif_box">
        <mt-header class="header" fixed title="我的礼品">
          <i class="iconfont icon-back" aria-hidden="true" slot="left" @click="$router.go(-1)"></i>
          <i class="iconfont icon-home" aria-hidden="true" slot="right" @click="$router.push({name: 'index'})"></i>
        </mt-header>
        <mt-navbar v-model="selected" class="navbar">
            <mt-tab-item id="1">寄存礼品</mt-tab-item>
            <mt-tab-item id="2">寄出礼品</mt-tab-item>
            <mt-tab-item id="3">全部礼品</mt-tab-item>
        </mt-navbar>
        <div class="add_address">
            <div>常用地址：XXXXX</div>
            <font class="edit">编辑</font>
        </div>
        <!-- tab-container -->
        <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
            <mt-cell v-for="n in 10" :title="'内容 ' + n" />
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
            <mt-cell v-for="n in 4" :title="'测试 ' + n" />
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
            <mt-cell v-for="n in 6" :title="'选项 ' + n" />
        </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    name: '',
    data () {
        return {
            selected:true,
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

