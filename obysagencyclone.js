function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
function cursorMovement() {
   Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23,1,0.320,1)",
    duration: 1,
   })
   Shery.makeMagnet("#navpart2 h4, #box h6, #box h5" , {
});
 const videoContainer = document.querySelector("#video-container");
 const video = document.querySelector("#video-container video");
  videoContainer.addEventListener("mouseenter", function(){
     videoContainer.addEventListener("mousemove", function(details){
        gsap.to(".mousefollower", {
            opacity: 0
        })
           gsap.to("#video-cursor", {
               left: details.x -500,
               top: details.y -360
           })
     })
      })
      videoContainer.addEventListener("mouseleave", function(){
           gsap.to(".mousefollower", {
            opacity: 1
           })
           gsap.to("#video-cursor", {
            top: "-14%",
            left: "70%"
           })
      })
      let flag = 0;
     videoContainer.addEventListener("click", function(){
        if(flag == 0) {
            video.play();
         video.style.opacity = 1;
         document.querySelector("#video-cursor").innerHTML = `<i class="ri-pause-mini-line"></i>`;
         gsap.to("#video-cursor", {
            scale: 0.5
         })
         flag = 1;
        } else {
            video.pause();
         video.style.opacity = 0;
         document.querySelector("#video-cursor").innerHTML = `<i class="ri-play-fill"></i>`;
         gsap.to("#video-cursor", {
            scale: 1
         })
         flag = 0;
        }
       
     })
}
function flagMove(){
    document.addEventListener("mousemove", function(details) {
         gsap.to("#flag", {
            x: details.x -100,
            y: details.y
         })
    })
    document.querySelector("#text3").addEventListener("mouseenter",function(){
         gsap.to("#flag", {
            opacity: 1,

         })
    })
    document.querySelector("#text3").addEventListener("mouseleave",function(){
        gsap.to("#flag", {
           opacity: 0,

        })
   })
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
    tl.from(".centerText h1, #text3 h2", {
        y: 120,
        stagger: .3,
    })
    tl.from(".centerText, #page2", {
       opacity: 0
    }, "-=1.3")
}

function sheryAnimation() {
    Shery.imageEffect(".image-div",{
        style: 5,
        config: {"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":"9996999","range":[-9999999,9999999]},"aspect":{"value":0.8031232571109872},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1.18,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":1.22,"range":[0,10]},"metaball":{"value":0.35,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":17.56,"range":[0,100]}},
        gooey: true
    })
}

locomotiveAnimation();
cursorMovement();
 loaderPage();
 sheryAnimation();
 flagMove();


