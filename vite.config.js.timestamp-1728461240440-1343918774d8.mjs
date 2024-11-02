// vite.config.js
import react from "file:///home/max/Documents/avada_media/react_elon_mars/node_modules/@vitejs/plugin-react-swc/index.mjs";
import autoprefixer from "file:///home/max/Documents/avada_media/react_elon_mars/node_modules/autoprefixer/lib/autoprefixer.js";
import fs from "fs";
import path from "path";
import postcssPresetEnv from "file:///home/max/Documents/avada_media/react_elon_mars/node_modules/postcss-preset-env/dist/index.mjs";
import { defineConfig } from "file:///home/max/Documents/avada_media/react_elon_mars/node_modules/vite/dist/node/index.js";
import svgr from "file:///home/max/Documents/avada_media/react_elon_mars/node_modules/vite-plugin-svgr/dist/index.js";
import webfontDownload from "file:///home/max/Documents/avada_media/react_elon_mars/node_modules/vite-plugin-webfont-dl/dist/index.mjs";
import tsconfigPaths from "file:///home/max/Documents/avada_media/react_elon_mars/node_modules/vite-tsconfig-paths/dist/index.mjs";
var __vite_injected_original_dirname = "/home/max/Documents/avada_media/react_elon_mars";
var vite_config_default = defineConfig({
  base: "./",
  preview: {
    port: 8e3,
    strictPort: true
  },
  server: {
    port: 8e3,
    strictPort: true,
    host: true,
    https: {
      key: fs.readFileSync(path.resolve(__vite_injected_original_dirname, "localhost-key.pem")),
      // путь к ключу
      cert: fs.readFileSync(path.resolve(__vite_injected_original_dirname, "localhost.pem"))
      // путь к сертификату
    }
  },
  plugins: [
    react(),
    tsconfigPaths(),
    svgr(),
    webfontDownload(["https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100..900&display=swap"], {
      async: true,
      cache: true
    })
  ],
  css: {
    postcss: {
      plugins: [autoprefixer(), postcssPresetEnv()]
    },
    preprocessorOptions: {
      scss: {
        api: "modern-compiler"
      }
    }
  },
  resolve: {
    alias: {
      "@mixin": path.resolve(__vite_injected_original_dirname, "./src/styles/mixins/mixin.scss"),
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  },
  build: {
    chunkSizeWarningLimit: 2e3,
    terserOptions: {
      compress: {
        drop_console: true,
        dead_code: true,
        unused: true,
        join_vars: true
      },
      safari10: true
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9tYXgvRG9jdW1lbnRzL2F2YWRhX21lZGlhL3JlYWN0X2Vsb25fbWFyc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvbWF4L0RvY3VtZW50cy9hdmFkYV9tZWRpYS9yZWFjdF9lbG9uX21hcnMvdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvbWF4L0RvY3VtZW50cy9hdmFkYV9tZWRpYS9yZWFjdF9lbG9uX21hcnMvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djJ1xuaW1wb3J0IGF1dG9wcmVmaXhlciBmcm9tICdhdXRvcHJlZml4ZXInXG5pbXBvcnQgZnMgZnJvbSAnZnMnXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IHBvc3Rjc3NQcmVzZXRFbnYgZnJvbSAncG9zdGNzcy1wcmVzZXQtZW52J1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCBzdmdyIGZyb20gJ3ZpdGUtcGx1Z2luLXN2Z3InXG5pbXBvcnQgd2ViZm9udERvd25sb2FkIGZyb20gJ3ZpdGUtcGx1Z2luLXdlYmZvbnQtZGwnXG5pbXBvcnQgdHNjb25maWdQYXRocyBmcm9tICd2aXRlLXRzY29uZmlnLXBhdGhzJ1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgYmFzZTogJy4vJyxcbiAgcHJldmlldzoge1xuICAgIHBvcnQ6IDgwMDAsXG4gICAgc3RyaWN0UG9ydDogdHJ1ZSxcbiAgfSxcbiAgc2VydmVyOiB7XG4gICAgcG9ydDogODAwMCxcbiAgICBzdHJpY3RQb3J0OiB0cnVlLFxuICAgIGhvc3Q6IHRydWUsXG4gICAgaHR0cHM6IHtcbiAgICAgIGtleTogZnMucmVhZEZpbGVTeW5jKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdsb2NhbGhvc3Qta2V5LnBlbScpKSwgLy8gXHUwNDNGXHUwNDQzXHUwNDQyXHUwNDRDIFx1MDQzQSBcdTA0M0FcdTA0M0JcdTA0NEVcdTA0NDdcdTA0NDNcbiAgICAgIGNlcnQ6IGZzLnJlYWRGaWxlU3luYyhwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnbG9jYWxob3N0LnBlbScpKSwgLy8gXHUwNDNGXHUwNDQzXHUwNDQyXHUwNDRDIFx1MDQzQSBcdTA0NDFcdTA0MzVcdTA0NDBcdTA0NDJcdTA0MzhcdTA0NDRcdTA0MzhcdTA0M0FcdTA0MzBcdTA0NDJcdTA0NDNcbiAgICB9LFxuICB9LFxuICBwbHVnaW5zOiBbXG4gICAgcmVhY3QoKSxcbiAgICB0c2NvbmZpZ1BhdGhzKCksXG4gICAgc3ZncigpLFxuICAgIHdlYmZvbnREb3dubG9hZChbJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvK1NsYWI6d2dodEAxMDAuLjkwMCZkaXNwbGF5PXN3YXAnXSwge1xuICAgICAgYXN5bmM6IHRydWUsXG4gICAgICBjYWNoZTogdHJ1ZSxcbiAgICB9KSxcbiAgXSxcbiAgY3NzOiB7XG4gICAgcG9zdGNzczoge1xuICAgICAgcGx1Z2luczogW2F1dG9wcmVmaXhlcigpLCBwb3N0Y3NzUHJlc2V0RW52KCldLFxuICAgIH0sXG4gICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xuICAgICAgc2Nzczoge1xuICAgICAgICBhcGk6ICdtb2Rlcm4tY29tcGlsZXInLCBcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcblxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAbWl4aW4nOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvc3R5bGVzL21peGlucy9taXhpbi5zY3NzJyksXG4gICAgICAnQCc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYycpLFxuICAgIH0sXG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgY2h1bmtTaXplV2FybmluZ0xpbWl0OiAyMDAwLFxuICAgIHRlcnNlck9wdGlvbnM6IHtcbiAgICAgIGNvbXByZXNzOiB7XG4gICAgICAgIGRyb3BfY29uc29sZTogdHJ1ZSxcbiAgICAgICAgZGVhZF9jb2RlOiB0cnVlLFxuICAgICAgICB1bnVzZWQ6IHRydWUsXG4gICAgICAgIGpvaW5fdmFyczogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBzYWZhcmkxMDogdHJ1ZSxcbiAgICB9LFxuICB9LFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBK1QsT0FBTyxXQUFXO0FBQ2pWLE9BQU8sa0JBQWtCO0FBQ3pCLE9BQU8sUUFBUTtBQUNmLE9BQU8sVUFBVTtBQUNqQixPQUFPLHNCQUFzQjtBQUM3QixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFVBQVU7QUFDakIsT0FBTyxxQkFBcUI7QUFDNUIsT0FBTyxtQkFBbUI7QUFSMUIsSUFBTSxtQ0FBbUM7QUFXekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sWUFBWTtBQUFBLEVBQ2Q7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFlBQVk7QUFBQSxJQUNaLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxNQUNMLEtBQUssR0FBRyxhQUFhLEtBQUssUUFBUSxrQ0FBVyxtQkFBbUIsQ0FBQztBQUFBO0FBQUEsTUFDakUsTUFBTSxHQUFHLGFBQWEsS0FBSyxRQUFRLGtDQUFXLGVBQWUsQ0FBQztBQUFBO0FBQUEsSUFDaEU7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixjQUFjO0FBQUEsSUFDZCxLQUFLO0FBQUEsSUFDTCxnQkFBZ0IsQ0FBQyxpRkFBaUYsR0FBRztBQUFBLE1BQ25HLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxJQUNULENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSCxTQUFTO0FBQUEsTUFDUCxTQUFTLENBQUMsYUFBYSxHQUFHLGlCQUFpQixDQUFDO0FBQUEsSUFDOUM7QUFBQSxJQUNBLHFCQUFxQjtBQUFBLE1BQ25CLE1BQU07QUFBQSxRQUNKLEtBQUs7QUFBQSxNQUNQO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUVBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLFVBQVUsS0FBSyxRQUFRLGtDQUFXLGdDQUFnQztBQUFBLE1BQ2xFLEtBQUssS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxJQUN0QztBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLHVCQUF1QjtBQUFBLElBQ3ZCLGVBQWU7QUFBQSxNQUNiLFVBQVU7QUFBQSxRQUNSLGNBQWM7QUFBQSxRQUNkLFdBQVc7QUFBQSxRQUNYLFFBQVE7QUFBQSxRQUNSLFdBQVc7QUFBQSxNQUNiO0FBQUEsTUFDQSxVQUFVO0FBQUEsSUFDWjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
