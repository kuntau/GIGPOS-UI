<script setup lang="ts">
import { ref, computed } from 'vue'

defineProps<{ msg: string }>()

const customerHover = ref(false)
const listHover = ref(-1)
const taxRate = 6
const discount = 20
const topNavLeft = ["Home", "Name"]
const topNavRight = ["Logout", "Kuntau"]
const sideNav = [
  {
    name: 'Dashboard',
    url: 'dashboard.html',
    icon: 'fad fa-city',
    active: false
  },
  {
    name: 'Cashier',
    url: 'cashier.html',
    icon: 'fad fa-university',
    active: true
  },
  {
    name: 'Reports',
    url: 'reports.html',
    icon: 'fad fa-dungeon',
    active: false
  },
  {
    name: 'Charts',
    url: 'charts.html',
    icon: 'fad fa-gopuram',
    active: false
  },
  {
    name: 'Products',
    url: 'products.html',
    icon: 'fad fa-house-damage',
    active: false
  },
  {
    name: 'Inbox',
    url: 'inbox.html',
    icon: 'fad fa-igloo',
    active: false
  },
  {
    name: 'Settings',
    url: 'settings.html',
    icon: 'fad fa-industry',
    active: false
  }
]

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
  <div class="sidebar fixed px-2 pl-5 py-3">
    <div class="store text-blue-800 font-medium px-1 py-2 mb-3">
      <a class="overflow-hidden" href="#">
        <span class="font-black bg-white p-2 rounded-full shadow mr-1"><i class="fad fa-store"></i></span> Gets Global <span class="font-black fas fa-chevron-down"></span></a>
    </div>
    <nav class="pt-3">
      <p class="title uppercase text-xs text-gray-600 tracking-wider">main</p>
      <ul class="ml-2 mt-2">
        <li class="flex-grow px-2 py-1" v-for="nav in sideNav">
          <a class="text-core font-normal tracking-wide text-blue-900 hover:text-blue-700" :class="{ active: nav.active }" :href="nav.url">
            <i :class="nav.icon"></i> {{ nav.name }}
          </a>
        </li>
      </ul>
      <p class="title uppercase text-xs text-gray-600 mt-3">Store</p>
      <ul class="ml-2 mt-2">
        <li class="flex-grow px-2 py-1" v-for="nav in sideNav">
          <a class="text-sm font-light text-blue-900 hover:text-blue-700" :href="nav.url">
            <i class="fad fa-university"></i> {{ nav.name }}
          </a>
        </li>
      </ul>
    </nav>
  </div>

  <section class="main container box-border relative w-full">

    <nav class="top-nav sticky inset-0 box-border inline-flex flex-grow w-full h-auto py-1 overflow-hidden">
      <div class="top-nav-left flex flex-grow items-start">
        <ul class="flex self-center">
          <li class="text-gray-700" v-for="nav in topNavLeft">{{ nav }}</li>
        </ul>
        <div class="inline-flex self-center">
          <input class="search ml-2 px-4 h-8 content-center shadow rounded-l" type="text" placeholder='Press / to focus search'>
          <button class="btn inline-block text-white text-core bg-green-500 hover:bg-green-600 h-8 px-2 -ml-1 rounded-r shadow"><i class="fas fa-search text-xl align-text-bottom leading-none"></i></button>
        </div>
      </div>
      <div class="top-nav-right">
        <ul class="flex justify-end items-center">
          <li class="inline-block" v-for="nav in topNavRight">
            <a class="text-gray-700" href="#">
              <i class="fad fa-sign-in"></i> {{ nav }}
            </a>
          </li>
          <li class="inline-block"><a href="#"><img class="h-8 rounded-full shadow" src="https://gravatar.com/avatar/d69aae377ffa1f6fd90935a888933070" alt=""></a></li>
        </ul>
      </div>
    </nav>

    <content class="main box-border my-10 flex">

      <div class="card my-2 w-8/12">
        <div class="card-header p-5 border-b hidden">
          <h2 class="text-xl text-gray-700 font-medium tracking-wide">Items</h2>
        </div>
        <div class="card-header bg-gray-200 border rounded shadow-md relative flex">
          <a class="p-4 border" href="#"><i class="fad fa-chevron-left"></i></a>
          <a class="px-4 py-4 border-r text-gray-700 bg-gray-300 shadow-inner" href="#"><i class="fad fa-stars"></i> Favorite</a>
          <a class="px-4 py-4 border-r" href="#"><i class="fad fa-utensils"></i> Foods</a>
          <a class="px-4 py-4 border-r" href="#"><i class="fad fa-beer"></i> Cold drinks</a>
          <a class="px-4 py-4 border-r" href="#"><i class="fad fa-coffee"></i> Hot drinks</a>
          <a class="px-4 py-4 flex-1" href="#"><i class="fad fa-search"></i> Search</a>
          <a class="p-4 border" href="#"><i class="fad fa-chevron-right"></i></a>
        </div>
        <div class="card-content py-4 px-0">
          <div class="grid grid-cols-4 gap-4 text-center">
            <div class="h-20 bg-gray-200 p-2 text-gray-500 shadow"><img class="overflow-hidden" src="https://loremflickr.com/160/74/food?lock=1" alt=""></div>
            <div class="h-20 bg-gray-200 p-2 text-gray-500 shadow"><img class="overflow-hidden" src="https://loremflickr.com/160/74/food?lock=2" alt=""></div>
            <div class="h-20 bg-gray-200 p-2 text-gray-500 shadow"><img class="overflow-hidden" src="https://loremflickr.com/160/74/food?lock=3" alt=""></div>
            <div class="h-20 bg-gray-200 p-2 text-gray-500 shadow"><img class="overflow-hidden" src="https://loremflickr.com/160/74/food?lock=4" alt=""></div>
            <div class="h-20 bg-gray-200 p-2 text-gray-500 shadow"><img class="overflow-hidden" src="https://loremflickr.com/160/74/food?lock=5" alt=""></div>
            <div class="h-20 bg-gray-300 p-2 text-gray-600 shadow"><img class="overflow-hidden" src="https://loremflickr.com/160/74/food?lock=6" alt=""></div>
            <div class="h-20 bg-gray-200 p-2 text-gray-500 shadow"><img class="overflow-hidden" src="https://loremflickr.com/160/74/food?lock=7" alt=""></div>
            <div class="h-20 bg-gray-200 p-2 text-gray-500 shadow"><img class="overflow-hidden" src="https://loremflickr.com/160/74/food?lock=8" alt=""></div>
            <div class="h-20 bg-gray-200 p-2 text-gray-500 shadow"><img class="overflow-hidden" src="https://loremflickr.com/160/74/food?lock=9" alt=""></div>
            <div class="h-20 bg-gray-200 p-2 text-gray-500 shadow"><img class="overflow-hidden" src="https://loremflickr.com/160/74/food?lock=10" alt=""></div>
          </div>
        </div>
        <div class="card-footer bg-gray-200 shadow-lg p-2 hidden">
          <a class="inline-block mr-2" href="#">{{$data}}</a>
        </div>
      </div>

      <div class="card relative flex flex-col bg-card-bg my-2 bg-white shadow-lg rounded w-4/12 ml-3">
        <div class="card-header bg-white rounded-t border-b flex">
          <h2 class="text-lg text-gray-700 font-medium tracking-wide py-4 mx-4">Current {{msg}}</h2>
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
    </content>
  </section>
</template>

<style scoped>

#label {
  margin: 0 0.5em;
  font-weight: bold;
}

#code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
