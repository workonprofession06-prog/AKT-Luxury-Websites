import React, { useState } from "react";
import { StarRating, GoldButton } from "../components/UI";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";
import "./Pages.css";

export default function ProductPage({ product, products, setProducts, addToCart, setPage }) {
  const [qty, setQty]             = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [addedMsg, setAddedMsg]   = useState(false);

  if (!product) {
    return (
      <div style={{ textAlign: "center", padding: "120px 5%" }}>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: 36, marginBottom: 20 }}>Product not found</h2>
        <GoldButton onClick={() => setPage("shop")}>Back to Shop</GoldButton>
      </div>
    );
  }

  // Always read fresh from products state
  const current = products.find((p) => p.id === product.id) || product;

  const handleAddToCart = () => {
    for (let i = 0; i < qty; i++) addToCart(current);
    setAddedMsg(true);
    setTimeout(() => setAddedMsg(false), 2200);
  };

  const handleReviewSubmit = (review) => {
    const totalRating = current.reviews.reduce((s, r) => s + r.rating, 0) + review.rating;
    const newCount    = current.reviews.length + 1;
    const newRating   = totalRating / newCount;
    setProducts((prev) =>
      prev.map((p) =>
        p.id === current.id
          ? { ...p, reviews: [...p.reviews, review], rating: newRating }
          : p
      )
    );
  };

  return (
    <div className="page">
      {/* Breadcrumb */}
      <div className="breadcrumb container">
        <button onClick={() => setPage("home")}>Home</button>
        <span>/</span>
        <button onClick={() => setPage("shop")}>Shop</button>
        <span>/</span>
        <span>{current.name}</span>
      </div>

      {/* Product Layout */}
      <div className="product-detail container">
        {/* Left — Images */}
        <div className="product-detail__gallery">
          <div className="product-detail__main-image">
            <img src={current.images[activeImg]} alt={current.name} loading="eager" />
            <div className="product-detail__image-frame" />
          </div>
          {current.images.length > 1 && (
            <div className="product-detail__thumbs">
              {current.images.map((img, i) => (
                <button
                  key={i}
                  className={`product-detail__thumb ${i === activeImg ? "product-detail__thumb--active" : ""}`}
                  onClick={() => setActiveImg(i)}
                >
                  <img src={img} alt={`View ${i + 1}`} />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right — Info */}
        <div className="product-detail__info">
          <div className="product-detail__category">{current.category}</div>
          <h1 className="product-detail__name">{current.name}</h1>

          {/* Rating */}
          <div className="product-detail__rating">
            <StarRating value={Math.round(current.rating)} size={18} />
            <span className="product-detail__rating-text">
              {current.rating.toFixed(1)} · {current.reviews.length}{" "}
              {current.reviews.length === 1 ? "review" : "reviews"}
            </span>
          </div>

          {/* Price */}
          <div className="product-detail__price">
            ₹{current.price.toLocaleString("en-IN")}
          </div>

          {/* Description */}
          <div className="product-detail__divider" />
          <p className="product-detail__description">{current.description}</p>

          {/* Specs */}
          {current.specs && (
            <div className="product-detail__specs">
              {Object.entries(current.specs).map(([k, v]) => (
                <div key={k} className="product-detail__spec">
                  <span className="product-detail__spec-key">{k}</span>
                  <span className="product-detail__spec-val">{v}</span>
                </div>
              ))}
            </div>
          )}

          <div className="product-detail__divider" />

          {/* Qty + Cart */}
          <div className="product-detail__actions">
            <div className="qty-control">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))}>−</button>
              <span>{qty}</span>
              <button onClick={() => setQty((q) => q + 1)}>+</button>
            </div>
            <GoldButton fullWidth onClick={handleAddToCart} size="lg">
              {addedMsg ? "✓ Added to Cart" : "Add to Cart"}
            </GoldButton>
          </div>

          {/* Perks */}
          <div className="product-detail__perks">
            {["Free Shipping", "Authenticity Certified", "30-Day Returns", "Gift Wrapping"].map((perk) => (
              <div key={perk} className="product-detail__perk">
                <span className="product-detail__perk-icon">✦</span>
                {perk}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className="product-reviews container">
        <h2 className="product-reviews__title">Client Reviews</h2>
        <div className="product-detail__divider" style={{ marginBottom: 0 }} />
        <Reviews reviews={current.reviews} onSubmit={handleReviewSubmit} />
      </div>

      <Footer setPage={setPage} />
    </div>
  );
}
