import React from "react";
import Hero from "../components/Hero";
import CategoryGrid from "../components/CategoryGrid";
import PromoSection from "../components/PromoSection";
import ProductCard from "../components/ProductCard";
import { SectionHeader, GoldButton } from "../components/UI";
import Footer from "../components/Footer";
import "./Pages.css";

export default function HomePage({ products, categories, setPage, setSelectedProduct, addToCart }) {
  const featured = products.slice(0, 4);

  return (
    <div className="page">
      <Hero setPage={setPage} />

      {/* Featured Products */}
      <section className="featured-section">
        <div className="container">
          <SectionHeader
            label="Handpicked For You"
            title="Featured Pieces"
            subtitle="A selection of our most coveted objects"
          />
          <div className="product-grid product-grid--4">
            {featured.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onView={(prod) => { setSelectedProduct(prod); setPage("product"); }}
                onAddToCart={addToCart}
              />
            ))}
          </div>
          <div className="section-cta">
            <GoldButton variant="outline" size="md" onClick={() => setPage("shop")}>
              View All Products
            </GoldButton>
          </div>
        </div>
      </section>

      <CategoryGrid categories={categories} setPage={setPage} />

      {/* Brand Promise */}
      <section className="brand-promise">
        <div className="container">
          <SectionHeader label="Our Promise" title="The AKT-Luxury Standard" />
          <div className="promise-grid">
            {[
              { icon: "✦", title: "Authenticated",   body: "Every piece accompanied by a certificate of provenance and authenticity." },
              { icon: "◆", title: "Curated",          body: "Our experts personally select each object against exacting quality standards." },
              { icon: "✧", title: "Discreet",         body: "Unmarked packaging and a private delivery option for absolute privacy." },
              { icon: "◇", title: "Timeless",         body: "Investing in objects built to last — and appreciate — across generations." },
            ].map((v) => (
              <div key={v.title} className="promise-item">
                <div className="promise-icon">{v.icon}</div>
                <h3 className="promise-title">{v.title}</h3>
                <p className="promise-body">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PromoSection setPage={setPage} />
      <Footer setPage={setPage} />
    </div>
  );
}
