import { defineStore, acceptHMRUpdate } from 'pinia';

export interface Product {
  productId: number
  productName: string
  price: number
}

export interface Category {
  categoryId: number
  categoryName: string
  categoryIcon: string
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
