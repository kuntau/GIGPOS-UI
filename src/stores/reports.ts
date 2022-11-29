import { defineStore, acceptHMRUpdate } from 'pinia';

const dailyData = {
  labels: [
    'January',
    'February',
    'March',
    'April',
  ],
  datasets: [
    {
      label: 'Data Daily',
      backgroundColor: '#f87979',
      data: [40, 20, 12, 39]
    }
  ]
}

const weeklyData = {
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ],
  datasets: [
    {
      label: 'Data Weekly',
      backgroundColor: '#f87979',
      data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
    }
  ]
}

const useReports = defineStore('reports', {
  state: () => ({
    dailyData,
    weeklyData
  })
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useReports, import.meta.hot))
}

export { useReports }
export default useReports
