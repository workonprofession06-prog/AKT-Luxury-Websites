import React, { useState } from "react";
import { GoldButton } from "../components/UI";
import Footer from "../components/Footer";
import "./Pages.css";
import "./ContactPage.css";

/* Contact page — clean, premium form + info layout */
export default function ContactPage({ setPage }) {
  const [form, setForm]   = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent]   = useState(false);

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
  };

  return (
    <div className="page">
      {/* Header */}
      <div className="shop-header">
        <div className="container">
          <span className="section-label">We Are Listening</span>
          <h1 className="shop-header__title">Contact Us</h1>
          <div className="divider-gold" style={{ margin: "16px auto 0" }} />
        </div>
      </div>

      <div className="contact-body container">
        {/* Info column */}
        <div className="contact-info">
          <div className="contact-info__block">
            <div className="contact-info__icon">✦</div>
            <h3 className="contact-info__title">Private Concierge</h3>
            <p className="contact-info__body">
              For personal shopping, bespoke sourcing, or gift guidance, our concierge team is available Monday–Saturday, 10am–7pm IST.
            </p>
          </div>
          <div className="contact-info__block">
            <div className="contact-info__icon">◆</div>
            <h3 className="contact-info__title">Email Us</h3>
            <p className="contact-info__body">concierge@akt-luxury.com<br />We respond within 4 business hours.</p>
          </div>
          <div className="contact-info__block">
            <div className="contact-info__icon">◇</div>
            <h3 className="contact-info__title">Visit Us</h3>
            <p className="contact-info__body">
              AKT-Luxury Atelier<br />
              Bandra West, Mumbai — 400050<br />
              By appointment only.
            </p>
          </div>
          <div className="contact-info__block">
            <div className="contact-info__icon">✧</div>
            <h3 className="contact-info__title">Returns & Support</h3>
            <p className="contact-info__body">
              All returns are managed personally. Please include your order reference when contacting us.
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="contact-form-wrap">
          {sent ? (
            <div className="contact-success">
              <div className="contact-success__icon">✦</div>
              <h2 className="contact-success__title">Thank You, {form.name}</h2>
              <p className="contact-success__body">
                Your message has been received. A member of our team will respond within 4 business hours.
              </p>
              <GoldButton variant="outline" onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}>
                Send Another Message
              </GoldButton>
            </div>
          ) : (
            <>
              <h2 className="contact-form-title">Send a Message</h2>
              <div className="contact-form">
                <div className="contact-field contact-field--half">
                  <label className="contact-label">YOUR NAME *</label>
                  <input className="contact-input" value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    placeholder="e.g. Arjun Sharma" />
                </div>
                <div className="contact-field contact-field--half">
                  <label className="contact-label">EMAIL ADDRESS *</label>
                  <input className="contact-input" type="email" value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    placeholder="your@email.com" />
                </div>
                <div className="contact-field">
                  <label className="contact-label">SUBJECT</label>
                  <select className="contact-input contact-select" value={form.subject}
                    onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}>
                    <option value="">Select a topic</option>
                    <option>Product Enquiry</option>
                    <option>Private Concierge</option>
                    <option>Order Support</option>
                    <option>Returns & Exchanges</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="contact-field">
                  <label className="contact-label">YOUR MESSAGE *</label>
                  <textarea className="contact-input contact-textarea" rows={5} value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    placeholder="How may we assist you?" />
                </div>
                <GoldButton size="lg" onClick={handleSubmit} style={{ marginTop: 8 }}>
                  Send Message
                </GoldButton>
              </div>
            </>
          )}
        </div>
      </div>

      <Footer setPage={setPage} />
    </div>
  );
}
