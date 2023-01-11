import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const Dashboard = () => import('@/pages/DashboardPage.vue')
const Cashier = () => import('@/pages/CashierPage.vue')
const Inbox = {
  template:
    '<div class="supports"><h1>This is <strong>{{ $route.name }}</strong> page.</h1></div>',
}

const Reports = () => import('@/pages/ReportsPage.vue')
const Products = () => import('@/pages/ProductsPage.vue')
const Customers = () => import('@/pages/CustomersPage.vue')
const Orders = () => import('@/pages/OrdersPage.vue')

const Settings = () => import('@/pages/SettingsPage.vue')
const Support = () => import('@/pages/SupportPage.vue')

// Auth
const Login = () => import('@/pages/LoginPage.vue')
const Register = () => import('@/pages/RegisterPage.vue')
const Reset = () => import('@/pages/ResetPage.vue')

export const routes: RouteRecordRaw[] = [
  {
    path: '/dashboard',
    alias: '/',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      icon: 'fad fa-tachometer',
      category: 'main',
    },
  },
  {
    path: '/cashier',
    name: 'Cashier',
    component: Cashier,
    meta: {
      icon: 'fad fa-cash-register',
      category: 'main',
    },
  },
  {
    path: '/inbox',
    name: 'Inbox',
    component: Inbox,
    meta: {
      icon: 'fad fa-mail-bulk',
      category: 'main',
    },
  },
  {
    path: '/orders',
    name: 'Orders',
    component: Orders,
    meta: {
      icon: 'fad fa-receipt',
      category: 'manage',
    },
  },
  {
    path: '/reports',
    name: 'Reports',
    component: Reports,
    meta: {
      icon: 'fad fa-analytics',
      category: 'manage',
    },
  },
  {
    path: '/products',
    name: 'Products',
    component: Products,
    meta: {
      icon: 'fad fa-boxes',
      category: 'manage',
    },
  },
  {
    path: '/customers',
    name: 'Customers',
    component: Customers,
    meta: {
      icon: 'fad fa-users',
      category: 'manage',
    },
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
    meta: {
      icon: 'fad fa-cogs',
      category: 'misc',
    },
  },
  {
    path: '/support',
    name: 'Support',
    component: Support,
    meta: {
      icon: 'fad fa-life-ring',
      category: 'misc',
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      icon: 'fad fa-sign-in',
      category: 'auth',
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      icon: 'fad fa-sign-in',
      category: 'auth',
    },
  },
  {
    path: '/reset',
    name: 'Reset',
    component: Reset,
    meta: {
      icon: 'fad fa-sign-in',
      category: 'auth',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
