var turn = 0;
var gameBoard = [[null, null, null], [null, null, null], [null, null, null]];

document.addEventListener("click", function (event) {
    event.preventDefault();

    var temp = event.target.id;
    var row = parseInt(temp) <= 3 ? 0 : parseInt(temp) <= 6 ? 1 : 2;
    var col = (parseInt(temp) - 1) % 3;

    if (gameBoard[row][col] === null) {
        var parentelement = document.getElementById(temp);
        var childelement = document.createElement('h1');

        if (turn === 0) {
            childelement.textContent = "X";
            childelement.classList.add("xelement");
        } else if (turn === 1) {
            childelement.textContent = "O";
            childelement.classList.add("oelement");
        }

        childelement.style.display = "inline";
        parentelement.appendChild(childelement);

        gameBoard[row][col] = turn;
        checkWinner();
        turn = 1 - turn; // Switch turns between 0 and 1
    }
});

function checkWinner() {
    var winningCombos = [
        // Rows
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        // Columns
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        // Diagonals
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (var i = 0; i < winningCombos.length; i++) {
        var combo = winningCombos[i];
        var a = combo[0];
        var b = combo[1];
        var c = combo[2];

        if (gameBoard[Math.floor(a / 3)][a % 3] !== null &&
            gameBoard[Math.floor(a / 3)][a % 3] === gameBoard[Math.floor(b / 3)][b % 3] &&
            gameBoard[Math.floor(a / 3)][a % 3] === gameBoard[Math.floor(c / 3)][c % 3]) {
            alert("Player " + (gameBoard[Math.floor(a / 3)][a % 3] + 1) + " wins!");
            // Add your logic to handle the winner here
        }
    }
}
