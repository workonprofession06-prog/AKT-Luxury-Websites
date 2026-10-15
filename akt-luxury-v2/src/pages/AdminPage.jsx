import React, { useState } from "react";
import { GoldButton, Badge } from "../components/UI";
import Footer from "../components/Footer";
import "./Pages.css";

const EMPTY_FORM = { name: "", price: "", category: "watches", description: "", image: "", badge: "" };

export default function AdminPage({ products, setProducts, setPage }) {
  const [tab, setTab]       = useState("products");
  const [form, setForm]     = useState(EMPTY_FORM);
  const [editing, setEditing] = useState(null);
  const [toast, setToast]   = useState("");

  const notify = (msg) => { setToast(msg); setTimeout(() => setToast(""), 3000); };

  const handleSave = () => {
    if (!form.name.trim() || !form.price || !form.image.trim()) {
      notify("⚠ Name, price, and image URL are required.");
      return;
    }
    const entry = {
      ...form,
      price: Number(form.price),
      badge: form.badge || null,
      images: [form.image],
      rating: 5.0,
      reviews: [],
      specs: {},
    };
    if (editing !== null) {
      setProducts((p) => p.map((x) => x.id === editing ? { ...x, ...entry } : x));
      notify("✓ Product updated successfully.");
      setEditing(null);
    } else {
      setProducts((p) => [...p, { ...entry, id: Date.now() }]);
      notify("✓ Product added successfully.");
    }
    setForm(EMPTY_FORM);
    setTab("products");
  };

  const startEdit = (p) => {
    setForm({ name: p.name, price: String(p.price), category: p.category, description: p.description, image: p.image, badge: p.badge || "" });
    setEditing(p.id);
    setTab("add");
  };

  const handleDelete = (id) => {
    if (!window.confirm("Are you sure you want to remove this product?")) return;
    setProducts((p) => p.filter((x) => x.id !== id));
    notify("✓ Product removed.");
  };

  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <div className="page">
      <div className="shop-header">
        <div className="container">
          <span className="section-label">Management Console</span>
          <h1 className="shop-header__title">Admin Dashboard</h1>
          <div className="divider-gold" style={{ margin: "16px auto 0" }} />
        </div>
      </div>

      {/* Toast */}
      {toast && <div className="admin-toast">{toast}</div>}

      <div className="container" style={{ paddingTop: 48, paddingBottom: 96 }}>
        {/* Stats */}
        <div className="admin-stats">
          {[
            { label: "Products", value: products.length },
            { label: "Categories", value: new Set(products.map((p) => p.category)).size },
            { label: "Total Reviews", value: products.reduce((s, p) => s + p.reviews.length, 0) },
            { label: "Avg Rating", value: products.length ? (products.reduce((s, p) => s + p.rating, 0) / products.length).toFixed(1) : "—" },
          ].map((s) => (
            <div key={s.label} className="admin-stat">
              <div className="admin-stat__value">{s.value}</div>
              <div className="admin-stat__label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="admin-tabs">
          {[{ id: "products", label: `All Products (${products.length})` }, { id: "add", label: editing ? "Edit Product" : "Add New Product" }].map((t) => (
            <button key={t.id} className={`admin-tab ${tab === t.id ? "admin-tab--active" : ""}`} onClick={() => { if (t.id === "products") { setEditing(null); setForm(EMPTY_FORM); } setTab(t.id); }}>
              {t.label}
            </button>
          ))}
          <div style={{ marginLeft: "auto" }}>
            <GoldButton size="sm" onClick={() => { setForm(EMPTY_FORM); setEditing(null); setTab("add"); }}>
              + Add Product
            </GoldButton>
          </div>
        </div>

        {/* Products List */}
        {tab === "products" && (
          <div className="admin-list">
            {products.map((p) => (
              <div key={p.id} className="admin-row">
                <img src={p.image} alt={p.name} className="admin-row__img" />
                <div className="admin-row__info">
                  <div className="admin-row__name">{p.name} {p.badge && <Badge>{p.badge}</Badge>}</div>
                  <div className="admin-row__meta">
                    <span>{p.category}</span>
                    <span>·</span>
                    <span>₹{p.price.toLocaleString("en-IN")}</span>
                    <span>·</span>
                    <span>★ {p.rating.toFixed(1)}</span>
                    <span>·</span>
                    <span>{p.reviews.length} reviews</span>
                  </div>
                </div>
                <div className="admin-row__actions">
                  <button className="admin-btn admin-btn--edit" onClick={() => startEdit(p)}>Edit</button>
                  <button className="admin-btn admin-btn--delete" onClick={() => handleDelete(p.id)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Add/Edit Form */}
        {tab === "add" && (
          <div className="admin-form">
            <h2 className="admin-form__title">{editing ? "Edit Product" : "Add New Product"}</h2>
            <div className="admin-form__grid">
              {[
                { label: "Product Name *", key: "name",  placeholder: "e.g. Obsidian Chronograph" },
                { label: "Price (₹) *",   key: "price", placeholder: "e.g. 4850", type: "number" },
                { label: "Image URL *",   key: "image", placeholder: "https://images.unsplash.com/…" },
                { label: "Badge (optional)", key: "badge", placeholder: "e.g. New Arrival, Limited" },
              ].map((f) => (
                <div key={f.key} className="admin-form__field">
                  <label className="reviews__label">{f.label.toUpperCase()}</label>
                  <input
                    type={f.type || "text"}
                    className="reviews__input"
                    value={form[f.key]}
                    onChange={(e) => setForm((x) => ({ ...x, [f.key]: e.target.value }))}
                    placeholder={f.placeholder}
                  />
                </div>
              ))}

              <div className="admin-form__field">
                <label className="reviews__label">CATEGORY</label>
                <select className="filter-select" value={form.category} onChange={(e) => setForm((x) => ({ ...x, category: e.target.value }))}>
                  {[...categories, "other"].map((c) => <option key={c} value={c}>{c.charAt(0).toUpperCase() + c.slice(1)}</option>)}
                </select>
              </div>

              <div className="admin-form__field admin-form__field--full">
                <label className="reviews__label">DESCRIPTION</label>
                <textarea
                  className="reviews__textarea"
                  rows={4}
                  value={form.description}
                  onChange={(e) => setForm((x) => ({ ...x, description: e.target.value }))}
                  placeholder="Describe the piece in detail…"
                />
              </div>

              {/* Preview */}
              {form.image && (
                <div className="admin-form__field">
                  <label className="reviews__label">IMAGE PREVIEW</label>
                  <img
                    src={form.image}
                    alt="preview"
                    className="admin-form__preview"
                    onError={(e) => { e.target.style.display = "none"; }}
                  />
                </div>
              )}
            </div>

            <div className="admin-form__footer">
              <GoldButton size="lg" onClick={handleSave}>
                {editing ? "Update Product" : "Add Product"}
              </GoldButton>
              <GoldButton size="lg" variant="outline" onClick={() => { setForm(EMPTY_FORM); setEditing(null); setTab("products"); }}>
                Cancel
              </GoldButton>
            </div>
          </div>
        )}
      </div>
      <Footer setPage={setPage} />
    </div>
  );
}
