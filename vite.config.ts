import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath } from 'url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        appExampleActivity1: fileURLToPath(
          new URL('./src/app-example/activity1/index.html', import.meta.url)
        ),
        appExampleActivity2: fileURLToPath(
          new URL('./src/app-example/activity2/index.html', import.meta.url)
        ),
        appChangbaActivity1: fileURLToPath(
          new URL('./src/app-changba/activity1/index.html', import.meta.url)
        ),
        appChangbaActivity2: fileURLToPath(
          new URL('./src/app-changba/activity2/index.html', import.meta.url)
        ),
      },
      output: {
        entryFileNames: 'entry-[name].js',
      },
    },
  },
});
