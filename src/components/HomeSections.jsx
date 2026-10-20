"use client";
import Link from "next/link";
import "../styles/HomeSections.css";
import { useCart } from "../context/CartContext";

// const categories = [
//   { name: "Dresses", img: "/images/cat-dresses.jpg" },
//   { name: "Abayas", img: "/images/cat-abayas.jpg" },
//   { name: "Bottoms", img: "/images/cat-bottoms.jpg" },
//   { name: "Accessories", img: "/images/cat-accessories.jpg" },
// ];
const categories = [
  { name: "Dresses", img: "/images/dress-5.jpg" },
  { name: "Abayas", img: "/images/abaya-5.jpg" },
  { name: "Bottoms", img: "/images/cat-bottoms.jpg" },
  { name: "Accessories", img: "/images/accessories-4.jpg" },
];


// const products = [
//   { id: 1, name: "Rose Embroidered Dress", price: 8500, img: "/images/product-1.jpg" },
//   { id: 2, name: "Ivory Classic Dress", price: 7200, img: "/images/product-2.jpg" },
//   { id: 3, name: "Noor Black Abaya", price: 9900, img: "/images/product-3.jpg" },
//   { id: 4, name: "White Formal Shirt", price: 4500, img: "/images/product-4.jpg" },
// ];
const products = [
  { id: 1, name: "Pastel Pink Embroidered Dress", price: 8500, img: "/images/dress-5.jpg" },
  { id: 2, name: "Royal Blue Embroidered Dress", price: 9200, img: "/images/dress-7.jpg" },
  { id: 3, name: "Black Open Flow Abaya", price: 9900, img: "/images/abaya-6.jpg" },
  { id: 4, name: "Gold Jewellery Set", price: 4500, img: "/images/jewellery-1.jpg" },
];
export default function HomeSections() {
  const { addToCart } = useCart();
  return (
    <div className="home-sections">
      <div className="features">
        <div className="feature">
          <div className="feature-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7h11v8H3zM14 10h4l3 3v2h-7z"/><circle cx="7" cy="17" r="1.6"/><circle cx="17" cy="17" r="1.6"/></svg>
          </div>
          <div><h4>Free Shipping</h4><p>On orders over $50</p></div>
        </div>
        <div className="feature">
          <div className="feature-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 14 4 9l5-5"/><path d="M4 9h10.5A5.5 5.5 0 0 1 20 14.5 5.5 5.5 0 0 1 14.5 20H11"/></svg>
          </div>
          <div><h4>Easy Returns</h4><p>Within 7 days</p></div>
        </div>
        <div className="feature">
          <div className="feature-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>
          </div>
          <div><h4>Secure Payments</h4><p>100% safe & secure</p></div>
        </div>
      </div>

      <div className="section-head">
        <h2>Shop by Category</h2>
        <Link href="/shop">View All →</Link>
      </div>
      <div className="grid-4">
        {categories.map((c) => (
          <Link href="/shop" key={c.name} className="cat-card">
            <img src={c.img} alt={c.name} />
            <span>{c.name}</span>
          </Link>
        ))}
      </div>

      <div className="section-head">
        <h2>Best Sellers</h2>
        <Link href="/shop">View All →</Link>
      </div>
      <div className="grid-4">
        {products.map((p) => (
          <div key={p.id} className="product-card">
            <div className="product-img">
              <img src={p.img} alt={p.name} />
              <button className="heart-btn">♡</button>
            </div>
            <h4>{p.name}</h4>
            <p>Rs. {p.price}</p>
            <button className="add-btn" onClick={() => addToCart(p)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}