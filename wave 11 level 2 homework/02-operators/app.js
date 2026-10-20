// ============================================================
// 🏠  OPERATORS — HOMEWORK
// ============================================================
// Mini Project: Score Tracker
//
// You are building the logic for a simple game score tracker.
// Use variables + operators — everything from Lessons 1 and 2.
// All output goes to the console. No HTML edits needed.
// ============================================================

// ----------------------------------------------------------
// TASK 1 — Set up the game
// ----------------------------------------------------------
// Declare the following variables using the correct keyword.
// Add a comment on each line explaining why you chose const or let.
//
//   gameName       → "Space Blaster"  (string)
//   playerName     → your name        (string)
//   playerScore    → 0                (number)
//   highScore      → 850              (number)
//   pointsPerKill  → 25               (number)
//   livesRemaining → 3                (number)
//
// Log: gameName + " — Player: " + playerName

const gameName = "Space Blaster"; // const because the name of the game is fixed.
const playerName = "Daryl Murtha"; // const because my name is fixed.
let playerScore = 0; // let because the playerScore will change as the player plays the game
let highScore = 850; // let so that we can reassign it later if we want to raise the highScore
const pointsPerKill = 25; // const because it is a set number, I would argue speaking from a game play perspective leaving this as let allows later flexiblility in game design to make the game harder or easier but I understand for this exercise why it is a const.
let livesRemaining = 3; // chose let to enable flexibility in the game.

console.log(gameName + " - Player: " + playerName);

// ----------------------------------------------------------
// TASK 2 — Earn points
// ----------------------------------------------------------
// The player destroys 6 enemies in a row.
// Use *= or a calculation to find totalEarned (6 * pointsPerKill).
// Then use += to add totalEarned to playerScore.
//
// Log: "Earned: " + totalEarned + " points"
// Log: "Score: " + playerScore

let totalEarned = 6;
totalEarned *= pointsPerKill;
playerScore += totalEarned;

console.log("Earned: " + totalEarned + " points");
console.log("Score: " + playerScore);

// ----------------------------------------------------------
// TASK 3 — Take damage
// ----------------------------------------------------------
// The player gets hit twice and loses a life each time.
// Use -= to subtract 1 from livesRemaining twice.
//
// Log: "Lives remaining: " + livesRemaining
// Then log the result of: livesRemaining > 0
// Write a comment: what does true/false mean in this context?

livesRemaining -= 1;
livesRemaining -= 1;

console.log("Lives remaining: " + livesRemaining);
console.log(livesRemaining > 0); 
// The result of livesRemaining showing as true is because 
// the initial livesRemaining value was 3 and we subtracted 1 twice resulting in 1 remaining 
// which is greater than 0.

// ----------------------------------------------------------
// TASK 4 — Level bonus
// ----------------------------------------------------------
// The player completes a level and earns a 50% score bonus.
// Declare a const called levelBonus = playerScore * 0.5
// Add levelBonus to playerScore using +=.
//
// Log: "Bonus: " + levelBonus
// Log: "Score after bonus: " + playerScore

const levelBonus = playerScore * 0.5;
playerScore += levelBonus;

console.log("Bonus: " + levelBonus);
console.log("Score after bonus: " + playerScore);

// ----------------------------------------------------------
// TASK 5 — Check the high score
// ----------------------------------------------------------
// Log the result of each comparison. Write your prediction
// as a comment BEFORE running the code.
//
//   playerScore > highScore       → prediction: false
//   playerScore === highScore     → prediction: false
//   playerScore >= highScore      → prediction: false

console.log(playerScore > highScore);
console.log(playerScore === highScore);
console.log(playerScore >= highScore);

// ----------------------------------------------------------
// TASK 6 — Update the high score
// ----------------------------------------------------------
// If playerScore is greater than highScore, the high score
// should be updated. We haven't learned if/else yet — so
// just check the comparison result and do it manually:
//
// Log: playerScore > highScore   (is it true or false right now?)
// Then reassign highScore to playerScore.
// Log: "New high score: " + highScore

console.log(playerScore > highScore);

highScore = playerScore;

console.log("New high score: " + highScore);

// ----------------------------------------------------------
// TASK 7 — Time remaining (modulus practice)
// ----------------------------------------------------------
// The game has 245 seconds on the clock.
// Declare a const called totalSeconds = 245
// Use / to get minutes (totalSeconds / 60) → store in a const
// Use % to get leftover seconds (totalSeconds % 60) → store in a const
//
// Log: "Time left: " + minutes + " min " + secondsLeft + " sec"
// ⚠️ minutes will be a decimal — that's expected. We'll fix it in Data Types.

const totalSeconds = 245;
const minutes = totalSeconds / 60;
const secondsLeft = totalSeconds % 60;

console.log("Time left: " + minutes + " min " + secondsLeft + " sec");

// ----------------------------------------------------------
// TASK 8 — Connect the dots summary
// ----------------------------------------------------------
// Declare a const called startScore = 0
// Declare a const called endScore   = playerScore (your current playerScore)
// Declare a const called improvement = endScore - startScore
//
// Log: playerName + " improved by " + improvement + " points this session."
//
// Then log whether the player beat the original highScore (850):
// endScore > 850

const startScore = 0;
const endScore = playerScore;
const improvement = endScore - startScore;

console.log(playerName + " improved by " + improvement + " points this session.");

console.log(endScore > 850);

// ----------------------------------------------------------
// ⭐ STRETCH GOAL — Accuracy Rating
// ----------------------------------------------------------
// Declare these variables:
//   const shotsFired = 40
//   const shotsHit   = 31
//
// Calculate:
//   const accuracyDecimal = shotsHit / shotsFired
//   const accuracyPercent = accuracyDecimal * 100
//
// Log: playerName + " accuracy: " + accuracyPercent + "%"
//
// Then log whether accuracy is above 75%:
//   accuracyPercent >= 75
//
// Bonus question (write as a comment):
// accuracyPercent will have many decimal places. What do you think
// we could use to round it to 2 decimal places? (Hint: coming in Data Types)

const shotsFired = 40;
const shotsHit = 31;

const accuracyDecimal = shotsHit / shotsFired;
const accuracyPercent = accuracyDecimal * 100;

console.log(playerName + " accuracy: " + accuracyPercent + "%");

console.log(accuracyPercent >= 75);
// Using the toFixed() method such as toFixed(2) would round the percentage to 2 decimal places.
