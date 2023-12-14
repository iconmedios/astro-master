import { defineConfig, presetUno,   presetIcons, transformerDirectives } from 'unocss'
import type { Theme } from 'unocss/preset-uno'

export default defineConfig({

  presets:[
    presetUno(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    
   
  ],
  shortcuts:{
    "container":"mx-auto w-92% xl:1280px ",
    "seccion-base":"py-12 md:py-16 lg:py-28"
  },
 
  transformers: [
    transformerDirectives(),
  ],
})

