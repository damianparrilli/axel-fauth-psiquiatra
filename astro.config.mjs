import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  server: {
    allowedHosts: [
      'hunting-dealtime-insurance-bean.trycloudflare.com',
      // Puedes agregar más hosts aquí si es necesario
    ]
  }
});
