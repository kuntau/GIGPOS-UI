<script setup lang="ts">
import { faker } from '@faker-js/faker';
import type { Product } from '../../stores/products'

interface MenuItem extends Product {
  imageURL: string
  // price?: number
}

// const imageURL = 'https://loremflickr.com/160/80/food';

defineProps<{
 menuItem: MenuItem
}>()
</script>

<template>
  <div class="flex">
    <a :href="'addToCart/' + menuItem.productId" class="h-25 bg-gray-200 text-gray-500 shadow bg-cover">
      <img class="overflow-hidden" :src="faker.image.food(160, 100, true)" :alt="menuItem.productName">
      <span class="overflow-hidden">{{ menuItem.productName }}</span>
    </a>

  </div>
</template>

<style scoped>
.menu-item {
  width: 160px;
  height: 100px;
}
</style>
