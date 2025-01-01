var page = document.querySelector("#page");
var cursor = document.querySelector("#cursor");

page.addEventListener("mousemove", function(dets) {
    gsap.to(cursor, {
        x: dets.x - cursor.offsetWidth / 0.39,
        y: dets.y - cursor.offsetWidth / 0.35,
        duration: 0.2,
    });
});

const notescontainer = document.querySelector(".container");
const createbtn = document.querySelector(".btn");

createbtn.addEventListener("click", () => {
    // Create a new input box with delete button
    let inputbox = document.createElement("p");
    let img = document.createElement("img");

    inputbox.className = "inputbox";
    inputbox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    img.className = "delete-icon"; // Added class for styling the delete icon
    
    // Append img to the inputbox, then append the inputbox to the container
    inputbox.appendChild(img);
    notescontainer.appendChild(inputbox);
});

notescontainer.addEventListener("click", function(dets) {
    if (dets.target.tagName === "IMG") {
        // When clicking the delete image, remove the parent input box
        dets.target.parentElement.remove();
    }
});

    
    

