// ============================================================
// 🏠  VARIABLES — HOMEWORK
// ============================================================
// Complete each task using only what you learned in class:
//   - const and let
//   - declaring, assigning, reassigning
//   - console.log()
//   - string + number combination with +
//
// No DOM. No HTML edits. Open DevTools to see your output.
// ============================================================

// ----------------------------------------------------------
// TASK 1 — Your personal profile
// ----------------------------------------------------------
// Declare the following using the correct keyword (const or let).
// Add a comment next to each one explaining WHY you chose that keyword.
//
//   fullName    → your full name as a string
//   age         → your age as a number
//   city        → the city you live in
//   isStudent   → true or false
//
// Log all four to the console.

const fullName = "Daryl Murtha"; // My name is constant I have no desire to change it
let age = 44; // My age changes with every year
let city = "Marlborough"; // I could move that is why I chose it to be let
let isStudent = true; // I am currently a student but I won't always be

console.log(fullName);
console.log(age);
console.log(city);
console.log(isStudent);

// ----------------------------------------------------------
// TASK 2 — Update what can change
// ----------------------------------------------------------
// Reassign city to a different city.
// Reassign isStudent to the opposite value.
// Log both after reassigning.
//
// Then try to reassign fullName.
// Read the error, then comment that line out.

city = "Bolton";
isStudent = false;

console.log(city);
console.log(isStudent);

// fullName = "John Smith";

// ----------------------------------------------------------
// TASK 3 — Undefined in the wild
// ----------------------------------------------------------
// Declare a let called favoriteMovie — do NOT assign a value.
// Log it. Write what you see as a comment.
//
// Now assign it a movie title.
// Log it again.

let favoriteMovie;

console.log(favoriteMovie); // It says undefined

favoriteMovie = "Lord of The Rings";
console.log(favoriteMovie);

// ----------------------------------------------------------
// TASK 4 — Build a product listing
// ----------------------------------------------------------
// You're building a small online store.
// Declare const variables for:
//
//   productName  → a made-up product name
//   productBrand → the brand name
//   productPrice → a price as a number
//   inStock      → true
//
// Log each variable on its own line.
// Then log: productName + " by " + productBrand + " — $" + productPrice

const productName = "Cool Ranch";
const productBrand = "Doritos";
const productPrice = 4.99
const inStock = true;

console.log(productName + " by " + productBrand + " - $" + productPrice);

// ----------------------------------------------------------
// TASK 5 — Stock status update
// ----------------------------------------------------------
// Reassign inStock to false.
// Log: "In stock: " + inStock
//
// Try to reassign productName.
// Read the error and comment the line out.
// Why did this fail but inStock worked?
// Write your answer as a comment.

inStock = false;

console.log("In stock: " + inStock);

// productName = "Nacho Cheese"; // Uncaught TypeError: Assignment to constant variable. at app.js.:106:13
// Trying to reassign productName did not work because it is was written as a const variable and those are not able to be reassigned only let variables are flexible.


// ----------------------------------------------------------
// TASK 6 — Fix the bad names
// ----------------------------------------------------------
// The variable names below are all invalid or poor practice.
// Rewrite each one correctly, declare it with any value, and log it.
//
//   2ndPlayer     → fix it
//   my score      → fix it
//   X             → rename to something descriptive, then declare it
//   GaMeLeVeL     → fix the casing

const secondPlayer = "Bill";
console.log(secondPlayer);

let myScore = 95;
console.log(myScore);

let favoriteGame = "Destiny 2";


console.log(favoriteGame);

let gameLevel = 3;


console.log(gameLevel);

// ----------------------------------------------------------
// TASK 7 — Two-step declaration
// ----------------------------------------------------------
// Declare a let called highScore — do NOT assign a value.
// Log it.
//
// Assign highScore the value 500.
// Log it.
//
// Reassign highScore to 750.
// Log it.
//
// You should see three console lines: undefined → 500 → 750

let highScore;
console.log(highScore);

highScore = 500;
console.log(highScore);

highScore = 750;
console.log(highScore);

// ----------------------------------------------------------
// TASK 8 — Connect the variables
// ----------------------------------------------------------
// Declare these consts:
//   appName    → "TaskMaster"
//   version    → 3
//   authorName → your name
//
// Log: appName + " v" + version + " — built by " + authorName
// Expected format: "TaskMaster v3 — built by [your name]"

const appName = "TaskMaster";
const version = 3;
const authorName = "Daryl Murtha";

console.log(appName + " v" + version + " - built by " + authorName);

// ----------------------------------------------------------
// ⭐ STRETCH GOAL
// ----------------------------------------------------------
// Declare a const called startYear with the value 2020.
// Declare a const called currentYear with the value 2025.
// Declare a let called yearsRunning = currentYear - startYear.
//
// Log: appName + " has been running for " + yearsRunning + " years."
//
// Then reassign currentYear... wait, can you? Why not?
// Write the answer as a comment.
// What keyword would you need if currentYear could change?

const startYear = 2020;
const currentYear = 2025;
let yearsRunning = currentYear - startYear;

console.log(appName + " has been running for " + yearsRunning + " years.");

// currentYear was declared as a const variable which means it is not flexible and cannot be changed or reassigned.
// in order to change the variable currentYear it would have to be declared as a let variable which are flexible and can be reassigned.
