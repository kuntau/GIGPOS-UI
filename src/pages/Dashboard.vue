<script setup lang='ts'>
import DailySales from '../components/Dashboard/DailySales.vue'
import WeeklySales from '../components/Dashboard/WeeklySales.vue'
import BarChart from '../components/Dashboard/BarChart'

const chartData = {
  labels: [ 'January', 'February', 'March', 'AprilX' ],
  dataset: [ { data: [ 40, 20, 12, 35 ] }
  ]
}

const chartOptions = {
  responsive: true
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
    <DailySales chart-id="daily-saless" :chart-data="chartData" />
    <WeeklySales :chart-data="chartData" />
    <BarChart chart-id="daily-chart" :chart-data="chartData" />
  </div>
</template>
