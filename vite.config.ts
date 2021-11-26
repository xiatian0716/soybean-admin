import { defineConfig } from 'vite';
import path from 'path';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { viteEnv, plugins, define } from './build';

export default defineConfig({
  base: viteEnv?.VITE_BASE_URL,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  define,
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "./src/styles/scss/global.scss" as *;`
      }
    }
  },
  plugins: [...plugins],
  server: {
    // VM770:6770 crbug/1173575, non-JS module files deprecated.
    port: 8020,
    host: true,
    proxy: {
      // '代理地址'
      '/api': {
        target: 'http://47.99.115.xx:8018', // 实际请求地址
        changeOrigin: true
      },
      // 'http://47.99.115.xx:8019/certificateMaker'
      '/certificateMaker': {
        target: 'http://47.99.115.xx:8019', // 实际请求地址
        changeOrigin: true
      }
    }
  },
  build: {
    target: 'es2015',
    brotliSize: false,
    chunkSizeWarningLimit: 2000
  }
});
