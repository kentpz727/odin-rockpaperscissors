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
        result.textContent = "It's a tie! Computer chose " + computerChoice + " and Player chose " + playerChoice;
    } else if (
        (computerChoice === "rock" && playerChoice === "scissors") ||
        (computerChoice === "paper" && playerChoice === "rock") ||
        (computerChoice === "scissors" && playerChoice === "paper")
    ) {
        console.log("Computer wins!");
        result.textContent = "Computer wins! Computer chose " + computerChoice + " and Player chose " + playerChoice;
        computerScore++;
    } else {
        console.log("Player wins!");
        result.textContent = "Player wins! Computer chose " + computerChoice + " and Player chose " + playerChoice;
        playerScore++;
    }
}

function updateScore() {
    score.textContent = "Player: "+ playerScore + " | Computer: " + computerScore;
}

// Display div
const container = document.querySelector("#container");

const score = document.createElement("div");
score.classList.add("score");
updateScore();

container.appendChild(score);

const result = document.createElement("div");
result.classList.add("result");
result.textContent = "Make your choice!";

container.appendChild(result);

// Buttons
const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');

rockBtn.addEventListener('click', () => {
    playerChoice = "rock";
    getComputerChoice();
    playRound(computerChoice, playerChoice);
    updateScore();
});
paperBtn.addEventListener('click', () => {
    playerChoice = "paper";
    getComputerChoice();
    playRound(computerChoice, playerChoice);
    updateScore();
});
scissorsBtn.addEventListener('click', () => {
    playerChoice = "scissors";
    getComputerChoice();
    playRound(computerChoice, playerChoice);
    updateScore();
});




/*
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
*/