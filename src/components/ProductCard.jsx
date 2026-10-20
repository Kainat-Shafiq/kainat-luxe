"use client";
import "../styles/ProductCard.css";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
       const { addToCart = () => {} } = useCart() || {};
  return (
    <div className="card">
      <img src={product.img} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Rs. {product.price.toLocaleString()}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}