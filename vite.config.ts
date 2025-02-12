import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'vue': 'vue/dist/vue.esm-bundler.js'
    }
  },
  server: {
    host: true,
    port: 3000,
    strictPort: true,
    open: false,
    watch: {
      ignored: [
        '**/public/fonts/**'
      ]
    }
  },
  plugins: [
    vue(),
    WindiCSS()
  ]
})
