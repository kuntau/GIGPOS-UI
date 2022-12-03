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

const hostName = window.location.hostname

const categories: Category[] = await fetch(`http://${hostName}:3000/data/categories.json`)
  .then(res => res.json())
  .then(data => data)

const products: Product[] = await fetch(`http://${hostName}:3000/data/products.json`)
  .then(res => res.json())
  .then(data => data)

const useProducts = defineStore('products', {
  state: () => ({
    categories,
    products,
    activeTab: 1,
  }),
  getters: {
    getStaticProduct: (state) => state.products.find((product) => product.id === 2),
    getProductById: (state) => { 
      return (productId: number) => state.products.find((product) => product.id === productId)
    },
    getProductsByCategoryId: (state) => { 
      return (categoryId: number) => state.products.filter((product) => {
        return product.categoryId ===  categoryId
      })
    },
    getFavoriteProducts: (state) => {
      return state.products.filter((product) => product.favorite === true)
    },
    getProductsByCategory(): Product[] {
      if (this.activeTab === 0) {
        return this.getFavoriteProducts
      } else {
        return this.products.filter((product) => product.categoryId === this.activeTab)
      }
    }
  },
  actions: {
    selectTab(index: number) {
      this.activeTab = index
    }
  }
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useProducts, import.meta.hot));
}

export type { Product, Category }
export { useProducts }
