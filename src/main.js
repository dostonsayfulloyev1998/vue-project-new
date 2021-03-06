import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Shop from './components/Shop.vue'
import Admin from './components/Admin.vue'
import Cart from './components/Cart.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/shop', component: Shop },
  { path: '/admin', component: Admin },
  { path: '/cart/:id', component: Cart }
]

const router = new VueRouter({
  routes
})

Vue.config.productionTip = false
new Vue({
router,
  render: h => h(App),
}).$mount('#app')
