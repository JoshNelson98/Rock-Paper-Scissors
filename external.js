
let playerScore = 0;
let computerScore = 0;


//  function writeMessage(msg) {
//     let msgDiv = document.getElementById('output');
//     msgDiv.innerHTML = msg;
// }

function writeMessage(argument) {
    let arg = document.getElementById("output")
    arg.innerHTML = argument
}

 

function getComputerChoice() {
    let answer = Math.floor(Math.random() *3);
    if(answer == 0){
        return "rock"
    }
    else if(answer == 1){
        return "scissors"
    }
    else {
        return "paper"
    }
}
// console.log(getComputerChoice())





function playRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase()
    // console.log(playerChoice)
    let emptyString = `You Lose! ${computerChoice} beats ${playerChoice}!`
    if(playerChoice.toLowerCase() == "rock" && computerChoice == "paper") {
        return emptyString
    }
    if(playerChoice == "rock" && computerChoice == "scissors") {
        return  `You win! ${playerChoice} beats ${computerChoice}!`
    }
    else if(playerChoice == computerChoice) {
        return `It's a tie!`
    }
    else if(playerChoice == 'paper' && computerChoice == "rock") {
        return `You win! ${playerChoice} beats ${computerChoice}!`
    }
    else if(playerChoice == 'paper' && computerChoice == "scissors") {
        return emptyString
    }
    else if(playerChoice == 'scissors' && computerChoice == "rock") {
        return emptyString
    }
    else if(playerChoice == 'scissors' && computerChoice == 'paper') {
        return `You win! ${playerChoice} beats ${computerChoice}!`
    }
}


 function game() {
    for (let i = 0; i < 5; i++) {
        let prompt1 = prompt("Rock, Paper, or Scissors?");
        let roundResult = playRound(prompt1,getComputerChoice())
        console.log((roundResult))
        if (roundResult.includes(`win`)) {
            playerScore ++
            // console.log(playerScore);
        }
        else if (roundResult.includes(`Lose`)){
            computerScore ++ 
            // console.log(computerScore);
        }
        else if(roundResult.includes(`tie`)) {
            playerScore += 0
            computerScore += 0
        }
        console.log((playerScore));
        console.log((computerScore));
    }
    return [`Your final score is ${playerScore}`, `The cpu final score is ${computerScore}`];
 }
 
 
 writeMessage(game());