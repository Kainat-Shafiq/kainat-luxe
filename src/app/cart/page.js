"use client";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../styles/Cart.css";
import { useCart } from "../../context/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart, updateQty } = useCart();

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <>
      <Navbar />
      <div className="cart-wrap">
        <h1>Your Cart ({cart.length})</h1>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty</p>
            <Link href="/shop" className="continue-btn">← Continue Shopping</Link>
          </div>
        ) : (
          <div className="cart-layout">
            {/* LEFT - ITEMS LIST */}
            <div className="cart-items">
              {cart.map((item) => (
                <div className="cart-item" key={item.id + (item.size || "")}>
                  <img src={item.img} alt={item.name} />
                  <div className="item-info">
                    <h4>{item.name}</h4>
                    <p>Color: {item.color || "Black"} &nbsp;|&nbsp; Size: {item.size || "M"}</p>
                    <p className="item-price">${item.price}</p>
                    <div className="qty-box">
                      <button onClick={() => updateQty(item.id, Math.max(1, item.qty - 1))}>-</button>
                      <span>{item.qty}</span>
                      <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
                    </div>
                  </div>
                  <div className="item-right">
                    <p>${(item.price * item.qty).toFixed(2)}</p>
                    <button className="remove-btn" onClick={() => removeFromCart(item.id)}>✕</button>
                  </div>
                </div>
              ))}
              <Link href="/shop" className="continue-link">← Continue Shopping</Link>
            </div>

            {/* RIGHT - ORDER SUMMARY */}
            <div className="summary">
              <h3>Order Summary</h3>
              <div className="sum-row"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
              <div className="sum-row"><span>Shipping</span><span>Free</span></div>
              <hr />
              <div className="sum-row total"><span>Total</span><span>${subtotal.toFixed(2)}</span></div>
              <Link href="/checkout" className="checkout-btn">Proceed to Checkout →</Link>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}