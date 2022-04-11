<script setup lang="ts">
import { faker } from '@faker-js/faker';
const city = faker.address.city();

const imageURL = 'https://loremflickr.com/160/80/food';
const menus = [
  { id: 1, name: 'Bread', imageURL: faker.image.food(160, 100, true) },
  { id: 2, name: 'Chai', imageURL: faker.image.food(160, 100, true) },
  { id: 3, name: 'Steak', imageURL: faker.image.food(160, 100, true) },
  { id: 4, name: 'Ketum', imageURL: faker.image.food(160, 100, true) },
  { id: 5, name: 'Bread', imageURL: faker.image.food(160, 100, true) },
  { id: 6, name: 'Chai', imageURL: faker.image.food(160, 100, true) },
  { id: 7, name: 'Steak', imageURL: faker.image.food(160, 100, true) },
  { id: 8, name: 'Ketum', imageURL: faker.image.food(160, 100, true) },
];
const categories = [
  'Favorite',
  'Foods',
  'Cold drinks',
  'Hot drinks',
  'Search',
  `${faker.name.firstName}`,
];
</script>

<template>
  <div class="card my-2 w-8/12">
    <div class="card-header p-5 border-b hidden">
      <h2 class="text-xl text-gray-700 font-medium tracking-wide">Items</h2>
    </div>
    <div class="card-header rounded shadow-md relative flex">
      <a class="p-4 border" href="#"><i class="fad fa-chevron-left"></i></a>
      <a
        class="px-4 py-4 font-normal border-r text-blue-700 bg-slate-200 shadow-inner"
        href="#"
        ><i class="fad fa-stars"></i> Favorite</a
      >
      <a class="px-4 py-4 font-normal border-r" href="#"
        ><i class="fad fa-utensils"></i> Foods</a
      >
      <a class="px-4 py-4 font-normal border-r" href="#"
        ><i class="fad fa-beer"></i> Cold drinks</a
      >
      <a class="px-4 py-4 font-normal border-r" href="#"
        ><i class="fad fa-coffee"></i> Hot drinks</a
      >
      <a class="px-4 py-4 font-normal flex-1" href="#"
        ><i class="fad fa-search"></i> Search</a
      >
      <a class="p-4 border" href="#"><i class="fad fa-chevron-right"></i></a>
    </div>
    <div class="card-content py-4 px-0">
      <div class="grid grid-cols-4 gap-4 text-center">
        <div
          v-for="(menu, index) in menus"
          :key="index"
          class="h-25 bg-gray-200 text-gray-500 shadow bg-cover"
        >
          <img class="overflow-hidden" :src="menu.imageURL" alt="" />
        </div>
      </div>
    </div>
    <div class="card-footer shadow-lg rounded-b p-2">
      <a class="inline-block mr-2" href="#">{{ city }}</a>
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
  /* color: var(--link-color); */
}
a:hover {
  color: var(--link-hover-color);
  color: var(--link-color);
}
a.active {
  color: var(--link-color);
  font-weight: 600;
}
</style>
