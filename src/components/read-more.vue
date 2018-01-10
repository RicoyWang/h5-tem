<template>
<div class="read-more-block">
    <div class="desc" v-text="info"></div>
    <div class="read-more" @click="open=!open">
        <span v-if="open">收起&nbsp;<span class="iconfont icon-shouqi"></span></span>
        <span v-else>查看更多&nbsp;<span class="iconfont icon-zhankai"></span></span>
    </div>
</div>
</template>
<style scoped>
@import 'styles/vars.css';
.read-more-block {
    padding: 20px 0;
    font-size: $text-font;
    .desc {
        line-height: 27px;
    }
    .read-more {
        margin-top: 7px;
        color: $blue-color;
        text-align: center;
        .icon-zhankai .icon-shouqi {
            font-size: 10px;
        }
    }
}
</style>
<script>
export default {
  name: 'read-more',
  data () {
    return {
      open: false
    }
  },
  props: {
    data: String,
    showLength: {
      type: Number,
      default: 120
    }
  },
  computed: {
    info () {
      if (this.open) {
        return this.data
      }

      if (!this.data || this.data.length === 0) {
        return ''
      }
      if (this.data.length > this.showLength) {
        return this.data.slice(0, this.showLength) + '...'
      } else {
        return this.data
      }
    }
  }
}
</script>
