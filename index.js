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
            return "scissor";
    
        }
    
        
    }catch(e){}
    
        
}

