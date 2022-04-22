import { defineStore, acceptHMRUpdate } from 'pinia';

const categories = [
  [ 'Favorite', 'fad fa-stars' ],
  [ 'Foods', 'fad fa-utensils' ],
  [ 'File', 'fad fa-file' ],
  [ 'Cold drinks', 'fad fa-beer' ],
  [ 'Hot drinks', 'fad fa-coffee' ],
  [ 'Search', 'fad fa-search' ],
  [ 'Repeat', 'fad fa-cogs' ],
  [ 'Foods', 'fad fa-utensils' ],
  [ 'Cold drinks', 'fad fa-beer' ],
  [ 'Hot drinks', 'fad fa-coffee' ],
  [ 'Search', 'fad fa-search' ],
  [ 'Repeat', 'fad fa-cogs' ],
];

const useProducts = defineStore('products', {
  state: () => ({
    categories,
    tabActive: 1,
  }),
  actions: {
    selectTab(index: number) {
      this.tabActive = index
    }
  }
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useProducts, import.meta.hot));
}

export { useProducts }
