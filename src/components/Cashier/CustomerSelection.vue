<script setup lang="ts">
  /* import { ref } from 'vue'; */
  import { faker } from '@faker-js/faker';

</script>

<template>
  <transition name="fade">
    <div
      class="popover popover-customer bg-white bhadow absolute rounded border z-10"
    >
      <div class="flex m-4">
        <input
          id=""
          class="px-2 flex-1 border rounded shadow-xs"
          type="text"
          name="customer-search"
          placeholder="Search customer"
        />
        <a
          href="#"
          class="pl-2 align-text-bottom"
          title="Add new customer"
        ><i class="fas fa-plus-square text-3xl"></i
          ></a>
      </div>
      <ul class="m-4 mt-0">
        <li class="py-1 border-b" v-for="cust in 5" :key="cust">
          <a class="text-blue-500" href="#"
          >{{ faker.name.firstName() }}, {{ faker.name.lastName() }} <span class="text-gray-500 text-xs">#1234</span></a
          >
        </li>
      </ul>
    </div>
  </transition>
</template>

<style scoped>
  /* POPOVER STLYE */
  .popover-customer {
    position: absolute;
    background-color: #333;
    background-color: var(--bg-dark);
    width: 90%;
    top: 50px;
    margin-left: -22%;
  }
  .popover:before {
    position: absolute;
    z-index: 1;
    top: -20px;
    left: 70%;
    content: '';
    border-style: solid;
    border-width: 10px;
    border-color: transparent transparent #222 transparent;
  }
  .popover:after {
    position: absolute;
    z-index: 1;
    top: -20px;
    left: 70%;
    content: '';
    border-style: solid;
    border-width: 10px;
    border-color: transparent transparent var(--bg-dark) transparent;
  }
  .popover > .arrow {
    text-transform: uppercase;
  }
  .fade-enter-active {
    transition: all 0.2s ease-in;
  }
  .fade-leave-active {
    transition: all 0.1s ease-out;
  }
  .fade-enter,
  .fade-leave-to {
    transform: translateY(5px);
  }
</style>
