<script setup lang="ts">
import { faker } from '@faker-js/faker';
import type { Product } from '../../stores/products'
import type { CartItem } from '../../stores/cart'
import { useCart } from '../../stores/cart'

// const imageURL = 'https://loremflickr.com/160/80/food';
const imageURL = faker.image.food(160, 100, true)
const style = { 
  backgroundImage: `url("${imageURL}")`,
  backgroundSize: 'cover'
}

const cart = useCart()
const addToCart = (item: Product) => {
  /* item["quantity"] = 1 */
  cart.addCartItem(item as CartItem)
}

defineProps<{
 product: Product
}>()
</script>

<template>
  <a 
    class="cursor-pointer"
    @click="cart.addCartItem(product as CartItem)"
  >
    <div class="flex flex-col-reverse w-full h-25 shadow" :style=style>
      <span class="block text-sm font-medium bg-gray-800/60 text-gray-100 overflow-hidden">
        {{ product.name }}
      </span>
      <!-- <span class="block bg-gray-800 bg-opacity-50 text-gray-100 overflow-hidden">RM{{ product.price }}</span> -->
    </div>
  </a>
</template>

<style scoped>
</style>
