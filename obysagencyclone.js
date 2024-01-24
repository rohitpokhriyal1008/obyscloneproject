function cursorMovement() {
   
   
   document.addEventListener("mousemove", function(details){
       gsap.to("#cursor", {
            left: details.x,
            top: details.y
        }) 
   })
   Shery.makeMagnet("#navpart2 h4" , {
});
}


function loaderPage() {
    let tl = gsap.timeline();

    tl.from(".line h1", {
        opacity: 0,
        y: 120,
        stagger: 0.25,
        duration: 0.6,
        delay: .1
    })
    
    
    tl.from("#part1", {
        opacity:0,
        onStart: function() {
            const timer = document.querySelector("#part1 h6");
            let count = 0;
          
           let clearval =  setInterval(() => {
                   if(count < 100) {
                      timer.innerHTML = count++;
                   }
                   else {
                      clearInterval(clearval);
                      timer.innerHTML = count;
                   }
            }, 10);
        }
    })
    
    tl.to(".line h2", {
        animationName: "anime",
        opacity: 1
    })
    
    
    tl.to("#loader", {
        opacity:0,
        duration: 0,
        delay: 0
    })
    tl.from("#page1", {
        opacity: 0,
        y: 2000,
        delay: .1,
       
    })
    
    tl.to("#loader", {
        display: "none"
    })
    tl.from("nav", {
        opacity:0
    })
    tl.from(".centerText h1,#text3 h2", {
        y: 120,
        stagger: .3,
    })
}



cursorMovement();
 loaderPage();


