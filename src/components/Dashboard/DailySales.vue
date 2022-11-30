<script setup lang="ts">
import { PropType, ref, computed, onMounted, onBeforeMount } from 'vue'
import { useReports } from '../../stores/reports'
import BarChart from './BarChart'
import LineChart from './LineChart'
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, Plugin, DefaultDataPoint, ChartData, ChartOptions } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

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
      position: 'right',
      text: 'Im subtitle!'
    }
  }
}

/* const webData = computed(() => reportStore.dailyData) */
const dailyData = reportStore.dailyData
const weeklyData = reportStore.weeklyData
const lineData = reportStore.lineData

const props = defineProps({
  chartId: {
    type: String,
    default: 'bar-chart'
  },
  datasetIdKey: {
    type: String,
    default: 'label'
  },
  width: {
    type: Number,
    default: 400
  },
  height: {
    type: Number,
    default: 400
  },
  cssClasses: {
    default: '',
    type: String
  },
  styles: {
    type: Object as PropType<Partial<CSSStyleDeclaration>>,
    default: () => {}
  },
  plugins: {
    type: Array as PropType<Plugin<'bar'>[]>,
    default: () => []
  },
  chartData: {
    type: Object as PropType<ChartData<'bar', DefaultDataPoint<'bar'>, unknown>>,
    required: true,
  },
  chartOptions: {
    type: Object as PropType<ChartOptions<'bar'>>,
    default: () => {}
  }
})


const chartDataX = ref<ChartData<'bar'>>(props.chartData)
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
</script>

<template>
  <button @click="loadWeekly" class="px-2 py-1 bg-cyan-600 text-white rounded">Weekly</button>
  <button @click="loadDaily" class="ml-2 px-2 py-1 bg-cyan-600 text-white rounded">Daily</button>
  <Bar
    :chart-options="chartOptions"
    :chart-data="weeklyData"
    :chart-id="props.chartId"
  />
  <!-- <BarChart :chart-data="chartData" :chart-options="chartOptions" /> -->
  <LineChart :chart-data="lineData" :chart-options="chartOptions" />
</template>

