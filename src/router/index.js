import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Initial View',
    component: () => import('../layouts/InitialLayout.vue'),
    children: [{ path: '', component: () => import('../pages/user/Index.vue') }]
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../layouts/DashboardLayout.vue'),
    children: [{ path: '', component: () => import('../pages/panels/Index.vue') }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
