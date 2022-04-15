<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const sideNavMain = [
  {
    name: 'Dashboard',
    url: 'dashboard.html',
    to: '/dashboard',
    icon: 'fad fa-tachometer',
  },
  {
    name: 'Cashier',
    url: 'cashier.html',
    to: '/cashier',
    icon: 'fad fa-cash-register',
  },
  {
    name: 'Inbox',
    url: 'inbox.html',
    to: '/inbox',
    icon: 'fad fa-mailbox',
  },
]

  const sideNavReport = [
  {
    name: 'Reports',
    url: 'reports.html',
    icon: 'fad fa-file-chart-line',
    active: false
  },
  {
    name: 'Charts',
    url: 'charts.html',
    icon: 'fad fa-chart-line',
    active: false
  },
  {
    name: 'Products',
    url: 'charts.html',
    icon: 'fad fa-boxes',
    active: false
  },
  {
    name: 'Customers',
    url: 'charts.html',
    icon: 'fad fa-users',
    active: false
  },
]
  const sideNavHelp = [
  {
    name: 'Settings',
    url: 'settings.html',
    icon: 'fad fa-cogs',
    active: false
  },
  {
    name: 'Support',
    url: 'support.html',
    icon: 'fad fa-life-ring',
    active: false
  }
]

const openInbox = () => router.push('/inbox')

defineProps<{
  page: string
}>()

</script>
<template>
  <div class="sidebar fixed px-2 pl-5 py-3">
    <div class="store text-blue-800 font-medium px-1 py-2 mb-3">
      <a class="overflow-hidden" href="#">
        <span class="font-black bg-white p-2 rounded-full shadow mr-1"><i class="fad fa-store"></i></span> Gets Global <span class="font-black fas fa-chevron-down"></span></a>
    </div>
    <nav class="pt-3">
      <p class="title uppercase text-xs text-gray-600 tracking-wider">Main</p>
      <ul class="ml-2 mt-2">
        <li class="flex-grow px-2 py-1" v-for="nav in sideNavMain">
          <router-link class="text-core font-normal tracking-wide text-gray-700 hover:text-blue-700" :class="{ active: nav.to === route.path }" :to="nav.to">
            <i :class="nav.icon"></i> {{ nav.name }}
          </router-link>
        </li>
      </ul>
      <p class="title uppercase text-xs text-gray-600 tracking-wider mt-3">Reporting</p>
      <ul class="ml-2 mt-2">
        <li class="flex-grow px-2 py-1" v-for="nav in sideNavReport">
          <a class="text-core font-normal tracking-wide text-gray-700 hover:text-blue-700" :class="{ active: nav.active }" :href="nav.url">
            <i :class="nav.icon"></i> {{ nav.name }}
          </a>
        </li>
      </ul>
      <p class="title uppercase text-xs text-gray-600 tracking-wider mt-3">Help</p>
      <ul class="ml-2 mt-2">
        <li class="flex-grow px-2 py-1" v-for="nav in sideNavHelp">
          <a class="text-core font-normal tracking-wide text-gray-700 hover:text-blue-700" :class="{ active: nav.active }" :href="nav.url">
            <i :class="nav.icon"></i> {{ nav.name }}
          </a>
        </li>
        <li class="flex-grow px-2 py-1">
          <a class="text-core font-normal tracking-wide text-gray-700 hover:text-blue-700" @click="openInbox()" href="#">
            <i class="fad fa-cog"></i> {{ route.path }}
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<style scoped>

</style>
