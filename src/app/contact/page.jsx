import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import '../../styles/contact.css';

export default function ContactPage() {
  return (
    <div className="contact-page">
      <Navbar />

      <section className="contact-container">
        <div className="contact-left">
          <h1>Get in Touch</h1>
          <p>We'd love to hear from you! Whether you have a question, feedback or need assistance, our team is here to help.</p>

          <div className="contact-info">
            <div className="info-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>
            </div>
            <div>
              <h3>Email</h3>
              <p>hello@kainatluxe.com</p>
            </div>
          </div>

          <div className="contact-info">
            <div className="info-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            <div>
              <h3>Phone</h3>
              <p>+92 300 1234567</p>
            </div>
          </div>

          <div className="contact-info">
            <div className="info-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div>
              <h3>Address</h3>
              <p>Karachi, Pakistan</p>
            </div>
          </div>
        </div>

        <div className="contact-form-card">
          <h2>Send Us a Message</h2>
          <form>
            <label>Name<span>*</span></label>
            <input type="text" placeholder="Enter your name" required />

            <label>Email<span>*</span></label>
            <input type="email" placeholder="Enter your email" required />

            <label>Message<span>*</span></label>
            <textarea placeholder="Enter your message" rows="5" required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>

      <section className="map-section">
        <iframe src="https://www.google.com/maps?q=Karachi,Pakistan&output=embed" loading="lazy"></iframe>
        <div className="map-pin-label">Karachi, Pakistan</div>
      </section>

      <Footer />
    </div>
  );
}