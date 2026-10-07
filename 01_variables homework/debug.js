// ============================================================
// 🐛  VARIABLES — HOMEWORK  |  DEBUG TASKS
// ============================================================
// Fix the bug in each snippet.
// Explain what was wrong as a comment before your fix.
// Run the file to confirm each fix works.
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This throws an error. What's wrong and how do you fix it?

// const storeName = "TechMart";
// storeName = "MegaShop";
// console.log(storeName);

// What's wrong ↓
// The initial error is caused by trying to reassign a const variable.
// Your fix ↓
let storeName = "TechMart"; // by declaring the variable as a let keyword it can be reassigned.
storeName = "MegaShop";
console.log(storeName);


// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// This runs but the output is wrong. Find the bug.

// let item1Price = 19.99;
// let item2Price = 34.99;
// let orderTotal = item1Price + Item2Price;
// console.log("Total: $" + orderTotal);

// What's wrong ↓
// the problem is that on line 34 it says Item2Price which is not the declared variable of item2Price.
// Your fix ↓
let item1Price = 19.99;
let item2Price = 34.99;
let orderTotal = item1Price + item2Price;
console.log("Total: $" + orderTotal);

// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This code runs without throwing an error,
// but something is still wrong with it.
// Find the issue and explain why it's a problem.

// var productName = "Headphones";
// var productPrice = 49.99;
// console.log(productName + " — $" + productPrice);

// Hint: the code works, but what keyword should you be using instead?
// Why is the current keyword considered bad practice?

// What's wrong ↓
// the issue is you are declaring using an old keyword var which was replaced by const and let which are more reliable.
// Your fix ↓
const productName = "Headphones";
let productPrice = 49.99;
console.log(productName + " - $" + productPrice);
