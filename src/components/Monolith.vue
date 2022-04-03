<script setup lang="ts">
import MenuCard from './Cashier/MenuCard.vue'
import SalesCard from './Cashier/SalesCard.vue'

defineProps<{ msg: string }>()

const topNavLeft = ["Home", "Name"]
const topNavRight = ["Logout", "Kuntau"]
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

  <section class="main container box-border relative w-full">

    <nav class="top-nav sticky inset-0 box-border inline-flex flex-grow w-full h-auto py-1 overflow-hidden">
      <div class="top-nav-left flex flex-grow items-start">
        <ul class="flex self-center">
          <li class="text-gray-700" v-for="nav in topNavLeft">{{ nav }}</li>
        </ul>
        <div class="inline-flex self-center">
          <input class="search ml-2 px-4 h-8 content-center shadow rounded-l" type="text" placeholder='Press / to focus search'>
          <button class="btn inline-block text-white text-core bg-green-500 hover:bg-green-600 h-8 px-2 -ml-1 rounded-r shadow"><i class="fas fa-search text-xl align-text-bottom leading-none"></i></button>
        </div>
      </div>
      <div class="top-nav-right">
        <ul class="flex justify-end items-center">
          <li class="inline-block" v-for="nav in topNavRight">
            <a class="text-gray-700" href="#">
              <i class="fad fa-sign-in"></i> {{ nav }}
            </a>
          </li>
          <li class="inline-block"><a href="#"><img class="h-8 rounded-full shadow" src="https://gravatar.com/avatar/d69aae377ffa1f6fd90935a888933070" alt=""></a></li>
        </ul>
      </div>
    </nav>

    <content class="box-border my-10 flex">
      <MenuCard />
      <SalesCard />
    </content>
  </section>
</template>

<style scoped>

#label {
  margin: 0 0.5em;
  font-weight: bold;
}

#code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
