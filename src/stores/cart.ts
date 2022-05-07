import { defineStore } from 'pinia';

type Addon = Product[]

interface Product {
  productId: number,
  productName: string,
  price: number,
  quantity: number,
  addon?: Addon
}
  
// interface Cart {
//   products: Product[]
// }

type Cart = Product[]

const cart: Cart = [
  {
    productId: 5,
    productName: 'Nasi Lemak',
    price: 5.0,
    quantity: 1,
    addon: [
      {
        productId: 10,
        productName: 'Ayam goreng',
        price: 3.5,
        quantity: 1,
      },
      {
        productId: 9,
        productName: 'Sambal kerang',
        price: 2.5,
        quantity: 1,
      },
    ],
  },
  {
    productId: 6,
    productName: 'Mee Goreng Mamak',
    price: 5.0,
    quantity: 1,
    addon: [
      {
        productId: 11,
        productName: 'Telur mata',
        price: 1.5,
        quantity: 1,
      },
    ],
  },
  {
    productId: 4,
    productName: 'Roti Bakar',
    price: 2.0,
    quantity: 2,
  },
  {
    productId: 3,
    productName: 'Chocolate Shake',
    price: 7.9,
    quantity: 1,
    addon: [
      {
        productId: 14,
        productName: 'Extra whip',
        price: 1.0,
        quantity: 1,
      },
    ],
  },
  {
    productId: 2,
    productName: 'Hot Latte',
    price: 4.9,
    quantity: 2,
  },
];

export const useCart = defineStore('cart', {
  state: () => ({
    customerId: 1,
    timestamp: 1649536314315,
    cart,
  }),
});
