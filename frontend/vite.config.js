import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: { input: 'index.html' },
  },
  optimizeDeps: { include: ['react', 'react-dom'] },
});
