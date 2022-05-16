let grid = document.querySelector(".grid");

function makeGrid(num) {
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


makeGrid(200);
