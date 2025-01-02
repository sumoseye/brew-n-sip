var door=document.getElementById("transparent");

door.addEventListener("click",function(){
    window.location.href="game.html"
})

gsap.to("#text",{
    y:-100,
    duration:3,
    delay:1,
    ease: "power2.out",

})
