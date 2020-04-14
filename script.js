// import Vue from 'node_modules/vue/dist/vue.esm.browser';

new Vue({
  el: "#app",
  data: {
    customerHover: false,
    listHover: false,
    topNavLeft: ["Home", "Name"],
    topNavRight: ["Logout", "Kuntau"],
    sideNav: [
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
    ],
    currentSale: [
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
  },
  computed: {
    subTotal() {
      let subtotal = 0;
      this.currentSale.forEach(el => {
        subtotal += el.price * el.quantity;
        if ("addon" in el) {
          el.addon.forEach(el => {
            subtotal += el.price
          })
        }
      })
      return subtotal;
    }
  },
  methods: {
    formatPrice(price) {
      return Number.parseFloat(price).toFixed(2)
    },
    formatPriceString(price) {
      return "RM" + this.formatPrice(price)
      // return "RM" + Number.parseFloat(price).toFixed(2)
    },
    totalPrice(items) {
      let subtotal = items.price * items.quantity;
      try {
        items.addon.forEach(el => subtotal += el.price)}
      catch (e) {
        console.info("totalPrice: ",e)
      }
      return this.formatPrice(subtotal);
    }
  }
})
