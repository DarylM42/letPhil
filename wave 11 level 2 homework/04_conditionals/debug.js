// ============================================================
// 🐛  CONDITIONALS — HOMEWORK  |  DEBUG TASKS
// ============================================================
// Fix the bug in each snippet.
// Explain what was wrong as a comment. Then fix it.
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This should log "Pass" when score is 70, but it always
// logs "Pass" even when score is 30. Why?

// let score = 30;
// const passing = 60;

// if (score = passing) {
//   console.log("Pass ✅");
// } else {
//   console.log("Fail ❌");
// }

// What's wrong ↓
// You are assigning passing from score rather than seeing if its greater than or equal to.
// Your fix ↓

let score = 30;
const passing = 60;

if (score >= passing) {
    console.log("Pass ✅");
} else {
    console.log("Fail ❌");
}

// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// A theme park ride requires riders to be EITHER
// at least 140cm tall OR accompanied by an adult.
// But the code is turning away people it shouldn't.

// const height        = 135;
// const withAdult     = true;
// const minHeight     = 140;

// if (height >= minHeight && withAdult) {
//   console.log("🎢 Enjoy the ride!");
// } else {
//   console.log("🚫 Sorry, you cannot ride.");
// }

// What's wrong ↓
// you are using the && conditional which means both must be included instead of || which looks for
// one or the other.
// Your fix ↓

const height    = 135;
const withAdult = true;
const minHeight = 140;

if (height >= minHeight || withAdult) {
    console.log("🎢 Enjoy the ride!");
} else {
    console.log("🚫 Sorry, you cannot ride.");
}

// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This shipping calculator has two bugs.
// One causes the wrong tier to log.
// One is a style issue from a previous lesson.
// Find both.

// var orderTotal = 85;

// if (orderTotal >= 50) {
//   console.log("🚚 Standard shipping: $5");
// }
// if (orderTotal >= 100) {
//   console.log("🚀 Free express shipping!");
// }
// if (orderTotal < 50) {
//   console.log("📦 Economy shipping: $9.99");
// }

// Bug 1 ↓
// when doing if/else with number tiers it should always be in decending order from largest to smallest
// the current order is wrong so it immediatedly goes with the first option.
// also these are all written as separate if statements rather than a more simple if/else.
// Bug 2 ↓
// the var variable is being used rather than const or let
// Your fix ↓

const orderTotal = 85;

if (orderTotal >= 100) {
    console.log("🚀 Free express shipping!");
} else if (orderTotal >= 50) {
    console.log("🚚 Standard shipping: $5")
} else {
    console.log("📦 Economy shipping: $9.99")
}
