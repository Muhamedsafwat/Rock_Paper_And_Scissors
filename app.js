let pScore = 0;
let cScore = 0;
//game starting function
const startGame = () => {
  const btn = document.querySelector(".intro button");
  const intro = document.querySelector(".intro");
  const match = document.querySelector(".match");

  btn.addEventListener("click", () => {
    intro.classList.add("fadeOut");
    match.classList.add("fadeIn");
  });
};
//gameplay function
const playmatch = () => {
  const options = document.querySelectorAll(".options button");
  const pHand = document.querySelector(".player-hand");
  const cHand = document.querySelector(".computer-hand");
  const hands = document.querySelectorAll(".hands img");

  hands.forEach((hand) => {
    hand.addEventListener("animationend", function () {
      this.style.animation = "";
    });
  });

  //computer options
  const cChoices = ["rock", "paper", "scissors"];
  options.forEach((option) => {
    option.addEventListener("click", function () {
      const cNumber = Math.floor(Math.random() * 3);
      const cChoice = cChoices[cNumber];
      //here we call compare hands
      setTimeout(() => {
        compare(cChoice, this.textContent);
        //update images
        pHand.src = `./images/${this.textContent}.png`;
        cHand.src = `./images/${cChoice}.png`;
      }, 1250);
      setTimeout(() => {
        pHand.src = "./images/rock.png";
        cHand.src = "./images/rock.png";
        const text = document.querySelector(".text");
        text.textContent = "choose an option";
      }, 3000);
      pHand.style.animation = "shakePlayer 1.2s linear";
      cHand.style.animation = "shakeComputer 1.2s linear";
    });
  });
};
const update = () => {
  const playerScore = document.querySelector(".score .player p");
  const computerScore = document.querySelector(".score .computer p");
  playerScore.textContent = pScore;
  computerScore.textContent = cScore;
};

const compare = (cChoice, pChoice) => {
  //update text
  const text = document.querySelector(".text");
  //checking for a tie
  if (cChoice === pChoice) {
    text.textContent = "It Is a Tie";
    return;
  }
  //checking for rock
  if (pChoice === "rock") {
    if (cChoice === "scissors") {
      text.textContent = "player wins!";
      pScore++;
      update();
      return;
    } else {
      text.textContent = "computer wins!";
      cScore++;
      update();
      return;
    }
  }
  //checking for paper
  if (pChoice === "paper") {
    if (cChoice === "scissors") {
      text.textContent = "computer wins!";
      cScore++;
      update();
      return;
    } else {
      text.textContent = "player wins!";
      pScore++;
      update();
      return;
    }
  }
  //checking for scissors
  if (pChoice === "scissors") {
    if (cChoice === "paper") {
      text.textContent = "player wins!";
      pScore++;
      update();
      return;
    } else {
      text.textContent = "computer wins!";
      cScore++;
      update();
      return;
    }
  }
};
startGame();
playmatch();
