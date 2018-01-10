<template>
    <div class="indicator" v-show="visible">
        <line-spin></line-spin>
        <div class="tip">{{text}}</div>
    </div>
</template>
<style scoped>
    .indicator{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 50%;
        left: 50%;
        width:85px;
        height: 85px;
        margin-left: -42px;
        margin-top: -42px;
        border-radius: 5px;
        background: rgba(0, 0, 0, 0.6);
        color: #fff;

    }
    .tip{
        text-align: center;
        margin-top: 10px;
    }
</style>

<script>
    import lineSpin from 'components/spinner/line-spin.vue'
export default({
      data () {
        return {
          visible: false
        }
      },
      props: [
        'text'
      ],
      components: {
        'line-spin': lineSpin
      }
    })
</script>
