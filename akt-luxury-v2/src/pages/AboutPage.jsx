import React from "react";
import { GoldButton, SectionHeader } from "../components/UI";
import Footer from "../components/Footer";
import "./Pages.css";
import "./AboutPage.css";

/* ISSUE 6: Professional About page */
const MILESTONES = [
  { year: "2020", title: "The Founding",      body: "AKT-Luxury was established with a singular conviction: that great objects deserve great stewardship. Our first atelier opened in Mumbai." },
  { year: "2021", title: "First Collection",  body: "Forty pieces. Forty clients. Every item hand-delivered. Our founding collection sold in eleven days and established the standard we hold today." },
  { year: "2022", title: "European Sourcing", body: "We established direct relationships with craftsmen in Northampton, Como, Grasse, and Geneva — bypassing middlemen to bring authentic quality closer." },
  { year: "2023", title: "10,000 Clients",    body: "A milestone we celebrate not for its scale but for what it represents: ten thousand individuals who trust us with their most considered purchases." },
  { year: "2025", title: "New Horizons",      body: "Our expanded digital flagship and private concierge service now serve clients across 40 countries, with discreet worldwide delivery." },
];

const VALUES = [
  { icon: "✦", title: "Provenance",     body: "We trace every object to its origin. Knowing where something comes from is the first step in understanding what it is worth." },
  { icon: "◆", title: "Restraint",      body: "We do not carry everything. We carry the right things. Our edit is small by design — because true curation requires the discipline to say no." },
  { icon: "✧", title: "Transparency",   body: "Our pricing reflects the actual value of craft, material, and origin — never inflated by trend or diminished by compromise." },
  { icon: "◇", title: "Permanence",     body: "We select objects that will outlast fashion. The question we ask of every piece: will someone still treasure this in thirty years?" },
];

export default function AboutPage({ setPage }) {
  return (
    <div className="page">
      {/* Hero */}
      <div className="about-hero">
        <div className="about-hero__bg" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&q=80)" }} />
        <div className="about-hero__overlay" />
        <div className="about-hero__content container">
          <span className="section-label">Our Story</span>
          <h1 className="about-hero__title">
            Built on the Belief<br />
            <em>that Excellence Endures</em>
          </h1>
          <p className="about-hero__sub">
            AKT-Luxury is not a marketplace. It is a point of view — a considered position on what quality means and who deserves it.
          </p>
        </div>
      </div>

      {/* Brand Introduction */}
      <section className="about-intro">
        <div className="container about-intro__grid">
          <div className="about-intro__image-wrap">
            <img src="https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&q=80" alt="AKT-Luxury Atelier" className="about-intro__image" />
            <div className="about-intro__image-frame" />
          </div>
          <div className="about-intro__content">
            <span className="section-label">Who We Are</span>
            <h2 className="about-intro__title">A Maison Built on Conviction</h2>
            <div className="divider-gold" style={{ margin: "18px 0" }} />
            <p className="about-intro__body">
              AKT-Luxury was founded on a straightforward premise: the world's finest objects were either inaccessible, inauthentic, or poorly presented. We set out to fix that.
            </p>
            <p className="about-intro__body">
              Every piece in our edit has been physically handled, verified, and approved by our team before it is offered to our clients. We have no algorithm selecting our inventory. Every object is chosen by a person who cares deeply about what it represents.
            </p>
            <p className="about-intro__body">
              We are not fast. We are not loud. We are not for everyone — and we believe that is precisely what makes us right for the people who find us.
            </p>
            <GoldButton onClick={() => setPage("shop")} style={{ marginTop: 8 }}>
              Explore The Collection
            </GoldButton>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="about-mission">
        <div className="container about-mission__grid">
          <div className="about-mission__card">
            <div className="about-mission__icon">◆</div>
            <h3 className="about-mission__heading">Our Mission</h3>
            <div className="divider-gold" style={{ margin: "14px 0" }} />
            <p className="about-mission__body">
              To connect discerning individuals with objects of exceptional quality — presented honestly, delivered discreetly, and guaranteed authentically. We measure success not by volume, but by the satisfaction of clients who return.
            </p>
          </div>
          <div className="about-mission__card about-mission__card--dark">
            <div className="about-mission__icon" style={{ color: "var(--gold)" }}>✦</div>
            <h3 className="about-mission__heading" style={{ color: "var(--white)" }}>Our Vision</h3>
            <div className="divider-gold" style={{ margin: "14px 0" }} />
            <p className="about-mission__body" style={{ color: "rgba(250,250,248,0.55)" }}>
              To become the most trusted name in luxury retail across South Asia and beyond — a house where the standard never drops, the edit never inflates, and the relationship with each client deepens over time.
            </p>
          </div>
        </div>
      </section>

      {/* Story Timeline */}
      <section className="about-timeline">
        <div className="container">
          <SectionHeader label="The Journey" title="Five Years of Excellence" center={true} />
          <div className="timeline">
            {MILESTONES.map((m, i) => (
              <div key={m.year} className={`timeline__item ${i % 2 === 0 ? "timeline__item--left" : "timeline__item--right"}`}>
                <div className="timeline__year">{m.year}</div>
                <div className="timeline__connector"><div className="timeline__dot" /></div>
                <div className="timeline__content">
                  <h3 className="timeline__title">{m.title}</h3>
                  <p className="timeline__body">{m.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmanship / Values */}
      <section className="about-values">
        <div className="container">
          <SectionHeader label="What We Stand For" title="The AKT-Luxury Principles" center={true} />
          <div className="about-values__grid">
            {VALUES.map((v) => (
              <div key={v.title} className="about-value-card">
                <div className="about-value-card__icon">{v.icon}</div>
                <h3 className="about-value-card__title">{v.title}</h3>
                <p className="about-value-card__body">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Mosaic */}
      <section className="about-mosaic">
        <div className="about-mosaic__grid">
          <div className="about-mosaic__cell about-mosaic__cell--tall">
            <img src="https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=700&q=80" alt="Craftsmanship" />
          </div>
          <div className="about-mosaic__cell">
            <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700&q=80" alt="Timepieces" />
          </div>
          <div className="about-mosaic__cell">
            <img src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=700&q=80" alt="Fragrance" />
          </div>
          <div className="about-mosaic__cell about-mosaic__cell--wide">
            <img src="https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=900&q=80" alt="Footwear" />
            <div className="about-mosaic__caption">
              <span>Handcrafted in Northampton, England</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container about-cta__inner">
          <span className="section-label">Begin Here</span>
          <h2 className="about-cta__title">Ready to Discover Something Extraordinary?</h2>
          <div className="about-cta__buttons">
            <GoldButton size="lg" onClick={() => setPage("shop")}>Shop the Collection</GoldButton>
            <GoldButton size="lg" variant="outline" onClick={() => setPage("contact")}>Contact Us</GoldButton>
          </div>
        </div>
      </section>

      <Footer setPage={setPage} />
    </div>
  );
}
