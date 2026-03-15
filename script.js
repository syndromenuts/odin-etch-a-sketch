const squares = document.querySelector("#squares");
const canvasSize = parseFloat(window.getComputedStyle(squares).width);

function createGrid(sideLength) {
    const squareSize = Math.floor(canvasSize / sideLength);

    for (let i = 0; i < sideLength ** 2; i++) {
        const square = document.createElement("div")
        square.classList.add("square");
        square.style.width = squareSize + "px";
        square.style.height = squareSize + "px";
        squares.appendChild(square);
    }

    // Adjust canvasSize a tiny bit to make it the exact size as the squares
    squares.style.width = squareSize * sideLength + "px";

    squares.addEventListener("mouseover", (event) => {
        const square = event.target;
        // fill square with random color only if it isn't filled already
        if (square.classList.contains("square") && square.style.backgroundColor === "") {
            square.style.border = "none";
            const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
            square.style.backgroundColor = randomColor;
            square.style.opacity = 0.1;
        } else if (square.classList.contains("square") && square.style.backgroundColor !== "") {
            // Update opacity if square is filled
            let opacity = square.style.opacity;
            if (+opacity !== 1) {
                opacity = +opacity + 0.1;
                square.style.opacity = opacity;
            }
        }
    })
}

const INITIAL_SIDE_LENGTH = 16;
createGrid(INITIAL_SIDE_LENGTH);

const newButton = document.querySelector("#new");
newButton.addEventListener("click", (event) => {
    // prompt again if the input isn't valid. 
    // (input !== null) checks if they cancelled, if they have, then don't prompt again
    let input;
    do {
        input = prompt("Enter a side length for the grid (max 100)");
    } while (input !== null && !(Number.isInteger(+input) && +input <= 100 && +input >= 1))

    if (input !== null) {
        squares.replaceChildren();
    
        // input should be an integer that is less than 100 at this point
        createGrid(+input);
    }
});
