// Dice Roll Simulator Demo

// HTML Element for Output
let outputEl = document.getElementById("output");

// Menu Button
document.getElementById("go-btn").addEventListener("click", goBtnClicked);

function goBtnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu").value;

  // Process Selection
  if (selection === "roll-once") {
    rollOnce();
  } else if (selection === "roll-five") {
    roll5Times();
  } else if (selection === "roll-n") {
    rollNTimes();
  } else if (selection === "snake-eyes") {
    snakeEyes();
  }
}

// Talked about simplifying code during class. (Functions inside of function)

function rollOnce() {
  // Display Menu Title
  outputEl.innerHTML = "<h3>ROLL ONCE</h3>";
  rollDice();
}

function roll5Times() {
  // Display Menu Title
  outputEl.innerHTML = "<h3>ROLL 5 TIMES</h3>";

  for (let no = 0; no < 5; no++) {
    rollDice();
  }
}

function rollNTimes() {
  // Display Menu Title
  outputEl.innerHTML = "<h3>ROLL 'N' TIMES</h3>";

  let numRoll = prompt("Enter a # of rolls");

  for (let numSpan = 0; numSpan < numRoll; numSpan++) {
    rollDice();
  }
}

function snakeEyes() {
  // Display Menu Title
  outputEl.innerHTML = "<h3>ROLL UNTIL SNAKE EYES</h3>";

  let snakeTotal = 0;
  let rolls = 0;

  while (snakeTotal !== 2) {
    rolls++;
    snakeTotal = rollDice();
  }

  let pE2 = document.createElement("p");
  pE2.innerHTML = `SNAKE EYES! It took ${rolls} rolls to get snake eyes.`;
  outputEl.appendChild(pE2);
}

// Code for function inside above funtions

function rollDice() {
  // Random Dice Roll & Total
  let die1 = Math.floor(Math.random() * 6) + 1;
  let die2 = Math.floor(Math.random() * 6) + 1;
  let total = die1 + die2;

  // Add Results to output element
  let pEl = document.createElement("p");
  pEl.innerHTML = `${die1},${die2} (sum: ${total})`;
  outputEl.appendChild(pEl);

  return total;
}
