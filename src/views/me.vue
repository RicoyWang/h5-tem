<template>
  <div class="container">
    <mt-header class="header" title="66共赢家">
      <i class="iconfont icon-back" aria-hidden="true" slot="left" @click="$router.go(-1)"></i>
      <i class="iconfont icon-home" aria-hidden="true" slot="right" @click="$router.push({name: 'index'})"></i>
    </mt-header>
    <div class="base-info">
      <span class="person"><span class="iconfont icon-person"></span></span>
      <span class="user">
        <div class="main">匿名用户</div>
        <div class="sub">普通用户<i class="iconfont icon-next"></i></div>
      </span>
    </div>
    <div class="actions">
      <div class="action-row">
        <span class="item">收藏</span>
        <span class="item">购物车</span>
        <span class="item">订单</span>
      </div>
      <div class="action-row">
        <span class="item">联系客服</span>
        <span class="item">帮助中心</span>
        <span class="item">意见反馈</span>
      </div>
    </div>
    <div class="big-btn">退出登录</div>
    <navbar selected="me"></navbar>
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
    },
    methods: {
    }
  }
</script>

<style lang="less">
  @import '../style/vars.less';
  .base-info{
    height: 2rem;
    padding: 0.2rem;
    background:@lightMainColor;
    .person{
      margin: 0.2rem auto auto 0.2rem;
      display: inline-block;
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 100%;
      background: #fff;
      .icon-person{
        position: relative;
        left: 0.1rem;
        font-size: 1rem;
        color: @auxColor;
      }
    }
    .user{
      display: inline-block;
      margin-left: 0.4rem;
      .main{
        font-size: 0.32rem;
        margin-bottom: 0.2rem;
        color: #fff;
      }
      .sub{
        font-size: 0.24rem;
        color: @borderColor;
      }
    }
  }
  .actions{
    width: 100%;
    background: #fff;
    display: table;
    border-collapse: collapse;
    .action-row{
      display: table-row;
      .item{
        display: table-cell;
        height: 2rem;
        text-align: center;
        vertical-align: middle;
      }
    }
    .action-row + .action-row{
      border-top: 1px solid @borderColor;
    }
    .item + .item {
      border-left: 1px solid @borderColor;
    }
  }
  .big-btn{
    margin-top: 1rem;
    width: 100%;
    height: 0.8rem;
    line-height: 0.8rem;
    text-align: center;
    background: #fff;
  }
</style>
