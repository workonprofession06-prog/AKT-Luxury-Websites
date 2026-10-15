import React, { useState } from "react";
import { StarRating, Badge, GoldButton } from "../UI";
import "./ProductCard.css";

export default function ProductCard({ product, onView, onAddToCart }) {
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.stopPropagation();
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <article
      className={`product-card ${hovered ? "product-card--hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onView(product)}
    >
      {/* Image */}
      <div className="product-card__image-wrap">
        <img
          src={product.image}
          alt={product.name}
          className="product-card__image"
          loading="lazy"
        />
        <div className="product-card__image-overlay" />

        {/* Badge */}
        {product.badge && (
          <div className="product-card__badge">
            <Badge>{product.badge}</Badge>
          </div>
        )}

        {/* Quick action */}
        <div className="product-card__quick-view">
          <GoldButton variant="ghost" size="sm" onClick={(e) => { e.stopPropagation(); onView(product); }}>
            Quick View
          </GoldButton>
        </div>
      </div>

      {/* Info */}
      <div className="product-card__info">
        <div className="product-card__category">{product.category}</div>
        <h3 className="product-card__name">{product.name}</h3>

        <div className="product-card__rating">
          <StarRating value={Math.round(product.rating)} size={13} />
          <span className="product-card__review-count">
            ({product.reviews.length})
          </span>
        </div>

        <div className="product-card__footer">
          <div className="product-card__price">
            ₹{product.price.toLocaleString("en-IN")}
          </div>
          <button
            className={`product-card__add ${added ? "product-card__add--added" : ""}`}
            onClick={handleAdd}
          >
            {added ? "✓" : "+"}
          </button>
        </div>
      </div>
    </article>
  );
}
