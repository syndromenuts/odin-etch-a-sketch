const tempNumSquares = 16;
const SQUARE_PX_SIZE = 25;

const squares = document.querySelector("#squares");
for (let i = 0; i < tempNumSquares ** 2; i++) {
    const square = document.createElement("div")
    square.classList.add("square");
    square.style.width = SQUARE_PX_SIZE + "px";
    square.style.height = SQUARE_PX_SIZE + "px";
    squares.appendChild(square);
}

squares.style.width = SQUARE_PX_SIZE * tempNumSquares + "px";
squares.style.height = SQUARE_PX_SIZE * tempNumSquares + "px";

function fillSquare(event) {
    event.target.classList.add("filled-square");
}

squares.addEventListener("mouseover", fillSquare)