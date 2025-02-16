import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

export default defineConfig({
  integrations: [
    icon({
      include: {
        simpleIcons: ['frontendmentor'],
        ph: ['file-pdf-thin', 'github-logo-thin', 'linkedin-logo-thin', 'codepen-logo-thin', 'arrow-square-out-thin']
      }
    })
  ]
});
