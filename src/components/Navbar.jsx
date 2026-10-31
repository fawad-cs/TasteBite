import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cart } = useCart();

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  function closeMenu() {
    setMenuOpen(false);
  }

  const navClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <header className="site-header">
      <nav className="navbar">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          TASTE <span>BITE.</span>
        </Link>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          <NavLink to="/" end className={navClass} onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/about" className={navClass} onClick={closeMenu}>
            About
          </NavLink>

          <NavLink to="/menu" className={navClass} onClick={closeMenu}>
            Menu
          </NavLink>

          <NavLink
            to="/reservation"
            className={navClass}
            onClick={closeMenu}
          >
            Reservation
          </NavLink>

          <NavLink
            to="/contact"
            className={navClass}
            onClick={closeMenu}
          >
            Contact
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? "nav-link cart-link active" : "nav-link cart-link"
            }
            onClick={closeMenu}
          >
            🛒 Cart
            <span className="cart-badge">{cartCount}</span>
          </NavLink>

          <Link
            to="/reservation"
            className="nav-book-btn"
            onClick={closeMenu}
          >
            Book a Table ↗
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;