const container = document.querySelector('#container');
//creating sqaure divs
function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      container.appendChild(cell).className = "grid-item";
    };
  };
 
  makeRows(16, 16);
  const items = document.querySelectorAll(".grid-item");
  items.forEach(item => item.addEventListener('mouseover', (event) => { event.target.style.backgroundColor = "black";}));