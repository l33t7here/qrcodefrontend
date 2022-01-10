import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import QrcodeVue from 'qrcode.vue'

// Vue.component('qrcode', QrcodeVue)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
