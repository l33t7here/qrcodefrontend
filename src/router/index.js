import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../components/login.vue'
import signup from '../components/signup.vue'
import dashboard from '../components/dashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/signup',
    name: 'signup',
    component: signup
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboard
  }
]

const router = new VueRouter({
  routes
})

export default router
