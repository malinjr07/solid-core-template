import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import devtools from 'solid-devtools/vite';
import path from 'path';
import { tanstackRouter } from '@tanstack/router-plugin/vite';

export default defineConfig({
  plugins: [
    tanstackRouter({
      target: 'solid',
      autoCodeSplitting: true,
    }),
    devtools(),
    solidPlugin(),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
  resolve: {
    alias: {
      '@/common': path.resolve(__dirname, './src/components/common'),
      '@/core': path.resolve(__dirname, './src/components/core'),
      '@/layouts': path.resolve(__dirname, './src/components/layouts'),
      '@/shadCn': path.resolve(__dirname, './src/components/shadCn'),
      '@/hooks': path.resolve(__dirname, './src/utils/hooks'),
      '@/libs': path.resolve(__dirname, './src/utils/libs'),
      '@/query': path.resolve(__dirname, './src/utils/query'),
      '@/services': path.resolve(__dirname, './src/utils/services'),
      '@/stores': path.resolve(__dirname, './src/utils/stores'),
      '@/types': path.resolve(__dirname, './src/utils/types'),
      '@/utils': path.resolve(__dirname, './src/utils'),
      '@/components': path.resolve(__dirname, './src/components'),
    },
  },
});
