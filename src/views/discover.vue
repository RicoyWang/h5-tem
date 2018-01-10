<template>
  <div class="container">
    <mt-header class="header" title="66共赢家">
      <i class="iconfont icon-back" aria-hidden="true" slot="left" @click="$router.go(-1)"></i>
      <i class="iconfont icon-home" aria-hidden="true" slot="right" @click="$router.push({name: 'index'})"></i>
    </mt-header>

    <div class="no-product-tip">
      <div class="iconfont icon-nothing"></div>
      <div class="tip">没有相应内容</div>
    </div>
    <navbar selected="discover"></navbar>
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
