<script setup lang="ts">
import { ref, computed } from 'vue'

const customerHover = ref(false)
const listHover = ref(-1)
const taxRate = 6
const discount = 20

const currentSale = [
  {
    name: "Nasi Lemak",
    price: 4.00,
    quantity: 1,
    subTotal: 0,
    addon: [
      {
        name: "Ayam goreng",
        price: 3.50,
        quantity: 1
      },
      {
        name: "Sambal kerang",
        price: 2.50,
        quantity: 1
      }
    ]
  },
  {
    name: "Mee Goreng Mamak",
    price: 5.00,
    quantity: 1,
    subTotal: 0,
    addon: [
      {
        name: "Telur mata",
        price: 1.50,
        quantity: 1
      }
    ]
  },
  {
    name: "Roti Bakar",
    price: 2.00,
    quantity: 2,
    subTotal: 0,
  },
  {
    name: "Chocolate Shake",
    price: 6.90,
    quantity: 1,
    subTotal: 0,
    addon: [
      {
        name: "Extra whip",
        price: 1.00,
        quantity: 1
      }
    ]
  },
  {
    name: "Hot Latte",
    price: 4.90,
    quantity: 2,
    subTotal: 0,
  }
]

// methods 
function formatPrice(price) {
  return Number.parseFloat(price).toFixed(2)
}
function formatPriceString(price) {
  return "RM" + formatPrice(price)
}
function totalPrice(items) {
  let subtotal = items.price * items.quantity;
  if ("addon" in items && items.addon.length > 0) {
    items.addon.forEach(el => subtotal += el.price)
  }
  return formatPrice(subtotal);
}

// computed
const currentSaleSubTotal = computed(() => {
  let subtotal = 0; // weird this have to initialized else we got NaN
  currentSale.forEach(el => {
    subtotal += el.price * el.quantity; // calculate price for main item
    if ("addon" in el) el.addon.forEach(el => subtotal += el.price) // calculate price for main's addon
  })
  return subtotal;
})

const currentSaleTotal = computed(() => formatPrice(currentSaleSubTotal.value + (currentSaleSubTotal.value * 6/100)) )

</script>

<template>
  <div class="card relative flex flex-col bg-card-bg my-2 bg-white shadow-lg rounded w-4/12 ml-3">
    <div class="card-header bg-white rounded-t border-b flex">
      <h2 class="text-lg text-gray-700 font-medium tracking-wide py-4 mx-4">Current Sale</h2>
      <div @mouseover="customerHover = true" @mouseleave="customerHover = false"
        class="flex-grow text-right text-lg text-gray-700 border-l p-4">
        <p>Customer345 <span class="ml-2 far fa-chevron-circle-down"></span></p>
        <transition name="fade">
          <div @mouseover="customerHover = true" @mouseleave="customerHover = false"
            class="popover popover-customer bg-white bhadow absolute rounded border z-10" v-if="customerHover">
            <div class="flex m-4">
              <input id="" class="px-2 flex-1 border rounded shadow-xs" type="text" name="customer-search"
                placeholder="Search customer">
              <a href="#" class="ml-2 pl-2 align-text-bottom" title="Add new customer"><i
                class="fas fa-plus-square text-3xl"></i></a>
            </div>
            <ul class="m-4 mt-0">
              <li class="py-1 border-b"><a class="text-blue-500" href="#">John Doe <span
                class="text-gray-500 text-xs">#1234</span></a></li>
              <li class="py-1 border-b"><a class="text-blue-500" href="#">Kwang Soo <span
                class="text-gray-500 text-xs">#1234</span></a></li>
              <li class="py-1 border-b"><a class="text-blue-500" href="#">Janne Ram <span
                class="text-gray-500 text-xs">#1234</span></a></li>
              <li class="py-1 border-b"><a class="text-blue-500" href="#">Jack Black <span
                class="text-gray-500 text-xs">#1234</span></a></li>
              <li class="py-1"><a class="text-blue-500" href="#">Ram Karpal Singh <span
                class="text-gray-500 text-xs">#1234</span></a></li>
            </ul>
          </div>
        </transition>
      </div>
    </div>

    <div class="list-card-content flex-grow pt-3">
      <div class="card-list flex px-5 relative" v-for="(sale, index) in currentSale" @mouseover="listHover = index" @mouseleave="listHover = -1">
        <div class="card-list-item flex flex-col flex-grow">
          <div class="text-gray-700 font-medium card-list-item-main">{{ sale.name }}</div>
          <div class="text-gray-500 text-sm card-list-item-detail" v-for="addon in sale.addon">{{ addon.name }} &mdash; {{ formatPriceString(addon.price) }}</div>
        </div>
        <input class="w-8 h-6 text-gray-700 card-list-quantity mr-2" :value="sale.quantity" type="number">
        <div class="text-center text-gray-700 card-list-price">{{ formatPriceString(totalPrice(sale)) }}</div>
        <a href="#" v-show="listHover === index" class="card-list-delete absolute"><i class="fad fa-times-circle text-red-400 text-2xl"></i></a>
      </div>
      <div class="card-footer bg-white rounded-b mt-3 p-5 border-t">
        <p class="text-right text-gray-700 font-normal tracking-wide">Sub total : {{ formatPriceString(currentSaleSubTotal) }}</p>
        <p class="text-right text-gray-700 font-normal tracking-wide">Tax : {{ taxRate }}%</p>
        <p class="text-right text-gray-700 font-normal tracking-wide">Discount : {{ discount }}%</p>
      </div>
      <div class="card-footer bg-gray-200 rounded-b p-3 border-t flex">
        <p class="text-xl text-right text-gray-700 font-medium tracking-wide flex-1">Total: {{ formatPriceString(currentSaleTotal) }}</p>
        <a class="text-xl px-3 ml-3 border-l" href="#"><i class="text-2xl hover:shadow-lg fad fa-cash-register"></i></a>
      </div>
    </div>
  </div>
</template>

<style scoped>

.card {
  background-color: var(--card-bg-color);
}
.card-content {
  z-index: 1; /* filler */
  background-color: transparent;
}
.card-footer:last-child {
  background-color: var(--card-bg-color);
}

/* POPOVER STLYE */
.popover-customer {
  /* position: relative; */
  background-color: #333;
  background-color: var(--bg-dark);
  width: 90%;
  top: 50px;
  margin-left: -39%;
}
.popover:before {
  position: absolute;
  z-index: 1;
  top: -20px;
  left: 70%;
  content: "";
  border-style: solid;
  border-width: 10px;
  border-color: transparent transparent #222 transparent;
}
.popover:after {
  position: absolute;
  z-index: 1;
  top: -20px;
  left: 70%;
  content: "";
  border-style: solid;
  border-width: 10px;
  border-color: transparent transparent var(--bg-dark) transparent;
}
.popover > .arrow {
  text-transform: uppercase;
}
.fade-enter-active {
  transition: all .2s ease-in;
}
.fade-leave-active {
  transition: all .1s ease-out;
}
.fade-enter, .fade-leave-to {
  transform: translateY(5px);
}
</style>
