# Tickets — SummitGear Market Storefront

Fictional company: **SummitGear Market**, an online general store.
You're the frontend developer building their storefront in React + TypeScript + Tailwind.

Product data comes from **[DummyJSON](https://dummyjson.com/docs/products)**, a free public API with no key or signup.
Until Day 5, you'll use a local copy of the first 30 products in `src/data/products.ts` (same shape as the API).

## How this works
Every ticket adds a feature to the **same app**. By Day 8 you'll have a full storefront with
search, a cart, routing, global state and a checkout flow.

Most tickets include a **Mock** section with a picture of what the finished feature should look like.
All the mocks come from the same design, so if you follow them your app will look like one finished product.
The numbers in them (prices, stats, totals) are real, so your output should match them.

Tickets are grouped by the class day they unlock. A ticket for `day-N` should only be started
after the Day N lesson has happened, because each day uses what was taught that day. Don't jump ahead.

Work each ticket on its own branch (the branch name is at the top of every ticket) and open
a PR against your own fork's `main` when you're done, with the ticket file linked in the description.
**Merge your PR before starting the next ticket.** Later tickets build on earlier ones.

## Structure
```
tickets/
  day-1/
    1.1-product-card.md
    ...
  day-8/
  stretch/
    (optional, unlocked after Day 6, not taught live)
```

## Day index
| Week | Day | Topic | What you build |
|---|---|---|---|
| 1 | **Day 1** | Components, typed props, `.map` | Product card, product grid, navbar & footer |
| 1 | **Day 2** | `.filter` & `.reduce` | Curated sections, empty state, inventory stats, shop by category |
| 2 | **Day 3** | `useState`, events, controlled inputs | Live search, dark mode, favorites |
| 2 | **Day 4** | State with arrays & forms | Add to cart, cart panel, suggestion form |
| 3 | **Day 5** | `useEffect` & fetching | Load products from the API, loading/error states, effects with cleanup |
| 3 | **Day 6** | React Router | Pages, product detail page, layout & 404 |
| 4 | **Day 7** | Global state with Zustand | Cart, favorites & theme stores, persisted to localStorage |
| 4 | **Day 8** | Putting it together | Multi-step checkout, order confirmation, README & deploy |
| — | **Stretch** | Optional | API search with debounce, pagination, category pages, login & protected routes |

## Heading into backend
In the backend unit you'll build your own products API. Your field names will be a little
different from DummyJSON's (e.g. `name` instead of `title`, `image_url` instead of `thumbnail`).
That's normal on real teams. When you connect this storefront to your own backend, you'll
update the `Product` type and let TypeScript point you to every place that needs to change.
