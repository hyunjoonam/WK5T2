// ******************************
/// DEFINE YOUR STATE
// ******************************

let row1 = ["","",""];
let row2 = ["","",""];
let row3 = ["","",""];

let board = [
    row1,
    row2,
    row3
];

let isPlayerXTurn = true; // true is X, false is O

// ******************************
// WRITE YOUR ACTIONS
// ******************************

function valueAtPosition(rowIndex, columnIndex) {
    let row = board[rowIndex];
    let value = row[columnIndex];
    return value;
}

function printBoard() {
    console.log(board[0]);
    console.log(board[1]);
    console.log(board[2]);
    console.log("***********************");
    if (isPlayerXTurn) {
        console.log('Now, Player O\'s turn')
    } else {
        console.log('Now, Player X\'s turn')
    }
}

function setValueAtPosition(rowIndex, columnIndex) {
    if (isPlayerXTurn) {
        board[rowIndex][columnIndex] = "X";
    } else {
        board[rowIndex][columnIndex] = "O";
    }
    printBoard();
    isPlayerXTurn = !isPlayerXTurn;
}

function userInput() {
    let rowChoice = parseInt(prompt("Enter a row"));
    let columnChoice = parseInt(prompt("Enter a column"));
    if (valueAtPosition(rowChoice, columnChoice) == "") {
        setValueAtPosition(rowChoice, columnChoice);
    } else {
        alert("Enter different row & column")
    }
}

function hasSomeoneWon() {
    let winConditions = [
        valueAtPosition(0,0) + valueAtPosition(0,1) + valueAtPosition(0,2),
        valueAtPosition(1,0) + valueAtPosition(1,1) + valueAtPosition(1,2),
        valueAtPosition(2,0) + valueAtPosition(2,1) + valueAtPosition(2,2),
        
        valueAtPosition(0,0) + valueAtPosition(1,0) + valueAtPosition(2,0),
        valueAtPosition(0,1) + valueAtPosition(1,1) + valueAtPosition(2,1),
        valueAtPosition(0,2) + valueAtPosition(1,2) + valueAtPosition(2,2),
        
        valueAtPosition(0,0) + valueAtPosition(1,1) + valueAtPosition(2,2),
        valueAtPosition(0,2) + valueAtPosition(1,1) + valueAtPosition(2,0)
    ]
    for (let i=0; i<winConditions.length; i++) {
        if (winConditions[i] == "XXX" || winConditions[i] == "OOO") {
            return true;
        } 
    }
    return false;
}

// ******************************
// KICK THE WHOLE THING OFF
// ******************************

while ( !hasSomeoneWon() ) {
	userInput();
}

let victor = "";
if (isPlayerXTurn) {
    victor = "O";
} else {
    victor = "X";
}

alert("Victory! Player " + victor + "has won!");