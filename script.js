const tempNumSquares = 17;

const squares = document.querySelector("#squares");

const canvasSize = squares.getBoundingClientRect().width;
const squareSize = canvasSize / tempNumSquares;

for (let i = 0; i < tempNumSquares ** 2; i++) {
    const square = document.createElement("div")
    square.classList.add("square");
    square.style.width = squareSize + "px";
    square.style.height = squareSize + "px";
    squares.appendChild(square);
}

function fillSquare(event) {
    if (event.target.classList.contains("square")) {
        event.target.classList.add("filled-square");
    }
}

squares.addEventListener("mouseover", fillSquare)