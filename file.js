const container= document.querySelector('#container');
//create divs
function grid() {
    const grid = document.createElement("div");
    grid.classList.add("grid");
    container.appendChild(grid);}
for (let i=0; i<256; i++) {
grid()
}
const divs = document.querySelectorAll("div.grid");
function divwidth() {
const divs = document.querySelectorAll("div.grid");
let number = Math.sqrt(document.getElementsByClassName("grid").length)
let dwidth = ((960-(5*number))/number) + "px"
divs.forEach((div) => { div.style.width = dwidth
});}
divwidth()
//turn blue when mouseover
function color() {
const divs = document.querySelectorAll("div.grid");
divs.forEach((div) => {
div.addEventListener("mouseover", () => { 
div.setAttribute("style", "background-color:blue;");
divwidth()
});
});}
color()

//create restart button
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
divwidth();
color()
});