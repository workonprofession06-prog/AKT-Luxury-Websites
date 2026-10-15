import React from "react";
import "./Footer.css";

/* FIX 7: Footer links now use setPage() for SPA navigation.
   Each label maps to an internal page key. */
const LINKS = {
  Collections: [
    { label: "Watches",     page: "shop"        },
    { label: "Accessories", page: "shop"        },
    { label: "Clothing",    page: "shop"        },
    { label: "Fragrance",   page: "shop"        },
    { label: "Footwear",    page: "shop"        },
    { label: "Lifestyle",   page: "collections" },
  ],
  Services: [
    { label: "Authenticity",     page: "about"   },
    { label: "Gift Wrapping",    page: "contact" },
    { label: "Private Delivery", page: "contact" },
    { label: "Returns",          page: "contact" },
    { label: "Repairs",          page: "contact" },
  ],
  Company: [
    { label: "About",          page: "about"   },
    { label: "Careers",        page: "about"   },
    { label: "Press",          page: "about"   },
    { label: "Sustainability", page: "about"   },
    { label: "Contact",        page: "contact" },
  ],
  Legal: [
    { label: "Privacy Policy", page: "contact" },
    { label: "Terms of Use",   page: "contact" },
    { label: "Cookie Policy",  page: "contact" },
    { label: "Sitemap",        page: "home"    },
  ],
};

export default function Footer({ setPage }) {
  const go = (p) => { if (setPage) { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); } };

  return (
    <footer className="footer">
      <div className="footer__top container">
        <div className="footer__brand">
          <div className="footer__wordmark" onClick={() => go("home")} style={{ cursor: "pointer" }}>
            AKT<span>·</span>LUXURY
          </div>
          <div className="footer__sub">MAISON DE LUXE</div>
          <p className="footer__about">
            Purveyors of the world's finest goods. Discretion, artisanship, and timeless style since 2020.
          </p>
          <div className="footer__social">
            <a href="https://instagram.com" className="footer__social-link" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://pinterest.com"  className="footer__social-link" target="_blank" rel="noreferrer">Pinterest</a>
            <a href="https://linkedin.com"   className="footer__social-link" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>

        {Object.entries(LINKS).map(([col, links]) => (
          <div key={col} className="footer__col">
            <div className="footer__col-title">{col}</div>
            <ul className="footer__col-links">
              {links.map((item) => (
                <li key={item.label}>
                  {/* FIX 7: button triggers SPA navigation instead of href="#/" */}
                  <button className="footer__link" onClick={() => go(item.page)}>
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer__newsletter">
        <div className="container footer__newsletter-inner">
          <div className="footer__newsletter-text">
            <span className="section-label" style={{ color: "var(--gold)" }}>Stay Informed</span>
            <h3 className="footer__newsletter-title">Private Correspondence</h3>
          </div>
          <div className="footer__newsletter-form">
            <input type="email" placeholder="Your email address" className="footer__newsletter-input" />
            <button className="footer__newsletter-btn">Subscribe</button>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <div className="footer__copyright">© 2025 AKT-LUXURY. ALL RIGHTS RESERVED.</div>
          <div className="footer__tagline">✦ EXCELLENCE IN EVERY DETAIL ✦</div>
        </div>
      </div>
    </footer>
  );
}
