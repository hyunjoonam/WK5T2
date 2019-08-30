// Your task is to implement the game called NIM. There are many versions of the game NIM, but we'll be implementing the simplest version (it's even simpler than Tic Tac Toe).

// Here are the rules for NIM:

// There are two players that take turns
// There are 16 rocks in a pile between the two players
// On your turn, you can choose to remove 1, 2, or 3 rocks from the pile. After you make your choice, your turn is over
// The winner is the player that takes the last rock from the pile
// This game is meant to be played on the console, much like how we did Tic Tac Toe (Showing the current state of the game to the console, prompting the user for input, etc.)

// BONUS: Make it so that player 2 is played by the computer. Implement a strategy for the computer that will ensure player 2 always wins.


let isPlayerTurn = true;

let rocks = "OOOOOOOOOOOOOOOO";
let pile= rocks.split('');
console.log(pile);

function pileStatus() {
    console.log(pile);
    if (isPlayerTurn) {
        console.log('Now, Computer\'s turn')
    } else {
        console.log('Now, Player\'s turn')
    }
}

function removingRocks(num) {
    pile.splice(0, num);
    pileStatus();
    isPlayerTurn = !isPlayerTurn;
}

function userInput() {
    if (isPlayerTurn) {
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
    } else {
        if (pile.length == 15 || pile.length == 11 || pile.length == 7 || pile.length == 3) {
            removingRocks(3);
        } else if (pile.length == 14 || pile.length == 10 || pile.length == 6 || pile.length == 2) {
            removingRocks(2);
        } else if (pile.length == 13 || pile.length == 9 || pile.length == 5 || pile.length == 1) {
            removingRocks(1);
        } 
    }
}


function winnerIs() {
    if (pile.length == 0) {
        pile.push('Game Over')
        return true
    } else {
        return false
    }
}

while ( !winnerIs() ) {
    userInput();
}

let victor = '';

if (isPlayerTurn) {
    victor = "Computer";
} else {
    victor = "Player";
}

alert("victory! " + victor + " has won!");