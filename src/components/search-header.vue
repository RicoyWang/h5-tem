<template>
    <div>
        <div class="ui-content">
            <div class="ui-content-head">
                <img class="logo" src="https://resources.zlfund.cn/media/tmp/home_logo.png" />
                <div class="search-box">
                    <span class="iconfont icon-m_search"></span>
                    <input v-model="search_content" type="text" placeholder="基金名称/代码/简称" />
                    <span v-show="search_content" class="iconfont icon-m_delete" @click="clear"></span>
                </div>
                <img class="avatar" src="https://resources.zlfund.cn/media/jjmmw/static/ask_default_user.png" />
            </div>
            <div class="ui-content-body">
                <ul v-show="search_content">
                    <li><router-link to="/product/22/"><span>229002</span><span>泰达宏利逆向</span><span>基金</span></router-link></li>
                    <li><router-link to="/product/22/"><span>229002</span><span>泰达宏利逆向</span><span>基金</span></router-link></li>
                    <li><router-link to="/product/22/"><span>229002</span><span>泰达宏利逆向</span><span>基金</span></router-link></li>
                    <li><router-link to="/product/22/"><span>229002</span><span>泰达宏利逆向</span><span>基金</span></router-link></li>
                    <li><router-link to="/product/22/"><span>229002</span><span>泰达宏利逆向</span><span>基金</span></router-link></li>
                </ul>
            </div>
        </div>
        <div v-show="search_content" class="shadow"></div>
    </div>
</template>

<script>
    export default {
      data () {
        return {
          search_content: ''
        }
      },
      methods: {
        clear () {
          this.search_content = ''
        }
      }
    }
</script>

<style scoped>
@import 'styles/vars.css';

.ui-content {
    z-index: 8;
    position: relative;
    &-head {
        position: relative;
        overflow: hidden;
        padding: 10px;
        background-color: $white-color;
        .logo {
            float: left;
            width: 28%;
            height: 30px;
        }
        .search-box {
            position: relative;
            float: left;
            margin-left: 3%;
            width: 50%;
            span.icon-m_search {
                position: absolute;
                top: 25%;
                left: 4%;
                color: $disabled-color;
            }
            span.icon-m_delete {
                position: absolute;
                top: 25%;
                right: 2%;
                color: $disabled-color;
            }
            input {
                font-size: 12px;
                height: 30px;
                padding-left: 16%;
                width: 84%;
                border: none;
                outline:none;
                background-color: $bg-color;
                color: $disabled-color;
                border-radius: 4px;
            }
        }
        .avatar {
            float: right;
            width: 30px;
        }
    }
    &-body {
        position: absolute;
        width: 90%;
        margin: 0 5%;
        ul {
            background-color: #fff;
            border-top: 1px solid $border-color;
            list-style: none;
            li {
                a {
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    height: 40px;
                    text-decoration: none;
                    color:$first-font-color;
                }
            }
        }
    }
}
.shadow {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #7f7f7f;
}
</style>