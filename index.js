const board = document.querySelector("#board");
const boardSize = 960; // set in px
board.style.width = `${boardSize}px`;

const squareSize = boardSize / 16;

for (let index = 0; index < 16 * 16; index++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    board.appendChild(square);
}

const squares = document.querySelectorAll(".square");

// Change a div background color on the "mouseover" event
// mousedown -> +mouseover -> mouseup -> -mouseover = more precise sketching
for (const square of squares) {
    square.addEventListener("mouseover", event => {
        square.style["background-color"] = "#000000";
    });
}
