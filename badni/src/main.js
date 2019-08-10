import Vue from 'vue'
import App from './App.vue'
import homepage from './components/homepage'
import login from './components/login'
import signup from './components/signup'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

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

// routes
const routes = [
  { path: '/', component: homepage },
  { path: '/login', component: login },
  { path: '/signup', component: signup }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
