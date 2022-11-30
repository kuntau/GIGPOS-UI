import { defineStore, acceptHMRUpdate } from 'pinia';
import type {
  BorderOptions,
  ChartArea,
  ChartData,
  ChartOptions,
  DatasetChartOptions,
  PointElement,
  ScriptableContext,
  ScriptableChartContext
} from 'chart.js';

const monthLabel = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const dayLabel = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const dailyData = {
  labels: dayLabel,
  datasets: [
    {
      label: 'Data Daily',
      backgroundColor: '#f87979',
      data: [5, 20, 12, 39]
    }
  ]
}

const weeklyData = {
  labels: monthLabel,
  datasets: [
    {
      label: 'Data Weekly',
      /* backgroundColor: '#f87979', */
      data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11],
      backgroundColor: function (context: ScriptableChartContext) {
        const chart = context.chart
        const { ctx, chartArea } = chart

        if (!chartArea) return

        return getGradient(ctx, chartArea)
      }
    }
  ]
}

const lineData = {
  labels: monthLabel,
  datasets: [
    {
      label: 'Quaterly Data',
      /* backgroundColor: '#f87979', */
      data: [40, 39, 0, 40, 39, 80, 40, 55, 34, 75, 21, 15],
      fill: true,
      tension: 0.3,
      borderWidth: 3,
      pointStyle: 'star',
      borderColor: function (context: ScriptableChartContext) {
        const chart = context.chart
        const { ctx, chartArea } = chart

        if (!chartArea) return

        return getGradient(ctx, chartArea)
      }
    }
  ]
}

const getGradient = (ctx: CanvasRenderingContext2D, chartArea: ChartArea) => { 
  let width, height, gradient
  const chartWidth = chartArea.right - chartArea.left;
  const chartHeight = chartArea.bottom - chartArea.top;
  if (!gradient || width !== chartWidth || height !== chartHeight) {
    // Create the gradient because this is either the first render
    // or the size of the chart has changed
    width = chartWidth;
    height = chartHeight;
    gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
    gradient.addColorStop(0, 'rgba(238, 130, 238, 1)');
    gradient.addColorStop(0.5, 'rgba(0, 0, 255, 1)');
    gradient.addColorStop(1, 'rgba(0, 157, 255, 1)');
    /* gradient.addColorStop(0, Utils.CHART_COLORS.blue); */
    /* gradient.addColorStop(0.5, Utils.CHART_COLORS.yellow); */
    /* gradient.addColorStop(1, Utils.CHART_COLORS.red); */
  }

  return gradient;
}

const useReports = defineStore('reports', {
  state: () => ({
    dailyData,
    weeklyData,
    lineData
  })
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useReports, import.meta.hot))
}

export { useReports }
export default useReports
