import { defineStore, acceptHMRUpdate } from 'pinia';

interface Product {
  id: number
  name: string
  price: number
  categoryId: number
  categoryName?: String
  imageUrl?: string
  favorite?: boolean
  promotion?: boolean
}

interface Category {
  id: number
  name: string
  description: string
  faIcon: string
}

const categories: Category[] = await fetch('http://localhost:3000/data/categories.json')
  .then(res => res.json())
  .then(data => data)

const products: Product[] = await fetch('http://localhost:3000/data/products.json')
  .then(res => res.json())
  .then(data => data)

const useProducts = defineStore('products', {
  state: () => ({
    categories,
    products,
    tabActive: 1,
  }),
  getters: {
    getStaticProduct: (state) => { 
      console.log(products)
      return state.products.find((product) => product.id === 2)
    },
    getProductById(state) { 
      return (productId: number) => state.products.find((product) => product.id === productId)
    },
    getProductsByCategoryId: (state) => { 
      return (categoryId: number) => state.products.filter((product) => {
        return product.categoryId ===  categoryId
      })
    }
  },
  actions: {
    selectTab(index: number) {
      this.tabActive = index
    }
  }
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useProducts, import.meta.hot));
}

export type { Product, Category }
export { useProducts }
