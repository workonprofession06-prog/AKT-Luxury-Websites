import React, { useState } from "react";
import "./UI.css";

// ─── Gold Button ─────────────────────────────────────────────────────────────
export const GoldButton = ({ children, onClick, variant = "solid", size = "md", fullWidth = false, style = {} }) => (
  <button
    className={`gold-btn gold-btn--${variant} gold-btn--${size}${fullWidth ? " gold-btn--full" : ""}`}
    onClick={onClick}
    style={style}
  >
    {children}
  </button>
);

// ─── Star Rating ──────────────────────────────────────────────────────────────
export const StarRating = ({ value = 0, onChange = null, size = 16 }) => {
  const [hover, setHover] = useState(0);
  return (
    <div className="star-rating" style={{ "--star-size": `${size}px` }}>
      {[1, 2, 3, 4, 5].map((s) => (
        <span
          key={s}
          className={`star ${s <= (hover || value) ? "star--filled" : ""} ${onChange ? "star--interactive" : ""}`}
          onClick={() => onChange && onChange(s)}
          onMouseEnter={() => onChange && setHover(s)}
          onMouseLeave={() => onChange && setHover(0)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

// ─── Badge ────────────────────────────────────────────────────────────────────
export const Badge = ({ children }) => <span className="badge">{children}</span>;

// ─── Section Header ───────────────────────────────────────────────────────────
export const SectionHeader = ({ label, title, subtitle, center = true }) => (
  <div className={`section-header ${center ? "section-header--center" : ""}`}>
    <span className="section-label">{label}</span>
    <h2 className="section-title" style={{ fontSize: "clamp(30px, 4vw, 50px)" }}>{title}</h2>
    {subtitle && <p className="section-subtitle">{subtitle}</p>}
    <div className="divider-gold" style={{ margin: center ? "18px auto 0" : "18px 0 0" }} />
  </div>
);

// ─── Tag ──────────────────────────────────────────────────────────────────────
export const Tag = ({ children, active, onClick }) => (
  <button className={`tag ${active ? "tag--active" : ""}`} onClick={onClick}>
    {children}
  </button>
);
