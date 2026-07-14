// ============================================================
// 🐛  OPERATORS — HOMEWORK  |  DEBUG TASKS
// ============================================================
// Fix the bug in each snippet.
// Explain what was wrong as a comment. Then fix it.
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This should calculate a 15% tip but the result is wrong.

// const billAmount = 80;
// const tipPercent = 15;
// const tipAmount  = billAmount % tipPercent;
// console.log("Tip: $" + tipAmount);

// What's wrong ↓
// The problem is the tipPercent is a whole number not a percent and we are trying to use a
// modulo which calculates the remainder when a number is divided by the other. It should be 
// billAmount * tipPercent.
// Your fix ↓

const billAmount = 80;
const tipPercent = 0.15;
const tipAmount = billAmount * tipPercent;
console.log("Tip: $" + tipAmount);

// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// The developer wants to track a countdown timer.
// Something is wrong with how the variable is declared.

// const countdown = 10;
// countdown -= 1;
// countdown -= 1;
// countdown -= 1;
// console.log("Countdown: " + countdown);

// What's wrong ↓
// The countdown timer has been declared as a const which is a fixed variable not capable of
// being reassigned it needs to be a let variable so you can reassign it.
// Your fix ↓

let countdown = 10;
countdown -= 1;
countdown -= 1;
countdown -= 1;
console.log("Countdown: " + countdown);

// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This code is supposed to check if two usernames match.
// It always logs true even when they shouldn't match.
// There are also two style issues (not errors, but bad practice).
// Find the logic bug AND the two style issues.

// var username1 = "gamer99";
// var username2 = "Gamer99";
// console.log("Names match: " + (username1 == username2));

// Logic bug ↓
// if you are trying to check if things match you need to use === not == because == isn't a
// true 1 to 1 comparison.
// Style issue 1 ↓
// var username1. var is an old variable not used anymore it should be const.
// Also it should be userName1 not username1
// Style issue 2 ↓
// var username2. var is an old variable not used anymore it should be const.
// Also it should be userName2 not username2.
// Your fix ↓

const userName1 = "gamer99";
const userName2 = "Gamer99";
console.log("Names match: " + (userName1 === userName2));