// ============================================================
// 🐛  DOM MANIPULATION — HOMEWORK  |  DEBUG TASKS
// ============================================================
// To test: swap <script src="app.js"> with <script src="debug.js">
// in index.html.
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This should set the board title but logs a TypeError. Why?

// function renderBoardTitle() {
//   const titleEl = document.querySelector(".board-title");
//   titleEl.textContent = "My Task Board";
// }

// renderBoardTitle();

// What's wrong ↓
// In the variable declaration in the bracket for querySelector they used dot notation for but 
// board-title is an id not a class so # should be used.
// Your fix ↓
function renderBoardTitle() {
  const titleEl = document.querySelector("#board-title");
  titleEl.textContent = "My Task Board";
}

renderBoardTitle();

// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// This loop should create a card for every task and append
// it to the list. But only the last card appears. Why?

// function renderTasks() {
//   const list = document.getElementById("list-todo");
//   const tasks = ["Design page", "Write tests", "Fix bug"];

//   tasks.forEach(function(taskTitle) {
//     const li = document.createElement("li");
//     li.textContent = taskTitle;
//     list.innerHTML = li.outerHTML;
//   });
// }

// renderTasks();

// What's wrong ↓
// The list.innerHTML = li.outerHTML is the issue it is wiping the HTML rather than adding to it.
// Your fix ↓
function renderTasks() {
  const list = document.getElementById("list-todo");
  const tasks = ["Design page", "Write tests", "Fix bug"];

  tasks.forEach(function(taskTitle) {
    const li = document.createElement("li");
    li.textContent = taskTitle;
    list.appendChild(li);
  });
}

renderTasks();

// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This function should add a "highlighted" class to all
// high-priority cards, but nothing changes on the page.
// There are TWO bugs.

// function highlightTasks() {
//   const highCards = document.querySelectorAll(".priority-high");

//   for (let i = 0; i <= highCards.length; i++) {
//     highCards[i].classList.add("highlighted");
//   }
// }

// highlightTasks();

// Bug 1 ↓
// in the for loop they used i <= highCards.length but should have used i < highCards.length. 
// Bug 2 ↓
// the internal <span> was targeted rather than the full outer li card element so the css style cannot apply to the whole card.

// Your fix ↓
function highlightTasks() {
  const highCards = document.querySelectorAll(".priority-high");

  for (let i = 0; i < highCards.length; i++) {
    const cardContainer = highCards[i].closest(".task-card");

    if (cardContainer) {
      cardContainer.classList.add("highlighted");
    }
  }  
}

highlightTasks();