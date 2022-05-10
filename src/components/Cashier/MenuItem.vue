<script setup lang="ts">

interface MenuItem {
  id: number
  name: string
  imageURL: string
  price?: number
}

defineProps<{
 menuItem: MenuItem
}>()
</script>

<template>
  <div>
    <a :href="'addToCart/' + menuItem.id" class="h-25 bg-gray-200 text-gray-500 shadow bg-cover">
      <img class="overflow-hidden" :src="menuItem.imageURL" :alt="menuItem.name">
      <span>{{ menuItem.name }}</span>
    </a>

  </div>
</template>

<style scoped></style>
