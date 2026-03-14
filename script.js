const squares = document.querySelector("#squares");
const canvasSize = squares.getBoundingClientRect().width;

function createGrid(sideLength) {
    const squareSize = canvasSize / sideLength;

    for (let i = 0; i < sideLength ** 2; i++) {
        const square = document.createElement("div")
        square.classList.add("square");
        square.style.width = squareSize + "px";
        square.style.height = squareSize + "px";
        squares.appendChild(square);
    }

    squares.addEventListener("mouseover", (event) => {
        // fill square
        if (event.target.classList.contains("square")) {
            event.target.classList.add("filled-square");
        }
    })
}

const INITIAL_SIDE_LENGTH = 16;
createGrid(INITIAL_SIDE_LENGTH);

const newButton = document.querySelector("#new");
newButton.addEventListener("click", (event) => {
    let input = Number(prompt("Enter a side length for the grid (max 100)"));

    while (!(Number.isInteger(input) && input <= 100 && input >= 1)) {
        input = Number(prompt("Enter a side length for the grid (max 100)"));
    }

    squares.replaceChildren();

    // input should be an integer that is less than 100 at this point
    createGrid(input);
});
