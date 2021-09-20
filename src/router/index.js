import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../components/login.vue'
import signup from '../components/signup.vue'

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
  }
]

const router = new VueRouter({
  routes
})

export default router
