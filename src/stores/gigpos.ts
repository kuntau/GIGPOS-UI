import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
  state: () => ({
    pageId: 2,
    pageName: 'Cashier',
  }),
});

export const useCounter = defineStore('counter', {
  state: () => ({
    count: 0,
    gate: false
  }),
});
