<style lang="less" scoped>
    .home_page{
        width: 100vw;
        height: 100vh;
        background-color: #f7f2f2;

    }
    .info_box{
        width:100%;
        height: 2.2rem;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        align-content: space-between;
        align-items: center;
        margin-top: .9rem;
        .item{
            flex: 0 1 40%;
            align-self: auto;
            height: 100%;
            position: relative;
            .img{
                    position: absolute;
                    height: 1.1rem;
                    width:1.1rem;
                    right: 10%;
                    top: 20%;
                    img{
                        height: 100%;
                        width:100%;
                        border-radius: 50%;
                    }
                    .img_info{
                        position: absolute;
                        height: 20%;
                        width: 20%;
                        right: 0;
                        
                        &:nth-of-type(1){
                            top: 0;
                        }
                        &:nth-of-type(2){
                            bottom: 0;
                            border: 5rpx solid white;
                            background-color: #f7f2f2;
                            font-size: 28rpx;
                        }
                }
            }
            &:nth-of-type(2){
                
                .info{
                    height: 100%;
                    width:60%;
                    display: flex;
                    flex-direction: column;
                    flex-wrap: nowrap;
                    justify-content: center;
                    align-content: space-between;
                    align-items: flex-end;
                    .user_name,.user_id,.user_acunt{
                        margin-left: 30%;
                        flex: 0 1 20%;
                        align-self: stretch;
                        font-size: 30rpx;
                    }
                    .user_id{
                        color:#7a7878;
                        font-size: 25rpx;
                            flex: 0 1 17%;
                    }
                }
                
            }
        }
    }
    .center_to{
        width: 100vw;
        
        li{
            height: .9rem;
            background-color: white;
            margin-bottom: .1rem;
            &:nth-of-type(2),&:nth-of-type(4){
                margin-bottom: .3rem;
            }
            &:nth-of-type(5){
                text-align: center;
                line-height:  .9rem;
            }
            div{
                
                height: 100%;
                display: inline-block;
                &:nth-of-type(1){
                    width: 40%;
                    margin-left: .2rem;
                    img{
                        width: .5rem ;
                        height: auto;
                        transform: translate(0,.2rem)
                    }
                    font{
                        height: .9rem;
                        line-height: .9rem;
                        display: inline-block;
                        margin-left: .1rem;
                        font-size: .30rem;
                    }
                }
            }
            .in_access{
                padding-right: 13px;
                position: relative;
                height: 100%;
                float: right;
                &:after {
                    content: '';
                    display: inline-block;
                    width: 8px;
                    height: 8px;
                    border-bottom: 1px solid #656565;
                    border-right: 1px solid #656565;
                    transform: rotate(-45deg) ;
                    -webkit-transform: rotate(-45deg);
                    margin-top:.38rem;
                }
            }
        }
        
    }
    
</style>

<template>
    <div class="home_page">
        <mt-header class="header" fixed title="个人中心">
          <i class="iconfont icon-back" aria-hidden="true" slot="left" @click="$router.go(-1)"></i>
          <i class="iconfont icon-home" aria-hidden="true" slot="right" @click="$router.push({name: 'index'})"></i>
        </mt-header>
        <div class="info_box">
            <div class="item">
                <div class='img'>
                    <img src="../assets/logo.png" style=""/>
                    <div class='img_info'></div>
                    <div class='img_info'><font>{{gender}}</font></div>
               </div>
            </div>
            <div class="item">
                <div class='info'>
                    <div class='user_name'><font>ddd</font></div>
                    <div class='user_id'><font>ID:2121</font></div>
                    <div class='user_acunt'><font>dsd</font></div>
               </div>
            </div>
        </div>
        <ul class="center_to">
            <li @click="$router.push({name: 'SignPage'})">
                <div>
                    <img src="../assets/logo.png" style=""/>
                    <font class='tip'>签到打卡</font>
                </div>
                <div class="in_access"></div>
            </li>
            <li @click="$router.push({name: 'MyGifPage'})">
                <div>
                    <img src="../assets/logo.png" style=""/>
                    <font class='tip'>我的礼品</font>
                </div>
                <div class="in_access"></div>
            </li>
            <li @click="$router.push({name: 'CallUs'})">
                <div>
                    <img src="../assets/logo.png" style=""/>
                    <font class='tip'>联系我们</font>
                </div>
                <div class="in_access"></div>
            </li>
            <li @click="$router.push({name: 'AboutUs'})">
                <div>
                    <img src="../assets/logo.png" style=""/>
                    <font class='tip'>关于我们</font>
                </div>
                <div class="in_access"></div>
            </li >
            <li @click="$router.push({name: 'DownLoadPage'})">下载APP</li>
        </ul>
        <navbar selected="me"></navbar>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    name: '',
    data () {
        return {
            userInfo:{
                avatarUrl:"https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTK7JRPClz7rlyp0nw8HyqfQFJGgLY9LzRF3ocDQ4aVibXG12NXLgxibdVqiaY1uYYC15872ulqh97fCA/0",
                city:"Shenzhen",
                country:"China",
                gender:1,
                language:"zh_CN",
                nickName:"王川.",
                province:"Guangdong",
            }
        }
    },
    components: {
        'navbar': require('components/navbar.vue')
    },
    computed: { 
        gender () {
            return this.userInfo.gender===0? "女":"男"
        }
    },
    methods: {

    },
    mounted(){
    
    },
}
</script>

