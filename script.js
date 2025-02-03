function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3) ;
    if (randomNum == 0) {
        return "rock"
    } else if (randomNum == 1) {
        return "paper"
    }
     else {
        return "scissors"
     }
}

const getHumanChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    let validInput = false;
    let formattedUserChoice = "";
    while (!validInput) {
        let userChoice = prompt(`What do you choose?`);
        formattedUserChoice = userChoice.toLowerCase();
        validInput = choices.includes(formattedUserChoice)

        if (!validInput) {
            alert("You must choose rock, paper or scissors")
        }
    }
    
    return formattedUserChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    console.log(`You: ${humanChoice}. Computer: ${computerChoice}`)
    if(humanChoice == "rock") {
        if (computerChoice == "rock") {
            console.log("Draw!")
            humanScore++;
            computerScore++;
        } else if (computerChoice == "paper") {
            console.log("Computer wins!")
            computerScore++;
        } else {
            console.log("You win!");
            humanScore++;
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            console.log("You win!");
            humanScore++;
        } else if (computerChoice == "paper") {
            console.log("Draw!");
            humanScore++;
            computerScore++;
        } else {
            console.log("Computer wins!")
            computerScore++;
        }
    } else {
        if (computerChoice == "rock") {
            console.log("Computer wins!");
            computerScore++;
        } else if (computerChoice == "paper") {
            console.log("You win!");
            humanScore++;
        } else {
            console.log("Draw!");
            humanScore++;
            computerScore++;
        }
    }
}

function playGame() {
    for (i=0;i<5;i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    if (humanScore == computerScore) {
        console.log("It's a draw!!!")
    }

    console.log(humanScore > computerScore ? "You won the game!" : "You lost the game!")
}

playGame()