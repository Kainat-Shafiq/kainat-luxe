"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import "../../../styles/ProductDetails.css";
import { products } from "../../../data/products";
import { useCart } from "../../../context/CartContext";
import Link from "next/link";

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === Number(id)) || products[12];
  const [size, setSize] = useState("M");
  const [qty, setQty] = useState(1);
  const [mainImg, setMainImg] = useState(product.img);
  const [open, setOpen] = useState("");

  const thumbs = [product.img, "/images/shop-3.jpg", "/images/shop-8.jpg", "/images/shop-12.jpg"];
  const related = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <>
      <Navbar />
      <div className="detail-wrap">
        <div className="detail-left">
          <div className="thumbs">
            {thumbs.map((t, i) => (
              <img key={i} src={t} onClick={() => setMainImg(t)} className={mainImg === t ? "active-thumb" : ""} />
            ))}
          </div>
          <img src={mainImg} className="main-img" alt={product.name} />
        </div>

        <div className="detail-right">
          <h1>{product.name}</h1>
          <div className="price-row">
            <span className="new-price">${product.price}</span>
            {product.oldPrice && <span className="old-price">${product.oldPrice}</span>}
            {product.oldPrice && <span className="off">25% OFF</span>}
          </div>
          <div className="rating">★★★★★ <span>(4.8) 124 reviews</span></div>
          <p className="desc">Elegant black dress with intricate embroidery, perfect for formal and semi-formal occasions. Made from premium fabric for comfort and style.</p>

          <h4>Size</h4>
          <div className="sizes">
            {["XS","S","M","L","XL"].map(s => (
              <button key={s} className={size === s ? "size active-size" : "size"} onClick={() => setSize(s)}>{s}</button>
            ))}
          </div>

          <h4>Color</h4>
          <div className="color-dot"></div>

          <div className="cart-row">
            <div className="qty">
              <button onClick={() => setQty(Math.max(1, qty - 1))}>-</button>
              <span>{qty}</span>
              <button onClick={() => setQty(qty + 1)}>+</button>
            </div>
            <button className="add-cart" onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
          <p className="wishlist">♡ Add to Wishlist</p>

          {[["Product Details","Premium fabric, intricate gold embroidery, full sleeves, floor length."],["Shipping & Returns","Free shipping over $75. Easy 14 days return."],["Care Instructions","Dry clean only. Do not bleach. Cool iron."]].map(([t, txt]) => (
            <div className="accordion" key={t}>
              <div className="acc-head" onClick={() => setOpen(open === t ? "" : t)}><span>{t}</span><span>{open === t ? "-" : "+"}</span></div>
              {open === t && <p className="acc-body">{txt}</p>}
            </div>
          ))}
        </div>
      </div>

      <div className="related">
        <h2>You May Also Like</h2>
        <div className="related-grid">
          {related.map(p => (
            <Link href={`/product/${p.id}`} key={p.id} className="rel-card">
              <div className="rel-img"><img src={p.img} /><span className="rel-heart">♡</span></div>
              <h4>{p.name}</h4>
              <p>${p.price}</p>
              <div className="stars">★★★★★</div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}