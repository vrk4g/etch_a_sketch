const board = document.querySelector("#board");
const boardSize = 960; // set in px
board.style.width = `${boardSize}px`;

const squareSize = boardSize / 16;

for (let index = 0; index < 16 * 16; index++) {
    const square = document.createElement("div");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    square.style.backgroundColor = "red"; // temporary variable
    board.appendChild(square);
}
