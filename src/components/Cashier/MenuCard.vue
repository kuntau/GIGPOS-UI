<script setup lang="ts">
import { computed } from 'vue'
import TabScroller from '@/components/Cashier/TabScroller.vue'
import MenuItem from '@/components/Cashier/MenuItem.vue'
import { useProducts } from '../../stores/products'
import type { Category, OldCategory } from '../../stores/products'

const products = useProducts();
const productList: OldCategory[] = products.oldProductList;
const oldCategories = productList.map((el => [ el.categoryName, el.categoryIcon ]))

const categories: Category = products.categories

// const activeTab = 
const menus = computed(() => {
  const index = products.tabActive > 0 ? products.tabActive : 0
  return productList[index].products
})

const productsByCategory = computed(() => {
  const index = products.tabActive > 0 ? products.tabActive : 0
  const theProducts = products.getProductsByCategoryId(index)
  /* console.log(theProducts) */
  return theProducts
})

const findProduct = () => {
  /* const theProducts = products.getProductById(2) */
  /* const theProducts = products.getStaticProduct */
  const theProducts = products.getProductsByCategoryId(1)
  console.log(theProducts)
}

defineProps<{
  page: string
}>()

</script>

<template>
  <div class="card w-full">
    <div class="card-header p-4 border-b shadow-sm mb-2 hidden">
      <h2 class="text-xl text-gray-700 font-medium tracking-wide">Items</h2>
    </div>
    <div class="card-header rounded shadow-sm flex min-w-0 w-full">
      <TabScroller
        :tabItems=categories
      />
    </div>
    <!-- class="card-header rounded shadow-md relative flex" -->
    <div class="card-content py-4 px-0 flex-shrink">
      <div class="grid grid-cols-4 gap-4 text-center">
        <MenuItem
          v-for="(product, index) in productsByCategory"
          :key="index"
          :menuItem=product
        />
      </div>
    </div>
    <div class="card-footer shadow-lg rounded-b p-2 flex-shrink">
      <a class="inline-block mr-2 px-2 rounded bg-pink-500 text-white" @click="findProduct"><i class="fad fa-search"></i></a>
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
.menuitem-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 200px));
  gap: 10px;
}
</style>
