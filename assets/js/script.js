const squares = document.querySelectorAll(".square");
const statusOfPlay = document.querySelector("#statusOfPlay");
const newGameBtn = document.querySelector("#newGameBtn");
const winCircumstances = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let selections = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;
 
startGame();

function startGame() {
    squares.forEach(square => square.addEventListener("click", squareClicked));
    newGameBtn.addEventListener("click", newGame);
    statusOfPlay.textContent = `${currentPlayer}'s turn`;
}

function squareClicked() {
    const squareIndex = this.getAttribute("squareIndex");

}

function reviseSquare(square, index) {

}

function changePlayer() {

}

function checkWinner() {

}

function newGame() {

}