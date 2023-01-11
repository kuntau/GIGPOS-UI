<script setup lang="ts">
import { useRouter, RouteRecordName } from 'vue-router'
import { routes } from '../router'
const router = useRouter()

const topNavLeft = ['Home', 'Name']
// const topNavRight = ['Logout', 'Kuntau'];
const navRight = routes.filter((route) => route.meta?.category === 'auth')

defineProps<{
  page: RouteRecordName | null | undefined
}>()
</script>
<template>
  <nav class="inset-0 inline-flex flex-grow w-full h-auto py-1">
    <div class="top-nav-left flex flex-grow items-start">
      <ul class="flex self-center">
        <li v-for="nav in topNavLeft" :key="nav" class="text-gray-700">
          {{ nav }}
        </li>
      </ul>
      <div class="inline-flex self-center">
        <input
          class="search ml-2 px-4 h-8 content-center shadow rounded-l"
          type="text"
          placeholder="Press / to focus search"
        />
        <button
          class="btn inline-block text-white text-core bg-green-500 hover:bg-green-600 h-8 px-2 -ml-1 rounded-r shadow"
        >
          <i class="fas fa-search text-xl align-text-bottom leading-none"></i>
        </button>
      </div>
    </div>
    <div class="top-nav-right">
      <ul class="flex justify-end items-center">
        <li v-for="nav in navRight" :key="nav.path" class="inline-block">
          <a class="text-gray-700 cursor-pointer" @click="router.push(nav.path)">
            <i class="fad fa-sign-in"></i> {{ nav.name }}
          </a>
        </li>
        <li class="inline-block">
          <a href="#">
            <img
              class="h-8 rounded-full shadow"
              src="https://gravatar.com/avatar/d69aae377ffa1f6fd90935a888933070"
              alt=""
            />
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<style scoped>
/* navigations */
nav li {
  padding: 0.75rem;
}

nav .search {
  min-width: 250px;
}
</style>
