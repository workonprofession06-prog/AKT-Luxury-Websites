import React, { useState, useMemo } from "react";
import ProductCard from "../components/ProductCard";
import { SectionHeader, Tag, GoldButton } from "../components/UI";
import Footer from "../components/Footer";
import "./Pages.css";

const SORT_OPTIONS = [
  { value: "default",    label: "Default" },
  { value: "price-asc",  label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating",     label: "Top Rated" },
  { value: "newest",     label: "Newest First" },
];

export default function ShopPage({ products, setPage, setSelectedProduct, addToCart, searchQuery }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [sortBy, setSortBy]                 = useState("default");
  const [maxPrice, setMaxPrice]             = useState(10000);
  const [sidebarOpen, setSidebarOpen]       = useState(false);

  const categories = ["all", ...new Set(products.map((p) => p.category))];
  const maxPossible = Math.max(...products.map((p) => p.price));

  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      const matchCat = activeCategory === "all" || p.category === activeCategory;
      const matchSearch = !searchQuery ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchPrice = p.price <= maxPrice;
      return matchCat && matchSearch && matchPrice;
    });
    if (sortBy === "price-asc")  list = [...list].sort((a, b) => a.price - b.price);
    if (sortBy === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sortBy === "rating")     list = [...list].sort((a, b) => b.rating - a.rating);
    if (sortBy === "newest")     list = [...list].sort((a, b) => b.id - a.id);
    return list;
  }, [products, activeCategory, sortBy, maxPrice, searchQuery]);

  return (
    <div className="page">
      {/* Page header */}
      <div className="shop-header">
        <div className="container">
          <span className="section-label">The Collection</span>
          <h1 className="shop-header__title">All Products</h1>
          <div className="divider-gold" style={{ margin: "16px auto 0" }} />
        </div>
      </div>

      <div className="shop-body container">
        {/* Sidebar toggle (mobile) */}
        <button className="shop-sidebar-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? "✕ Close Filters" : "⊟ Filters"}
        </button>

        {/* Sidebar */}
        <aside className={`shop-sidebar ${sidebarOpen ? "shop-sidebar--open" : ""}`}>
          {/* Category filter */}
          <div className="filter-group">
            <div className="filter-group__label">Category</div>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-option ${activeCategory === cat ? "filter-option--active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                <span>{cat.charAt(0).toUpperCase() + cat.slice(1)}</span>
                <span className="filter-option__count">
                  ({products.filter((p) => cat === "all" || p.category === cat).length})
                </span>
              </button>
            ))}
          </div>

          {/* Price filter */}
          <div className="filter-group">
            <div className="filter-group__label">Max Price</div>
            <div className="filter-price-value">
              ₹{maxPrice.toLocaleString("en-IN")}
            </div>
            <input
              type="range"
              min={500}
              max={maxPossible}
              step={100}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="filter-range"
            />
            <div className="filter-range-labels">
              <span>₹500</span>
              <span>₹{maxPossible.toLocaleString("en-IN")}</span>
            </div>
          </div>

          {/* Sort */}
          <div className="filter-group">
            <div className="filter-group__label">Sort By</div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="filter-select"
            >
              {SORT_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>

          {/* Reset */}
          <button className="filter-reset" onClick={() => { setActiveCategory("all"); setSortBy("default"); setMaxPrice(maxPossible); }}>
            Reset All Filters
          </button>
        </aside>

        {/* Product area */}
        <div className="shop-main">
          <div className="shop-bar">
            <div className="shop-bar__count">
              {filtered.length} {filtered.length === 1 ? "piece" : "pieces"} found
              {searchQuery && <span> for "{searchQuery}"</span>}
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="shop-empty">
              <div className="shop-empty__icon">◇</div>
              <h2 className="shop-empty__title">No pieces found</h2>
              <p className="shop-empty__body">Try adjusting your filters or search terms.</p>
              <GoldButton variant="outline" onClick={() => { setActiveCategory("all"); setSortBy("default"); setMaxPrice(maxPossible); }}>
                Reset Filters
              </GoldButton>
            </div>
          ) : (
            <div className="product-grid product-grid--3">
              {filtered.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  onView={(prod) => { setSelectedProduct(prod); setPage("product"); }}
                  onAddToCart={addToCart}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer setPage={setPage} />
    </div>
  );
}
