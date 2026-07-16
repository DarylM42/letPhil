// ============================================================
// 🐛  DATA TYPES — HOMEWORK  |  DEBUG TASKS
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This tries to build a greeting using the customer's first name.
// It logs "undefined Rivera" instead of "Alex Rivera". What's wrong?

// const customerName = "alex rivera";
// const cleanName    = customerName.trim().toLowerCase();

// // Trying to capitalise the first letter:
// const titled = cleanname[0].toUpperCase() + cleanname.slice(1);
// console.log(`Hello, ${titled}!`);

// What's wrong ↓
// when they tried to capitalize the first letter the wrote cleanname instead of cleanName.
// Your fix ↓
const customerName = "alex rivera";
const cleanName    = customerName.trim().toLowerCase();

const titled = cleanName[0].toUpperCase() + cleanName.slice(1);
console.log(`Hello, ${titled}!`);

// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// This calculates the total for an order item.
// The result is "79.992" instead of 159.98. What's wrong?

// const itemPrice = "79.99";  // from a form input
// const itemQty   = 2;

// const lineTotal = itemPrice * itemQty;  // works — * coerces
// const receipt   = `Total: $${itemPrice + lineTotal}`; // bug here

// console.log(receipt); // "Total: $79.99159.98" — wrong

// What's wrong ↓
// the itemPrice is written as a string so when they try to perform an additon function
// it merges the numbers together instead of properly adding values together it is merging 
// strings. You also don't need to add itemPrice to the lineTotal because the lineTotal already
// handles the calculation and forced the conversion of itemPrice to a number so you just need
// lineTotal. Alternatively you could parseFloat the itemPrice for the lineTotal calculation
// but that is just an unnecessary step in this scenario because the outcome would remain you 
// only need lineTotal in the receipt = line.
// Your fix ↓
const itemPrice = "79.99";
const itemQty   = 2;

// const price1    = parseFloat(itemPrice);
const lineTotal = itemPrice * itemQty;
const receipt   = `Total: $${lineTotal}`;

console.log(receipt);

// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This builds a discount label and checks if a code is valid.
// There are TWO bugs — one produces a wrong boolean,
// one produces a wrong string.

// const rawCode     = "  save10  ";
// const validCode   = "SAVE10";

// // Bug 1: comparing without cleaning
// const isValid = rawCode === validCode;
// console.log(`Code valid: ${isValid}`);  // false — wrong, should be true

// Bug 2: building a label with the raw code
// const label = `Discount code: ${rawCode} — valid: ${isValid}`;
// console.log(label); // shows messy whitespace in the label

// Bug 1 ↓
// the bug here is that rawCode has white space around it and is in lowercase lettering
// resulting in a false outcome. So trim the white space and set the letters to capitalized.
// Bug 2 ↓
// the bug here is rawCode has whitespace around it you should use validCode instead.
// Your fix for both ↓
const rawCode     = "  save10  ";
const validCode   = "SAVE10";

const isValid = rawCode.trim().toUpperCase() === validCode;
console.log(`Code valid: ${isValid}`);

const label = `Discount code: ${validCode} - valid: ${isValid}`;
console.log(label);