import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'index',
    component: require('views/index.vue')
  },
  {
    path: '/categories',
    name: 'categories',
    component: require('views/categories.vue')
  },
  {
    path: '/discover',
    name: 'discover',
    component: require('views/discover.vue')
  },
  {
    path: '/maintain',
    name: 'maintain',
    component: require('views/maintain.vue')
  },
  {
    path: '/me',
    name: 'me',
    component: require('views/me.vue')
  },
  {
    path: 'shouji',
    name: 'shouji',
    component: require('views/shouji.vue')
  },
  {
    path: 'peijian',
    name: 'peijian',
    component: require('views/peijian.vue')
  },
  {
    path: 'weixiu',
    name: 'weixiu',
    component: require('views/weixiu.vue')
  },
  {
    path: 'huanxin',
    name: 'huanxin',
    component: require('views/huanxin.vue')
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
