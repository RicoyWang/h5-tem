<template>
    <div>
        <mt-header class="header" title="66共赢家-注册">
            <div @click="$router.go(-1)" slot="left">
                <mt-button icon="back">返回</mt-button>
            </div>
        </mt-header>

        <div class="fields">
            <mt-field label="手机号" placeholder="请输入手机号" type="tel"></mt-field>
            <mt-field label="用户名" placeholder="请输入用户名"></mt-field>
            <mt-field label="密码" placeholder="请输入密码" type="password"></mt-field>
            <mt-field label="密码" placeholder="请再次输入密码" type="password"></mt-field>
        </div>
        <div class="btns">
            <mt-button type="danger" size="large">登录</mt-button>
            <!--<router-link to="/accounts/signup" class="fl">免费注册</router-link >-->
            <!--<router-link :to="" class="fr">忘记密码</router-link >-->
        </div>

    </div>
</template>
<style lang="less" scoped>
    @import '../style/vars.less';
    .fields{
        margin-top: 0.4rem;
    }
    .btns{
        padding: 0.2rem;
        a{
            display: block;
            margin-top: 0.2rem;
            color: @mainColor;
        }
    }
</style>
<script>
    export default{
      data () {
        return {
          msg: 'hello vue'
        }
      }
    }
</script>
