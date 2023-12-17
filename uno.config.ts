import { defineConfig, presetUno, presetIcons, transformerDirectives } from 'unocss'

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
      'mi':{
      'tx':'var(--text-color)', 
      'bg':'var(--background-color)', 
      'brand':'var(--brand)', 
      'secondary':'var(--secondary)', 
      'surf':'var(--surface-color)', 
      'pale':'var(--pale-color)', 
      'link':'var(--link-color)' ,
      'lka':'var(--link-active-color)', 

    }
  }},
  shortcuts:{
    "container":"mx-auto w-86% xl:w-1194px ",
    "seccion-base":"py-16 md:py-24 lg:py-36",
    "ic": "items-center",
    "icc":"items-center justify-center",
    "icb":"items-center justify-between",
  },
 
  transformers: [
    transformerDirectives(),
  ],
})

