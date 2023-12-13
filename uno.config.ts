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
  shortcuts: [],
 
  transformers: [
    transformerDirectives(),
  ],
})

