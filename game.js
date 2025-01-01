
const bg=document.querySelector("#bgame");
const cup=document.querySelector(".empty");
const locs=document.querySelectorAll(".loc");

cup.addEventListener("drag",dragging)
cup.addEventListener("dragstart",dragStart)


let beingDragged
locs.forEach(loc =>{
    loc.addEventListener("dragover",dragover);
    loc.addEventListener("dragenter", dragEnter);
    loc.addEventListener("dragleave",dragLeave);
    loc.addEventListener("drop",dragDrop);
    loc.addEventListener("dragend",dragEnd);
})


function dragging(e){
    console.log(e)

}
function dragStart(e){
    beingDragged=e.target
    console.log(e)
    e.dataTransfer.setData("text", e.target.id)

}

function dragover(e){
    e.preventDefault();
    console.log("dragged over "+e.target.classList);

}
function dragEnter(e){
    console.log("entering  "+e.target.classList)
    

}
function dragLeave(e){
    console.log("it left  "+e.target.classList)

}
function dragDrop(e) {
    
    console.log("dropped on " + e.target.classList);

    
       
        e.target.append(beingDragged);

        
        bg.innerHTML = '<img src="images/filling.png" >';

       
        setTimeout(function () {
            console.log("bg back to normal");
            bg.innerHTML='<img src="images/game.png" >';
        }, 5000); 

        cup.innerHTML='<img src="images/filledcup.png" >'
    
}
function dragEnd(e){
    console.log("you finished dragging "+e.target.classList)

}