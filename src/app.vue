<template>
    <div>
        <router-view v-on:selected="changeSelected"></router-view>
    </div>
</template>

<script>
    export default {
      name: 'app',
      data () {
        return {selected: 'index', selectedCss: 'selected'}
      },
      methods: {
        go (name) {
          this.$router.push({name: name})
        },
        changeSelected (name) {
          this.selected = name
        }
      }
    }
</script>

<style lang="less">
    @import '~normalize.css';
    @import 'style/vars.less';

    .header {
        background-color: @mainColor !important;
        height: 0.9rem;
        .mint-header-title{
          font-size: 0.32rem;
        }
        .iconfont {
            color: #fff;
            font-size: 0.4rem;
        }
    }
    body{
      font-size: 0.28rem;
    }
    .container{
      margin-bottom: 1rem;
    }
</style>
