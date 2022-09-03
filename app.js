// array of game choice
const gameItems = ["rock", "paper", "scissors"];

//computerPlay function return rock,paper or scissor randomly.
const computerPlay = () =>
  gameItems[Math.floor(Math.random() * gameItems.length)];

const playerPlay = () => {
  let input = prompt("Enter Rock,Paper or Scissors");
  // validatation to check if user want to submit or cancel an empty input.
  while (input == null) {
    input = prompt("The input field cannot be left blank.");
  }
  input = input.toLowerCase();
  // validation to check spelling accuracy.
  let check = validateInput(input);
  while (check == false) {
    input = prompt(
      "The input field cannot be left blank,Spelling accuracy is required, but capitalization is not necessary."
    );
    while (input == null) {
      input = prompt("Type Rock, Paper or Scissors");
    }
    input = input.toLowerCase();
    check = validateInput(input);
  }
  return input;
};

// validateInput function check if the user input exist from the game choice
const validateInput = (str) => gameItems.includes(str);

// check take to player and computer parameters and decide who win or lose
const checkWinner = (playerSelection, computerSelection) => {
  return playerSelection === computerSelection
    ? "Draw"
    : (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ? `You win! ${playerSelection} beat ${computerSelection} `
    : `You Lose! ${computerSelection} beat ${playerSelection}`;
};
function playGame() {
  const playerSelection = playerPlay();
  const computerSelection = computerPlay();
  const winner = checkWinner(playerSelection, computerSelection);
  alert(winner);
  console.log(winner);
}
// calling may function
playGame();