import react from '@vitejs/plugin-react-swc'
import autoprefixer from 'autoprefixer'
import path from 'path'
import postcssPresetEnv from 'postcss-preset-env'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
import webfontDownload from 'vite-plugin-webfont-dl'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  preview: {
    port: 8000,
    strictPort: true,
  },
  server: {
    port: 8000,
    strictPort: true,
    host: true,
  },
  plugins: [
    react(),
    tsconfigPaths(),
    svgr(),
    webfontDownload(
      [
        'https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap',
      ],
      {
        async: true,
        cache: true,
      }
    ),
  ],
  css: {
    postcss: {
      plugins: [autoprefixer(), postcssPresetEnv()],
    },
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },

  resolve: {
    alias: {
      '@mixin': path.resolve(__dirname, './src/styles/mixins/mixin.scss'),
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    chunkSizeWarningLimit: 2000,
    terserOptions: {
      compress: {
        drop_console: true,
        dead_code: true,
        unused: true,
        join_vars: true,
      },
      safari10: true,
    },
  },
})
