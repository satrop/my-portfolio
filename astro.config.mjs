import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/my-portfolio/' : '/',
  integrations: [
    icon({
      include: {
        simpleIcons: ['frontendmentor'],
        ph: ['file-pdf-thin', 'github-logo-thin', 'linkedin-logo-thin', 'codepen-logo-thin', 'arrow-square-out-thin']
      }
    })
  ]
});
