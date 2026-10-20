import { useCart } from "../context/CartContext";
export default function CartPage() {
  const { cart = [], removeFromCart = () => {} } = useCart() || {};
  const total = cart.reduce((sum, i) => sum + i.price, 0);
  return (
    <div style={{padding: "40px", color: "white"}}>
      <h2>Your Cart</h2>
      {cart.map((item, i) => <div key={i}>{item.name} - Rs. {item.price} <button onClick={() => removeFromCart(item.id)}>Remove</button></div>)}
      <h3>Total: Rs. {total.toLocaleString()}</h3>
    </div>
  );
}