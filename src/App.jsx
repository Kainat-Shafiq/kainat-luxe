import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import CartPage from "./pages/CartPage";
import { CartProvider } from "./context/CartContext";
import "./styles/global.css";

export default function App() {
  return (
    <CartProvider><BrowserRouter><Navbar /><Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes><Footer /></BrowserRouter></CartProvider>
  );
}
