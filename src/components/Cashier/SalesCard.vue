<script setup lang="ts">
import { ref, computed } from 'vue';
import CustomerSelection from '@/components/Cashier/CustomerSelection.vue'

const customerSelectionPopup = ref(false);
const listHover = ref(-1);
const taxRate = 6;
const discount = 20;

type Addon = Product[]

interface Product {
  name: string,
  price: number,
  quantity: number,
  subTotal?: number,
  addon?: Addon
}
  
type CurrentSale = Product[]

const currentSale: CurrentSale = [
  { name: 'Nasi Lemak', price: 4.0, quantity: 1, subTotal: 0, addon: [ { name: 'Ayam goreng', price: 3.5, quantity: 1, }, { name: 'Sambal kerang', price: 2.5, quantity: 1, }, ], },
  { name: 'Mee Goreng Mamak', price: 5.0, quantity: 1, subTotal: 0, addon: [ { name: 'Telur mata', price: 1.5, quantity: 1, }, ], },
  { name: 'Roti Bakar', price: 2.0, quantity: 2, subTotal: 0, },
  { name: 'Chocolate Shake', price: 6.9, quantity: 1, subTotal: 0, addon: [ { name: 'Extra whip', price: 1.0, quantity: 1, }, ], },
  { name: 'Hot Latte', price: 4.9, quantity: 2, subTotal: 0, }
];

// methods
function formatPrice(price: string) {
  return Number.parseFloat(price).toFixed(2);
}
function formatPriceString(price: string) {
  return 'RM' + formatPrice(price);
}
function totalPrice(items: Product) {
  let subtotal = items.price * items.quantity;
  if ('addon' in items && items.addon!.length > 0) {
    items.addon!.forEach((el: Product) => (subtotal += el.price));
  }
  return formatPrice(subtotal.toString());
}

// computed
const currentSaleSubTotal = computed(() => {
  let subtotal = 0; // weird this have to initialized else we got NaN
  currentSale.forEach((el) => {
    subtotal += el.price * el.quantity; // calculate price for main item
    if ('addon' in el) el.addon!.forEach((el) => (subtotal += el.price)); // calculate price for main's addon
  });
  return subtotal;
});

const currentSaleTotal = computed(() =>
  formatPrice(currentSaleSubTotal.value.toString() + (currentSaleSubTotal.value * 6) / 100)
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
      <div
        v-for="(sale, index) in currentSale"
        :key="index"
        class="card-list flex px-5 relative"
        @mouseover="listHover = index"
        @mouseleave="listHover = -1"
      >
        <div class="card-list-item flex flex-col flex-grow">
          <div class="text-gray-700 font-medium card-list-item-main">
            {{ sale.name }}
          </div>
          <div
            v-for="(addon, addonIndex) in sale.addon"
            :key="addonIndex"
            class="text-gray-500 text-sm card-list-item-detail"
          >
            {{ addon.name }} &mdash; {{ formatPriceString(addon.price.toString()) }}
          </div>
        </div>
        <input
          class="w-8 h-6 text-gray-700 card-list-quantity mr-2"
          :value="sale.quantity"
          type="number"
        />
        <div class="text-center text-gray-700 card-list-price">
          {{ formatPriceString(totalPrice(sale)) }}
        </div>
        <a
          v-show="listHover === index"
          href="#"
          class="card-list-delete absolute"
          ><i class="fad fa-times-circle text-red-400 text-2xl"></i
        ></a>
      </div>
      <div class="card-footer bg-white rounded-b mt-3 p-5 border-t">
        <p class="text-right text-gray-700 font-normal tracking-wide">
          Sub total : {{ formatPriceString(currentSaleSubTotal.toString()) }}
        </p>
        <p class="text-right text-gray-700 font-normal tracking-wide">
          Tax : {{ taxRate }}%
        </p>
        <p class="text-right text-gray-700 font-normal tracking-wide">
          Discount : {{ discount }}%
        </p>
      </div>
      <div class="card-footer bg-gray-200 rounded-b p-3 border-t flex">
        <p
          class="text-xl text-right text-gray-700 font-medium tracking-wide flex-1"
        >
          Total: {{ formatPriceString(currentSaleTotal) }}
        </p>
        <a class="text-xl px-3 ml-3 border-l" href="#"
          ><i class="text-2xl hover:shadow-lg fad fa-cash-register"></i
        ></a>
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
  /* background-color: var(--pink); */
}
/* .card-header > .chevron-left { */
/*   top: 8px; */
/*   left: -15px; */
/* } */
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
