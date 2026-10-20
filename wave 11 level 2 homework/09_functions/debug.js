// ============================================================
// 🐛  FUNCTIONS — HOMEWORK  |  DEBUG TASKS
// ============================================================

// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This arrow function should return the full name
// but always returns undefined. What's wrong?

// const getFullName = (first, last) => {
//   first + " " + last;
// };

// console.log(getFullName("Alex", "Rivera"));

// What's wrong ↓
// Return is never called
// Your fix — write TWO versions:
//   a) Fix by adding return inside the braces
//   b) Fix by removing the braces (one-liner implicit return)
const getFullNameA = (first, last) => {
  return first + " " + last;
};

console.log("Version A: ", getFullNameA("Alex", "Rivera"));

const getFullNameB = (first, last) => first + " " + last;
console.log("Version B: ", getFullNameB("Alex", "Rivera"));

// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// This should return "Admin", "Moderator", or "Member"
// depending on role. It works for "admin" but returns
// undefined for everything else. What's wrong?

// function getRoleLabel(role) {
//   if (role === "admin") {
//     return "Admin";
//   } else if (role === "mod") {
//     ("Moderator");
//   } else {
//     ("Member");
//   }
// }

// console.log(getRoleLabel("admin")); // "Admin" ✅
// console.log(getRoleLabel("mod")); // undefined ❌
// console.log(getRoleLabel("member")); // undefined ❌

// What's wrong ↓
// the return is missing on the else/if and else statements
// Your fix ↓
function getRoleLabel(role) {
  if (role === "admin") {
    return "Admin";
  } else if (role === "mod") {
    return ("Moderator");
  } else {
    return ("Member");
  }
}

console.log(getRoleLabel("admin")); // "Admin" ✅
console.log(getRoleLabel("mod")); // "Moderator" ✅
console.log(getRoleLabel("member")); // "Member" ✅

const getRoleLabelArrow = role =>
  role === "admin"
    ? "Admin"
    : role === "mod"
      ? "Moderator"
      : "Member";

console.log("Arrow nested rewrite: ", getRoleLabelArrow("admin"));
console.log("Arrow nested rewrite: ", getRoleLabelArrow("mod"));
console.log("Arrow nested rewrite: ", getRoleLabelArrow(""));

// Although I find the nested ternaries cool I would probably stick to if/else at least for now 
// for clarity but the more I learn might change my mind eventually.

// Bonus: rewrite the whole function as an arrow function
// using nested ternaries (just to see what it looks like —
// then write a comment about whether you'd actually use it).

// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This discount calculator has TWO bugs.
// Both cause wrong math — find them both.

// const applyDiscount = (price, discountPercent = 10) => {
//   const discountAmount = price * discountPercent;
//   const finalPrice = price + discountAmount;
//   return finalPrice;
// };

// console.log(applyDiscount(100, 20)); // expected: 80
// console.log(applyDiscount(50)); // expected: 45

// Bug 1 (math) ↓
// the discountPercent is assigned as a whole number not a decimal or fraction
// Bug 2 (math) ↓
// the discountAmount is being added to the price not subtracted from it.
// Your fix ↓
const applyDiscount = (price, discountPercent = 10) => {
  const discountAmount = price * (discountPercent / 100);
  const finalPrice = price - discountAmount;
  return finalPrice;
};

console.log(applyDiscount(100, 20)); // expected: 80
console.log(applyDiscount(50)); // expected: 45
