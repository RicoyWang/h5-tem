<!-- Example:
<x-header title1="中邮战略新兴...-同公司基金"></x-header> -->

<template>
    <div class="header" :class="{'is-fixed': fixed }">
        <div class="header-left">
            <slot name="left">
                <a class="iconfont icon-back" @click="back"></a>
            </slot>
        </div>
        <div class="title">
            <div class="title1" v-text="title1"></div>
            <div class="title2" v-text="title2"></div>
        </div>
        <div class="header-right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<style scoped>
@import 'styles/vars.css';
.header{
    display:flex;
    align-items: center;
    width: 100%;
    height: 44px;
    background-color: $bg-color;
    color: $first-font-color;
    border-bottom: 1px solid $border-color;
    &.is-fixed{
        position: fixed;
        left:0;
        right:0;
        top:0;
    }
    .title{
        flex: 5;
        text-align: center;
        .title1{
            font-size: $em-title-font;
        }
        .title2{
            font-size: $aux-l-font;
        }
    }
    .header-left{
        flex: 1;
        text-align: left;
        .icon-back{
            display: block;
            margin-left: 10px;
            font-size: 23px;
        }
    }
    .header-right{
        text-align: right;
        flex: 1;
    }
}

</style>

<script>
    export default {
      name: 'zl-header',
      props: {
        title1: String,
        title2: String,
        fixed: Boolean
      },
      methods: {
        back () {
          this.$router.go(-1)
        }
      }
    }
</script>
