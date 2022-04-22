import { defineStore } from 'pinia';

const categories = ['Favorite', 'Foods', 'Cold drinks', 'Hot drinks', 'Search'];

export const useProducts = defineStore('products', {
  state: () => ({
    category: categories,
  }),
});
