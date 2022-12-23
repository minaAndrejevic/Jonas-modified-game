"use strict";
//selecting elements
//const player0El = document.querySelector('.player--0');
// const player1El = document.querySelector('.player--1');
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

//starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");
const scores = [0, 0]; // total for both players

let currentScore = 0;
let activePlayer = 0;

//switch to next player
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  //toggle metnod
};
//roling dice functionality; the name of the event - click and func
btnRoll.addEventListener("click", function () {
  // generating a random dice functionality
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  //display dice
  diceEl.classList.remove("hidden");
  //set it to a string with template literal
  diceEl.src = `dice-${dice}.png`;

  //check for rolled 1
  if (dice !== 1) {
    //add the dice to current score, need to save the current score somewhere
    currentScore = currentScore + dice; // or +=
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore; //were selecting the score dynamically
  } else {
    switchPlayer();
  }
});
btnHold.addEventListener("click", function () {
  console.log(scores[activePlayer]);
  //add current score to active player's score
  scores[activePlayer] += currentScore;
  //scores[1] = scores[1] + currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  //check if the score is >= 100
  if (scores[activePlayer] >= 20) {
    let whoWon = document.querySelector(`#name--${activePlayer}`).innerHTML;
    console.log(whoWon);

    alert(`${whoWon} won`);
    // document.querySelector(`.player--${activePlayer}`)
    //     .classList.add('player--winner');
    // document.querySelector(`.player--${activePlayer}`)
    //     .classList.remove('player--active');
  } else {
    switchPlayer();
  }
});
