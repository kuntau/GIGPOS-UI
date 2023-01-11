<script setup lang='ts'>
import { useCounter } from '../stores/gigpos';
const counter = useCounter();

const reset = () => {
  counter.$reset()
}

defineProps<{
  page: string,
}>()
</script>

<template>
  <div class="dashboard">
    <h1>This is dashboard</h1>
    <h2>With props <code>page</code> {{ page }}</h2>
    <br />
    <h3>With counter store <code>{{ counter }}</code> and count <code>{{ counter.count }}</code>. </h3>
    <button class="bg-green-200 px-4 py-1 rounded" @click="counter.increment">+</button>
    <button class="bg-red-200 px-4 py-1 rounded" @click="counter.decrement">-</button>
    <button class="bg-blue-200 px-4 py-1 rounded" @click="counter.fixed">set</button>
    <button class="bg-purple-200 px-4 py-1 rounded" @click="reset">reset</button>
  </div>
</template>
