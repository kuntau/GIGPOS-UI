import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:windi.css'
import router from './router'
import stores from './stores'

createApp(App).use(router).use(stores).mount('#app')
