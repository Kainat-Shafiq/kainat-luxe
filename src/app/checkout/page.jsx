'use client'
import Navbar from '@/components/Navbar';
import '../../styles/checkout.css'
import Link from 'next/link'
export default function CheckoutPage() {
  return (
    
    <div className="checkout-page">
     
      <Navbar />
      <div className="checkout-container">
        <div className="shipping-box">
          <h2>Shipping Information</h2>
          <form onSubmit={(e)=>{e.preventDefault(); alert('Go to Payment')}}>
            <label>Full Name*</label>
            <input required placeholder="Enter your name" />
            <label>Email Address*</label>
            <input required type="email" placeholder="Enter your email" />
            <label>Phone Number*</label>
            <input required placeholder="Enter your phone number" />
            <label>Address*</label>
            <input required placeholder="Enter address" />
            <div className="row">
              <div><label>City*</label><input required placeholder="Enter city" /></div>
              <div><label>Postal Code*</label><input required placeholder="Enter postal code" /></div>
            </div>
            <label className="checkbox"><input type="checkbox" /> Save this information for next time</label>
            <button className="pay-btn" type="submit">Continue to Payment →</button>
          </form>
        </div>

        <div className="summary-box">
          <h2>Order Summary</h2>
          <div className="item"><img src="/images/detail-main.jpg" /><div><p>Black Embroidered Dress</p><b>$59.99</b></div></div>
          <div className="item"><img src="/images/shop-2.jpg" /><div><p>Beige Co-ord Set</p><b>$44.99</b></div></div>
          <div className="item"><img src="/images/shop-5.jpg" /><div><p>White Shirt</p><b>$34.99</b></div></div>
          <hr/>
          <div className="line"><span>Subtotal</span><span>$139.97</span></div>
          <div className="line"><span>Shipping</span><span>Free</span></div>
          <div className="line total"><span>Total</span><span>$139.97</span></div>
        </div>
      </div>
    </div>
  )
}