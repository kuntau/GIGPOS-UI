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
  borderColor: '#234',
  interaction: {
    mode: 'index',
    intersect: false
  },
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
      display: true,
      grid: {
        display: true
      },
      ticks: {
        display: true
      }
    }
  },
  plugins: {
    legend: {
      display: true
    },
    title: {
      display: false,
      position: 'top',
      font: {
        size: 20,
        weight: 'bold',
      },
      text: 'What bro?'
    },
    subtitle: {
      display: false,
      text: 'Im subtitle!'
    },
    filler: {
      propagate: true
    }
  }
}

const barChartOptions: ChartOptions<'bar'> = {
  ...chartOptions
}

const lineChartOptions: ChartOptions<'line'> = {
  ...chartOptions,
  plugins: {
    ...chartOptions.plugins,
    legend:{ display: true },
    subtitle: {
      display: false,
      text: 'Im line yo!'
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
const chartHeight = 200
</script>

<template>
  <div id="3charts" class="md:flex gap-1">
    <BarChart 
      class="p-2 bg-white min-w-0 md:flex-1"
      :height="chartHeight"
      :chart-data="chartDataX" 
      :chart-options="barChartOptions" 
    />
    <LineChart 
      class="p-2 bg-white min-w-0 md:flex-1"
      :height="chartHeight"
      :chart-data="lineDataX" 
      :chart-options="lineChartOptions" 
    />
    <BarChart 
      class="p-2 bg-white min-w-0 md:flex-1"
      :height="chartHeight"
      :chart-data="chartDataX" 
      :chart-options="barChartOptions" 
    />
  </div>
  <div class="mt-4">
    <button @click="loadWeekly" class="px-2 py-1 bg-cyan-600 text-white rounded">Weekly</button>
    <button @click="loadDaily" class="ml-2 px-2 py-1 bg-cyan-600 text-white rounded">Daily</button>
  </div>
</template>

