import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  server: {
    allowedHosts: [
      'shortly-pacific-told-admissions.trycloudflare.com',
    ]
  }
});
