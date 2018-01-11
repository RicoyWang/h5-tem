<style lang="less" scoped>
    .flex_box{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-content: center;
        align-items: center;
        height: 80vh;
        width: 90vw;
        margin-left: 5vw;
        .flex_item{
            flex: 0 1 22%;
            align-self: auto;
            height: 2rem;
            
            margin-top: .4rem;
            &:nth-of-type(1),&:nth-of-type(4),{
                margin-right: .5rem;
            }
            &:nth-of-type(3),&:nth-of-type(6){
                margin-left: .5rem;
            }
            .dayNum{
                width:100%;
                height: 70%;
                background-color: red;
                border-radius: 4px;
                text-align: center;
                line-height: 1.4rem;
                box-shadow:.01rem .01rem .02rem #7a7878;
            }
            .money{
                width:80%;
                margin-top: .1rem;
                margin-left: 10%;
                height: 30%;
                position: relative;
                img{
                    width: .5rem ;
                    height: auto;
                    border-radius: .2rem;
                    display: inline;
                    position: absolute;
                    left: 0;
                }
                font{
                    display: inline;
                    margin-left: .1rem;
                    font-size: .28rem;
                    position: absolute;
                    height: .6rem;
                    line-height: .6rem;
                    width:80%;
                    text-align: center;
                    right: 0;
                }
            }
        }
    }
</style>

<template>
    <div>
        <mt-header class="header" fixed title="签到">
          <i class="iconfont icon-back" aria-hidden="true" slot="left" @click="$router.go(-1)"></i>
          <i class="iconfont icon-home" aria-hidden="true" slot="right" @click="$router.push({name: 'index'})"></i>
        </mt-header>
        <ul class="flex_box">
            <li class="flex_item" v-for="(item,index) in [1,2,3,4,5,6,7]">
                <div class="dayNum">DAY{{index}}</div>
                <div class="money">
                    <img src="../assets/logo.png" style=""/>
                    <font class='tip'>222</font>
                </div>
            </li>
        </ul>
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

