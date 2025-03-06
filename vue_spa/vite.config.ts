import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(() => {
  return {
    plugins: [
      vue(),
      tsconfigPaths({
        projects: ['./tsconfig.app.json'],
      }),
    ], 
    define: {
      "process.env.NODE_ENV": '"production"',
    },
    build: {
      lib: {
        entry: [
          './src/main.ts',
        ],
        formats: ['es'],
        fileName: '[name]',
      },
      rollupOptions: {
        output: {
          dir: './public/static'
        }
      },
      emptyOutDir: false,
      copyPublicDir: false
    }
  }

})
/*
*/