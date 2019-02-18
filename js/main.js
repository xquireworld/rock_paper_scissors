const computerPlay = function(){
    let choices = ['rock', 'paper', 'scissors'];
    let choice = choices[Math.floor(Math.random()*3)];
    return choice;
  }
  
  const playerSelection = prompt("Enter Rock, Paper or Scissors").toLowerCase();
  const computerSelection = computerPlay();
  
  function playRound(playerSelection, computerSelection){
      if(playerSelection === computerSelection){
          return "it's a tie";
      }else if (computerSelection === 'rock'){
          if(playerSelection === 'paper'){
            return "You win! Paper beats Rock";  
          }else{
              return "You lose! Rock beats Scissors";
          }
      }else if(computerSelection === 'paper'){
          if(playerSelection === 'rock'){
              return "You lose! Paper beats Rock";
          }else{
              return "You win! Scissors beats Paper";
          }
      }else if (computerSelection === 'scissors'){
          if(playerSelection === 'paper'){
              return "You lose! Scissors beats Paper";
          }else{
              return "You win! Rock beats Scissors";
          }
      }else{
        return "Choice not found";
      }
  }