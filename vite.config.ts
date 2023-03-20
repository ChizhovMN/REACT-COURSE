import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  test: {
    globals: true,
    environment: 'happy-dom',
    coverage: {
      all: true,
      src: ['src'],
      provider: 'c8',
      reporter: ['text'],
    },
  },
});
