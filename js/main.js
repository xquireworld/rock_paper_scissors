// const computerPlay = function(){
//     let choices = ['rock', 'paper', 'scissors'];
//     let choice = choices[Math.floor(Math.random()*3)];
//     return choice;
//   }

  
//   function playRound(playerSelection, computerSelection){
//       if(playerSelection === computerSelection){
//           return "it's a tie";
//       }else if (computerSelection === 'rock'){
//           if(playerSelection === 'paper'){
//             return "You win! Paper beats Rock";  
//           }else{
//               return "You lose! Rock beats Scissors";
//           }
//       }else if(computerSelection === 'paper'){
//           if(playerSelection === 'rock'){
//               return "You lose! Paper beats Rock";
//           }else{
//               return "You win! Scissors beats Paper";
//           }
//       }else if (computerSelection === 'scissors'){
//           if(playerSelection === 'paper'){
//               return "You lose! Scissors beats Paper";
//           }else{
//               return "You win! Rock beats Scissors";
//           }
//       }else{
//         return "Choice not found";
//       }
//   }

//   function game(){
//     let playerScore = 0;
//     let computerScore = 0;
//     let playerSelection;
//     let computerSelection;
//     let result;
//     let i = 0;
//     do {
//       playerSelection = prompt("Enter Rock, Paper or Scissors").toLowerCase();
//       computerSelection = computerPlay();
//       result = playRound(playerSelection, computerSelection);
//      console.log(result);
//     if(result[4]==='w'|| result[5]==='w'){
//       playerScore+=1;
//     console.log('player:'+playerScore+' and computer:'+computerScore+'\n');
//     }else if (result[4]==='a'|| result[5]==='a'){
//       console.log('player:'+playerScore+' and computer:'+computerScore+'\n');
//     }else{
//       computerScore +=1;
//       console.log('player:'+playerScore+' and computer:'+computerScore+'\n');
//     }
//     i++;
//     }
//     while (i < 5);
//     if(playerScore === computerScore){
//       console.log('No winner');
//     }else if(playerScore>computerScore){
//       console.log("You win!");
//     }else{
//       console.log('Computer wins!'); 
//     }
    
//     }
    
//     game();