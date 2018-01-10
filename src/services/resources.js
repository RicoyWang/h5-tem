import Vue from 'vue'
import VueResource from 'vue-resource'
import Cookies from 'js-cookie'
import {isSafeMethod, allowOrigin} from 'utils/http'

Vue.use(VueResource)

// Vue.http.headers.common['X-CSRFToken'] = Cookies.get('csrftoken');
Vue.http.interceptors.push((request, next) => {
  if (!isSafeMethod(request.method) && allowOrigin(request.url)) {
    request.headers.set('X-Requested-With', 'XMLHttpRequest')
    request.headers.set('X-CSRFToken', Cookies.get('csrftoken'))
  }
  next()
})

export const AccountsResource = Vue.resource('/accounts/{type}/')
