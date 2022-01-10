import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../components/login.vue'
import signup from '../components/signup.vue'
import dashboard from '../components/dashboard.vue'
import qrgen from '../components/qrgen.vue'
import sharedrive from '../components/sharedrive.vue'

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
    path: '/sharedrive/:token',
    name: 'sharedrive',
    component: sharedrive,
    params : true
  },
  
  {
    path : '/qrgen',
    name : 'qrgen',
    component : qrgen,
    beforeEnter : (to,from,next) =>{
      if(localStorage.getItem('token') == undefined ){
        next('/login')
      }else{
        if(from.name == 'dashboard'){
          next();
        }else{
          next('/')
        }
      }
    }
  },
  {
    path: '/',
    name: 'dashboard',
    component: dashboard,
    beforeEnter : (to,from,next) =>{
      if(localStorage.getItem('token') == undefined){
        next('/login')
      }else{
        next();
      }
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
