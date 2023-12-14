console.log('hola');
// import checkScreen from './js/mediamatch'

( (d,w,c)=>{

   
// NAVBAR FIXED
const navBar = document.querySelector("#navbar")
window.addEventListener("scroll",  ()=> {
    let posScroll = window.scrollY 
    navBar.classList.toggle("sticky", posScroll > 0)
})
// NAVBAR FIXED

// MENU MOBILE
const btnOpen = document.querySelector("#button-open") 
const navMobile = document.querySelector("#nav-mobile") 

function openMenuMob () { navMobile.classList.toggle("visible");}
function closeMenuMob () { navMobile.classList.remove("visible");}
btnOpen.addEventListener("click", openMenuMob);
navMobile.addEventListener("click", ()=>{ closeMenuMob() });
// MENU MOBILE

// BUTTON GO TOP
const btnTop = document.querySelector("#button-go-top")
window.addEventListener("scroll",  ()=> {
btnTop.classList.toggle("visible", (window.scrollY > 400 ) )
    })
// BUTTON GO TOP    
	
// AL REDIMENSIONAR VENTANA
const onWindowSize = ()=> {
//console.log( "W:", window.innerWidth, "H",  window.innerHeight);
applyMatch(mql)
}
w.onresize = onWindowSize;
// AL REDIMENSIONAR VENTANA
// MEDIA MACTCH 

const mql = window.matchMedia('(max-width:900px)');
const applyMatch = (mql ) => {
 
mql.matches ? console.log('mobile') : closeMenuMob();

};
applyMatch(mql)
// MEDIA MACTCH 

// SCROLL NAVIGATION
function scrollTo() {
    const links = document.querySelectorAll(".scroll");
    links.forEach((each) => (each.onclick = scrollAnchors));
  }
  
  function scrollAnchors(e, respond = null) {
    const distanceToTop = (el) => Math.floor(el.getBoundingClientRect().top);
    e.preventDefault();
    var targetID = respond
      ? respond.getAttribute("href")
      : this.getAttribute("href");
    const targetAnchor = document.querySelector(targetID);
    if (!targetAnchor) return;
    const originalTop = distanceToTop(targetAnchor);
    window.scrollBy({ top: originalTop, left: 0, behavior: "smooth" });
    const checkIfDone = setInterval(function () {
      const atBottom =
        window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
      if (distanceToTop(targetAnchor) === 0 || atBottom) {
        targetAnchor.tabIndex = "-1";
        targetAnchor.focus();
        window.history.pushState("", "", targetID);
        clearInterval(checkIfDone);
      }
    }, 100);
  }
  scrollTo();
// SCROLL NAVIGATION

      let videoStand = document.querySelectorAll("video.fslightbox-source");
      

			fsLightboxInstances["videostand"].props.onOpen = function () {
				//window.scrollTo(0, 500);
        console.log(videoStand);
        async function playVideo() {
          try {
            await videoStand.play();
            playButton.className = "playing";
          } catch (err) {
            playButton.className = "";
          }
        }
			}
		
			fsLightboxInstances["videostand"].props.onClose = function () {
				//console.log("Se cerro");
       
        location.href = "#footer";
        
			}



} )(document, window, console)


