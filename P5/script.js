var menu = document.querySelector("#nav i");
var cross = document.querySelector("#full i");

// var tl = gsap.timeline({paused: true});
var tl = gsap.timeline();

tl.to("#full",{
    right: 0,
    duration: 0.4
})

tl.from("#full h4",{
    x: 150,
    duration: 0.4,
    stagger: 0.3,
    opacity: 0
})

tl.from("#full i",{
    opacity: 0
})

tl.pause();

menu.addEventListener("click", function(e){
    tl.play();
})

cross.addEventListener("click", function(e){
    tl.reverse();
})