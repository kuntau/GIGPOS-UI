import { defineComponent, h, PropType } from 'vue'

import { Line } from 'vue-chartjs'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Plugin,
  DefaultDataPoint,
  ChartData,
  ChartOptions
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, LineElement,PointElement, CategoryScale, LinearScale)

export default defineComponent({
  name: 'LineChart',
  components: {
    Line
  },
  props: {
    chartId: {
      type: String,
      default: 'line-chart'
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
      type: Array as PropType<Plugin<'line'>[]>,
      default: () => []
    },
    chartData: {
      type: Object as PropType<ChartData<'line', DefaultDataPoint<'line'>, unknown>>,
      required: true
    },
    chartOptions: {
      type: Object as PropType<ChartOptions<'line'>>,
      default: () => ({ 
        responsive: true,
        maintainAspectRatio: false
      })
    } 
  },
  setup(props) {
    const chartOptions = {
      responsive: false,
      maintainAspectRatio: false
    }

    return () =>
      h(Line, {
        chartData: props.chartData,
        chartOptions,
        chartId: props.chartId,
        width: props.width,
        height: props.height,
        cssClasses: props.cssClasses,
        styles: props.styles,
        plugins: props.plugins
      })
  }
})
