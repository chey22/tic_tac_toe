let cells = document.querySelectorAll(".row > div"); //may need to be each of the 9 nested divs
let moves = 0;
let player = "X";
let gameOver = false;
let check = true;

cells.forEach(function (cell) {
  cell.addEventListener("click", cellClicked);
});

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function cellClicked(e) {
  if (gameOver !== true) {
    let cell = e.target;

    if (cell.textContent !== "") return;
    cell.textContent = player;
    moves++;
    // console.log(moves)
    checkWinner();
    togglePlayer();
  }
}

function togglePlayer() {
  if (player === "X") {
    player = "O";
  } else {
    player = "X";
  }
}

function checkWinner() {
  for (let i = 0; i < winningCombos.length; i++) {
    let combo = winningCombos[i];
    let sum = 0;
    for (let j = 0; j < combo.length; j++) {
      if (cells[combo[j]].textContent === player) {
        sum++;
      }
      if (sum === 3) {
        //setInterval
        document.getElementById("winnerDiv").innerText = player + " wins!";
        gameOver = true;
        check = false;
      }

      if (sum !== 3) {
        if (check !== false) {
          if (moves > 8) {
            document.getElementById("winnerDiv").innerText = "Tie game!";
            gameOver = true;
          }
        }
      }
    }
  }
}

function replayGame() {
  window.location.reload();
}

// let btn = document.querySelector('button')

// btn.addEventListener("click", function () {
//     init()
// });
