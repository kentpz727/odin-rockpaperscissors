let computerChoice;
let playerChoice;
let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {
    let rng = Math.floor(Math.random() * 3);
    if (rng === 0) {
        computerChoice = "rock";
    } else if (rng === 1) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
}

function getPlayerChoice() {
    playerChoice = prompt("Enter rock, paper, or scissors:").toLowerCase();
    while (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors") {
        playerChoice = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
    }
}

function playRound(computerChoice, playerChoice) {
    if (computerChoice === playerChoice) {
        console.log("It's a tie!");
    } else if (
        (computerChoice === "rock" && playerChoice === "scissors") ||
        (computerChoice === "paper" && playerChoice === "rock") ||
        (computerChoice === "scissors" && playerChoice === "paper")
    ) {
        console.log("Computer wins!");
        computerScore++;
    } else {
        console.log("Player wins!");
        playerScore++;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        getComputerChoice();
        getPlayerChoice();

        console.log("Computer choice: " + computerChoice);
        console.log("Player choice: " + playerChoice);

        playRound(computerChoice, playerChoice);
    }

    console.log("Final Scores - Computer: " + computerScore + ", Player: " + playerScore);
}

playGame();