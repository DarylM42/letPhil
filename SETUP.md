# Setting up the storefront

This repo is already set up with **Vite + React + TypeScript + Tailwind**. You don't need to run `npm create vite`.

## 1. Fork and clone
1. Click **Fork** on this repo's GitHub page to make your own copy.
2. Clone **your fork**:
   ```
   git clone <your-fork-url>
   cd <repo-folder>
   ```

## 2. Install and run
```
npm install
npm run dev
```
Open the URL from the terminal (usually http://localhost:5173). You should see **SummitGear Market**.

## 3. What's already here
```
src/
  components/       <- your components go here (empty for now)
  data/products.ts  <- 30 sample products (used until Day 5)
  types/product.ts  <- the Product type
  App.tsx           <- your main file, start here
  index.css         <- just loads Tailwind (no default styles fighting you)
  main.tsx          <- renders App, you rarely touch this
tickets/            <- your work, one folder per class day
exercises/          <- optional extra practice, not required
```

## 4. Working a ticket
1. Make sure you're on an up-to-date `main`: `git checkout main && git pull`
2. Open the next ticket in `tickets/` and create the branch it tells you to.
3. Build until every acceptance criteria box is checked.
4. Follow the ticket's **Submit** steps to push and open a PR.
5. Once it's merged, start the next ticket from `main` again.

Stuck? Read `../Debugging.md` first. `../Tailwind.md` has the common Tailwind classes.
