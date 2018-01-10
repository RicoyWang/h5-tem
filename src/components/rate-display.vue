<!-- Example:
<rate-display value="4.6378"></rate-display> -->

<template>
    <span :class="renderClass" v-text="renderValue"></span>
</template>

<script>
    export default {
      props: {
        value: null
      },
      computed: {
        renderClass () {
          if (this.value == null) {
            return 'empty'
          } else if (this.value >= 0) {
            return 'up'
          } else {
            return 'down'
          }
        },
        renderValue () {
          if (this.value == null) {
            return '--'
          } else if (this.value >= 0) {
            return '+' + Number(this.value).toFixed(2) + '%'
          } else {
            return Number(this.value).toFixed(2) + '%'
          }
        }
      }
    }
</script>

<style scoped>
@import 'styles/vars.css';

.up {
    color:$main-color;
}
.down {
    color:$down-color;
}
.empty {
    color: $$first-font-color;
}
</style>
