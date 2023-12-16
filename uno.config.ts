import { defineConfig, presetUno, presetIcons, transformerDirectives } from 'unocss'
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
   theme:{
    colors:{
      'tema':{

      'tx':'var(--text-color)', 
      'bg':'var(--background-color', 
      'gray':'var(--brand-gray)', 
      'light':'var(--brand-light)', 
      'dark':'var(--brand-negro)' 

    }
  }},
  shortcuts:{
    "container":"mx-auto w-90% xl:w-1194px ",
    "seccion-base":"py-12 md:py-16 lg:py-28",
    "ic": "items-center",
    "icc":"items-center justify-center",
    "icb":"items-center justify-between",
  },
 
  transformers: [
    transformerDirectives(),
  ],
})

