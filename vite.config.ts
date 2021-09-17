import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    visualizer({
      filename: 'stats.html',
      template: 'treemap',
      title: 'run-ts stats',
    }),
  ],
  define: {
    'process.env': process.env,
  },
  base: '/run-ts/',
});
