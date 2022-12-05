import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const Dashboard = () => import('@/pages/Dashboard.vue')
const Cashier   = () => import('@/pages/Cashier.vue')
const Inbox = { template: '<div>Inbox</div>' };

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    alias: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/cashier',
    name: 'Cashier',
    component: Cashier
  },
  {
    path: '/inbox',
    name: 'Inbox',
    component: Inbox
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
