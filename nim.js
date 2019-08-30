// Your task is to implement the game called NIM. There are many versions of the game NIM, but we'll be implementing the simplest version (it's even simpler than Tic Tac Toe).

// Here are the rules for NIM:

// There are two players that take turns
// There are 16 rocks in a pile between the two players
// On your turn, you can choose to remove 1, 2, or 3 rocks from the pile. After you make your choice, your turn is over
// The winner is the player that takes the last rock from the pile
// This game is meant to be played on the console, much like how we did Tic Tac Toe (Showing the current state of the game to the console, prompting the user for input, etc.)

// BONUS: Make it so that player 2 is played by the computer. Implement a strategy for the computer that will ensure player 2 always wins.


let isPlayer1Turn = true;

let rocks = "OOOOOOOOOOOOOOOO";
let pile= rocks.split('');
console.log(pile);

function pileStatus() {
    console.log(pile);
    if (isPlayer1Turn) {
        console.log('Now, Player 2\'s turn')
    } else {
        console.log('Now, Player 1\'s turn')
    }
}

function removingRocks(num) {
    pile.splice(0, num);
    pileStatus();
    isPlayer1Turn = !isPlayer1Turn;
}

function userInput() {
    let userPick = parseInt(prompt("Please enter number"));
    if (pile.length >= 3) {
        if (userPick == 3 || userPick == 2 || userPick == 1) {
            removingRocks(userPick);
        } else {
            alert('Please enter again');
        }
    } else if (pile.length == 2) {
        if (userPick == 2 || userPick == 1) {
            removingRocks(userPick);
        } else {
            alert('Please enter again');
        }
    } else if (pile.length == 1){
        if (userPick == 1) {
            removingRocks(userPick);
        } else {
            alert('Please enter again');
        }
    }
}


function winnerIs() {
    if (pile.length == 0) {
        console.log('Game Over')
        return true
    } else {
        return false
    }
}

while ( !winnerIs() ) {
    userInput();
}

let victor = '';

if (isPlayer1Turn) {
    victor = "2";
} else {
    victor = "1";
}

alert("victory! Player " + victor + " has won!");