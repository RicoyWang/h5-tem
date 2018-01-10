<template>
  <div class="navbar">
      <div @click="$router.push({name: 'index'})" :class="{'navbar-item':true, 'selected':selected == 'home'}">
          <i class="iconfont icon-home"></i>
          <span>首页</span>
      </div>
      <div @click="$router.push({name: 'categories'})" :class="{'navbar-item':true, 'selected':selected == 'categories'}">
          <i class="iconfont icon-yulan"></i>
          <span>分类</span>
      </div>
      <div @click="$router.push({name: 'discover'})" :class="{'navbar-item':true, 'selected':selected == 'discover'}">
          <i class="iconfont icon-faxian"></i>
          <span>发现</span>
      </div>
      <div @click="$router.push({name: 'maintain'})" :class="{'navbar-item':true, 'selected':selected == 'maintain'}">
          <i class="iconfont icon-weixiu"></i>
          <span>维修</span>
      </div>
      <div @click="$router.push({name: 'me'})" :class="{'navbar-item':true, 'selected':selected == 'me'}">
          <i class="iconfont icon-person"></i>
          <span>我的</span>
      </div>
  </div>
</template>

<script>
  export default {
    props: [
      'selected'
    ]
  }
</script>

<style lang="postcss">
  .navbar {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.8rem;
    background: #fff;
    font-size: 0.24rem;
    padding-top: 5px;
    & .navbar-item {
      flex: 1;
      display: flex;
      flex-direction: column;
      text-align: center;
      &.selected{
        color: red;
      }
      & .iconfont{
        font-size: 0.36rem;
      }
    }
  }
</style>
