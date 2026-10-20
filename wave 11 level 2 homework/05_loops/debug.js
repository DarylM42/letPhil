// ============================================================
// 🐛  LOOPS — HOMEWORK  |  DEBUG TASKS
// ============================================================
// Fix the bug in each snippet.
// Explain what was wrong as a comment. Then fix it.
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This loop should log numbers 1 through 10.
// It only logs 1 through 9. What's wrong?

// for (let i = 1; i < 10; i++) {
//   console.log(i);
// }

// What's wrong ↓
// what is wrong is that in the for expression the itteration is for 1 < 10 which means it will stop before 10 not at 10.
// Your fix ↓
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// This loop should calculate the sum of 1 through 5 (answer: 15).
// It always logs 0. What's wrong?

// for (let i = 1; i <= 5; i++) {
//   let total = 0;
//   total += i;
// }
// console.log("Sum: " + total);

// What's wrong ↓
// the let total variable is declared inside the loop it should be declared before the loop to properly allow it to run through and reassign.
// Your fix ↓
let total = 0;

for (let i = 1; i <= 5; i++) {
  total += i;
}
console.log("Sum: " + total);

// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This loop should log all ODD numbers from 1 to 10,
// then log "Done!" at the end.
// Instead it logs nothing and skips straight to "Done!".
// There are TWO bugs. Find both.

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   } else {
//     continue;
//   }
// }
// console.log("Done!");

// Bug 1 ↓
// the modulo is set to check the even numbers not the odd by saying === instead of !== or you can move the continue to after the if rather than in the else to get the odd numbers.
// Bug 2 ↓
// the continue is in the else block which in the current configuration is set to even so placing the continue after the if should produce the desired list of odd numbers 
// Your fix ↓
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) continue;
    console.log(i);
}
console.log("Done!");
