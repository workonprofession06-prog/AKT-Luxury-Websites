import React from "react";
import { GoldButton } from "../components/UI";
import Footer from "../components/Footer";
import "./Pages.css";

export default function CartPage({ cart, setCart, setPage }) {
  const updateQty = (id, qty) => {
    if (qty < 1) setCart((c) => c.filter((i) => i.id !== id));
    else         setCart((c) => c.map((i) => (i.id === id ? { ...i, qty } : i)));
  };
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping = subtotal >= 50000 ? 0 : 1500;
  const total = subtotal + shipping;

  return (
    <div className="page">
      <div className="shop-header">
        <div className="container">
          <span className="section-label">Your Selection</span>
          <h1 className="shop-header__title">Shopping Cart</h1>
          <div className="divider-gold" style={{ margin: "16px auto 0" }} />
        </div>
      </div>

      <div className="cart-body container">
        {cart.length === 0 ? (
          <div className="shop-empty">
            <div className="shop-empty__icon">◇</div>
            <h2 className="shop-empty__title">Your cart is empty</h2>
            <p className="shop-empty__body">Discover our curated collection of luxury pieces.</p>
            <GoldButton onClick={() => setPage("shop")}>Continue Shopping</GoldButton>
          </div>
        ) : (
          <div className="cart-layout">
            {/* Items */}
            <div className="cart-items">
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item__image" onClick={() => setPage("product")} />
                  <div className="cart-item__info">
                    <div className="cart-item__category">{item.category}</div>
                    <div className="cart-item__name">{item.name}</div>
                    <div className="cart-item__price">₹{(item.price * item.qty).toLocaleString("en-IN")}</div>
                  </div>
                  <div className="cart-item__controls">
                    <div className="qty-control">
                      <button onClick={() => updateQty(item.id, item.qty - 1)}>−</button>
                      <span>{item.qty}</span>
                      <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
                    </div>
                    <button className="cart-item__remove" onClick={() => updateQty(item.id, 0)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="cart-summary">
              <h2 className="cart-summary__title">Order Summary</h2>
              <div className="cart-summary__row">
                <span>Subtotal ({cart.reduce((s, i) => s + i.qty, 0)} items)</span>
                <span>₹{subtotal.toLocaleString("en-IN")}</span>
              </div>
              <div className="cart-summary__row">
                <span>Shipping</span>
                <span>{shipping === 0 ? "Free" : `₹${shipping.toLocaleString("en-IN")}`}</span>
              </div>
              {shipping > 0 && (
                <div className="cart-summary__note">
                  Add ₹{(50000 - subtotal).toLocaleString("en-IN")} more for free shipping
                </div>
              )}
              <div className="cart-summary__divider" />
              <div className="cart-summary__total">
                <span>Total</span>
                <span>₹{total.toLocaleString("en-IN")}</span>
              </div>
              <GoldButton fullWidth size="lg" onClick={() => alert("Thank you for your order! Proceeding to checkout…")}>
                Proceed to Checkout
              </GoldButton>
              <button className="cart-summary__continue" onClick={() => setPage("shop")}>
                ← Continue Shopping
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer setPage={setPage} />
    </div>
  );
}
