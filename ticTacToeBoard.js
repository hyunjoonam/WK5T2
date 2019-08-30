// 1) Write a variable that creates an empty tic-tac-toe board

let row1 = ['', '', ''];
let row2 = ['', '', ''];
let row3 = ['', '', ''];

let board = [
    row1,
    row2,
    row3
]

// console.log(board);

// 2) Write a variable that represents whose turn it is (“X” or “O”)

let isPlayerOTurn = true;



// 3) Write a function that returns the value at a given row-column position
// Hint: row and column should be the input parameters

// function valueAtGivenPos(row, column) {
//     let givenPos = board[row-1];
//     return givenPos.splice(column-1, 1, 'O')
// }
// valueAtGivenPos(3,3)

// 4) Write a function that prints the tic-tac-toe board nicely in the console
// Hint: you can use your function from #3
 
function printBoard() {
    console.log(board);    
    // for (let i=0; i<length.row1; i++) {
    //     for (let j=0; j<length.row2; j++) {
    //         for (let k=0; k<length.row3; k++) {
    //             if (board[row3][k] !== '' && board[row2][j] !== '' && board[row1][i] !== '') {
    //                 console.log('Start Over')
    //             }
    //         }
    //     }
    // }
        
    
}

// printBoard();

// 5) Write a function that sets a given value at a given row-column position
// Hint: No need to return anything in this function!
 
// function givenValueAtGivenPos(row, column, givenValue) {
//     let givenPos = board[row-1];
//     givenPos.splice(column-1, 1, givenValue)
// }
// givenValueAtGivenPos(2,2, '#')

// 6) Modify the function from #5 so that it prints the board to the console after changing it
// Hint: Use your function from #4
 
// function givenValueAtGivenPos(row, column, givenValue) {
//     let givenPos = board[row-1];
//     givenPos.splice(column-1, 1, givenValue)
//     printBoard();
// }
// givenValueAtGivenPos(2,2, '#')

// 7) Write a function that:
// a) Prompts the user for a row
// b) Prompts the user for a column
// c) Sets either an “X” or “O” on the board
//  Hint: You can prompt for input with var row=prompt(“enter a row”); Hint: parseInt(string) will turn a string into a number
// Hint: use the function you wrote in #5

// let userRow = parseInt(prompt('Pick and enter a row : 1, 2, or 3'));
// let userColumn = parseInt(prompt('Pick and enter a column : 1, 2, or 3'));

// function givenValueAtGivenPos(userRow, userColumn) {
//     let givenPos = board[userRow-1];
//     givenPos.splice(userColumn-1, 1, 'O')
//     printBoard();
// }
// givenValueAtGivenPos(userRow, userColumn)

// 8) Modify the function from #7 so that it changes whose turn it is

// let userRow = parseInt(prompt('Pick and enter a row : 1, 2, or 3'));
// let userColumn = parseInt(prompt('Pick and enter a column : 1, 2, or 3'));

// function givenValueAtGivenPos(userRow, userColumn) {
//     let givenPos = board[userRow-1];
//     if (isPlayerOTurn = !isPlayerOTurn) {
//         givenPos.splice(userColumn-1, 1, 'X')
//         printBoard();
//     } else {
//         givenPos.splice(userColumn-1, 1, 'O')
//         printBoard();
//     }
// }
// givenValueAtGivenPos(userRow, userColumn)

// 9) Modify the function again so that it only runs if the row-column position is blank
// Otherwise “X” could just overwrite “O”s tiles! (and vice versa)

let userRow = parseInt(prompt('Pick and enter a row : 1, 2, or 3'));
let userColumn = parseInt(prompt('Pick and enter a column : 1, 2, or 3'));

function gameStatus() {
    let congrats = 'Winner is ';
    let a1 = board[0][0];
    let a2 = board[0][1];
    let a3 = board[0][2];
    let b1 = board[1][0];
    let b2 = board[1][1];
    let b3 = board[1][2];
    let c1 = board[2][0];
    let c2 = board[2][1];
    let c3 = board[2][2];

    // if (a1 === b1 && b1 === c1 && a1 !== '') {
    //     let announce = congrats + a1;
    //     console.log(announce)
    // } else if (a2 === b2 && b2 === c2 && a2 !== '') {
    //     let announce = congrats + a2;
    //     console.log(announce)
    // } else if (a3 === b3 && b3 === c3 && a3 !== '') {
    //     let announce = congrats + a3;
    //     console.log(announce)
    // } else if (a1 === b2 && a1 === c3 && a1 !== '') {
    //     let announce = congrats + a1;
    //     console.log(announce)
    // } else if (a3 === b2 && a3 === c1 && a3 !== '') {
    //     let announce = congrats + a3;
    //     console.log(announce)
    // } 
}

// function givenValueAtGivenPos(userRow, userColumn) {
//     let givenPos = board[userRow-1];
//     if (board[userRow-1][userColumn-1] === '') {
//         if (isPlayerOTurn = !isPlayerOTurn) {
//             givenPos.splice(userColumn-1, 1, 'X');   
//             printBoard();
//             gameStatus();
//         } else {
//             givenPos.splice(userColumn-1, 1, 'O');
//             printBoard();
//             gameStatus();
//         }
//     } else {
//         console.log('Please enter a row and a column again')
//     }
// }
// givenValueAtGivenPos(userRow, userColumn)



// 10) Write a function that looks at the tic-tac-toe board and decides who’s won the game - “X”, “O”, or no one!


function ticTacToe(userRow, userColumn) {
    let givenPos = board[userRow-1];
    if (board[userRow-1][userColumn-1] === '') {
        if (isPlayerOTurn = !isPlayerOTurn) {
            givenPos.splice(userColumn-1, 1, 'X');   
            printBoard();
            gameStatus();
        } else {
            givenPos.splice(userColumn-1, 1, 'O');
            printBoard();
            gameStatus();
        }
    } else {
        console.log('Please enter a row and a column again')
    }
}
ticTacToe(userRow, userColumn)

// 11) Write a loop that ask for user input until someone wins the game

