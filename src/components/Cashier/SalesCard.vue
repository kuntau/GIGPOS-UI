<script setup lang="ts">
import { ref, computed } from 'vue';
import CustomerSelection from '@/components/Cashier/CustomerSelection.vue'
import { useCart } from '../../stores/cart'
import type { Product } from '../../stores/products'
import type { CartItem } from '../../stores/cart'

const cart = useCart();
const customerSelectionPopup = ref(false);
const taxRate = 6;
const discount = 20;

interface CurrentSale extends Product {
  quantity: number,
  /* subTotal?: number, */
  addon?: Product[]
}
  
const currentSale: CartItem[] = cart.cart

const OneItem: Product = {
  id: 150,
  name: 'Kari Kambing',
  price: 10.0,
  categoryId: 3,
}

// methods
function formatPrice(price: number) {
  return price.toFixed(2).toLocaleString();
}

function formatPriceString(price: number) {
  return 'RM' + formatPrice(price);
}

function totalPrice(items: CurrentSale) {
  let subtotal = items.price * items.quantity;
  if ('addon' in items && items.addon!.length > 0) {
    items.addon!.forEach((el: Product) => (subtotal += el.price));
  }
  return formatPrice(subtotal);
}

const clearCart = () => {
  console.log("Resetting cart...", cart.getSubTotal)
    /* cart.$reset() */
    /* currentSale = {} */
    /* cart.clearCart() */
  }

// computed
const getSubTotalString = computed(() =>
  formatPriceString(cart.getSubTotal)
);

const getTotalString = computed(() =>
  formatPriceString(cart.getTotal)
);
</script>

<template>
  <div
    class="card flex flex-col bg-card-bg bg-white shadow-lg rounded relative"
  >
    <div class="card-header bg-white rounded-t border-b flex">
      <h3 class="text-lg text-gray-700 font-semibold tracking-wide py-4 mx-4">
        Cart
      </h3>
      <div
        class="flex-grow text-right text-lg text-gray-700 border-l p-4 cursor-pointer"
        @click="customerSelectionPopup = !customerSelectionPopup"
      >
        <!-- @mouseover="customerSelectionPopup = true" -->
        <!-- @mouseleave="customerSelectionPopup = false" -->
        <p>Customer345 <span class="ml-2 far fa-chevron-circle-down"></span></p>
        <CustomerSelection v-if=customerSelectionPopup />
      </div>
    </div>

    <div class="list-card-content flex-grow pt-3">

      <table class="card-list table w-full" >
        <tbody clsss="text-green-900" >
          <tr
            v-for="(sale, index) in currentSale"
            :key="index"
          >
            <td class="pl-2">
              {{ sale.name }}
              <div
                v-for="(addon, addonIndex) in sale.addon"
                :key="addonIndex"
                class="text-gray-500 text-sm card-list-item-detail"
              >
                {{ addon.name }} &mdash; {{ formatPriceString(addon.price) }}
              </div>
            </td>
            <td class="text-sm text-center align-top">{{ sale.quantity }}</td>
            <td class="pr-2 text-right align-top">{{ totalPrice(sale)  }}</td>
          </tr>
        </tbody>
      </table>

      <!-- Start subtotal section -->
      <div class="card-footer bg-white p-5 border-t">
        <p class="text-right text-gray-700 font-normal tracking-wide">
          Sub total : {{ getSubTotalString }}
        </p>
        <p class="text-right text-gray-700 font-normal tracking-wide">
          Tax : {{ taxRate }}%
        </p>
        <p class="text-right text-gray-700 font-normal tracking-wide">
          Discount : {{ discount }}%
        </p>
      </div>
      <!-- Start total section -->
      <div class="card-footer bg-gray-200 rounded-b p-3 border-t flex">
        <button @click="clearCart" class="px-3 ml-2 text-sm rounded text-white bg-red-500"><i class="far fa-times"></i></button>
        <button @click="cart.$reset()" class="px-3 ml-2 text-sm rounded text-white bg-purple-500"><i class="far fa-times"></i></button>
        <button @click="cart.addCartItem(OneItem as CartItem)" class="px-3 pr-2 ml-2 text-sm rounded text-white bg-blue-500"><i class="far fa-edit"></i></button>
        <p
          class="text-xl text-right text-gray-700 font-medium tracking-wide flex-1"
        >
          Total: {{ getTotalString }}
        </p>
        <a class="text-xl px-2 ml-3" href="#"><i class="text-2xl text-green-500 hover:shadow-lg fad fa-cash-register"></i></a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: var(--card-bg-color);
}

.card-content {
  background-color: pink;
}

.card-footer:nth-child(odd) {
  background-color: var(--card-bg-color);
}

.card-list {
  margin-top: 0.2rem;
}

.card-list-quantity {
  background-color: var(--card-bg-color);
}

.card-list-delete {
  right: -10px;
}

.bg-card-bg {
  background-color: var(--card-bg-color);
}
</style>
