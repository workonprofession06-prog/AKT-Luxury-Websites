import React, { useState } from "react";
import { StarRating, GoldButton } from "../UI";
import "./Reviews.css";

export default function Reviews({ reviews, onSubmit }) {
  const [form, setForm] = useState({ name: "", rating: 5, comment: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!form.name.trim() || !form.comment.trim()) {
      setError("Please fill in your name and review before submitting.");
      return;
    }
    onSubmit({ ...form, date: new Date().toISOString().split("T")[0], id: Date.now() });
    setSubmitted(true);
    setError("");
  };

  const avgRating = reviews.length
    ? (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1)
    : "—";

  return (
    <div className="reviews">
      {/* Summary */}
      <div className="reviews__summary">
        <div className="reviews__avg">{avgRating}</div>
        <div>
          <StarRating value={Math.round(Number(avgRating))} size={20} />
          <div className="reviews__count">{reviews.length} {reviews.length === 1 ? "review" : "reviews"}</div>
        </div>
      </div>

      {/* List */}
      <div className="reviews__list">
        {reviews.length === 0 && (
          <p className="reviews__empty">No reviews yet. Share your experience below.</p>
        )}
        {reviews.map((r) => (
          <div key={r.id} className="review-item">
            <div className="review-item__header">
              <div>
                <div className="review-item__name">{r.name}</div>
                <div className="review-item__date">{r.date}</div>
              </div>
              <StarRating value={r.rating} size={14} />
            </div>
            <p className="review-item__comment">"{r.comment}"</p>
          </div>
        ))}
      </div>

      {/* Form */}
      <div className="reviews__form">
        <h3 className="reviews__form-title">
          {submitted ? "Thank You" : "Leave a Review"}
        </h3>
        {submitted ? (
          <div className="reviews__success">
            <p>Your review has been submitted. We value your patronage.</p>
            <button className="reviews__again" onClick={() => { setSubmitted(false); setForm({ name: "", rating: 5, comment: "" }); }}>
              Write another review
            </button>
          </div>
        ) : (
          <div className="reviews__form-fields">
            {error && <div className="reviews__error">{error}</div>}

            <div className="reviews__field">
              <label className="reviews__label">YOUR NAME</label>
              <input
                className="reviews__input"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                placeholder="e.g. J. Sharma"
              />
            </div>

            <div className="reviews__field">
              <label className="reviews__label">YOUR RATING</label>
              <StarRating value={form.rating} onChange={(r) => setForm((f) => ({ ...f, rating: r }))} size={22} />
            </div>

            <div className="reviews__field">
              <label className="reviews__label">YOUR REVIEW</label>
              <textarea
                className="reviews__textarea"
                value={form.comment}
                onChange={(e) => setForm((f) => ({ ...f, comment: e.target.value }))}
                rows={4}
                placeholder="Share your experience with this piece…"
              />
            </div>

            <GoldButton onClick={handleSubmit}>Submit Review</GoldButton>
          </div>
        )}
      </div>
    </div>
  );
}
