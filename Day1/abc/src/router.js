import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/bytedance',
      name: 'bytedance',
      component: () => import('./views/ByteDance.vue')
    },
    {
      path: '/zxx',
      name: 'zxx',
      component: () => import('./views/zxx.vue')
    },
  ]
})
