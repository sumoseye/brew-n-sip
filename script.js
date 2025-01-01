
let hi=document.getElementById("start");

hi.addEventListener('click',function(e){
    window.location.href="brew.html";
});




let hello=document.getElementById("journal");

hello.addEventListener('click',function(){
    window.location.href="journal.html";
});



const container= document.querySelector(".container");
const btn=document.querySelector(".btn");
let notes= document.querySelectorAll(".inputbox");

btn.addEventListener("click", ()=>{
    let inputbox=document.createElement("p");
    let img= document.createElement("img");
    inputbox.className="box"
    inputbox.setAttribute("contenteditable","true");
    img.src="images\delete.png";
    container.appendChild(inputbox).appendChild(img)
})