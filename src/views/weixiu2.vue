<template>
    <div id="weixiu">
        <div class="weixiu-container">
            <div class="weixiu-item">
                <i class="icon-font-hu color-font2">&#xe6dc;</i>
                <p>显示故障</p>
            </div>
            <div class="weixiu-item">
                <i class="icon-font-hu color-font2">&#xe66f;</i>
                <p>ID锁</p>
            </div>
            <div class="weixiu-item">
                <i class="icon-font-hu color-font3">&#xe628;</i>
                <p>进水维修</p>
            </div>
        </div>
        <div class="weixiu-container">
            <div class="weixiu-item">
                <i class="icon-font-hu color-font4">&#xe626;</i>
                <p>刷机失败</p>
            </div>
            <div class="weixiu-item">
                <i class="icon-font-hu color-font5">&#xe624;</i>
                <p>外壳损坏</p>
            </div>
            <div class="weixiu-item">
                <i class="icon-font-hu color-font1">&#xe641;</i>
                <p>主板故障</p>
            </div>
        </div>
        <div class="weixiu-container">
            <div class="weixiu-item">
                <i class="icon-font-hu color-font2">&#xe996;</i>
                <p>信号故障</p>
            </div>
            <div class="weixiu-item">
                <i class="icon-font-hu color-font3">&#xe622;</i>
                <p>关不了机</p>
            </div>
            <div class="weixiu-item">
                <i class="icon-font-hu color-font4">&#xe63b;</i>
                <p>通话故障</p>
            </div>
        </div>
        <div class="weixiu-container">
            <div class="weixiu-item">
                <i class="icon-font-hu color-font5">&#xe7ea;</i>
                <p>充电故障</p>
            </div>
            <div class="weixiu-item">
                <i class="icon-font-hu color-font1">&#xe626;</i>
                <p>刷机失败</p>
            </div>
            <div class="weixiu-item">
                <i class="icon-font-hu color-font2">&#xe677;</i>
                <p>碎屏</p>
            </div>
        </div>
    </div>
</template>
<style lang="less">
    @import '../style/vars.less';

    #weixiu {
        margin-top: 0.06rem;
    }

    .weixiu-container {
        display: flex;
        -webkit-box-pack: center;
        -moz-box-pack: center;
        -ms-flex-align: center; /* IE 10 */
        -webkit-align-items: center;
        -moz-align-items: center;
        align-items: center;
        .weixiu-item {
            flex: 1;
            width: 2.5rem;
            height: 2.5rem;
            border: 0.01rem solid @lineColor;
            background-color: #fff;
            text-align: center;
            p {
                font-size: 0.28rem;
                margin-top: 0.4rem;
            }
        }
    }

    .weixiu-font {
        display: block;
        margin-top: 0.5rem;
        font-size: 0.7rem
    }

    .color-font1 {
        .weixiu-font;
        color: #8192d5;
    }

    .color-font2{
        .weixiu-font;
        color: #d9e3b6;
    }

    .color-font3{
        .weixiu-font;
        color: #dcf7a1;
    }

    .color-font4{
        .weixiu-font;
        color: #83fcd8;
    }
    .color-font5{
        .weixiu-font;
        color: #81c2d6;
    }

</style>
<script>
    export default{
      data () {
        return {
          name: 'weixiu',
          goods: []
        }
      },
      computed: {
      },
      created () {
        this.$emit('selected', this.name)
      }
    }
</script>
