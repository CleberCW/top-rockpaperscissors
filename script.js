let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3) ;
    if (randomNum == 0) {
        return "rock"
    } else if (randomNum == 1) {
        return "paper"
    }
     else if (randomNum == 2){
        return "scissors"
     } else {
        console.log("Algo deu ruim")
     }
}

const rockButton = document.createElement("button");
rockButton.innerText = "Rock"
const paperButton = document.createElement("button");
paperButton.innerText = "Paper"
const scissorsButton = document.createElement("button");
scissorsButton.innerText = "Scissors"

const buttons = document.querySelector("#buttons")
buttons.appendChild(rockButton);
buttons.appendChild(paperButton);
buttons.appendChild(scissorsButton);


const score = document.querySelector("#score");
const result = document.createElement("p");
const humanScorePage = document.createElement("p");
const computerScorePage = document.createElement("p");

function playRound(humanChoice, computerChoice) {
    score.innerText = `You: ${humanChoice}. Computer: ${computerChoice}`;

    if (humanChoice == "rock") {
        if (computerChoice == "rock") {
            result.innerText = "Draw!";
        } else if (computerChoice == "paper") {
            result.innerText = "Computer wins!";
            computerScore++;
        } else {
            result.innerText = "You win!";
            humanScore++;
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            result.innerText = "You win!";
            humanScore++;
        } else if (computerChoice == "paper") {
            result.innerText = "Draw!";
        } else {
            result.innerText = "Computer wins!";
            computerScore++;
        }
    } else {
        result.innerText = "Computer wins!";
        if (computerChoice == "rock") {
            computerScore++;
        } else if (computerChoice == "paper") {
            result.innerText = "You win!";
            humanScore++;
        } else {
            result.innerText = "Draw!";
        }
    }
    humanScorePage.innerText = `You: ${humanScore}`;
    computerScorePage.innerText = `Computer: ${computerScore}`;
    score.appendChild(result);
    score.appendChild(humanScorePage);
    score.appendChild(computerScorePage);

    if (humanScore >= 5 || computerScore >= 5) {
        score.innerText = humanScore > computerScore ? "You won the game!" : "You lost the game!"
        humanScore = 0;
        computerScore = 0;
    }
}

buttons.addEventListener("click", (e) => {
    let target = e.target.innerText;

    playRound(target.toLowerCase(), getComputerChoice());
});
