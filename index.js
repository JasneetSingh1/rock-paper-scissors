var humanScore = 0;
var computerScore = 0;

function playGame(playRound){
    try{
        for(let i = 0; i < 5; i++){
            playRound(getHumanChoice(), getComputerChoice());
            console.log("Your score: " + humanScore + "\n" + "Opponent's score: " + computerScore);
        }
    }catch(e){}

    console.log("GAME OVER !!");
    
    if(humanScore > computerScore){
        console.log("YOU WIN !!");
    }else if(humanScore < computerScore){
        console.log("YOU LOOSE !!");
    }else{
        console.log("YOU TIED !!")
    }
    
}

function getComputerChoice(){

    try{
        let result = Math.random();
       
        
        if(result > .33 && result < .66){
            return "paper";
        }

        else if(result > .66){
            return "rock";
        }
        else{
            return "scissors";
    
        }
    
        
    }catch(e){}
    
        
}

function getHumanChoice(){

    try{
        let result = prompt("Enter rock, paper, or scissors");

        while(result !== "rock" && result !== "scissors" && result !== "paper"){
            alert("Invalid input");
            result = prompt("Enter only rock, paper, or scissors");
        }

        return result;
        
    }catch(e){}
}

function playRound(humanChoice, computerChoice){
    let human = humanChoice;
    let computer = computerChoice;

    human.toLowerCase();

    if(human == "rock" && computer == "scissors"){
        console.log("You win! Rock beats Scissors");
        humanScore++;
    }
    else if(human == "rock" && computer == "paper"){
        console.log("You loose! Paper beats Rock");
        computerScore++;
    }
    else if(human == "paper" && computer == "rock"){
        console.log("You win! Paper beats Rock");
        humanScore++;
    }
    else if(human == "paper" && computer == "scissors"){
        console.log("You loose! Scissors beats Paper");
        computerScore++;
    }
    else if(human == "scissors" && computer == "paper"){
        console.log("You win! Scissors beats Paper");
        humanScore++;
    }
    else if(human == "scissors" && computer == "rock"){
        console.log("You loose! Rock beats Scissors");
        computerScore++;
    }
    else{
        console.log("You Tied!");
    }
}



playGame(playRound);
