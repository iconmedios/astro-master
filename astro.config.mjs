import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro'

// https://astro.build/config
export default defineConfig({
    site: 'https://sitio.com',
    output: 'static',
    integrations: [
        
        UnoCSS({
            injectReset: true
        }),
      ],
    prefetch: {
        defaultStrategy: 'viewport'
    } 
});
