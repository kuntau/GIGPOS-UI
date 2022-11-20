<script setup lang="ts">
import { faker } from '@faker-js/faker';
import type { Product } from '../../stores/products'

interface MenuItem extends Product {
  imageURL: string
}

// const imageURL = 'https://loremflickr.com/160/80/food';
const imageURL = faker.image.food(160, 100, true)
const style = { 
  backgroundImage: `url("${imageURL}")`,
  backgroundSize: 'cover'
}

const addToCart = (item: Product) => console.log(`${item.name} added to cart`)

defineProps<{
 menuItem: MenuItem
}>()
</script>

<template>
  <a 
    class="cursor-pointer"
    @click="addToCart(menuItem)"
  >
    <div class="flex flex-col-reverse w-full h-25 shadow" :style=style>
      <span class="block text-sm font-medium bg-gray-800/60 text-gray-100 overflow-hidden">
        {{ menuItem.name }}
      </span>
      <!-- <span class="block bg-gray-800 bg-opacity-50 text-gray-100 overflow-hidden">RM{{ menuItem.price }}</span> -->
    </div>
  </a>
</template>

<style scoped>
</style>
