import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import('../views/Dashboard.vue')
  },
  {
    path: "/login",
    name: "Login",
    component: () => import('../views/Login.vue')
  },
  {
    path: '/user/:userId',
    name: 'User',
    component: () => import('../views/User.vue'),
    meta: {
      requiredsAuth: false
    },
    beforeEnter: (to, from, next) => {
      if (to.meta.requiredsAuth) {
        // need to login
      } else {
        next();
      }
    }
  },
  {
    path: "/error",
    name: "Error",
    component: () => import('../views/Error.vue')
  },
  {
    path: "/404",
    name: "404Error",
    component: () => import('../views/404Error.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next)=>{

// })

export default router