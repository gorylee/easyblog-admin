import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    hmr: true,
    port: 8090,
    // proxy: {
    //   '/api': {
    //     target: "http://localhost:8084/",
    //     secure: false,
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': '/'
    //     }
    //   },
    // }
  },
  resolve: {
    //配置路径别名
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
