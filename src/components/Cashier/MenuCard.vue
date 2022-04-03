<script setup lang="ts">
// import { ref, computed } from 'vue'

const imageURL = "https://loremflickr.com/160/80/food"
const menus = [
  { id: 1, name: "Bread", imageURL: "https://loremflickr.com/160/100/food?lock=1" },
  { id: 2, name: "Chai",  imageURL: "https://loremflickr.com/160/100/food?lock=2" },
  { id: 3, name: "Steak", imageURL: "https://loremflickr.com/160/100/food?lock=3" },
  { id: 4, name: "Ketum", imageURL: "https://loremflickr.com/160/100/food?lock=4" },
  { id: 5, name: "Bread", imageURL: "https://loremflickr.com/160/100/food?lock=5" },
  { id: 6, name: "Chai",  imageURL: "https://loremflickr.com/160/100/food?lock=6" },
  { id: 7, name: "Steak", imageURL: "https://loremflickr.com/160/100/food?lock=7" },
  { id: 8, name: "Ketum", imageURL: "https://loremflickr.com/160/100/food?lock=8" },
]
const categories = [
  "Favorite",
  "Foods",
  "Cold drinks",
  "Hot drinks",
  "Search"
]
</script>

<template>
  <div class="card my-2 w-8/12">
    <div class="card-header p-5 border-b hidden">
      <h2 class="text-xl text-gray-700 font-medium tracking-wide">Items</h2>
    </div>
    <div class="card-header rounded shadow-md relative flex">
      <a class="p-4 border" href="#"><i class="fad fa-chevron-left"></i></a>
      <a class="px-4 py-4 font-medium border-r text-blue-700 bg-gray-300 shadow-inner" href="#"><i class="fad fa-stars"></i> Favorite</a>
      <a class="px-4 py-4 font-medium border-r" href="#"><i class="fad fa-utensils"></i> Foods</a>
      <a class="px-4 py-4 font-medium border-r" href="#"><i class="fad fa-beer"></i> Cold drinks</a>
      <a class="px-4 py-4 font-medium border-r" href="#"><i class="fad fa-coffee"></i> Hot drinks</a>
      <a class="px-4 py-4 font-medium flex-1" href="#"><i class="fad fa-search"></i> Search</a>
      <a class="p-4 border" href="#"><i class="fad fa-chevron-right"></i></a>
    </div>
    <div class="card-content py-4 px-0">
      <div class="grid grid-cols-4 gap-4 text-center">
        <div v-for="(menu, index) in menus" class="h-25 bg-gray-200 text-gray-500 shadow bg-cover">
          <img class="overflow-hidden" :src="menu.imageURL" alt="">
        </div>
      </div>
    </div>
    <div class="card-footer shadow-lg rounded-b p-2">
      <a class="inline-block mr-2" href="#">footer</a>
    </div>
  </div>
</template>

<style scoped>
  
.card-header {
  background-color: var(--card-bg-color);
}
.card-content {
  /* background-color: transparent; */
}

/* links */
a {
  color: var(--link-color);
}
a:hover {
  color: var(--link-hover-color);
}
a.active {
  color: var(--link-color);
  font-weight: 600;
}

</style>
