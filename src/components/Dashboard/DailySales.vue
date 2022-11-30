<script setup lang="ts">
import { PropType, ref, computed, onMounted, onBeforeMount } from 'vue'
import { useReports } from '../../stores/reports'
import BarChart from './BarChart'
import LineChart from './LineChart'
import {
  Chart as ChartJS,
  Title,
  SubTitle,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  Plugin,
  DefaultDataPoint,
  ChartData,
  ChartOptions,
  Filler
} from 'chart.js'

ChartJS.register(Title, SubTitle, Tooltip, Legend, BarElement, CategoryScale, LinearScale, Filler)

const reportStore = useReports()

function fillData() {
  const newData = {
    labels: [ 'January', 'February', 'March', 'April', 'Mei' ],
    datasets: [
      {      
        label: 'Data One',
        backgroundColor: '#f87979',
        data: [ 41, 20, 12, 35, 22 ]
      }
    ]
  }

  chartDataX.value = { ...newData }
  console.log("EndValue ", chartDataX.value)
}

const chartOptions: ChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  backgroundColor: '#666',
  borderColor: '#fff',
  interaction: {
    mode: 'index',
    intersect: false
  },
  /* legend: { display: false }, */
  scales: {
    x: {
      display: false,
      grid: {
        display: false
      },
      ticks: {
        display: false
      },
      title: {
        display: true,
        text: 'Value'
      }
    },
    y: {
      display: false,
      grid: {
        display: false
      },
      ticks: {
        display: false
      }
    }
  },
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: true,
      position: 'top',
      font: {
        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        size: 24,
        weight: 'bold',
        lineHeight: 1.5
      },
      text: 'What bro?'
    },
    subtitle: {
      display: true,
      text: 'Im subtitle!'
    },
    filler: {
      propagate: true
    }
  }
}

/* const webData = computed(() => reportStore.dailyData) */
const dailyData = reportStore.dailyData
const weeklyData = reportStore.weeklyData
const lineData = reportStore.lineData

const chartDataX = ref<ChartData<'bar'>>(weeklyData)
const lineDataX = ref<ChartData<'line'>>(lineData)

/* const chartData = ref<ChartData<'bar'>>({ */
/*   datasets: [] */
/* }) */

onBeforeMount(() => {
  /* setInterval(() => { */
    /* fillData() */
  /* }, 5000); */
})

onMounted(() => {
})

const loadDaily = () => {
  chartDataX.value = { ...dailyData }
}

const loadWeekly = () => {
  chartDataX.value = { ...weeklyData }
}

const chartWidth = 200
</script>

<template>
  <div id="3charts" class="flex justify-center bg-red-200 gap-1">
    <BarChart 
      class="bg-white relative grow"
      :height="200"
      :chart-data="chartDataX" 
      :chart-options="chartOptions" 
    />
    <LineChart 
      class="bg-white relative grow"
      :height="200"
      :chart-data="lineData" 
      :chart-options="chartOptions" 
    />
    <BarChart 
      class="bg-white relative grow"
      :height="200"
      :chart-data="chartDataX" 
      :chart-options="chartOptions" 
    />
  </div>
  <div class="mt-4">
    <button @click="loadWeekly" class="px-2 py-1 bg-cyan-600 text-white rounded">Weekly</button>
    <button @click="loadDaily" class="ml-2 px-2 py-1 bg-cyan-600 text-white rounded">Daily</button>
  </div>
</template>

