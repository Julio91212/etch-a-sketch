const container= document.querySelector('#container');
//create divs
function grid() {
    const grid = document.createElement("div");
    grid.classList.add("grid");
    container.appendChild(grid);}
for (let i=0; i<256; i++) {
grid()
}
