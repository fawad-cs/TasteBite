import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="tastebite-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            TASTE <span>BITE.</span>
          </Link>

          <p>
            Great food, warm hospitality, and unforgettable moments.
            Join us for a delicious experience.
          </p>

          <div className="footer-socials">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">IG</a>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">FB</a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube">YT</a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/menu">Our Menu</Link>
          <Link to="/reservation">Reservation</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-links">
          <h3>Opening Hours</h3>
          <p>Monday – Friday</p>
          <span>12:00 PM – 11:00 PM</span>
          <p>Saturday – Sunday</p>
          <span>12:00 PM – 12:00 AM</span>
        </div>

        <div className="footer-links">
          <h3>Get In Touch</h3>
          <p>Phone</p>
          <span>+92 300 1234567</span>
          <p>Email</p>
          <span>hello@tastebite.example</span>
          <Link to="/reservation" className="footer-book-btn">
            Book a Table ↗
          </Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} TasteBite. All rights reserved.</p>
        <Link to="/menu">Explore Our Menu ↗</Link>
      </div>
    </footer>
  );
}

export default Footer;