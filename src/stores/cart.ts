import { defineStore, acceptHMRUpdate } from 'pinia';
import type { Product } from './products'

interface CartItem extends Product {
  quantity: number
  addon?: Product[]
}

// type Cart = Product[]

const Oldcart: CartItem[] = [
  {
    id: 1,
    name: 'Nasi Lemak',
    price: 3.5,
    categoryId: 1,
    quantity: 1,
  },
  {
    id: 4,
    name: 'Mee Goreng Mamak',
    price: 5.0,
    categoryId: 1,
    quantity: 1,
  },
  {
    id: 20,
    name: 'Chicken Chop',
    price: 13.5,
    categoryId: 2,
    quantity: 2,
  },
  {
    id: 11,
    name: 'Nescafe ais',
    price: 3.5,
    categoryId: 3,
    quantity: 1,
  },
  {
    id: 36,
    name: 'Latte',
    price: 5,
    categoryId: 4,
    quantity: 2,
  },
];

const cart: CartItem[] = []

export type { CartItem }

export const useCart = defineStore('cart', {
  state: () => ({
    customerId: 1,
    timestamp: 1649536314315,
    cart: [] as CartItem[],
    currentProductId: 1,
    taxRate: 6,
    subTotal: 0,
    total: 0,
  }),
  getters: {
    checkIfProductInCart: (state) => {
      return state.cart.findIndex((item) => item.id === state.currentProductId)
    },
    getSubTotal: (state) : number => { 
      let subTotal = 0
      return state.cart.reduce((previousItem, currentItem) => previousItem + (currentItem.price*currentItem.quantity), subTotal)
    },
    getTotal(): number {
      const subTotal: number = this.getSubTotal
      return (subTotal + (subTotal * 6 / 100))
    }
  },
  actions: {
    setCurrentProductId(id: number) {
      this.currentProductId = id
    },
    clearCart() {
      console.log("yayay")
      this.$reset()
      /* this.cart = [] */
      /* this.cart = cart */
      /* this.cart.slice(0, this.cart.length) */
    },
    increaseProductQuantity(id: number) {
      const itemToModify = this.cart.find(item => item.id === id)
      if (itemToModify) itemToModify.quantity ++
    },
    decreaseProductQuantity(id: number) {
      const itemToModify = this.cart.find(item => item.id === id)
      if (itemToModify) itemToModify.quantity --
    },
    addCartItem(item: CartItem) {
      this.setCurrentProductId(item.id)
      const productIndex = this.checkIfProductInCart
      /* console.log(this.currentProductId, item.id, productIndex) */
      if (this.checkIfProductInCart >= 0) {
        console.log("Product exist at ", productIndex)
        this.increaseProductQuantity(item.id)
      } else {
        item["quantity"] = 1
        this.cart.push(item)
      }
    }
  }
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useCart, import.meta.hot));
}
