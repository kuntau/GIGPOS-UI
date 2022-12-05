<script setup lang="ts">
import { useRoute, RouteRecordName } from 'vue-router';
import { routes } from '../router';

const route = useRoute();

const navMain = routes.filter(route => route.meta?.category === 'main')
const navManage = routes.filter(route => route.meta?.category === 'manage')
const navMisc = routes.filter(route => route.meta?.category === 'misc')

// another method to change page. just call this with @click
// const openInbox = () => router.push('/inbox')

defineProps<{
  page: RouteRecordName|null|undefined
}>()

</script>
<template>
  <aside class="py-3">
    <div class="store text-blue-800 font-medium px-1 py-2 mb-3">
      <a class="overflow-hidden" href="#">
        <span class="font-black bg-white p-2 rounded-full shadow mr-1"><i class="fad fa-store"></i></span> Gets Global <span class="font-black fas fa-chevron-down"></span></a>
    </div>
    <nav class="pt-3">
      <p class="title uppercase text-xs text-gray-600 tracking-wider">Main</p>
      <ul class="ml-2 mt-2">
        <li class="flex-grow px-2 py-1" v-for="nav in navMain">
          <router-link class="text-core font-normal tracking-wide text-gray-700 hover:text-blue-700" :class="{ active: nav.path === route.path }" :to="nav.path">
            <i :class="nav.meta?.icon"></i> {{ nav.name }}
          </router-link>
        </li>
      </ul>

      <p class="mt-2 title uppercase text-xs text-gray-600 tracking-wider">Manage</p>
      <ul class="ml-2 mt-2">
        <li class="flex-grow px-2 py-1" v-for="nav in navManage">
          <router-link class="text-core font-normal tracking-wide text-gray-700 hover:text-blue-700" :class="{ active: nav.path === route.path }" :to="nav.path">
            <i :class="nav.meta?.icon"></i> {{ nav.name }}
          </router-link>
        </li>
      </ul>

      <p class="mt-2 title uppercase text-xs text-gray-600 tracking-wider">Misc</p>
      <ul class="ml-2 mt-2">
        <li class="flex-grow px-2 py-1" v-for="nav in navMisc">
          <router-link class="text-core font-normal tracking-wide text-gray-700 hover:text-blue-700" :class="{ active: nav.path === route.path }" :to="nav.path">
            <i :class="nav.meta?.icon"></i> {{ nav.name }}
          </router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>
<style scoped>

</style>
