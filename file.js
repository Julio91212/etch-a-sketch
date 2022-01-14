const container= document.querySelector('#container');
//create divs
function grid() {
    const grid = document.createElement("div");
    grid.classList.add("grid");
    container.appendChild(grid);}
for (let i=0; i<256; i++) {
grid()
}
//create divs
function grid() {
    const grid = document.createElement("div");
    grid.classList.add("grid");
    container.appendChild(grid);}
for (let i=0; i<256; i++) {
grid()
}
//turn blue when mouseover
function color() {
    const divs = document.querySelectorAll("div.grid");
    divs.forEach((div) => {
    div.addEventListener("mouseover", () => { 
    div.setAttribute("style", "background-color:blue;");
    });
    });}
    color()