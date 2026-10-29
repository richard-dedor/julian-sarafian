// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://forcreatorsbycreators.co',
  redirects: {
    // Older posts link to the old /contact page. Remove this once a real
    // contact page exists at src/pages/contact.astro.
    '/contact': '/#contact',
  },
});
