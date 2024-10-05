let menuBars = document.querySelector(".menu-bar");
let bars = document.querySelector(".bars");
menuBars.addEventListener("click", () => {
    bars.style.top = "1.5%";
    bars.style.display = "block"; 
})

const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

function navLogo(){
    gsap.from(".logo h1",{
        y: -100, 
        opacity: 0,
        delay: 0.5,
        duration: 2,
        // repeat: -1,
        // yoyo:1,
       
    })
    
}
navLogo();
function navSections(){
    gsap.from(".nav-sections a",{
        x: -100,
        opacity: 0,
        delay: 0.1,
        duration: 0.2, 
        stagger: 0.2,
      
    })
    
}
navSections();

function heartHeading() {
    gsap.from(".page1 h2",{
        scale:1, 
        opacity: 0,
        delay: 1.8,
        duration: 1.8,
        repeat: -1,
        yoyo:1,

    })
}
heartHeading();
const heroHeading = () =>{
    gsap.from(".page1 h1",{
        y: -100,
        opacity: 100,
        delay: 1.5,
        duration: 1.5,
        stagger: 0.3,
    })
}
heroHeading();
