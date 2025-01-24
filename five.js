document.addEventListener("DOMContentLoaded", function() {
    // Initializing Scores and Round Counter
    let humanScore = 0;
    let computerScore = 0;
    let roundCount = 0;

    // Getting Computer Choice Generated Randomly
    function getComputerChoice() {
        const choices = ["ROCK", "PAPER", "SCISSORS"];
        return choices[Math.floor(Math.random() * 3)];
    }

    // Function to play a single round
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            return `It's a tie! ${humanChoice} = ${computerChoice}.`;
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
        }
    }

    // Update scores and display result
    function updateGame(humanChoice) {
        if (roundCount < 5) {
            const computerChoice = getComputerChoice();
            const result = playRound(humanChoice, computerChoice);
            document.getElementById("result").textContent = result;
            document.getElementById("score").textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
            roundCount++;
        }

        if (roundCount === 5) {
            declareWinner();
            document.getElementById("five-round").style.display = "block";
        }
    }

    // Declare Winner
    function declareWinner() {
        if (humanScore > computerScore) {
            document.getElementById("result").textContent = "The game is won by Human!";
        } else if (humanScore < computerScore) {
            document.getElementById("result").textContent = "The game is won by Computer!";
        } else {
            document.getElementById("result").textContent = "It's a tie!";
        }
    }

    // Adding Event Listeners on Buttons
    document.getElementById("rock").addEventListener("click", () => updateGame("ROCK"));
    document.getElementById("paper").addEventListener("click", () => updateGame("PAPER"));
    document.getElementById("scissors").addEventListener("click", () => updateGame("SCISSORS"));

    // Making 5 Round Game Button Functional
    let unlimitRound = document.getElementById("five-round");
    unlimitRound.addEventListener('click', () => {
        window.location.href = "index.html";
    });
});
