import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../components/login.vue'
import signup from '../components/signup.vue'
import dashboard from '../components/dashboard.vue'
import download from '../components/download.vue'
import qrgeneration from '../components/qrgeneration.vue'

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
  },
  {
    path: '/download',
    name: 'download',
    component: download
  },
  {
    path: '/qrgeneration',
    name: 'qrgeneration',
    component: qrgeneration
  }
]

const router = new VueRouter({
  routes
})

export default router
