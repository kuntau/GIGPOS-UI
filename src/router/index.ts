import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import Dashboard from '@/pages/Dashboard.vue'
import Cashier from '@/pages/Cashier.vue'
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
