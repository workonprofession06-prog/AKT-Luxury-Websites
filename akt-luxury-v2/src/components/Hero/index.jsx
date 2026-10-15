import React, { useState, useEffect } from "react";
import { GoldButton } from "../UI";
import "./Hero.css";

const SLIDES = [
  {
    label: "New Season 2025",
    title: ["Timeless", "Elegance"],
    subtitle: "Objects of enduring beauty for those who demand only the finest",
    cta: "Explore Collection",
    page: "shop",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&q=80",
    accent: "left",
  },
  {
    label: "Horology",
    title: ["The Art of", "Time"],
    subtitle: "Swiss-crafted timepieces that measure more than moments",
    cta: "Shop Watches",
    page: "shop",
    image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=1600&q=80",
    accent: "right",
  },
  {
    label: "Fragrance",
    title: ["Rare", "Botanicals"],
    subtitle: "Perfumes composed in Grasse, worn the world over",
    cta: "Discover Scents",
    page: "shop",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683702?w=1600&q=80",
    accent: "left",
  },
];

export default function Hero({ setPage }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setActiveSlide((s) => (s + 1) % SLIDES.length);
        setTransitioning(false);
      }, 400);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const goTo = (i) => {
    if (i === activeSlide) return;
    setTransitioning(true);
    setTimeout(() => { setActiveSlide(i); setTransitioning(false); }, 400);
  };

  const slide = SLIDES[activeSlide];

  return (
    <section className="hero">
      {/* Background images (preloaded) */}
      {SLIDES.map((s, i) => (
        <div
          key={i}
          className={`hero__bg ${i === activeSlide ? "hero__bg--active" : ""}`}
          style={{ backgroundImage: `url(${s.image})` }}
        />
      ))}

      {/* Overlay */}
      <div className={`hero__overlay hero__overlay--${slide.accent}`} />

      {/* Content */}
      <div className={`hero__content hero__content--${slide.accent} ${transitioning ? "hero__content--out" : "hero__content--in"}`}>
        <span className="section-label">{slide.label}</span>
        <h1 className="hero__title">
          {slide.title.map((line, i) => (
            <span key={i}>
              {i === 1 ? <em>{line}</em> : line}
              {i < slide.title.length - 1 && <br />}
            </span>
          ))}
        </h1>
        <p className="hero__subtitle">{slide.subtitle}</p>
        <div className="hero__ctas">
          <GoldButton size="lg" variant="solid" onClick={() => setPage(slide.page)}>
            {slide.cta}
          </GoldButton>
          <GoldButton size="lg" variant="ghost" onClick={() => setPage("shop")}>
            View All
          </GoldButton>
        </div>
      </div>

      {/* Dots */}
      <div className="hero__dots">
        {SLIDES.map((_, i) => (
          <button key={i} className={`hero__dot ${i === activeSlide ? "hero__dot--active" : ""}`} onClick={() => goTo(i)} />
        ))}
      </div>

      {/* Scroll cue */}
      <div className="hero__scroll-cue">
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div>

      {/* Stat strip */}
      <div className="hero__stats">
        {[
          { value: "500+", label: "Curated Pieces" },
          { value: "12", label: "Years of Excellence" },
          { value: "40+", label: "Countries Served" },
        ].map((s) => (
          <div key={s.label} className="hero__stat">
            <div className="hero__stat-value">{s.value}</div>
            <div className="hero__stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
