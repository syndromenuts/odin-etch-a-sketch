const tempNumSquares = 16;
const squarePxSize = 25;

const squares = document.querySelector("#squares");
for (let i = 0; i < tempNumSquares ** 2; i++) {
    const square = document.createElement("div")
    square.classList.add("square");
    square.style.width = squarePxSize + "px";
    square.style.height = squarePxSize + "px";
    squares.appendChild(square);
}

squares.style.width = squarePxSize * tempNumSquares + "px";
squares.style.height = squarePxSize * tempNumSquares + "px";