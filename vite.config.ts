import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import { visualizer } from 'rollup-plugin-visualizer';
import importToCDN from 'vite-plugin-cdn-import';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    importToCDN({
      modules: [
        {
          name: '@babel/standalone',
          var: 'Babel',
          path: '/babel.min.js',
        },
      ],
      prodUrl: 'https://unpkg.com/{name}@{version}/{path}',
    }),
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
