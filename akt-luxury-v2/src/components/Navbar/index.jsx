import React, { useState, useEffect } from "react";
import "./Navbar.css";

/* FIX 4: Each nav link now maps to its own unique page key */
const NAV_LINKS = [
  { label: "Home",        page: "home"        },
  { label: "Shop",        page: "shop"        },
  { label: "Collections", page: "collections" },
  { label: "About",       page: "about"       },
  { label: "Contact",     page: "contact"     },
];

export default function Navbar({ currentPage, setPage, cartCount, searchQuery, setSearchQuery }) {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Marquee Announcement Bar */}
      <div className="marquee-bar">
        <div className="marquee-track">
          {Array(4).fill("  ✦  Free Shipping Over ₹50,000  ✦  Authenticity Guaranteed  ✦  Complimentary Gift Wrapping  ✦  New Season Now Arrived  ").map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
        <div className="navbar__inner">

          {/* Hamburger (mobile) */}
          <button className="navbar__hamburger" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
            <span /><span /><span />
          </button>

          {/* Logo */}
          <div className="navbar__logo" onClick={() => { setPage("home"); setMobileOpen(false); }}>
            <div className="navbar__logo-wordmark">
              AKT<span className="navbar__logo-dot">·</span>LUXURY
            </div>
            <div className="navbar__logo-sub">MAISON DE LUXE</div>
          </div>

          {/* Desktop Links */}
          <ul className="navbar__links">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <button
                  className={`navbar__link ${currentPage === link.page ? "navbar__link--active" : ""}`}
                  onClick={() => setPage(link.page)}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Right Actions */}
          <div className="navbar__actions">
            {/* Search */}
            <div className={`navbar__search ${searchOpen ? "navbar__search--open" : ""}`}>
              <input
                type="text"
                placeholder="Search…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => { setSearchOpen(true); setPage("shop"); }}
                onBlur={() => setTimeout(() => setSearchOpen(false), 200)}
              />
              <button className="navbar__search-icon" onClick={() => setSearchOpen(!searchOpen)}>⌕</button>
            </div>

            {/* Cart */}
            <button className="navbar__cart" onClick={() => setPage("cart")}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              {cartCount > 0 && <span className="navbar__cart-count">{cartCount > 99 ? "99+" : cartCount}</span>}
            </button>

            {/* Admin */}
            <button className="navbar__admin" onClick={() => setPage("admin")}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`navbar__mobile ${mobileOpen ? "navbar__mobile--open" : ""}`}>
          {NAV_LINKS.map((link) => (
            <button key={link.label} className="navbar__mobile-link" onClick={() => { setPage(link.page); setMobileOpen(false); }}>
              {link.label}
            </button>
          ))}
          <button className="navbar__mobile-link" onClick={() => { setPage("cart"); setMobileOpen(false); }}>
            Cart {cartCount > 0 && `(${cartCount})`}
          </button>
          <button className="navbar__mobile-link" onClick={() => { setPage("admin"); setMobileOpen(false); }}>
            Admin Panel
          </button>
        </div>
      </nav>
    </>
  );
}
