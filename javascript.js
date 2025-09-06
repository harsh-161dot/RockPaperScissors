let playerPoints= 0
let computerPoints= 0

function computerTurn(){
    let num= Math.floor(Math.random() * 3);
    if (num=== 2){
        computerChoice= "rock";
    }
    if (num===1){
        computerChoice= "paper";
    }
    if (num===0){
        computerChoice= "scissors";
    }

    return computerChoice; 
}

function playerTurn(string){
    playerChoice= string;
    return playerChoice;
}

function playRound(computerChoice, playerChoice){
    console.log("player picked "+ playerChoice + "! computer picked " + computerChoice + "!")

    if (playerChoice== "rock"){
        if (computerChoice=="rock"){
            console.log("It's a Draw!")
        }
        if (computerChoice=="paper"){
            computerPoints= computerPoints+1;
            console.log("computer wins!")
        }
        if (computerChoice=="scissors"){
            playerPoints= playerPoints+1;
            console.log("player wins!")
        }
    }
    if (playerChoice== "paper"){
        if (computerChoice=="paper"){
            console.log("It's a Draw!")
        }
        if (computerChoice=="scissors"){
            computerPoints= computerPoints+1;
            console.log("computer wins!")
        }
        if (computerChoice=="rock"){
            playerPoints= playerPoints+1;
            console.log("player wins!")
        }
    }
      if (playerChoice== "scissors"){
        if (computerChoice=="scissors"){
            console.log("It's a Draw!")
        }
        if (computerChoice=="rock"){
            computerPoints= computerPoints+1;
            console.log("computer wins!")
        }
        if (computerChoice=="paper"){
            playerPoints= playerPoints+1;
            console.log("player wins!")
        }
    }
}


function playGame(){
        console.log(playRound(computerTurn(), playerTurn("rock")));
        console.log(playRound(computerTurn(), playerTurn("paper")));
        console.log(playRound(computerTurn(), playerTurn("rock")));
        console.log(playRound(computerTurn(), playerTurn("paper")));
        console.log(playRound(computerTurn(), playerTurn("rock")));

        if (playerPoints===computerPoints){
            console.log("the game has ended in a draw!")
        }
        else if(playerPoints>computerPoints){
            console.log("congratulations! player has won!")
        }
        else if(playerPoints<computerPoints){
            console.log("aww you lost this time! computer has won!")
        }
}

playGame();
console.log(playerPoints, computerPoints)