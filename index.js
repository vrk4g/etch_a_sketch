const board = document.querySelector("#board");
const boardSize = Number(getComputedStyle(board).width.replace("px", ""));

function createField(fieldSize) {
    const squareSize = boardSize / fieldSize;

    for (let index = 0; index < fieldSize * fieldSize; index++) {
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
}

const defaultFieldSize = 16;

createField(defaultFieldSize);

document.querySelector("#field-size").addEventListener("click", event => {
    event.preventDefault();

    board.innerHTML = "";

    let fieldSize = Number(prompt("Choose the number of squares per side", defaultFieldSize));

    if (fieldSize > 100) fieldSize = 100;

    createField(fieldSize);
});
