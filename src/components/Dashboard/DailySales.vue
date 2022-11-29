<script setup lang="ts">
import { PropType, ref, computed, onMounted } from 'vue'
import { useReports } from '../../stores/reports'
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, Plugin, DefaultDataPoint } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const reportStore = useReports

function fillData() {
  const newData = {
    labels: [ 'January', 'February', 'March', 'April', 'Mei' ],
    dataset: [
      {      
        label: 'Data One',
        backgroundColor: '#f87979',
        data: [ 41, 20, 12, 35, 22 ]
      }
    ]
  }

  console.log("Refreshing ", chartData)
  console.log("Value ", chartData.value)
  /* chartData.value = { ...newData } */
  /* chartData = newData */
  console.log("Refreshing ", chartData)
  console.log("Value ", chartData.value)
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
  responsive: true
}

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

console.log(props.chartData)

const chartDataX = computed(() => {
  return props.chartData
})

const chartDataY = computed(() => {
  return reportStore.dailyData
})

let chartData = ref<ChartData<'bar'>>(props.chartData)

onMounted(() => {
  setInterval(() => {
    fillData()
  }, 5000);
})
</script>

<template>
  <h2>{{ chartData }} + {{ props.chartData }}</h2>
  <Bar
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="props.chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
  />
</template>

