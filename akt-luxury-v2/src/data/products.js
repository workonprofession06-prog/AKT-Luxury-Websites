// ─── AKT-Luxury Mock Data ─────────────────────────────────────────────────

export const CATEGORIES = [
  {
    id: "watches",
    name: "Watches",
    description: "Swiss precision",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
  },
  {
    id: "accessories",
    name: "Accessories",
    description: "Refined details",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&q=80",
  },
  {
    id: "clothing",
    name: "Clothing",
    description: "Timeless tailoring",
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=500&q=80",
  },
  {
    id: "fragrance",
    name: "Fragrance",
    description: "Rare botanicals",
    /* FIX 2: Updated category image URL to match corrected product image */
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500&q=80",
  },
  {
    id: "footwear",
    name: "Footwear",
    description: "Handcrafted soles",
    image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=500&q=80",
  },
  {
    id: "lifestyle",
    name: "Lifestyle",
    description: "Objects of desire",
    image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=500&q=80",
  },
];

export const INITIAL_PRODUCTS = [
  {
    id: 1,
    name: "Obsidian Chronograph",
    category: "watches",
    price: 4850,
    badge: "Bestseller",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700&q=80",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700&q=80",
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=700&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=700&q=80",
    ],
    description:
      "Swiss-made automatic movement, 72-hour power reserve, sapphire crystal glass. 42mm PVD black case with genuine Italian calfskin strap. Water resistant to 100m. Presented in a handmade walnut box.",
    specs: { Movement: "Automatic", Case: "42mm PVD Black", Crystal: "Sapphire", Water: "100m" },
    rating: 4.9,
    reviews: [
      { id: 1, name: "James T.", rating: 5, comment: "Impeccable craftsmanship. Worth every rupee.", date: "2024-12-10" },
      { id: 2, name: "Priya M.", rating: 5, comment: "Absolutely stunning. Turns heads everywhere.", date: "2025-01-03" },
    ],
  },
  {
    id: 2,
    name: "Venetian Silk Tie",
    category: "accessories",
    price: 285,
    badge: null,
    image: "https://images.unsplash.com/photo-1611911813383-67769b37a149?w=700&q=80",
    images: ["https://images.unsplash.com/photo-1611911813383-67769b37a149?w=700&q=80"],
    description:
      "Hand-rolled seven-fold tie woven in Como, Italy. Pure silk interlining with mother-of-pearl keeper. A cornerstone of any refined wardrobe. Arrives gift-boxed.",
    specs: { Material: "100% Silk", Origin: "Como, Italy", Width: "8cm", Construction: "Seven-fold" },
    rating: 4.8,
    reviews: [
      { id: 1, name: "Arjun S.", rating: 5, comment: "The weight and sheen are extraordinary.", date: "2024-11-22" },
    ],
  },
  {
    id: 3,
    name: "Cashmere Overcoat",
    category: "clothing",
    price: 3200,
    badge: "New Arrival",
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=700&q=80",
    images: ["https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=700&q=80"],
    description:
      "Double-faced Scottish cashmere in heather charcoal. Fully canvassed construction with hand-stitched notch lapels. Horn buttons. A coat built to outlive fashion by decades.",
    specs: { Fabric: "Scottish Cashmere", Weight: "Double-faced", Lining: "Silk", Buttons: "Horn" },
    rating: 4.9,
    reviews: [
      { id: 1, name: "Rishi L.", rating: 5, comment: "The most luxurious coat I have ever owned.", date: "2025-01-05" },
    ],
  },
  {
    id: 4,
    name: "Oud Noir Parfum",
    category: "fragrance",
    price: 680,
    badge: "Limited",
    /* FIX 2: Primary card image — working fragrance photo */
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=700&q=80",
    /* FIX 3: Three gallery images for product detail page — all confirmed working */
    images: [
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=700&q=80",
      "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?w=700&q=80",
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=700&q=80",
    ],
    description:
      "An intoxicating journey through Laotian agarwood, black amber, and smoked vetiver. 100ml concentrated parfum, crafted in Grasse. Longevity exceeds 12 hours.",
    specs: { Volume: "100ml", Type: "Extrait de Parfum", Origin: "Grasse, France", Longevity: "12+ hours" },
    rating: 5.0,
    reviews: [
      { id: 1, name: "Isabella C.", rating: 5, comment: "Magnetic and deeply sophisticated.", date: "2025-02-01" },
    ],
  },
  {
    id: 5,
    name: "Noir Leather Wallet",
    category: "accessories",
    price: 495,
    badge: null,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=700&q=80",
    images: ["https://images.unsplash.com/photo-1627123424574-724758594e93?w=700&q=80"],
    description:
      "Full-grain vegetable-tanned French calfskin. Eight card slots, two bill compartments, one zipped pocket. Slim profile. Develops a rich patina over years of use.",
    specs: { Leather: "French Calfskin", Slots: "8 cards + 2 notes", Profile: "8mm slim", Tanning: "Vegetable" },
    rating: 4.7,
    reviews: [],
  },
  {
    id: 6,
    name: "Oxford Full Brogue",
    category: "footwear",
    price: 1150,
    badge: null,
    image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=700&q=80",
    images: ["https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=700&q=80"],
    description:
      "Goodyear-welted full brogue in museum-calf leather. Leather insole, leather outsole with rubber toe taps. Handcrafted in Northampton, England. Takes a deep, lasting shine.",
    specs: { Construction: "Goodyear Welt", Leather: "Museum Calf", Origin: "Northampton, UK", Sole: "Leather + Rubber tip" },
    rating: 4.9,
    reviews: [],
  },
  {
    id: 7,
    name: "Meridian Cufflinks",
    category: "accessories",
    price: 390,
    badge: null,
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=700&q=80",
    images: ["https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=700&q=80"],
    description:
      "18k gold-plated sterling silver body with hand-set Tahitian onyx cabochon. T-bar fastening with silicone grip. Presented in a handmade Italian leather box.",
    specs: { Material: "Sterling Silver", Plating: "18k Gold", Stone: "Tahitian Onyx", Closure: "T-bar" },
    rating: 4.8,
    reviews: [],
  },
  {
    id: 8,
    name: "Carrara Chess Set",
    category: "lifestyle",
    price: 2400,
    badge: "New Arrival",
    image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=700&q=80",
    images: ["https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=700&q=80"],
    description:
      "Italian Carrara white and Nero Marquina black marble. 40cm hand-polished board with felt base. Hand-carved, weighted pieces in a matched leather roll. A heirloom from day one.",
    specs: { Material: "Carrara & Nero Marquina", Board: "40cm × 40cm", Weight: "18kg", Base: "Genuine felt" },
    rating: 4.9,
    reviews: [],
  },
];

export const PROMO_BANNERS = [
  {
    id: 1,
    label: "New Season",
    title: "The Art of Dressing",
    subtitle: "Spring / Summer 2025 Collection — Now Available",
    cta: "Explore Collection",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1400&q=80",
    align: "left",
  },
  {
    id: 2,
    label: "Exclusive",
    title: "Rare Timepieces",
    subtitle: "Limited editions crafted for the discerning collector",
    cta: "View Watches",
    image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=1400&q=80",
    align: "right",
  },
];
