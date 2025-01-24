// Initializing Scores 
let humanScore = 0;
let computerScore = 0;

// Getting Computer Choice Generated Randomly 
function getComputerChoice() {
    const choices = ["ROCK", "PAPER", "SCISSORS"];
    return choices[Math.floor(Math.random() * 3)];
};

// Function to play a single round
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return `It's a tie! ${humanChoice} = ${computerChoice}.`;;
    } else if (
        (humanChoice === "ROCK" && computerChoice === "SCISSORS") ||
        (humanChoice === "PAPER" && computerChoice === "ROCK") ||
        (humanChoice === "SCISSORS" && computerChoice === "PAPER")
    ) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}.`;
    };
};

// Update scores and display result
function updateGame(humanChoice) {
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);

    // Update DOM elements
    document.getElementById("result").textContent = result;
    document.getElementById("score").textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
};

// Adding Event Listeners on Buttons

document.getElementById("rock").addEventListener("click", ()=> updateGame("ROCK"));
document.getElementById("paper").addEventListener("click", ()=> updateGame("PAPER"));
document.getElementById("scissors").addEventListener("click", ()=> updateGame("SCISSORS"));

// Making 5 Round Game Button Functional

let fiveRound = document.querySelector("#five-round");

fiveRound.addEventListener('click', ()=> {
    window.location.href = "fiveround.html";
});