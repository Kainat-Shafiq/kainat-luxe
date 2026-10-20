import "../styles/Hero.css";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero" style={{backgroundImage: "url(/images/hero-banner.jpg)"}}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Elegance in <br /> Every Detail</h1>
        <p>Discover timeless fashion pieces designed for the modern woman.</p>
        <Link href="/shop" className="hero-btn">Shop Now <span>→</span></Link>
      </div>
    </section>
  );
}