let grid = document.querySelector(".grid");

function makeGrid(num) {
  grid.innerHTML = " "

  for (let i = 0; i < num; i++) {
    let collumDiv = document.createElement("div");
    collumDiv.className = "collum-div";
    grid.append(collumDiv);
  }

  let collumDivs = document.querySelectorAll(".collum-div");

  collumDivs.forEach((collum) => {
    for (let x = 0; x < num; x++) {
      let rowDiv = document.createElement("div");
      rowDiv.className = "row-div";
      rowDiv.addEventListener("mouseover", e => e.target.classList.add('black'))
      collum.append(rowDiv);
    }
  });
}

function buttonHandler(e) {
  let userPrompt = prompt("What size grid do you want? 20 - 100")
  makeGrid(userPrompt);
}

let userPrompt;
let button = document.querySelector('.pencil-size')
button.addEventListener('click', buttonHandler)

makeGrid(80);
