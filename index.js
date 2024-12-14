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
        console.log(typeof(result));

        while(result !== "rock" && result !== "scissors" && result !== "paper"){
            alert("Invalid input");
            result = prompt("Enter only rock, paper, or scissors");
        }

        return result;
        
    }catch(e){}
}

console.log(getHumanChoice())