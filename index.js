var humanScore = 0;
var computerScore = 0;



const paper = document.createElement('button');
paper.textContent = 'PAPER';
paper.classList.toggle('paper');

const rock = document.createElement('button');
rock.textContent = 'ROCK';
rock.classList.toggle('rock');

const scissors = document.createElement('button');
scissors.textContent = 'SCISSORS';
scissors.classList.toggle('scissors');

const container = document.createElement('div');
container.classList.toggle('container');

const body = document.querySelector('body');
body.appendChild(container);

container.appendChild(paper)
container.appendChild(rock)
container.appendChild(scissors)





const score = document.createElement('div');
score.classList.toggle('score');
score.textContent = `SCORE: YOU ${humanScore}  VS  OPP ${computerScore}`;
body.appendChild(score);

const result = document.createElement('div');
result.classList.toggle('result');
body.appendChild(result);

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


function playRound(humanChoice, computerChoice){
    let human = humanChoice;
    let computer = computerChoice;

    human.toLowerCase();
    
    if(human == "rock" && computer == "scissors"){
        result.textContent = "You win! Rock beats Scissors";
        
        humanScore++;

    }
    else if(human == "rock" && computer == "paper"){
        result.textContent = "You loose! Paper beats Rock";
        computerScore++;
    }
    else if(human == "paper" && computer == "rock"){
        result.textContent = "You win! Paper beats Rock";
       
        humanScore++;
    }
    else if(human == "paper" && computer == "scissors"){
        result.textContent = "You loose! Scissors beats Paper";
        
        computerScore++;
    }
    else if(human == "scissors" && computer == "paper"){
        result.textContent = "You win! Scissors beats Paper";
       
        humanScore++;
    }
    else if(human == "scissors" && computer == "rock"){
        result.textContent = "You loose! Rock beats Scissors";
       
        computerScore++;
    }
    else{
        result.textContent = "You Tied!";
       
    }
}

container.addEventListener('click', function(e){
    let button = e.target.classList.value;
    
    switch(button){

        case 'scissors':
            playRound(button, getComputerChoice());
            break;
        case 'rock':
            playRound(button, getComputerChoice());
            break;

        case 'paper':
            playRound(button, getComputerChoice());
            break;
        
        default:
            alert("Invalid input");
            break;
    }

    score.textContent = `SCORE: YOU ${humanScore}  VS  OPP ${computerScore}`;

    if(humanScore == 5){
        result.textContent = "GAME OVER!!\nYOU WIN!!";
        humanScore = 0;
        computerScore = 0;
        score.textContent = `SCORE: YOU ${humanScore}  VS  OPP ${computerScore}`;
    }else if(computerScore == 5){
        result.textContent = "GAME OVER!!\nYOU LOOSE!!";
        humanScore = 0;
        computerScore = 0;
        score.textContent = `SCORE: YOU ${humanScore}  VS  OPP ${computerScore}`;
    }


})


