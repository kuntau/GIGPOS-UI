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
      data: [5, 20, 12, 39]
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

const lineData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Data One',
      backgroundColor: '#f87979',
      data: [40, 39, 10, 40, 39, 80, 40]
    }
  ]
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
