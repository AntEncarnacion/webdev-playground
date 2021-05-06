

const container = document.getElementById("container");
const btn = document.getElementById('newSketch')

makeRows(16, 16);

btn.addEventListener('click', () => {
    let columns = prompt("Please enter number of columns", "16");
    let rows = prompt("Please enter number of rows", "16");

    if (columns != null && rows != null) {
        makeRows(rows, columns);
    }
})

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  container.innerHTML = '';
  for (let c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);;
    });
    
    container.appendChild(cell).className = "grid-item";
  };
};
