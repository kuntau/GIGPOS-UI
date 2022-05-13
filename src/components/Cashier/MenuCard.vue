<script setup lang="ts">
import { computed } from 'vue'
import { faker } from '@faker-js/faker'
import TabScroller from '@/components/Cashier/TabScroller.vue'
import MenuItem from '@/components/Cashier/MenuItem.vue'
import { useProducts } from '../../stores/products'
import type { Category } from '../../stores/products'

const products = useProducts();
const city = faker.address.city();
// const lastProduct = ref()
const productList: Category[] = products.productList;
const categories = productList.map((el => [ el.categoryName, el.categoryIcon ]))

// const activeTab = 
const menus = computed(() => {
  const index = products.tabActive > 0 ? products.tabActive : 0
  return productList[index].products
})

defineProps<{
  page: string
}>()

</script>

<template>
  <div class="card my-2 w-8/12">
    <div class="card-header p-5 border-b hidden">
      <h2 class="text-xl text-gray-700 font-medium tracking-wide">Items</h2>
    </div>
    <div class="card-header rounded shadow-md relative flex">
      <TabScroller
        :tabItems=categories
      />
    </div>
    <div class="card-content py-4 px-0">
      <div class="grid grid-cols-4 gap-4 text-center">
        <MenuItem
          v-for="(product, index) in menus"
          :key="index"
          :menuItem=product
        />
      </div>
    </div>
    <div class="card-footer shadow-lg rounded-b p-2">
      <a class="inline-block mr-2" href="#">{{ city }}</a>
      <a class="inline-block mr-2" href="#">{{ page }}</a>
      <a class="inline-block mr-2" href="#">{{ products.tabActive }}</a>
    </div>
  </div>
</template>

<style scoped>

.card-header {
  background-color: var(--card-bg-color);
}
.card-content {
  background-color: transparent;
}

</style>
