import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(() => {
  return {
    plugins: [
      svelte(),
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
          './src/client.ts',
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