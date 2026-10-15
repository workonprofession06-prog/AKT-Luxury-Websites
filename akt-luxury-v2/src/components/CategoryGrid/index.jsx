import React from "react";
import { SectionHeader } from "../UI";
import "./CategoryGrid.css";

export default function CategoryGrid({ categories, setPage }) {
  return (
    <section className="cat-section">
      <div className="container">
        <SectionHeader label="Curated Collections" title="Shop by Category" />
        <div className="cat-grid">
          {categories.map((cat, i) => (
            <div
              key={cat.id}
              className={`cat-card ${i === 0 ? "cat-card--featured" : ""}`}
              onClick={() => setPage("shop")}
            >
              <img src={cat.image} alt={cat.name} className="cat-card__img" loading="lazy" />
              <div className="cat-card__overlay" />
              <div className="cat-card__content">
                <div className="cat-card__description">{cat.description}</div>
                <div className="cat-card__name">{cat.name}</div>
                <div className="cat-card__cta">
                  <span>Explore</span>
                  <span className="cat-card__arrow">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
