function computerPlay() {
    let selection = Math.floor(Math.random() * 3);
    if (selection == 0) {
        return "rock";
    } else if (selection == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    let result = "";
    if (playerSelection == computerSelection) {
        result = "Tie"
    } else if (playerSelection == "rock" && computerSelection == "scissors" || 
               playerSelection == "paper" && computerSelection == "rock" ||
               playerSelection == "scissors" && computerSelection == "paper"){
        result = "You";
    } else {
        result = "Computer";
    }

    return result;
}

function game() {
    let choice;
    let result;
    let computerChoice;
    let playerWins = 0;
    let computerWins = 0;
    for(let i = 0; i<5; i++) {
        choice = prompt("enter move");
        computerChoice = computerPlay();
        result = playRound(choice, computerChoice);
        console.log("Player: " + choice + " Computer: " + computerChoice + " -- Winner: " + result);
        if (result == "You") {
            playerWins++;
        } else if (result == "Computer") {
            computerWins++;
        }
    }

    if(playerWins == computerWins) {
        console.log("Overall tie!")
    } else if (playerWins > computerWins) {
        console.log("You win!!")
    } else {
        console.log("You lose :<(")
    }
}

console.log("bird up");