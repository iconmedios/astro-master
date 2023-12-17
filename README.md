npm create astro@latest

npm install -D unocss 
npm i -D unocss-preset-theme
npm install -D @unocss/transformer-directives


Aliases Options
https://docs.astro.build/en/guides/typescript/



### Comandos
Salto de Linea ALT-Z

### breakpoints UNOCSS

sm	640px
md	768px
lg	1024px
xl	1280px
2xl	1536px

### Imagenes con aspect radio 

Esto cambia cualquier imagen al tamaño de la proporción

object-cover aspect-2/4

### Tamaños Fuente UNOCSS
````
text-xs	    0.75rem (12px)
text-sm	    0.875rem (14px)
text-base	1rem (16px)
text-lg	    1.125rem (18px)
text-xl	    1.25rem (20px)
text-2xl	1.5rem (24px)
text-3xl	1.875rem (30px)
text-4xl	2.25rem (36px)
text-5xl	3rem (48px)
text-6xl	4rem (64px)
'''
````
### Animaciones

animate-fade-in  

### Transitions
ease-out duration-300 

### Imagen de fondo resposiva 

Definir la altura full hace que se adapte perfectamente. tambien se peuden definir otros formatos
```
<picture>
    <source  media="(max-width: 900px)" srcset="/assets/images/imagen-mobil.webp"> 
    <img class="absolute z-0 object-cover h-full" src="/assets/images/imagen-grande.webp" alt="" width="1980" height="1100">
</picture>
```
### Sistema de colores

:root,
[data-theme='light'] 
[data-theme='dark']
[data-theme='custom']

--brand:		        #007DA5 ;
--secondary:	        #E1251B ;
--surface-color:	    #e9e9e9 ;       
--background-color:     #f7f7f7 ;
--text-color:           #454547 ;
--link-color:           #454964 ;
--link-active-color:    #292929 ;
--pale-color:           #b4b4b4 ;


html rem 
body em espacios 
