import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        // Add more pages as needed
        'example': './src/pages/example.html'
      },
    },
  },
});