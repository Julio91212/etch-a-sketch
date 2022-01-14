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
//create restart button and divs of new grid
const btn= document.querySelector("button");
btn.addEventListener( 'click', () => {
document.querySelectorAll('.grid').forEach(e => e.remove());
let size= prompt("Enter Grid Size");
let sizen = parseInt(size);
sizen = Math.min(100, Math.max(0,sizen));
console.log(sizen)
let gridsize = Math.pow(sizen,2)
for (let i=0; i<gridsize; i++) {
    grid()};
});