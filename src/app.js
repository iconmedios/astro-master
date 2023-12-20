console.log('hola');
// import checkScreen from './js/mediamatch'

((d, w) => {
  selectorThemes();



  // NAVBAR FIXED
  const navBar = d.querySelector("#navbar")
  window.addEventListener("scroll", () => {
    let posScroll = w.scrollY
    navBar.classList.toggle("sticky", posScroll > 0)
  })
  // NAVBAR FIXED

  // MENU MOBILE
  // const btnOpen = d.querySelector("#button-open") 
  // const navMobile = d.querySelector("#nav-mobile") 

  // function openMenuMob () { navMobile.classList.toggle("visible");}
  // function closeMenuMob () { navMobile.classList.remove("visible");}
  // btnOpen.addEventListener("click", openMenuMob);
  // navMobile.addEventListener("click", ()=>{ closeMenuMob() });
  // MENU MOBILE

  // BUTTON GO TOP

  // const btnTop = d.querySelector("#button-go-top")
  // w.addEventListener("scroll", () => {
  //   btnTop.classList.toggle("visible", (w.scrollY > 400))

  // })

 // MENU MOBILE
    const btnOpen = document.querySelector("#button-open") 
    const navMobile = document.querySelector("#nav-mobile") 
    
    function openMenuMob () { navMobile.classList.toggle("visible");}
    function closeMenuMob () { navMobile.classList.remove("visible");}
    btnOpen.addEventListener("click", openMenuMob);
    navMobile.addEventListener("click", ()=>{ closeMenuMob() });
// MENU MOBILE

  // MEDIA MACTCH  ///////////////////

  // FIN MEDIA MACTCH  ///////////////

  // SCROLL NAVIGATION ///////////////////////////////////
  d.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetElement = document.querySelector(this.getAttribute('href'));

      // Ajusta estos valores según tus preferencias
      const scrollOptions = {
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
        speed: 500, // milisegundos
        easing: 'easeOutElastic'
      };

      targetElement.scrollIntoView(scrollOptions);
    });
  })
  // CON GSAP >>>>>>><



  // SCROLL NAVIGATION ///////////////////////////////////

  // AL CERRAR VENTANA POPUP EJECUTAR ACCION  ///////////////////////////

  // let videoStand = document.querySelectorAll("video.fslightbox-source");


  // fsLightboxInstances["videostand"].props.onOpen = function () {
  // 	//window.scrollTo(0, 500);
  //   console.log(videoStand);
  //   async function playVideo() {
  //     try {
  //       await videoStand.play();
  //       playButton.className = "playing";
  //     } catch (err) {
  //       playButton.className = "";
  //     }
  //   }
  // }

  // fsLightboxInstances["videostand"].props.onClose = function () {
  // 	//console.log("Se cerro");

  //   location.href = "#footer";

  // }
  // FIN AL CERRAR VENTANA POPUP EJECUTAR ACCION ///////////////////////////    

  // SELECTOR DE TEMAS /////////////////////////////////////////

  function selectorThemes() {
    const mainTheme = document.querySelector('[data-theme]')
    const themeBtns = document.querySelectorAll('.theme-btn');

    // Obtener el tema almacenado en localStorage al cargar la página
    const storedTheme = localStorage.getItem('selectedTheme');
    if (storedTheme) {
      mainTheme.setAttribute('data-theme', storedTheme);
    }

    themeBtns.forEach((themeBtn) => {
      themeBtn.addEventListener('click', () => {
        const nameTheme = themeBtn.getAttribute('name-theme');
        if (nameTheme) {
          // Establecer el tema en el atributo 'data-theme'
          mainTheme.setAttribute('data-theme', nameTheme);

          // Almacenar el tema seleccionado en localStorage
          localStorage.setItem('selectedTheme', nameTheme);
        }
      });
    });

  }

  // FIN SELECTOR DE TEMAS /////////////////////////////////////////

// Get all sections that have an ID defined

})(document, window)


