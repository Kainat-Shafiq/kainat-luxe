import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';
import '../../styles/about.css';

export default function AboutPage() {
  return (
    <div className="about-page">
      <Navbar />
      <section className="about-hero">
        <img src="/images/about-hero.jpg" alt="About Us" />
        <div className="about-hero-text">
          <h1>About Us</h1>
          <p><Link href="/">Home</Link> / About Us</p>
        </div>
      </section>

      <section className="our-story">
        <img src="/images/about-story.jpg" alt="Our Story" />
        <div className="story-text">
          <h2>Our Story</h2>
          <p>Kainat Luxe was born from a simple idea — that every woman deserves to feel confident, elegant and beautiful. We create timeless pieces that blend modern style with traditional craftsmanship.</p>
        </div>
      </section>

      <section className="features-section">
        <div className="feature-card">
          <div className="icon-circle"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#B08D3E" strokeWidth="1.5"><path d="M6 3h12l4 6-10 12L2 9l4-6z"/><path d="M2 9h20M12 21L8 9l2.5-6M12 21l4-12-2.5-6"/></svg></div>
          <h3>Quality Materials</h3>
          <p>Premium fabrics for lasting comfort</p>
        </div>
        <div className="feature-card">
          <div className="icon-circle"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#B08D3E" strokeWidth="1.5"><path d="M3 7h11v8H3zM14 10h4l3 3v2h-7z"/><circle cx="7" cy="17" r="1.6"/><circle cx="17" cy="17" r="1.6"/></svg></div>
          <h3>Fast & Reliable Shipping</h3>
          <p>Careful packaging, on-time delivery</p>
        </div>
        <div className="feature-card">
          <div className="icon-circle"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#B08D3E" strokeWidth="1.5"><path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z"/><path d="M9 12l2 2 4-4"/></svg></div>
          <h3>Customer First</h3>
          <p>Your satisfaction is our priority</p>
        </div>
      </section>

      <section className="quote-banner">
        <img src="/images/about-quote.jpg" alt="Kainat Luxe" />
        <div className="quote-text">
          <h2>Fashion is not just what you wear,<br/>it's how you feel.</h2>
          <p>— Kainat Luxe</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}