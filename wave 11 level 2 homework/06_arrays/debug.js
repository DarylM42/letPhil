// ============================================================
// 🐛  ARRAYS — HOMEWORK  |  DEBUG TASKS
// ============================================================
// Fix the bug in each snippet.
// Explain what was wrong as a comment. Then fix it.
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This should log the middle element ("C") of the array.
// Instead it logs undefined. What's wrong?

// const letters = ["A", "B", "C", "D", "E"];
// const middleIndex = letters.length / 2;
// console.log(letters[middleIndex]);

// What's wrong ↓
// Because there are 5 letters in the array dividing by 2 is resulting in undefined
// Your fix ↓
const letters = ["A", "B", "C", "D", "E"];
const middleIndex = (letters.length - 1) / 2;
console.log(letters[middleIndex]);

// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// This loop should build a total of all prices.
// It logs NaN instead of a number. What's wrong?

// const prices = [10, 20, 30, 40];
// let total = 0;

// for (let i = 0; i <= prices.length; i++) {
//   total += prices[i];
// }

// console.log("Total: $" + total);

// What's wrong ↓
// in the for loop it is iterating for i <= prices.length instead should be i < prices.length
// Your fix ↓
const prices = [10, 20, 30, 40];
let total = 0;

for (let i = 0; i < prices.length; i++) {
  total += prices[i];
}

console.log("Total: $" + total);

// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This code is supposed to find the highest score in the array
// and log the winner's name. It always logs the wrong winner.
// There are TWO bugs. Find both.

// const names  = ["Alice", "Bob", "Carol", "Dave"];
// const scores = [82, 91, 78, 95];

// let topIndex  = 1;
// let topScore  = 0;

// for (let i = 0; i < scores.length; i++) {
//   if (scores[i] > topScore) {
//     topScore = scores[i];
//     topIndex = i;
//   }
// }

// console.log("Winner: " + names[topIndex] + " with " + topScore);

// Bug 1 ↓
// topIndex is set to 1 so it will always start with the second name in the array.
// Bug 2 ↓
// topScore is set to 0 so instead of index 0
// Your fix ↓
const names  = ["Alice", "Bob", "Carol", "Dave"];
const scores = [82, 91, 78, 95];

let topIndex  = 0; // Fixed: Start tracking at index 0
let topScore  = scores[0]; // Fixed: Seed with the actual first score

for (let i = 0; i < scores.length; i++) {
  if (scores[i] > topScore) {
    topScore = scores[i];
    topIndex = i;
  }
}

console.log("Winner: " + names[topIndex] + " with " + topScore);
