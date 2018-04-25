import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: require('views/index.vue')
  },
  {
    path: '/RechargePage',
    name: 'RechargePage',
    component: require('views/RechargePage.vue')
  },
  {
    path: '/PersonalCenter',
    name: 'PersonalCenter',
    component: require('views/PersonalCenter.vue')
  },
  {
    path: '/SignPage',
    name: 'SignPage',
    component: require('views/SignPage.vue')
  },
  {
    path: '/MyGifPage',
    name: 'MyGifPage',
    component: require('views/MyGifPage.vue')
  },
  {
    path: '/CallUs',
    name: 'CallUs',
    component: require('views/CallUs.vue')
  },
  {
    path: '/AboutUs',
    name: 'AboutUs',
    component: require('views/AboutUs.vue')
  },
  {
    path: '/DownLoadPage',
    name: 'DownLoadPage',
    component: require('views/DownLoadPage.vue')
  },
  {
    path: '/UserAgreement',
    name: 'UserAgreement',
    component: require('views/UserAgreement.vue')
  },
  {
    path: '/CompanyProfile',
    name: 'CompanyProfile',
    component: require('views/CompanyProfile.vue')
  },
  {
    path: '/goods/:goodsId/',
    component: require('views/goods.vue'),
    name: 'goods'
  },
  {
    path: '/accounts/sign',
    name: 'sign',
    component: require('views/sign.vue')
  },
  {
    path: '/accounts/signup',
    name: 'signup',
    component: require('views/signup.vue')
  },
  {
    path: '/cart/',
    name: 'cartList',
    component: require('views/cart.vue')
  },
  {
    path: '/order/',
    name: 'orderList',
    component: require('views/orders.vue')
  },
  {
    path: '*',
    name: '404',
    component: require('views/404.vue')
  }
]

export default new VueRouter({
  routes
})
