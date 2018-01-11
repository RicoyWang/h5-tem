<style lang="less" scoped>

</style>

<template>
    <div>
        <mt-header class="header" fixed title="联系我们">
          <i class="iconfont icon-back" aria-hidden="true" slot="left" @click="$router.go(-1)"></i>
          <i class="iconfont icon-home" aria-hidden="true" slot="right" @click="$router.push({name: 'index'})"></i>
        </mt-header>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    name: '',
    data () {
        return {

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

