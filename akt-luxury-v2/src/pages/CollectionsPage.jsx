import React, { useState } from "react";
import { SectionHeader, GoldButton } from "../components/UI";
import Footer from "../components/Footer";
import "./Pages.css";
import "./CollectionsPage.css";

/* ISSUE 5: Collections page — 7 curated collection cards */
const COLLECTIONS = [
  {
    id: 1,
    label: "Just Arrived",
    title: "New Arrivals",
    description: "The freshest pieces to enter the AKT-Luxury atelier — each one vetted, authenticated, and ready to be coveted.",
    count: "24 pieces",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=900&q=80",
    tag: "New",
  },
  {
    id: 2,
    label: "Editor's Choice",
    title: "Featured Collection",
    description: "Our most celebrated objects, selected by the editorial team for their extraordinary craft and timeless appeal.",
    count: "18 pieces",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900&q=80",
    tag: "Featured",
  },
  {
    id: 3,
    label: "The Finest",
    title: "Premium Collection",
    description: "Reserved for those who seek the absolute pinnacle — materials of rare provenance, made by the world's most skilled artisans.",
    count: "12 pieces",
    image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=900&q=80",
    tag: "Premium",
  },
  {
    id: 4,
    label: "Rare Objects",
    title: "Limited Edition",
    description: "Produced in quantities of fifty or fewer. Once gone, they are gone. Each carries a numbered certificate of authenticity.",
    count: "8 pieces",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683702?w=900&q=80",
    tag: "Limited",
  },
  {
    id: 5,
    label: "Most Loved",
    title: "Best Sellers",
    description: "The objects our clients return to, gift, and recommend. Proven, beloved, and always worth owning.",
    count: "32 pieces",
    image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=900&q=80",
    tag: "Popular",
  },
  {
    id: 6,
    label: "Right Now",
    title: "Trending Now",
    description: "The objects the world is talking about — pieces gaining momentum among collectors and style authorities globally.",
    count: "20 pieces",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=900&q=80",
    tag: "Trending",
  },
  {
    id: 7,
    label: "Season 2025",
    title: "Seasonal Picks",
    description: "Objects chosen specifically for the current season — relevant, inspired, and resonant with where we are right now.",
    count: "16 pieces",
    image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=900&q=80",
    tag: "Seasonal",
  },
];

export default function CollectionsPage({ setPage }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="page">
      {/* Page Header */}
      <div className="shop-header">
        <div className="container">
          <span className="section-label">Curated For You</span>
          <h1 className="shop-header__title">Collections</h1>
          <div className="divider-gold" style={{ margin: "16px auto 0" }} />
        </div>
      </div>

      {/* Intro */}
      <div className="collections-intro container">
        <p className="collections-intro__text">
          Each collection at AKT-Luxury is assembled with intention. No object earns a place here by accident — every piece is considered, questioned, and ultimately chosen because it meets our singular standard of excellence.
        </p>
      </div>

      {/* Collection Grid */}
      <div className="collections-grid container">
        {COLLECTIONS.map((col, i) => (
          <article
            key={col.id}
            className={`col-card ${i === 0 ? "col-card--hero" : ""} ${hovered === col.id ? "col-card--hovered" : ""}`}
            onMouseEnter={() => setHovered(col.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="col-card__img-wrap">
              <img src={col.image} alt={col.title} className="col-card__img" loading="lazy" />
              <div className="col-card__img-overlay" />
            </div>
            <div className="col-card__body">
              <div className="col-card__tag">{col.tag}</div>
              <span className="section-label" style={{ color: "var(--gold)", marginBottom: 8 }}>{col.label}</span>
              <h2 className="col-card__title">{col.title}</h2>
              <p className="col-card__desc">{col.description}</p>
              <div className="col-card__footer">
                <span className="col-card__count">{col.count}</span>
                <GoldButton size="sm" variant="outline" onClick={() => setPage("shop")}>
                  View Collection →
                </GoldButton>
              </div>
            </div>
          </article>
        ))}
      </div>

      <Footer setPage={setPage} />
    </div>
  );
}
