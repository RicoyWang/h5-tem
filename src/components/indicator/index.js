import Vue from 'vue'
const Indicator = Vue.extend(require('./indicator.vue'))

let instance
let timer
export default{
  open (options = {}) {
    if (!instance) {
      instance = new Indicator({
        el: document.createElement('div')
      })
    }
    if (instance.visible) return
    instance.text = typeof options === 'string' ? options : options.text || ''
    instance.spinnerType = options.spinnerType || 'snake'
    document.body.appendChild(instance.$el)
    if (timer) {
      clearTimeout(timer)
    }

    Vue.nextTick(() => {
      instance.visible = true
    })
  }
}
