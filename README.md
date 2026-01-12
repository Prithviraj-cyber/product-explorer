# Product Explorer Dashboard

A small frontend project built using **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.
This project was created as a technical assignment to demonstrate clean architecture, API integration,
state handling, and responsive UI.

---

## 🚀 Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Fake Store API
- LocalStorage (for favorites)

---

## 📦 Project Setup

1. Install dependencies:
   ```bash
   npm install
2. Run in development mode:
    ```bash
   npm run dev

Pages Overview
1️⃣ Home Page (/)
File: app/page.tsx
Features:
    Fetches products from Fake Store API (Server Component)
    Displays products in a responsive grid
    Mobile view shows single product card
    Search products by title
    Filter products by category
    Sort products by price (Low → High / High → Low)
    Pagination for product listing
    Filter to show Favorites only

2️⃣ Product Details Page (/products/[id])
File: app/products/[id]/page.tsx
Features:
    Dynamic routing using product ID
    Displays:
        Product image
        Title
        Description
        Price
        Category
    Server-side data fetching
    Handles invalid product IDs (404 safe)

🧩 Components
Location: components/
    ProductCard.tsx → Displays individual product
    SearchBar.tsx → Search input
    CategoryFilter.tsx → Category dropdown
    FavoriteButton.tsx → Add / remove favorites
    Pagination.tsx → Page navigation
    Loader.tsx → Loading indicator
    DarkModeToggle.tsx → Light / Dark mode toggle

All components are:
    Reusable
    Typed with TypeScript
    Properly commented

❤️ Favorites Feature
    Users can mark / unmark products as favorites
    Favorites are saved in localStorage
    Users can filter to show only favorite products
    Favorites persist after page refresh

🎨 Styling
    Tailwind CSS for layout and responsiveness
    External CSS file: styles/custom.css
    CSS Variables used for:
        Light mode
        Dark mode
    Smooth hover effects and focus styles
    Mobile-first design

🌙 Dark Mode
    Toggle available in header
    Theme preference stored in localStorage
    Persists after page reload
    Implemented without breaking SSR
