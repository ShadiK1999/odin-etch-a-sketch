const container = document.querySelector('#container');
const button = document.querySelector('#scale');
const errorMsg = document.querySelector('#error'); 

//creating sqaure divs
function makeRows(n) {
    container.style.setProperty('--grid-rows', n);
    container.style.setProperty('--grid-cols', n);
    for (c = 0; c < (n * n); c++) {
      let cell = document.createElement("div");
      container.appendChild(cell).className = "grid-item";
    };
    //hover over grid to change colour functionality
    const items = document.querySelectorAll(".grid-item");
    items.forEach(item => item.addEventListener('mouseover', (event) => { event.target.style.backgroundColor = "black";}));
  };

function getScale(){
    let scale = parseInt(prompt("Enter Grid Scale:"));
    let error;
    if(scale == null || scale == ""){
      error = "please enter a number";
    } else if(!Number.isInteger(scale)){
      error = "invalid input, please enter a number";
    } else {
      if(scale > 100 || scale < 4){
        error = "Please enter a number between 4 and 100 for a proper canvas" 
      } else {
      makeRows(scale);
      }
    }
    errorMsg.textContent = error;
  }
  
  makeRows(n = 16);
  button.onclick = getScale;
  
  

  

 