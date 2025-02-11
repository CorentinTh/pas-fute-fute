import { defineConfig } from '@solidjs/start/config';
import UnoCSS from 'unocss/vite';

export default defineConfig({
  vite: {
    plugins: [
      UnoCSS(),
    ],
  },
  server: {
    preset: 'cloudflare-pages',
  },
});
