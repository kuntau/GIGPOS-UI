<script setup lang="ts">
const sideNav = [
  {
    name: 'Dashboard',
    url: 'dashboard.html',
    icon: 'fad fa-city',
    active: false
  },
  {
    name: 'Cashier',
    url: 'cashier.html',
    icon: 'fad fa-university',
    active: true
  },
  {
    name: 'Reports',
    url: 'reports.html',
    icon: 'fad fa-dungeon',
    active: false
  },
  {
    name: 'Charts',
    url: 'charts.html',
    icon: 'fad fa-gopuram',
    active: false
  },
  {
    name: 'Products',
    url: 'products.html',
    icon: 'fad fa-house-damage',
    active: false
  },
  {
    name: 'Inbox',
    url: 'inbox.html',
    icon: 'fad fa-igloo',
    active: false
  },
  {
    name: 'Settings',
    url: 'settings.html',
    icon: 'fad fa-industry',
    active: false
  }
]
</script>
<template>
  <div class="sidebar fixed px-2 pl-5 py-3">
    <div class="store text-blue-800 font-medium px-1 py-2 mb-3">
      <a class="overflow-hidden" href="#">
        <span class="font-black bg-white p-2 rounded-full shadow mr-1"><i class="fad fa-store"></i></span> Gets Global <span class="font-black fas fa-chevron-down"></span></a>
    </div>
    <nav class="pt-3">
      <p class="title uppercase text-xs text-gray-600 tracking-wider">main</p>
      <ul class="ml-2 mt-2">
        <li class="flex-grow px-2 py-1" v-for="nav in sideNav">
          <a class="text-core font-normal tracking-wide text-gray-700 hover:text-blue-700" :class="{ active: nav.active }" :href="nav.url">
            <i :class="nav.icon"></i> {{ nav.name }}
          </a>
        </li>
      </ul>
      <p class="title uppercase text-xs text-gray-600 mt-3">Store</p>
      <ul class="ml-2 mt-2">
        <li class="flex-grow px-2 py-1" v-for="nav in sideNav">
          <a class="text-sm font-light text-blue-900 hover:text-blue-700" :href="nav.url">
            <i class="fad fa-university"></i> {{ nav.name }}
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<style scoped>

</style>
