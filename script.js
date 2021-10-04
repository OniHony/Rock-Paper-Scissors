const choice = ["Rock", "Paper", "Scissors"];

const computerPlay = function () {
  return choice[Math.floor(Math.random() * choice.length)];
};
// added the parse into the equation today did not work how i wanted it to
// trying to find out how to make the choices input = the playerSelection 

const choices = (prompt(`Choose one; ${choice}`))
// OG const choices = parseInt(prompt(`Choose one; ${choice}`))
// parseInt was the problem for parseInt is used to return the value of 
// an integer not a string consisting of words! 

const computerSelection = computerPlay();
const playerSelection = (choices)
 

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
// tried to figure out how to log the playRound function multiple times to 
// create the game() function  not sure if i should multiply by 5 or repeat 5x
console.log(playRound(playerSelection, computerSelection));



