import Vue from 'vue'
import App from './App.vue'

// Bootstrap 4.x
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap/dist/css/bootstrap-reboot.min.css'
import './css/bootstrap-rtl.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './css/iransans-fontface.css'

import Element from 'element-ui'
Vue.use(Element)
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
