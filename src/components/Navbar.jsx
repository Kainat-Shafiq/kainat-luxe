"use client";
import { useCart } from "../context/CartContext";
import "../styles/Navbar.css";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const { cart } = useCart();
  const [showMenu, setShowMenu] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);
  const totalItems = cart ? cart.reduce((sum, item) => sum + (item.qty || 1), 0) : 0;

  return (
    <nav className="navbar">
      <Link href="/" className="logo">KAINAT LUXE</Link>
      <div className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className="nav-icons">
        <Link href="/shop">⌕</Link>
        <Link href="/wishlist">♡</Link>
        <Link href="/cart" className="cart-icon">🛍️{mounted && totalItems > 0 && <span className="cart-count">{totalItems}</span>}</Link>
        <div className="profile-wrap">
          <span onClick={() => setShowMenu(!showMenu)}>👤</span>
          {showMenu && (
            <div className="profile-menu">
              <Link href="/login?mode=login" onClick={() => setShowMenu(false)}>Login</Link>
              <Link href="/login?mode=register" onClick={() => setShowMenu(false)}>Create Account</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}