<style lang="less" scoped>
    .flex-row{
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-content: space-around;
        align-items: center;
        background-color: #f7f2f2;
        height: 100vh;
    }
    .flex-box{
        width: 90%;
    }
    .flex-div-item{
        width:100%;
        margin-top:.1rem;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        background-color: #f7f2f2;
        position: relative;
        &.one_recharge{
            height: 1rem;
            background-color: white;
            border-radius: 6px;
            text-align: center;
            margin-top: .2rem;
             font-size: .28rem;
             box-shadow:1px 1px .01rem #7a7878;
            font{
                width:100%;
                color:red;
                display:inline-block;
             }
        }
        &.two_recharge{
            height: 2.50rem;
            margin-bottom: .4rem;
            margin-top: .4rem;
        }
        &.three_recharge{
            height: 1.5rem;
            margin-bottom: .4rem;
        }
        &.four_recharge{
            height: 1.9rem;
        }
        .card_recharge{
            flex: 0 1 45%;
            align-self: auto;
            height: 2.5rem;
            background-color: white;
            border-radius: 6px;
            box-shadow:.01rem .01rem .02rem #7a7878;
            &:nth-of-type(1){
                position: absolute;
                width: 45%;
                left: 0;
            }
            &:nth-of-type(2){
                position: absolute;
                width: 45%;
               right: 0;
            }
            .top{
                height: .75rem;
                width:100%;
                position: relative;
                .title{
                    height: 100%;
                    font-size: .28rem;
                    top: .2rem;
                    &:nth-of-type(1){
                        position: absolute;
                        width: 45%;
                        left: 10%;
                    }
                    &:nth-of-type(2){
                        position: absolute;
                        width: 45%;
                        right: 10%;
                        text-align: right;
                    }
                }
            }
            .mid{
                height: 1rem;
                width:100%;
                text-align: center;
                vertical-align:middle;
                .title{
                    height: 100%;
                    line-height: 1rem;
                }
                
            }
            .foot{
                height: .75rem;
                width:100%;
                text-align: center;
                vertical-align:middle;
                .title{
                    height: 100%;
                    width:100%;
                    line-height: .75rem;
                    color:#7a7878;
                    font-size: .29rem;
                    text-align: center;
                }
            }
        }
        .num_recharge{
            flex: 0 1 31%;
            align-self: auto;
            height: 100%;
            position: relative;
            background-color: white;
            text-align: center;
            box-shadow:.01rem .01rem .02rem #7a7878;
            .top{
                display: block;
                width: 100%;
                height: 1.1rem;
                line-height: 1.1rem;
                font-size: .35rem;
            }
            .mid{
                display: block;
                width: 100%;
                height: .4rem;
                line-height: .4rem;
                font-size: .25rem;
                background-color: #7a7878;
            }
            &:nth-of-type(1){
                position: absolute;
                width: 31%;
                left: 0;
            }
            &:nth-of-type(3){
                position: absolute;
                width: 31%;
               right: 0;
            }
        }
        .num_recharge_give{
            flex: 0 1 31%;
            align-self: auto;
            height: 100%;
            position: relative;
            background-color: white;
            text-align: center;
            
            .top{
                display: block;
                width: 100%;
                height: 1.1rem;
                line-height: 1.1rem;
                font-size: .35rem;
            }
            .mid{
                box-shadow:.01rem .01rem .02rem #7a7878;
            }
            .mid,.foot{
                display: block;
                width: 100%;
                height: .4rem;
                line-height: .4rem;
                font-size: .25rem;
                background-color: #7a7878;
            }
            .foot{
                color: blue;
                background-color: #f7f2f2;
            }
            &:nth-of-type(1){
                position: absolute;
                width: 31%;
                left: 0;
            }
            &:nth-of-type(3){
                position: absolute;
                width: 31%;
               right: 0;
            }
        }

    }
</style>

<template>
    <div>
        <div class="flex-row">
        <div class = "flex-box">
            <div class="flex-div-item one_recharge" >
                <font>首冲双倍奖励！！！</font>
            </div>
            <div class="flex-div-item two_recharge">
                <div class='card_recharge '>
                    <div class ="top">
                        <font class ="title">周卡</font>
                        <font class ="title">50元</font>
                    </div>
                    <div class ="mid"><font class ="title">500+210币</font></div>
                    <div class ="foot"><font class ="title">送价值20元礼品</font></div>
                </div>
                <div class='card_recharge '>
                    <div class ="top">
                        <font class ="title">年卡</font>
                        <font class ="title">300元</font>
                    </div>
                    <div class ="mid"><font class ="title">3000+1800币</font></div>
                    <div class ="foot"><font class ="title">送价值80元礼品</font></div>
                </div>
            </div>
            <div class="flex-div-item three_recharge">
                <div class='num_recharge'>
                    <font class ="top">10金币</font>
                    <font class ="mid">1元购买</font>  
                </div>
                <div class='num_recharge'>  
                    <font class ="top">100金币</font>
                    <font class ="mid">10元购买</font>    
                </div>
                <div class='num_recharge'>  
                    <font class ="top">300金币</font>
                    <font class ="mid">30元购买</font>    
                </div>
            </div>
            <div class="flex-div-item four_recharge" >
                <div class='num_recharge_give'>
                    <font class ="top">500金币</font>
                    <font class ="mid">50元购买</font>  
                    <font class ="foot">赠送20金币</font>     
                </div>
                <div class='num_recharge_give'>   
                    <font class ="top">1000金币</font>
                    <font class ="mid">100元购买</font>   
                    <font class ="foot">赠送100金币</font>   
                </div>
                <div class='num_recharge_give'>    
                    <font class ="top">5000金币</font>
                    <font class ="mid">500元购买</font>  
                    <font class ="foot">赠送2000金币</font> 
                </div>
            </div>
        </div>
    </div>
        <navbar selected="RechargePage"></navbar>
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
        'navbar': require('components/navbar.vue')
    },
    computed: { 

    },
    methods: {

    },
    mounted(){
    
    },
}
</script>

