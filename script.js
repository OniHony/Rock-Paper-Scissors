const choice = ["Rock", "Paper", "Scissors"];

const computerPlay = function () {
  return choice[Math.floor(Math.random() * choice.length)];
};

const computerSelection = computerPlay();
let playerSelection = "Rock";
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a draw";
  } else if (playerSelection == "Rock" && computerSelection == "Paper") {
    return "You've Lost!!";
  } else if (playerSelection == "Paper" && computerSelection == "Rock") {
    return "Hooray You've Won";
  } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
    return "Hooray You've Won";
  } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
    return "You've Lost!!";
  }else if (playerSelection == "Rock" && computerSelection == "Scissors") {
    return "Hooray You've Won";
  }else if (playerSelection == "Scissors" && computerSelection == "Rock") {
    return "You've Lost!!";
  }
}
function game(){
  
}
