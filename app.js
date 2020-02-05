let scores, roundScore, activePlayer, dice;
init();

document.querySelector(".btn-roll").addEventListener("click", function() {
  //1. Random number
  let dice = Math.floor(Math.random() * 6) + 1;

  //2. Display the result
  document.querySelector(".dice").style.display = "block";
  document.querySelector(".dice").src = `dice-${dice}.png`;

  //3. Update the round score if rolled number was not a 1
  if (dice !== 1) {
    roundScore += dice;
    document.getElementById(`current-${activePlayer}`).textContent = roundScore;
  } else {
    nextPlayer();
  }
});

document.querySelector(".btn-hold").addEventListener("click", function() {
  //Add current score to global score
  scores[activePlayer] += roundScore;
  //update ui
  document.getElementById(`score-${activePlayer}`).textContent =
    scores[activePlayer];

  //check if player won the game
  console.log(scores[activePlayer]);
  if (scores[activePlayer] >= 20) {
    document.getElementById(`name-${activePlayer}`).textContent = "Winner!";
    document.querySelector(".dice").style.display = "none";
    document
      .querySelector(`.player-${activePlayer}-panel`)
      .classList.add("winner");
    document
      .querySelector(`.player-${activePlayer}-panel`)
      .classList.remove("active");
  } else {
    nextPlayer();
  }
});

document.querySelector(".btn-new").addEventListener("click", init);

function nextPlayer() {
  document
    .querySelector(`.player-${activePlayer}-panel`)
    .classList.toggle("active");
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document
    .querySelector(`.player-${activePlayer}-panel`)
    .classList.toggle("active");
  document.querySelector(".dice").style.display = "none";
}

function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  document.querySelector(".dice").style.display = "none";
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  document.querySelector(`.player-0-panel`).classList.remove("winner");
  document.querySelector(`.player-1-panel`).classList.remove("winner");
  document.querySelector(`.player-0-panel`).classList.remove("active");
  document.querySelector(`.player-1-panel`).classList.remove("active");
  document.querySelector(`.player-0-panel`).classList.add("active");  
}
