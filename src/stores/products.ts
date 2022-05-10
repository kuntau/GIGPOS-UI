import { defineStore, acceptHMRUpdate } from 'pinia';

const categories = [
  [ '',            'fad fa-search',   0, ],
  [ '',            'fad fa-stars',    1, ],
  [ 'Malay',       'fad fa-utensils', 2, ],
  [ 'Western',     'fad fa-utensils', 3, ],
  [ 'Cold drinks', 'fad fa-beer',     4, ],
  [ 'Hot drinks',  'fad fa-coffee',   5, ],
  [ 'Search',      'fad fa-search',   6, ],
  [ 'Repeat',      'fad fa-cogs',     7, ],
];

export interface Product {
  productId: number
  productName: string
  price: number
}

export interface Category {
  categoryId: number
  categoryName: string
  products: Product[]
}

const productList: Category[] = await fetch('http://localhost:3000/data/products.json')
  .then(res => res.json())
  .then(data => data)

const useProducts = defineStore('products', {
  state: () => ({
    categories,
    productList,
    tabActive: 2,
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

// export type { Product, Category }
export { useProducts }
