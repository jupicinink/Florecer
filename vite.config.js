import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  plugins: [
    createHtmlPlugin({
      inject: {
        injectOptions: {
          tags: [
            {
              tag: 'link',
              attrs: {
                rel: 'stylesheet',
                href: '/src/styles/main.css',
              },
            },
            {
              tag: 'script',
              attrs: {
                src: '/src/scripts/main.js',
              },
            },
            {
              tag: 'script',
              attrs: {
                src: '/src/scripts/carousel.js',
              },
            },
          ],
        },
      },
    }),
  ],
  server: {
    open: true,
  },
  build: {
    outDir: 'dist',
  },
});