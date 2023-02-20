const playerSign = document.querySelector("#playerSign");
const userScore = document.querySelector("#userScore");
const computerSign = document.querySelector("#computerSign");
const computerScore = document.querySelector("#computerScore");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const scoreInfo = document.querySelector("#scoreInfo");
const scoreMessage = document.querySelector("#scoreMessage");
const choices = document.querySelectorAll("#userChoice");

let score = {
  user: 0,
  computer: 0,
};

let signs = [paper, rock, scissors];

const play = (e) => {
  let options = ["rock", "paper", "scissors"];
  let userChoice = e.target.id;
  let computerChoice = options[Math.trunc(Math.random() * options.length)];
  const winner = getWinner(userChoice, computerChoice);
  console.log(winner);
  showWinner(winner, userChoice, computerChoice);

  computerChoice === "rock" && (computerSign.innerHTML = rock.innerHTML);
  computerChoice === "paper" && (computerSign.innerHTML = paper.innerHTML);
  computerChoice === "scissors" &&
    (computerSign.innerHTML = scissors.innerHTML);

  userChoice === "rock" && (playerSign.innerHTML = rock.innerHTML);
  userChoice === "paper" && (playerSign.innerHTML = paper.innerHTML);
  userChoice === "scissors" && (playerSign.innerHTML = scissors.innerHTML);
};

const getWinner = (user, computer) => {
  if (user === computer) {
    return "draw";
  } else if (
    (user === "rock" && computer === "scissors") ||
    (user === "paper" && computer === "rock") ||
    (user === "scissors" && computer === "paper")
  )
    return "user";
  else {
    return "computer";
  }
};

const showWinner = (winner, userChoice, computerChoice) => {
  if (winner === "draw") {
    scoreInfo.textContent = "Draw";
    return;
  }

  if (winner === "user") {
    score.user++;
    userScore.textContent = score.user;
    scoreInfo.textContent = "You Win";
    scoreMessage.textContent = `${userChoice} beats ${computerChoice}`;
  } else {
    score.computer++;
    computerScore.textContent = score.computer;
    scoreInfo.textContent = "You Lose";
    scoreMessage.textContent = `${computerChoice} beaten ${userChoice}`;
  }
};
choices.forEach((choice) => choice.addEventListener("click", play));

// console.log(choices);
