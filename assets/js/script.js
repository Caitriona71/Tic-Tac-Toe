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