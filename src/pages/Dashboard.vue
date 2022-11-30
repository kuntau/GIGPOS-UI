<script setup lang='ts'>
import DailySales from '../components/Dashboard/DailySales.vue'
import WeeklySales from '../components/Dashboard/WeeklySales.vue'

const chartData = {
  labels: [ 'January', 'February', 'March', 'AprilX' ],
  datasets: [
    {
      data: [ 40, 20, 12, 35 ],
      borderColor: '#86A2EB',
      /* backgroundColor: '#9BD0F5', */
      backgroundColor: '#669010',
    }
  ]
}

const chartOptions = {
  responsive: false,
  maintainAspectRatio: false
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
    <DailySales chart-id="daily-sales" :chart-data="chartData" :chart-options="chartOptions" />
    <!-- <WeeklySales :chart-data="chartData" /> -->
  </div>
</template>
