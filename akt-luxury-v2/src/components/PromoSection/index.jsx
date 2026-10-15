import React from "react";
import { GoldButton, SectionHeader } from "../UI";
import "./PromoSection.css";

const PROMOS = [
  {
    label: "New Season",
    title: "The Art of Dressing",
    body: "Spring / Summer 2025 — A new chapter written in rare fabrics, measured cuts, and considered details.",
    cta: "View Collection",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=900&q=80",
    flip: false,
  },
  {
    label: "Horology",
    title: "Instruments of Time",
    body: "Each watch in our collection undergoes 500+ hours of testing. Precision is not a feature — it is a philosophy.",
    cta: "Shop Watches",
    image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=900&q=80",
    flip: true,
  },
];

const TESTIMONIALS = [
  { quote: "AKT-Luxury redefined my understanding of quality. Every detail speaks of intention.", name: "Arjun Sharma", title: "Director, Mumbai" },
  { quote: "The cashmere coat arrived and I immediately understood why true luxury commands a premium.", name: "Priya Nair", title: "Architect, Delhi" },
  { quote: "I have shopped across London and Paris. AKT-Luxury rivals any European maison.", name: "Rohan Kapoor", title: "Finance, Bengaluru" },
];

export default function PromoSection({ setPage }) {
  return (
    <>
      {/* Editorial Promos */}
      <section className="promo-section">
        <div className="container">
          {PROMOS.map((promo, i) => (
            <div key={i} className={`promo ${promo.flip ? "promo--flip" : ""}`}>
              <div className="promo__image-wrap">
                <img src={promo.image} alt={promo.title} className="promo__image" loading="lazy" />
                <div className="promo__image-frame" />
              </div>
              <div className="promo__content">
                <span className="section-label">{promo.label}</span>
                <h2 className="promo__title">{promo.title}</h2>
                <div className="divider-gold" style={{ margin: "18px 0" }} />
                <p className="promo__body">{promo.body}</p>
                <GoldButton onClick={() => setPage("shop")} size="md">{promo.cta}</GoldButton>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dark CTA Banner */}
      <section className="cta-banner">
        <div className="cta-banner__bg" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1600&q=80)" }} />
        <div className="cta-banner__overlay" />
        <div className="cta-banner__content container">
          <span className="section-label">Members Only</span>
          <h2 className="cta-banner__title">Join the Circle</h2>
          <p className="cta-banner__subtitle">Access early releases, private sales, and a dedicated concierge service.</p>
          <GoldButton size="lg" onClick={() => setPage("shop")}>Become a Member</GoldButton>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <SectionHeader label="Clientele" title="Words from Our Patrons" />
          <div className="testimonials__grid">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="testimonial">
                <div className="testimonial__quote-mark">"</div>
                <p className="testimonial__quote">{t.quote}</p>
                <div className="testimonial__divider" />
                <div className="testimonial__name">{t.name}</div>
                <div className="testimonial__title">{t.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
