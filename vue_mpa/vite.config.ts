import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tsconfigPaths from 'vite-tsconfig-paths';
import buildCommon from './src/lib/buildCommon';
const directoryPath = './src/client';

export default defineConfig(async () => {
  const entryFiles = await buildCommon.getEntryItems(directoryPath);
  //console.log(entryFiles);

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
        entry: entryFiles,
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