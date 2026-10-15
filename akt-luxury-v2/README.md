# AKT-Luxury — Maison de Luxe

A fully dynamic, premium e-commerce website built with React.

## ✦ Features

- **5 Pages:** Home, Shop, Product Detail, Cart, Admin Dashboard
- **Dynamic Products:** All products loaded from structured data (no hardcoded HTML)
- **Animated Hero Slider:** Auto-advances every 6 seconds
- **Smart Filters:** Category, price range, sort order — all live
- **Product Detail:** Multi-image gallery, specs table, live rating
- **Review System:** Submit & display reviews with live rating update
- **Cart Management:** Add, remove, update qty — subtotal & shipping calculated
- **Admin Panel:** Add, edit, delete products with image preview
- **Fully Responsive:** Mobile, tablet, desktop breakpoints
- **Luxury Design:** Cormorant Garamond + Montserrat, White/Black/Gold palette

---

## 🚀 Quick Start

```bash
npm install
npm start
```

Then open [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
akt-luxury/
├── public/
│   └── index.html
└── src/
    ├── App.js                    # Root app, routing state
    ├── index.js                  # React DOM entry
    ├── styles/
    │   └── global.css            # CSS variables, resets, animations
    ├── data/
    │   └── products.js           # All mock product & category data
    ├── components/
    │   ├── Navbar/               # Sticky nav with search + cart
    │   ├── Hero/                 # Auto-rotating hero slider
    │   ├── ProductCard/          # Reusable product card
    │   ├── CategoryGrid/         # Masonry-style category grid
    │   ├── PromoSection/         # Editorial promos + testimonials
    │   ├── Reviews/              # Review display + submission form
    │   ├── Footer/               # Links, newsletter, copyright
    │   └── UI/                   # GoldButton, StarRating, Badge, etc.
    └── pages/
        ├── HomePage.jsx          # Home with hero, featured, categories
        ├── ShopPage.jsx          # Filterable product grid
        ├── ProductPage.jsx       # Detail view with gallery & reviews
        ├── CartPage.jsx          # Cart with order summary
        └── AdminPage.jsx         # Product management dashboard
```

---

## 🎨 Design System

| Token         | Value                  |
|---------------|------------------------|
| Gold          | `#C9A84C`              |
| Black         | `#0A0A0A`              |
| White         | `#FAFAF8`              |
| Display Font  | Cormorant Garamond     |
| Body Font     | Montserrat             |

---

## ✦ To Add Real Products

Edit `src/data/products.js` — add objects following the existing structure:

```js
{
  id: 9,
  name: "Your Product Name",
  category: "accessories",      // lowercase, matches CATEGORIES
  price: 1200,                  // number in ₹
  badge: "New Arrival",         // or null
  image: "https://...",         // primary image URL
  images: ["https://..."],      // array for gallery
  description: "...",
  specs: { Key: "Value" },
  rating: 5.0,
  reviews: [],
}
```

Or use the **Admin Panel** (click the person icon in the navbar) to add products live.

---

© 2025 AKT-Luxury. All rights reserved.
