import { defineStore, acceptHMRUpdate } from 'pinia'

const useStore = defineStore('main', {
  state: () => ({
    pageId: 2,
    pageName: 'Cashier',
  }),
})

const useCounter = defineStore('counter', {
  state: () => ({
    count: 1,
    gate: false,
  }),
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    },
    fixed() {
      this.count = 50
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCounter, import.meta.hot))
}

export { useStore, useCounter }

export default useStore
