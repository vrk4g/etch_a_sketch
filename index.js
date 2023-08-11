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
            const rgb = () => Math.floor(Math.random() * 256);

            if (square.style.backgroundColor) {
                const rgbParams = square.style.backgroundColor.replace("rgb(", "").replace(")", "").split(",");

                const red = Math.floor(Number(rgbParams[0]) - Number(rgbParams[0] / 100 * 10));
                const green = Math.floor(Number(rgbParams[1]) - Number(rgbParams[1] / 100 * 10));
                const blue = Math.floor(Number(rgbParams[2]) - Number(rgbParams[2] / 100 * 10));
                
                square.style.backgroundColor = `rgb(${red < 0 ? 0 : red}, ${green < 0 ? 0 : green}, ${blue < 0 ? 0 : blue})`;
                
            } else {
                square.style.backgroundColor = `rgb(${rgb()}, ${rgb()}, ${rgb()})`;
            }
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
