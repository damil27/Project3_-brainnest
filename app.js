const gameItems = ["rock", "paper", "scissors"];


const gameCount = document.querySelector('.gameCount .displayWinner');
const choiceBtn = document.querySelectorAll('.keypad button');



function handlekeys(e){
 const key =  e.target.dataset.key.toLowerCase();
 console.log(key);
  const playerSelection = key;
    const computerSelection = computerPlay();
    const winner = checkWinner(playerSelection, computerSelection);
    gameCount.textContent = winner
  return key;
}

  choiceBtn.forEach(key => {
    key.addEventListener("click",handlekeys)
  });

 
//computerPlay function return rock,paper or scissor randomly.
const computerPlay = () => gameItems[Math.floor(Math.random() * gameItems.length)];




const checkWinner = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
   return "Draw"
  }else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")){
    return `You win! ${playerSelection} beat ${computerSelection}`
  } else{
    return   `You Lose! ${computerSelection} beat ${playerSelection}`
  }
}

 





































//   const  playGame = () => {
//     const playerSelection = playerPlay();
//     const computerSelection = computerPlay();
//     const winner = checkWinner(playerSelection, computerSelection);
//     gameCount.textContent = winner
//   }
// playGame();




// array of game choice
// const winners = []




// const playerPlay = () => {
//   // let input = prompt("Enter Rock,Paper or Scissors");
//   // validatation to check if user want to submit or cancel an empty input.
//   // while (input == null) {
//   //   input = prompt("Enter Rock,Paper or Scissors");
//   // }
//   input = input.toLowerCase();
//   // validation to check spelling accuracy.
//   let check = validateInput(input);
//   // while (check == false) {
//   //   input = prompt(
//   //     "The input field cannot be left blank and Spelling accuracy is required, but capitalization is not necessary."
//   //   );
//   //   while (input == null) {
//   //     input = prompt("Type Rock, Paper or Scissors.");
//   //   }
//   //   input = input.toLowerCase();
//   //   check = validateInput(input);
//   // }
//   return input;
// };

// // validateInput function to check if the user input exist from the game choice
// const validateInput = (str) => gameItems.includes(str);

// // check take to player and computer parameters and decide who win or lose
// const checkWinner = (playerSelection, computerSelection) => {
//   return playerSelection === computerSelection
//     ? "Draw"
//     : (playerSelection === "rock" && computerSelection === "scissors") ||
//       (playerSelection === "paper" && computerSelection === "rock") ||
//       (playerSelection === "scissors" && computerSelection === "paper")
//     ? `You win! ${playerSelection} beat ${computerSelection} `
//     : `You Lose! ${computerSelection} beat ${playerSelection}`;
// };
// const  playGame = () => {
//   const playerSelection = playerPlay();
//   const computerSelection = computerPlay();
//   const winner = checkWinner(playerSelection, computerSelection);
//   winners.push(winner);
// }

// // console log the winner
// const displayWinners =  () =>{
//   console.log(winners)
// }


// function game(){
//   // loop for the game to run 5 times
//   for(let i = 0; i <5; i++){
//     playGame()
//   }
//   displayWinners();
// }


// // calling main function
// game()
