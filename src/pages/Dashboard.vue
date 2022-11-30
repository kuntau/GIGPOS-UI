<script setup lang='ts'>
import DailySales from '../components/Dashboard/DailySales.vue'
import WeeklySales from '../components/Dashboard/WeeklySales.vue'

defineProps<{
  page: string,
}>()
</script>

<template>
  <div class="dashboard">
    <h1>This is dashboard</h1>
    <div class="mt-5">
      <DailySales />
    </div>
    <!-- <WeeklySales :chart-data="chartData" /> -->
  </div>
</template>
