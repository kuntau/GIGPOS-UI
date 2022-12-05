import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const Dashboard = () => import('@/pages/Dashboard.vue')
const Cashier   = () => import('@/pages/Cashier.vue')
const Inbox = { template: '<div class="supports"><h1>This is <strong>{{ $route.name }}</strong> page.</h1></div>' };

const Reports   = () => import('@/pages/Reports.vue')
const Products   = () => import('@/pages/Products.vue')
const Customers   = () => import('@/pages/Customers.vue')
const Orders   = () => import('@/pages/Orders.vue')

const Settings   = () => import('@/pages/Settings.vue')
const Support   = () => import('@/pages/Support.vue')

export const routes: RouteRecordRaw[] = [
  {
    path: '/dashboard',
    alias: '/',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      icon: 'fad fa-tachometer',
      category: 'main'
    }
  },
  {
    path: '/cashier',
    name: 'Cashier',
    component: Cashier,
    meta: {
      icon: 'fad fa-cash-register',
      category: 'main'
    }
  },
  {
    path: '/inbox',
    name: 'Inbox',
    component: Inbox,
    meta: {
      icon: 'fad fa-mail-bulk',
      category: 'main'
    }
  },
  {
    path: '/orders',
    name: 'Orders',
    component: Orders,
    meta: {
      icon: 'fad fa-receipt',
      category: 'manage'
    }
  },
  {
    path: '/reports',
    name: 'Reports',
    component: Reports,
    meta: {
      icon: 'fad fa-analytics',
      category: 'manage'
    }
  },
  {
    path: '/products',
    name: 'Products',
    component: Products,
    meta: {
      icon: 'fad fa-boxes',
      category: 'manage'
    }
  },
  {
    path: '/customers',
    name: 'Customers',
    component: Customers,
    meta: {
      icon: 'fad fa-users',
      category: 'manage'
    }
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
    meta: {
      icon: 'fad fa-cogs',
      category: 'misc'
    }
  },
  {
    path: '/support',
    name: 'Support',
    component: Support,
    meta: {
      icon: 'fad fa-life-ring',
      category: 'misc'
    }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
