import React, { useState } from "react";
import "./styles/global.css";

import Navbar           from "./components/Navbar";
import HomePage         from "./pages/HomePage";
import ShopPage         from "./pages/ShopPage";
import ProductPage      from "./pages/ProductPage";
import CartPage         from "./pages/CartPage";
import AdminPage        from "./pages/AdminPage";
/* ISSUE 4,5,6: New pages */
import CollectionsPage  from "./pages/CollectionsPage";
import AboutPage        from "./pages/AboutPage";
import ContactPage      from "./pages/ContactPage";

import { INITIAL_PRODUCTS, CATEGORIES } from "./data/products";

export default function App() {
  const [page, setPage]                       = useState("home");
  const [products, setProducts]               = useState(INITIAL_PRODUCTS);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart]                       = useState([]);
  const [searchQuery, setSearchQuery]         = useState("");

  const addToCart = (product) => {
    setCart((c) => {
      const exists = c.find((i) => i.id === product.id);
      if (exists) return c.map((i) => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      return [...c, { ...product, qty: 1 }];
    });
  };

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  const navigate = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Navbar
        currentPage={page}
        setPage={navigate}
        cartCount={cartCount}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {page === "home"        && <HomePage products={products} categories={CATEGORIES} setPage={navigate} setSelectedProduct={setSelectedProduct} addToCart={addToCart} />}
      {page === "shop"        && <ShopPage products={products} setPage={navigate} setSelectedProduct={setSelectedProduct} addToCart={addToCart} searchQuery={searchQuery} />}
      {page === "product"     && <ProductPage product={selectedProduct} products={products} setProducts={setProducts} addToCart={addToCart} setPage={navigate} />}
      {page === "cart"        && <CartPage cart={cart} setCart={setCart} setPage={navigate} />}
      {page === "admin"       && <AdminPage products={products} setProducts={setProducts} setPage={navigate} />}
      {page === "collections" && <CollectionsPage setPage={navigate} />}
      {page === "about"       && <AboutPage setPage={navigate} />}
      {page === "contact"     && <ContactPage setPage={navigate} />}
    </>
  );
}
