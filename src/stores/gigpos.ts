import { defineStore } from 'pinia';

export const useGigpos = defineStore('gigpos', {
  state: () => ({
    pageId: 2,
    pageName: 'Cashier',
  }),
});
