import Vue from 'vue'
import VueResource from 'vue-resource'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'style/reset.less'
import 'style/gyj.less'
import App from './app.vue'

Vue.use(MintUI)
Vue.use(VueResource)

Vue.mixin({
  methods: {
    urls (path) {
      return 'http://www.66gyj.com/api' + path
    },
    media (path) {
      if (path) {
        return 'http://www.66gyj.com' + path
      } else {
        return 'http://www.66gyj.com/media/goods/default.jpg'
      }
    }
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
