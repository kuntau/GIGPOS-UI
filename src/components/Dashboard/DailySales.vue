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

const sampleDataY = {
  labels: [ 'January', 'February', 'March', 'April', 'Mei' ],
  dataset: [
    {
      data: [ 41, 20, 12, 35, 22 ]
    }
  ]
}

const chartOptions = {
  responsive: false,
  maintainAspectRatio: false
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
    :chart-options="props.chartOptions"
    :chart-data="chartDataX"
    :chart-id="props.chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
  />
  <!-- <BarChart :chart-data="chartData" :chart-options="chartOptions" /> -->
  <LineChart :chart-data="chartDataX" :chart-options="chartOptions" />
</template>

