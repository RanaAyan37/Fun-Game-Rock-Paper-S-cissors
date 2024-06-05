let userscore = 0;
let comscore = 0;

let chs = document.querySelectorAll(".ch");
let msg = document.querySelector("#msg");

const userpara = document.querySelector("#u-score");
const compara = document.querySelector("#c-score");

const gencomCh = () => {
  const options = ["rock", "paper", "scissors"];
  const opidx = Math.floor(Math.random() * 3);
  return options[opidx];
};
const draw = () => {
  msg.innerText = "Game draw";
  msg.style.backgroundColor = "#081b31";
};
const showwiner = (userwin, userChoice, comChoice) => {
  if (userwin === true) {
    userscore++;
    userpara.innerHTML = userscore;
    msg.innerText = `You win! Your ${userChoice} beats ${comChoice}`;
    msg.style.backgroundColor = "Green";
  } else {
    comscore++;
    compara.innerHTML = comscore;
    msg.innerText = `You lose! My ${comChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  const comChoice = gencomCh();
  if (userChoice === comChoice) {
    draw();
  } else {
    let userwin = true;
    if (userChoice === "rock") {
      userwin = comChoice === "paper" ? false : true;
    } else if (userChoice === "secissors") {
      userwin = comChoice === "paper" ? false : true;
    } else {
      userwin = comChoice === "rock" ? false : true;
    }
    showwiner(userwin, userChoice, comChoice);
  }
};

chs.forEach((chs) => {
  chs.addEventListener("click", () => {
    const userChoice = chs.getAttribute("id");
    playGame(userChoice);
  });
});
