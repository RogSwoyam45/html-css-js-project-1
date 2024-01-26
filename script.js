const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
})

let timeout;

function firstpage(){
    var tl=gsap.timeline();

    tl.from("#nav", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })

        tl.to(".prodes", {
            y: '-16',
            ease: Expo.easeInOut,
            duration : 3,
            stagger: 0,
            delay:-2
        
    })

        tl.to(".prodes1", {
            y: '-5',
            ease: Expo.easeInOut,
            duration : 3,
            stagger: 0,
            delay:-3
    
    })

        .from("#footer", {
            y: -10,
            opacity: 0,
            duration: 1.5,
            delay: -1.5,
            ease: Expo.easeInOut,
    })
}
function mousefollower(xscale, yscale){
    window.addEventListener("mousemove", function (dets) {
        document.querySelector("#minicircle").style.transform=`translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})` ;
      
    });
}

function circleshape() {
    var xscale=1;
    var yscale=1;
    
    let xprev=0;
    let yprev=0;

    window.addEventListener("mousemove", function(dets){
        clearTimeout(timeout);
        let xdif=dets.clientX-xprev;
        let ydif=dets.clientY-yprev;
        xscale=gsap.utils.clamp(.8, 1.2, xdif);
        yscale=gsap.utils.clamp(.8, 1.2, ydif); 
        
        xprev=dets.clientX;
        yprev=dets.clientY;
        
       
        mousefollower(xscale,yscale); 

        timeout= setTimeout(function () {
            document.querySelector("#minicircle").style.transform=`translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)` ;
        }, 100);
    });
}

document.querySelectorAll(".elem").forEach(function (elem){
    elem.addEventListener("mousemove", function(dets){
        let diff=dets.clientY-elem.getBoundingClientRect().top;
        gsap.to(elem.querySelector("img"), {
            opacity:1,
            ease: Power1,
            top:diff,
            left:dets.clientX,
        });
    });
});


circleshape();
mousefollower(); 
firstpage();